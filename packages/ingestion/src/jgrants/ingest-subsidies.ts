import { PrismaClient } from "@prisma/client";
import { JGrantsClient } from "./client";
import { normalizeDetailItem, parseRegions } from "./normalize";
import { logger } from "../utils/logger";

const prisma = new PrismaClient();

const KEYWORDS = [
	"補助金",
	"助成金",
	"支援金",
	"交付金",
	"給付金",
	"事業",
	"設備",
	"雇用",
	"IT",
	"創業",
];

const DELAY_MS = 150;

function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
	const client = new JGrantsClient();
	const run = await prisma.ingestionRun.create({
		data: { source: "jgrants_v1" },
	});

	const seenIds = new Set<string>();
	let totalCreated = 0;
	let totalUpdated = 0;
	let totalErrors = 0;

	// Cache region name -> id mapping
	const regionMap = new Map<string, string>();
	const regions = await prisma.region.findMany();
	for (const r of regions) {
		regionMap.set(r.name, r.id);
	}

	for (const keyword of KEYWORDS) {
		logger.info(`Searching keyword: "${keyword}"`);
		let page = 1;
		let hasMore = true;

		while (hasMore) {
			try {
				const response = await client.searchSubsidies({
					keyword,
					acceptance: "all",
					page,
					per_page: 100,
				});

				if (!response.result || response.result.length === 0) {
					hasMore = false;
					break;
				}

				for (const item of response.result) {
					if (seenIds.has(item.id)) continue;
					seenIds.add(item.id);

					try {
						await sleep(DELAY_MS);
						const detail = await client.getSubsidyDetail(item.id);
						const data = normalizeDetailItem(detail);

						// Upsert subsidy
						const existing = await prisma.subsidy.findUnique({
							where: { externalId: item.id },
						});

						if (existing) {
							await prisma.subsidy.update({
								where: { externalId: item.id },
								data: { ...data, lastSyncedAt: new Date() },
							});
							totalUpdated++;
						} else {
							const subsidy = await prisma.subsidy.create({ data });

							// Link regions
							const regionNames = parseRegions(item.target_area_search);
							for (const name of regionNames) {
								const regionId = regionMap.get(name);
								if (regionId) {
									await prisma.subsidyRegion.create({
										data: { subsidyId: subsidy.id, regionId },
									}).catch(() => {}); // Ignore duplicate
								}
							}

							totalCreated++;
						}
					} catch (err) {
						totalErrors++;
						logger.error(`Failed to process ${item.id}: ${err}`);
					}
				}

				hasMore = response.result.length >= 100;
				page++;
			} catch (err) {
				logger.error(`Search failed for "${keyword}" page ${page}: ${err}`);
				hasMore = false;
				totalErrors++;
			}
		}
	}

	await prisma.ingestionRun.update({
		where: { id: run.id },
		data: {
			status: "COMPLETED",
			totalFetched: seenIds.size,
			totalCreated,
			totalUpdated,
			totalErrors,
			completedAt: new Date(),
		},
	});

	logger.info(
		`Ingestion complete: ${seenIds.size} fetched, ${totalCreated} created, ${totalUpdated} updated, ${totalErrors} errors`,
	);

	await prisma.$disconnect();
}

main().catch((err) => {
	logger.error(`Ingestion failed: ${err}`);
	process.exit(1);
});

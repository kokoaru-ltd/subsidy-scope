import { PrismaClient } from "@prisma/client";
import { logger } from "../utils/logger";

const prisma = new PrismaClient();

async function main() {
	const today = new Date();
	today.setHours(0, 0, 0, 0);

	const [totalCount, activeCount, totalMaxAmount] = await Promise.all([
		prisma.subsidy.count(),
		prisma.subsidy.count({ where: { status: "ACTIVE" } }),
		prisma.subsidy.aggregate({ _sum: { subsidyMaxLimit: true } }),
	]);

	await prisma.subsidyStats.upsert({
		where: { date: today },
		create: {
			date: today,
			totalCount,
			activeCount,
			totalMaxAmount: totalMaxAmount._sum.subsidyMaxLimit ?? BigInt(0),
		},
		update: {
			totalCount,
			activeCount,
			totalMaxAmount: totalMaxAmount._sum.subsidyMaxLimit ?? BigInt(0),
		},
	});

	logger.info(`Stats computed: total=${totalCount}, active=${activeCount}`);
	await prisma.$disconnect();
}

main().catch((err) => {
	logger.error(`Stats computation failed: ${err}`);
	process.exit(1);
});

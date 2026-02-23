import { notFound } from "next/navigation";
import {
	Card,
	Badge,
	Button,
	SubsidyCard,
	DeadlineBadge,
	ScrollReveal,
	FadeIn,
	StaggerGrid,
	StaggerItem,
} from "@subsidy-scope/ui";
import { Nav } from "@/components/nav";
import { formatYen, formatDateJP, daysUntil } from "@/lib/format";
import { getSubsidyById, getRelatedSubsidies, mockSubsidies } from "@/lib/mock-data";

export function generateStaticParams() {
	return mockSubsidies.map((s) => ({ id: s.id }));
}

const statusVariant: Record<
	string,
	"active" | "upcoming" | "closed" | "archived"
> = {
	ACTIVE: "active",
	UPCOMING: "upcoming",
	CLOSED: "closed",
	ARCHIVED: "archived",
};

const statusLabel: Record<string, string> = {
	ACTIVE: "受付中",
	UPCOMING: "近日開始",
	CLOSED: "受付終了",
	ARCHIVED: "終了",
};

export default async function SubsidyDetailPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const subsidy = getSubsidyById(id);

	if (!subsidy) {
		notFound();
	}

	const related = getRelatedSubsidies(id, 3);
	const days = daysUntil(subsidy.acceptanceEndDatetime);

	return (
		<>
			<Nav />
			<div className="h-20" />
			<div className="min-h-screen max-w-5xl mx-auto px-6 py-8">
				<FadeIn>
					<nav className="flex items-center gap-2 text-sm text-[var(--text-dim)] mb-6">
						<a
							href="/"
							className="hover:text-[var(--text-secondary)] transition-colors"
						>
							ホーム
						</a>
						<span>/</span>
						<a
							href="/search"
							className="hover:text-[var(--text-secondary)] transition-colors"
						>
							検索
						</a>
						<span>/</span>
						<span className="text-[var(--text-secondary)] truncate max-w-[200px]">
							{subsidy.title}
						</span>
					</nav>
				</FadeIn>

				<FadeIn delay={0.1}>
					<Card className="mb-8">
						<div className="flex flex-col gap-4 mb-6">
							<div className="flex items-start justify-between gap-4">
								<h1 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] leading-tight">
									{subsidy.title}
								</h1>
								<Badge variant={statusVariant[subsidy.status]}>
									{statusLabel[subsidy.status]}
								</Badge>
							</div>

							<div className="flex items-baseline gap-2">
								<span className="text-sm text-[var(--text-secondary)]">
									補助上限額
								</span>
								<span className="text-3xl md:text-4xl font-bold text-[var(--accent)]">
									{formatYen(subsidy.subsidyMaxLimit)}
								</span>
							</div>
						</div>

						<div className="border-t border-[var(--border)] my-6" />

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
							<div className="space-y-4">
								<div>
									<dt className="text-xs text-[var(--text-dim)] uppercase tracking-wider mb-1">
										受付期間
									</dt>
									<dd className="text-sm text-[var(--text-primary)]">
										{formatDateJP(subsidy.acceptanceStartDatetime)} ~{" "}
										{formatDateJP(subsidy.acceptanceEndDatetime)}
									</dd>
								</div>
								<div>
									<dt className="text-xs text-[var(--text-dim)] uppercase tracking-wider mb-1">
										締切まで
									</dt>
									<dd>
										<DeadlineBadge
											deadline={subsidy.acceptanceEndDatetime}
										/>
										{days !== null && days > 0 && (
											<span className="text-sm text-[var(--text-secondary)] ml-2">
												({formatDateJP(subsidy.acceptanceEndDatetime)})
											</span>
										)}
									</dd>
								</div>
							</div>

							<div className="space-y-4">
								{subsidy.subsidyRate && (
									<div>
										<dt className="text-xs text-[var(--text-dim)] uppercase tracking-wider mb-1">
											補助率
										</dt>
										<dd className="text-sm text-[var(--text-primary)] font-medium">
											{subsidy.subsidyRate}
										</dd>
									</div>
								)}
								<div>
									<dt className="text-xs text-[var(--text-dim)] uppercase tracking-wider mb-1">
										カテゴリ
									</dt>
									<dd>
										<Badge>{subsidy.category}</Badge>
									</dd>
								</div>
								<div>
									<dt className="text-xs text-[var(--text-dim)] uppercase tracking-wider mb-1">
										対象地域
									</dt>
									<dd className="flex gap-2 flex-wrap">
										{subsidy.regions.map((region) => (
											<span
												key={region}
												className="text-sm px-3 py-1 rounded-md bg-[var(--glass-bg)] text-[var(--text-secondary)] border border-[var(--glass-border)]"
											>
												{region}
											</span>
										))}
									</dd>
								</div>
							</div>
						</div>

						<div className="border-t border-[var(--border)] my-6" />

						<div className="mb-8">
							<h2 className="text-sm font-semibold text-[var(--text-primary)] mb-3">
								概要
							</h2>
							<p className="text-sm text-[var(--text-secondary)] leading-relaxed">
								{subsidy.description}
							</p>
						</div>

						<div className="flex flex-wrap gap-3">
							<a
								href={subsidy.url}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button size="lg">
									公式サイトで詳細を見る
									<svg
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										className="ml-1"
									>
										<path d="M7 17L17 7" strokeLinecap="round" />
										<path
											d="M7 7h10v10"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</Button>
							</a>
							<a href="/search">
								<Button variant="secondary" size="lg">
									検索に戻る
								</Button>
							</a>
						</div>
					</Card>
				</FadeIn>

				{related.length > 0 && (
					<section className="mt-12">
						<ScrollReveal>
							<h2 className="text-xl font-bold mb-6">関連する補助金</h2>
						</ScrollReveal>
						<StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-5">
							{related.map((s) => (
								<StaggerItem key={s.id}>
									<SubsidyCard
										id={s.id}
										title={s.title}
										subsidyMaxLimit={s.subsidyMaxLimit}
										acceptanceEndDatetime={s.acceptanceEndDatetime}
										status={s.status}
										regions={s.regions}
										category={s.category}
										href={`/subsidy/${s.id}`}
										url={s.url}
									/>
								</StaggerItem>
							))}
						</StaggerGrid>
					</section>
				)}
			</div>
		</>
	);
}

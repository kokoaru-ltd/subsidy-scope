"use client";

import { GlowCard } from "./glow-card";
import { Badge } from "./badge";
import { DeadlineBadge } from "./deadline-badge";

interface SubsidyCardProps {
	id: string;
	title: string;
	description?: string;
	subsidyMaxLimit: number | null;
	subsidyRate?: string | null;
	acceptanceEndDatetime: string | null;
	status: "ACTIVE" | "UPCOMING" | "CLOSED" | "ARCHIVED";
	regions?: string[];
	category?: string;
	href?: string;
	url?: string;
}

function formatYen(amount: number | null): string {
	if (amount === null) return "金額未定";
	if (amount >= 100_000_000) return `${(amount / 100_000_000).toFixed(1).replace(/\.0$/, "")}億円`;
	if (amount >= 10_000) return `${Math.round(amount / 10_000).toLocaleString()}万円`;
	return `${amount.toLocaleString()}円`;
}

const statusVariant: Record<string, "active" | "upcoming" | "closed" | "archived"> = {
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

export function SubsidyCard({
	id,
	title,
	description,
	subsidyMaxLimit,
	subsidyRate,
	acceptanceEndDatetime,
	status,
	regions = [],
	category,
	href,
	url,
}: SubsidyCardProps) {
	const Wrapper = href ? "a" : "div";

	return (
		<Wrapper href={href}>
			<GlowCard className="h-full flex flex-col gap-4 cursor-pointer">
				{/* Header: status + category */}
				<div className="flex items-center gap-2 flex-wrap">
					<Badge variant={statusVariant[status]}>{statusLabel[status]}</Badge>
					{category && <Badge>{category}</Badge>}
					{regions.length > 0 && regions.slice(0, 3).map((r) => (
						<span
							key={r}
							className="text-xs px-2 py-0.5 rounded bg-[var(--glass-bg)] text-[var(--text-dim)] border border-[var(--glass-border)]"
						>
							{r}
						</span>
					))}
					{regions.length > 3 && (
						<span className="text-xs text-[var(--text-dim)]">
							+{regions.length - 3}
						</span>
					)}
				</div>

				{/* Title */}
				<h3 className="text-base font-semibold text-[var(--text-primary)] leading-snug line-clamp-3">
					{title}
				</h3>

				{/* Description */}
				{description && (
					<p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">
						{description}
					</p>
				)}

				{/* Amount + Rate */}
				<div className="flex items-baseline gap-3 min-w-0">
					<span className="text-2xl font-bold text-[var(--accent)] shrink-0">
						{formatYen(subsidyMaxLimit)}
					</span>
					{subsidyRate && (
						<span className="text-xs text-[var(--text-dim)] bg-[var(--glass-bg)] px-2 py-1 rounded border border-[var(--glass-border)] truncate max-w-[180px]">
							補助率 {subsidyRate}
						</span>
					)}
				</div>

				{/* Deadline */}
				<div>
					<DeadlineBadge deadline={acceptanceEndDatetime} />
				</div>

				{/* Footer: link */}
				{url && (
					<div className="mt-auto pt-3 border-t border-[var(--glass-border)]">
						<span
							className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--accent)] hover:underline"
							onClick={(e) => e.stopPropagation()}
						>
							<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
								<polyline points="15 3 21 3 21 9" />
								<line x1="10" y1="14" x2="21" y2="3" />
							</svg>
							公式サイトで詳細を見る
						</span>
					</div>
				)}
			</GlowCard>
		</Wrapper>
	);
}

"use client";

import { GlowCard } from "./glow-card";
import { Badge } from "./badge";
import { DeadlineBadge } from "./deadline-badge";

interface SubsidyCardProps {
	id: string;
	title: string;
	subsidyMaxLimit: number | null;
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
	subsidyMaxLimit,
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
			<GlowCard className="h-full flex flex-col gap-3 cursor-pointer">
				<div className="flex items-start justify-between gap-2">
					<h3 className="text-sm font-medium text-[var(--text-primary)] line-clamp-2 flex-1">
						{title}
					</h3>
					<Badge variant={statusVariant[status]}>{statusLabel[status]}</Badge>
				</div>

				<div className="text-2xl font-bold text-[var(--accent)]">
					{formatYen(subsidyMaxLimit)}
				</div>

				<div className="flex items-center gap-2 flex-wrap">
					<DeadlineBadge deadline={acceptanceEndDatetime} />
					{category && (
						<Badge>{category}</Badge>
					)}
				</div>

				{regions.length > 0 && (
					<div className="flex gap-1 flex-wrap">
						{regions.slice(0, 3).map((r) => (
							<span
								key={r}
								className="text-xs px-2 py-0.5 rounded bg-[var(--glass-bg)] text-[var(--text-dim)] border border-[var(--glass-border)]"
							>
								{r}
							</span>
						))}
						{regions.length > 3 && (
							<span className="text-xs text-[var(--text-dim)]">+{regions.length - 3}</span>
						)}
					</div>
				)}

				{url && (
					<div className="mt-auto pt-2 border-t border-[var(--glass-border)]">
						<span
							className="inline-flex items-center gap-1 text-xs text-[var(--accent)] hover:underline"
							onClick={(e) => e.stopPropagation()}
						>
							<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
								<polyline points="15 3 21 3 21 9" />
								<line x1="10" y1="14" x2="21" y2="3" />
							</svg>
							jGrants
						</span>
					</div>
				)}
			</GlowCard>
		</Wrapper>
	);
}

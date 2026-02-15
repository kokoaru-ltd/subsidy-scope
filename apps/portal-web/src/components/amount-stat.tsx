"use client";

import { AnimatedCounter } from "@subsidy-scope/ui/animated-counter";

export function AmountStat() {
	return (
		<div className="flex flex-col gap-1">
			<span className="text-xs text-[var(--text-dim)] uppercase tracking-wider">
				総額
			</span>
			<span className="text-2xl font-bold text-[var(--text-primary)]">
				<AnimatedCounter value={1.2} formatFn={(n) => n.toFixed(1)} />
				兆円
			</span>
		</div>
	);
}

"use client";

import { AnimatedCounter } from "./animated-counter";

interface StatProps {
	label: string;
	value: number;
	suffix?: string;
	prefix?: string;
}

export function Stat({ label, value, suffix, prefix }: StatProps) {
	return (
		<div className="flex flex-col gap-1">
			<span className="text-xs text-[var(--text-dim)] uppercase tracking-wider">{label}</span>
			<span className="text-2xl font-bold text-[var(--text-primary)]">
				{prefix}
				<AnimatedCounter value={value} />
				{suffix}
			</span>
		</div>
	);
}

interface DeadlineBadgeProps {
	deadline: Date | string | null;
}

export function DeadlineBadge({ deadline }: DeadlineBadgeProps) {
	if (!deadline) {
		return (
			<span className="inline-flex items-center px-2 py-0.5 text-xs rounded-full bg-[var(--glass-bg)] text-[var(--text-dim)] border border-[var(--glass-border)]">
				期限未定
			</span>
		);
	}

	const target = new Date(deadline);
	const now = new Date();
	const days = Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

	if (days < 0) {
		return (
			<span className="inline-flex items-center px-2 py-0.5 text-xs rounded-full bg-[rgba(107,114,128,0.1)] text-[var(--status-archived)] border border-[rgba(107,114,128,0.2)]">
				受付終了
			</span>
		);
	}

	if (days <= 7) {
		return (
			<span className="inline-flex items-center px-2 py-0.5 text-xs rounded-full bg-[rgba(239,68,68,0.1)] text-[var(--status-closed)] border border-[rgba(239,68,68,0.2)] animate-pulse">
				残り{days}日
			</span>
		);
	}

	if (days <= 30) {
		return (
			<span className="inline-flex items-center px-2 py-0.5 text-xs rounded-full bg-[rgba(251,191,36,0.1)] text-[var(--status-upcoming)] border border-[rgba(251,191,36,0.2)]">
				残り{days}日
			</span>
		);
	}

	return (
		<span className="inline-flex items-center px-2 py-0.5 text-xs rounded-full bg-[rgba(59,130,246,0.1)] text-[var(--status-active)] border border-[rgba(59,130,246,0.2)]">
			残り{days}日
		</span>
	);
}

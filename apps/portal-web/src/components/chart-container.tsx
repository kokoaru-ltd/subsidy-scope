export function ChartContainer({
	title,
	children,
	className,
}: {
	title: string;
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div
			className={`rounded-xl border border-[var(--glass-border)] bg-[var(--bg-card)] backdrop-blur-[var(--glass-blur)] p-6 ${className ?? ""}`}
		>
			<h3 className="text-sm font-medium text-[var(--text-secondary)] mb-4">
				{title}
			</h3>
			{children}
		</div>
	);
}

interface SkeletonProps {
	className?: string;
}

export function Skeleton({ className = "" }: SkeletonProps) {
	return (
		<div
			className={`animate-pulse rounded-md bg-[var(--glass-bg)] ${className}`}
		/>
	);
}

export function SkeletonCard() {
	return (
		<div className="rounded-xl border border-[var(--glass-border)] bg-[var(--bg-card)] p-6 space-y-4">
			<Skeleton className="h-5 w-3/4" />
			<Skeleton className="h-4 w-1/2" />
			<div className="flex gap-2">
				<Skeleton className="h-6 w-16 rounded-full" />
				<Skeleton className="h-6 w-20 rounded-full" />
			</div>
			<Skeleton className="h-8 w-1/3" />
		</div>
	);
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
	return (
		<div className="space-y-2">
			{Array.from({ length: lines }).map((_, i) => (
				<Skeleton
					key={i}
					className={`h-4 ${i === lines - 1 ? "w-2/3" : "w-full"}`}
				/>
			))}
		</div>
	);
}

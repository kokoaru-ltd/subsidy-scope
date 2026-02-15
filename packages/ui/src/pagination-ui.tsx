"use client";

interface PaginationUIProps {
	page: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

export function PaginationUI({ page, totalPages, onPageChange }: PaginationUIProps) {
	if (totalPages <= 1) return null;

	const pages: (number | "...")[] = [];
	for (let i = 1; i <= totalPages; i++) {
		if (i === 1 || i === totalPages || (i >= page - 1 && i <= page + 1)) {
			pages.push(i);
		} else if (pages[pages.length - 1] !== "...") {
			pages.push("...");
		}
	}

	return (
		<div className="flex items-center justify-center gap-1">
			<button
				type="button"
				disabled={page <= 1}
				onClick={() => onPageChange(page - 1)}
				className="px-3 py-1.5 text-sm rounded-md text-[var(--text-secondary)] hover:bg-[var(--glass-bg)] disabled:opacity-30 disabled:cursor-not-allowed"
			>
				前へ
			</button>
			{pages.map((p, i) =>
				p === "..." ? (
					<span key={`ellipsis-${i}`} className="px-2 text-[var(--text-dim)]">
						...
					</span>
				) : (
					<button
						key={p}
						type="button"
						onClick={() => onPageChange(p)}
						className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
							p === page
								? "bg-[var(--accent)] text-[#0a0e17] font-medium"
								: "text-[var(--text-secondary)] hover:bg-[var(--glass-bg)]"
						}`}
					>
						{p}
					</button>
				),
			)}
			<button
				type="button"
				disabled={page >= totalPages}
				onClick={() => onPageChange(page + 1)}
				className="px-3 py-1.5 text-sm rounded-md text-[var(--text-secondary)] hover:bg-[var(--glass-bg)] disabled:opacity-30 disabled:cursor-not-allowed"
			>
				次へ
			</button>
		</div>
	);
}

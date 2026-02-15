import type { ReactNode } from "react";

interface Column<T> {
	key: string;
	header: string;
	render: (item: T) => ReactNode;
	className?: string;
}

interface DataTableProps<T> {
	columns: Column<T>[];
	data: T[];
	keyExtractor: (item: T) => string;
	emptyMessage?: string;
}

export function DataTable<T>({
	columns,
	data,
	keyExtractor,
	emptyMessage = "データがありません",
}: DataTableProps<T>) {
	if (data.length === 0) {
		return (
			<div className="text-center py-12 text-[var(--text-dim)]">
				{emptyMessage}
			</div>
		);
	}

	return (
		<div className="overflow-x-auto">
			<table className="w-full">
				<thead>
					<tr className="border-b border-[var(--border)]">
						{columns.map((col) => (
							<th
								key={col.key}
								className={`text-left text-xs font-medium text-[var(--text-dim)] uppercase tracking-wider px-4 py-3 ${col.className ?? ""}`}
							>
								{col.header}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((item) => (
						<tr
							key={keyExtractor(item)}
							className="border-b border-[var(--border)] hover:bg-[var(--glass-bg)] transition-colors"
						>
							{columns.map((col) => (
								<td
									key={col.key}
									className={`px-4 py-3 text-sm text-[var(--text-primary)] ${col.className ?? ""}`}
								>
									{col.render(item)}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

"use client";

import { prefectureTableData } from "@/lib/analytics-data";
import { ChartContainer } from "./chart-container";

export function PrefectureTable() {
	return (
		<ChartContainer title="都道府県別補助金一覧">
			<div className="overflow-x-auto">
				<table className="w-full text-sm">
					<thead>
						<tr className="border-b border-[var(--border)]">
							<th className="text-left py-3 px-4 text-[var(--text-dim)] font-medium text-xs uppercase tracking-wider">
								順位
							</th>
							<th className="text-left py-3 px-4 text-[var(--text-dim)] font-medium text-xs uppercase tracking-wider">
								都道府県
							</th>
							<th className="text-right py-3 px-4 text-[var(--text-dim)] font-medium text-xs uppercase tracking-wider">
								補助金数
							</th>
							<th className="text-right py-3 px-4 text-[var(--text-dim)] font-medium text-xs uppercase tracking-wider">
								受付中
							</th>
							<th className="text-right py-3 px-4 text-[var(--text-dim)] font-medium text-xs uppercase tracking-wider">
								総額
							</th>
						</tr>
					</thead>
					<tbody>
						{prefectureTableData.map((row) => (
							<tr
								key={row.rank}
								className="border-b border-[var(--border)] hover:bg-[var(--glass-bg)] transition-colors"
							>
								<td className="py-3 px-4">
									<span
										className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
											row.rank <= 3
												? "bg-[var(--accent-subtle)] text-[var(--accent)]"
												: "text-[var(--text-dim)]"
										}`}
									>
										{row.rank}
									</span>
								</td>
								<td className="py-3 px-4 text-[var(--text-primary)] font-medium">
									{row.name}
								</td>
								<td className="py-3 px-4 text-right text-[var(--text-primary)]">
									{row.count}
									<span className="text-[var(--text-dim)] ml-1">件</span>
								</td>
								<td className="py-3 px-4 text-right">
									<span className="text-[var(--accent)]">
										{row.activeCount}
									</span>
									<span className="text-[var(--text-dim)] ml-1">件</span>
								</td>
								<td className="py-3 px-4 text-right text-[var(--text-secondary)]">
									{row.totalAmount}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</ChartContainer>
	);
}

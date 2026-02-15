"use client";

import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	type TooltipProps,
} from "recharts";
import { chartTheme, tooltipStyle } from "@/lib/chart-config";
import { monthlyTrendData } from "@/lib/analytics-data";
import { ChartContainer } from "./chart-container";

function formatBillion(value: number): string {
	return `${(value / 100000000000).toFixed(1)}千億`;
}

function CustomTooltip({
	active,
	payload,
	label,
}: TooltipProps<number, string>) {
	if (!active || !payload?.length) return null;
	const amount = payload[0].value as number;
	return (
		<div style={tooltipStyle} className="px-4 py-3 shadow-xl">
			<p className="text-xs text-[var(--text-dim)] mb-1">{label}</p>
			<p
				className="text-sm font-semibold"
				style={{ color: chartTheme.colors[1] }}
			>
				{(amount / 1000000000000).toFixed(2)}兆円
			</p>
		</div>
	);
}

export function AmountChart() {
	return (
		<ChartContainer title="月別総額推移">
			<ResponsiveContainer width="100%" height={300}>
				<AreaChart
					data={monthlyTrendData}
					margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
				>
					<defs>
						<linearGradient
							id="amountGradient"
							x1="0"
							y1="0"
							x2="0"
							y2="1"
						>
							<stop
								offset="0%"
								stopColor={chartTheme.colors[1]}
								stopOpacity={0.4}
							/>
							<stop
								offset="50%"
								stopColor={chartTheme.colors[1]}
								stopOpacity={0.1}
							/>
							<stop
								offset="100%"
								stopColor={chartTheme.colors[1]}
								stopOpacity={0}
							/>
						</linearGradient>
					</defs>
					<CartesianGrid
						stroke={chartTheme.gridColor}
						strokeDasharray="3 3"
						vertical={false}
					/>
					<XAxis
						dataKey="month"
						tick={{ fill: chartTheme.textColor, fontSize: 12 }}
						axisLine={{ stroke: chartTheme.gridColor }}
						tickLine={false}
					/>
					<YAxis
						tick={{ fill: chartTheme.textColor, fontSize: 12 }}
						axisLine={false}
						tickLine={false}
						tickFormatter={formatBillion}
						width={60}
					/>
					<Tooltip content={<CustomTooltip />} />
					<Area
						type="monotone"
						dataKey="totalAmount"
						stroke={chartTheme.colors[1]}
						strokeWidth={2}
						fill="url(#amountGradient)"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</ChartContainer>
	);
}

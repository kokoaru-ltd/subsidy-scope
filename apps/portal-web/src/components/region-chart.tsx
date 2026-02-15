"use client";

import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	Cell,
	type TooltipProps,
} from "recharts";
import { chartTheme, tooltipStyle } from "@/lib/chart-config";
import { regionData } from "@/lib/analytics-data";
import { ChartContainer } from "./chart-container";

function CustomTooltip({
	active,
	payload,
	label,
}: TooltipProps<number, string>) {
	if (!active || !payload?.length) return null;
	return (
		<div style={tooltipStyle} className="px-4 py-3 shadow-xl">
			<p className="text-xs text-[var(--text-dim)] mb-1">{label}</p>
			<p
				className="text-sm font-semibold"
				style={{ color: chartTheme.accent }}
			>
				{payload[0].value?.toLocaleString()}件
			</p>
		</div>
	);
}

export function RegionChart() {
	const chartData = regionData.slice(0, 10).slice().reverse();

	return (
		<ChartContainer title="都道府県別補助金件数 TOP10">
			<ResponsiveContainer width="100%" height={400}>
				<BarChart
					data={chartData}
					layout="vertical"
					margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
				>
					<defs>
						<linearGradient
							id="barGradient"
							x1="0"
							y1="0"
							x2="1"
							y2="0"
						>
							<stop
								offset="0%"
								stopColor={chartTheme.accent}
								stopOpacity={0.6}
							/>
							<stop
								offset="100%"
								stopColor={chartTheme.accent}
								stopOpacity={1}
							/>
						</linearGradient>
					</defs>
					<CartesianGrid
						stroke={chartTheme.gridColor}
						strokeDasharray="3 3"
						horizontal={false}
					/>
					<XAxis
						type="number"
						tick={{ fill: chartTheme.textColor, fontSize: 12 }}
						axisLine={{ stroke: chartTheme.gridColor }}
						tickLine={false}
					/>
					<YAxis
						type="category"
						dataKey="name"
						tick={{ fill: chartTheme.textColor, fontSize: 12 }}
						axisLine={false}
						tickLine={false}
						width={70}
					/>
					<Tooltip
						content={<CustomTooltip />}
						cursor={{ fill: "rgba(255,255,255,0.03)" }}
					/>
					<Bar dataKey="count" radius={[0, 4, 4, 0]} maxBarSize={24}>
						{chartData.map((_, index) => (
							<Cell key={`cell-${index}`} fill="url(#barGradient)" />
						))}
					</Bar>
				</BarChart>
			</ResponsiveContainer>
		</ChartContainer>
	);
}

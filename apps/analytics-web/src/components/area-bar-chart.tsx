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
import { areaData } from "@/lib/mock-data";
import { ChartContainer } from "./chart-container";

function CustomTooltip({ active, payload, label }: TooltipProps<number, string>) {
  if (!active || !payload?.length) return null;
  const entry = payload[0].payload as (typeof areaData)[number];
  return (
    <div style={tooltipStyle} className="px-4 py-3 shadow-xl">
      <p className="text-sm font-semibold text-[var(--text-primary)] mb-1">{label}</p>
      <p className="text-sm" style={{ color: chartTheme.accent }}>
        {payload[0].value?.toLocaleString()}件
      </p>
      <p className="text-xs text-[var(--text-dim)] mt-1">{entry.prefectures}</p>
    </div>
  );
}

export function AreaBarChart() {
  const chartData = [...areaData].reverse();

  return (
    <ChartContainer title="エリア別補助金件数">
      <ResponsiveContainer width="100%" height={360}>
        <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id="areaBarGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={chartTheme.accent} stopOpacity={0.5} />
              <stop offset="100%" stopColor={chartTheme.accent} stopOpacity={1} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke={chartTheme.gridColor} strokeDasharray="3 3" horizontal={false} />
          <XAxis
            type="number"
            tick={{ fill: chartTheme.textColor, fontSize: 12 }}
            axisLine={{ stroke: chartTheme.gridColor }}
            tickLine={false}
          />
          <YAxis
            type="category"
            dataKey="area"
            tick={{ fill: chartTheme.textColor, fontSize: 13 }}
            axisLine={false}
            tickLine={false}
            width={100}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,0.03)" }} />
          <Bar dataKey="count" radius={[0, 6, 6, 0]} maxBarSize={32}>
            {chartData.map((_, index) => (
              <Cell key={`cell-${index}`} fill="url(#areaBarGradient)" />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

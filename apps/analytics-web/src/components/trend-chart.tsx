"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  type TooltipProps,
} from "recharts";
import { chartTheme, tooltipStyle } from "@/lib/chart-config";
import { monthlyTrendData } from "@/lib/mock-data";
import { ChartContainer } from "./chart-container";

function CustomTooltip({ active, payload, label }: TooltipProps<number, string>) {
  if (!active || !payload?.length) return null;
  return (
    <div style={tooltipStyle} className="px-4 py-3 shadow-xl">
      <p className="text-xs text-[var(--text-dim)] mb-1">{label}</p>
      <p className="text-sm font-semibold" style={{ color: chartTheme.accent }}>
        {payload[0].value?.toLocaleString()}件
      </p>
    </div>
  );
}

export function TrendChart() {
  return (
    <ChartContainer title="月別補助金件数推移">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={monthlyTrendData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={chartTheme.accent} stopOpacity={0.3} />
              <stop offset="100%" stopColor={chartTheme.accent} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke={chartTheme.gridColor} strokeDasharray="3 3" vertical={false} />
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
            width={40}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="count"
            stroke={chartTheme.accent}
            strokeWidth={2.5}
            dot={{ r: 4, fill: chartTheme.accent, strokeWidth: 0 }}
            activeDot={{ r: 6, fill: chartTheme.accent, stroke: "rgba(0,212,170,0.3)", strokeWidth: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

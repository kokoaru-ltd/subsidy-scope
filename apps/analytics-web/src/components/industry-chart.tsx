"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  type TooltipProps,
} from "recharts";
import { chartTheme, tooltipStyle } from "@/lib/chart-config";
import { industryData } from "@/lib/mock-data";
import { ChartContainer } from "./chart-container";

function CustomTooltip({ active, payload }: TooltipProps<number, string>) {
  if (!active || !payload?.length) return null;
  const entry = payload[0];
  return (
    <div style={tooltipStyle} className="px-4 py-3 shadow-xl">
      <p className="text-xs text-[var(--text-dim)] mb-1">{entry.name}</p>
      <p className="text-sm font-semibold" style={{ color: entry.payload?.fill }}>
        {entry.value}件
      </p>
    </div>
  );
}

const RADIAN = Math.PI / 180;

function renderCustomLabel({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  name,
  percent,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  name: string;
  percent: number;
}) {
  const radius = outerRadius + 24;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  if (percent < 0.06) return null;

  return (
    <text
      x={x}
      y={y}
      fill={chartTheme.textColor}
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={11}
    >
      {name} ({(percent * 100).toFixed(0)}%)
    </text>
  );
}

export function IndustryChart() {
  const total = industryData.reduce((sum, d) => sum + d.value, 0);

  return (
    <ChartContainer title="産業別分布">
      <div className="relative">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={industryData}
              cx="50%"
              cy="50%"
              innerRadius={65}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
              label={renderCustomLabel}
              labelLine={false}
              stroke="none"
            >
              {industryData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={chartTheme.colors[index % chartTheme.colors.length]}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <span className="text-2xl font-bold text-[var(--text-primary)]">{total}</span>
            <br />
            <span className="text-xs text-[var(--text-dim)]">件</span>
          </div>
        </div>
      </div>
    </ChartContainer>
  );
}

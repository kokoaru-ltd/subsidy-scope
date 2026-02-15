import { GlowCard, Stat, FadeIn, ScrollReveal, StaggerGrid, StaggerItem } from "@subsidy-scope/ui";
import { TrendChart } from "@/components/trend-chart";
import { AmountChart } from "@/components/amount-chart";
import { RegionChart } from "@/components/region-chart";
import { IndustryChart } from "@/components/industry-chart";
import { AmountStat } from "@/components/amount-stat";

export default function AnalyticsDashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <FadeIn>
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
            トレンド分析
          </h1>
          <p className="text-[var(--text-secondary)]">
            全国の補助金・助成金データをリアルタイムで可視化。月次推移、地域分布、産業別傾向を一目で把握できます。
          </p>
        </div>
      </FadeIn>

      {/* Stat Cards */}
      <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <StaggerItem>
          <GlowCard>
            <Stat label="総補助金数" value={147} suffix="件" />
          </GlowCard>
        </StaggerItem>
        <StaggerItem>
          <GlowCard glowColor="rgba(59, 130, 246, 0.35)">
            <Stat label="受付中" value={89} suffix="件" />
          </GlowCard>
        </StaggerItem>
        <StaggerItem>
          <GlowCard glowColor="rgba(245, 158, 11, 0.35)">
            <AmountStat />
          </GlowCard>
        </StaggerItem>
        <StaggerItem>
          <GlowCard glowColor="rgba(139, 92, 246, 0.35)">
            <Stat label="平均上限額" value={800} suffix="万円" />
          </GlowCard>
        </StaggerItem>
      </StaggerGrid>

      {/* Row 2: Line + Area charts */}
      <ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <TrendChart />
          <AmountChart />
        </div>
      </ScrollReveal>

      {/* Row 3: Bar + Pie charts */}
      <ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RegionChart />
          <IndustryChart />
        </div>
      </ScrollReveal>
    </div>
  );
}

import { FadeIn, ScrollReveal } from "@subsidy-scope/ui";
import { AreaBarChart } from "@/components/area-bar-chart";
import { PrefectureTable } from "@/components/prefecture-table";

export default function RegionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <FadeIn>
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
            地域別補助金分布
          </h1>
          <p className="text-[var(--text-secondary)]">
            エリア別・都道府県別の補助金件数と総額を比較。地域ごとの支援状況を把握できます。
          </p>
        </div>
      </FadeIn>

      {/* Area bar chart */}
      <ScrollReveal>
        <div className="mb-8">
          <AreaBarChart />
        </div>
      </ScrollReveal>

      {/* Prefecture table */}
      <ScrollReveal>
        <PrefectureTable />
      </ScrollReveal>
    </div>
  );
}

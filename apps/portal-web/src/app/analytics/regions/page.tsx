import { FadeIn, ScrollReveal } from "@subsidy-scope/ui";
import { Nav } from "@/components/nav";
import { AreaBarChart } from "@/components/area-bar-chart";
import { PrefectureTable } from "@/components/prefecture-table";

export const metadata = {
	title: "地域別補助金分布 - SubsidyScope",
	description:
		"エリア別・都道府県別の補助金件数と総額を比較。地域ごとの支援状況を把握。",
};

export default function RegionsPage() {
	return (
		<>
			<Nav />
			<div className="h-20" />
			<div className="max-w-7xl mx-auto px-6 py-12">
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

				<ScrollReveal>
					<div className="mb-8">
						<AreaBarChart />
					</div>
				</ScrollReveal>

				<ScrollReveal>
					<PrefectureTable />
				</ScrollReveal>
			</div>
		</>
	);
}

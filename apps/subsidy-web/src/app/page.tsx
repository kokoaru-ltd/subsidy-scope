"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  SearchInput,
  SubsidyCard,
  FadeIn,
  ScrollReveal,
  StaggerGrid,
  StaggerItem,
} from "@subsidy-scope/ui";
import { mockSubsidies } from "@/lib/mock-data";

const featuredSubsidies = mockSubsidies
  .filter((s) => s.status === "ACTIVE")
  .slice(0, 4);

export default function HomePage() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  function handleSearch(query: string) {
    setKeyword(query);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (keyword.trim()) {
      router.push(`/search?keyword=${encodeURIComponent(keyword.trim())}`);
    } else {
      router.push("/search");
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-6 pt-24 pb-20">
        {/* Background glow effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, rgba(0,212,170,0.15) 0%, transparent 70%)",
            }}
          />
        </div>

        <FadeIn className="relative z-10 flex flex-col items-center gap-6 max-w-2xl w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-center tracking-tight">
            <span className="text-[var(--accent)]">補助金</span>を検索
          </h1>
          <p className="text-[var(--text-secondary)] text-center text-lg max-w-lg">
            日本全国の補助金・助成金情報を横断検索。
            あなたの事業に最適な支援制度を見つけましょう。
          </p>

          <form onSubmit={handleSubmit} className="w-full max-w-xl mt-2">
            <div className="flex gap-3">
              <div className="flex-1">
                <SearchInput
                  value={keyword}
                  placeholder="補助金名、キーワードで検索..."
                  onSearch={handleSearch}
                  debounceMs={0}
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-lg text-sm font-semibold bg-[var(--accent)] text-[#0a0e17] hover:bg-[var(--accent-dim)] transition-colors cursor-pointer whitespace-nowrap"
              >
                検索
              </button>
            </div>
          </form>

          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {["IT導入補助金", "ものづくり補助金", "小規模事業者", "事業再構築"].map(
              (tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => router.push(`/search?keyword=${encodeURIComponent(tag)}`)}
                  className="px-3 py-1 text-xs rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-colors cursor-pointer"
                >
                  {tag}
                </button>
              ),
            )}
          </div>
        </FadeIn>
      </section>

      {/* Featured Subsidies Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold">注目の補助金</h2>
              <p className="text-[var(--text-secondary)] text-sm mt-1">
                現在受付中の主要な補助金制度
              </p>
            </div>
            <a
              href="/search"
              className="text-sm text-[var(--accent)] hover:text-[var(--accent-dim)] transition-colors"
            >
              すべて見る &rarr;
            </a>
          </div>
        </ScrollReveal>

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredSubsidies.map((subsidy) => (
            <StaggerItem key={subsidy.id}>
              <SubsidyCard
                id={subsidy.id}
                title={subsidy.title}
                subsidyMaxLimit={subsidy.subsidyMaxLimit}
                acceptanceEndDatetime={subsidy.acceptanceEndDatetime}
                status={subsidy.status}
                regions={subsidy.regions}
                category={subsidy.category}
                href={`/subsidy/${subsidy.id}`}
              />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      {/* Stats bar */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "12,400+", label: "掲載補助金数" },
                { value: "47", label: "対応都道府県" },
                { value: "毎日", label: "データ更新" },
                { value: "無料", label: "検索利用" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-bold text-[var(--accent)]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[var(--text-secondary)] mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

import { Nav } from "@/components/nav";
import { HeroTitle } from "@/components/hero-title";
import { HeroButtons } from "@/components/hero-buttons";
import { StatsSection } from "@/components/stats-section";
import { ServiceGrid } from "@/components/service-grid";

export default function Home() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-16">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border-accent)] bg-[var(--accent-subtle)] text-sm text-[var(--accent)] mb-8">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            完全無料・オープンソース
          </div>

          <HeroTitle />

          <p className="mt-6 text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            日本全国の補助金・助成金情報をリアルタイムで可視化。
            <br className="hidden md:block" />
            誰でも無料で検索・分析できるオープンプラットフォーム。
          </p>

          <HeroButtons />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 flex flex-col items-center gap-2 text-[var(--text-dim)]">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[var(--text-dim)] to-transparent" />
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
      </div>

      {/* Services */}
      <ServiceGrid />

      {/* Footer */}
      <footer className="border-t border-[var(--border)] mt-24">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start gap-2">
              <span className="text-lg font-bold text-[var(--accent)] tracking-tight">
                SUBSIDY SCOPE
              </span>
              <span className="text-xs text-[var(--text-dim)]">
                補助金を、すべての企業に
              </span>
            </div>

            <div className="flex items-center gap-6 text-sm text-[var(--text-secondary)]">
              <a href="/search" className="hover:text-[var(--text-primary)] transition-colors">
                補助金検索
              </a>
              <a href="/analytics" className="hover:text-[var(--text-primary)] transition-colors">
                トレンド
              </a>
              <a href="https://github.com/kokoaru-ltd/subsidy-scope" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)] transition-colors">
                GitHub
              </a>
            </div>

            <div className="flex flex-col items-center md:items-end gap-1 text-xs text-[var(--text-dim)]">
              <span>v0.1.0</span>
              <span>Licensed under AGPL-3.0</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

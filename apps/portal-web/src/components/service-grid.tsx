"use client";

import { GlowCard, ScrollReveal } from "@subsidy-scope/ui";

const services = [
  {
    title: "補助金検索",
    description:
      "キーワード・地域・業種から瞬時に検索。受付状況やステータスでフィルタリングして最適な制度を見つけられます。",
    href: "/search",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
    glowColor: "rgba(59, 130, 246, 0.35)",
  },
  {
    title: "トレンド分析",
    description:
      "補助金の件数推移・総額をグラフで可視化。地域別・産業別の分布で全国の動向を一目で把握。",
    href: "/analytics",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-8 4 4 6-10" />
      </svg>
    ),
    glowColor: "rgba(59, 130, 246, 0.35)",
  },
  {
    title: "オープンソース",
    description:
      "コード全公開。誰でも自由に利用・改善できます。国・自治体の補助金情報を横断的に収集。",
    href: "https://github.com/kokoaru-ltd/subsidy-scope",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
    glowColor: "rgba(168, 85, 247, 0.35)",
  },
];

export function ServiceGrid() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              すべて無料で使える
            </h2>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              補助金情報の検索からトレンド分析まで。
              オープンソースで完全無料。
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <ScrollReveal key={service.title}>
              <a href={service.href} className="block h-full">
                <GlowCard glowColor={service.glowColor} className="h-full">
                  <div className="text-[var(--accent)] mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm text-[var(--accent)]">
                    <span>詳しく見る</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </GlowCard>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

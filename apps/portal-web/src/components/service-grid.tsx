"use client";

import { GlowCard, ScrollReveal } from "@subsidy-scope/ui";

const services = [
  {
    title: "補助金検索",
    description:
      "AIが最適な補助金をレコメンド。キーワード・地域・業種から瞬時に検索し、申請要件を自動チェック。",
    href: "http://localhost:3001",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
    glowColor: "rgba(0, 212, 170, 0.35)",
  },
  {
    title: "トレンド分析",
    description:
      "補助金の採択率・予算推移をグラフで可視化。地域別ヒートマップで全国の動向を一目で把握。",
    href: "http://localhost:3002",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-8 4 4 6-10" />
      </svg>
    ),
    glowColor: "rgba(59, 130, 246, 0.35)",
  },
  {
    title: "API アクセス",
    description:
      "RESTful APIで補助金データにプログラマティックアクセス。自社システムとの連携やカスタム分析に。",
    href: "#api",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 18l6-6-6-6" />
        <path d="M8 6l-6 6 6 6" />
        <path d="M14.5 4l-5 16" />
      </svg>
    ),
    glowColor: "rgba(168, 85, 247, 0.35)",
  },
];

export function ServiceGrid() {
  return (
    <section className="py-24" id="api">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              3つのプロダクト
            </h2>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              補助金情報の検索からトレンド分析、システム連携まで。
              必要な機能をすべてカバーします。
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
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

"use client";

import { Button, GlowCard, ScrollReveal } from "@subsidy-scope/ui";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "個人利用・お試し向け",
    features: [
      "補助金検索（月50回）",
      "基本フィルタリング",
      "トレンドダッシュボード閲覧",
      "メールサポート",
    ],
    cta: "無料で始める",
    variant: "outline" as const,
    glowColor: "rgba(139, 149, 165, 0.2)",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/月",
    description: "中小企業・士業事務所向け",
    features: [
      "補助金検索（無制限）",
      "AIレコメンデーション",
      "トレンド分析（全機能）",
      "API アクセス（月10,000リクエスト）",
      "申請書類テンプレート",
      "優先サポート",
    ],
    cta: "Pro を始める",
    variant: "primary" as const,
    glowColor: "rgba(0, 212, 170, 0.35)",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/月",
    description: "大企業・コンサルティング向け",
    features: [
      "Pro の全機能",
      "API アクセス（無制限）",
      "カスタムデータ連携",
      "チーム管理（最大50名）",
      "SLA保証（99.9%）",
      "専任サポート担当",
      "カスタムレポート",
    ],
    cta: "お問い合わせ",
    variant: "outline" as const,
    glowColor: "rgba(168, 85, 247, 0.35)",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-24" id="pricing">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              料金プラン
            </h2>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              スタートアップから大企業まで、規模に合わせた最適なプランを。
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <ScrollReveal key={plan.name}>
              <GlowCard
                glowColor={plan.glowColor}
                className={`h-full ${plan.popular ? "ring-1 ring-[var(--accent)] relative" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[var(--accent)] text-[#0a0e17] text-xs font-semibold">
                    人気
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-[var(--text-primary)]">{plan.price}</span>
                  <span className="text-[var(--text-secondary)] text-sm ml-1">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--accent)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0 mt-0.5"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-[var(--text-secondary)]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant={plan.variant} size="lg" className="w-full">
                  {plan.cta}
                </Button>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

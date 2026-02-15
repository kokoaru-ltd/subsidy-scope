import { Nav } from "@/components/nav";
import { PricingSection } from "@/components/pricing-section";

export const metadata = {
  title: "料金プラン - SubsidyScope",
  description: "SubsidyScopeの料金プラン。Free / Pro / Enterprise の3つのプランからお選びいただけます。",
};

export default function PricingPage() {
  return (
    <>
      <Nav />

      {/* Header spacer for fixed nav */}
      <div className="h-16" />

      {/* Page header */}
      <section className="pt-16 pb-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            シンプルな料金体系
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            必要な機能だけを、必要なだけ。いつでもプラン変更可能です。
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <PricingSection />

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] text-center mb-12">
            よくある質問
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "無料プランに制限はありますか？",
                a: "検索回数が月50回までとなります。それ以外の基本機能はすべてご利用いただけます。",
              },
              {
                q: "プランの変更はいつでもできますか？",
                a: "はい、いつでもアップグレード・ダウングレードが可能です。日割り計算で差額を精算します。",
              },
              {
                q: "APIの利用にはどのプランが必要ですか？",
                a: "Pro プラン以上でAPIアクセスが可能です。Enterprise プランでは無制限にご利用いただけます。",
              },
              {
                q: "チームでの利用は可能ですか？",
                a: "Enterprise プランでは最大50名までのチーム管理機能をご利用いただけます。",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="glass rounded-xl p-6"
              >
                <h3 className="text-[var(--text-primary)] font-medium mb-2">{faq.q}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass rounded-2xl p-12">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
              まずは無料で始めましょう
            </h2>
            <p className="text-[var(--text-secondary)] mb-8">
              クレジットカード不要。30秒で登録完了。
            </p>
            <a
              href="http://localhost:3001"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent)] text-[#0a0e17] font-semibold text-base hover:bg-[var(--accent-dim)] transition-colors"
            >
              無料で始める
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] mt-8">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start gap-2">
              <a href="/" className="text-lg font-bold text-[var(--accent)] tracking-tight">
                SUBSIDY SCOPE
              </a>
              <span className="text-xs text-[var(--text-dim)]">
                補助金を、すべての企業に
              </span>
            </div>

            <div className="flex items-center gap-6 text-sm text-[var(--text-secondary)]">
              <a href="http://localhost:3001" className="hover:text-[var(--text-primary)] transition-colors">
                補助金検索
              </a>
              <a href="http://localhost:3002" className="hover:text-[var(--text-primary)] transition-colors">
                トレンド
              </a>
              <a href="/pricing" className="hover:text-[var(--text-primary)] transition-colors">
                料金プラン
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

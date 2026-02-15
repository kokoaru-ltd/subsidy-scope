"use client";

import { AnimatedCounter, ScrollReveal } from "@subsidy-scope/ui";

const stats = [
  {
    label: "総補助金数",
    value: 147,
    suffix: " 件",
    formatFn: (n: number) => Math.round(n).toLocaleString(),
  },
  {
    label: "受付中",
    value: 89,
    suffix: " 件",
    formatFn: (n: number) => Math.round(n).toLocaleString(),
  },
  {
    label: "総額",
    value: 1.2,
    prefix: "約",
    suffix: "兆円",
    formatFn: (n: number) => n.toFixed(1),
  },
];

export function StatsSection() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-xl p-8 text-center"
              >
                <p className="text-xs uppercase tracking-widest text-[var(--text-dim)] mb-3">
                  {stat.label}
                </p>
                <p className="text-4xl md:text-5xl font-bold text-[var(--accent)]">
                  {stat.prefix}
                  <AnimatedCounter
                    value={stat.value}
                    duration={2}
                    formatFn={stat.formatFn}
                  />
                  {stat.suffix}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

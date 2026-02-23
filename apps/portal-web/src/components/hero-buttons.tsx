"use client";

import Link from "next/link";
import { Button, FadeIn } from "@subsidy-scope/ui";

export function HeroButtons() {
  return (
    <FadeIn delay={0.8}>
      <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
        <Link href="/search">
          <Button size="lg" variant="primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            補助金を検索する
          </Button>
        </Link>
        <Link href="/analytics">
          <Button size="lg" variant="outline">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
              <path d="M3 3v18h18" />
              <path d="M7 16l4-8 4 4 6-10" />
            </svg>
            トレンドを見る
          </Button>
        </Link>
      </div>
    </FadeIn>
  );
}

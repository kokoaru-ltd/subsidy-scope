"use client";

import { NavigationBar } from "@subsidy-scope/ui";

const navItems = [
  { label: "補助金検索", href: "/search" },
  { label: "トレンド", href: "/analytics" },
  { label: "サイトまとめ", href: "/portals" },
  { label: "GitHub", href: "https://github.com/kokoaru-ltd/subsidy-scope" },
];

export function Nav() {
  return <NavigationBar brand="SUBSIDY SCOPE" items={navItems} />;
}

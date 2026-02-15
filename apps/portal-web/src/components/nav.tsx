"use client";

import { NavigationBar } from "@subsidy-scope/ui";

const navItems = [
  { label: "補助金検索", href: "/search" },
  { label: "トレンド", href: "/analytics" },
  { label: "API", href: "#api" },
  { label: "料金プラン", href: "/pricing" },
];

export function Nav() {
  return <NavigationBar brand="SUBSIDY SCOPE" items={navItems} />;
}

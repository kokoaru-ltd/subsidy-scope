"use client";

import Link from "next/link";
import { NavigationBar } from "@subsidy-scope/ui";

const navItems = [
  { label: "補助金検索", href: "/search" },
  { label: "トレンド", href: "/analytics" },
  { label: "申請AI", href: "/apply" },
  { label: "サイトまとめ", href: "/portals" },
  { label: "GitHub", href: "https://github.com/kokoaru-ltd/subsidy-scope" },
];

export function Nav() {
  return <NavigationBar brand="SUBSIDY SCOPE" items={navItems} linkComponent={Link} />;
}

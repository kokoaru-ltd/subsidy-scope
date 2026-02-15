import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import { NavigationBar } from "@subsidy-scope/ui";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SubsidyScope - 補助金検索",
  description: "日本の補助金情報を検索・閲覧できるプラットフォーム",
};

const navItems = [
  { label: "ホーム", href: "http://localhost:3000" },
  { label: "検索", href: "/search" },
  { label: "トレンド", href: "http://localhost:3002" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <body className="min-h-screen antialiased">
        <NavigationBar brand="SUBSIDY SCOPE" items={navItems} />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}

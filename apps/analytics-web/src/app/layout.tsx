import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import { NavigationBar, SmoothScrollProvider } from "@subsidy-scope/ui";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], variable: "--font-noto-sans-jp" });

export const metadata: Metadata = {
  title: "SubsidyScope -- トレンド分析ダッシュボード",
  description: "日本全国の補助金・助成金のトレンド・統計データを可視化するダッシュボード",
};

const navItems = [
  { label: "ホーム", href: "http://localhost:3000" },
  { label: "補助金検索", href: "http://localhost:3001" },
  { label: "ダッシュボード", href: "/" },
  { label: "地域分布", href: "/regions" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <body className="antialiased">
        <div className="gradient-mesh">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
        </div>
        <div className="scan-lines" />
        <SmoothScrollProvider>
          <div className="relative z-10">
            <NavigationBar brand="SUBSIDY SCOPE" items={navItems} />
            <main className="pt-16">{children}</main>
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

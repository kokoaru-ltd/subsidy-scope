import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import { SmoothScrollProvider } from "@subsidy-scope/ui";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], variable: "--font-noto-sans-jp" });

export const metadata: Metadata = {
  title: "SubsidyScope -- 補助金を、すべての企業に",
  description:
    "日本全国の補助金・助成金情報をリアルタイムで可視化・検索するオープンプラットフォーム",
};

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
          <div className="relative z-10">{children}</div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

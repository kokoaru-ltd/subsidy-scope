# SubsidyScope — 補助金を、すべての企業に

日本全国の補助金・助成金情報を検索・可視化するオープンソースプラットフォーム。完全無料。

## 機能

- **補助金検索** — jGrants API から取得した補助金をキーワード・地域・業種・ステータスで絞り込み検索
- **トレンド分析** — 件数推移・総額・地域別分布をグラフで可視化
- **サイトまとめ** — 国・省庁・自治体・民間の補助金ポータルサイト 46件以上を横断リスト化

## デモ

https://kokoaru-ltd.github.io/subsidy-scope/

## 技術スタック

| カテゴリ | 技術 |
|---------|------|
| フレームワーク | Next.js 15 (App Router) + React 19 |
| 言語 | TypeScript 5.9 |
| スタイリング | Tailwind CSS v4 |
| アニメーション | Motion v11 + Lenis (スムーススクロール) |
| チャート | Recharts |
| DB | PostgreSQL + Prisma 6 |
| モノレポ | pnpm 10 + Turborepo |
| Lint/Format | Biome 2.3 |
| デプロイ | GitHub Pages (静的エクスポート) |

## プロジェクト構成

```
subsidy-scope/
├── apps/
│   └── portal-web/          # メインアプリ (Next.js)
│       └── src/
│           ├── app/
│           │   ├── page.tsx          # トップページ
│           │   ├── search/           # 補助金検索
│           │   ├── analytics/        # トレンド分析
│           │   ├── portals/          # サイトまとめ
│           │   └── subsidy/[id]/     # 補助金詳細
│           ├── components/           # ページ固有コンポーネント
│           └── lib/                  # データ・ユーティリティ
├── packages/
│   ├── ui/              # @subsidy-scope/ui デザインシステム
│   ├── db/              # @subsidy-scope/db Prismaスキーマ
│   ├── api/             # @subsidy-scope/api ユーティリティ
│   └── ingestion/       # @subsidy-scope/ingestion データ取込
├── .github/workflows/   # CI/CD (GitHub Pages デプロイ)
├── pnpm-workspace.yaml
├── turbo.json
└── biome.json
```

## セットアップ

```bash
# 依存関係インストール
pnpm install

# 開発サーバー起動
pnpm dev
# → http://localhost:3000
```

### データベースを使う場合（オプション）

```bash
# PostgreSQL起動
docker compose up -d

# Prismaクライアント生成 + マイグレーション + シードデータ
pnpm db:generate
pnpm db:migrate
pnpm db:seed

# jGrants APIからデータ取込
pnpm ingest:all
```

## ビルド・デプロイ

```bash
# 静的サイトとしてビルド（GitHub Pages用）
pnpm build
# → apps/portal-web/out/ に出力
```

GitHub Pages へのデプロイは `.github/workflows/deploy.yml` で自動化済み。
`main` ブランチへのプッシュで自動デプロイされる。

## データソース

| ソース | 種別 | 内容 |
|--------|------|------|
| [jGrants API](https://api.jgrants-portal.go.jp/) | REST API | 国の補助金データ（デジタル庁運営） |
| 各省庁・自治体公式サイト | リンク集 | 46サイト以上を `/portals` に収録 |

## ライセンス

AGPL-3.0-or-later

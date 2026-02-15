# SubsidyScope — 補助金を、すべての企業に

日本全国の補助金・助成金情報をリアルタイムで可視化・検索するオープンプラットフォーム。

## アプリケーション構成

| アプリ | ポート | 説明 |
|--------|--------|------|
| **portal-web** | :3000 | ランディングページ + 統合ダッシュボード |
| **subsidy-web** | :3001 | 補助金検索・閲覧 |
| **analytics-web** | :3002 | トレンド分析・統計可視化 |

## 共有パッケージ

| パッケージ | 説明 |
|-----------|------|
| `@subsidy-scope/ui` | デザインシステム（20+ コンポーネント） |
| `@subsidy-scope/db` | Prisma スキーマ・マイグレーション |
| `@subsidy-scope/api` | API ユーティリティ |
| `@subsidy-scope/ingestion` | jGrants API データ取込パイプライン |

## 技術スタック

- **Frontend**: Next.js 15 + React 19 + TypeScript
- **Styling**: Tailwind CSS v4 + Motion v11 + Lenis
- **Database**: PostgreSQL + Prisma 6
- **Charts**: Recharts
- **Monorepo**: pnpm 10 + Turborepo
- **Lint**: Biome 2.3

## セットアップ

```bash
# 依存関係インストール
pnpm install

# データベース起動
docker compose up -d

# Prisma クライアント生成
pnpm db:generate

# マイグレーション実行
pnpm db:migrate

# シードデータ投入
pnpm db:seed

# データ取込（jGrants API）
pnpm ingest:all

# 開発サーバー起動（全アプリ）
pnpm dev
```

## データソース

- [jGrants API](https://developers.digital.go.jp/documents/jgrants/api/) — デジタル庁運営の補助金ポータル

## ライセンス

AGPL-3.0-or-later

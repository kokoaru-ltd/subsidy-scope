"use client";

import { FadeIn, ScrollReveal, GlowCard, Badge } from "@subsidy-scope/ui";
import { Nav } from "@/components/nav";

interface PortalSite {
	name: string;
	url: string;
	org: string;
	description: string;
}

const national: PortalSite[] = [
	{ name: "Jグランツ", url: "https://www.jgrants-portal.go.jp/", org: "デジタル庁", description: "補助金のオンライン申請システム。国の補助金を電子申請で一元管理" },
	{ name: "ミラサポplus", url: "https://mirasapo-plus.go.jp/", org: "中小企業庁", description: "中小企業向け補助金・助成金の総合支援情報サイト" },
	{ name: "J-Net21 支援情報ヘッドライン", url: "https://j-net21.smrj.go.jp/snavi/", org: "中小企業基盤整備機構", description: "全国の補助金・助成金・融資情報を日次更新で横断検索" },
	{ name: "補助金活用ナビ", url: "https://seisansei.smrj.go.jp/", org: "中小企業基盤整備機構", description: "ものづくり・IT導入・省力化等の主要補助金の最新情報と活用ガイド" },
	{ name: "e-Govポータル", url: "https://www.e-gov.go.jp/", org: "デジタル庁", description: "各省庁が公表する補助金・行政手続き情報を横断案内" },
	{ name: "GビズID", url: "https://gbiz-id.go.jp/", org: "デジタル庁", description: "補助金申請等に使う法人共通認証基盤" },
];

const ministries: PortalSite[] = [
	{ name: "中小企業庁 補助金の公募・採択", url: "https://www.chusho.meti.go.jp/koukai/hojyokin/index.html", org: "経済産業省", description: "中小企業向け補助金の公募・採択情報を一元掲載" },
	{ name: "経済産業省 公募情報", url: "https://www.meti.go.jp/information/publicoffer/kobo.html", org: "経済産業省", description: "経産省所管の補助事業・委託事業等の公募情報一覧" },
	{ name: "ものづくり補助金 総合サイト", url: "https://portal.monodukuri-hojo.jp/", org: "全国中小企業団体中央会", description: "ものづくり・商業・サービス生産性向上促進補助金の公式サイト" },
	{ name: "デジタル化・AI導入補助金", url: "https://it-shien.smrj.go.jp/", org: "中小企業基盤整備機構", description: "ITツール導入費用を支援する補助金の公式申請サイト" },
	{ name: "小規模事業者持続化補助金", url: "https://r6.jizokukahojokin.info/", org: "日本商工会議所", description: "小規模事業者の販路開拓等を支援する補助金" },
	{ name: "中小企業省力化投資補助金", url: "https://shoryokuka.smrj.go.jp/", org: "中小企業基盤整備機構", description: "人手不足解消のための省力化設備投資を支援" },
	{ name: "厚労省 雇用関係助成金一覧", url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/index_00057.html", org: "厚生労働省", description: "雇用維持・人材育成・働き方改革等の助成金を網羅" },
	{ name: "厚労省 助成金検索ツール", url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/index_00007.html", org: "厚生労働省", description: "条件入力で該当する雇用関係助成金を検索" },
	{ name: "環境省 エネ特ポータル", url: "https://www.env.go.jp/earth/earth/ondanka/enetoku/", org: "環境省", description: "脱炭素化事業の補助金・委託事業を年度別に一覧" },
	{ name: "環境省 脱炭素地域づくり支援", url: "https://policies.env.go.jp/policy/roadmap/supports/", org: "環境省", description: "1府6省176事業の脱炭素関連支援メニューを横断掲載" },
	{ name: "農林水産省 補助事業の公募", url: "https://www.maff.go.jp/j/supply/hozyo/", org: "農林水産省", description: "農林水産省・林野庁・水産庁の補助事業参加者募集" },
	{ name: "総務省 地域DX支援メニュー", url: "https://www.soumu.go.jp/main_sosiki/joho_tsusin/top/local_support/ict/support/index.html", org: "総務省", description: "ICT・デジタル関連の地域向け補助金・支援メニュー" },
];

const local: PortalSite[] = [
	{ name: "東京都中小企業振興公社 助成金一覧", url: "https://www.tokyo-kosha.or.jp/support/josei/index.html", org: "東京都", description: "東京都の中小企業向け各種助成金を種別ごとに一覧" },
	{ name: "大阪府 補助金一覧", url: "https://www.pref.osaka.lg.jp/o050010/zaisei/sonota/hojyokinn.html", org: "大阪府", description: "大阪府が実施する補助金制度を一覧で掲載" },
	{ name: "大阪産業局", url: "https://www.obda.or.jp/", org: "大阪府", description: "大阪の中小企業・起業家向け経営支援・補助金情報" },
	{ name: "あいちナビる", url: "https://hojokin.aibsc.jp/", org: "愛知県", description: "愛知県の国・県・市町村の補助金・助成金を一覧検索" },
	{ name: "北海道 補助金・助成金・支援金", url: "https://www.pref.hokkaido.lg.jp/kz/csk/a0009/b0006/", org: "北海道", description: "北海道の中小企業向け補助金・助成金の公式案内" },
	{ name: "北海道中小企業総合支援センター", url: "https://www.hsc.or.jp/", org: "北海道", description: "北海道の中小企業向け各種支援事業を運営" },
	{ name: "福岡県 中小企業支援・融資制度", url: "https://www.pref.fukuoka.lg.jp/life/4/32/134/", org: "福岡県", description: "福岡県の中小企業向け補助金・融資制度を一覧" },
	{ name: "埼玉県 企業支援ポータル", url: "https://www.pref.saitama.lg.jp/a0801/kigyoushien_portal.html", org: "埼玉県", description: "埼玉県・市町村・国の事業者向け支援情報を横断検索" },
	{ name: "横浜市 助成金・補助金一覧", url: "https://socialport-y.city.yokohama.lg.jp/subsidy/", org: "横浜市", description: "横浜市のスタートアップ・中小企業向け助成金一覧" },
];

const privatePortals: PortalSite[] = [
	{ name: "補助金ポータル", url: "https://hojyokin-portal.jp/", org: "株式会社補助金ポータル", description: "年間3000〜5000件の補助金・助成金情報を掲載する大手まとめサイト" },
	{ name: "スマート補助金", url: "https://www.smart-hojokin.jp/", org: "株式会社スマート補助金", description: "日本最大級の補助金・助成金・給付金ポータル（セルフ診断付き）" },
	{ name: "補助金クラウド", url: "https://www.hojyokincloud.jp/", org: "株式会社Stayway", description: "3000種以上の補助金を検索可能な金融機関向けDXサービス" },
	{ name: "補助金コネクト", url: "https://financeinjapan.com/", org: "株式会社補助金コネクト", description: "10,000件以上の補助金・助成金・融資を横断検索" },
	{ name: "助成金なう", url: "https://www.navit-j.com/service/joseikin-now/", org: "株式会社ナビット", description: "国・自治体・財団の助成金を10万件超カバー（AI診断あり）" },
	{ name: "みんなの補助金コンシェルジュ", url: "https://hojyokin-concierge.com/", org: "株式会社ライトアップ", description: "全国10,000件超の補助金を地域・業種・目的で検索" },
	{ name: "資金調達ナビ（弥生）", url: "https://shikin.yayoi-kk.co.jp/", org: "弥生株式会社", description: "2,000件超の補助金・融資情報を無料検索（累計500万PV超）" },
	{ name: "助成財団センター", url: "https://www.jfc.or.jp/", org: "公益財団法人 助成財団センター", description: "約2,000の民間助成団体の助成プログラムを検索できるDB" },
	{ name: "TKC 補助金・助成金・融資情報", url: "https://hozyokin.tkcnf.com/", org: "TKC全国会", description: "税理士ネットワーク経由で地域別の補助金・助成金情報を掲載" },
];

const categories = [
	{ title: "国の公式ポータル", badge: "国", sites: national },
	{ title: "省庁別の補助金サイト", badge: "省庁", sites: ministries },
	{ title: "都道府県・自治体", badge: "自治体", sites: local },
	{ title: "民間まとめサイト", badge: "民間", sites: privatePortals },
];

function PortalCard({ site }: { site: PortalSite }) {
	return (
		<a href={site.url} target="_blank" rel="noopener noreferrer" className="block">
			<GlowCard className="h-full flex flex-col gap-2 cursor-pointer hover:border-[var(--border-hover)] transition-colors">
				<div className="flex items-start justify-between gap-2">
					<h3 className="text-sm font-semibold text-[var(--text-primary)] leading-snug">
						{site.name}
					</h3>
					<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--text-dim)] shrink-0 mt-0.5">
						<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
						<polyline points="15 3 21 3 21 9" />
						<line x1="10" y1="14" x2="21" y2="3" />
					</svg>
				</div>
				<p className="text-xs text-[var(--text-secondary)] leading-relaxed">
					{site.description}
				</p>
				<p className="text-xs text-[var(--text-dim)] mt-auto pt-1">
					{site.org}
				</p>
			</GlowCard>
		</a>
	);
}

export default function PortalsPage() {
	return (
		<>
			<Nav />
			<div className="h-20" />
			<div className="max-w-7xl mx-auto px-6 py-12">
				<FadeIn>
					<div className="mb-10">
						<h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
							全国の補助金・助成金サイトまとめ
						</h1>
						<p className="text-[var(--text-secondary)]">
							国・省庁・自治体・民間の補助金ポータルサイトを横断的にリスト化。{national.length + ministries.length + local.length + privatePortals.length}サイト収録。
						</p>
					</div>
				</FadeIn>

				{categories.map((cat) => (
					<section key={cat.title} className="mb-16">
						<ScrollReveal>
							<div className="flex items-center gap-3 mb-6">
								<h2 className="text-xl font-bold text-[var(--text-primary)]">
									{cat.title}
								</h2>
								<Badge>{cat.badge}</Badge>
								<span className="text-sm text-[var(--text-dim)]">{cat.sites.length}件</span>
							</div>
						</ScrollReveal>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
							{cat.sites.map((site) => (
								<ScrollReveal key={site.url}>
									<PortalCard site={site} />
								</ScrollReveal>
							))}
						</div>
					</section>
				))}
			</div>
		</>
	);
}

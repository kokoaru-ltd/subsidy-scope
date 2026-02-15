export interface MockSubsidy {
	id: string;
	title: string;
	description: string;
	subsidyMaxLimit: number | null;
	acceptanceStartDatetime: string | null;
	acceptanceEndDatetime: string | null;
	status: "ACTIVE" | "UPCOMING" | "CLOSED" | "ARCHIVED";
	regions: string[];
	category: string;
}

export const mockSubsidies: MockSubsidy[] = [
	{
		id: "sub-001",
		title: "小規模事業者持続化補助金（一般型）",
		description:
			"小規模事業者が自社の経営を見直し、自らが持続的な経営に向けた経営計画を作成した上で行う販路開拓や生産性向上の取組を支援する制度です。商工会・商工会議所のサポートを受けながら取り組む事業であること。",
		subsidyMaxLimit: 500_000,
		acceptanceStartDatetime: "2026-01-15T00:00:00Z",
		acceptanceEndDatetime: "2026-05-31T23:59:59Z",
		status: "ACTIVE",
		regions: ["全国"],
		category: "販路開拓",
	},
	{
		id: "sub-002",
		title: "IT導入補助金2026（通常枠）",
		description:
			"中小企業・小規模事業者等がITツール（ソフトウェア、サービス等）を導入する経費の一部を補助することで、業務効率化・売上アップをサポートするものです。",
		subsidyMaxLimit: 4_500_000,
		acceptanceStartDatetime: "2026-02-01T00:00:00Z",
		acceptanceEndDatetime: "2026-06-30T23:59:59Z",
		status: "ACTIVE",
		regions: ["全国"],
		category: "IT導入",
	},
	{
		id: "sub-003",
		title: "ものづくり・商業・サービス生産性向上促進補助金",
		description:
			"中小企業・小規模事業者等が取り組む革新的サービス開発・試作品開発・生産プロセスの改善を行うための設備投資等を支援します。",
		subsidyMaxLimit: 12_500_000,
		acceptanceStartDatetime: "2026-01-10T00:00:00Z",
		acceptanceEndDatetime: "2026-04-25T23:59:59Z",
		status: "ACTIVE",
		regions: ["全国"],
		category: "設備投資",
	},
	{
		id: "sub-004",
		title: "事業承継・引継ぎ補助金（経営革新事業）",
		description:
			"事業承継やM&A（事業再編・事業統合等。経営資源を引き継いで行う創業を含む。）を契機とした経営革新等への挑戦に要する費用を補助します。",
		subsidyMaxLimit: 6_000_000,
		acceptanceStartDatetime: "2026-04-01T00:00:00Z",
		acceptanceEndDatetime: "2026-06-15T23:59:59Z",
		status: "UPCOMING",
		regions: ["全国"],
		category: "事業承継",
	},
	{
		id: "sub-005",
		title: "省力化投資補助金（カタログ型）",
		description:
			"中小企業等の売上拡大や生産性向上を後押しするため、IoT・ロボット等の人手不足解消に効果がある汎用製品の導入を支援します。",
		subsidyMaxLimit: 10_000_000,
		acceptanceStartDatetime: "2026-02-10T00:00:00Z",
		acceptanceEndDatetime: "2026-07-31T23:59:59Z",
		status: "ACTIVE",
		regions: ["全国"],
		category: "省力化",
	},
	{
		id: "sub-006",
		title: "東京都中小企業デジタル化支援助成金",
		description:
			"都内の中小企業が自社のデジタル化を推進するために行うシステム導入やクラウドサービスの利用に係る経費の一部を助成します。",
		subsidyMaxLimit: 3_000_000,
		acceptanceStartDatetime: "2026-03-01T00:00:00Z",
		acceptanceEndDatetime: "2026-05-15T23:59:59Z",
		status: "UPCOMING",
		regions: ["東京都"],
		category: "デジタル化",
	},
	{
		id: "sub-007",
		title: "大阪府スタートアップ支援補助金",
		description:
			"大阪府内で創業またはスタートアップ事業を営む中小企業等に対し、事業開発や販路開拓に必要な経費の一部を補助します。",
		subsidyMaxLimit: 2_000_000,
		acceptanceStartDatetime: "2025-10-01T00:00:00Z",
		acceptanceEndDatetime: "2025-12-31T23:59:59Z",
		status: "CLOSED",
		regions: ["大阪府"],
		category: "創業支援",
	},
	{
		id: "sub-008",
		title: "事業再構築補助金（第13回公募）",
		description:
			"新市場進出、事業・業種転換、事業再編またはこれらの取組を通じた規模の拡大等、思い切った事業再構築に意欲を有する中小企業等の挑戦を支援します。",
		subsidyMaxLimit: 150_000_000,
		acceptanceStartDatetime: "2025-11-01T00:00:00Z",
		acceptanceEndDatetime: "2026-01-31T23:59:59Z",
		status: "CLOSED",
		regions: ["全国"],
		category: "事業再構築",
	},
	{
		id: "sub-009",
		title: "愛知県次世代産業創出支援補助金",
		description:
			"愛知県内で先端技術（AI・IoT・ロボット等）を活用した新製品・新サービスの事業化を目指す中小企業に対し、研究開発費用の一部を補助します。",
		subsidyMaxLimit: 20_000_000,
		acceptanceStartDatetime: "2026-03-15T00:00:00Z",
		acceptanceEndDatetime: "2026-08-31T23:59:59Z",
		status: "UPCOMING",
		regions: ["愛知県"],
		category: "研究開発",
	},
	{
		id: "sub-010",
		title: "北海道観光産業再生支援補助金",
		description:
			"北海道内の観光関連事業者が、新たな観光コンテンツの開発やインバウンド受入体制の整備に取り組む費用の一部を補助します。",
		subsidyMaxLimit: 5_000_000,
		acceptanceStartDatetime: "2026-02-01T00:00:00Z",
		acceptanceEndDatetime: "2026-04-30T23:59:59Z",
		status: "ACTIVE",
		regions: ["北海道"],
		category: "観光",
	},
	{
		id: "sub-011",
		title: "GX（グリーントランスフォーメーション）促進補助金",
		description:
			"脱炭素に向けた設備更新やエネルギー転換に取り組む中小企業に対し、省エネルギー設備・再生可能エネルギー設備の導入費用を支援します。",
		subsidyMaxLimit: 30_000_000,
		acceptanceStartDatetime: "2026-01-20T00:00:00Z",
		acceptanceEndDatetime: "2026-06-30T23:59:59Z",
		status: "ACTIVE",
		regions: ["全国"],
		category: "GX・脱炭素",
	},
	{
		id: "sub-012",
		title: "福岡県スマート農業推進補助金",
		description:
			"福岡県内の農業者がスマート農業技術（ドローン、自動走行農機、センサー等）を導入する際の費用の一部を補助し、農業の生産性向上を支援します。",
		subsidyMaxLimit: 8_000_000,
		acceptanceStartDatetime: "2026-04-15T00:00:00Z",
		acceptanceEndDatetime: "2026-09-30T23:59:59Z",
		status: "UPCOMING",
		regions: ["福岡県"],
		category: "農業",
	},
];

export function filterSubsidies(params: {
	keyword?: string;
	status?: string;
	region?: string;
	page?: number;
	limit?: number;
}): {
	data: MockSubsidy[];
	total: number;
	page: number;
	totalPages: number;
} {
	const { keyword, status, region, page = 1, limit = 6 } = params;

	let filtered = [...mockSubsidies];

	if (keyword) {
		const kw = keyword.toLowerCase();
		filtered = filtered.filter(
			(s) =>
				s.title.toLowerCase().includes(kw) ||
				s.description.toLowerCase().includes(kw) ||
				s.category.toLowerCase().includes(kw),
		);
	}

	if (status) {
		filtered = filtered.filter((s) => s.status === status);
	}

	if (region) {
		filtered = filtered.filter((s) => s.regions.includes(region));
	}

	const total = filtered.length;
	const totalPages = Math.ceil(total / limit);
	const start = (page - 1) * limit;
	const data = filtered.slice(start, start + limit);

	return { data, total, page, totalPages };
}

export function getSubsidyById(id: string): MockSubsidy | undefined {
	return mockSubsidies.find((s) => s.id === id);
}

export function getRelatedSubsidies(id: string, count = 3): MockSubsidy[] {
	const target = getSubsidyById(id);
	if (!target) return mockSubsidies.slice(0, count);

	return mockSubsidies
		.filter((s) => s.id !== id)
		.sort((a, b) => {
			const aScore =
				(a.category === target.category ? 2 : 0) +
				(a.regions.some((r) => target.regions.includes(r)) ? 1 : 0);
			const bScore =
				(b.category === target.category ? 2 : 0) +
				(b.regions.some((r) => target.regions.includes(r)) ? 1 : 0);
			return bScore - aScore;
		})
		.slice(0, count);
}

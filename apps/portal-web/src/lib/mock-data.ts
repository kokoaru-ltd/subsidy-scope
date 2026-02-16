export interface MockSubsidy {
	id: string;
	title: string;
	description: string;
	subsidyMaxLimit: number | null;
	subsidyRate: string | null;
	acceptanceStartDatetime: string | null;
	acceptanceEndDatetime: string | null;
	status: "ACTIVE" | "UPCOMING" | "CLOSED" | "ARCHIVED";
	regions: string[];
	category: string;
	url: string;
}

export const mockSubsidies: MockSubsidy[] = [
	{
		id: "a0WJ200000CDTzMMAX",
		title: "ものづくり・商業・サービス生産性向上促進補助金（19次締切）",
		description:
			"中小企業・小規模事業者等が取り組む革新的サービス開発・試作品開発・生産プロセスの改善を行うための設備投資等を支援。働き方改革や賃上げ等の制度変更に対応するための補助金。",
		subsidyMaxLimit: 40_000_000,
		subsidyRate: "1/2 もしくは 2/3",
		acceptanceStartDatetime: "2025-02-14T08:00:00Z",
		acceptanceEndDatetime: "2026-09-28T08:00:00Z",
		status: "ACTIVE",
		regions: ["全国"],
		category: "設備投資",
		url: "https://www.jgrants-portal.go.jp/subsidy/a0WJ200000CDTzMMAX",
	},
	{
		id: "a0WJ200000CDX4vMAH",
		title: "ものづくり・商業・サービス生産性向上促進補助金（21次締切）",
		description:
			"中小企業・小規模事業者等が取り組む革新的サービス開発・試作品開発・生産プロセスの改善を行うための設備投資等を支援。新たな事業展開や販路拡大にも対応。",
		subsidyMaxLimit: 40_000_000,
		subsidyRate: "1/2 もしくは 2/3",
		acceptanceStartDatetime: "2026-01-23T08:00:00Z",
		acceptanceEndDatetime: "2027-03-23T08:00:00Z",
		status: "ACTIVE",
		regions: ["全国"],
		category: "設備投資",
		url: "https://www.jgrants-portal.go.jp/subsidy/a0WJ200000CDX4vMAH",
	},
	{
		id: "a0W2x000007Cos5EAC",
		title: "事業再構築補助金（第六回以降・共同申請者）",
		description:
			"新分野展開、業態転換、事業再編等の思い切った事業再構築に挑戦する中小企業等を支援。ウィズコロナ・ポストコロナ時代の経済社会の変化に対応するための補助金。",
		subsidyMaxLimit: 150_000_000,
		subsidyRate: null,
		acceptanceStartDatetime: "2022-09-15T09:00:00Z",
		acceptanceEndDatetime: "2026-10-12T14:59:00Z",
		status: "ACTIVE",
		regions: ["全国"],
		category: "事業再構築",
		url: "https://www.jgrants-portal.go.jp/subsidy/a0W2x000007Cos5EAC",
	},
	{
		id: "a0WJ200000CDWRiMAP",
		title: "小規模事業者持続化補助金＜共同・協業型＞ 第２回公募",
		description:
			"複数の小規模事業者が連携して取り組む販路拡大やイベント・事業運営等を支援。共同での事業計画に基づく取組を補助。",
		subsidyMaxLimit: 50_000_000,
		subsidyRate: "定額、または2/3",
		acceptanceStartDatetime: "2026-01-16T06:00:00Z",
		acceptanceEndDatetime: "2026-02-27T08:00:00Z",
		status: "ACTIVE",
		regions: ["全国"],
		category: "販路開拓",
		url: "https://www.jgrants-portal.go.jp/subsidy/a0WJ200000CDWRiMAP",
	},
	{
		id: "a0WJ200000CDIvFMAX",
		title: "中小企業最低賃金引上げ支援対策費補助金（業務改善助成金）",
		description:
			"事業場内最低賃金を30円以上引き上げ、生産性向上に資する設備投資等を行った中小企業・小規模事業者に対し、その費用の一部を助成。",
		subsidyMaxLimit: 6_000_000,
		subsidyRate: "3/4〜4/5",
		acceptanceStartDatetime: "2025-04-14T00:00:00Z",
		acceptanceEndDatetime: "2026-03-31T14:59:00Z",
		status: "ACTIVE",
		regions: ["全国"],
		category: "雇用・労働",
		url: "https://www.jgrants-portal.go.jp/subsidy/a0WJ200000CDIvFMAX",
	},
	{
		id: "a0WJ200000CDW4SMAX",
		title: "小規模事業者持続化補助金＜災害支援枠（令和6年能登半島地震等）＞",
		description:
			"令和6年能登半島地震等の被災地域の小規模事業者に対し、事業の持続化・復旧に必要な経費を支援。商工会議所地区対象。",
		subsidyMaxLimit: 2_000_000,
		subsidyRate: "2/3（一定要件で定額）",
		acceptanceStartDatetime: "2026-01-23T08:00:00Z",
		acceptanceEndDatetime: "2026-03-31T08:00:00Z",
		status: "ACTIVE",
		regions: ["石川県"],
		category: "災害支援",
		url: "https://www.jgrants-portal.go.jp/subsidy/a0WJ200000CDW4SMAX",
	},
	{
		id: "a0WJ200000CDPkCMAX",
		title: "令和7年度テレワークトータルサポート助成金",
		description:
			"テレワークの導入から定着・促進を図るため、東京都のテレワーク相談窓口やコンサルティングを利用した都内中堅・中小企業等に対し、テレワーク環境整備に係る経費を助成。",
		subsidyMaxLimit: 2_500_000,
		subsidyRate: "2/3 または 1/2",
		acceptanceStartDatetime: "2025-06-10T00:00:00Z",
		acceptanceEndDatetime: "2026-02-27T14:59:00Z",
		status: "ACTIVE",
		regions: ["東京都"],
		category: "働き方改革",
		url: "https://www.jgrants-portal.go.jp/subsidy/a0WJ200000CDPkCMAX",
	},
	{
		id: "a0WJ200000CDOeFMAX",
		title: "令和7年度「年収の壁突破」総合対策促進奨励金",
		description:
			"年収の壁を意識せず働ける環境づくりに取り組む都内企業に対し、奨励金を交付。パート・アルバイトの処遇改善を支援。",
		subsidyMaxLimit: 500_000,
		subsidyRate: null,
		acceptanceStartDatetime: "2025-06-05T00:00:00Z",
		acceptanceEndDatetime: "2026-04-24T03:00:00Z",
		status: "ACTIVE",
		regions: ["東京都"],
		category: "雇用・労働",
		url: "https://www.jgrants-portal.go.jp/subsidy/a0WJ200000CDOeFMAX",
	},
	{
		id: "a0WJ200000CDR9EMAX",
		title: "令和7年度働くパパママ育業応援奨励金【働くパパコースNEXT】",
		description:
			"男性従業員の育児休業取得を推進する都内企業に対し、奨励金を交付。育業の定着と職場環境の改善を支援。",
		subsidyMaxLimit: 3_300_000,
		subsidyRate: null,
		acceptanceStartDatetime: "2025-07-01T01:00:00Z",
		acceptanceEndDatetime: "2026-03-31T14:59:00Z",
		status: "ACTIVE",
		regions: ["東京都"],
		category: "雇用・労働",
		url: "https://www.jgrants-portal.go.jp/subsidy/a0WJ200000CDR9EMAX",
	},
	{
		id: "a0WJ200000CDXFPMA5",
		title: "横浜市省エネ診断支援補助金",
		description:
			"横浜市内の中小企業が省エネルギー診断を受診する際の費用を補助。エネルギーコスト削減と脱炭素経営を支援。",
		subsidyMaxLimit: 50_000,
		subsidyRate: "10/10（税抜）",
		acceptanceStartDatetime: "2025-05-13T00:00:00Z",
		acceptanceEndDatetime: "2026-02-28T14:59:00Z",
		status: "ACTIVE",
		regions: ["神奈川県"],
		category: "省エネ",
		url: "https://www.jgrants-portal.go.jp/subsidy/a0WJ200000CDXFPMA5",
	},
	{
		id: "a0WJ200000CDXR6MAP",
		title: "深谷市起業家支援事業補助金",
		description:
			"深谷市内で新たに事業を始めた起業家に対し、事業所の開設にかかる経費（設備・備品購入費など）や広告宣伝費の一部を補助。地域産業の振興と活性化を目的とする。",
		subsidyMaxLimit: 200_000,
		subsidyRate: "対象経費の1/2",
		acceptanceStartDatetime: "2025-04-01T00:00:00Z",
		acceptanceEndDatetime: "2026-03-31T00:00:00Z",
		status: "ACTIVE",
		regions: ["埼玉県"],
		category: "創業支援",
		url: "https://www.jgrants-portal.go.jp/subsidy/a0WJ200000CDXR6MAP",
	},
	{
		id: "a0WJ200000CDXQmMAP",
		title: "【東海市】令和7年度小規模企業等振興資金等信用保証料補助金",
		description:
			"愛知県・愛知県信用保証協会の制度融資を受けた中小企業者が負担する信用保証料に対し補助金を交付。資金繰り改善を支援。",
		subsidyMaxLimit: 120_000,
		subsidyRate: "60%〜100%",
		acceptanceStartDatetime: "2025-04-01T00:00:00Z",
		acceptanceEndDatetime: "2026-03-31T14:59:00Z",
		status: "ACTIVE",
		regions: ["愛知県"],
		category: "経営支援",
		url: "https://www.jgrants-portal.go.jp/subsidy/a0WJ200000CDXQmMAP",
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

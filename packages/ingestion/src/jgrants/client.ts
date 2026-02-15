import type { JGrantsListResponse, JGrantsDetailItem } from "./types";
import { retryWithBackoff } from "../utils/retry";

const V1_BASE =
	process.env.JGRANTS_API_BASE_URL ??
	"https://api.jgrants-portal.go.jp/exp/v1/public";

export class JGrantsClient {
	async searchSubsidies(params: {
		keyword: string;
		sort?: string;
		order?: string;
		acceptance?: string;
		page?: number;
		per_page?: number;
	}): Promise<JGrantsListResponse> {
		const url = new URL(`${V1_BASE}/subsidies`);
		url.searchParams.set("keyword", params.keyword);
		url.searchParams.set("sort", params.sort ?? "created_date");
		url.searchParams.set("order", params.order ?? "DESC");
		url.searchParams.set("acceptance", params.acceptance ?? "all");
		if (params.page) url.searchParams.set("page", String(params.page));
		if (params.per_page) url.searchParams.set("per_page", String(params.per_page));

		return retryWithBackoff(() => this.fetchJson<JGrantsListResponse>(url.toString()));
	}

	async getSubsidyDetail(id: string): Promise<JGrantsDetailItem> {
		const url = `${V1_BASE}/subsidies/id/${encodeURIComponent(id)}`;
		const res = await retryWithBackoff(() =>
			this.fetchJson<{ result: JGrantsDetailItem }>(url),
		);
		return res.result;
	}

	private async fetchJson<T>(url: string): Promise<T> {
		const response = await fetch(url, {
			headers: { Accept: "application/json" },
		});
		if (!response.ok) {
			throw new Error(
				`jGrants API error: ${response.status} ${response.statusText} for ${url}`,
			);
		}
		return response.json() as Promise<T>;
	}
}

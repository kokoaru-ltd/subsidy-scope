import type { JGrantsDetailItem } from "./types";

export function normalizeDetailItem(item: JGrantsDetailItem) {
	const now = new Date();
	const acceptEnd = item.acceptance_end_datetime
		? new Date(item.acceptance_end_datetime)
		: null;
	const acceptStart = item.acceptance_start_datetime
		? new Date(item.acceptance_start_datetime)
		: null;

	let status: "ACTIVE" | "UPCOMING" | "CLOSED" | "ARCHIVED" = "ACTIVE";
	if (acceptEnd && acceptEnd < now) {
		status = "CLOSED";
	} else if (acceptStart && acceptStart > now) {
		status = "UPCOMING";
	}

	return {
		externalId: item.id,
		name: item.name,
		title: item.title,
		catchPhrase: item.subsidy_catch_phrase,
		description: item.detail,
		usePurpose: item.use_purpose,
		subsidyMaxLimit: item.subsidy_max_limit
			? BigInt(item.subsidy_max_limit)
			: null,
		subsidyRate: item.subsidy_rate,
		acceptanceStartDatetime: acceptStart,
		acceptanceEndDatetime: acceptEnd,
		projectEndDeadline: item.project_end_deadline
			? new Date(item.project_end_deadline)
			: null,
		targetAreaSearch: item.target_area_search,
		targetAreaDetail: item.target_area_detail,
		targetNumberOfEmployees: item.target_number_of_employees,
		industry: item.industry,
		requestReceptionPresence: item.request_reception_presence ?? false,
		isEnableMultipleRequest: item.is_enable_multiple_request ?? false,
		frontSubsidyDetailPageUrl: item.front_subsidy_detail_page_url,
		applicationGuidelines: item.application_guidelines,
		outlineOfGrant: item.outline_of_grant,
		applicationForm: item.application_form,
		status,
	};
}

/** Parse "東京都 / 大阪府" into ["東京都", "大阪府"] */
export function parseRegions(targetAreaSearch: string | null): string[] {
	if (!targetAreaSearch) return [];
	return targetAreaSearch
		.split(/[\/、,]/)
		.map((s) => s.trim())
		.filter(Boolean);
}

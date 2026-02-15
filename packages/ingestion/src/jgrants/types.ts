/** jGrants V1 List endpoint response */
export interface JGrantsListResponse {
	metadata: {
		type: string;
		resultset: {
			count: number;
		};
	};
	result: JGrantsListItem[];
}

/** Fields returned by GET /v1/public/subsidies */
export interface JGrantsListItem {
	id: string;
	name: string;
	title: string;
	target_area_search: string | null;
	subsidy_max_limit: number | null;
	acceptance_start_datetime: string | null;
	acceptance_end_datetime: string | null;
	target_number_of_employees: string | null;
}

/** Fields returned by GET /v1/public/subsidies/id/{id} */
export interface JGrantsDetailItem extends JGrantsListItem {
	subsidy_catch_phrase: string | null;
	detail: string | null;
	use_purpose: string | null;
	industry: string | null;
	target_area_detail: string | null;
	subsidy_rate: string | null;
	project_end_deadline: string | null;
	request_reception_presence: boolean;
	is_enable_multiple_request: boolean;
	front_subsidy_detail_page_url: string | null;
	application_guidelines: string | null;
	outline_of_grant: string | null;
	application_form: string | null;
}

/** V2 Detail response */
export interface JGrantsV2DetailItem extends JGrantsDetailItem {
	granttype: string | null;
	workflow: JGrantsWorkflowEntry[] | null;
}

export interface JGrantsWorkflowEntry {
	fiscal_year_round: string | null;
	target_area: string | null;
	acceptance_start_datetime: string | null;
	acceptance_end_datetime: string | null;
	project_start_datetime: string | null;
	project_end_datetime: string | null;
}

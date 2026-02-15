import { type NextRequest, NextResponse } from "next/server";
import { buildPaginatedResponse, parsePagination } from "@subsidy-scope/api";
import { filterSubsidies } from "@/lib/mock-data";

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);

	const keyword = searchParams.get("keyword") || undefined;
	const status = searchParams.get("status") || undefined;
	const region = searchParams.get("region") || undefined;

	const { page, limit } = parsePagination(request, { page: 1, limit: 20 });

	const results = filterSubsidies({
		keyword,
		status,
		region,
		page,
		limit,
	});

	const response = buildPaginatedResponse(results.data, results.total, {
		page,
		limit,
		skip: (page - 1) * limit,
	});

	return NextResponse.json(response);
}

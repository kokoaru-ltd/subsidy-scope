import { type NextRequest, NextResponse } from "next/server";
import { getSubsidyById } from "@/lib/mock-data";

export async function GET(
	_request: NextRequest,
	{ params }: { params: Promise<{ id: string }> },
) {
	const { id } = await params;
	const subsidy = getSubsidyById(id);

	if (!subsidy) {
		return NextResponse.json({ error: "Subsidy not found" }, { status: 404 });
	}

	return NextResponse.json({ data: subsidy });
}

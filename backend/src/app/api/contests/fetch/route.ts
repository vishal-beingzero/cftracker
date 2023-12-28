import { fetchAndSaveAllContests } from "@/features/contests/services/ContestService";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	const res = await fetchAndSaveAllContests();
	console.log(res);

	return NextResponse.json(res);
}
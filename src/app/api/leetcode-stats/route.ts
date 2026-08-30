import { NextResponse } from "next/server";
import { fetchLeetCodeStats } from "@/lib/leetcode";

export const revalidate = 3600; // Cache and revalidate hourly
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await fetchLeetCodeStats();
    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    console.error("GET /api/leetcode-stats error:", error);
    return NextResponse.json(
      { error: "Failed to fetch LeetCode statistics" },
      { status: 500 }
    );
  }
}

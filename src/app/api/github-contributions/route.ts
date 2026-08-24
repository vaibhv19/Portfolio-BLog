import { NextResponse } from "next/server";
import { fetchGitHubContributions } from "@/lib/github";

export const revalidate = 86400; // Cache and revalidate daily (24 hours)

export async function GET() {
  try {
    const data = await fetchGitHubContributions();
    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=43200",
      },
    });
  } catch (error) {
    console.error("GET /api/github-contributions error:", error);
    return NextResponse.json(
      { error: "Failed to fetch GitHub contribution data" },
      { status: 500 }
    );
  }
}

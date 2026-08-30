export interface LeetCodeStatsData {
  username: string;
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  ranking: number | null;
  acceptanceRate: number | null;
  totalSubmissions: number;
  updatedAt: string;
}

export const DEFAULT_LEETCODE_USERNAME = (
  process.env.NEXT_PUBLIC_LEETCODE_USERNAME ||
  process.env.LEETCODE_USERNAME ||
  "vaibhv_19"
).trim();

export async function fetchLeetCodeStats(
  username: string = DEFAULT_LEETCODE_USERNAME
): Promise<LeetCodeStatsData> {
  // 1. Try Official LeetCode GraphQL API
  try {
    const graphqlQuery = {
      query: `
        query userProblemsSolved($username: String!) {
          matchedUser(username: $username) {
            username
            profile {
              ranking
            }
            submitStatsGlobal {
              acSubmissionNum {
                difficulty
                count
                submissions
              }
              totalSubmissionNum {
                difficulty
                count
                submissions
              }
            }
          }
          allQuestionsCount {
            difficulty
            count
          }
        }
      `,
      variables: { username },
    };

    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)",
      },
      body: JSON.stringify(graphqlQuery),
      next: { revalidate: 3600 },
    });

    if (res.ok) {
      const json = await res.json();
      const matchedUser = json.data?.matchedUser;
      const allQuestions = json.data?.allQuestionsCount || [];

      if (matchedUser) {
        const acStats: { difficulty: string; count: number; submissions: number }[] =
          matchedUser.submitStatsGlobal?.acSubmissionNum || [];
        const totalStats: { difficulty: string; count: number; submissions: number }[] =
          matchedUser.submitStatsGlobal?.totalSubmissionNum || [];

        const allSolved = acStats.find((s) => s.difficulty === "All")?.count || 0;
        const easySolved = acStats.find((s) => s.difficulty === "Easy")?.count || 0;
        const mediumSolved = acStats.find((s) => s.difficulty === "Medium")?.count || 0;
        const hardSolved = acStats.find((s) => s.difficulty === "Hard")?.count || 0;

        const totalQuestions = allQuestions.find((q: { difficulty: string; count: number }) => q.difficulty === "All")?.count || 3400;
        const totalEasy = allQuestions.find((q: { difficulty: string; count: number }) => q.difficulty === "Easy")?.count || 850;
        const totalMedium = allQuestions.find((q: { difficulty: string; count: number }) => q.difficulty === "Medium")?.count || 1750;
        const totalHard = allQuestions.find((q: { difficulty: string; count: number }) => q.difficulty === "Hard")?.count || 800;

        const totalSubmissions = totalStats.find((s) => s.difficulty === "All")?.submissions || 0;
        const totalAcSubmissions = acStats.find((s) => s.difficulty === "All")?.submissions || 0;
        const acceptanceRate = totalSubmissions > 0
          ? Math.round((totalAcSubmissions / totalSubmissions) * 1000) / 10
          : null;

        return {
          username,
          totalSolved: allSolved,
          totalQuestions,
          easySolved,
          totalEasy,
          mediumSolved,
          totalMedium,
          hardSolved,
          totalHard,
          ranking: matchedUser.profile?.ranking || null,
          acceptanceRate,
          totalSubmissions,
          updatedAt: new Date().toISOString(),
        };
      }
    }
  } catch (err) {
    console.error("Official LeetCode GraphQL fetch failed, attempting REST API fallback:", err);
  }

  // 2. Try Alfa LeetCode Public REST API (secondary reliable hosted proxy)
  try {
    const res = await fetch(
      `https://alfa-leetcode-api.onrender.com/userProfile/${encodeURIComponent(username)}`,
      { next: { revalidate: 86400 } }
    );

    if (res.ok) {
      const data = await res.json();
      if (data && typeof data.totalSolved === "number") {
        const totalSubmissions = data.totalSubmissions?.find(
          (s: { difficulty: string; submissions: number }) => s.difficulty === "All"
        )?.submissions || 0;
        const totalAcSubmissions = data.matchedUserStats?.acSubmissionNum?.find(
          (s: { difficulty: string; submissions: number }) => s.difficulty === "All"
        )?.submissions || data.totalSolved;

        const acceptanceRate = totalSubmissions > 0
          ? Math.round((totalAcSubmissions / totalSubmissions) * 1000) / 10
          : null;

        return {
          username,
          totalSolved: data.totalSolved,
          totalQuestions: data.totalQuestions || 3400,
          easySolved: data.easySolved || 0,
          totalEasy: data.totalEasy || 850,
          mediumSolved: data.mediumSolved || 0,
          totalMedium: data.totalMedium || 1750,
          hardSolved: data.hardSolved || 0,
          totalHard: data.totalHard || 800,
          ranking: data.ranking || null,
          acceptanceRate,
          totalSubmissions,
          updatedAt: new Date().toISOString(),
        };
      }
    }
  } catch (err) {
    console.error("Alfa LeetCode API fetch failed:", err);
  }

  // 3. Robust Fallback Snapshot (guarantees zero UI breakage if external APIs are unreachable)
  return getFallbackLeetCodeStats(username);
}

export function getFallbackLeetCodeStats(
  username: string = DEFAULT_LEETCODE_USERNAME
): LeetCodeStatsData {
  return {
    username,
    totalSolved: 103,
    totalQuestions: 3400,
    easySolved: 39,
    totalEasy: 850,
    mediumSolved: 54,
    totalMedium: 1750,
    hardSolved: 10,
    totalHard: 800,
    ranking: 1648575,
    acceptanceRate: 64.5,
    totalSubmissions: 220,
    updatedAt: new Date().toISOString(),
  };
}

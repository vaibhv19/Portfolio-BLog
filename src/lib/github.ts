export interface ContributionDay {
  date: string;
  count: number;
  level: number;
  weekday: number;
}

export type ContributionWeek = ContributionDay[];

export interface GitHubContributionsData {
  username: string;
  totalContributions: number;
  weeks: ContributionWeek[];
  updatedAt: string;
}

export const DEFAULT_GITHUB_USERNAME =
  process.env.NEXT_PUBLIC_GITHUB_USERNAME ||
  process.env.GITHUB_USERNAME ||
  "vaibhv19";

function calculateLevel(count: number): number {
  if (count <= 0) return 0;
  if (count <= 3) return 1;
  if (count <= 6) return 2;
  if (count <= 9) return 3;
  if (count <= 12) return 4;
  return 5;
}

export async function fetchGitHubContributions(
  username: string = DEFAULT_GITHUB_USERNAME
): Promise<GitHubContributionsData> {
  const token = process.env.GITHUB_TOKEN || process.env.GITHUB_PAT;

  // 1. Try Official GitHub GraphQL API if server token is available
  if (token) {
    try {
      const graphqlQuery = {
        query: `
          query($username: String!) {
            user(login: $username) {
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      contributionCount
                      date
                      weekday
                    }
                  }
                }
              }
            }
          }
        `,
        variables: { username },
      };

      const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token.trim()}`,
          "Content-Type": "application/json",
          "User-Agent": "portfolio-website",
        },
        body: JSON.stringify(graphqlQuery),
        next: { revalidate: 3600 },
      });

      if (res.ok) {
        const json = await res.json();
        const calendar =
          json.data?.user?.contributionsCollection?.contributionCalendar;

        if (calendar) {
          const rawWeeks = calendar.weeks || [];
          const formattedWeeks: ContributionWeek[] = rawWeeks.map(
            (w: {
              contributionDays: {
                contributionCount: number;
                date: string;
                weekday: number;
              }[];
            }) =>
              w.contributionDays.map((d) => ({
                date: d.date,
                count: d.contributionCount,
                level: calculateLevel(d.contributionCount),
                weekday: d.weekday,
              }))
          );

          // Keep last 48 weeks for optimal responsive UI layout
          const weeks = formattedWeeks.slice(-48);

          return {
            username,
            totalContributions: calendar.totalContributions || 0,
            weeks,
            updatedAt: new Date().toISOString(),
          };
        }
      }
    } catch (err) {
      console.error("GraphQL GitHub fetch failed, attempting public REST API fallback:", err);
    }
  }

  // 2. Try Public GitHub Contributions API (tokenless)
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=last`,
      { next: { revalidate: 86400 } }
    );

    if (res.ok) {
      const data = await res.json();
      const rawContributions: { date: string; count: number; level: number }[] =
        data.contributions || [];

      let totalContributions = 0;
      const days: ContributionDay[] = rawContributions.map((c) => {
        totalContributions += c.count || 0;
        const d = new Date(c.date);
        return {
          date: c.date,
          count: c.count || 0,
          level: c.level !== undefined ? c.level : calculateLevel(c.count || 0),
          weekday: isNaN(d.getTime()) ? 0 : d.getDay(),
        };
      });

      // Group into 7-day weeks
      const weeks: ContributionWeek[] = [];
      for (let i = 0; i < days.length; i += 7) {
        weeks.push(days.slice(i, i + 7));
      }

      const slicedWeeks = weeks.slice(-48);

      return {
        username,
        totalContributions: data.total?.lastYear || totalContributions,
        weeks: slicedWeeks,
        updatedAt: new Date().toISOString(),
      };
    }
  } catch (err) {
    console.error("Public GitHub contributions API fetch failed:", err);
  }

  // 3. Robust Fallback Data Generator (ensures UI never breaks if APIs are down)
  return getFallbackContributions(username);
}

export function getFallbackContributions(
  username: string = DEFAULT_GITHUB_USERNAME
): GitHubContributionsData {
  const totalWeeks = 48;
  const daysPerWeek = 7;
  const weeks: ContributionWeek[] = [];
  const today = new Date();
  let total = 0;

  for (let w = totalWeeks - 1; w >= 0; w--) {
    const weekDays: ContributionDay[] = [];
    for (let d = 6; d >= 0; d--) {
      const dayDate = new Date(today);
      dayDate.setDate(today.getDate() - (w * 7 + d));
      const dateStr = dayDate.toISOString().split("T")[0];

      // Deterministic fallback activity pattern based on day index
      const seed = (w * 7 + d * 13) % 100;
      let count = 0;
      if (seed > 40 && seed <= 65) count = 2;
      else if (seed > 65 && seed <= 85) count = 5;
      else if (seed > 85 && seed <= 95) count = 8;
      else if (seed > 95) count = 12;

      total += count;
      weekDays.push({
        date: dateStr,
        count,
        level: calculateLevel(count),
        weekday: dayDate.getDay(),
      });
    }
    weeks.push(weekDays);
  }

  return {
    username,
    totalContributions: total,
    weeks,
    updatedAt: new Date().toISOString(),
  };
}

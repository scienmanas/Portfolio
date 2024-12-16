export const handler = async (event) => {

  // Get user name
  const { userName } = event;
  const authToken = process.env.GITHUB_ACCESS_TOKEN

  // query
  const query = `
    query {
      user(login: "${userName}") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }
    `;

  try {
    // Send request
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${authToken}`,
      },
      body: JSON.stringify({ query }),
    });

    // Parse and send data
    const data = await response.json();
    const flatContributions =
      data.data.user.contributionsCollection.contributionCalendar.weeks.flatMap(
        (week) =>
          week.contributionDays.map((day) => ({
            date: day.date,
            count: day.contributionCount,
          }))
      );

    return {
      statusCode: 200,
      body: JSON.stringify({
        contributions: flatContributions,
        totalContributions: data.data.user.contributionsCollection.contributionCalendar
          .totalContributions,
        maxContribution: Math.max(
          ...flatContributions.map(
            (day) => day.count
          )
        ),
      }),
    }

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Internal Server Error"
      })
    }
  }

};

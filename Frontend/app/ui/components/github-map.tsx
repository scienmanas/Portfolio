"use client";

import { motion } from "framer-motion";
import CalendarHeatmap from "react-calendar-heatmap";
import { useState, useLayoutEffect } from "react";

const USER_NAME = "scienmanas";
interface ContributionDay {
  date: string;
  contributionCount: number;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

export function GithubMap(): JSX.Element {
  const [contributionData, setContributionData] = useState<{
    contribution: { date: string; count: number }[];
    totalcontribution: number;
    maxContribution: number;
  }>({
    contribution: [],
    totalcontribution: 0,
    maxContribution: 0,
  });
  const [contributionTimeBounds, setContributionTimeBounds] = useState<null | {
    startDate: string;
    endDate: string;
  }>(null);

  const fetchGithubData = async () => {
    // Query
    const query = `
        query {
          user(login: "${USER_NAME}") {
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

    console.log(auth);
    // Call the GitHub API
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${auth}`,
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    const flatContributions =
      data.data.user.contributionsCollection.contributionCalendar.weeks.flatMap(
        (week: ContributionWeek) =>
          week.contributionDays.map((day) => ({
            date: day.date,
            count: day.contributionCount,
          }))
      );

    // Set the contribution data
    setContributionData({
      contribution: flatContributions,
      totalcontribution:
        data.data.user.contributionsCollection.contributionCalendar
          .totalContributions,
      maxContribution: Math.max(
        ...flatContributions.map(
          (day: { date: string; count: number }) => day.count
        )
      ),
    });
  };

  useLayoutEffect(() => {
    const today = new Date();
    const startDate =
      String(today.getFullYear() - 1) +
      "-" +
      String(today.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(today.getDate()).padStart(2, "0");
    const endDate =
      today.getFullYear() +
      "-" +
      String(today.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(today.getDate()).padStart(2, "0");
    // Set the contribution date bounds
    setContributionTimeBounds({
      startDate: startDate,
      endDate: endDate,
    });
    // Fetch the GitHub data
    fetchGithubData();
  }, []);

  return (
    <section className="github-map w-full h-fit flex items-center justify-center font-mono">
      <div className="wrapper w-full max-w-screen-xl h-fit flex items-start justify-start px-5 flex-col gap-6">
        <motion.div
          initial={{
            opacity: 0,
            x: -10,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.4,
            duration: 0.6,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="heading font-semibold text-xl sm:text-2xl flex flex-row items-center gap-1 w-fit"
        >
          <span className="w-fit h-fit dark:text-[#c778dd] text-[#6d2f7f]">
            ${" "}
          </span>
          <span className="font-mono w-fit h-fit text-neutral-800 dark:text-neutral-200">
            github map
          </span>
        </motion.div>
        <div className="map-and-contributions w-full h-fit flex flex-col items-start gap-4">
          <motion.div
            initial={{
              opacity: 0,
              x: 10,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 0.6,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="github-map w-[98%] sm:w-[30rem] md:w-[35rem] lg:w-[40rem]"
          >
            <CalendarHeatmap
              startDate={contributionTimeBounds?.startDate}
              endDate={contributionTimeBounds?.endDate}
              values={contributionData.contribution}
              classForValue={(value) => {
                if (!value) {
                  return "color-empty";
                }
                return `color-github-${Math.ceil(
                  (value.count / contributionData.maxContribution) * 10
                )}`;
              }}
            />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 10,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 0.6,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="total-contributions w-fit h-fit text-wrap text-xs sm:text-sm"
          >
            <span>Total Contribution: </span>
            <span className="font-semibold text-[#9d174d] underline">
              {contributionData.totalcontribution}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

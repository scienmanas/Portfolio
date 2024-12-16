"use client";

import { motion } from "framer-motion";
import CalendarHeatmap from "react-calendar-heatmap";
import { useState, useLayoutEffect } from "react";

const USER_NAME = "scienmanas";
const API_URI =
  "https://2zazwk200k.execute-api.us-east-1.amazonaws.com/Production/github-contribution";

export function GithubMap(): JSX.Element {
  const [isFetchSuccessful, setIsFetchSuccessful] = useState<boolean | null>(
    null
  );
  const [contributionData, setContributionData] = useState<{
    contributions: { date: string; count: number }[];
    totalcontributions: number;
    maxContribution: number;
  }>({
    contributions: [],
    totalcontributions: 0,
    maxContribution: 0,
  });
  const [contributionTimeBounds, setContributionTimeBounds] = useState<null | {
    startDate: string;
    endDate: string;
  }>(null);

  const fetchGithubData = async () => {
    // Call the API

    try {
      const response = await fetch(API_URI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: USER_NAME,
        }),
      });

      const data = await response.json();
      if (data.statusCode === 200) {
        const parsedData = JSON.parse(data.body);
        setContributionData({
          contributions: parsedData.contributions,
          totalcontributions: parsedData.totalContributions,
          maxContribution: parsedData.maxContribution,
        });
      } else if (data.statusCode !== 200 || response.status !== 200) {
        setIsFetchSuccessful(false);
      }
    } catch (error) {
      setIsFetchSuccessful(false);
    }
  };

  // Paint DOM after the component is mounted
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
    <section
      className={`github-map w-full h-fit flex items-center justify-center font-mono ${
        isFetchSuccessful === false || isFetchSuccessful === null
          ? "hidden"
          : ""
      }`}
    >
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
              values={contributionData.contributions}
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
              {contributionData.totalcontributions}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

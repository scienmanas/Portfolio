"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { achievementsData } from "@/app/lib/constants";

export function Flex(): JSX.Element {
  // Ref for achievements
  const achievementRef = useRef<HTMLDivElement>(null);
  const achievementRefIsInView = useInView(achievementRef, { once: true });

  return (
    <section className="w-full h-fit flex items-center justify-center">
      <div className="wrapper w-full h-fit max-w-screen-xl flex flex-col gap-5 px-5 items-start">
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
          className="heading flex flex-row gap-1 w-fit h-fit items-center text-neutral-900 dark:text-white text-xl sm:text-2xl font-semibold"
        >
          <span className="dark:text-[#c788dd] text-[#6d2f7f]">$</span>
          <span className="font-mono sm:translate-y-1">flex 🥱 </span>
        </motion.div>
        <div className="some-words font-mono flex flex-col gap-6">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.4,
              duration: 0.6,
              ease: "easeIn",
            }}
            viewport={{ once: true }}
            className="w-fit h-fit text-neutral-800 dark:text-white text-sm sm:text-base"
          >
            The thing I really flex is my{" "}
            <span className="dark:text-[#c778dd] text-[#6d2f7f]">
              consistency, commitment & straightforwardness
            </span>
            , I give to the task which I take. I always push myself until I am
            completely exhausted and can't handle any more. I have a simple
            policy, I don't give a fcuk to anything which comes twisted to me.
          </motion.div>
          <div className="info-plus-data-achievements flex flex-col gap-10 items-start text-sm sm:text-base">
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
                ease: "easeIn",
              }}
              className="more-info-2nd-para w-fit h-fit"
              viewport={{ once: true }}
            >
              Okay, I said enough, some of my{" "}
              <span className="dark:text-[#c778dd] text-[#6d2f7f]">
                on-paper achievements
              </span>
              :
            </motion.div>
            <div className="timeline flex gap-5 py-5 flex-row rounded-lg relative">
              <motion.div
                initial={{
                  opacity: 1,
                  height: 0,
                  borderTopLeftRadius: "8px",
                }}
                whileInView={{
                  height: "100%",
                  borderRadius: "8px",
                }}
                transition={{
                  delay: 0.6,
                  duration: 0.3 * achievementsData.length,
                  ease: "easeInOut",
                }}
                ref={achievementRef}
                viewport={{ once: true }}
                className="timeline w-full -left-[2px] top-0 h-full border-l-2 border-neutral-900 dark:border-neutral-300 absolute z-10 rounded-lg"
              ></motion.div>
              <div className="list z-10 flex flex-col gap-5">
                {achievementsData.map((achievement, index) => (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 5,
                    }}
                    animate={
                      achievementRefIsInView
                        ? {
                            opacity: 1,
                            y: 0,
                          }
                        : {}
                    }
                    transition={{
                      delay: 0.6 + index * 0.3,
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                    key={index}
                    className="timeline-item relative px-5 before:absolute before:w-3 before:h-3 dark:before:bg-white before:bg-pink-800 before:-left-[7px] before:border before:border-cyan-400 dark:before:border-red-400 before:rounded-full "
                  >
                    <div className="timeline-content">
                      <span className="text-[#6d2f7f] dark:text-[#d4a3e6] font-semibold">
                        {achievement.name}:{" "}
                      </span>
                      <span className="dark:text-neutral-300 text-neutral-700 text-xs sm:text-sm">
                        {achievement.description}{" "}
                      </span>
                      {achievement.date && (
                        <span className="dark:text-neutral-500 text-neutral-500 text-[0.6rem] sm:text-xs">
                          ({achievement.date}){" "}
                        </span>
                      )}
                      {achievement.link && (
                        <Link
                          href={achievement.link}
                          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 duration-300 text-[0.6rem] sm:text-xs"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View more
                        </Link>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

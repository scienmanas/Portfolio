"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { skills } from "@/app/lib/constants";
import { FaSortDown } from "react-icons/fa";

export function Skills() {
  return (
    <section className="skills w-full flex h-fit flex-col gap-4 items-start justify-center">
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        viewport={{ once: true }}
        className="heading w-full h-fit text-neutral-800 dark:text-neutral-100 text-xl sm:text-2xl flex gap-1 items-center"
      >
        <span className="text-[#6d2f7f] dark:text-[#c778dd] w-fit h-fit">
          $
        </span>
        <span className="w-fit h-fit font-mono sm:translate-y-1">skills</span>
      </motion.div>

      <div className="content-wrapper flex flex-col w-full items-start gap-5 font-mono">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6, ease: "easeIn" }}
          viewport={{ once: true }}
          className="description text-sm sm:text-base w-full h-fit text-neutral-800 dark:text-neutral-100"
        >
          I am someone who tries many things out, gets in trouble, and
          eventually solves it. Being a{" "}
          <span className="dark:text-[#c888dd] text-[#6d2f7f]">
            self-taught guy
          </span>{" "}
          (with GPT and docs), I haven't followed any specific path. I have
          tried out 🛡️ cyber security, ✏️ CAD designing, a bit of Arduino 🤖,
          but then shifted to development 💻.
        </motion.div>

        <div className="skill-box w-full h-fit flex flex-col gap-2 items-start">
          {skills.map((skillData, index1) => (
            <div
              key={index1}
              className="skill flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full h-fit justify-start"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  delay: 1 + index1 * 0.2,
                  duration: 0.2,
                }}
                viewport={{ once: true }}
                className="skill-category text-[#6d2f7f] dark:text-[#c891d7] font-semibold text-sm sm:text-base w-fit h-fit"
              >
                {skillData.category}:
              </motion.div>
              <div className="all-skills flex flex-wrap gap-4 w-full">
                {skillData.skills.map((skill, index2) => (
                  <motion.div
                    key={index2}
                    className="skill relative flex items-center w-fit h-fit justify-center group mb-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.2,
                      delay: 1 + 0.6 + index2 * 0.2,
                      ease: "easeInOut",
                    }}
                    viewport={{ once: true }}
                  >
                    {typeof skill.icon === "string" ? (
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        className="dark:text-white text-neutral-900 w-[48px] h-[48px] scale-90"
                      />
                    ) : (
                      <skill.icon className="dark:text-white text-neutral-900 w-[48px] h-[48px] scale-90" />
                    )}

                    <div className="placeholder w-auto whitespace-nowrap h-fit absolute -top-7 opacity-0 group-hover:opacity-100 flex transition-all transform flex-col items-center justify-center duration-300">
                      <div className="content-holder relative w-fit h-fit flex flex-col items-center justify-center">
                        <span className="dark:bg-neutral-700 bg-neutral-300 text-neutral-900 dark:text-neutral-300 rounded-md text-nowrap w-fit h-fit py-1 px-2 text-xs">
                          {skill.name}
                        </span>
                        <FaSortDown className="w-fit h-fit dark:text-neutral-700 text-neutral-300 relative bottom-3 text-lg" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

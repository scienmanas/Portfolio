"use client";

import { motion } from "framer-motion";
import cppSvg from "@/public/assets/svg/c++.svg";
import pythonSvg from "@/public/assets/svg/python.svg";
import jsSvg from "@/public/assets/svg/javascript.svg";
import tsSvg from "@/public/assets/svg/typescript.svg";
import reactSvg from "@/public/assets/svg/react-js.svg";
import { SiNextdotjs } from "react-icons/si";
import tailwindSvg from "@/public/assets/svg/tailwind-css.svg";
import reactNativeSvg from "@/public/assets/svg/react-native.svg";
import { FaNode, FaSortDown } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import mongodbSvg from "@/public/assets/svg/mongodb.svg";
import sqlSvg from "@/public/assets/svg/my-sql.svg";
import gitSvg from "@/public/assets/svg/git.svg";
import dockerSvg from "@/public/assets/svg/docker.svg";
import gcpSvg from "@/public/assets/svg/google-cloud.svg";
import awslambdaSvg from "@/public/assets/svg/awslambda.svg";
import { IconType } from "react-icons";

interface Skill {
  name: string;
  icon: IconType | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

interface SkillsCategorised {
  category: string;
  skills: Skill[];
}

export function Skills(): JSX.Element {
  const skillsCategorised: SkillsCategorised[] = [
    {
      category: "Languages",
      skills: [
        { name: "C++", icon: cppSvg },
        { name: "Python", icon: pythonSvg },
        { name: "JavaScript", icon: jsSvg },
        { name: "TypeScript", icon: tsSvg },
      ],
    },
    {
      category: "Frontend",
      skills: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "React.js", icon: reactSvg },
        { name: "Tailwind CSS", icon: tailwindSvg },
        { name: "React Native", icon: reactNativeSvg },
      ],
    },
    {
      category: "Backend & Database",
      skills: [
        { name: "Node.js", icon: FaNode },
        { name: "MongoDB", icon: mongodbSvg },
        { name: "Express.js", icon: SiExpress },
        { name: "SQL", icon: sqlSvg },
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "Git", icon: gitSvg },
        { name: "Docker", icon: dockerSvg },
        { name: "GCP", icon: gcpSvg },
        { name: "AWS (Lambda Functions)", icon: awslambdaSvg },
      ],
    },
  ];

  return (
    <section className="skills w-full flex items-center justify-center h-fit">
      <div className="wrapper w-full max-w-screen-xl h-fit px-5 flex flex-col gap-4 items-start justify-center">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
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
            {skillsCategorised.map((skillData, index1) => (
              <div
                key={index1}
                className="skill flex flex-row items-center gap-2"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    delay: 1 + index1*0.2,
                    duration: 0.2,
                  }}
                  className="skill-category text-[#6d2f7f] dark:text-[#c891d7] font-semibold text-sm sm:text-base"
                >
                  {skillData.category}:
                </motion.div>
                <div className="all-skills flex flex-row gap-4">
                  {skillData.skills.map((skill, index2) => (
                    <motion.div
                      key={index2}
                      className="skill relative flex items-center w-full h-fit justify-center group"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 1 + 0.6 + index2 * 0.2,
                        ease: "easeInOut",
                      }}
                    >
                      {typeof skill.icon === "string" ? (
                        <img
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
      </div>
    </section>
  );
}

"use client";

import rough from "roughjs"; // Imported roughjs for SVG
import { useEffect, useState } from "react";
import clsx from "clsx";
import roughArrowImg from "@/public/assets/landing/rough-arrow.png";
import holderImg from "@/public/assets/landing/holder.png";
import heroImg from "@/public/assets/landing/hero.png";
import Image from "next/image";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

export function Hero() {
  // For rough line animation
  const [isRendered, setIsRendered] = useState<boolean>(false);

  useEffect(() => {
    const svg = document.getElementById(
      "rough-line"
    ) as unknown as SVGSVGElement;
    if (svg) {
      const rc = rough.svg(svg);
      const roughLine = rc.line(0, 0, 300, 10, {
        stroke: "#ffa500",
        strokeWidth: 2,
        roughness: 4,
      });
      svg.appendChild(roughLine); // Append the generated line to the SVG
      setIsRendered(true);
    }
  }, []); // Ensure SVG is initialized once on mount

  return (
    <section className="hero w-full h-fit flex items-center justify-center flex-col">
      <div className="intro-desc-wrapper relative flex flex-col gap-6">
        <div className="bg-image-floating absolute">
          <Image
            alt="bg-img"
            src={heroImg}
            className="dark:opacity-30 opacity-15"
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true }}
          className="introduction-heading relative z-10 flex flex-col gap-1 w-fit h-fit"
        >
          <div className="heading-or-loading text-neutral-800 dark:text-neutral-100 text-2xl sm:text-3xl font-mono tracking-tighter">
            Hey there!
          </div>
          <div className="relative name-intro-or-loading text-white w-fit h-fit dark:text-white text-3xl sm:text-4xl font-mono">
            <div className="text relative w-fit h-fit dark:text-neutral-100 text-neutral-700">
              I'm{" "}
              <span className="dark:text-[#c778dd] text-[#593563]">
                <ReactTyped
                  strings={["Manas"]}
                  startDelay={400}
                  typeSpeed={100}
                  showCursor={true}
                />
              </span>
            </div>
            <div className="svg-container absolute w-full h-full inset-0 bottom-0 flex items-end">
              <svg
                id="rough-line"
                className={clsx(
                  `rough-line h-[10px] relative translate-y-3 transition-all duration-300 ${
                    isRendered ? "w-full" : "w-0"
                  }`
                )} // Set an explicit height
                viewBox="0 0 320 40" // Adjust viewBox to fit the line
                preserveAspectRatio="none"
              ></svg>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1, type: "spring" }}
          viewport={{ once: true }}
          className="my-description relative z-10 font-mono dark:text-white text-base text-neutral-800 sm:text-lg w-fit h-fit"
        >
          Stepped into programming and development in 2023, and I'm now a{" "}
          <span className="w-fit h-fit">
            <span className="dark:text-[#c778dd] text-[#6d2f7f] font-semibold">
              Full-Stack Developer
            </span>
          </span>
          . I began with{" "}
          <span className="dark:text-[#c778dd] text-[#6d2f7f] font-semibold">
            C++, Python, and JavaScript
          </span>
          , and have transitioned to{" "}
          <span className="dark:text-[#c778dd] text-[#6d2f7f] font-semibold">
            TypeScript
          </span>
          . I excel in writing clean, scalable code and have experience building
          mobile applications with{" "}
          <span className="dark:text-[#c778dd] text-[#6d2f7f] font-semibold">
            React Native
          </span>
          . Additionally, I have a basic understanding of{" "}
          <span className="dark:text-[#c778dd] text-[#6d2f7f] font-semibold">
            GCP and AWS
          </span>
          .
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 1, type: "spring" }}
          viewport={{ once: true }}
          className="more-about-me text-sm sm:text-base font-mono dark:text-white text-neutral-800 w-fit h-fit"
        >
          I am still crazy about{" "}
          <span className="dark:text-[#c778dd] text-[#6d2f7f] font-semibold">
            cartoons
          </span>{" "}
          🧙 (pokemon, beyblade, shinchan, etc), When I'm not with my laptop,
          you'll find me reading (fictional) 🤓 or talking to my mom.
        </motion.div>
      </div>
      <div className="relative chad-quote-component w-full h-fit mt-6 flex items-center justify-center flex-col gap-14">
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 3, duration: 1, type: "spring" }}
          viewport={{ once: true }}
          className="heading-chad w-full h-fit text-lg sm:text-xl flex flex-row items-center gap-1"
        >
          <span className="text-xl text-[#6d2f7f] dark:text-[#c778dd]">$</span>
          <span className="w-fit h-fit font-mono dark:text-white text-neutral-700">
            <span className="dark:text-cyan-400 text-cyan-800 underline">
              sudo
            </span>{" "}
            apt install "quote"
          </span>
        </motion.div>
        <div className="quote-and-appreciation-wrapper w-full h-fit flex flex-col gap-10 items-center justify-center font-mono">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 3, duration: 1, type: "spring" }}
            viewport={{ once: true }}
            className="relative quote w-full text-center h-fit border dark:border-neutral-200 border-neutral-700 border-dashed px-4 pt-6 pb-10 flex flex-row gap-2 flex-wrap items-center justify-center"
          >
            <div className="banner absolute -top-9 left-10">
              <Image
                width={40}
                height={40}
                src={holderImg}
                alt="holder-img"
                className="w-fit h-fit pointer-events-none"
              />
            </div>
            <div className="banner absolute -top-9 right-10">
              <Image
                width={40}
                height={40}
                src={holderImg}
                alt="holder-img"
                className="w-fit h-fit pointer-events-none"
              />
            </div>
            <div className="corner-dots absolute h-2 w-2 border border-pink-400 bg-cyan-400 rounded-full -left-1 -top-1"></div>
            <div className="corner-dots absolute h-2 w-2 border border-pink-400 bg-cyan-400 rounded-full -right-1 -top-1"></div>
            <div className="corner-dots absolute h-2 w-2 border border-pink-400 bg-cyan-400 rounded-full -left-1 -bottom-1"></div>
            <div className="corner-dots absolute h-2 w-2 border border-pink-400 bg-cyan-400 rounded-full -right-1 -bottom-1"></div>
            <div className="wrapper w-fit h-fit">
              <span className="relative quote w-fit h-fit text-sm sm:text-base">
                “The present is theirs; the future, for which I really worked,
                is mine.”
              </span>
              <span className="relative dark:text-[#c778dd] text-[#6d2f7f] -bottom-6 w-fit h-fit text-sm sm:text-base">
                ~ Nikola Tesla
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, rotate: "-45deg" }}
            transition={{ delay: 4, duration: 1, type: "spring" }}
            viewport={{ once: true }}
            className="arrow-rough absolute bottom-10 left-0  w-fit h-fit"
          >
            <Image
              src={roughArrowImg}
              alt="rough-arrow"
              width={100}
              height={100}
              className="pointer-events-none"
            />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 4, duration: 1, type: "spring" }}
            viewport={{ once: true }}
            className="chad-answer relative w-full h-fit text-neutral-900 dark:text-white text-sm sm:text-base"
          >
            I regard him as my ideal :)
          </motion.div>
        </div>
      </div>
    </section>
  );
}

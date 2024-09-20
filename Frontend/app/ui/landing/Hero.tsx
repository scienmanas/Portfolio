"use client";

import rough from "roughjs"; // Imported roughjs for SVG
import { useEffect, useState } from "react";
import clsx from "clsx";
import roughArrowImg from "@/public/assets/landing/rough-arrow.png";
import holderImg from "@/public/assets/landing/holder.png";
import heroImg from "@/public/assets/landing/hero.png";
import Image from "next/image";

export function Hero(): JSX.Element {
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
    <section className="hero w-full h-fit flex items-center justify-center">
      <div className="wrapper w-full max-w-screen-xl flex py-4 px-5 flex-col gap-6">
        <div className="intro-desc-wrapper relative flex flex-col gap-6">
          <div className="bg-image-floating absolute">
            <Image alt="bg-img" src={heroImg} className="opacity-30" />
          </div>
          <div className="introduction-heading relative z-10 flex flex-col gap-1 w-fit h-fit">
            <div className="heading-or-loading text-white dark:text-neutral-100 text-3xl font-mono tracking-tighter">
              Hey there!
            </div>
            <div className="relative name-intro-or-loading text-white w-fit h-fit dark:text-white text-4xl font-mono">
              <div className="text relative w-fit h-fit">
                I'm <span className="text-[#c778dd]">Manas</span>
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
          </div>
          <div className="my-description relative z-10 font-mono text-white text-lg w-fit h-fit">
            Stepped into programming and development in 2023, and I'm now a{" "}
            <span className="w-fit h-fit">
              <span className="text-[#c778dd]">Full-Stack Developer</span>
              <span></span>
            </span>
            . I began with{" "}
            <span className="text-[#c778dd]">C++, Python, and JavaScript</span>,
            and have transitioned to{" "}
            <span className="text-[#c778dd]">TypeScript</span>. I excel in
            writing clean, scalable code and have experience building mobile
            applications with{" "}
            <span className="text-[#c778dd]">React Native</span>. Additionally,
            I have a basic understanding of{" "}
            <span className="text-[#c778dd]">GCP and AWS</span>.
          </div>
          <div className="more-about-me text-base font-mono text-white w-fit h-fit">
            I am still crazy about{" "}
            <span className="text-[#c778dd]">cartoons</span> 🧙 (pokemon,
            beyblade, shinchan, etc), When I'm not with my laptop, you will see
            reading (fictional) 🤓 or talking to my mom.
          </div>
        </div>
        <div className="relative chad-quote-component w-full h-fit text-white dark:text-white font-mono mt-6 flex items-center justify-center flex-col gap-14">
          <div className="heading-chad w-full h-fit text-xl flex flex-row items-center gap-1">
            <span className="text-xl text-[#c778dd] dark:text-[#c778dd]">
              $
            </span>
            <span>
              <span className="text-cyan-400 underline">sudo</span> apt install
              "quote"
            </span>
          </div>
          <div className="quote-and-appreciation-wrapper w-full h-fit flex flex-col gap-10 items-center justify-center">
            <div className="relative quote w-full text-center h-fit border border-neutral-200 border-dashed px-4 pt-6 pb-10 flex flex-row gap-2 flex-wrap items-center justify-center">
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
                <span className="relative quote w-fit h-fit">
                  “The present is theirs; the future, for which I really worked,
                  is mine.”
                </span>
                <span className="relative text-[#c778dd] -bottom-6 w-fit h-fit">
                  ~ Nikola Tesla
                </span>
              </div>
            </div>
            <div className="arrow-rough absolute bottom-10 left-0 -rotate-45 w-fit h-fit">
              <Image
                src={roughArrowImg}
                alt="rough-arrow"
                width={100}
                height={100}
                className="pointer-events-none"
              />
            </div>
            <div className="chad-answer relative w-full h-fit">
              I regard him my ideal :)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

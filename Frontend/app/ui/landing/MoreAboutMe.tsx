"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function MoreAboutMe(): JSX.Element {
  return (
    <section className="more-about-me w-full h-fit flex justify-center flex-col items-start gap-4">
      <motion.div
        initial={{
          x: 10,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.4,
          duration: 0.6,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="heading flex items-center flex-row w-fit h-fit text-xl sm:text-2xl font-semibold gap-1"
      >
        <span className="dark:text-[#c778dd] text-[#6d2f7f]">$</span>
        <span className="font-mono sm:translate-y-1 text-neutral-800 dark:text-white">
          about-me
        </span>
      </motion.div>
      <motion.div
        initial={{
          y: 10,
          opacity: 0,
          scale: 0.9,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 0.4,
          duration: 0.6,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="more-about-me-text w-fit h-fit dark:text-neutral-200 text-neutral-800 text-sm sm:text-base font-mono flex flex-col gap-4"
      >
        <div className="more-about-me-para-1">
          Apart from these tech stuff, I listen to a lot of music, play
          synthesizer 🎹, like to read thriller + romantic novels , and watch
          cartoons and magic shows. Yes, I'm a Potterhead,{" "}
          <span className="dark:text-[#c778dd] text-[#6d2f7f]">
            Hogwarts is my home
          </span>
          . Being a JEE student, I think I have always loved Physics , and I'm
          crazy about discussions on Black Holes, Dark Matter, Dark Energy, etc.
          That's why I chose to lead my college Astronomy Club!
        </div>
        <div className="more-about-me-para-2">
          I also do a little bit of{" "}
          <span className="dark:text-[#c778dd] text-[#6d2f7f]">poetry</span>;{" "}
          you can read that in the{" "}
          <span className="dark:text-[#c778dd] text-[#6d2f7f] underline decoration-pink-500 ">
            <Link href={"/blog"} className="w-fit h-fit">
              blogs
            </Link>
          </span>
          . Yeah, that's it! You read quite far. Thanks for sticking around! 🙌
        </div>
      </motion.div>
    </section>
  );
}

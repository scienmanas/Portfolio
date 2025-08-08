"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FiGithub } from "react-icons/fi";
import { LuExternalLink } from "react-icons/lu";
import { FaSort } from "react-icons/fa";
import { projectData, botProjectData } from "@/app/lib/constants";
import { projectDataType } from "@/app/lib/definitions";

export function Projects(): JSX.Element {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "none">("none");
  const [pageNo, setPageNo] = useState<number>(1);
  const maxProjectOnOnePage: number = 6;
  const maxPages: number = Math.ceil(projectData.length / maxProjectOnOnePage);

  // Sort projects based on date
  const sortedProjects = [...projectData].sort((a, b) => {
    if (sortOrder === "none") return 0;
    if (!a.date || !b.date) return 0;

    return sortOrder === "asc"
      ? a.date.getTime() - b.date.getTime()
      : b.date.getTime() - a.date.getTime();
  });

  // Toggle sort order
  const toggleSortOrder = () => {
    if (sortOrder === "none") setSortOrder("desc");
    else if (sortOrder === "desc") setSortOrder("asc");
    else setSortOrder("none");
  };

  return (
    <section className="projects w-full h-fit flex items-start flex-col gap-10 justify-center">
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
        viewport={{ once: true }}
        className="head w-full h-fit flex flex-wrap gap-4 items-start justify-between"
      >
        <h1 className="heading w-fit h-fit text-xl sm:text-2xl dark:text-white text-neutral-900 flex items-end gap-1">
          <span className="dark:text-[#c778dd] text-[#6d2f7f]">$</span>
          <span className="font-mono">projects</span>
        </h1>

        <button
          onClick={toggleSortOrder}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm border dark:border-[#47494e] hover:border-[#ab54c4] dark:hover:border-[#6d2f7f] duration-300 ${
            sortOrder !== "none"
              ? "dark:bg-[#543e5e] bg-[#6d2f7f] text-white"
              : "dark:bg-[#2d2d2d] bg-gray-100 dark:text-white text-neutral-900"
          }`}
        >
          <FaSort
            className={
              sortOrder !== "none"
                ? "text-white"
                : "dark:text-gray-400 text-gray-500"
            }
          />
          <span>
            {sortOrder === "none" && "Sort by date"}
            {sortOrder === "desc" && "Newest first"}
            {sortOrder === "asc" && "Oldest first"}
          </span>
        </button>
      </motion.div>
      {/* All content - projects + view more + bot projects */}
      <div className="content w-full h-fit flex flex-col gap-10">
        {/* Projects */}
        <div className="projects w-fit h-fit flex flex-row flex-wrap gap-10 items-center justify-center font-mono">
          {sortedProjects
            .slice(0, maxProjectOnOnePage * Math.min(pageNo, maxPages))
            .map((project: (typeof sortedProjects)[number], index: number) => (
              <ProjectCard
                key={index}
                name={project.name}
                description={project.description}
                image={project.image}
                techStack={project.techStack}
                github={project.github}
                deployedLink={project.deployedLink}
                date={project.date}
                gif={project.gif}
              />
            ))}
        </div>
        {/* View more tab  */}
        <motion.div
          initial={{ filter: "blur(8px)" }}
          animate={{
            opacity: pageNo < maxPages ? 1 : 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.7,
            duration: 0.6,
          }}
          viewport={{ once: true }}
          className={`viewmore-tab w-full h-fit relative justify-center items-center mt-8 mb-8 ${
            pageNo < maxPages ? "flex" : "hidden"
          }`}
        >
          <button
            onClick={() => setPageNo(pageNo + 1)}
            className="view-more-button cursor-pointer border-2 border-black dark:border-neutral-200 px-3 py-2 font-mono font-semibold duration-300 bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-700 dark:hover:bg-neutral-600"
            type="button"
          >
            View More
          </button>
        </motion.div>
        {/* Bots projects */}
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
          className="further-info-and-comments font-mono text-neutral-900 dark:text-neutral-100 text-sm sm:text-base"
        >
          <div className="info-text ">
            Apart from these deployed projects I have also built Gen-AI powered
            discord bots by use of gemini-api and wrote terminal based games.
            Some of these are:{" "}
            {botProjectData.map((project, index) => (
              <Link
                target="_blank"
                key={index}
                href={project.link}
                className="w-auto h-auto dark:text-cyan-200 text-cyan-800 font-semibold"
              >
                <span className="hover:underline">{project.name}</span>
                {index < botProjectData.length - 1 && <span>, </span>}
              </Link>
            ))}
            {"."}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  name,
  description,
  image,
  techStack,
  github,
  deployedLink,
  date,
  gif,
}: projectDataType): JSX.Element {
  const cardRef = useRef<HTMLDivElement>(null);

  // Format date to display only month and year
  const formattedDate = date
    ? new Intl.DateTimeFormat("en-US", {
        month: "long",
        year: "numeric",
      }).format(date)
    : null;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.4,
        duration: 0.6,
        ease: "easeIn",
      }}
      viewport={{ once: true }}
      className={`project-card-container w-fit h-fit`}
      style={{
        perspective: "1000px",
      }}
    >
      <div
        ref={cardRef}
        style={{
          perspective: "300px",
        }}
        onMouseMove={(e) => {
          // Get the card element dimentions
          const cardDimensions = cardRef.current?.getBoundingClientRect();

          // Get the mouse position
          const x = e.clientX - (cardDimensions?.left as number);
          const y = e.clientY - (cardDimensions?.top as number);

          // Convert to percentage
          const xPercent = (x / (cardDimensions?.width as number)) * 100;
          const yPercent = (y / (cardDimensions?.height as number)) * 100;

          // Convert to degreea
          const degreeX = 20 * (Math.abs(xPercent - 50) / 50);
          const degreeY = 20 * (Math.abs(yPercent - 50) / 50);

          if (cardRef.current) {
            cardRef.current.style.transform = `${
              xPercent <= 50
                ? `rotateY(${degreeX}deg)`
                : `rotateY(${-degreeX}deg)`
            } ${
              yPercent <= 50
                ? `rotateX(${-degreeY}deg)`
                : `rotateX(${degreeY}deg)`
            } `;
          }
        }}
        onMouseOut={() => {
          if (cardRef.current) {
            cardRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
          }
        }}
        className="project-card  max-w-[340px] h-fit rounded-xl flex flex-col overflow-hidden shadow-2xl dark:shadow-[0_35px_60px_-15px_rgba(255,255,255,0.1)] duration-700"
      >
        <div className="relative image-box w-full h-fit">
          <Link target="_blank" className="w-full h-fit" href={github}>
            <div className="image group relative w-full h-[270px] overflow-hidden rounded-t-xl border-[#dbd5d5] dark:border-[#484a50] flex items-center justify-center border-2">
              {/* Blurred image as a placeholder */}
              <Image
                src={image}
                alt={`${name}-img`}
                width={340}
                height={270}
                className="absolute object-cover rounded-t-xl blur-sm scale-110"
                style={{ width: "340px", height: "270px" }}
              />
              {/* Show gif if available, fallback to image if gif fails or is slow to load */}
              {gif ? (
                <Image
                  src={gif}
                  loading="lazy"
                  alt={`${name}-proj`}
                  width={340}
                  height={270}
                  className="relative rounded-t-xl pointer-events-none z-10 group-hover:scale-105 duration-500"
                  style={{ width: "auto", height: "auto" }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).onerror = null;
                    (e.target as HTMLImageElement).src = image.src;
                  }}
                />
              ) : (
                <Image
                  src={image}
                  loading="lazy"
                  alt={`${name}-proj`}
                  width={340}
                  height={270}
                  className="relative rounded-t-xl pointer-events-none z-10 group-hover:scale-105 duration-500"
                  style={{ width: "auto", height: "auto" }}
                />
              )}
            </div>
          </Link>
        </div>
        <div className="all-contents flex flex-col w-full h-[230px] py-5 px-4 dark:bg-[#2b1e2e] bg-white items-start gap-4">
          <div className="name-links-description w-full h-fit flex flex-col justify-between  gap-2">
            <div className="name-links w-full h-fit flex flex-row items-center justify-between">
              <div className="name w-fit h-fit text-base sm:text-lg font-semibold dark:text-white text-neutral-900 relative after:absolute after:-bottom-[2px] after:left-0 after:h-[2px] after:w-full after:bg-cyan-500 dark:after:bg-cyan-400">
                {name}
              </div>
              <div className="links w-fit h-fit flex flex-row gap-2 items-center">
                <Link target="_blank" href={github} className="w-fit h-fit">
                  <FiGithub className="dark:text-white text-neutral-900 text-base sm:text-lg" />
                </Link>
                {deployedLink && (
                  <Link
                    target="_blank"
                    href={deployedLink as string}
                    className="w-fit h-fit"
                  >
                    <LuExternalLink className="dark:text-white text-neutral-900 text-base sm:text-lg" />
                  </Link>
                )}
              </div>
            </div>
            <div className="description w-fit h-fit text-xs sm:text-sm text-neutral-800 dark:text-neutral-200">
              {description.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length > 15
                ? description.slice(0, 70) + "..."
                : description}
            </div>
          </div>
          <div className="tech-stack w-fit h-fit flex flex-row flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <div
                className="tech px-2 py-1 rounded-lg dark:bg-[#373724] bg-black text-[0.6rem] sm:text-xs dark:text-neutral-100 text-neutral-100"
                key={index}
              >
                {tech.toLocaleLowerCase()}
              </div>
            ))}
          </div>
          {formattedDate && (
            <div className="date w-full h-fit text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 italic -mt-1">
              ({formattedDate})
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

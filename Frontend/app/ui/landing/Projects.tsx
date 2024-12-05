"use client";

import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";

// Projects image import
import mybuddyImg from "@/public/assets/projects/my-buddy.png";
import portfolioImg from "@/public/assets/projects/portfolio.png";
import certimailerImg from "@/public/assets/projects/certimailer.png";
import landifyImg from "@/public/assets/projects/landify.png";
import infopulseImg from "@/public/assets/projects/infopulse.png";
import valentinerImg from "@/public/assets/projects/valentiner.png";
import hackbellsbotImg from "@/public/assets/projects/hackbells-bot.png";
import stickersmashImg from "@/public/assets/projects/sticker-smash.png";
import microsoftlandingpageImg from "@/public/assets/projects/microsoft-landing-page.png";
import maafkaroImg from "@/public/assets/projects/maaf-karo.png";
import { FiGithub } from "react-icons/fi";
import { LuExternalLink } from "react-icons/lu";

interface projectDataType {
  name: string;
  description: string;
  image: StaticImageData;
  techStack: string[];
  github: string;
  deployedLink?: string;
}

interface botProjectDataTypes {
  name: string;
  link: string;
}

export function Projects(): JSX.Element {
  const projectData: projectDataType[] = [
    {
      name: "My Buddy",
      description:
        "An AI-powered web app using Gemini LLM for personalized, empathetic conversations with customizable personas, offering emotional support through tailored prompt engineering.",
      image: mybuddyImg,
      techStack: [
        "React Js",
        " Javascript",
        "Express",
        "Mongo DB",
        "Gen-AI",
        "google-apis",
      ],
      github: "https://github.com/scienmanas/My-Buddy",
      deployedLink: "https://my-buddy-ten.vercel.app/",
    },
    {
      name: "Portfolio",
      description:
        "A terminal themed portfolio webisted build using framer, Next JS and lambda function along with custom trained Geni-AI model for chatbot.",
      image: portfolioImg,
      techStack: ["Next Js", "Framer-motion", "lambda", "Typescript", "Gen-AI"],
      github: "https://github.com/scienmanas/Portfolio",
      deployedLink: "https://scienmanas.xyz",
    },
    {
      name: "CertiMailer",
      description:
        "A platform for automated certificate generation and distribution, featuring a Python script for developers and a web app with admin panels, verification, and scalability for organizations.",
      image: certimailerImg,
      techStack: [
        "Python",
        "TypeScript",
        "Next Js",
        "Express",
        "Mongo DB",
        "GCP",
      ],
      github: "https://github.com/scienmanas/CertiMailer",
      deployedLink: "https://certimailer.xyz/",
    },
    {
      name: "Landify",
      description:
        "A responsive landing page template with sections for pricing, testimonials, and a blog, featuring a gradient background and Markdown-based content management for easy customization and deployment",
      image: landifyImg,
      techStack: ["TypeScript", "Next Js", "Blog Engine", "Mongo DB"],
      github: "https://github.com/scienmanas/Landify",
      deployedLink: "https://landify-sepia.vercel.app/",
    },
    {
      name: "Maaf Karo",
      description:
        "An AI powered web-app enabling you to compare yourself with some of the legends on the earth",
      image: maafkaroImg,
      techStack: ["Next Js", "gen-ai", "aws-lambda", "TypeScript"],
      github: "https://github.com/scienmanas/Maaf-Karo",
      deployedLink: "https://maaf-karo.vercel.app/",
    },
    {
      name: "InfoPulse",
      description:
        "Your go-to news website, supporting multiple categories and countries, fetches the latest news every 30 minutes 🕒.",
      image: infopulseImg,
      techStack: ["TypeScript", "Next Js", "Express", "Mongo DB", "Cron-job"],
      github: "https://github.com/scienmanas/InfoPulse",
      deployedLink: "https://info-pulse-six.vercel.app/",
    },
    {
      name: "Valentiner",
      description:
        "Wanna propose to your crush so that she can't say no - here you go, website with beautiful background and easy setup. Good luck!",
      image: valentinerImg,
      techStack: ["React Js", "crazy"],
      github: "https://github.com/scienmanas/ValenTiner",
      deployedLink: "https://valen-tiner.vercel.app/",
    },
    {
      name: "HackBells Bot",
      description:
        "A cybersecurity automation tool with a suite of scripts that analyze user safety, scan for vulnerabilities and protect against potential threats",
      image: hackbellsbotImg,
      techStack: ["Python", "Scrapy", "shell", "rapid-apis"],
      github: "https://github.com/scienmanas/HackBells-Bot",
    },
    {
      name: "Sticker Smash",
      description:
        "A React Native-based mobile app, crafted during my learning journey, lets you add emojis 🎨 to photos and save them with ease 📸.",
      image: stickersmashImg,
      techStack: ["javascript", "react-native"],
      github: "https://github.com/scienmanas/StickerSmash",
      deployedLink: "https://sticker-smash-one.vercel.app/",
    },
    {
      name: "Microsoft Landing Page",
      description:
        "A landing page clone made for practice purposes, complete clone of Microsoft's website at that time stamp",
      image: microsoftlandingpageImg,
      techStack: ["HTML", "Tailwind CSS"],
      github: "https://github.com/scienmanas/Microsoft-Landing-Page-Clone",
      deployedLink: "https://microsoft-landing-page-clone-gamma.vercel.app/",
    },
  ];

  const botProjectData: botProjectDataTypes[] = [
    {
      name: "InclusiBrief",
      link: "https://github.com/scienmanas/InclusiBrief",
    },
    {
      name: "JourneyGenie",
      link: "https://github.com/scienmanas/JourneyGenie",
    },
    {
      name: "CelestialAlert",
      link: "https://github.com/scienmanas/CelestialAlert",
    },
  ];

  return (
    <section className="projects w-full h-fit flex items-center justify-center">
      <div className="wrapper w-full h-fit max-w-screen-xl flex items-start flex-col gap-10 px-5">
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
          className="head w-full h-fit flex items-start"
        >
          <h1 className="heading w-fit h-fit text-xl sm:text-2xl dark:text-white text-neutral-900 flex items-end gap-1">
            <span className="dark:text-[#c778dd] text-[#6d2f7f]">$</span>
            <span className="font-mono">projects</span>
          </h1>
        </motion.div>
        <div className="content w-full h-fit flex flex-col gap-10">
          <div className="projects w-fit h-fit flex flex-row flex-wrap gap-10 items-center justify-center font-mono">
            {projectData.map((project, index) => (
              <ProjectCard
                key={index}
                name={project.name}
                description={project.description}
                image={project.image}
                techStack={project.techStack}
                github={project.github}
                deployedLink={project.deployedLink}
              />
            ))}
          </div>
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
              Apart from these deployed projects I have also built Gen-AI
              powered discord bots by use of gemini-api and wrote terminal based
              games. Some of these are:{" "}
              {botProjectData.map((project, index) => (
                <Link
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
}: projectDataType): JSX.Element {
  const cardRef = useRef<HTMLDivElement>(null);

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
      className="project-card-container w-fit h-fit"
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
          <Link className="w-full h-fit" href={github}>
            <div className="image group relative w-full h-[270px] overflow-hidden rounded-t-md flex items-center justify-center">
              {/* Blurred image as a placeholder */}
              <Image
                src={image}
                alt={`${name}-img`}
                width={340}
                height={270}
                className="absolute object-cover rounded-t-md blur-md scale-110"
              />
              {/* Do not strect image */}
              <Image
                src={image}
                alt={`${name}-img`}
                width={340}
                height={270}
                className="relative w-fit h-fit rounded-t-md pointer-events-none z-10 group-hover:scale-105 duration-500"
              />
            </div>
          </Link>
        </div>
        <div className="all-contents flex flex-col w-full h-[220px] py-5 px-4 dark:bg-[#46344e] bg-white items-start gap-4">
          <div className="name-links-description w-full h-fit flex flex-col justify-between  gap-2">
            <div className="name-links w-full h-fit flex flex-row items-center justify-between">
              <div className="name w-fit h-fit text-base sm:text-lg font-semibold dark:text-white text-neutral-900">
                {name}
              </div>
              <div className="links w-fit h-fit flex flex-row gap-2 items-center">
                <Link href={github} className="w-fit h-fit">
                  <FiGithub className="dark:text-white text-neutral-900 text-base sm:text-lg" />
                </Link>
                {deployedLink && (
                  <Link href={deployedLink as string} className="w-fit h-fit">
                    <LuExternalLink className="dark:text-white text-neutral-900 text-base sm:text-lg" />
                  </Link>
                )}
              </div>
            </div>
            <div className="description w-fit h-fit text-xs sm:text-sm text-neutral-800 dark:text-neutral-200">
              {description.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length > 15
                ? description.slice(0, 110) + "..."
                : description}
            </div>
          </div>
          <div className="tech-stack w-fit h-fit flex flex-row flex-wrap gap-2 ">
            {techStack.map((tech, index) => (
              <div
                className="tech px-2 py-1 rounded-lg  dark:bg-slate-800 bg-slate-700 text-[0.6rem] sm:text-xs dark:text-neutral-100 text-neutral-100"
                key={index}
              >
                {tech.toLocaleLowerCase()}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

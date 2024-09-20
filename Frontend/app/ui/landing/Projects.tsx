import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

// Projects image import
import mybuddyImg from "@/public/assets/projects/my-buddy.png";
import certimailerImg from "@/public/assets/projects/certimailer.png";
import landifyImg from "@/public/assets/projects/landify.png";
import infopulseImg from "@/public/assets/projects/infopulse.png";
import valentinerImg from "@/public/assets/projects/valentiner.png";
import hackbellsbotImg from "@/public/assets/projects/hackbells-bot.png";
import stickersmashImg from "@/public/assets/projects/sticker-smash.png";
import microsoftlandingpageImg from "@/public/assets/projects/microsoft-landing-page.png";
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
        "Gen-AI",
        "GCP",
        "shell",
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
        "Wanna prpose your crush so that she can't say no - here you go, website with beautiful background and easy setup. Good luck!",
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
        "A landing page clone made for practice purposes, completely clone of microsoft webiste at that time stamp",
      image: microsoftlandingpageImg,
      techStack: ["HTML", "Tawilind CSS"],
      github: "https://github.com/scienmanas/StickerSmash",
      deployedLink: "https://sticker-smash-one.vercel.app/",
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
      name: "CeletialAlert",
      link: "https://github.com/scienmanas/CelestialAlert",
    },
  ];

  return (
    <section className="projects w-full h-fit flex items-center justify-center">
      <div className="wrapper w-full h-fit max-w-screen-xl flex items-start flex-col gap-10 px-5">
        <div className="head w-full h-fit flex items-start">
          <h1 className="heading w-fit h-fit text-2xl text-white flex items-end gap-1">
            <span className="text-[#c778dd]">$</span>
            <span className="font-mono">projects</span>
          </h1>
        </div>
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
          <div className="further-info-and-comments font-mono text-neutral-100">
            <div className="info-text ">
              Apart from these deployed projects I have also made Gen-AI powered
              discord bots by use of gemini-api and wrote terminal based games.
              Some of these are:{" "}
              {botProjectData.map((project, index) => (
                <Link
                  key={index}
                  href={project.link}
                  className="w-auto h-auto text-cyan-200 "
                >
                  <span className="hover:underline">{project.name}</span>
                  {index < botProjectData.length - 1 && <span>, </span>}
                </Link>
              ))}
              {"."}
            </div>
          </div>
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
  return (
    <div className="project-card  w-[340px] h-fit rounded-md flex flex-col">
      <div className="relative image-box w-fit h-fit">
        <div className="image group w-[340px] h-[270px] overflow-hidden rounded-t-md flex items-center justify-center">
          <Image
            src={image}
            alt={`${name}-img`}
            width={340}
            height={270}
            className="flex object-cover w-[340px] h-[270px] group-hover:scale-105 rounded-t-md duration-300 pointer-events-none"
          />
        </div>
      </div>
      <div className="all-contents flex flex-col w-full h-[220px] py-2 px-3 bg-[#46344e] items-start gap-4">
        <div className="name-links-description w-full h-fit flex flex-col justify-between  gap-2">
          <div className="name-links w-full h-fit flex flex-row items-center justify-between">
            <div className="name w-fit h-fit text-lg font-semibold text-white">
              {name}
            </div>
            <div className="links w-fit h-fit flex flex-row gap-2 items-center">
              <Link href={github} className="w-fit h-fit">
                <FiGithub className="text-white text-lg" />
              </Link>
              {deployedLink && (
                <Link href={deployedLink as string} className="w-fit h-fit">
                  <LuExternalLink className="text-white text-lg" />
                </Link>
              )}
            </div>
          </div>
          <div className="description w-fit h-fit text-sm text-neutral-200">
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
              className="tech px-2 py-1 rounded-sm border-dotted border-[0.5px] border-pink-200 text-xs text-yellow-300"
              key={index}
            >
              {tech.toLocaleLowerCase()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

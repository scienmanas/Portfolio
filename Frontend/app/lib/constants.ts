import {
  SkillsCategorised,
  botProjectDataTypes,
  projectDataType,
  AchievementsDataType,
} from "@/app/lib/definitions";
// Skills imports
import cppSvg from "@/public/assets/svg/c++.svg";
import pythonSvg from "@/public/assets/svg/python.svg";
import goLangSvg from "@/public/assets/svg/go-lang.svg";
import jsSvg from "@/public/assets/svg/javascript.svg";
import tsSvg from "@/public/assets/svg/typescript.svg";
import reactSvg from "@/public/assets/svg/react-js.svg";
import { SiNextdotjs } from "react-icons/si";
import tailwindSvg from "@/public/assets/svg/tailwind-css.svg";
import reactNativeSvg from "@/public/assets/svg/react-native.svg";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import mongodbSvg from "@/public/assets/svg/mongodb.svg";
import sqlSvg from "@/public/assets/svg/my-sql.svg";
import gitSvg from "@/public/assets/svg/git.svg";
import dockerSvg from "@/public/assets/svg/docker.svg";
import gcpSvg from "@/public/assets/svg/google-cloud.svg";
import awslambdaSvg from "@/public/assets/svg/awslambda.svg";
import { SiApachekafka } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
// Projects image import
import myPookieImg from "@/public/assets/projects/images/my-pookie.png";
import envStoreImg from "@/public/assets/projects/images/envstore.png";
import mybuddyImg from "@/public/assets/projects/images/my-buddy.png";
import portfolioImg from "@/public/assets/projects/images/portfolio.png";
import certimailerImg from "@/public/assets/projects/images/certimailer.png";
import landifyImg from "@/public/assets/projects/images/landify.png";
import infopulseImg from "@/public/assets/projects/images/infopulse.png";
import valentinerImg from "@/public/assets/projects/images/valentiner.png";
import hackbellsbotImg from "@/public/assets/projects/images/hackbells-bot.png";
import stickersmashImg from "@/public/assets/projects/images/sticker-smash.png";
import microsoftlandingpageImg from "@/public/assets/projects/images/microsoft-landing-page.png";
import maafkaroImg from "@/public/assets/projects/images/maaf-karo.png";
import sandyImg from "@/public/assets/projects/images/sandy.png";
import summaraizeImg from "@/public/assets/projects/images/summaraize.png";
// Projects gifs
import portfolioGif from "@/public/assets/projects/gifs/portfolio.gif";
import certimailerGif from "@/public/assets/projects/gifs/certimailer.gif";
import envStoreGif from "@/public/assets/projects/gifs/envstore.gif";
import myPookieGif from "@/public/assets/projects/gifs/mypookie.gif";
import landifyGif from "@/public/assets/projects/gifs/landify.gif";
import maafKaroGif from "@/public/assets/projects/gifs/maaf-karo.gif";

// ---------------- Skills ---------------------------

export const skills: SkillsCategorised[] = [
  {
    category: "Languages",
    skills: [
      { name: "C++", icon: cppSvg },
      { name: "Python", icon: pythonSvg },
      { name: "JavaScript", icon: jsSvg },
      { name: "TypeScript", icon: tsSvg },
      { name: "Go", icon: goLangSvg },
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
      { name: "Prisma", icon: SiPrisma },
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
      { name: "Kafka", icon: SiApachekafka },
    ],
  },
];

// -------------------------------------------------------
// ---------------- Projects ---------------------------

export const projectData: projectDataType[] = [
  {
    name: "CertiMailer",
    description:
      "A platform for automated certificate generation and distribution, featuring a Python script for developers and a web app with admin panels, verification, and scalability for organizations.",
    image: certimailerImg,
    gif: certimailerGif,
    techStack: [
      "Python",
      "TypeScript",
      "Next Js",
      "Express",
      "Mongo DB",
      "GCP",
    ],
    github: "https://github.com/scienmanas/CertiMailer",
    deployedLink: "https://certimailer.scienmanas.dev",
    date: new Date("2024-12-01"),
  },
  {
    name: "EnvStore",
    description:
      "EnStore is an Open Source solution to to manage the env files for your projects/images. Stored encrypted, and decrypted when required.",
    image: envStoreImg,
    gif: envStoreGif,
    techStack: ["Go", "Next JS", "Typescript", "Postgres", "Encryption", "OAuth"],
    github: "https://github.com/scienmanas/EnvStore",
    deployedLink: "https://envstore.scienmanas.dev",
    date: new Date("2025-11-10"),
  },
  {
    name: "Sandy AI",
    description:
      "Voice powered, Gen-AI based cyber security bot for systems. Converse it as you would with a human.",
    image: sandyImg,
    techStack: [
      "python",
      "Gen-AI",
      "ps-utils",
      "algorithms",
      "third-party-apis",
    ],
    github: "https://github.com/scienmanas/Sandy",
    date: new Date("2025-02-20"),
  },
  {
    name: "SummarAIze",
    description:
      "Chrome & Firefox extension to summarize the entire webpage in points with options to choose from different LLMs",
    image: summaraizeImg,
    techStack: ["typescript", "webpack", "gen-ai", "javascript", "extension"],
    github: "https://github.com/scienmanas/SummarAIze",
    date: new Date("2025-04-01"),
  },
  {
    name: "Portfolio",
    description:
      "A terminal themed portfolio webisted build using framer, Next JS and lambda function along with custom trained Geni-AI model for chatbot.",
    image: portfolioImg,
    gif: portfolioGif,
    techStack: ["Next Js", "Framer-motion", "lambda", "Typescript", "Gen-AI"],
    github: "https://github.com/scienmanas/Portfolio",
    deployedLink: "https://scienmanas.dev",
    date: new Date("2024-09-10"),
  },
  {
    name: "My Pookie",
    description:
      "A no-code Valentine / Birthday / Anniversary wisher customizable according to the user.",
    image: myPookieImg,
    gif: myPookieGif,
    techStack: ["Next Js", "Prisma", "OAuth", "Typescript", "Framer Motion"],
    github: "https://github.com/scienmanas.My-Pookie",
    deployedLink: "https://mypookie.scienmanas.dev",
    date: new Date("2025-02-01"),
  },
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
    date: new Date("2024-04-05"),
  },
  {
    name: "Landify",
    description:
      "A responsive landing page template with sections for pricing, testimonials, and a blog, featuring a gradient background and Markdown-based content management for easy customization and deployment",
    image: landifyImg,
    gif: landifyGif,
    techStack: ["TypeScript", "Next Js", "Blog Engine", "Mongo DB"],
    github: "https://github.com/scienmanas/Landify",
    deployedLink: "https://landify.scienmanas.dev",
    date: new Date("2024-08-15"),
  },
  {
    name: "Maaf Karo",
    description:
      "An AI powered web-app enabling you to compare yourself with some of the legends on the earth",
    image: maafkaroImg,
    gif: maafKaroGif,
    techStack: ["Next Js", "gen-ai", "aws-lambda", "TypeScript"],
    github: "https://github.com/scienmanas/Maaf-Karo",
    deployedLink: "https://maaf-karo.scienmanas.dev",
    date: new Date("2024-11-20"),
  },
  {
    name: "InfoPulse",
    description:
      "Your go-to news website, supporting multiple categories and countries, fetches the latest news every 30 minutes 🕒.",
    image: infopulseImg,
    techStack: ["TypeScript", "Next Js", "Express", "Mongo DB", "Cron-job"],
    github: "https://github.com/scienmanas/InfoPulse",
    deployedLink: "https://infopulse.scienmanas.dev",
    date: new Date("2024-08-10"),
  },
  {
    name: "Valentiner",
    description:
      "Wanna propose to your crush so that she can't say no - here you go, website with beautiful background and easy setup. Good luck!",
    image: valentinerImg,
    techStack: ["React Js", "crazy"],
    github: "https://github.com/scienmanas/ValenTiner",
    deployedLink: "https://valentiner.scienmanas.dev",
    date: new Date("2024-02-01"),
  },
  {
    name: "HackBells Bot",
    description:
      "A cybersecurity automation tool with a suite of scripts that analyze user safety, scan for vulnerabilities and protect against potential threats",
    image: hackbellsbotImg,
    techStack: ["Python", "Scrapy", "shell", "rapid-apis"],
    github: "https://github.com/scienmanas/HackBells-Bot",
    date: new Date("2024-03-20"),
  },
  {
    name: "Sticker Smash",
    description:
      "A React Native-based mobile app, crafted during my learning journey, lets you add emojis 🎨 to photos and save them with ease 📸.",
    image: stickersmashImg,
    techStack: ["javascript", "react-native"],
    github: "https://github.com/scienmanas/StickerSmash",
    deployedLink: "https://sticker-smash-one.vercel.app/",
    date: new Date("2024-09-20"),
  },
  {
    name: "Microsoft Landing Page",
    description:
      "A landing page clone made for practice purposes, complete clone of Microsoft's website at that time stamp",
    image: microsoftlandingpageImg,
    techStack: ["HTML", "Tailwind CSS"],
    github: "https://github.com/scienmanas/Microsoft-Landing-Page-Clone",
    deployedLink: "https://microsoft-landing-page-clone-gamma.vercel.app/",
    date: new Date("2023-10-10"),
  },
];

export const botProjectData: botProjectDataTypes[] = [
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

// -------------------------------------------------------
// ---------------- Achievements ---------------------------

export const achievementsData: AchievementsDataType[] = [
  {
    name: "Top Presentation",
    description:
      "I along with my amazing team was honoured among top presenters for our research work in Indo-Canadian Symposium",
    link: "https://drive.google.com/file/d/1EBWiMrzn2yjQcBKZlYt_Kuxi03wlHgFD/view",
    date: "Feb, 2024",
  },
  {
    name: "1st Prize, Hackbells",
    description:
      "Me and my friend Arpit bagged the first prize in 24 hours hackathon, we worked on a completely different cyber security tool, giving us an edge over other participants.",
    link: "https://devfolio.co/projects/hackbell-bot-c98d",
    date: "Feb 2024",
  },
  {
    name: "Finalist - EyeInvent",
    description:
      "Our team consisting of two doctors, went to finalist in Eye Invent. We developed and printed a CAD model automating the holding of 90 D lens.",
    date: "Feb 2024",
  },
  {
    name: "Top 10% AWS DeepRacer Student",
    description:
      "I was in Top 10% among all the students in India region in monthly AWS DeepRacer Student League in July 2023 race",
    link: "https://drive.google.com/file/d/1jb0IKKwrmqoqxGdv32QFtLa9VUrQyKdx/view",
    date: "July 2023",
  },
  {
    name: "Bronze Medal - Inter IIT 11.0",
    description:
      "Me along with my amazing team worked on formulating and presenting a solution to a real-world problem which involved complex decision-making. Guess what, we were first in the last round among all other IITs.",
    link: "https://drive.google.com/file/d/1wnYmdBfAT-la8h7sTzAsRd1MBIHtrpM4/view",
    date: "Feb 2023",
  },
  {
    name: "2nd Prize - Cosmic Innovation Challenge",
    description:
      "Again, me and my friend Arpit bagged the 2nd prize for our presentation of an innovative idea to deal with the problem of space debris which can be done using gecko technology, robotic arm, and by exploiting cosmic deposition charges.",
    link: "https://drive.google.com/file/d/1ZMlah5ZQJtnLCwvLtuyvo99iAOcYJM7r/view",
    date: "Jan 2023",
  },
];

// -------------------------------------------------------

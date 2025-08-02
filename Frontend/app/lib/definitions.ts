import { IconType } from "react-icons";
import { StaticImageData } from "next/image";

// ---------------- Blog Post Meta data -------------------

export type BlogPostMetaDataProps = {
  cardData: {
    title: string;
    image: string;
    publishedDate: string;
    description: string;
    tags: string[];
    slug: string;
  };
};

// -------------------------------------------------------
// ---------------- Loader ---------------------------

export type submissionLoaderProps = {
  width: number;
  height: number;
  color: string;
};

// -------------------------------------------------------
// ---------------- Skill Icon ---------------------------

export type Skill = {
  name: string;
  icon: IconType | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

export type SkillsCategorised = {
  category: string;
  skills: Skill[];
};

// -------------------------------------------------------
// ---------------- Projects ---------------------------

export type projectDataType = {
  name: string;
  description: string;
  image: StaticImageData;
  gif?: StaticImageData;
  techStack: string[];
  github: string;
  deployedLink?: string;
  date?: Date;
};

export type botProjectDataTypes = {
  name: string;
  link: string;
};

// -------------------------------------------------------
// ---------------- Achivements  ---------------------------

export type AchievementsDataType = {
  name: string;
  description: string;
  link?: string;
  date?: string;
};

// -------------------------------------------------------

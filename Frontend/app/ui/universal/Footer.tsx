"use client";

import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { SiFarcaster } from "react-icons/si";
import { IconType } from "react-icons";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

interface socialLinksType {
  name: string;
  icon: IconType;
  link: string;
  clasName?: string;
}

export function Footer(): JSX.Element {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  const socialLinks: socialLinksType[] = [
    {
      name: "github",
      icon: FiGithub,
      link: "https://github.com/scienmanas",
      clasName: "text-neutral-300 ",
    },
    {
      name: "linkedin",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/manas-poddar-5a0098227/",
      clasName: "text-blue-400",
    },
    {
      name: "twitter",
      icon: FaXTwitter,
      link: "https://x.com/scienmanas",
      clasName: "text-neutral-300",
    },
    {
      name: "youtube",
      icon: IoLogoYoutube,
      link: "https://youtube.com/@scienmanas",
      clasName: "text-neutral-200",
    },
    {
      name: "instagram",
      icon: FaInstagram,
      link: "https://instagram.com/scienmanas",
      clasName: "text-red-400",
    },
    {
      name: "farcaster",
      icon: SiFarcaster,
      link: "https://warpcast.com/scienmanas",
      clasName: "text-purple-700 bg-white rounded-2xl",
    },
  ];

  // Set mounted state to true after the component has mounted - for button management
  useEffect(() => {
    setMounted(true);
    if (theme) {
      console.log(theme);
      setTheme(theme);
    }
  }, [theme]);

  return (
    <footer className="w-full h-fit flex items-center justify-center mt-10">
      <div className="wrapper w-full max-w-screen-xl h-fit flex flex-col gap-1 items-center border-t border-[#48484f] justify-center font-mono px-5 pt-6 pb-4">
        <div className="made-by w-fit h-fit text-center text-xl text-white font-semibold">
          Made by Manas 🕵️‍♂️
        </div>
        <div className="links w-fit h-fit flex flex-row flex-wrap items-center justify-center gap-3">
          {socialLinks.map((social, index) => (
            <Link key={index} href={social.link} className="w-fit h-fit p-1">
              <social.icon
                className={`w-fit h-fit text-neutral-300 text-xl ${social.clasName}`}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

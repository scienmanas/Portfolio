"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

interface navBarTabsType {
  name: string;
  link: string;
}

export function Navbar(): JSX.Element {
  // For managing the theme button
  const [mounted, setMounted] = useState<boolean>(false);
  const [websiteTheme, setWebsiteTheme] = useState<string>("dark"); // Because dark theme is more suited to our webiste
  const { theme, setTheme } = useTheme();

  const navbarTabs: navBarTabsType[] = [
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "About",
      link: "#about",
    },
  ];

  // Set mounted state to true after the component has mounted - for button management
  useEffect(() => {
    setMounted(true);
    if (mounted && theme) {
      setTheme(theme);
    }
  }, [theme, mounted]);

  return (
    <nav className={`w-full h-fit flex items-center justify-center`}>
      <div className="wrapper w-full max-w-screen-xl flex flex-row flex-wrap items-center justify-around sm:justify-between px-6 pt-8 gap-2">
        <div className="name w-fit h-fit flex items-center">
          <Link href={"/"} className="flex flex-row gap-1 items-center">
            <span className="text-[#593563] dark:text-[#b870ce] text-xl sm:text-2xl ">
              $
            </span>
            <span className="text-neutral-800 dark:text-white text-xl sm:text-2xl font-mono sm:translate-y-1">
              manas.
            </span>
          </Link>
        </div>
        <div className="nav-buttons w-fit h-fit flex items-center flex-row gap-3 font-mono">
          {navbarTabs.map((item, index) => (
            <div key={index} className={`${item.name} w-fit h-fit`}>
              <Link
                href={item.link}
                className=" text-base sm:text-xl w-fit h-fit group relative after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[2px] dark:after:bg-[#d5a3e2] after:bg-[#9656a7] after:transition-all after:duration-300 after:hover:w-full"
              >
                <span className="w-fit h-fit text-[#593563] dark:text-[#b870ce]">
                  /
                </span>
                <span className="w-fit h-fit text-neutral-800 dark:text-white">
                  {item.name.toLowerCase()}
                </span>
              </Link>
            </div>
          ))}

          <button
            onClick={() => {
              const newTheme = websiteTheme === "dark" ? "light" : "dark";
              setWebsiteTheme(newTheme);
              setTheme(newTheme);
            }}
            className="theme-button w-fit h-fit"
          >
            {websiteTheme === "dark" ? (
              <MdOutlineDarkMode className="dark:text-pink-200 text-lg w-fit h-fit" />
            ) : (
              <MdOutlineLightMode className="text-neutral-8000 text-pink-800 text-lg w-fit h-fit" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

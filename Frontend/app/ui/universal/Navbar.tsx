"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { motion } from "framer-motion";
import { WebsiteLoader } from "@/app/ui/loaders";
import { Fragment } from "react";

interface navBarTabsType {
  name: string;
  link: string;
}

export function Navbar(): JSX.Element {
  const [mounted, setMounted] = useState<boolean>(false);
  const [websiteTheme, setWebsiteTheme] = useState<string>("light");
  const { theme, setTheme } = useTheme();

  const navbarTabs: navBarTabsType[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Resume",
      link: "/Manas_CV.pdf",
    },
  ];

  useEffect(() => {
    setMounted(true);
    if (mounted && theme) {
      setTheme(theme);
      setWebsiteTheme(theme);
      document.body.style.overflowY = "auto";
    }
  }, [theme, mounted]);

  return (
    <Fragment>
      <WebsiteLoader mounted={mounted} />
      <nav className={`relative w-full h-fit flex items-center justify-center`}>
        <div className="wrapper w-full max-w-screen-xl flex flex-row flex-wrap items-center justify-around sm:justify-between px-6 pt-8 gap-2">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: [0, -10, 0], opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="name w-fit h-fit flex items-center"
          >
            <Link href={"/"} className="flex flex-row gap-1 items-center">
              <span className="text-[#593563] dark:text-[#b870ce] text-xl sm:text-2xl ">
                $
              </span>
              <span className="text-neutral-800 dark:text-white text-xl sm:text-2xl font-mono sm:translate-y-1">
                manas.
              </span>
            </Link>
          </motion.div>
          <div className="nav-buttons w-fit h-fit flex items-center flex-row gap-3 font-mono">
            {navbarTabs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: [0, -10, 0], opacity: 1 }}
                transition={{
                  delay: 1 + index * 0.2,
                  duration: 1,
                  ease: "easeInOut",
                }}
                className={`${item.name} w-fit h-fit`}
              >
                <Link
                  href={item.link}
                  className="text-base sm:text-xl w-fit h-fit group relative after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[2px] dark:after:bg-[#d5a3e2] after:bg-[#9656a7] after:transition-all after:duration-300 after:hover:w-full"
                >
                  <span className="w-fit h-fit text-[#593563] dark:text-[#b870ce]">
                    /
                  </span>
                  <span className="w-fit h-fit text-neutral-800 dark:text-white">
                    {item.name.toLowerCase()}
                  </span>
                </Link>
              </motion.div>
            ))}

            <motion.button
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: [0, -10, 0], opacity: 1 }}
              transition={{
                delay: 1 + navbarTabs.length * 0.2,
                duration: 1,
                ease: "easeInOut",
              }}
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
                <MdOutlineLightMode className="text-pink-800 text-lg w-fit h-fit" />
              )}
            </motion.button>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

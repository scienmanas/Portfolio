"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect, type MouseEvent } from "react";
import { flushSync } from "react-dom";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { motion } from "framer-motion";
import { WebsiteLoader } from "@/app/ui/loaders";
import { Fragment } from "react";

interface navBarTabsType {
  name: string;
  link: string;
}

export function Navbar() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = mounted && resolvedTheme === "dark";

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
    document.body.style.overflowY = "auto";
    document.body.style.overflowX = "hidden";
  }, []);

  // Switch theme inside a view transition so the whole page (background,
  // text, cards) is revealed together by a circle growing from the button.
  const toggleTheme = (e: MouseEvent<HTMLButtonElement>) => {
    const newTheme = isDark ? "light" : "dark";
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (typeof document.startViewTransition !== "function" || reduceMotion) {
      setTheme(newTheme);
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      flushSync(() => setTheme(newTheme));
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 500,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <Fragment>
      <WebsiteLoader mounted={mounted} />
      <nav
        className={`relative w-full h-fit flex items-center justify-center z-30`}
      >
        <div className="wrapper w-full max-w-(--breakpoint-xl) flex flex-row flex-wrap items-center justify-around sm:justify-between px-6 pt-8 pb-4 gap-2">
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
                  className="text-base sm:text-xl w-fit h-fit group relative after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[2px] dark:after:bg-[#d5a3e2] after:bg-[#9656a7] after:transition-all after:duration-300 hover:after:w-full"
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
              onClick={toggleTheme}
              aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
              className="theme-button w-fit h-fit cursor-pointer"
            >
              {isDark ? (
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

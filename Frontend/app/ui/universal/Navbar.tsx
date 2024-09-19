import Link from "next/link";
import { dmMono } from "@/app/lib/fonts";

interface navBarTabsType {
  name: string;
  link: string;
}

export function Navbar(): JSX.Element {
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

  return (
    <nav
      className={`w-full h-fit flex items-center justify-center ${dmMono.className}`}
    >
      <div className="wrapper w-full max-w-screen-xl flex flex-row flex-wrap items-center justify-around sm:justify-between px-6 pt-8 gap-2">
        <div className="name w-fit h-fit flex flex-row gap-1 items-center">
          <span className="text-[#b870ce] dark:text-[#b870ce] text-2xl font-normal">
            $
          </span>
          <span className="text-white dark:text-white text-2xl ">manas.</span>
        </div>
        <div className="nav-buttons w-fit h-fit flex flex-row gap-3">
          {navbarTabs.map((item, index) => (
            <div key={index} className={`${item.name} w-fit h-fit `}>
              <Link
                href={item.link}
                className="text-xl w-fit h-fit group relative after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[2px] after:bg-[#d5a3e2] after:transition-all after:duration-300 after:hover:w-full"
              >
                <span className="w-fit h-fit text-[#b870ce] dark:text-[#b870ce]">
                  /
                </span>
                <span className="w-fit h-fit text-white dark:text-white">
                  {item.name.toLowerCase()}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

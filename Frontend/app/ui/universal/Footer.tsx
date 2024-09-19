import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { SiFarcaster } from "react-icons/si";
import { IconType } from "react-icons";

interface socialLinksType {
  name: string;
  icon: IconType;
  link: string;
}

export function Footer(): JSX.Element {
  const socialLinks: socialLinksType[] = [
    {
      name: "github",
      icon: FiGithub,
      link: "https://github.com/scienmanas",
    },
    {
      name: "twitter",
      icon: FaXTwitter,
      link: "https://x.com/scienmanas",
    },
    {
      name: "linkedin",
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/in/manas-poddar-5a0098227/",
    },
    {
      name: "youtube",
      icon: IoLogoYoutube,
      link: "https://youtube.com/@scienmanas",
    },
    {
      name: "instagram",
      icon: FaInstagram,
      link: "https://instagram.com/scienmanas",
    },
    {
      name: "farcaster",
      icon: SiFarcaster,
      link: "https://warpcast.com/@scienmanas",
    },
  ];

  return (
    <footer className="footer w-full h-fit border-t-2 border-[#d4d4d8]">
      <div className="full-wrapper w-full h-fit max-w-screen-2xl flex items-center justify-center p-4">
        <div className="footer-wrapper w-full h-fit flex flex-col items-center">
          <div className="info-section flex flex-row items-center justify-between gap-6 flex-wrap w-full">
            <div className="name-and-email flex flex-col w-fit h-fit">
              <div className="name w-fit h-fit">Manas Poddar</div>
              <div className="email w-fit h-fit">
                <Link
                  href={`mailto:iamscientistmanas@gmail.com?subject=${encodeURIComponent(
                    `Hi Manas! whassup?`
                  )}`}
                  className="w-fit h-fit"
                ></Link>
                iamscientistmanas@gmail.com
              </div>
            </div>
            <div className="socials-links w-fit h-fit flex items-center justify-center">
              <ul className="w-fit h-fit flex flex-row items-center gap-2">
                {socialLinks.map((data, index) => (
                  <li key={index} className={`w-fit h-fit ${data.name}`}>
                    <Link href={data.link} className="w-fit h-fit p-1 ">
                      <data.icon className="text-lg" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="copyright flex flex-row gap-1 w-full h-fit ">
            <span>&copy;</span>
            <span>Made by</span>
            <span>Manas</span>
            <span>·</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

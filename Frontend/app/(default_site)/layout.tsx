import type { Metadata } from "next";
import "@/app/globals.css";
import { Footer } from "@/app/ui/universal/Footer";
import { Navbar } from "@/app/ui/universal/Navbar";
import { CursorLight } from "../ui/components/cursor-light";
import metaDataImg from "@/public/assets/metadata/landing.png";
import { ScienGPT } from "@/app/ui/components/scienGPT";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL as string),
  title: "Manas | Portfolio",
  description:
    "Portfolio website of me (Manas), showcasing my all projects, skills and work",
  keywords: ["portfolio", "template", "anime-based", "blogs"],
  authors: { name: "Manas", url: process.env.SITE_NAME as string },
  robots: "index, follow",
  openGraph: {
    title: "Manas | Portfolio",
    description:
      "Portfolio website of me (Manas), showcasing my all projects, skills and work",
    url: process.env.SITE_URL,
    type: "profile",
    locale: "en_US",
    siteName: process.env.SITE_NAME as string,
    images: metaDataImg.src,
  },
  twitter: {
    card: "summary",
    title: "Manas | Portfolio",
    description:
      "Portfolio website of me (Manas), showcasing my all projects, skills and work",
    creator: "@scienmanas",
    site: process.env.SITE_NAME as string,
    images: metaDataImg.src,
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const cursorSvg = `data:image/svg+xml,${encodeURIComponent(`
  //   <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
  //     <circle cx="20" cy="20" r="16" fill="none" stroke="#00ffff" stroke-width="2"/>
  //   </svg>
  // `)}`;

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        style={{
          overflowX: "hidden",
          overflowY: "hidden",
        }}
        className={`antialiase dark:bg-[#282c33] bg-[#eaeaea] scroll-smooth`}
      >
        <CursorLight />
        <div
          // style={{
          //   cursor: `url(${cursorSvg}) 12 12, auto`,
          // }}
          className="wrapper flex w-full h-fit relative overflow-hidden"
        >
          <div className="gradient-blurred fixed w-full h-dvh -z-10 bg-transparent bg-gradient-to-br top-0 left-0 from-pink-700 dark:to-[#282c33] to-[#eaeaea] to-45% opacity-30 blur-md"></div>
          <div className="contents-wrapper relative flex flex-col w-full h-fit gap-10 z-10">
            <section className="navbar w-full h-fit relative z-30">
              <Navbar />
            </section>
            <section className="w-full h-full page-contents relative z-20">
              {children}
            </section>
            <section className="footer-and-gpt w-full h-fit flex items-center justify-center z-20">
              <Footer />
              <ScienGPT />
            </section>
          </div>
        </div>
      </body>
    </html>
  );
}

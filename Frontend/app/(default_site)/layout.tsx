import type { Metadata } from "next";
import "@/app/globals.css";
import { ThemeProvider } from "next-themes";
import { Footer } from "@/app/ui/universal/Footer";
import { Navbar } from "@/app/ui/universal/Navbar";
import { CursorLight } from "../ui/components/cursor-light";
import metaDataImg from "@/public/assets/metadata/landing.png";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.DOMAIN as string),
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
    url: process.env.DOMAIN,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        style={{
          overflowX: "hidden",
          overflowY: "hidden",
        }}
        className={`antialiase dark:bg-[#282c33] bg-[#eaeaea]`}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <CursorLight />
          <div className="wrapper flex w-full h-fit relative overflow-hidden">
            <div className="gradient-blurred absolute w-full h-dvh -z-10 bg-transparent bg-gradient-to-br top-0 left-0 from-pink-700 dark:to-[#282c33] to-[#eaeaea] to-45% opacity-30 blur-md"></div>
            <div className="contents-wrapper relative flex flex-col w-full h-fit gap-10 z-10">
              <section className="navbar w-full h-fit relative z-30">
                <Navbar />
              </section>
              <section className="w-full h-full page-contents relative z-20">
                {children}
              </section>
              <section className="footer w-full h-fit flex items-center justify-center z-10">
                <Footer />
              </section>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

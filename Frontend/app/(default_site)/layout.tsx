import type { Metadata } from "next";
import "@/app/globals.css";
import { ThemeProvider } from "next-themes";
// import { Footer } from "@/app/ui/universal/Footer";
import { Navbar } from "@/app/ui/universal/Navbar";

export const metadata: Metadata = {
  title: "Manas | Portfolio",
  description:
    "Portfolio website of me (Manas), showcasing my all projects and work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiase dark:bg-[#282c33] bg-[#282c33]`}>
        <ThemeProvider attribute="class">
          <div className="wrapper flex flex-col w-full h-fit gap-10">
            <section className="navbar w-full h-fit">
              <Navbar />
            </section>
            <section className="w-full h-full page-contents">
              {children}
            </section>
            <section className="footer w-full h-fit flex items-center justify-center">
              {/* <Footer /> */}
            </section>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

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
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}

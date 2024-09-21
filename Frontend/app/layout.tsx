import type { Metadata } from "next";
import "@/app/globals.css";
import { ThemeProvider } from "next-themes";
import { Viewport } from "next";

export const metadata: Metadata = {
  title: "Manas | Portfolio",
  description:
    "Portfolio website of me (Manas), showcasing my all projects and work",
};

export const viewport: Viewport = {
  themeColor: "pink",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiase dark:bg-[#282c33] bg-[#eaeaea]`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

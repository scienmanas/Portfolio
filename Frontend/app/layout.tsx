import "@/app/globals.css";
import { ThemeProvider } from "next-themes";
import { Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";

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
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

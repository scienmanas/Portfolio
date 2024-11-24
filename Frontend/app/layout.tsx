import "@/app/globals.css";
import { ThemeProvider } from "next-themes";
import { Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from '@next/third-parties/google'

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
      <body
        style={{
          overflowX: "hidden",
          overflowY: "hidden",
        }}
        className={`antialiase dark:bg-[#282c33] bg-[#eaeaea]`}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
          <GoogleAnalytics gaId="G-9C05HTT7PZ" debugMode={false}/>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

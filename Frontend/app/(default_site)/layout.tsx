import type { Metadata } from "next";
import "@/app/globals.css";
import { ThemeProvider } from "next-themes";

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
    <html lang="en">
      <body className={` antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

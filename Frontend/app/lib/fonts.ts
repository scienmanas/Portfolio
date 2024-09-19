import { DM_Mono } from "next/font/google";
import { VT323 } from "next/font/google";

export const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-mono",
});

export const VTfont = VT323({
  subsets: ["latin"],
  weight: "400",
});

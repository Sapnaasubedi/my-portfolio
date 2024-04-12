// eslint-disable-next-line camelcase -- Next font export Open sans font as Open_Sans
import { Inter, Open_Sans } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "600"],
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "700", "800"],
});

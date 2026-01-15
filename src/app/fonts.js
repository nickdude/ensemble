import { Poppins, Roboto, Inter, Bricolage_Grotesque } from "next/font/google";
import localFont from "next/font/local";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-bricolage",
  display: "swap",
});

/**
 * Avenir is NOT on Google Fonts
 * You must add font files locally
 */
// export const avenir = localFont({
//   src: [
//     {
//       path: "../assets/fonts/Avenir-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/Avenir-Medium.woff2",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/Avenir-Bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-avenir",
//   display: "swap",
// });

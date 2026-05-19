import Footer from "@/components/Footer";
import "./globals.css";
import Providers from "./providers";
import Navbar from "@/components/Navbar";
import {
  poppins,
  roboto,
  inter,
  bricolage,
  // avenir,
} from "./fonts";

export const metadata = {
  title: "ensemble",
  description: "Future-ready spaces for thriving businesses",

  verification: {
    google: "7DAAeGYXuBPrZpEit4DLdvma7LDe7FBBpDem2CwyIq8",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`
          ${poppins.variable}
          ${roboto.variable}
          ${inter.variable}
          ${bricolage.variable}
        `}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}


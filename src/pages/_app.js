import "@/styles/globals.css";
import { Inter, Prata } from "next/font/google";

const prata = Prata({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-prata",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${prata.variable} ${inter.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}

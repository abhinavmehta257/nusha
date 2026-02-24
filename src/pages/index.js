import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/Header";
import Hero from "@/components/Hero";
import Section1 from "@/components/Section1";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="px-16 mx-auto items-center">
      <div>
        <Header/>
        <Hero/>
        <Section1/>
      </div>
    </div>
  );
}

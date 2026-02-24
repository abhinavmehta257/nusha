import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/Header";
import Hero from "@/components/Hero";
import Section1 from "@/components/Section1";
import Head from "next/head";
import Section2 from "@/components/Section2";
import Footer from "@/components/Footer";

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
    <>
    <Head>
      <title>Nusha Studio</title>
    </Head>
      <div className="px-16 mx-auto items-center">
        <div>
          <Header/>
          <Hero/>
          <Section1/>
          <Section2/>
          <Footer/>
        </div>
      </div>
    </>
  );
}

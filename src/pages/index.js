import Header from "../components/Header";
import Hero from "@/components/Hero";
import Section1 from "@/components/Section1";
import Head from "next/head";
import Section2 from "@/components/Section2";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
    <Head>
      <title>Nusha Studio</title>
    </Head>
      <div className="md:px-16 px-4 mx-auto items-center">
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

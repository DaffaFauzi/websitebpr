"use client";

import Contact from "@/app/components/Contact";
import About from "@/app/components/About";
import Footer from "@/app/components/Footer";
import Gallery from "@/app/components/Gallery";
import Hero from "@/app/components/Hero";
import HomePartnersMarquee from "@/app/components/HomePartnersMarquee";
import Navbar from "@/app/components/Navbar";
import Services from "@/app/components/Services";

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />
      <main>
        <Hero />
        <About />
        <HomePartnersMarquee />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}



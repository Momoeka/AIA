"use client";

import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import SmoothScroll from "@/components/SmoothScroll";
import NoiseOverlay from "@/components/NoiseOverlay";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import Sectors from "@/components/Sectors";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const handleComplete = useCallback(() => setLoading(false), []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" onComplete={handleComplete} />}
      </AnimatePresence>

      <div
        style={{
          opacity: loading ? 0 : 1,
          transition: "opacity 0.6s ease-out",
          pointerEvents: loading ? "none" : "auto",
        }}
      >
        <SmoothScroll>
          <NoiseOverlay />
          <ScrollProgress />
          <Navbar />
          <main>
            <HeroSection />
            <About />
            <Stats />
            <Services />
            <Process />
            <WhyChooseUs />
            <Sectors />
            <FAQ />
            <Contact />
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    </>
  );
}

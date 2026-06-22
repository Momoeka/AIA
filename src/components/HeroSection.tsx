"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

// On-mount reveal — text is visible right after the loader, then parallaxes away on scroll.
const reveal = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.7], [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const contentOp = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const vignetteOp = useTransform(scrollYProgress, [0, 0.45], [1, 0.35]);

  return (
    <div ref={ref} className="relative bg-[#0B0E14]" style={{ height: "170vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="absolute inset-0 will-change-transform"
        >
          {/* Mobile hero — portrait crop */}
          <Image
            src="/images/mobile-hero.png"
            alt="Surveyor operating a survey instrument in the field — AIA Surveyors"
            fill
            className="object-cover object-center md:hidden"
            priority
            quality={95}
            sizes="100vw"
          />
          {/* Desktop / tablet hero */}
          <Image
            src="/images/hero.png"
            alt="Surveyor operating a survey instrument in the field — AIA Surveyors"
            fill
            className="object-cover object-center hidden md:block"
            priority
            quality={95}
            sizes="100vw"
          />
        </motion.div>

        {/* Vignette — clean, matches the reference hero */}
        <motion.div
          style={{ opacity: vignetteOp }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.55) 100%)",
          }} />
          <div className="absolute inset-0" style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 30%, transparent 60%, rgba(8,10,15,0.9) 100%)",
          }} />
        </motion.div>

        {/* Text — bottom-left, big serif headline */}
        <motion.div style={{ y: contentY, opacity: contentOp }} className="absolute inset-0 flex items-end pb-20 sm:pb-28 lg:pb-36 will-change-transform">
          <div className="max-w-3xl w-full px-6 lg:px-12">
            <motion.span {...reveal(0.1)}
              className="block text-[11px] tracking-[0.35em] uppercase text-white/70 mb-6 font-medium">
              <span className="text-accent">●</span> Est. 2020 · GST Registered · New Delhi
            </motion.span>
            <div className="overflow-hidden">
              <motion.h1 {...reveal(0.2)}
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[120px] font-display font-medium leading-[0.92] tracking-[-0.04em] text-white">
                We measure
              </motion.h1>
            </div>
            <div className="overflow-hidden mt-1">
              <motion.h1 {...reveal(0.32)}
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[120px] font-display font-medium leading-[0.92] tracking-[-0.04em] text-white">
                the <em className="italic text-accent">ground.</em>
              </motion.h1>
            </div>
            <motion.p {...reveal(0.46)}
              className="mt-8 text-base sm:text-lg text-white/70 max-w-xl leading-relaxed">
              The ground the nation builds on — topographical, road, railway, gas pipeline, land demarcation, building layout, as-built and measurement survey, with millimetre precision, anywhere in India.
            </motion.p>
            <motion.div {...reveal(0.6)} className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="group inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white text-sm font-medium rounded-sm hover:bg-accent-hover transition-all duration-300 hover:scale-[1.02]">
                Request a Survey
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
              <a href="#services" className="px-8 py-3.5 border border-white/30 text-white text-sm font-medium rounded-sm hover:border-white/60 hover:bg-white/[0.05] transition-all duration-300 hover:scale-[1.02]">Explore Services</a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

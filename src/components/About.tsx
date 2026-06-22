"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ShimmerImage from "./ShimmerImage";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const imgScale = useTransform(scrollYProgress, [0.05, 0.4], [0.9, 1]);
  const imgOp = useTransform(scrollYProgress, [0.05, 0.35], [0, 1]);

  return (
    <section id="about" className="relative min-h-screen flex items-center py-32 lg:py-40 bg-dark border-t border-white/[0.06]">
      <div className="absolute inset-0 survey-grid opacity-[0.04] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          <motion.div ref={imgRef} style={{ scale: imgScale, opacity: imgOp }}
            className="relative aspect-[4/5] rounded-none lg:rounded-lg overflow-hidden will-change-transform -mx-6 lg:mx-0">
            <ShimmerImage src="/images/about-1.png" alt="AIA survey crew on site" fill
              className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" dark />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            {/* floating credential card */}
            <div className="absolute bottom-5 left-5 right-5 lg:left-6 lg:right-auto px-5 py-4 rounded-lg bg-[#0B0E14]/80 backdrop-blur-md border border-white/10">
              <div className="text-[10px] tracking-[0.25em] uppercase text-white/40 mb-1 font-mono">GSTIN</div>
              <div className="text-sm font-mono text-white tracking-wide">07BRKPR7554N1ZU</div>
            </div>
          </motion.div>
          <div>
            <ScrollReveal x={60} y={0}>
              <span className="block text-[11px] tracking-[0.35em] uppercase text-white/40 mb-6 font-medium">
                <span className="text-accent">—</span> About AIA Surveyors
              </span>
            </ScrollReveal>
            <ScrollReveal x={60} y={0} delay={0.1}>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-display font-medium tracking-tight mb-10 text-white leading-[1.02]">
                A survey house built on <em className="italic text-accent">precision.</em>
              </h2>
            </ScrollReveal>
            <ScrollReveal x={60} y={0} delay={0.2}>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8">
                AIA Surveyors is a dedicated land &amp; infrastructure surveying firm. We do one thing, and we do it to the millimetre — capture the ground as it truly is, and hand engineers, planners and contractors data they can build on without second-guessing.
              </p>
            </ScrollReveal>
            <ScrollReveal x={60} y={0} delay={0.3}>
              <p className="text-white/50 text-base leading-relaxed mb-8">
                Founded in 2020 and headquartered at Shaheen Bagh, New Delhi, we operate across Delhi NCR and on project sites nationwide — from highway and railway corridors to gas pipelines, township layouts and as-built documentation. No products to push, no courses to sell. Just survey, done right, on time.
              </p>
            </ScrollReveal>
            <ScrollReveal x={60} y={0} delay={0.4}>
              <div className="flex flex-wrap gap-3 mt-8">
                {["GST-registered firm", "Instrument-grade accuracy", "On-deadline delivery", "Pan-India coverage"].map((b) => (
                  <span key={b} className="inline-flex items-center gap-2 px-4 py-2 border border-white/15 rounded-full text-[12px] text-white/70 font-medium tracking-wide">
                    <span className="text-accent">▸</span>{b}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const cards = [
  { number: "01", title: "Single Accountability", description: "Proprietor-led and hands-on. One firm owns your survey end to end — no subcontracting maze, no diffused responsibility, one signature on the data." },
  { number: "02", title: "Instrument-Grade Precision", description: "Total station and DGPS workflows tied to proper control. Centimetre-level on alignment and detail, with redundancy and QA baked into every observation." },
  { number: "03", title: "Every Survey, One Roof", description: "Topographical, road, railway, pipeline, demarcation, layout, as-built and measurement — brief one team instead of stitching together eight vendors." },
  { number: "04", title: "Deadline Discipline", description: "Planned mobilisation and honest timelines. When we commit to a date, your design and construction schedule can be built around it." },
  { number: "05", title: "Decision-Ready Deliverables", description: "Clean CAD and GIS outputs, alignment sheets and reports in your format — data your engineers can act on the same day it lands." },
];

function Card({ card }: { card: typeof cards[number] }) {
  return (
    <div className="relative bg-white/[0.03] border border-white/[0.08] rounded-2xl p-10 overflow-hidden min-h-[380px] flex flex-col">
      <span className="absolute -top-6 -right-2 text-[200px] font-black text-white/[0.04] leading-none select-none pointer-events-none font-display">
        {card.number}
      </span>
      <div className="relative z-10 flex flex-col h-full justify-end">
        <div className="w-10 h-px bg-accent mb-6" />
        <h3 className="text-[22px] font-display font-medium mb-3 tracking-tight text-white">{card.title}</h3>
        <p className="text-[13px] text-white/55 leading-[1.7]">{card.description}</p>
      </div>
    </div>
  );
}

function DesktopCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-55%"]);

  return (
    <div ref={sectionRef} className="overflow-hidden">
      <motion.div style={{ x }} className="flex gap-6 pl-6 lg:pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))] pr-32 will-change-transform">
        {cards.map((card) => (
          <motion.div
            key={card.number}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="shrink-0 w-[340px] sm:w-[380px] cursor-default"
          >
            <Card card={card} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-40 lg:py-48 bg-dark border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 md:mb-20">
        <ScrollReveal>
          <span className="block text-[11px] tracking-[0.35em] uppercase text-white/40 mb-6 font-medium">
            <span className="text-accent">—</span> Why work with AIA
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tight text-white mb-6 leading-[1.05]">
            Five reasons clients<br /><em className="italic text-accent">keep calling back.</em>
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl leading-relaxed">
            From single-point accountability to decision-ready deliverables, here&apos;s why developers, contractors and government departments trust AIA with the ground truth.
          </p>
        </ScrollReveal>
      </div>

      <div className="md:hidden px-6 space-y-6">
        {cards.map((card) => (
          <ScrollReveal key={card.number}>
            <Card card={card} />
          </ScrollReveal>
        ))}
      </div>

      <div className="hidden md:block">
        <DesktopCards />
      </div>
    </section>
  );
}

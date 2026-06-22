"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    n: "01",
    title: "Brief & Reconnaissance",
    copy: "We lock down scope, datum, accuracy class and deliverable format — then walk the site to plan access, control and crew.",
  },
  {
    n: "02",
    title: "Control Network",
    copy: "Permanent benchmarks and ground control points established with DGPS and total station, tied to national or project datum.",
  },
  {
    n: "03",
    title: "Field Data Capture",
    copy: "Detail, levels, alignment and feature data collected in the field — methodical, redundant and checked as we go.",
  },
  {
    n: "04",
    title: "Processing & Drafting",
    copy: "Observations reduced and drafted in CAD/GIS, QA'd against control. Contours, sections and alignment sheets take shape.",
  },
  {
    n: "05",
    title: "Deliverables & Handover",
    copy: "Drawings, reports and as-built records delivered in your format — with a single point of contact accountable for it all.",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" className="py-32 lg:py-40 bg-[#080A0F] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16 lg:mb-24 max-w-2xl">
            <span className="block text-[11px] tracking-[0.35em] uppercase text-white/40 mb-6 font-medium">
              <span className="text-accent">—</span> How we work
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tight text-white mb-6 leading-[1.05]">
              From first peg<br /><em className="italic text-accent">to final drawing.</em>
            </h2>
            <p className="text-base sm:text-lg text-white/60 leading-relaxed">
              A disciplined, repeatable workflow on every job — so the data is traceable, the timeline is honest, and nothing gets lost between the field and your desk.
            </p>
          </div>
        </ScrollReveal>

        <div ref={ref} className="relative pl-10 sm:pl-14">
          {/* track */}
          <div className="absolute left-[14px] sm:left-[19px] top-2 bottom-2 w-px bg-white/[0.1]" />
          {/* growing fill */}
          <motion.div
            style={{ scaleY: lineScale, transformOrigin: "top" }}
            className="absolute left-[14px] sm:left-[19px] top-2 bottom-2 w-px bg-accent"
          />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((s, i) => (
              <ScrollReveal key={s.n} delay={0.05} x={30} y={0}>
                <div className="relative">
                  <span className="absolute -left-10 sm:-left-14 top-0 flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#080A0F] border border-accent/50 text-accent text-[10px] sm:text-xs font-mono">
                    {s.n}
                  </span>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8">
                    <h3 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight sm:w-72 shrink-0">{s.title}</h3>
                    <p className="text-white/55 text-base leading-relaxed max-w-xl">{s.copy}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

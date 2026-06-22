"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

type Service = {
  num: string;
  title: string;
  copy: string;
  tags: string[];
  icon: React.ReactNode;
};

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const services: Service[] = [
  {
    num: "01",
    title: "Topographical Survey",
    copy: "Full capture of natural and man-made features, spot levels and contours — the design-ready base map every project starts from.",
    tags: ["Contours", "Spot levels", "Feature mapping"],
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}><path d="M3 17c3-5 5-5 7 0s4 5 7 0" /><path d="M3 12c3-5 5-5 7 0s4 5 7 0" opacity=".55" /><path d="M3 7c3-5 5-5 7 0s4 5 7 0" opacity=".3" /></svg>
    ),
  },
  {
    num: "02",
    title: "Road Survey",
    copy: "Centre-line, alignment, cross-sections, L-section and original ground level for highways, roads and corridor design.",
    tags: ["Centre-line", "Cross-sections", "OGL"],
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}><path d="M6 21 10 3" /><path d="M18 21 14 3" /><path d="M12 7v2M12 12v2M12 17v2" /></svg>
    ),
  },
  {
    num: "03",
    title: "Railway Line Survey",
    copy: "Track alignment, corridor topography, chainage, gauge and level-crossing detail for rail infrastructure projects.",
    tags: ["Alignment", "Chainage", "Corridor"],
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}><path d="M8 3 5 21M16 3l3 18" /><path d="M4 8h16M3.5 13h17M3 18h18" /></svg>
    ),
  },
  {
    num: "04",
    title: "Gas Pipeline Survey",
    copy: "Route survey, alignment sheets, RoU/RoW mapping, chainage and crossing details for pipeline laying and audit.",
    tags: ["Route survey", "RoU / RoW", "Crossings"],
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}><path d="M3 9h11a3 3 0 0 1 3 3v0a3 3 0 0 0 3 3h1" /><circle cx="3" cy="9" r="1.4" /><circle cx="21" cy="15" r="1.4" /><path d="M9 9v-.01M14 12v.01" /></svg>
    ),
  },
  {
    num: "05",
    title: "Land Demarcation",
    copy: "Boundary fixing, corner pillars, area computation and plot verification against revenue records — disputes settled with data.",
    tags: ["Boundaries", "Area calc", "Corner pillars"],
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}><path d="M4 4v16h16" strokeDasharray="2 3" /><path d="M4 4 20 4 20 20" /><circle cx="4" cy="4" r="1.4" /><circle cx="20" cy="20" r="1.4" /><circle cx="20" cy="4" r="1.4" /></svg>
    ),
  },
  {
    num: "06",
    title: "Building Layout",
    copy: "Precise setting-out on the ground — grid lines, column centres and plinth marking that put the architect's drawing exactly where it belongs.",
    tags: ["Setting-out", "Grid layout", "Plinth"],
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}><rect x="4" y="4" width="16" height="16" rx="1" /><path d="M4 10h16M4 15h16M10 4v16M15 4v16" opacity=".55" /></svg>
    ),
  },
  {
    num: "07",
    title: "As-Built Survey",
    copy: "Record of what was actually constructed versus design — the authoritative reference for handover, audit and future works.",
    tags: ["Verification", "Handover", "Records"],
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}><path d="M4 7l8-4 8 4v10l-8 4-8-4z" /><path d="M4 7l8 4 8-4M12 11v10" opacity=".55" /><path d="m9 12 2 2 4-4" /></svg>
    ),
  },
  {
    num: "08",
    title: "Measurement Survey",
    copy: "Quantity, area and volumetric measurement for billing, verification and earthwork — numbers your QS team can sign off on.",
    tags: ["Quantities", "Volumetrics", "Billing"],
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}><path d="M3 16 16 3l5 5L8 21z" /><path d="M7 12l2 2M10 9l2 2M13 6l2 2" /></svg>
    ),
  },
];

function ServiceCard({ s, index }: { s: Service; index: number }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative h-full rounded-2xl p-7 lg:p-8 bg-white/[0.025] border border-white/[0.08] overflow-hidden"
    >
      {/* gradient glow border on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(420px circle at 50% 0%, rgba(46,125,255,0.12), transparent 70%)" }}
      />
      <span className="absolute top-4 right-5 text-[64px] leading-none font-display font-medium text-white/[0.05] select-none pointer-events-none">
        {s.num}
      </span>

      <div className="relative z-10 flex flex-col h-full">
        <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6 transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:scale-105">
          <span className="w-6 h-6 block">{s.icon}</span>
        </div>
        <h3 className="text-xl font-display font-medium tracking-tight text-white mb-3 leading-snug">{s.title}</h3>
        <p className="text-[13.5px] text-white/55 leading-relaxed mb-6 flex-1">{s.copy}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {s.tags.map((t) => (
            <span key={t} className="text-[10.5px] tracking-wide uppercase px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.07] text-white/45">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-32 lg:py-40 bg-dark border-t border-white/[0.06]">
      <div className="absolute inset-0 survey-grid opacity-[0.04] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <ScrollReveal>
          <div className="mb-16 lg:mb-24 max-w-2xl">
            <span className="block text-[11px] tracking-[0.35em] uppercase text-white/40 mb-6 font-medium">
              <span className="text-accent">—</span> All types of survey
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tight text-white mb-6 leading-[1.05]">
              One firm.<br /><em className="italic text-accent">Every kind of survey.</em>
            </h2>
            <p className="text-base sm:text-lg text-white/60 leading-relaxed">
              From the first contour to the final as-built, AIA covers the full spectrum of land and infrastructure survey — so you brief one accountable team instead of chasing eight.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.num} delay={(i % 4) * 0.08} y={30}>
              <ServiceCard s={s} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    q: "What types of survey do you carry out?",
    a: "All of them, in practice — topographical, road, railway line, gas pipeline, land demarcation, building layout, as-built and measurement survey. If it involves capturing the ground accurately and turning it into drawings or numbers, it's our core work.",
  },
  {
    q: "What instruments and accuracy do you work to?",
    a: "We run total station and DGPS workflows tied to a proper control network, supported by auto/digital levels for precise levelling. On control and alignment we work to centimetre-level accuracy, with redundant observations and quality checks built into every job.",
  },
  {
    q: "Do you work outside Delhi?",
    a: "Yes. We're headquartered at Shaheen Bagh, New Delhi and serve Delhi NCR directly, but our crews mobilise to project sites across India. Share the location and scope and we'll plan access, control and timeline accordingly.",
  },
  {
    q: "What deliverables do I receive, and in what format?",
    a: "Typically CAD drawings (DWG/DXF), PDF plots, contour and cross-section sheets, alignment sheets, area and volume reports, and as-built records — delivered in the format and datum your design or audit team needs.",
  },
  {
    q: "How do I get a quote and how fast can you mobilise?",
    a: "Send us the survey type, site location, approximate area or length, and your deadline. We'll come back with a clear scope and quote, and in most cases mobilise a crew quickly — deadline adherence is something we take seriously.",
  },
  {
    q: "Are you a registered firm?",
    a: "Yes. AIA Surveyors is a GST-registered firm (GSTIN 07BRKPR7554N1ZU), operating since 2020 under proprietor Saiyed Rahmatullah, based in New Delhi.",
  },
];

function Item({ q, a, open, toggle, id }: { q: string; a: string; open: boolean; toggle: () => void; id: number }) {
  const headingId = `faq-heading-${id}`;
  const panelId = `faq-panel-${id}`;

  return (
    <div className="border-b border-white/[0.08]">
      <button
        onClick={toggle}
        aria-expanded={open}
        aria-controls={panelId}
        id={headingId}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-base sm:text-lg font-medium pr-4 text-white group-hover:text-accent transition-colors">{q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.3 }}
          className="text-2xl text-accent shrink-0 leading-none" aria-hidden="true">+</motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={headingId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="text-sm sm:text-base text-white/60 leading-relaxed pb-6 max-w-2xl">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="py-32 lg:py-40 border-t border-white/[0.06] bg-[#080A0F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <ScrollReveal>
            <div className="lg:sticky lg:top-32">
              <span className="block text-[11px] tracking-[0.35em] uppercase text-white/40 mb-6 font-medium">
                <span className="text-accent">—</span> FAQ
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tight mb-6 text-white leading-[1.05]">
                Clear answers,<br /><em className="italic text-accent">before the brief.</em>
              </h2>
              <p className="text-white/60 text-base leading-relaxed max-w-md">
                The questions clients ask most about scope, accuracy, coverage and deliverables. Anything else — we&apos;ll reply within one business day.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="border-t border-white/[0.08]">
              {faqs.map((f, i) => (
                <Item key={f.q} q={f.q} a={f.a} open={openIdx === i} toggle={() => setOpenIdx(openIdx === i ? null : i)} id={i} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

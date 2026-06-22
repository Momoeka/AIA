"use client";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wordmark } from "./Logo";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Sectors", href: "#sectors" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 1.5);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      window.dispatchEvent(new Event("lenis:stop"));
    } else {
      window.dispatchEvent(new Event("lenis:start"));
    }
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <motion.nav
      initial={false}
      animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center bg-[#080A0F]/90 backdrop-blur-xl border-b border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 flex items-center justify-between">
        <a href="#" aria-label="AIA Surveyors home">
          <Wordmark />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="text-[13px] text-white/60 hover:text-white transition-colors duration-300">{l.label}</a>
          ))}
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-5 py-2 border border-white/80 text-white text-[13px] font-medium rounded-sm hover:bg-accent hover:border-accent transition-all duration-300"
          >
            Request a Survey
            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
          aria-expanded={mobileOpen}
        >
          <span className={`w-5 h-px bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`w-5 h-px bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-16 bg-black/40 md:hidden z-40"
              onClick={closeMobile}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 left-0 right-0 bg-[#080A0F]/95 backdrop-blur-xl border-b border-white/[0.06] md:hidden z-50"
            >
              <div className="flex flex-col px-6 py-4 gap-4">
                {navLinks.map((l) => (
                  <a key={l.label} href={l.href} onClick={closeMobile}
                    className="text-sm text-white/60 hover:text-white transition-colors">{l.label}</a>
                ))}
                <a
                  href="#contact"
                  onClick={closeMobile}
                  className="inline-flex items-center justify-center gap-2 mt-2 px-5 py-2.5 bg-accent text-white text-sm font-medium rounded-sm"
                >
                  Request a Survey
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { LogoMark } from "./Logo";

const ANIM_DURATION = 2000;

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const startTime = useRef<number | null>(null);
  const onCompleteRef = useRef(onComplete);
  const mountedRef = useRef(true);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    mountedRef.current = true;
    return () => { mountedRef.current = false; };
  }, []);

  useEffect(() => {
    let rafId: number;
    let timeoutId: ReturnType<typeof setTimeout>;

    function tick(now: number) {
      if (!mountedRef.current) return;
      if (!startTime.current) startTime.current = now;
      const elapsed = now - startTime.current;
      const p = Math.min(elapsed / ANIM_DURATION, 1);
      setProgress(p);
      if (p < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        timeoutId = setTimeout(() => {
          if (mountedRef.current) onCompleteRef.current();
        }, 350);
      }
    }

    rafId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="fixed inset-0 z-[10000] bg-[#080A0F] flex flex-col items-center justify-center gap-7 px-6"
    >
      <div className="absolute inset-0 survey-grid opacity-40 pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative text-accent"
      >
        <LogoMark className="w-14 h-14" />
      </motion.div>

      <span className="relative text-xl sm:text-2xl tracking-[0.32em] uppercase text-white font-semibold">
        AIA <span className="text-accent">Surveyors</span>
      </span>

      <div className="relative w-[220px] sm:w-[280px] h-[2px] bg-white/10 overflow-hidden">
        <div
          className="h-full bg-accent origin-left"
          style={{
            transform: `scaleX(${progress})`,
            boxShadow: "0 0 12px rgba(46,125,255,0.7)",
            transition: "transform 80ms linear",
          }}
        />
      </div>
      <span className="relative text-[10px] tracking-[0.3em] uppercase text-white/30 font-mono">
        {Math.round(progress * 100)}%
      </span>
    </motion.div>
  );
}

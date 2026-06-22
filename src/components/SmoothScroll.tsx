"use client";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      lerp: 0.1,           // frame-rate independent smoothing — natural, responsive, no heavy float
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
      syncTouch: false,    // let mobile use native momentum (avoids the "fighting the scroll" feel)
    });
    lenisRef.current = lenis;

    let id: number;
    function raf(time: number) {
      lenis.raf(time);
      id = requestAnimationFrame(raf);
    }
    id = requestAnimationFrame(raf);

    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[href^='#']");
      if (!anchor) return;
      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;
      const target = document.querySelector(hash);
      if (target) {
        e.preventDefault();
        lenis.scrollTo(target as HTMLElement, { offset: 0 });
      }
    }
    document.addEventListener("click", handleClick);

    function handleStop() { lenis.stop(); }
    function handleStart() { lenis.start(); }
    window.addEventListener("lenis:stop", handleStop);
    window.addEventListener("lenis:start", handleStart);

    return () => {
      cancelAnimationFrame(id);
      document.removeEventListener("click", handleClick);
      window.removeEventListener("lenis:stop", handleStop);
      window.removeEventListener("lenis:start", handleStart);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}

"use client";

export function LogoMark({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M32 4 L37 27 L60 32 L37 37 L32 60 L27 37 L4 32 L27 27 Z"
        fill="currentColor"
        fillOpacity="0.16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M32 12 V52 M12 32 H52" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
      <path d="M32 30 L24 46 M32 30 L40 46 M32 30 L32 44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="32" r="3.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="w-7 h-7 text-accent" />
      <span className="font-display font-medium tracking-[0.04em] text-white text-[17px]">
        AIA<span className="text-accent"> </span>
        <span className="text-white/85 text-[12px] tracking-[0.28em] uppercase font-sans align-middle">
          Surveyors
        </span>
      </span>
    </span>
  );
}

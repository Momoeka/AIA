"use client";
import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { number: 8, suffix: "", prefix: "", label: "Survey Disciplines", desc: "Every type of survey — from topographical to as-built — under one accountable team." },
  { number: 5, suffix: "+ yrs", prefix: "", label: "On the Ground Since 2020", desc: "Field-tested across highways, railways, pipelines, townships and utilities." },
  { number: 1, suffix: " cm", prefix: "≤ ", label: "Field Accuracy", desc: "Total-station and DGPS precision on both control networks and fine detail." },
  { number: 100, suffix: "%", prefix: "", label: "On-Time Delivery", desc: "Deadline adherence is non-negotiable on every engagement we take on." },
  { number: 24, suffix: "×7", prefix: "", label: "Rapid Mobilisation", desc: "Crews mobilise fast across Delhi NCR and on project sites pan-India." },
  { number: 1, suffix: "", prefix: "", label: "Point of Accountability", desc: "One firm, one signature — full ownership of your survey data, end to end." },
];

export default function Stats() {
  return (
    <section id="numbers" className="py-32 lg:py-44 border-t border-white/[0.06] bg-[#080A0F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16 lg:mb-24 max-w-2xl">
            <span className="block text-[11px] tracking-[0.35em] uppercase text-white/40 mb-6 font-medium">
              <span className="text-accent">—</span> Measured by what we deliver
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tight text-white mb-6 leading-[1.05]">
              Boots on site.<br /><em className="italic text-accent">Points on the page.</em>
            </h2>
            <p className="text-base sm:text-lg text-white/60 leading-relaxed">
              We let the work speak. Clean control, honest data, and deliverables your engineers can act on the same day they land.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-white/[0.08]">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={(i % 3) * 0.1}>
              <div className={`group py-10 lg:py-12 lg:px-8 border-b border-white/[0.08] transition-colors duration-300 hover:bg-white/[0.015] ${i % 3 !== 0 ? "lg:border-l" : ""} sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:lg:border-r-0`}>
                <div className="text-4xl sm:text-5xl lg:text-[56px] font-display font-medium text-white mb-4 tracking-tight">
                  <AnimatedCounter target={s.number} suffix={s.suffix} prefix={s.prefix} />
                </div>
                <div className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="w-4 h-px bg-accent transition-all duration-300 group-hover:w-7" />
                  {s.label}
                </div>
                <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

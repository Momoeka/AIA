"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const sectors = [
  {
    tag: "Transport",
    title: "Highways & Roads",
    meta: "Alignment · Cross-sections · OGL",
    copy: "Centre-line and corridor survey for national highways, state roads and urban arterials — from feasibility topography to as-built handover.",
    image: "/images/work-road.jpeg",
  },
  {
    tag: "Transport",
    title: "Railways & Corridors",
    meta: "Track alignment · Chainage",
    copy: "Corridor topography, track alignment and crossing detail for rail infrastructure — survey that respects tight tolerances and live-line constraints.",
    image: "/images/work-topo.jpeg",
  },
  {
    tag: "Energy",
    title: "Oil & Gas Pipelines",
    meta: "Route survey · RoU / RoW",
    copy: "Route and alignment-sheet survey for pipeline laying — chainage, crossings and right-of-use mapping that keeps construction on the legal line.",
    image: "/images/work-power.png",
  },
  {
    tag: "Water",
    title: "Water & Irrigation",
    meta: "Contours · Sections · Volumes",
    copy: "Catchment, canal and reservoir survey — contour mapping, cross-sections and earthwork volumetrics for water-resource and irrigation works.",
    image: "/images/work-hydro.jpeg",
  },
  {
    tag: "Real Estate",
    title: "Real Estate & Layout",
    meta: "Demarcation · Setting-out",
    copy: "Boundary demarcation, plot verification and building layout — putting townships, plotted developments and structures exactly where the plan intends.",
    image: "/images/work-construction.png",
  },
  {
    tag: "Industrial",
    title: "Industrial & As-Built",
    meta: "As-built · Measurement",
    copy: "As-built documentation and measurement survey for plants, structures and utilities — the authoritative record for audit, billing and future works.",
    image: "/images/about-3.jpeg",
  },
];

export default function Sectors() {
  return (
    <section id="sectors" className="py-32 lg:py-40 bg-dark border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16 lg:mb-24 max-w-2xl">
            <span className="block text-[11px] tracking-[0.35em] uppercase text-white/40 mb-6 font-medium">
              <span className="text-accent">—</span> Where we work
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tight text-white mb-6 leading-[1.05]">
              Across sectors.<br /><em className="italic text-accent">Across terrain.</em>
            </h2>
            <p className="text-base sm:text-lg text-white/60 leading-relaxed">
              The same precision discipline, wherever the ground takes us — transport corridors, energy networks, water systems, real estate and heavy industry.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {sectors.map((p, i) => (
            <ScrollReveal key={p.title} delay={(i % 3) * 0.12}>
              <article className="group">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-5 bg-white/[0.04]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1.5 bg-black/40 backdrop-blur-sm border border-white/15 rounded-full text-[10.5px] tracking-[0.18em] uppercase text-white/80 font-medium">
                    {p.tag}
                  </span>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl sm:text-2xl font-display font-medium tracking-tight text-white">{p.title}</h3>
                    <p className="text-accent text-[12px] font-mono mt-1">{p.meta}</p>
                  </div>
                </div>
                <p className="text-white/55 text-sm leading-relaxed">{p.copy}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

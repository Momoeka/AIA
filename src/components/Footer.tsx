"use client";

import { siteConfig } from "@/lib/siteConfig";
import { LogoMark } from "./Logo";

const services = [
  "Topographical Survey",
  "Road & Railway Survey",
  "Gas Pipeline Survey",
  "Land Demarcation",
  "Building Layout & As-Built",
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-[#080A0F] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-4">
            <a href="#" className="inline-flex items-center gap-2.5 mb-4">
              <LogoMark className="w-7 h-7 text-accent" />
              <span className="font-display font-medium tracking-[0.04em] text-white text-[17px]">
                AIA <span className="text-white/85 text-[12px] tracking-[0.28em] uppercase font-sans align-middle">Surveyors</span>
              </span>
            </a>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs italic font-display mb-5">
              &ldquo;{siteConfig.tagline}&rdquo;
            </p>
            <p className="text-white/35 text-xs leading-relaxed max-w-xs">
              Proprietor: {siteConfig.proprietor} · GSTIN {siteConfig.gstin} · Since {siteConfig.founded}
            </p>
          </div>

          <div className="lg:col-span-3">
            <span className="block text-[11px] tracking-[0.25em] uppercase text-white/40 mb-4 font-medium">Services</span>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s}><a href="#services" className="text-white/60 hover:text-white transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <span className="block text-[11px] tracking-[0.25em] uppercase text-white/40 mb-4 font-medium">Site</span>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-white/60 hover:text-white transition-colors">About</a></li>
              <li><a href="#process" className="text-white/60 hover:text-white transition-colors">Process</a></li>
              <li><a href="#sectors" className="text-white/60 hover:text-white transition-colors">Sectors</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <span className="block text-[11px] tracking-[0.25em] uppercase text-white/40 mb-4 font-medium">Reach Us</span>
            <ul className="space-y-2 text-sm">
              <li><a href={`mailto:${siteConfig.email}`} className="text-white/60 hover:text-white transition-colors break-all">{siteConfig.email}</a></li>
              {siteConfig.phonesDisplay.map((p, i) => (
                <li key={p}><a href={`tel:${siteConfig.phones[i]}`} className="text-white/60 hover:text-white transition-colors">{p}</a></li>
              ))}
              <li className="text-white/50 text-xs leading-relaxed pt-2 max-w-xs">{siteConfig.address}</li>
            </ul>

            <div className="flex gap-3 mt-6">
              <a href={siteConfig.socials.email}
                className="w-10 h-10 border border-white/[0.1] rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:border-accent transition-all duration-300" aria-label="Email">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><path strokeLinecap="round" strokeLinejoin="round" d="M3 6.75h18v10.5H3z" /><path strokeLinecap="round" strokeLinejoin="round" d="m3.5 7 8.5 6 8.5-6" /></svg>
              </a>
              <a href={siteConfig.socials.phone}
                className="w-10 h-10 border border-white/[0.1] rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:border-accent transition-all duration-300" aria-label="Call">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z"/></svg>
              </a>
              <a href={siteConfig.socials.whatsapp} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 border border-white/[0.1] rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:border-accent transition-all duration-300" aria-label="WhatsApp">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-white/40">© {year} {siteConfig.name}. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <span className="text-xs text-white/40">{siteConfig.regions.join(" · ")}</span>
            <a href="#" className="inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors group">
              Back to top
              <svg className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import BentoCard from "./BentoCard";
import { usePreferences } from "./PreferencesProvider";

export default function Hero() {
  const { locale } = usePreferences();

  return (
    <BentoCard className="col-span-1 md:col-span-4 lg:col-span-8 flex flex-col min-h-[380px]">
      <div className="mb-[22px] inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-fg-mute font-mono">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-accent shadow-[0_0_10px_var(--color-blue-accent)]" />
        {locale === "en" ? "Portfolio - 2026" : "Portafolio - 2026"}
      </div>
      <h1 className="text-[clamp(40px,4.6vw,60px)] font-semibold leading-[1.0] tracking-[-0.035em] mb-4">
        {locale === "en" ? "Hi, I'm " : "Hola, soy "}
        <span className="grad-text">Carlos Altán.</span>
      </h1>
      <p className="text-[19px] text-fg-dim mb-[18px] font-normal">
        <strong className="text-fg font-semibold">FullStack Junior Developer</strong>
      </p>
      <p className="text-[15.5px] text-fg-dim leading-[1.6] max-w-[540px] mb-6 text-pretty">
        {locale === "en"
          ? "Building modern full-stack applications and scalable backend architectures. I work end-to-end: from database design and Docker deployments to high-performance Next.js interfaces and georeferenced systems."
          : "Construyo aplicaciones full-stack modernas y arquitecturas backend escalables. Trabajo de punta a punta: desde el diseño de bases de datos y despliegues con Docker, hasta interfaces de alto rendimiento en Next.js y sistemas georreferenciados."}
      </p>
      <div className="mt-auto flex gap-[22px] flex-wrap pt-[18px] border-t border-[var(--line)]">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-[0.12em] text-fg-mute font-mono">{locale === "en" ? "Location" : "Ubicacion"}</span>
          <span className="text-[14px] text-fg font-medium">Guatemala</span>
        </div>
        
        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-[0.12em] text-fg-mute font-mono">Focus</span>
          <span className="text-[14px] text-fg font-medium">Web</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-[0.12em] text-fg-mute font-mono">Status</span>
          <span className="text-[14px] text-fg font-medium">{locale === "en" ? "Available now" : "Disponible ahora"}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-[0.12em] text-fg-mute font-mono">{locale === "en" ? "Education" : "Formación"}</span>
          <span className="text-[14px] text-fg font-medium">{locale === "en" ? "CS & IT Engineering · UVG" : "CS e Ing. IT · UVG"}</span>
        </div>
      </div>
    </BentoCard>
  );
}

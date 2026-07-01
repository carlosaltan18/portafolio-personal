"use client";

import BentoCard from "./BentoCard";
import Chip from "./Chip";
import { usePreferences } from "./PreferencesProvider";

/**
 * Returns true only if the URL uses HTTPS and is not a bare IP address.
 * A bare IPv4 address looks like digits-dot-digits; we reject those even
 * under HTTPS because they are not stable public endpoints.
 */
function isPublicUrl(url: string): boolean {
  try {
    const { protocol, hostname } = new URL(url);
    if (protocol !== "https:") return false;
    // Reject bare IPv4 (e.g. 158.23.57.118)
    const ipv4Pattern = /^(\d{1,3}\.){3}\d{1,3}$/;
    return !ipv4Pattern.test(hostname);
  } catch {
    return false;
  }
}

export default function FeaturedProject() {
  const { locale } = usePreferences();

  const demoLink = "https://guatevigila.netlify.app";
  const repoLink = "https://github.com/bcastillo-2022474/GuateVigila";

  const showDemoButton = isPublicUrl(demoLink);

  return (
    <BentoCard className="col-span-1 md:col-span-3 lg:col-span-7 flex flex-col">
      <div className="flex items-center justify-between mb-[18px] gap-[10px]">
        <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-fg-mute font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-accent shadow-[0_0_10px_var(--color-blue-accent)]" />
          {locale === "en" ? "Featured Project" : "Proyecto destacado"}
        </div>
        <span className="text-fg-mute text-[12px] font-mono">2026</span>
      </div>

      <div className="relative rounded-[var(--radius-sm)] overflow-hidden border border-[var(--line)] mb-[22px] aspect-[16/7]">
        <img
          src="/assets/images/guatevigilia.png"
          alt="GuateVigila"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex items-center gap-2.5 text-[12px] text-fg-mute mb-2.5 font-mono flex-wrap">
        <span>{locale === "en" ? "GuateVigila" : "GuateVigila"}</span>
        <span className="opacity-40">/</span>
        <span>{locale === "en" ? "Public procurement risk detection" : "Detección de riesgo en compras públicas"}</span>
      </div>

      <h2 className="text-[26px] font-semibold tracking-[-0.02em] leading-[1.15] mb-3">
        <span className="grad-text">GuateVigila</span>{" "}
        {locale === "en" ? "for civic procurement oversight." : "para la vigilancia de compras públicas."}
      </h2>
      <p className="text-fg-dim text-[14px] leading-[1.6] mb-3.5 text-pretty">
        {locale === "en"
          ? "Civic tech dashboard that analyzes Guatecompras OCDS public procurement data and surfaces anomalous supplier-entity behavior using DuckDB, direct SQL queries, and contextual risk alerts."
          : "Dashboard civic tech que analiza datos OCDS de Guatecompras y destaca comportamientos anómalos entre entidades y proveedores usando DuckDB, consultas SQL directas y alertas de riesgo contextuales."}
      </p>

      <ul className="list-none p-0 mb-[22px] grid grid-cols-1 md:grid-cols-2 gap-[8px_18px]">
        {(locale === "en"
          ? [
              "Detects procurement risk signals in Guatemalan public contracts",
              "Uses DuckDB over OCDS CSV files with direct SQL queries",
              "Built with Next.js, TypeScript, Tailwind CSS, Vercel, and AI-assisted context drafts",
              "Focuses on data transparency, risk monitoring, and civic oversight",
            ]
          : [
              "Detecta señales de riesgo en contrataciones públicas guatemaltecas",
              "Usa DuckDB sobre archivos CSV OCDS con consultas SQL directas",
              "Construido con Next.js, TypeScript, Tailwind CSS, Vercel y borradores de contexto asistidos por IA",
              "Enfocado en transparencia de datos, monitoreo de riesgo y vigilancia cívica",
            ]
        ).map((item) => (
          <li key={item} className="flex items-start gap-2 text-[13px] text-fg-dim leading-[1.45] before:content-[''] before:w-1.5 before:h-1.5 before:rounded-[2px] before:bg-[var(--grad)] before:mt-1.5 before:shrink-0">
            {item}
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-5 mt-auto">
        <div className="flex flex-wrap gap-1.5">
          <Chip label="Next.js" dotColor="#61dafb" />
          <Chip label="NestJS" dotColor="#e0234e" />
          <Chip label="Docker Compose" dotColor="#2496ed" />
          <Chip label="Prisma" dotColor="#2d3748" />
          <Chip label="PostgreSQL" dotColor="#336791" />
        </div>

        <div className="flex items-center justify-end border-t border-[var(--line)] pt-5 gap-3 flex-wrap">
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[8px] text-fg-dim text-[11px] font-mono py-[9px] px-4 bg-white/4 border border-[var(--line)] rounded-full transition-all duration-200 hover:text-white hover:bg-white/10 hover:border-white/30 hover:scale-[1.03] active:scale-[0.97] group shadow-[0_0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_12px_rgba(255,255,255,0.05)]"
          >
            {locale === "en" ? "Source Code" : "Código Fuente"}
            <svg width="12" height="12" viewBox="0 0 16 16" className="opacity-70 group-hover:opacity-100">
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.1 0-.71-.24-1.17-.51-1.41 1.67-.18 3.43-.82 3.43-3.72 0-.82-.29-1.49-.77-2.02.08-.19.33-.96-.07-1.99 0 0-.63-.2-2.07.77A7.114 7.114 0 0 0 8 4.74c-.68 0-1.36.09-2 .27-1.44-.97-2.07-.77-2.07-.77-.4 1.03-.15 1.8-.07 1.99-.48.53-.78 1.2-.78 2.02 0 2.89 1.75 3.54 3.42 3.72-.21.19-.4.52-.47.99-.42.19-1.48.51-2.13-.61 0 0-.39-.71-.13-1.07 0 0-.46-.01-.32.28 0 0 .31.14.52.68 0 0 .28.85 1.63.58.01.62.01 1.11.01 1.27 0 .21-.16.47-.56.38A8.013 8.013 0 0 1 0 8c0-4.42 3.58-8 8-8z" fill="currentColor" />
            </svg>
          </a>

          {showDemoButton ? (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[8px] text-fg-dim text-[11px] font-mono py-[9px] px-4 bg-white/4 border border-[var(--line)] rounded-full transition-all duration-200 hover:text-white hover:bg-grad hover:border-transparent group"
            >
              {locale === "en" ? "Launch App" : "Abrir App"}
              <svg width="12" height="12" viewBox="0 0 16 16" className="transition-transform duration-250 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
                <path d="M3 13 L13 3 M6 3 H13 V10" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ) : (
            <span className="inline-flex items-center gap-[8px] text-fg-mute text-[11px] font-mono py-[9px] px-4 border border-[var(--line)] rounded-full cursor-default select-none">
              {locale === "en"
                ? "Live on private VPS · IP available on request"
                : "Corriendo en VPS privado · IP disponible al solicitarla"}
            </span>
          )}
        </div>
      </div>
    </BentoCard>
  );
}


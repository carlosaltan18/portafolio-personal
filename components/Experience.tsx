"use client";

import BentoCard from "./BentoCard";
import { usePreferences } from "./PreferencesProvider";

const experiences = [
  {
    roleEn: "Freelance Developer",
    roleEs: "Desarrollador Freelance",
    company: "WoowbeGt, Guatemala",
    periodEn: "07/2025 - Present",
    periodEs: "07/2025 - Presente",
    bulletsEn: [
      "Development of full-stack applications leveraging NestJS for scalable backends and Next.js for dynamic frontends.",
      "Integrated Cloudflare Images to optimize cloud storage, delivery, and pipeline for application assets.",
    ],
    bulletsEs: [
      "Desarrollo de aplicaciones full-stack con NestJS para backends escalables y Next.js para frontends dinámicos.",
      "Integré Cloudflare Images para optimizar almacenamiento en la nube, entrega y canal de activos de la aplicación.",
    ],
  },
  {
    roleEn: "Freelance Web Developer",
    roleEs: "Desarrollador Web Freelance",
    company: "Recigua, Guatemala",
    periodEn: "01/2026 - 02/2026",
    periodEs: "01/2026 - 02/2026",
    bulletsEn: [
      "Developed robust RESTful endpoints using TypeScript and NestJS to automate ticket generation and weight calculations for a recycling plant.",
      "Built modern, high-performance user interfaces with Next.js, ensuring responsive design and web development best practices.",
      "Designed a relational SQL database schema and containerized the application using Docker for seamless deployment.",
    ],
    bulletsEs: [
      "Desarrollé endpoints RESTful robustos con TypeScript y NestJS para automatizar la generación de tickets y cálculos de peso en una planta de reciclaje.",
      "Construí interfaces web modernas y de alto rendimiento con Next.js, asegurando diseño responsivo y buenas prácticas de desarrollo web.",
      "Diseñé un esquema de base de datos relacional SQL y contenedoricé la aplicación usando Docker para un despliegue fluido.",
    ],
  },
  {
    roleEn: "Backend Developer",
    roleEs: "Desarrollador Backend",
    company: "Asigbo",
    periodEn: "01/2026 - Present",
    periodEs: "01/2026 - Presente",
    bulletsEn: [
      "Coordinated and assisted in migrating the ASIGBO portal from JavaScript to TypeScript, improving codebase maintainability and type safety.",
      "Maintained the platform by refactoring legacy code and implementing high-priority new features.",
    ],
    bulletsEs: [
      "Coordiné y asistí en la migración del portal ASIGBO de JavaScript a TypeScript, mejorando la mantenibilidad y seguridad de tipos del código.",
      "Mantuve la plataforma refactorizando código heredado e implementando nuevas funciones de alta prioridad.",
    ],
  },
];

export default function Experience() {
  const { locale } = usePreferences();

  return (
    <BentoCard className="col-span-1 md:col-span-3 lg:col-span-4">
      <div className="flex items-center justify-between mb-[18px] gap-[10px]">
        <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-fg-mute font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-accent shadow-[0_0_10px_var(--color-blue-accent)]" />
          {locale === "en" ? "Experience" : "Experiencia"}
        </div>
        <span className="text-fg-mute text-[12px] font-mono">3 roles</span>
      </div>
      <ul className="list-none p-0 m-0 flex flex-col gap-4">
        {experiences.map((exp, index) => (
          <li key={index} className="flex flex-col gap-1.5 pb-4 border-b border-[var(--line)] last:border-0 last:pb-0">
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-fg text-[14px] font-semibold leading-[1.25]">
                {locale === "en" ? exp.roleEn : exp.roleEs}
              </span>
              <span className="text-fg-mute text-[12px] font-mono">
                {locale === "en" ? exp.periodEn : exp.periodEs}
              </span>
            </div>
            <span className="text-blue-accent text-[12.5px] font-medium">{exp.company}</span>
            <ul className="list-none p-0 m-0 mt-1.5 flex flex-col gap-1">
              {(locale === "en" ? exp.bulletsEn : exp.bulletsEs).map((bullet, i) => (
                <li key={i} className="flex items-start gap-1.5 text-[12.5px] text-fg-dim leading-[1.45] before:content-[''] before:w-[3px] before:h-[3px] before:rounded-full before:bg-fg-mute before:mt-2 before:shrink-0">
                  {bullet}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </BentoCard>
  );
}

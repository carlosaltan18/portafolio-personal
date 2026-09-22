"use client";

import BentoCard from "./BentoCard";
import { usePreferences } from "./PreferencesProvider";

const experiences = [
  {
    roleEn: "Freelance Developer",
    roleEs: "Desarrollador Freelance",
    company: "Woowbe GT, Guatemala",
    periodEn: "07/2025 - Present",
    periodEs: "07/2025 - Presente",
    bulletsEn: [
      "Developed administrative modules for quotes, work orders, Medinet orders, internal tasks, communication feeds, and credit notes with role-based permissions and business rules.",
      "Built REST APIs with NestJS, TypeScript, MongoDB/Mongoose, and JWT authentication.",
      "Integrated Next.js/React interfaces, advanced filters, analytics, printable documents, SMTP email, and secure image uploads with Cloudflare R2/S3.",
    ],
    bulletsEs: [
      "Desarrollé módulos administrativos para cotizaciones, órdenes de trabajo, órdenes Medinet, tareas internas, feed de comunicación y notas de crédito con permisos por rol y reglas de negocio.",
      "Construí APIs REST con NestJS, TypeScript, MongoDB/Mongoose y autenticación JWT.",
      "Integré interfaces en Next.js/React, filtros avanzados, estadísticas, documentos imprimibles, correo SMTP y carga segura de imágenes con Cloudflare R2/S3.",
    ],
  },
  {
    roleEn: "Freelance Web Developer",
    roleEs: "Desarrollador Web Freelance",
    company: "Recigua, Guatemala",
    periodEn: "01/2026 - 02/2026",
    periodEs: "01/2026 - 02/2026",
    bulletsEn: [
      "Developed a recycling management platform with a Next.js frontend, NestJS API, JWT authentication, and role-based permissions.",
      "Implemented users, suppliers, products, and reports with search, pagination, validation, and automatic pricing from weight conversions.",
      "Designed the PostgreSQL schema and containerized the solution with Docker Compose and pgAdmin for reproducible environments.",
    ],
    bulletsEs: [
      "Desarrollé una plataforma de gestión para una recicladora con frontend en Next.js, API en NestJS, autenticación JWT y permisos por rol.",
      "Implementé módulos de usuarios, proveedores, productos y reportes con búsqueda, paginación, validación y cálculo automático de precios por conversión de peso.",
      "Diseñé el esquema en PostgreSQL y contenedoricé la solución con Docker Compose y pgAdmin para entornos reproducibles.",
    ],
  },
  {
    roleEn: "Backend Developer",
    roleEs: "Desarrollador Backend",
    company: "ASIGBO, Guatemala",
    periodEn: "01/2026 - Present",
    periodEs: "01/2026 - Presente",
    bulletsEn: [
      "Supported the gradual migration of the ASIGBO portal from JavaScript to TypeScript, improving maintainability and type safety.",
      "Maintained the platform by refactoring legacy code and implementing high-priority new features.",
    ],
    bulletsEs: [
      "Apoyo en la migración gradual del portal ASIGBO de JavaScript a TypeScript, mejorando la mantenibilidad y seguridad de tipos del código.",
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

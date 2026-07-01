"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import CertificationCard from "@/components/CertificationCard";
import { usePreferences } from "@/components/PreferencesProvider";
import PdfModal from "@/components/PdfModal";

const LOGOS = {
  FM: "https://frontendmasters.com/static-assets/core/m-transparent.webp",
  BROADCOM: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Broadcom_logo_%282016-present%29.svg",
  INTECAP: "https://upload.wikimedia.org/wikipedia/commons/0/09/Logotipo_de_el_INTECAP.png",
  PLATZI: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/platzi.png",
  CISCO: "https://www.vectorlogo.zone/logos/cisco/cisco-icon.svg",
  ANTHROPIC: "https://cdn.jsdelivr.net/gh/callback-io/allogo@main/public/logos/anthropic/icon.svg",
  DESAFIO: "DL",
};

export default function CertificationsPage() {
  const { locale } = usePreferences();
  const [activePdf, setActivePdf] = useState<{ link: string; name: string } | null>(null);

  const handleViewPdf = (link: string, name: string) => {
    setActivePdf({ link, name });
  };

  const sections = [
    {
      titleEn: "Backend & API Development",
      titleEs: "Backend y Desarrollo de APIs",
      items: [
        {
          badge: "PZ",
          nameEn: "Backend with Node.js",
          nameEs: "Backend con Node.js",
          org: "Platzi",
          date: "2025",
          logo: LOGOS.PLATZI,
          descEn: "Server-side JavaScript, API design, request handling, and backend foundations with Node.js.",
          descEs: "JavaScript del lado del servidor, diseño de APIs, manejo de peticiones y fundamentos backend con Node.js.",
          link: "/assets/certificaciones/diploma-backend-nodejs.pdf",
        },
        {
          badge: "PZ",
          nameEn: "Java Spring",
          nameEs: "Java Spring",
          org: "Platzi",
          date: "2025",
          logo: LOGOS.PLATZI,
          descEn: "Java backend development with Spring, focused on structured services and enterprise application patterns.",
          descEs: "Desarrollo backend en Java con Spring, enfocado en servicios estructurados y patrones de aplicaciones empresariales.",
          link: "/assets/certificaciones/diploma-java-spring.pdf",
        },
        {
          badge: "PZ",
          nameEn: "NestJS Fundamentals",
          nameEs: "Fundamentos de NestJS",
          org: "Platzi",
          date: "2025",
          logo: LOGOS.PLATZI,
          descEn: "Node.js backend architecture with controllers, providers, modules, dependency injection, and TypeScript.",
          descEs: "Arquitectura backend en Node.js con controladores, providers, modulos, inyeccion de dependencias y TypeScript.",
          link: "/assets/certificaciones/diploma-nestjs.pdf",
        },
        {
          badge: "PZ",
          nameEn: "Modular NestJS",
          nameEs: "NestJS Modular",
          org: "Platzi",
          date: "2025",
          logo: LOGOS.PLATZI,
          descEn: "Modular API design in NestJS for scalable backends with cleaner boundaries and maintainable services.",
          descEs: "Diseño modular de APIs en NestJS para backends escalables con limites claros y servicios mantenibles.",
          link: "/assets/certificaciones/diploma-nestjs-modular.pdf",
        },
        {
          badge: "ADA",
          nameEn: "Spring Boot Advanced",
          nameEs: "Spring Boot Avanzado",
          org: "ADA",
          date: "2025",
          descEn: "Advanced Spring Boot features, microservice development, dependency injection, and production-ready backend patterns.",
          descEs: "Características avanzadas de Spring Boot, desarrollo de microservicios, inyección de dependencias y patrones backend listos para producción.",
          link: "/assets/certificaciones/springboot-ada.jpg",
        },
        {
          badge: "PZ",
          nameEn: "Authentication with Passport",
          nameEs: "Autenticacion con Passport",
          org: "Platzi",
          date: "2025",
          logo: LOGOS.PLATZI,
          descEn: "Authentication strategies, session/token flows, and secure user access patterns with Passport.",
          descEs: "Estrategias de autenticacion, flujos de sesion/token y patrones seguros de acceso de usuarios con Passport.",
          link: "/assets/certificaciones/diploma-passport.pdf",
        },
      ],
    },
    {
      titleEn: "Frontend & TypeScript",
      titleEs: "Frontend y TypeScript",
      items: [
        {
          badge: "PZ",
          nameEn: "React.js",
          nameEs: "React.js",
          org: "Platzi",
          date: "2025",
          logo: LOGOS.PLATZI,
          descEn: "Component-driven UI development with React, state management basics, and modern frontend workflows.",
          descEs: "Desarrollo de interfaces por componentes con React, fundamentos de estado y flujos modernos de frontend.",
          link: "/assets/certificaciones/diploma-react.pdf",
        },
        {
          badge: "PZ",
          nameEn: "React with Vite and Tailwind CSS",
          nameEs: "React con Vite y Tailwind CSS",
          org: "Platzi",
          date: "2025",
          logo: LOGOS.PLATZI,
          descEn: "Fast React application setup with Vite and utility-first interface styling using Tailwind CSS.",
          descEs: "Configuracion rapida de aplicaciones React con Vite y estilos de interfaz utility-first usando Tailwind CSS.",
          link: "/assets/certificaciones/diploma-react-vite-tailwindcss.pdf",
        },
        {
          badge: "PZ",
          nameEn: "TypeScript",
          nameEs: "TypeScript",
          org: "Platzi",
          date: "2025",
          logo: LOGOS.PLATZI,
          descEn: "Static typing, interfaces, generics, and safer JavaScript patterns for scalable applications.",
          descEs: "Tipado estatico, interfaces, genericos y patrones de JavaScript mas seguros para aplicaciones escalables.",
          link: "/assets/certificaciones/diploma-typescript.pdf",
        },
        {
          badge: "PZ",
          nameEn: "Git & GitHub Professional",
          nameEs: "Profesional de Git y GitHub",
          org: "Platzi",
          date: "2025",
          logo: LOGOS.PLATZI,
          descEn: "Version control, branching, remote repositories, and collaborative development workflows with GitHub.",
          descEs: "Control de versiones, ramas, repositorios remotos y flujos de desarrollo colaborativo con GitHub.",
          link: "/assets/certificaciones/diploma-git-github.pdf",
        },
      ],
    },
    {
      titleEn: "Programming Foundations & Data",
      titleEs: "Fundamentos de Programacion y Datos",
      items: [
        {
          badge: "PZ",
          nameEn: "C++",
          nameEs: "C++",
          org: "Platzi",
          date: "2025",
          logo: LOGOS.PLATZI,
          descEn: "Programming fundamentals in C++, including syntax, control flow, functions, and core language concepts.",
          descEs: "Fundamentos de programacion en C++, incluyendo sintaxis, flujo de control, funciones y conceptos base del lenguaje.",
          link: "/assets/certificaciones/diploma-c-plus-plus.pdf",
        },
        {
          badge: "PZ",
          nameEn: "Object-Oriented Programming with C++",
          nameEs: "Programacion Orientada a Objetos con C++",
          org: "Platzi",
          date: "2025",
          logo: LOGOS.PLATZI,
          descEn: "Classes, objects, encapsulation, inheritance, and object-oriented design principles in C++.",
          descEs: "Clases, objetos, encapsulamiento, herencia y principios de diseno orientado a objetos en C++.",
          link: "/assets/certificaciones/diploma-c-plus-plus-poo.pdf",
        },
        {
          badge: "SQL",
          nameEn: "Interactive SQL",
          nameEs: "SQL Interactivo",
          org: "Desafio Latam",
          date: "2024",
          descEn: "Interactive SQL course covering query fundamentals, relational data handling, and database practice.",
          descEs: "Curso interactivo de SQL sobre fundamentos de consultas, manejo de datos relacionales y practica con bases de datos.",
          link: "/assets/certificaciones/Certificado SQL Interactivo.png",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-[28px]">
      <header className="flex flex-col gap-[14px] mb-4 py-1 px-2">
        <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-fg-mute font-mono">
          <span className="w-[6px] h-[6px] rounded-full bg-blue-accent shadow-[0_0_10px_var(--blue)]" />
          {locale === "en" ? "Certifications · Professional Growth" : "Certificaciones · Crecimiento Profesional"}
        </div>
        <h1 className="text-[clamp(38px,4.4vw,56px)] font-semibold tracking-[-0.035em] leading-none m-0">
          {locale === "en" ? (
            <>Skills & <span className="grad-text">Certifications.</span></>
          ) : (
            <>Habilidades y <span className="grad-text">Certificaciones.</span></>
          )}
        </h1>
        <p className="text-fg-dim text-[15px] leading-[1.55] max-w-[560px] m-0">
          {locale === "en" 
            ? "A focused record of my growth in backend APIs, frontend development, TypeScript, programming foundations, and relational databases."
            : "Una muestra enfocada de mi crecimiento en APIs backend, desarrollo frontend, TypeScript, fundamentos de programacion y bases de datos relacionales."}
        </p>
      </header>

      <main className="flex flex-col gap-[36px]">
        {sections.map((section) => (
          <section key={section.titleEn} className="flex flex-col gap-6">
            <div className="flex items-center gap-4 px-2">
              <h2 className="text-[20px] font-semibold text-fg">
                {locale === "en" ? section.titleEn : section.titleEs}
              </h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
              {section.items.map((cert) => (
                <CertificationCard
                  key={cert.link}
                  onViewPdf={handleViewPdf}
                  badge={cert.badge}
                  name={locale === "en" ? cert.nameEn : cert.nameEs}
                  org={cert.org}
                  date={cert.date}
                  logo={cert.logo}
                  desc={locale === "en" ? cert.descEn : cert.descEs}
                  link={cert.link}
                />
              ))}
            </div>
          </section>
        ))}
      </main>

      <Footer
        leftText="© 2026 — Carlos Altán"
        midText={locale === "en" ? "Constant learning · Continuous improvement" : "Aprendizaje constante · Mejora continua"}
        rightText={locale === "en" ? "Updated certificates" : "Certificados actualizados"}
      />

      <PdfModal
        isOpen={!!activePdf}
        link={activePdf?.link ?? ""}
        name={activePdf?.name ?? ""}
        onClose={() => setActivePdf(null)}
      />
    </div>
  );
}

"use client";

import BentoCard from "@/components/BentoCard";
import Footer from "@/components/Footer";
import { usePreferences } from "@/components/PreferencesProvider";
import { clsx } from "clsx";

const categories = [
  {
    titleEn: "Programming Languages",
    titleEs: "Lenguajes de Programación",
    items: [
      { label: "TypeScript", color: "#3178c6" },
      { label: "JavaScript", color: "#f7df1e" },
      { label: "Python", color: "#3776ab" },
      { label: "Java", color: "#openjdk" },
      { label: "HTML5", color: "#e34f26" },
      { label: "CSS3", color: "#1572b6" },
    ],
  },
  {
    titleEn: "Frameworks & Libraries",
    titleEs: "Frameworks y Librerías",
    items: [
      { label: "Next.js", color: "#ffffff" },
      { label: "React", color: "#61dafb" },
      { label: "Spring Boot", color: "#6db33f" },
      { label: "Django", color: "#092e20" },
      { label: "Node.js", color: "#68a063" },
      { label: "Express.js", color: "#828282" },
      { label: "Tailwind CSS", color: "#38bdf8" },
    ],
  },
  {
    titleEn: "Databases",
    titleEs: "Bases de Datos",
    items: [
      { label: "PostgreSQL", color: "#336791" },
      { label: "PostGIS", color: "#336791" },
      { label: "DuckDB", color: "#fff000" },
      { label: "MongoDB", color: "#47a248" },
      { label: "Neo4j", color: "#c72e49" },
      { label: "Mysql", color: "#c72e49" },
    ],
  },
  {
    titleEn: "DevOps & Cloud",
    titleEs: "DevOps y Cloud",
    items: [
      { label: "Docker", color: "#2496ed" },
      { label: "GitHub Actions", color: "#2088ff" },
      { label: "Vercel", color: "#ffffff" },
      { label: "Netlify", color: "#00c7b7" },
      { label: "AWS", color: "#ff9900" },
      { label: "Azure", color: "#0078d4" },
    ],
  },
  {
    titleEn: "Developer Tools",
    titleEs: "Herramientas de Desarrollo",
    items: [
      { label: "Git", color: "#f05032" },
      { label: "Postman", color: "#ff6c37" },
      { label: "Notion", color: "#ffffff" },
      { label: "Cloudflare", color: "#f38020" },
      { label: "VS Code", color: "#007acc" },
    ],
  },
];

function getTechIcon(label: string): string {
  const mapping: { [key: string]: string } = {
    "TypeScript": "typescript",
    "JavaScript": "javascript",
    "Python": "python",
    "Go": "go",
    "Java": "openjdk",
    "HTML5": "html5",
    "CSS3": "/assets/images/css.png",
    "Next.js": "nextdotjs/white",
    "React": "react",
    "NestJS": "nestjs",
    "Spring Boot": "springboot",
    "Django": "django",
    "Node.js": "nodedotjs",
    "Express.js": "express/white",
    "Flask": "flask/white",
    "Tailwind CSS": "tailwindcss",
    "Prisma": "prisma/white",
    "PostgreSQL": "postgresql",
    "PostGIS": "postgresql",
    "DuckDB": "duckdb",
    "MongoDB": "mongodb",
    "MinIO": "minio",
    "MySQL": "mysql",
    "Redis": "redis",
    "Neo4j": "neo4j",
    "Docker": "docker",
    "Kubernetes": "kubernetes",
    "Azure": "/assets/images/azure.png",
    "GitHub Actions": "githubactions",
    "VMware": "vmware/white",
    "Vercel": "vercel/white",
    "Netlify": "netlify",
    "Supabase": "supabase",
    "AWS": "/assets/images/aws.png",
    "GHCR (CI/CD)": "github/white",
    "Firebase": "firebase",
    "Git": "git",
    "Postman": "postman",
    "Figma": "figma",
    "Notion": "notion/white",
    "Neovim": "neovim",
    "Cloudflare": "cloudflare",
    "VS Code": "/assets/images/vscode.png"
  };
  const slug = mapping[label] || label.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (slug.startsWith("/")) {
    return slug;
  }
  return `https://cdn.simpleicons.org/${slug}`;
}

interface TechTileProps {
  label: string;
  icon: string;
  className?: string;
}

function TechTile({ label, icon, className }: TechTileProps) {
  return (
    <div className={clsx(
      "flex flex-col items-center justify-center p-3 rounded-xl border border-[var(--line)] bg-white/[0.015] hover:border-white/20 hover:bg-white/[0.05] hover:scale-[1.04] hover:shadow-[0_8px_20px_-8px_rgba(0,0,0,0.5)] transition-all duration-200 gap-2 min-h-[90px] w-full group",
      className
    )}>
      <img
        src={icon}
        alt={label}
        className="w-7.5 h-7.5 object-contain shrink-0 transition-all duration-200 brightness-[0.85] group-hover:brightness-100 group-hover:scale-[1.06]"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
      <span className="text-[11px] sm:text-[11.5px] text-fg-dim font-mono font-medium tracking-tight text-center leading-snug max-w-full px-0.5 group-hover:text-fg break-words whitespace-normal">
        {label}
      </span>
    </div>
  );
}

export default function StackPage() {
  const { locale } = usePreferences();

  // Grid spans: 
  // Programming Languages & Frameworks span 3 columns each (Total 6 in row 1).
  // Databases (spans 2), DevOps (spans 3), Tools (spans 1) (Total 6 in row 2).
  // Currently learning spans 6 columns (Total 6 in row 3).
  const spans = [
    "col-span-1 md:col-span-6", // Languages
    "col-span-1 md:col-span-4", // Frameworks
    "col-span-1 md:col-span-2", // Databases
    "col-span-1 md:col-span-3", // DevOps
    "col-span-1 md:col-span-3", // Tools
  ];

  const whyStackItems = locale === "en"
    ? [
      {
        label: "Next.js for data-driven products",
        detail:
          "I use Next.js in projects like EarthWay Frontend, Weather Way, GuateVigila, and this portfolio because it gives me React plus routing, server-side data access, API routes, and smooth deployment on Vercel or Netlify.",
      },
      {
        label: "Spring Boot when the domain needs structure",
        detail:
          "EarthWay's backend uses Java and Spring Boot for authentication, roles, CRUD modules, reports, certificates, and geolocation. It is a good fit when the backend needs clear layers and predictable business rules.",
      },
      {
        label: "PostgreSQL, PostGIS, and DuckDB for real data",
        detail:
          "EarthWay uses PostgreSQL/PostGIS for geospatial features, while GuateVigila uses DuckDB to query Guatecompras OCDS CSV files directly. I choose the database around the shape of the data, not just habit.",
      },
      {
        label: "Python and Django for service backends",
        detail:
          "Trashify API uses Django REST Framework with PostgreSQL and MinIO for an image-based waste classification flow. Python works well there because the backend can grow toward data processing and ML-style workflows.",
      },
      {
        label: "Deployment and collaboration tools that fit the project",
        detail:
          "I use Vercel and Netlify for fast frontend delivery, Docker where services need reproducible local setup, and GitHub as the source of truth for collaborative projects like WaterWay, GuateVigila, and Weather Way.",
      },
    ]
    : [
      {
        label: "Next.js para productos con datos reales",
        detail:
          "Uso Next.js en proyectos como EarthWay Frontend, Weather Way, GuateVigila y este portafolio porque combina React con rutas, acceso a datos del lado del servidor, rutas API y despliegues fluidos en Vercel o Netlify.",
      },
      {
        label: "Spring Boot cuando el dominio necesita estructura",
        detail:
          "El backend de EarthWay usa Java y Spring Boot para autenticacion, roles, modulos CRUD, reportes, certificados y geolocalizacion. Es una buena eleccion cuando el backend necesita capas claras y reglas de negocio predecibles.",
      },
      {
        label: "PostgreSQL, PostGIS y DuckDB para datos reales",
        detail:
          "EarthWay usa PostgreSQL/PostGIS para funciones geoespaciales, mientras GuateVigila usa DuckDB para consultar archivos CSV OCDS de Guatecompras directamente. Elijo la base de datos segun la forma de los datos, no por costumbre.",
      },
      {
        label: "Python y Django para servicios backend",
        detail:
          "Trashify API usa Django REST Framework con PostgreSQL y MinIO para un flujo de clasificacion de residuos basado en imagenes. Python funciona bien ahi porque el backend puede crecer hacia procesamiento de datos y flujos tipo ML.",
      },
      {
        label: "Herramientas de despliegue y colaboracion segun el proyecto",
        detail:
          "Uso Vercel y Netlify para entregar frontends rapidamente, Docker cuando los servicios necesitan un entorno local reproducible, y GitHub como fuente de verdad para proyectos colaborativos como WaterWay, GuateVigila y Weather Way.",
      },
    ];

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-[14px] mb-4 py-1 px-2">
        <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-fg-mute font-mono">
          <span className="w-[6px] h-[6px] rounded-full bg-blue-accent shadow-[0_0_10px_var(--blue)]" />
          {locale === "en" ? "Tech Stack · Tools of the Trade" : "Stack Técnico · Mis Herramientas"}
        </div>
        <h1 className="text-[clamp(38px,4.4vw,56px)] font-semibold tracking-[-0.035em] leading-none m-0">
          {locale === "en" ? "My " : "Mi "}
          <span className="grad-text">{locale === "en" ? "Stack." : "stack."}</span>
        </h1>
        <p className="text-fg-dim text-[15px] leading-[1.55] max-w-[600px] m-0">
          {locale === "en"
            ? "A comprehensive overview of the programming languages, framework ecosystems, database systems, and DevOps/cloud tools that I use to design and build scalable products."
            : "Una vista detallada de los lenguajes de programación, frameworks, bases de datos y herramientas de DevOps y nube que utilizo para construir soluciones robustas."}
        </p>
      </header>

      {/* Why this stack reasoning card */}
      <BentoCard className="col-span-1 !p-[22px] sm:!p-[28px] flex flex-col gap-4">
        <div className="text-[12px] font-semibold text-fg uppercase tracking-[0.12em] font-mono border-b border-white/5 pb-2">
          {locale === "en" ? "Why this stack" : "Por qué este stack"}
        </div>
        <ol className="list-none p-0 m-0 flex flex-col gap-4">
          {whyStackItems.map((item, i) => (
            <li key={i} className="flex flex-col gap-[3px]">
              <span className="text-[12px] font-mono font-semibold text-fg tracking-tight">
                {item.label}
              </span>
              <span className="text-[13.5px] text-fg-dim leading-[1.55]">
                {item.detail}
              </span>
            </li>
          ))}
        </ol>
      </BentoCard>

      {/* Categories Grid - Symmetrical 3-Row Sized Grid */}
      <main className="grid grid-cols-1 md:grid-cols-6 gap-6">
        {categories.map((cat, idx) => (
          <BentoCard key={idx} className={`${spans[idx]} !p-[22px] sm:!p-[28px] flex flex-col gap-4`}>
            <div className="text-[12px] font-semibold text-fg uppercase tracking-[0.12em] font-mono border-b border-white/5 pb-2">
              {locale === "en" ? cat.titleEn : cat.titleEs}
            </div>
            <div className={clsx(
              "grid gap-2.5 my-auto",
              idx === 0 && "grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5", // Languages
              idx === 1 && "grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5", // Frameworks
              idx === 2 && "grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-2", // Databases
              idx === 3 && "grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-3", // DevOps
              idx === 4 && "grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-2"  // Tools
            )}>
              {cat.items.map((item, itemIdx) => (
                <TechTile
                  key={item.label}
                  label={item.label}
                  icon={getTechIcon(item.label)}
                  className={clsx(
                    idx === 2 && itemIdx === 4 && "col-span-2 md:col-span-2 lg:col-span-2" // Neo4j stretches in Databases grid
                  )}
                />
              ))}
            </div>
          </BentoCard>
        ))}

        {/* Currently Learning Card - Stretching full width 
        <BentoCard className="col-span-1 md:col-span-6 !p-[22px] sm:!p-[28px] flex flex-col gap-4 bg-[var(--grad-soft)] border border-[rgba(167,139,250,0.2)]">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-[24px] h-[24px] inline-flex items-center justify-center bg-[var(--grad)] rounded-[6px] text-white">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
            </span>
              <span className="text-[12px] font-semibold text-fg uppercase tracking-[0.12em] font-mono">
                {locale === "en" ? "Currently learning & focusing" : "Aprendiendo y enfocándome ahora"}
              </span>
          </div>
          <ul className="list-none p-0 m-0 flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
            <li className="flex items-start gap-2.5 text-[13.5px] text-fg-dim before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-purple-accent before:shadow-[0_0_6px_var(--color-purple-accent)] before:mt-[7px] before:shrink-0">
              <span>Vue.js & ecosystem</span>
            </li>
            <li className="flex items-start gap-2.5 text-[13.5px] text-fg-dim before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-purple-accent before:shadow-[0_0_6px_var(--color-purple-accent)] before:mt-[7px] before:shrink-0">
              <span>{locale === "en" ? "Advanced cloud-native architectures" : "Arquitecturas cloud-native avanzadas"}</span>
            </li>
            <li className="flex items-start gap-2.5 text-[13.5px] text-fg-dim before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-purple-accent before:shadow-[0_0_6px_var(--color-purple-accent)] before:mt-[7px] before:shrink-0">
              <span>{locale === "en" ? "Scalable system design patterns" : "Patrones de diseño de sistemas escalables"}</span>
            </li>
            <li className="flex items-start gap-2.5 text-[13.5px] text-fg-dim before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-purple-accent before:shadow-[0_0_6px_var(--color-purple-accent)] before:mt-[7px] before:shrink-0">
              <span>{locale === "en" ? "Kubernetes operator development" : "Desarrollo de operadores de Kubernetes"}</span>
            </li>
          </ul>
        </BentoCard>
        */}
      </main>

      <Footer
        leftText="© 2026 — Carlos Altán"
        midText={locale === "en" ? "Tech stack details page" : "Página detallada de tecnologías"}
        rightText={locale === "en" ? "Always evolving" : "En constante evolución"}
      />
    </div>
  );
}

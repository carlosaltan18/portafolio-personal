"use client";

import Hero from "@/components/Hero";
import ProfileCard from "@/components/ProfileCard";
import TechStack from "@/components/TechStack";
import FeaturedProject from "@/components/FeaturedProject";
import Experience from "@/components/Experience";
import ProjectPreview from "@/components/ProjectPreview";
import CertificationsPreview from "@/components/CertificationsPreview";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { usePreferences } from "@/components/PreferencesProvider";

export default function Home() {
  const { locale } = usePreferences();

  return (
    <main className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-[18px]">
      {/* ROW 1 */}
      <Hero />
      <ProfileCard />

      {/* ROW 2 */}
      <TechStack />
      <FeaturedProject />

      {/* ROW 3 */}
      <Experience />
      
      {/* WaterWay+ Project Preview */}
      <ProjectPreview
        title="WaterWay+"
        meta={locale === "en" ? "Project - 2024" : "Proyecto - 2024"}
        desc={
          locale === "en"
            ? "Platform for river protection using maps and environmental data. Visualizes pollution patterns and helps communities coordinate conservation efforts."
            : "Plataforma para protección de ríos usando mapas y datos ambientales. Visualiza patrones de contaminación y ayuda a comunidades a actuar."
        }
        tags={["Maps", "React Leaflet", "Environmental API"]}
        badge={locale === "en" ? "Hackathon Winner" : "Ganador hackathon"}
        repoLink="https://github.com/asanabria-2021067/waterway-backend"
        frontendRepoLink="https://github.com/kinalitos/waterway-frontend"
        demoLink="https://water-way.netlify.app/"
        className="col-span-1 md:col-span-3 lg:col-span-4"
        art={
          <img
            src="/assets/images/waterway.png"
            alt="WaterWay+"
            className="w-full h-full object-cover"
          />
        }
      />

      {/* Weather Way Project Preview */}
      <ProjectPreview
        title="Weather Way"
        meta={locale === "en" ? "NASA Space Apps" : "NASA Space Apps"}
        desc={
          locale === "en"
            ? "NASA-powered climate analysis platform focused on vulnerable communities, agricultural impact, satellite layers, and professional report generation."
            : "Plataforma de análisis climático con datos de NASA enfocada en comunidades vulnerables, impacto agrícola, capas satelitales y generación de reportes profesionales."
        }
        tags={["TypeScript", "NASA", "Climate", "Maps", "PDF Reports"]}
        badge={locale === "en" ? "NASA Space Apps" : "NASA Space Apps"}
        bullets={
          locale === "en"
            ? [
                "Climate justice dashboard for vulnerable community analysis",
                "Agricultural impact and food security risk assessment",
                "Integrates NASA satellite data layers and PDF reporting",
              ]
            : [
                "Dashboard de justicia climática para analizar comunidades vulnerables",
                "Evaluación de impacto agrícola y riesgo de seguridad alimentaria",
                "Integra capas satelitales de NASA y reportes PDF",
              ]
        }
        repoLink="https://github.com/kinalitos/parade-weather"
        demoLink="https://weather-way-gt.netlify.app"
        className="col-span-1 md:col-span-6 lg:col-span-4"
        art={
          <img
            src="/assets/images/weatherway.png"
            alt="Weather Way"
            className="w-full h-full object-cover"
          />
        }
      />

      {/* ROW 4 */}
      <CertificationsPreview className="col-span-1 md:col-span-3 lg:col-span-4" />
      <CTA className="col-span-1 md:col-span-3 lg:col-span-8" />

      <div className="col-span-1 md:col-span-6 lg:col-span-12 mt-7">
        <Footer />
      </div>
    </main>
  );
}

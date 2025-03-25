import LinkButton from "@/src/components/common/link-button";
import FeatureItem from "@/src/components/common/feature-item";
import BackgroundCard from "@/src/components/common/background-card";
import ContentImageGrid from "@/src/components/common/content-image-grid";
import { features } from "@/src/data/become-a-host";
import Image from "next/image";

export default function BecomeHostSection() {
  return (
    <section
      id="become-host"
      aria-labelledby="become-host-heading"
      className="text-secondary mb-12 sm:mb-16 md:mb-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Encabezado de sección con markup semántico mejorado */}
        <h2
          id="become-host-heading"
          className="mb-12 flex flex-col items-center justify-center text-3xl font-bold sm:flex-row sm:gap-4 sm:text-4xl md:text-6xl"
        >
          <span className="pb-1">¡Poné tu</span>
          <div className="flex items-center">
            <Image
              src="/ps-logo-text-flex.svg"
              alt="PartySpot Logo"
              width={400}
              height={400}
              className="h-auto w-52 sm:w-64 md:w-72"
              priority
            />
            <span className="pb-2">!</span>
          </div>
        </h2>

        {/* Contenedor principal - Usando componentes reutilizables */}
        <BackgroundCard>
          <ContentImageGrid
            imageSrc="/images/become-a-host.webp"
            imageAlt="Persona satisfecha generando ingresos como anfitrión en PartySpot"
            imagePosition="right"
          >
            <div className="flex flex-col justify-center space-y-4 text-center">
              <div className="flex flex-col justify-center text-left">
                <h3 className="text-2xl font-bold md:text-3xl">
                  Tu espacio, tu fuente de ingresos
                </h3>
                <p className="text-lg text-gray-600">
                  Publicá tu espacio hoy y conseguí ventas todos los meses
                </p>
              </div>

              <ul
                className="space-y-4 text-left"
                aria-label="Beneficios de ser anfitrión"
              >
                {features.map((feature) => (
                  <li key={feature.title}>
                    <FeatureItem
                      title={feature.title}
                      description={feature.description}
                      icon={feature.icon}
                    />
                  </li>
                ))}
              </ul>

              <LinkButton
                href="/become-host"
                size="md"
                aria-label="Comenzar a publicar mi espacio como anfitrión"
              >
                Publicar mi espacio
              </LinkButton>
              <p className="text-sm text-gray-500">
                Sin compromisos a largo plazo. Comprobá los resultados{" "}
                <span className="font-bold text-pink-600">
                  en menos de 15 días
                </span>
                .
              </p>
            </div>
          </ContentImageGrid>
        </BackgroundCard>

        {/* Testimonios o información adicional con markup mejorado */}
        <div className="mt-16 text-center">
          <p className="text-lg font-medium text-gray-900">
            Más de{" "}
            <span className="font-bold text-pink-600">
              50 hosts en Argentina
            </span>{" "}
            ya están generando ingresos con sus espacios
          </p>
        </div>
      </div>
    </section>
  );
}

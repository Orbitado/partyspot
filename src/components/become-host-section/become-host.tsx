import LinkButton from "@/src/components/common/link-button";
import FeatureItem from "@/src/components/common/feature-item";
import BackgroundCard from "@/src/components/common/background-card";
import ContentImageGrid from "@/src/components/common/content-image-grid";
import { features } from "@/src/data/become-a-host";

export default function BecomeHostSection() {
  return (
    <section className="text-secondary mb-12 sm:mb-16 md:mb-20">
      {/* Elementos decorativos */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Encabezado de sección */}
        <h2 className="mb-12 flex flex-col items-center justify-center text-3xl font-bold sm:flex-row sm:gap-4 sm:text-4xl md:text-6xl">
          ¡Poné tu <span className="text-pink-600">Party Spot</span>!
        </h2>

        {/* Contenedor principal - Usando componentes reutilizables */}
        <BackgroundCard>
          <ContentImageGrid
            imageSrc="/images/become-a-host.webp"
            imageAlt="Conviértete en anfitrión"
            imagePosition="right"
          >
            <div>
              <h3 className="text-2xl font-bold md:text-3xl">
                Tu espacio, tu fuente de ingresos
              </h3>
              <p className="mt-4 text-lg text-gray-600">
                ¡Empieza hoy y consigue ventas todos los meses!
              </p>
            </div>

            {features.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}

            <div className="pt-4">
              <LinkButton href="/become-host" size="md">
                Quiero Convertirme en Host
              </LinkButton>
              <p className="mt-4 text-sm text-gray-500">
                Sin compromisos a largo plazo. Comprobá los resultados.
              </p>
            </div>
          </ContentImageGrid>
        </BackgroundCard>

        {/* Testimonios o información adicional */}
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

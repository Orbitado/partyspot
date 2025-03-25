import Image from "next/image";
import LinkButton from "@/src/components/common/link-button";
import FeatureItem from "@/src/components/common/feature-item";
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

        {/* Contenedor principal */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-xl transition-all hover:shadow-2xl">
          {/* Diseño en cuadrícula flexible */}
          <div className="grid grid-rows-[1fr_1/4] lg:grid-cols-4">
            {/* Contenido - ocupa 7 columnas en pantallas grandes */}
            <div className="flex flex-col justify-center p-8 md:p-12 lg:col-span-2">
              <div className="max-w-xl space-y-8">
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
              </div>
            </div>

            {/* Imagen - ocupa 2 columnas en pantallas grandes */}
            <div className="relative lg:col-span-2">
              <div className="h-full min-h-[400px]">
                <Image
                  src="/images/become-a-host.webp"
                  alt="Conviértete en anfitrión"
                  fill
                  className="h-full w-full object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  priority
                />
                <div className="from-primary/40 lg:to-primary/40 absolute inset-0 bg-gradient-to-b to-transparent lg:from-transparent"></div>
              </div>
            </div>
          </div>
        </div>

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

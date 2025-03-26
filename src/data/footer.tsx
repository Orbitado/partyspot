import { Facebook, Instagram, Twitter } from "lucide-react";

interface SocialLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

interface FooterSection {
  title: string;
  links: {
    href: string;
    label: string;
  }[];
}

export const socialLinks: SocialLink[] = [
  {
    href: "https://facebook.com/partyspot",
    label: "Facebook",
    icon: (
      <Facebook className="h-5 w-5 text-blue-600 transition-colors hover:text-blue-800" />
    )
  },
  {
    href: "https://instagram.com/partyspot",
    label: "Instagram",
    icon: (
      <Instagram className="h-5 w-5 text-pink-600 transition-colors hover:text-pink-800" />
    )
  },
  {
    href: "https://twitter.com/partyspot",
    label: "Twitter",
    icon: (
      <Twitter className="h-5 w-5 text-blue-400 transition-colors hover:text-blue-600" />
    )
  }
];

export const footerSections: FooterSection[] = [
  {
    title: "Compañía",
    links: [
      { href: "/sobre-nosotros", label: "Sobre Nosotros" },
      { href: "/anuncia", label: "Anuncia tu espacio" },
      { href: "/preguntas-frecuentes", label: "Preguntas Frecuentes" },
      { href: "/directrices", label: "Directrices" },
      { href: "/recursos", label: "Centro de Recursos" },
      { href: "/seguridad", label: "Confianza y Seguridad" }
    ]
  },
  {
    title: "Actividades",
    links: [
      { href: "/actividades/casamientos", label: "Casamientos/Bodas" },
      { href: "/actividades/fiesta-15", label: "Fiesta de 15" },
      { href: "/actividades/cumpleanos", label: "Cumpleaños" },
      {
        href: "/actividades/graduacion",
        label: "Fiesta de graduación/recibida"
      },
      { href: "/actividades/despedida", label: "Despedida de soltero/a" },
      { href: "/actividades/ver-mas", label: "Ver más..." }
    ]
  },
  {
    title: "Spots",
    links: [
      { href: "/spots/salon-fiestas", label: "Salón de fiestas" },
      { href: "/spots/quincho", label: "Quincho" },
      { href: "/spots/jardin", label: "Jardín/Aire libre" },
      { href: "/spots/rooftop", label: "Rooftop/Terraza" },
      { href: "/spots/house-party", label: "House Party" },
      { href: "/spots/ver-mas", label: "Ver más..." }
    ]
  },
  {
    title: "Ciudadades",
    links: [
      {
        href: "/ciudades/san-miguel-tucuman",
        label: "San Miguel de Tucumán"
      },
      { href: "/ciudades/yerba-buena", label: "Yerba Buena" },
      { href: "/ciudades/tafi-viejo", label: "Tafí Viejo" },
      { href: "/ciudades/tafi-valle", label: "Tafí del Valle" },
      { href: "/ciudades/cafayate", label: "Cafayate" },
      { href: "/ciudades/ver-mas", label: "más..." }
    ]
  }
];

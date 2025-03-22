import { Building2, DollarSign, ShieldCheck } from "lucide-react";

export interface FeatureItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const featureItems: FeatureItemProps[] = [
  {
    title: "Conexión sin complicaciones",
    description:
      "Ponemos en contacto a anfitriones y organizadores de eventos de manera sencilla y eficiente.",
    icon: <Building2 className="text-primary h-7 w-7" />
  },
  {
    title: "Presupuestos simples",
    description:
      "Con tarifas por hora claras y sin cargos sorpresa, sabrás exactamente por qué estás pagando desde el principio.",
    icon: <DollarSign className="text-primary h-7 w-7" />
  },
  {
    title: "Pagos seguros y garantía total",
    description:
      "Ofrecemos transacciones seguras y garantizamos la realización de tu evento; si no, te devolvemos el dinero.",
    icon: <ShieldCheck className="text-primary h-7 w-7" />
  }
];

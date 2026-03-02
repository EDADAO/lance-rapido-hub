import { Zap, ShieldCheck, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Zap,
    title: "Velocidade Máxima",
    description:
      "Leilões rápidos e dinâmicos. Arremate seu veículo em minutos com nossa plataforma otimizada para alta performance.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Transparente",
    description:
      "Todos os veículos contam com laudos técnicos detalhados e histórico completo. Sua compra, 100% segura.",
  },
  {
    icon: FileCheck,
    title: "Zero Burocracia",
    description:
      "Processo 100% digital. Do lance à documentação, tudo online, sem filas e sem complicação.",
  },
];

const TrustSection = () => {
  return (
    <section className="py-16 bg-brand-gray-light">
      <div className="container">
        <h2 className="text-2xl md:text-4xl font-extrabold text-foreground text-center mb-12">
          Por que escolher o <span className="text-primary">Lance Rápido</span>?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((v) => (
            <div key={v.title} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-5">
                <v.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-brand-red-dark font-bold text-base px-10">
            Cadastre-se Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

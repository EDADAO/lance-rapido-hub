import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-secondary/85" />
      <div className="relative container py-16 md:py-24">
        {/* Hero text */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-tight mb-4">
            Acelere suas oportunidades.
            <br />
            <span className="text-primary">O seu próximo carro está aqui!</span>
          </h1>
          <p className="animate-count-up text-2xl md:text-3xl font-bold text-brand-gold mt-6">
            + de 12.659 veículos disponíveis
          </p>
        </div>

        {/* Hero cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <HeroCard
            title="Venda Ágil"
            features={[
              "Disponível 24h por dia, 7 dias por semana",
              "Laudos técnicos detalhados",
              "Pagamento seguro e rápido",
              "Suporte dedicado ao comprador",
            ]}
          />
          <HeroCard
            title="Leilões Lance Rápido"
            features={[
              "Mais de 70 leilões mensais",
              "Veículos periciados e documentados",
              "Arremates em tempo real",
              "Cobertura nacional completa",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

const HeroCard = ({ title, features }: { title: string; features: string[] }) => (
  <div className="bg-card rounded-lg p-6 md:p-8 shadow-2xl animate-slide-in">
    <h3 className="text-xl md:text-2xl font-extrabold text-primary mb-4">{title}</h3>
    <ul className="space-y-3 mb-6">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-2 text-sm text-card-foreground">
          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
    <div className="flex gap-3">
      <Button className="flex-1 bg-primary text-primary-foreground hover:bg-brand-red-dark font-bold">
        Comprar
      </Button>
      <Button variant="outline" className="flex-1 border-foreground text-foreground hover:bg-secondary hover:text-secondary-foreground font-bold">
        Vender
      </Button>
    </div>
  </div>
);

export default HeroSection;

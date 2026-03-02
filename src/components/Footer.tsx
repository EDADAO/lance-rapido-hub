import { Gavel } from "lucide-react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const footerLinks = {
  "Sobre a Empresa": ["Quem Somos", "Nossa História", "Trabalhe Conosco", "Blog"],
  Leilões: ["Próximos Leilões", "Leilões Encerrados", "Como Participar", "Regulamento"],
  Localizações: ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba", "Brasília"],
  Suporte: ["Central de Ajuda", "Fale Conosco", "FAQ", "Ouvidoria"],
};

const partners = [
  "Porto Seguro",
  "Bradesco Seguros",
  "SulAmérica",
  "Tokio Marine",
  "Itaú",
  "Santander",
  "Banco do Brasil",
  "Mapfre",
];

const Footer = () => {
  return (
    <footer>
      {/* Partners strip */}
      <div className="bg-card border-t border-border py-6">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {partners.map((p) => (
              <span
                key={p}
                className="text-xs font-semibold text-muted-foreground/60 uppercase tracking-wider"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-secondary text-secondary-foreground py-12">
        <div className="container">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Brand column */}
            <div className="md:col-span-1">
              <a href="#" className="flex items-center gap-2 mb-4">
                <Gavel className="h-6 w-6 text-primary" />
                <span className="text-lg font-extrabold">
                  Lance<span className="text-primary">Rápido</span>
                </span>
              </a>
              <p className="text-sm text-secondary-foreground/70 leading-relaxed">
                A maior plataforma de leilões de veículos do Brasil. Compre e venda com segurança,
                agilidade e transparência.
              </p>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-bold text-sm mb-4 text-secondary-foreground">{title}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center justify-end gap-4 mt-8 pt-8 border-t border-secondary-foreground/10">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-secondary-foreground/50 hover:text-primary transition-colors"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="bg-foreground py-3">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-background/60">
          <span>© 2026 Lance Rápido. Todos os direitos reservados.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-background transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

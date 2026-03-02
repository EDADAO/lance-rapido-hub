import { Search, ChevronDown, Globe, Menu, X, Gavel } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Início", href: "#" },
  { label: "Como Funciona", href: "#", hasDropdown: true },
  { label: "Encontrar um Veículo", href: "#" },
  { label: "Leilões", href: "#", hasDropdown: true },
  { label: "Localizações", href: "#", hasDropdown: true },
  { label: "Suporte", href: "#" },
  { label: "Venda Direta", href: "#" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full shadow-lg">
      {/* Top bar */}
      <div className="bg-card border-b border-border">
        <div className="container flex items-center justify-between gap-4 py-3">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <div className="flex items-center gap-1">
              <Gavel className="h-7 w-7 text-primary" />
              <span className="text-xl md:text-2xl font-extrabold tracking-tight text-foreground">
                Lance<span className="text-primary">Rápido</span>
              </span>
            </div>
          </a>

          {/* Search bar - hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-4">
            <div className="flex w-full border border-border rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Procurar por Marca, Modelo, Descrição, Chassis ou Lote"
                className="flex-1 px-4 py-2.5 text-sm bg-card text-foreground placeholder:text-muted-foreground outline-none"
              />
              <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-semibold text-sm hover:bg-brand-red-dark transition-colors">
                <Search className="h-4 w-4" />
                Buscar
              </button>
            </div>
          </div>

          {/* Auth + Language */}
          <div className="flex items-center gap-2 shrink-0">
            <button className="hidden lg:flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Globe className="h-4 w-4" />
              <span>PT</span>
              <ChevronDown className="h-3 w-3" />
            </button>
            <Button size="sm" className="hidden sm:inline-flex bg-primary text-primary-foreground hover:bg-brand-red-dark font-semibold">
              Registrar
            </Button>
            <Button size="sm" variant="outline" className="hidden sm:inline-flex border-foreground text-foreground hover:bg-secondary hover:text-secondary-foreground font-semibold">
              Entrar
            </Button>
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden px-4 pb-3">
          <div className="flex w-full border border-border rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Buscar veículos..."
              className="flex-1 px-3 py-2 text-sm bg-card text-foreground placeholder:text-muted-foreground outline-none"
            />
            <button className="px-4 py-2 bg-primary text-primary-foreground">
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="bg-brand-nav">
        <div className="container">
          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-3 text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary/20 transition-colors"
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown className="h-3 w-3 text-accent" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile nav */}
          {mobileMenuOpen && (
            <ul className="md:hidden py-2 space-y-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center justify-between px-4 py-3 text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary/20 transition-colors"
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <ChevronDown className="h-3 w-3 text-accent" />
                    )}
                  </a>
                </li>
              ))}
              <li className="px-4 py-2 flex gap-2 sm:hidden">
                <Button size="sm" className="flex-1 bg-primary text-primary-foreground hover:bg-brand-red-dark font-semibold">
                  Registrar
                </Button>
                <Button size="sm" variant="outline" className="flex-1 border-primary-foreground/50 text-primary-foreground hover:bg-primary/20 font-semibold">
                  Entrar
                </Button>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

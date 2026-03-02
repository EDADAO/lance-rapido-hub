import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabs = {
  populares: [
    "Carros até R$ 50 mil",
    "SUVs Seminovos",
    "Picapes Diesel",
    "Hatches Econômicos",
    "Sedãs Executivos",
    "Carros Blindados",
    "Veículos Elétricos",
    "Motos Esportivas",
  ],
  destaques: [
    "Leilão Especial SP",
    "Leilão Premium RJ",
    "Frota Renovada MG",
    "Blindados Certificados",
    "Importados Selecionados",
    "Clássicos & Antigos",
  ],
  marcas: [
    "Chevrolet",
    "Fiat",
    "Volkswagen",
    "Ford",
    "Toyota",
    "Hyundai",
    "Honda",
    "Jeep",
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Porsche",
    "Nissan",
    "Renault",
    "Mitsubishi",
    "Kia",
  ],
  categorias: [
    "Carros",
    "Caminhões",
    "Motos",
    "Utilitários",
    "Vans",
    "Ônibus",
    "Máquinas Agrícolas",
    "Embarcações",
  ],
};

const InventoryNav = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container">
        <Tabs defaultValue="populares">
          <TabsList className="bg-transparent border-b border-border rounded-none w-full justify-start gap-0 h-auto p-0">
            {Object.keys(tabs).map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none text-muted-foreground font-semibold px-4 py-3 capitalize"
              >
                {tab === "populares"
                  ? "Pesquisas Populares"
                  : tab === "destaques"
                  ? "Destaques"
                  : tab === "marcas"
                  ? "Marcas"
                  : "Categorias"}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(tabs).map(([key, items]) => (
            <TabsContent key={key} value={key} className="mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-3">
                {items.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default InventoryNav;

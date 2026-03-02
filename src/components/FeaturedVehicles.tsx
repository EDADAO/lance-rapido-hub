import { Gavel } from "lucide-react";
import { Button } from "@/components/ui/button";
import carPorsche from "@/assets/car-porsche.jpg";
import carBmw from "@/assets/car-bmw.jpg";
import carToyota from "@/assets/car-toyota.jpg";
import carMercedes from "@/assets/car-mercedes.jpg";

const vehicles = [
  {
    id: 1,
    year: 2021,
    brand: "PORSCHE",
    model: "911 Carrera",
    image: carPorsche,
    km: "12.450 km",
    location: "São Paulo, SP",
    lot: "Lote #4821",
    currentBid: "R$ 485.000,00",
  },
  {
    id: 2,
    year: 2022,
    brand: "BMW",
    model: "X5 xDrive40i",
    image: carBmw,
    km: "28.300 km",
    location: "Rio de Janeiro, RJ",
    lot: "Lote #3912",
    currentBid: "R$ 320.000,00",
  },
  {
    id: 3,
    year: 2023,
    brand: "TOYOTA",
    model: "Corolla XEi",
    image: carToyota,
    km: "8.900 km",
    location: "Belo Horizonte, MG",
    lot: "Lote #5104",
    currentBid: "R$ 128.000,00",
  },
  {
    id: 4,
    year: 2020,
    brand: "MERCEDES-BENZ",
    model: "C 300 Sport",
    image: carMercedes,
    km: "35.200 km",
    location: "Curitiba, PR",
    lot: "Lote #2738",
    currentBid: "R$ 245.000,00",
  },
];

const FeaturedVehicles = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <h2 className="text-2xl md:text-4xl font-extrabold text-foreground text-center mb-10">
          Lances Rápidos em <span className="text-primary">Destaque</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((v) => (
            <div
              key={v.id}
              className="bg-card rounded-lg overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow group"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={v.image}
                  alt={`${v.year} ${v.brand} ${v.model}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-2 left-2 bg-secondary/80 text-secondary-foreground text-xs font-semibold px-2 py-1 rounded">
                  {v.lot}
                </span>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-foreground text-sm md:text-base leading-tight">
                  {v.year} {v.brand} {v.model}
                </h3>
                <div className="mt-2 space-y-1 text-xs text-muted-foreground">
                  <p>{v.km} • {v.location}</p>
                </div>

                <div className="mt-3 flex items-center gap-1.5">
                  <Gavel className="h-4 w-4 text-accent" />
                  <span className="text-sm font-extrabold text-primary">
                    {v.currentBid}
                  </span>
                </div>
                <p className="text-[11px] text-muted-foreground mt-0.5">Lance Atual</p>
              </div>

              <div className="px-4 pb-4">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-brand-red-dark font-bold">
                  Dar Lance Rápido
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;

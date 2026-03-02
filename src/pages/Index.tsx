import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedVehicles from "@/components/FeaturedVehicles";
import TrustSection from "@/components/TrustSection";
import InventoryNav from "@/components/InventoryNav";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturedVehicles />
        <TrustSection />
        <InventoryNav />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

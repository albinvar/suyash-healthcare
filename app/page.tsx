import HeroCarousel from '@/components/sections/HeroCarousel';
import AboutSection from '@/components/sections/AboutSection';
import MachineShowcase from '@/components/sections/MachineShowcase';
import ProductsSection from '@/components/sections/ProductsSection';

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <AboutSection />
      <MachineShowcase />
      <ProductsSection />
    </div>
  );
}

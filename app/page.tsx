import HeroCarousel from '@/components/sections/HeroCarousel';
import AboutSection from '@/components/sections/AboutSection';
import MachineShowcase from '@/components/sections/MachineShowcase';
import ProductsSection from '@/components/sections/ProductsSection';
import JobsSection from '@/components/sections/JobsSection';

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <AboutSection />
      <MachineShowcase />
      <ProductsSection />
      <JobsSection />
    </div>
  );
}

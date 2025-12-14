// import HeroCarousel from '@/components/sections/HeroCarousel';
import AboutSection from '@/components/sections/AboutSection';
import MachineShowcase from '@/components/sections/MachineShowcase';
// import ProductsSection from '@/components/sections/ProductsSection';
import JobsSection from '@/components/sections/JobsSection';
import KeyHighlights from '@/components/sections/KeyHighlights';
import Hero from '@/components/sections/Hero';

export default function Home() {
  return (
    <div>
      {/* <HeroCarousel /> */}
      <Hero />
      <AboutSection />
      <KeyHighlights/>
      <MachineShowcase />
      {/* <ProductsSection /> */}
      <JobsSection />
    </div>
  );
}

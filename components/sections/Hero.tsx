'use client';
import HeroCarousel from './HeroCarousel';

export default function Hero() {

  return (
    <section
      id="home"
      className="relative w-full min-h-[85vh] h-[85vh] md:h-[90vh] overflow-hidden"
    >
      <HeroCarousel />

    </section>
  );
}

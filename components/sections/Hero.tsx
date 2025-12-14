'use client';
import HeroCarousel from './HeroCarousel';

export default function Hero() {

  return (
    <section
      id="home"
      className="relative h-[70vh] md:h-screen overflow-hidden"
    >
      <HeroCarousel />

    </section>
  );
}

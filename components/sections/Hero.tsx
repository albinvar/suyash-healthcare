'use client';

import { FaHeartbeat, FaShieldAlt, FaUserMd, FaAward } from 'react-icons/fa';
import HeroCarousel from './HeroCarousel';

export default function Hero() {
  const features = [
    { icon: FaShieldAlt, title: 'Quality Care' },
    { icon: FaAward, title: 'Certified' },
    { icon: FaUserMd, title: 'Expert Doctors' },
    { icon: FaHeartbeat, title: 'Innovation' },
  ];

  return (
    <section
      id="home"
      className="relative h-[90vh] md:h-screen overflow-hidden"
    >
      {/* BACKGROUND IMAGE */}
      <HeroCarousel />

      {/* DARK OVERLAY */}
      {/* <div className="absolute inset-0 bg-black/40 z-10" /> */}

      {/* HERO CONTENT – CENTERED ON IMAGE */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Suyash Health Care Centre
          </h1>

          <p className="text-white/90 text-lg mb-8">
            Prevention is better than cure
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white/90 backdrop-blur rounded-xl p-5 text-center shadow"
              >
                <f.icon className="mx-auto mb-2 text-primary-600" />
                <p className="font-semibold">{f.title}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

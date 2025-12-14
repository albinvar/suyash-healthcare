'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiArrowRight } from 'react-icons/fi';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface Slide {
  id: number;
  image: string;
  imagePosition: 'left' | 'right';
  title: { mr: string; en: string; hi: string };
  subtitle: { mr: string; en: string; hi: string };
  stats?: {
    value: string;
    label: { mr: string; en: string; hi: string };
  }[];
  ctaText: { mr: string; en: string; hi: string };
  ctaAction: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: '/assets/images/gallery/owner.png',
    imagePosition: 'right',
    title: {
      mr: 'सुयश हेल्थ केयर - आरोग्यसेवेचे प्रणेते',
      en: 'Suyash Health Care - Pioneer in Healthcare',
      hi: 'सुयश हेल्थ केयर - स्वास्थ्य सेवा के प्रणेता',
    },
    subtitle: {
      mr: '2002 पासून समाजसेवेत | 20+ वर्षांचा अनुभव | सुयश हेल्थ केअर सेंटरचे संस्थापक',
      en: 'Serving Society Since 2002 | 20+ Years Experience | Founder of Suyash Health Care Centre',
      hi: '2002 से समाजसेवा में | 20+ वर्षों का अनुभव | सुयश हेल्थ केयर सेंटर के संस्थापक',
    },
    ctaText: {
      mr: 'आमची गोष्ट जाणून घ्या',
      en: 'Know Our Story',
      hi: 'हमारी कहानी जानें',
    },
    ctaAction: 'about',
  },
  {
    id: 2,
    image: '/logo2.png',
    imagePosition: 'left',
    title: {
      mr: 'मोफत आरोग्य तपासणी शिबिरे',
      en: 'Free Health Check-up Camps',
      hi: 'मुफ्त स्वास्थ्य जांच शिविर',
    },
    subtitle: {
      mr: 'ग्रामीण भागातील हजारो नागरिकांपर्यंत आरोग्यसेवा पोहोचवत आहोत',
      en: 'Bringing Healthcare to Thousands in Rural Areas',
      hi: 'ग्रामीण क्षेत्रों में हजारों लोगों तक स्वास्थ्य सेवा पहुंचाना',
    },
    stats: [
      {
        value: '1,00,00,000+',
        label: { mr: 'लाभार्थी', en: 'Beneficiaries', hi: 'लाभार्थी' },
      },
      {
        value: '100+',
        label: { mr: 'शिबिरे', en: 'Camps', hi: 'शिविर' },
      },
      {
        value: '70+',
        label: { mr: 'गावे', en: 'Villages', hi: 'गांव' },
      },
    ],
    ctaText: {
      mr: 'शिबिरांची माहिती',
      en: 'Camp Information',
      hi: 'शिविर की जानकारी',
    },
    ctaAction: 'services',
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0);
  const { locale } = useLanguage();

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const slide = slides[currentSlide];

  return (
    <section
      id="home"
      className="relative w-full h-[68vh] sm:h-[78vh] lg:h-[92vh] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 🔹 BLURRED BACKGROUND */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/assets/images/hero/collage.png"
          alt="Hero background"
          fill
          priority
          className="object-cover blur-sm scale-205"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          initial={{ x: direction > 0 ? 200 : -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction < 0 ? 200 : -200, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 h-full items-end gap-10 pb-20">
              {/* CONTENT */}
              <div className="text-white">
                <h1 className="md:text-4xl lg:text-6xl font-bold mb-6 text-white text-lg">
                  {slide.title[locale]}
                </h1>

                <p className="md:text-lg text-sm text-white/90 mb-8">
                  {slide.subtitle[locale]}
                </p>

                {slide.stats && (
                  <div className="md:grid grid-cols-3 gap-4 mb-8 hidden">
                    {slide.stats.map((s, i) => (
                      <div
                        key={i}
                        className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4"
                      >
                        <div className="md:text-2xl text-md font-bold">{s.value}</div>
                        <div className="md:text-sm text-xs text-white/80">
                          {s.label[locale]}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <button className=" hidden md:inline-flex items-center gap-3 bg-white text-primary-700 px-8 py-4 rounded-full font-semibold">
                  {slide.ctaText[locale]}
                  <FiArrowRight />
                </button>
              </div>

              {/* IMAGE (Bottom for slide 1, Center for slide 2) */}
              <div
                className="relative h-full flex items-end"
              >
                <div
                  className={`relative ${slide.id === 2
                      ? 'w-[150%] aspect-square mx-auto'
                      : 'w-[160%] aspect-[4/3] -mr-32 -mb-28'
                    }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title[locale]}
                    fill
                    className="object-contain scale-110"
                  />
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* NAVIGATION */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md md:p-3 rounded-full text-white p-1"
      >
        <FiChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md md:p-3 p-1 rounded-full text-white"
      >
        <FiChevronRight />
      </button>
    </section>
  );
}

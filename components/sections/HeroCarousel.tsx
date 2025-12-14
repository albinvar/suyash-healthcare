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
    setCurrentSlide((p) => (p + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((p) => (p - 1 + slides.length) % slides.length);
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
      className=" w-full h-[90vh] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0 -z-20">
        <Image
          src="/assets/images/hero/collage.png"
          alt="Hero background"
          fill
          priority
          className="object-cover blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: direction > 0 ? 120 : -120 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction < 0 ? 120 : -120 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="
                    grid grid-cols-1 md:grid-cols-2
                    h-full
                    items-start md:items-end
                    gap-6 md:gap-10
                    pt-36 md:pt-0
                    pb-1 md:pb-20
                    " >

              <div className="text-white text-center md:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 text-white">
                  {slide.title[locale]}
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6">
                  {slide.subtitle[locale]}
                </p>

                {slide.stats && (
                  <div className="hidden md:grid grid-cols-3 gap-4 mb-6">
                    {slide.stats.map((s, i) => (
                      <div
                        key={i}
                        className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4"
                      >
                        <div className="text-2xl font-bold">{s.value}</div>
                        <div className="text-sm text-white/80">
                          {s.label[locale]}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <button className="hidden md:inline-flex items-center gap-3 bg-white text-primary-700 px-8 py-4 rounded-full font-semibold">
                  {slide.ctaText[locale]}
                  <FiArrowRight />
                </button>
              </div>

              {/* IMAGE */}
              <div className="relative h-full flex items-center md:items-end">
                <div
                  className={`relative ${slide.id === 2
                    ? 'w-[100%] sm:w-[120%] md:w-[150%] aspect-square mx-auto'
                    : 'w-[110%] sm:w-[130%] md:w-[160%] aspect-[4/3] md:-mr-32 md:-mb-28'
                    }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title[locale]}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-2 md:p-3 rounded-full text-white"
      >
        <FiChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-2 md:p-3 rounded-full text-white"
      >
        <FiChevronRight />
      </button>
    </section>
  );
}

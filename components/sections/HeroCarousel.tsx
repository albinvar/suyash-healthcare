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
    image: '/assets/images/gallery/owner3.png',
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
        label: { mr: 'लाभार्थी', en: 'Beneficiaries till now', hi: 'लाभार्थी' },
      },
      {
        value: '100+',
        label: { mr: 'शिबिरे', en: 'Camps Till Now', hi: 'अब तक शिविर' },
      },
      {
        value: '70+',
        label: {
          mr: 'आतापर्यंत कव्हर केलेली गावे',
          en: 'Villages Covered Till Now',
          hi: 'अब तक कवर किए गए गाँव'
        }
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
      className="relative w-full min-h-[85vh] h-[85vh] md:h-[90vh] overflow-hidden"
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
          <div className=" h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full items-start md:items-end gap-4 sm:gap-6 md:gap-10 pt-20 sm:pt-24 md:pt-0 pb-0 sm:pb-0 md:pb-20">
              <div className="text-white text-center md:text-left order-1 md:order-1 ">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-1 md:mt-0 mt-20 text-white leading-tight">
                  {slide.title[locale]}
                </h1>

                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 mb-4 sm:mb-6 leading-relaxed px-2 sm:px-0">
                  {slide.subtitle[locale]}
                </p>

                {slide.stats && (
                  <>
                    <div className=" flex md:hidden gap-2 mb-4 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide ">
                      {slide.stats.map((s, i) => (
                        <div
                          key={i}
                          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 min-w-[100px] flex-shrink-0 ml-3"
                        >
                          <div className="text-md font-bold">{s.value}</div>
                          <div className="text-sm text-white/80 leading-tight">
                            {s.label[locale]}
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Desktop Stats */}
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
                  </>
                )}

                <button className="hidden md:inline-flex items-center gap-2 sm:gap-3 bg-white text-primary-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base mx-auto md:mx-0 hover:bg-white/90 transition-colors">
                  {slide.ctaText[locale]}
                  <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

              {/* IMAGE */}
              <div className="order-2 md:order-2 md:flex md:items-end md:justify-end h-full">
                <div
                  className={` ${slide.id === 2
                      ? 'relative h-[100px]  md:h-[600px] w-full sm:w-[90%] md:w-[150%] max-w-[400px] sm:max-w-none mx-auto scale-150 ml-0 md:ml-20'
                      : 'h-[500px] md:h-[1000px] w-[130%] md:w-[320%] scale-150 md:scale-150 md:-mr-72 md:-mb-60  mx-auto'
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
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-2 sm:p-2.5 md:p-3 rounded-full text-white hover:bg-white/30 transition-colors z-10"
        aria-label="Previous slide"
      >
        <FiChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-2 sm:p-2.5 md:p-3 rounded-full text-white hover:bg-white/30 transition-colors z-10"
        aria-label="Next slide"
      >
        <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </section>
  );
}

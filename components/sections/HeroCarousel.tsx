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
  title: {
    mr: string;
    en: string;
    hi: string;
  };
  subtitle: {
    mr: string;
    en: string;
    hi: string;
  };
  stats?: {
    value: string;
    label: {
      mr: string;
      en: string;
      hi: string;
    };
  }[];
  ctaText: {
    mr: string;
    en: string;
    hi: string;
  };
  ctaAction: string;
  bgGradient: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: '/assets/images/gallery/owner.png',
    imagePosition: 'right',
    title: {
      mr: 'युनुस शेख - आरोग्यसेवेचे प्रणेते',
      en: 'Yunus Sheikh - Pioneer in Healthcare',
      hi: 'युनुस शेख - स्वास्थ्य सेवा के प्रणेता'
    },
    subtitle: {
      mr: '2002 पासून समाजसेवेत | 20+ वर्षांचा अनुभव | सुयश हेल्थ केअर सेंटरचे संस्थापक',
      en: 'Serving Society Since 2002 | 20+ Years Experience | Founder of Suyash Health Care Centre',
      hi: '2002 से समाजसेवा में | 20+ वर्षों का अनुभव | सुयश हेल्थ केयर सेंटर के संस्थापक'
    },
    ctaText: {
      mr: 'आमची गोष्ट जाणून घ्या',
      en: 'Know Our Story',
      hi: 'हमारी कहानी जानें'
    },
    ctaAction: 'about',
    bgGradient: 'from-primary-600 via-primary-700 to-primary-800'
  },
  {
    id: 2,
    image: '/assets/images/gallery/anchor.png',
    imagePosition: 'left',
    title: {
      mr: 'मोफत आरोग्य तपासणी शिबिरे',
      en: 'Free Health Check-up Camps',
      hi: 'मुफ्त स्वास्थ्य जांच शिविर'
    },
    subtitle: {
      mr: 'ग्रामीण भागातील हजारो नागरिकांपर्यंत आरोग्यसेवा पोहोचवत आहोत',
      en: 'Bringing Healthcare to Thousands in Rural Areas',
      hi: 'ग्रामीण क्षेत्रों में हजारों लोगों तक स्वास्थ्य सेवा पहुंचाना'
    },
    stats: [
      {
        value: '10,000+',
        label: {
          mr: 'लाभार्थी',
          en: 'Beneficiaries',
          hi: 'लाभार्थी'
        }
      },
      {
        value: '50+',
        label: {
          mr: 'शिबिरे',
          en: 'Camps',
          hi: 'शिविर'
        }
      },
      {
        value: '15+',
        label: {
          mr: 'गावे',
          en: 'Villages',
          hi: 'गांव'
        }
      }
    ],
    ctaText: {
      mr: 'शिबिरांची माहिती',
      en: 'Camp Information',
      hi: 'शिविर की जानकारी'
    },
    ctaAction: 'services',
    bgGradient: 'from-secondary-600 via-secondary-700 to-secondary-800'
  }
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

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const slide = slides[currentSlide];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.15,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const
      }
    })
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };

  return (
    <section
      id="home"
      className="relative w-full h-[68vh] sm:h-[78vh] lg:h-[92vh] overflow-hidden bg-neutral-900"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 }
          }}
          className="absolute inset-0"
        >
          <div className={`h-full w-full bg-gradient-to-br ${slide.bgGradient}`}>
            <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Desktop & Tablet Layout */}
              <div className="hidden md:grid md:grid-cols-2 h-full items-center gap-8 lg:gap-12">
                {/* Content Side */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  className={`flex flex-col justify-center ${
                    slide.imagePosition === 'right' ? 'md:order-1' : 'md:order-2'
                  }`}
                >
                  {/* Title */}
                  <motion.h1
                    custom={0}
                    variants={contentVariants}
                    className="text-3xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight"
                  >
                    {slide.title[locale]}
                  </motion.h1>

                  {/* Subtitle */}
                  <motion.p
                    custom={1}
                    variants={contentVariants}
                    className="text-base lg:text-lg xl:text-xl text-white/90 mb-8 leading-relaxed"
                  >
                    {slide.subtitle[locale]}
                  </motion.p>

                  {/* Statistics */}
                  {slide.stats && (
                    <motion.div
                      custom={2}
                      variants={contentVariants}
                      className="grid grid-cols-3 gap-4 mb-8"
                    >
                      {slide.stats.map((stat, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05, y: -5 }}
                          className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                        >
                          <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                            {stat.value}
                          </div>
                          <div className="text-xs lg:text-sm text-white/80">
                            {stat.label[locale]}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {/* CTA Button */}
                  <motion.button
                    custom={3}
                    variants={contentVariants}
                    onClick={() => handleScroll(slide.ctaAction)}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="group inline-flex items-center space-x-3 bg-white hover:bg-neutral-50 text-primary-700 px-8 py-4 rounded-full text-lg font-semibold shadow-2xl transition-all duration-300 w-fit"
                  >
                    <span>{slide.ctaText[locale]}</span>
                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </motion.div>

                {/* Image Side */}
                <motion.div
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  className={`relative h-full ${
                    slide.imagePosition === 'right' ? 'md:order-2' : 'md:order-1'
                  }`}
                >
                  <div className={`relative h-full w-full flex items-end ${
                    slide.imagePosition === 'right' ? 'justify-end' : 'justify-start'
                  }`}>
                    <div className="relative w-[95%] aspect-[4/3] overflow-hidden">
                      <Image
                        src={slide.image}
                        alt={slide.title[locale]}
                        fill
                        className="object-cover"
                        priority={currentSlide === 0}
                        quality={95}
                        sizes="(max-width: 768px) 100vw, 47.5vw"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Mobile Layout - Content top, Image bottom aligned */}
              <div className="md:hidden relative h-full pt-28 pb-8 flex flex-col">
                {/* Content at Top */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  className="flex-1 flex flex-col justify-start px-4 pb-4 z-10"
                >
                  {/* Title */}
                  <motion.h1
                    custom={0}
                    variants={contentVariants}
                    className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight"
                  >
                    {slide.title[locale]}
                  </motion.h1>

                  {/* Subtitle */}
                  <motion.p
                    custom={1}
                    variants={contentVariants}
                    className="text-sm sm:text-base text-white/90 mb-6 leading-relaxed max-w-md"
                  >
                    {slide.subtitle[locale]}
                  </motion.p>

                  {/* Statistics */}
                  {slide.stats && (
                    <motion.div
                      custom={2}
                      variants={contentVariants}
                      className="grid grid-cols-3 gap-3 mb-6 max-w-md"
                    >
                      {slide.stats.map((stat, index) => (
                        <div
                          key={index}
                          className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20"
                        >
                          <div className="text-xl font-bold text-white mb-1">
                            {stat.value}
                          </div>
                          <div className="text-xs text-white/80">
                            {stat.label[locale]}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {/* CTA Button */}
                  <motion.button
                    custom={3}
                    variants={contentVariants}
                    onClick={() => handleScroll(slide.ctaAction)}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center space-x-2 bg-white text-primary-700 px-6 py-3 rounded-full text-base font-semibold shadow-2xl w-full sm:w-auto max-w-xs"
                  >
                    <span>{slide.ctaText[locale]}</span>
                    <FiArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>

                {/* Image at Bottom - Aligned based on imagePosition */}
                <motion.div
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  className={`absolute bottom-0 ${
                    slide.imagePosition === 'right' ? 'right-0' : 'left-0'
                  } w-[85%] max-w-md z-0`}
                >
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <Image
                      src={slide.image}
                      alt={slide.title[locale]}
                      fill
                      className="object-cover"
                      priority={currentSlide === 0}
                      quality={95}
                      sizes="85vw"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 sm:px-4 lg:px-8 pointer-events-none">
        <motion.button
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="pointer-events-auto bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 lg:p-4 rounded-full shadow-lg transition-all duration-300 border border-white/20"
          aria-label="Previous slide"
        >
          <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="pointer-events-auto bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 lg:p-4 rounded-full shadow-lg transition-all duration-300 border border-white/20"
          aria-label="Next slide"
        >
          <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 lg:bottom-8 left-0 right-0 flex justify-center space-x-3 z-10">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? 'w-12 h-2.5 bg-white'
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/60'
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Pause Indicator */}
      {isPaused && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-sm font-medium border border-white/20 z-10"
        >
          Paused
        </motion.div>
      )}
    </section>
  );
}

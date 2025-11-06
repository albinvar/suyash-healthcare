'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiArrowRight } from 'react-icons/fi';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface Slide {
  id: number;
  image: string;
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
}

const slides: Slide[] = [
  {
    id: 1,
    image: '/assets/images/gallery/owner.png',
    title: {
      mr: 'युनुस शेख - आरोग्यसेवेचे प्रणेते',
      en: 'Yunus Sheikh - Pioneer in Healthcare',
      hi: 'युनुस शेख - स्वास्थ्य सेवा के प्रणेता'
    },
    subtitle: {
      mr: '2002 पासून समाजसेवेत | 20+ वर्षांचा अनुभव',
      en: 'Serving Society Since 2002 | 20+ Years Experience',
      hi: '2002 से समाजसेवा में | 20+ वर्षों का अनुभव'
    },
    ctaText: {
      mr: 'आमची गोष्ट जाणून घ्या',
      en: 'Know Our Story',
      hi: 'हमारी कहानी जानें'
    },
    ctaAction: 'about'
  },
  {
    id: 2,
    image: '/assets/images/gallery/anchor.png',
    title: {
      mr: 'मोफत आरोग्य तपासणी शिबिरे',
      en: 'Free Health Check-up Camps',
      hi: 'मुफ्त स्वास्थ्य जांच शिविर'
    },
    subtitle: {
      mr: 'ग्रामीण भागातील हजारो नागरिकांपर्यंत आरोग्यसेवा',
      en: 'Bringing Healthcare to Thousands in Rural Areas',
      hi: 'ग्रामीण क्षेत्रों में हजारों लोगों तक स्वास्थ्य सेवा'
    },
    stats: [
      {
        value: '10,000+',
        label: {
          mr: 'लाभार्थी नागरिक',
          en: 'Beneficiaries',
          hi: 'लाभार्थी नागरिक'
        }
      },
      {
        value: '50+',
        label: {
          mr: 'आरोग्य शिबिरे',
          en: 'Health Camps',
          hi: 'स्वास्थ्य शिविर'
        }
      },
      {
        value: '15+',
        label: {
          mr: 'गावे आणि शहरे',
          en: 'Villages & Cities',
          hi: 'गांव और शहर'
        }
      }
    ],
    ctaText: {
      mr: 'शिबिरांची माहिती',
      en: 'Camp Information',
      hi: 'शिविर की जानकारी'
    },
    ctaAction: 'services'
  },
  {
    id: 3,
    image: '/assets/images/gallery/machine.png',
    title: {
      mr: 'अत्याधुनिक वैद्यकीय उपकरणे',
      en: 'State-of-the-Art Medical Equipment',
      hi: 'अत्याधुनिक चिकित्सा उपकरण'
    },
    subtitle: {
      mr: 'ISO प्रमाणित उत्पादने | संपूर्ण तांत्रिक सहाय्य | देशभरात सेवा',
      en: 'ISO Certified Products | Complete Technical Support | Nationwide Service',
      hi: 'ISO प्रमाणित उत्पाद | संपूर्ण तकनीकी सहायता | राष्ट्रव्यापी सेवा'
    },
    ctaText: {
      mr: 'उपकरणे पहा',
      en: 'View Equipment',
      hi: 'उपकरण देखें'
    },
    ctaAction: 'machine'
  },
  {
    id: 4,
    image: '/assets/images/gallery/owner.png',
    title: {
      mr: 'समाजसेवा - आमचा ध्येय',
      en: 'Social Service - Our Mission',
      hi: 'समाजसेवा - हमारा लक्ष्य'
    },
    subtitle: {
      mr: 'गरीब आणि गरजू रुग्णांना निःशुल्क उपचार | समाजातील प्रत्येकाला आरोग्यसेवेचा अधिकार',
      en: 'Free Treatment for Needy Patients | Healthcare is Everyone\'s Right',
      hi: 'जरूरतमंद मरीजों के लिए मुफ्त इलाज | स्वास्थ्य सेवा सभी का अधिकार'
    },
    stats: [
      {
        value: '5,000+',
        label: {
          mr: 'निःशुल्क उपचार',
          en: 'Free Treatments',
          hi: 'मुफ्त उपचार'
        }
      },
      {
        value: '100%',
        label: {
          mr: 'समाजसेवा',
          en: 'Social Service',
          hi: 'समाजसेवा'
        }
      }
    ],
    ctaText: {
      mr: 'सामील व्हा',
      en: 'Join Us',
      hi: 'हमसे जुड़ें'
    },
    ctaAction: 'contact'
  },
  {
    id: 5,
    image: '/assets/images/gallery/machine.png',
    title: {
      mr: '24/7 तांत्रिक सहाय्य सेवा',
      en: '24/7 Technical Support Service',
      hi: '24/7 तकनीकी सहायता सेवा'
    },
    subtitle: {
      mr: 'नेहमी उपलब्ध | द्रुत प्रतिसाद | तज्ञ तंत्रज्ञ',
      en: 'Always Available | Quick Response | Expert Technicians',
      hi: 'हमेशा उपलब्ध | त्वरित प्रतिक्रिया | विशेषज्ञ तकनीशियन'
    },
    ctaText: {
      mr: 'आता संपर्क साधा',
      en: 'Contact Now',
      hi: 'अभी संपर्क करें'
    },
    ctaAction: 'contact'
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
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    })
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.6,
        ease: 'easeOut'
      }
    })
  };

  return (
    <section
      id="home"
      className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[90vh] overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-primary-900"
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
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 }
          }}
          className="absolute inset-0"
        >
          {/* Background Image with Parallax Effect */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: 'linear' }}
          >
            <Image
              src={slide.image}
              alt={slide.title[locale]}
              fill
              className="object-cover"
              priority={currentSlide === 0}
              quality={90}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </motion.div>

          {/* Content */}
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="w-full lg:w-2/3">
              {/* Title */}
              <motion.h1
                custom={0}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-200 to-white">
                  {slide.title[locale]}
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                custom={1}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-200 mb-6 sm:mb-8 leading-relaxed max-w-3xl"
              >
                {slide.subtitle[locale]}
              </motion.p>

              {/* Statistics */}
              {slide.stats && (
                <motion.div
                  custom={2}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8"
                >
                  {slide.stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
                    >
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm text-neutral-300">
                        {stat.label[locale]}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* CTA Button */}
              <motion.button
                custom={3}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                onClick={() => handleScroll(slide.ctaAction)}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center space-x-3 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-2xl transition-all duration-300"
              >
                <span>{slide.ctaText[locale]}</span>
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
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
          className="pointer-events-auto bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-2 sm:p-3 lg:p-4 rounded-full shadow-lg transition-all duration-300 border border-white/20"
          aria-label="Previous slide"
        >
          <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="pointer-events-auto bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-2 sm:p-3 lg:p-4 rounded-full shadow-lg transition-all duration-300 border border-white/20"
          aria-label="Next slide"
        >
          <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-0 right-0 flex justify-center space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 sm:w-12 h-2 sm:h-2.5 bg-white'
                : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/40 hover:bg-white/60'
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
          className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium border border-white/20"
        >
          Paused
        </motion.div>
      )}
    </section>
  );
}

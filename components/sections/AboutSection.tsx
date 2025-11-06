'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { FaAward, FaUsers, FaHandHoldingHeart, FaCalendar } from 'react-icons/fa';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: {
    mr: string;
    en: string;
    hi: string;
  };
  delay: number;
}

function AnimatedCounter({ value, suffix = '', delay }: { value: number; suffix?: string; delay: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isInView, value, delay]);

  return (
    <div ref={ref} className="text-4xl lg:text-5xl font-bold text-primary-700">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

function StatCard({ icon, value, suffix, label, delay }: StatCardProps) {
  const { locale } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 group hover:scale-105"
    >
      <div className="text-primary-600 mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <AnimatedCounter value={value} suffix={suffix} delay={delay * 1000} />
      <div className="text-sm text-neutral-600 mt-2 font-medium">
        {label[locale]}
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  const { locale, t } = useLanguage();
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isContentInView = useInView(contentRef, { once: true, margin: "-100px" });
  const isImageInView = useInView(imageRef, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: <FaCalendar className="w-8 h-8" />,
      value: 2002,
      label: {
        mr: 'स्थापना वर्ष',
        en: 'Year Founded',
        hi: 'स्थापना वर्ष'
      },
      delay: 0.1
    },
    {
      icon: <FaHandHoldingHeart className="w-8 h-8" />,
      value: 100,
      suffix: '+',
      label: {
        mr: 'आरोग्य शिबिरे',
        en: 'Health Camps',
        hi: 'स्वास्थ्य शिविर'
      },
      delay: 0.2
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      value: 50000,
      suffix: '+',
      label: {
        mr: 'सेवा केलेले नागरिक',
        en: 'People Served',
        hi: 'सेवा किए गए नागरिक'
      },
      delay: 0.3
    },
    {
      icon: <FaAward className="w-8 h-8" />,
      value: 20,
      suffix: '+',
      label: {
        mr: 'अनुभवाची वर्षे',
        en: 'Years of Experience',
        hi: 'अनुभव के वर्ष'
      },
      delay: 0.4
    }
  ];

  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-primary-50/30">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Side - Image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -50 }}
            animate={isImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/images/gallery/owner.png"
                  alt="Yunus Sheikh - Founder"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={95}
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>

              {/* 20+ Years Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isImageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-2xl p-6 shadow-2xl"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold">20+</div>
                  <div className="text-sm font-medium mt-1">
                    {locale === 'mr' ? 'वर्षे अनुभव' : locale === 'hi' ? 'वर्ष अनुभव' : 'Years'}
                  </div>
                </div>
              </motion.div>

              {/* Decorative Medical Symbol */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-8 -left-8 w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center opacity-50"
              >
                <FaHandHoldingHeart className="w-8 h-8 text-secondary-600" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, x: 50 }}
            animate={isContentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              {locale === 'mr' ? 'आमच्याबद्दल' : locale === 'hi' ? 'हमारे बारे में' : 'About Us'}
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-900 mb-6 leading-tight"
            >
              {locale === 'mr' ? 'युनुस शेख - एक प्रेरणादायी प्रवास' :
               locale === 'hi' ? 'युनुस शेख - एक प्रेरणादायक यात्रा' :
               'Yunus Sheikh - An Inspiring Journey'}
            </motion.h2>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-neutral-700 leading-relaxed mb-4 text-base lg:text-lg">
                {locale === 'mr' ?
                  'युनुस शेख हे सोलापूर जिल्ह्यातील एक प्रेरणादायी उद्योजक आहेत. 2002 पासून त्यांनी आरोग्यसेवा क्षेत्रात समाजकार्याची सुरुवात केली. त्यांनी आयुर्वेदिक उपायांपैकी "सुवर्णप्राशन" सारख्या आरोग्य उपक्रमांची सुरुवात केली आणि "सुयश हेल्थ केअर"च्या माध्यमातून ग्रामीण भागातील नागरिकांपर्यंत मोफत आरोग्यसेवा पोहोचवण्याचा सतत प्रयत्न केला.' :
                  locale === 'hi' ?
                  'युनुस शेख सोलापुर जिले के एक प्रेरणादायक उद्यमी हैं। 2002 से उन्होंने स्वास्थ्य सेवा क्षेत्र में सामाजिक कार्य शुरू किया। उन्होंने "सुवर्णप्राशन" जैसे आयुर्वेदिक स्वास्थ्य कार्यक्रम शुरू किए और "सुयश हेल्थ केयर" के माध्यम से ग्रामीण क्षेत्रों के नागरिकों तक मुफ्त स्वास्थ्य सेवा पहुंचाने का निरंतर प्रयास किया।' :
                  'Yunus Sheikh is an inspiring entrepreneur from Solapur district. Since 2002, he has been involved in social work in the healthcare sector. He initiated Ayurvedic health programs like "Suvarnaprashan" and has continuously worked to provide free healthcare services to citizens in rural areas through "Suyash Health Care".'
                }
              </p>

              <p className="text-neutral-700 leading-relaxed text-base lg:text-lg">
                {locale === 'mr' ?
                  'पुणे येथे येऊन त्यांनी पुणे ग्रामीण भागात अनेक आरोग्य शिबिरे यशस्वीपणे आयोजित केली असून, त्यांचे हे समाजोपयोगी कार्य आजही अखंडपणे सुरू आहे.' :
                  locale === 'hi' ?
                  'पुणे आकर उन्होंने पुणे ग्रामीण क्षेत्र में कई स्वास्थ्य शिविर सफलतापूर्वक आयोजित किए हैं, और उनका यह सामाजिक कार्य आज भी निरंतर जारी है।' :
                  'After coming to Pune, he has successfully organized numerous health camps in rural Pune, and this social welfare work continues uninterrupted to this day.'
                }
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Mission Statement Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-primary-50 via-blue-50 to-secondary-50 rounded-2xl p-8 lg:p-12 shadow-xl border border-primary-100"
        >
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-200 rounded-bl-full opacity-20"></div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                <FaAward className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900">
                {locale === 'mr' ? 'आमचे ध्येय' : locale === 'hi' ? 'हमारा उद्देश्य' : 'Our Mission'}
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-neutral-700 text-base lg:text-lg leading-relaxed"
            >
              {locale === 'mr' ?
                'आता याच अनुभवाच्या जोरावर, युनुस शेख आपल्या सर्वांसाठी एक नवी व्यवसायाची संधी घेऊन आले आहेत. ही संधी म्हणजे केवळ उत्पन्नाचं साधन नाही, तर समाजासाठी काहीतरी करण्याची संधी देखील आहे.' :
                locale === 'hi' ?
                'अब इसी अनुभव के बल पर, युनुस शेख आप सभी के लिए एक नया व्यवसाय का अवसर लेकर आए हैं। यह अवसर केवल आय का साधन नहीं है, बल्कि समाज के लिए कुछ करने का अवसर भी है।' :
                'Now, with this experience, Yunus Sheikh brings a new business opportunity for everyone. This opportunity is not just a means of income, but also a chance to do something for society.'
              }
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

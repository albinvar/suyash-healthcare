'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaCheckCircle } from 'react-icons/fa';
import { useLanguage } from '@/lib/i18n/LanguageContext';

/* -------------------- SLIDES DATA -------------------- */

const highlightSlides = [
  { image: '/assets/images/camp/camp1.jpeg' },
  { image: '/assets/images/camp/camp2.jpeg' },
  { image: '/assets/images/camp/camp3.jpeg' },
  { image: '/assets/images/camp/camp4.jpeg' },
  { image: '/assets/images/camp/camp5.jpeg' },
  { image: '/assets/images/camp/camp6.jpeg' },
  { image: '/assets/images/camp/camp7.jpeg' },
  { image: '/assets/images/camp/camp8.jpeg' },
  { image: '/assets/images/camp/camp9.jpeg' },
  { image: '/assets/images/camp/camp10.jpeg' },
];

/* -------------------- COMPONENT -------------------- */

export default function KeyHighlightsSection() {
  const { locale } = useLanguage();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % highlightSlides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const slide = highlightSlides[index];

  const highlightsText = [
    {
      mr: 'हेपेटायटिस-बी लसीकरण मोहीम (2002–2010)',
      hi: 'हेपेटाइटिस-बी टीकाकरण अभियान (2002–2010)',
      en: 'Hepatitis-B Vaccination Campaign (2002–2010)',
    },
    {
      mr: 'टायफॉइड लसीकरण मोहीम (2010–2011)',
      hi: 'टाइफाइड टीकाकरण अभियान (2010–2011)',
      en: 'Typhoid Vaccination Campaign (2010–2011)',
    },
    {
      mr: 'रुबेला लसीकरण मोहीम (2011–2012)',
      hi: 'रूबेला टीकाकरण अभियान (2011–2012)',
      en: 'Rubella Vaccination Campaign (2011–2012)',
    },
    {
      mr: 'स्वाईन फ्लू लसीकरण मोहीम (2011–2012)',
      hi: 'स्वाइन फ्लू टीकाकरण अभियान (2011–2012)',
      en: 'Swine Flu Vaccination Campaign (2011–2012)',
    },
    {
      mr: 'सुवर्णप्राशन लसीकरण मोहीम (2012–2021)',
      hi: 'सुवर्णप्राशन टीकाकरण अभियान (2012–2021)',
      en: 'Suvarnaprashan Vaccination Campaign (2012–2021)',
    },
    {
      mr: 'डिजिटल हेल्थ मशीन चेकअप मोहीम (2023–2025)',
      hi: 'डिजिटल हेल्थ मशीन चेकअप अभियान (2023–2025)',
      en: 'Digital Health Machine Checkup Campaign (2023–2025)',
    },
  ];

  return (
    <section id="key" className="w-full py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-500 text-center mb-14">
          Key Highlights
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* LEFT CONTENT */}
          <div className="h-full bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white flex flex-col">
            <h3 className="text-2xl font-bold mb-8 text-white">
              {locale === 'mr'
                ? 'महत्वपूर्ण ठळक मुद्दे (20 लाख+ लसीकरण)'
                : locale === 'hi'
                ? 'मुख्य विशेषताएँ (20 लाख+ वैक्सीन)'
                : 'Key Highlights (20+ Lakh vaccinations)'}
            </h3>

            <ul className="space-y-5 flex-1 ">
              {highlightsText.map((item, i) => (
               <li key={i} className="flex items-start gap-3">
               <FaCheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
               <span className="text-xl leading-relaxed">
                 {locale === 'mr'
                   ? item.mr
                   : locale === 'hi'
                   ? item.hi
                   : item.en}
               </span>
             </li>
             
              ))}
            </ul>
          </div>

          {/* RIGHT SLIDER */}
          <div className="h-full flex">
            <div className="relative bg-white rounded-2xl border border-neutral-200 shadow-md overflow-hidden flex flex-col w-full min-h-[420px] md:min-h-[520px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col h-full"
                >
                  {/* IMAGE */}
                  <div className="relative flex-1 bg-neutral-100 p-6">
                    <Image
                      src={slide.image}
                      alt="Health Camp"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain scale-105"
                      priority={index === 0}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* NAVIGATION */}
              <button
                onClick={() =>
                  setIndex(
                    (index - 1 + highlightSlides.length) %
                      highlightSlides.length
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60"
                aria-label="Previous"
              >
                <FiChevronLeft />
              </button>

              <button
                onClick={() =>
                  setIndex((index + 1) % highlightSlides.length)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60"
                aria-label="Next"
              >
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function MachineShowcase() {
  const { locale } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  /* -------------------- MACHINE IMAGES -------------------- */

  const machineImages = [
    '/assets/images/gallery/machine.png',
    '/assets/images/machines/img1.jpeg',
    '/assets/images/machines/img2.jpeg',
    '/assets/images/machines/img3.jpeg',
    '/assets/images/machines/img4.jpeg',
  ];

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % machineImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const highlights = [
    { mr: 'ब्लड प्रेशर, शुगर, कोलेस्टेरॉल', en: 'Blood Pressure, Sugar, Cholesterol', hi: 'ब्लड प्रेशर, शुगर, कोलेस्ट्रॉल' },
    { mr: 'ECG, हिमोग्लोबिन, ऑक्सिजन लेव्हल', en: 'ECG, Hemoglobin, Oxygen Level', hi: 'ECG, हीमोग्लोबिन, ऑक्सीजन स्तर' },
    { mr: 'BMI, वजन, उंची मापन', en: 'BMI, Weight, Height Measurement', hi: 'BMI, वजन, ऊंचाई मापन' },
    { mr: '+ आणखी 40 पॅरामीटर्स', en: '+ 40 More Parameters', hi: '+ और 40 पैरामीटर' }
  ];

  return (
    <section id="machine" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-12" ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4"
          >
            {locale === 'mr' ? 'डिजिटल हेल्थ मशीन' :
             locale === 'hi' ? 'डिजिटल हेल्थ मशीन' :
             'Digital Health Machine'}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base text-neutral-600 max-w-2xl mx-auto"
          >
            {locale === 'mr'
              ? '90 सेकंदात संपूर्ण आरोग्य रिपोर्ट - NABL मान्यताप्राप्त तंत्रज्ञान'
              : locale === 'hi'
              ? '90 सेकंड में पूर्ण स्वास्थ्य रिपोर्ट - NABL मान्यता प्राप्त तकनीक'
              : 'Complete Health Report in 90 Seconds - NABL Approved Technology'}
          </motion.p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* IMAGE SLIDER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square bg-neutral-50 rounded-lg overflow-hidden border border-neutral-200">

              <AnimatePresence mode="wait">
                <motion.div
                  key={imageIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={machineImages[imageIndex]}
                    alt="Digital Health Machine"
                    fill
                    className="object-contain p-8"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* BADGE */}
              <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1.5 rounded-md text-xs font-bold">
                NABL
              </div>

              {/* NAV BUTTONS */}
              <button
                onClick={() =>
                  setImageIndex(
                    (imageIndex - 1 + machineImages.length) %
                      machineImages.length
                  )
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
              >
                <FiChevronLeft />
              </button>

              <button
                onClick={() =>
                  setImageIndex((imageIndex + 1) % machineImages.length)
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
              >
                <FiChevronRight />
              </button>
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-neutral-900">
                {locale === 'mr' ? 'प्रमुख वैशिष्ट्ये' :
                 locale === 'hi' ? 'मुख्य विशेषताएं' :
                 'Key Features'}
              </h3>

              <a
                href="/assets/pdf/test-report.pdf"
                target="_blank"
                className="text-sm bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md"
              >
                {locale === 'mr' ? 'PDF डाउनलोड' :
                 locale === 'hi' ? 'PDF डाउनलोड करें' :
                 'Sample Report'}
              </a>
            </div>

            <div className="space-y-3 mb-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-neutral-50 rounded-lg border border-neutral-200"
                >
                  <FaCheckCircle className="w-5 h-5 text-primary-600 mt-0.5" />
                  <span className="text-neutral-700">{item[locale]}</span>
                </div>
              ))}
            </div>

            {/* STATS */}
            <div className="bg-gradient-to-br from-primary-600 to-blue-700 rounded-lg p-6 text-white">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold">90<span className="text-lg">s</span></div>
                  <div className="text-xs mt-1">
                    {locale === 'mr' ? 'रिपोर्ट वेळ' : locale === 'hi' ? 'रिपोर्ट समय' : 'Report Time'}
                  </div>
                </div>
                <div className="border-x border-white/20">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-xs mt-1">
                    {locale === 'mr' ? 'पॅरामीटर्स' : locale === 'hi' ? 'पैरामीटर' : 'Parameters'}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-xs mt-1">
                    {locale === 'mr' ? 'अचूक' : locale === 'hi' ? 'सटीक' : 'Accurate'}
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

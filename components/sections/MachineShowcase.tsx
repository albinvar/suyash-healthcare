'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function MachineShowcase() {
  const { locale } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const highlights = [
    { mr: 'ब्लड प्रेशर, शुगर, कोलेस्टेरॉल', en: 'Blood Pressure, Sugar, Cholesterol', hi: 'ब्लड प्रेशर, शुगर, कोलेस्ट्रॉल' },
    { mr: 'ECG, हिमोग्लोबिन, ऑक्सिजन लेव्हल', en: 'ECG, Hemoglobin, Oxygen Level', hi: 'ECG, हीमोग्लोबिन, ऑक्सीजन स्तर' },
    { mr: 'BMI, वजन, उंची मापन', en: 'BMI, Weight, Height Measurement', hi: 'BMI, वजन, ऊंचाई मापन' },
    { mr: '+ आणखी 40 पॅरामीटर्स', en: '+ 40 More Parameters', hi: '+ और 40 पैरामीटर' }
  ];

  return (
    <section id="machine" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12" ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4"
          >
            {locale === 'mr' ? 'डिजिटल हेल्थ मशीन' :
             locale === 'hi' ? 'डिजिटल हेल्थ मशीन' :
             'Digital Health Machine'}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base text-neutral-600 max-w-2xl mx-auto"
          >
            {locale === 'mr' ? '90 सेकंदात संपूर्ण आरोग्य रिपोर्ट - NABL मान्यताप्राप्त तंत्रज्ञान' :
             locale === 'hi' ? '90 सेकंड में पूर्ण स्वास्थ्य रिपोर्ट - NABL मान्यता प्राप्त तकनीक' :
             'Complete Health Report in 90 Seconds - NABL Approved Technology'}
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square bg-neutral-50 rounded-lg overflow-hidden border border-neutral-200">
              <Image
                src="/assets/images/gallery/machine.png"
                alt="Digital Health Machine"
                fill
                className="object-contain p-8"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1.5 rounded-md text-xs font-bold">
                NABL
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              {locale === 'mr' ? 'प्रमुख वैशिष्ट्ये' : locale === 'hi' ? 'मुख्य विशेषताएं' : 'Key Features'}
            </h3>

            <div className="space-y-3 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <FaCheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">{item[locale]}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-primary-600 to-blue-700 rounded-lg p-6 text-white">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold">90<span className="text-lg">s</span></div>
                  <div className="text-xs text-white/90 mt-1">
                    {locale === 'mr' ? 'रिपोर्ट वेळ' : locale === 'hi' ? 'रिपोर्ट समय' : 'Report Time'}
                  </div>
                </div>
                <div className="border-x border-white/20">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-xs text-white/90 mt-1">
                    {locale === 'mr' ? 'पॅरामीटर्स' : locale === 'hi' ? 'पैरामीटर' : 'Parameters'}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-xs text-white/90 mt-1">
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

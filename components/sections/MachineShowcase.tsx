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
    <section id="machine" className="py-16 lg:py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] bg-white rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/assets/images/gallery/machine.png"
                alt="Health Machine"
                fill
                className="object-contain p-8"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute top-6 right-6 bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md">
                NABL
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              {locale === 'mr' ? '90 सेकंदात संपूर्ण आरोग्य रिपोर्ट' :
               locale === 'hi' ? '90 सेकंड में पूर्ण स्वास्थ्य रिपोर्ट' :
               '90-Second Complete Health Report'}
            </h2>

            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              {locale === 'mr' ? 'अत्याधुनिक तंत्रज्ञान वापरून 50+ पॅरामीटर्सची तपासणी. NABL मान्यताप्राप्त, डिजिटल रिपोर्ट SMS आणि प्रिंट मध्ये.' :
               locale === 'hi' ? 'अत्याधुनिक तकनीक से 50+ पैरामीटर की जांच। NABL मान्यता प्राप्त, डिजिटल रिपोर्ट SMS और प्रिंट में।' :
               'Advanced technology checks 50+ parameters. NABL approved, digital report via SMS and print.'}
            </p>

            <div className="space-y-3 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <FaCheckCircle className="w-5 h-5 text-primary-600" />
                  </div>
                  <span className="text-neutral-700">{item[locale]}</span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-6 border border-neutral-200">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary-600">90<span className="text-lg">
                    {locale === 'mr' ? 'से' : locale === 'hi' ? 'से' : 's'}
                  </span></div>
                  <div className="text-sm text-neutral-600 mt-1">
                    {locale === 'mr' ? 'रिपोर्ट वेळ' : locale === 'hi' ? 'रिपोर्ट समय' : 'Report Time'}
                  </div>
                </div>
                <div className="border-x border-neutral-200">
                  <div className="text-3xl font-bold text-primary-600">50+</div>
                  <div className="text-sm text-neutral-600 mt-1">
                    {locale === 'mr' ? 'पॅरामीटर्स' : locale === 'hi' ? 'पैरामीटर' : 'Parameters'}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">100%</div>
                  <div className="text-sm text-neutral-600 mt-1">
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

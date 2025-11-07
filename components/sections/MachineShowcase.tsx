'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import {
  FaBolt,
  FaMobileAlt,
  FaShieldAlt,
  FaCheckCircle,
  FaChartBar,
  FaUserMd,
  FaPlay,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface FeatureCardProps {
  icon: React.ReactNode;
  text: {
    mr: string;
    en: string;
    hi: string;
  };
  delay: number;
}

function FeatureCard({ icon, text, delay }: FeatureCardProps) {
  const { locale } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center gap-3 p-4 bg-white rounded-lg border border-neutral-200 hover:border-primary-300 transition-colors"
    >
      <div className="text-primary-600 text-xl">
        {icon}
      </div>
      <span className="text-sm font-medium text-neutral-800">
        {text[locale]}
      </span>
    </motion.div>
  );
}

export default function MachineShowcase() {
  const { locale } = useLanguage();
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: <FaBolt />,
      text: {
        mr: '90 सेकंदात रिपोर्ट',
        en: 'Report in 90 Seconds',
        hi: '90 सेकंड में रिपोर्ट'
      }
    },
    {
      icon: <FaMobileAlt />,
      text: {
        mr: 'SMS + प्रिंट रिपोर्ट',
        en: 'SMS + Print Report',
        hi: 'SMS + प्रिंट रिपोर्ट'
      }
    },
    {
      icon: <FaShieldAlt />,
      text: {
        mr: 'सुरक्षित डेटा',
        en: 'Secure Data',
        hi: 'सुरक्षित डेटा'
      }
    },
    {
      icon: <FaCheckCircle />,
      text: {
        mr: 'मेडिकल अ‍ॅक्युरसी',
        en: 'Medical Accuracy',
        hi: 'मेडिकल सटीकता'
      }
    },
    {
      icon: <FaChartBar />,
      text: {
        mr: '50+ पॅरामीटर्स',
        en: '50+ Parameters',
        hi: '50+ पैरामीटर'
      }
    },
    {
      icon: <FaUserMd />,
      text: {
        mr: 'डॉक्टर सल्ला',
        en: 'Doctor Consultation',
        hi: 'डॉक्टर परामर्श'
      }
    }
  ];

  const parameters = [
    { mr: 'रक्तदाब (BP)', en: 'Blood Pressure', hi: 'रक्तचाप' },
    { mr: 'ब्लड शुगर', en: 'Blood Sugar', hi: 'ब्लड शुगर' },
    { mr: 'कोलेस्टेरॉल', en: 'Cholesterol', hi: 'कोलेस्ट्रॉल' },
    { mr: 'हिमोग्लोबिन', en: 'Hemoglobin', hi: 'हीमोग्लोबिन' },
    { mr: 'BMI मापन', en: 'BMI Measurement', hi: 'BMI मापन' }
  ];

  return (
    <section id="machine" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-900 mb-4">
              {locale === 'mr' ? 'डिजिटल हेल्थ टेक्नॉलॉजी' :
               locale === 'hi' ? 'डिजिटल हेल्थ टेक्नॉलॉजी' :
               'Digital Health Technology'}
            </h2>
            <p className="text-lg text-neutral-600">
              {locale === 'mr' ? 'NABL मान्यताप्राप्त | 90 सेकंदात संपूर्ण रिपोर्ट' :
               locale === 'hi' ? 'NABL मान्यता प्राप्त | 90 सेकंड में पूर्ण रिपोर्ट' :
               'NABL Approved | Complete Report in 90 Seconds'}
            </p>
          </motion.div>
        </div>

        {/* Three Column Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Left Column - Machine Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <div className="relative">
              {/* NABL Badge */}
              <div className="absolute top-4 right-4 z-10 bg-primary-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                NABL {locale === 'mr' ? 'मान्यताप्राप्त' : locale === 'hi' ? 'मान्यता प्राप्त' : 'Approved'}
              </div>

              {/* Machine Image */}
              <div className="relative aspect-[3/4] bg-neutral-100 rounded-lg overflow-hidden border border-neutral-200">
                <Image
                  src="/assets/images/gallery/machine.png"
                  alt="Digital Health Machine"
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={95}
                />
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <button className="w-full flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  <FaPlay className="w-4 h-4" />
                  {locale === 'mr' ? 'डेमो पहा' : locale === 'hi' ? 'डेमो देखें' : 'Watch Demo'}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Center Column - Features */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-lg font-bold text-neutral-900 mb-4">
              {locale === 'mr' ? 'मुख्य वैशिष्ट्ये' : locale === 'hi' ? 'मुख्य विशेषताएं' : 'Key Features'}
            </h3>
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} delay={index * 0.1} />
            ))}
          </div>

          {/* Right Column - Reports Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200 h-full">
              <h3 className="text-lg font-bold text-neutral-900 mb-4">
                {locale === 'mr' ? 'आरोग्य तपासणी पॅरामीटर्स' :
                 locale === 'hi' ? 'स्वास्थ्य जांच पैरामीटर' :
                 'Health Check Parameters'}
              </h3>

              {/* Parameters List */}
              <ul className="space-y-3 mb-6">
                {parameters.map((param, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-neutral-700">
                    <FaCheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                    {param[locale]}
                  </li>
                ))}
                <li className="flex items-center gap-2 text-sm text-neutral-500 italic">
                  {locale === 'mr' ? '+ आणखी 45 पॅरामीटर्स' :
                   locale === 'hi' ? '+ और 45 पैरामीटर' :
                   '+ 45 More Parameters'}
                </li>
              </ul>

              <button className="w-full bg-white hover:bg-neutral-50 text-primary-600 border border-primary-600 px-6 py-3 rounded-lg font-semibold transition-colors">
                {locale === 'mr' ? 'नमुना रिपोर्ट पहा' :
                 locale === 'hi' ? 'नमूना रिपोर्ट देखें' :
                 'View Sample Report'}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Technical Specifications Accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-neutral-50 rounded-lg border border-neutral-200 overflow-hidden mb-12"
        >
          <button
            onClick={() => setIsSpecsOpen(!isSpecsOpen)}
            className="w-full flex items-center justify-between p-6 hover:bg-neutral-100 transition-colors"
          >
            <span className="text-lg font-bold text-neutral-900">
              {locale === 'mr' ? 'तांत्रिक वैशिष्ट्ये' :
               locale === 'hi' ? 'तकनीकी विशिष्टताएं' :
               'Technical Specifications'}
            </span>
            {isSpecsOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          {isSpecsOpen && (
            <div className="px-6 pb-6 grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-neutral-900 mb-3">
                  {locale === 'mr' ? 'यंत्र तपशील' : locale === 'hi' ? 'मशीन विवरण' : 'Machine Details'}
                </h4>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• {locale === 'mr' ? 'डिजिटल टच स्क्रीन' : locale === 'hi' ? 'डिजिटल टच स्क्रीन' : 'Digital Touch Screen'}</li>
                  <li>• {locale === 'mr' ? 'वायरलेस कनेक्टिव्हिटी' : locale === 'hi' ? 'वायरलेस कनेक्टिविटी' : 'Wireless Connectivity'}</li>
                  <li>• {locale === 'mr' ? 'थर्मल प्रिंटर इनबिल्ट' : locale === 'hi' ? 'थर्मल प्रिंटर इनबिल्ट' : 'Thermal Printer Inbuilt'}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 mb-3">
                  {locale === 'mr' ? 'प्रमाणपत्रे' : locale === 'hi' ? 'प्रमाणपत्र' : 'Certifications'}
                </h4>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li>• NABL {locale === 'mr' ? 'मान्यताप्राप्त' : locale === 'hi' ? 'मान्यता प्राप्त' : 'Approved'}</li>
                  <li>• ISO 13485 {locale === 'mr' ? 'प्रमाणित' : locale === 'hi' ? 'प्रमाणित' : 'Certified'}</li>
                  <li>• CE {locale === 'mr' ? 'चिन्हांकित' : locale === 'hi' ? 'चिन्हांकित' : 'Marked'}</li>
                </ul>
              </div>
            </div>
          )}
        </motion.div>

        {/* Why Choose Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg p-8 lg:p-10 text-white text-center"
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            {locale === 'mr' ? 'आरोग्य तपासणी आता अधिक सुलभ' :
             locale === 'hi' ? 'स्वास्थ्य जांच अब और सुलभ' :
             'Health Checkup Made Accessible'}
          </h3>
          <p className="text-white/90 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto">
            {locale === 'mr' ?
              'NABL मान्यताप्राप्त तंत्रज्ञानासह, आता ग्रामीण भागातील प्रत्येक नागरिकाला दर्जेदार आरोग्य तपासणी सेवा उपलब्ध करून देण्याची संधी आहे. 90 सेकंदात अचूक रिपोर्ट आणि तत्काळ डॉक्टर सल्ला.' :
              locale === 'hi' ?
              'NABL मान्यता प्राप्त तकनीक के साथ, अब ग्रामीण क्षेत्रों के हर नागरिक को गुणवत्तापूर्ण स्वास्थ्य जांच सेवा उपलब्ध कराने का अवसर है। 90 सेकंड में सटीक रिपोर्ट और तत्काल डॉक्टर परामर्श।' :
              'With NABL approved technology, now there\'s an opportunity to provide quality health checkup services to every citizen in rural areas. Accurate reports in 90 seconds and instant doctor consultation.'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

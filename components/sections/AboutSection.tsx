'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCalendar, FaUsers, FaHandHoldingHeart, FaAward } from 'react-icons/fa';
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
}

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

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
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-2xl font-bold text-primary-700">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

function StatCard({ icon, value, suffix, label }: StatCardProps) {
  const { locale } = useLanguage();

  return (
    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-neutral-200 hover:border-primary-200 transition-colors">
      <div className="text-primary-600 mt-1">
        {icon}
      </div>
      <div>
        <AnimatedCounter value={value} suffix={suffix} />
        <div className="text-xs text-neutral-600 mt-1">
          {label[locale]}
        </div>
      </div>
    </div>
  );
}

export default function AboutSection() {
  const { locale } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    {
      icon: <FaCalendar className="w-5 h-5" />,
      value: 2002,
      label: {
        mr: 'स्थापना वर्ष',
        en: 'Year Founded',
        hi: 'स्थापना वर्ष'
      }
    },
    {
      icon: <FaHandHoldingHeart className="w-5 h-5" />,
      value: 100,
      suffix: '+',
      label: {
        mr: 'आरोग्य शिबिरे',
        en: 'Health Camps',
        hi: 'स्वास्थ्य शिविर'
      }
    },
    {
      icon: <FaUsers className="w-5 h-5" />,
      value: 50000,
      suffix: '+',
      label: {
        mr: 'सेवा केलेले नागरिक',
        en: 'People Served',
        hi: 'सेवा किए गए नागरिक'
      }
    },
    {
      icon: <FaAward className="w-5 h-5" />,
      value: 20,
      suffix: '+',
      label: {
        mr: 'अनुभवाची वर्षे',
        en: 'Years of Experience',
        hi: 'अनुभव के वर्ष'
      }
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12" ref={ref}>
          {/* Left Side - Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            {/* Section Label */}
            <div className="text-sm font-semibold text-primary-600 mb-4 uppercase tracking-wide">
              {locale === 'mr' ? 'आमच्याबद्दल' : locale === 'hi' ? 'हमारे बारे में' : 'About Us'}
            </div>

            {/* Headline */}
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
              {locale === 'mr' ? 'युनुस शेख - एक प्रेरणादायी प्रवास' :
               locale === 'hi' ? 'युनुस शेख - एक प्रेरणादायक यात्रा' :
               'Yunus Sheikh - An Inspiring Journey'}
            </h2>

            {/* Main Content */}
            <div className="space-y-4 text-neutral-700 leading-relaxed text-base lg:text-lg">
              <p>
                {locale === 'mr' ?
                  'युनुस शेख हे सोलापूर जिल्ह्यातील एक प्रेरणादायी उद्योजक आहेत. 2002 पासून त्यांनी आरोग्यसेवा क्षेत्रात समाजकार्याची सुरुवात केली. त्यांनी आयुर्वेदिक उपायांपैकी "सुवर्णप्राशन" सारख्या आरोग्य उपक्रमांची सुरुवात केली आणि "सुयश हेल्थ केअर"च्या माध्यमातून ग्रामीण भागातील नागरिकांपर्यंत मोफत आरोग्यसेवा पोहोचवण्याचा सतत प्रयत्न केला.' :
                  locale === 'hi' ?
                  'युनुस शेख सोलापुर जिले के एक प्रेरणादायक उद्यमी हैं। 2002 से उन्होंने स्वास्थ्य सेवा क्षेत्र में सामाजिक कार्य शुरू किया। उन्होंने "सुवर्णप्राशन" जैसे आयुर्वेदिक स्वास्थ्य कार्यक्रम शुरू किए और "सुयश हेल्थ केयर" के माध्यम से ग्रामीण क्षेत्रों के नागरिकों तक मुफ्त स्वास्थ्य सेवा पहुंचाने का निरंतर प्रयास किया।' :
                  'Yunus Sheikh is an inspiring entrepreneur from Solapur district. Since 2002, he has been involved in social work in the healthcare sector. He initiated Ayurvedic health programs like "Suvarnaprashan" and has continuously worked to provide free healthcare services to citizens in rural areas through "Suyash Health Care".'
                }
              </p>

              <p>
                {locale === 'mr' ?
                  'पुणे येथे येऊन त्यांनी पुणे ग्रामीण भागात अनेक आरोग्य शिबिरे यशस्वीपणे आयोजित केली असून, त्यांचे हे समाजोपयोगी कार्य आजही अखंडपणे सुरू आहे.' :
                  locale === 'hi' ?
                  'पुणे आकर उन्होंने पुणे ग्रामीण क्षेत्र में कई स्वास्थ्य शिविर सफलतापूर्वक आयोजित किए हैं, और उनका यह सामाजिक कार्य आज भी निरंतर जारी है।' :
                  'After coming to Pune, he has successfully organized numerous health camps in rural Pune, and this social welfare work continues uninterrupted to this day.'
                }
              </p>
            </div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 bg-white rounded-lg p-6 border border-primary-100"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaAward className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    {locale === 'mr' ? 'आमचे ध्येय' : locale === 'hi' ? 'हमारा उद्देश्य' : 'Our Mission'}
                  </h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">
                    {locale === 'mr' ?
                      'आता याच अनुभवाच्या जोरावर, युनुस शेख आपल्या सर्वांसाठी एक नवी व्यवसायाची संधी घेऊन आले आहेत. ही संधी म्हणजे केवळ उत्पन्नाचं साधन नाही, तर समाजासाठी काहीतरी करण्याची संधी देखील आहे.' :
                      locale === 'hi' ?
                      'अब इसी अनुभव के बल पर, युनुस शेख आप सभी के लिए एक नया व्यवसाय का अवसर लेकर आए हैं। यह अवसर केवल आय का साधन नहीं है, बल्कि समाज के लिए कुछ करने का अवसर भी है।' :
                      'Now, with this experience, Yunus Sheikh brings a new business opportunity for everyone. This opportunity is not just a means of income, but also a chance to do something for society.'
                    }
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Widgets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Stats Widget */}
            <div className="bg-white rounded-lg p-6 border border-neutral-200">
              <h3 className="text-lg font-bold text-neutral-900 mb-4">
                {locale === 'mr' ? 'आमची कामगिरी' : locale === 'hi' ? 'हमारी उपलब्धियां' : 'Our Achievements'}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat, index) => (
                  <StatCard key={index} {...stat} />
                ))}
              </div>
            </div>

            {/* Highlights Widget */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg p-6 text-white">
              <h3 className="text-lg font-bold text-white mb-4">
                {locale === 'mr' ? 'मुख्य वैशिष्ट्ये' : locale === 'hi' ? 'मुख्य विशेषताएं' : 'Key Highlights'}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary-200 mt-1">✓</span>
                  <span className="text-sm">
                    {locale === 'mr' ? 'आयुर्वेदिक सुवर्णप्राशन कार्यक्रम' :
                     locale === 'hi' ? 'आयुर्वेदिक सुवर्णप्राशन कार्यक्रम' :
                     'Ayurvedic Suvarnaprashan Program'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-200 mt-1">✓</span>
                  <span className="text-sm">
                    {locale === 'mr' ? 'ग्रामीण भागात मोफत आरोग्य सेवा' :
                     locale === 'hi' ? 'ग्रामीण क्षेत्रों में मुफ्त स्वास्थ्य सेवा' :
                     'Free Healthcare in Rural Areas'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-200 mt-1">✓</span>
                  <span className="text-sm">
                    {locale === 'mr' ? 'नियमित आरोग्य शिबिरे' :
                     locale === 'hi' ? 'नियमित स्वास्थ्य शिविर' :
                     'Regular Health Camps'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-200 mt-1">✓</span>
                  <span className="text-sm">
                    {locale === 'mr' ? '20+ वर्षांचा समाजसेवेचा अनुभव' :
                     locale === 'hi' ? '20+ वर्षों का सामाजिक सेवा अनुभव' :
                     '20+ Years of Social Service'}
                  </span>
                </li>
              </ul>
            </div>

            {/* Contact Widget */}
            <div className="bg-secondary-50 rounded-lg p-6 border border-secondary-100">
              <h3 className="text-lg font-bold text-neutral-900 mb-3">
                {locale === 'mr' ? 'संपर्क माहिती' : locale === 'hi' ? 'संपर्क जानकारी' : 'Contact Information'}
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {locale === 'mr' ?
                  'अधिक माहिती किंवा आरोग्य शिबिरांसाठी आमच्याशी संपर्क साधा.' :
                  locale === 'hi' ?
                  'अधिक जानकारी या स्वास्थ्य शिविरों के लिए हमसे संपर्क करें।' :
                  'Get in touch with us for more information or health camps.'}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

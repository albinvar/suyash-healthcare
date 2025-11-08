"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from '@/lib/i18n/LanguageContext';
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaUsers,
  FaRupeeSign,
  FaGraduationCap,
  FaHandshake,
  FaClock,
  FaChartLine,
  FaHeartbeat,
  FaBullseye,
  FaRocket,
  FaHome,
  FaCheckCircle,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function JobsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { locale } = useLanguage();
  const [selectedRole, setSelectedRole] = useState<'survey' | 'bde'>('survey');

  const roles = {
    survey: {
      title: {
        mr: 'आरोग्य तपासणी सर्वेक्षण प्रतिनिधी',
        en: 'Health Check-up Survey Representative',
        hi: 'स्वास्थ्य जांच सर्वेक्षण प्रतिनिधि'
      },
      description: {
        mr: 'समाजातील प्रत्येक घरात आरोग्य सेवा पोहोचवण्यासाठी आमच्या टीममध्ये सामील व्हा',
        en: 'Join our team to bring healthcare services to every household in the community',
        hi: 'समुदाय के हर घर में स्वास्थ्य सेवा पहुंचाने के लिए हमारी टीम में शामिल हों'
      },
      icon: FaHeartbeat,
      color: 'primary'
    },
    bde: {
      title: {
        mr: 'व्यवसाय विकास कार्यकारी',
        en: 'Business Development Executive',
        hi: 'व्यापार विकास कार्यकारी'
      },
      description: {
        mr: 'आरोग्य सेवा व्यवसाय वाढवण्यात आणि नवीन संधी शोधण्यात भूमिका बजावा',
        en: 'Play a key role in expanding healthcare business and exploring new opportunities',
        hi: 'स्वास्थ्य सेवा व्यवसाय का विस्तार करने और नई अवसरों की खोज में महत्वपूर्ण भूमिका निभाएं'
      },
      icon: FaChartLine,
      color: 'secondary'
    }
  };

  const responsibilities = {
    survey: [
      { mr: 'निश्चित क्षेत्रात आरोग्य तपासणी सर्वेक्षण करणे', en: 'Conduct health check-up surveys in assigned areas', hi: 'निर्धारित क्षेत्रों में स्वास्थ्य जांच सर्वेक्षण करना' },
      { mr: 'रुग्णांची आरोग्य माहिती अचूकपणे गोळा करणे', en: 'Accurately collect patient health data', hi: 'रोगियों के स्वास्थ्य डेटा को सटीक रूप से एकत्र करना' },
      { mr: 'सुयश हेल्थ केअरच्या सेवांबद्दल लोकांना माहिती देणे', en: 'Educate people about Suyash Health Care services', hi: 'सुयश हेल्थ केयर सेवाओं के बारे में लोगों को शिक्षित करना' },
      { mr: 'वैद्यकीय टीमशी समन्वय साधणे', en: 'Coordinate with medical team', hi: 'चिकित्सा टीम के साथ समन्वय करना' },
      { mr: 'दैनिक अहवाल आणि अंतर्दृष्टी सादर करणे', en: 'Submit daily reports and insights', hi: 'दैनिक रिपोर्ट और अंतर्दृष्टि प्रस्तुत करना' }
    ],
    bde: [
      { mr: 'नवीन व्यावसायिक संधी ओळखणे आणि विकसित करणे', en: 'Identify and develop new business opportunities', hi: 'नए व्यावसायिक अवसरों की पहचान और विकास करना' },
      { mr: 'ग्राहक संबंध व्यवस्थापन', en: 'Client relationship management', hi: 'ग्राहक संबंध प्रबंधन' },
      { mr: 'विक्री लक्ष्य साध्य करणे', en: 'Achieve sales targets', hi: 'बिक्री लक्ष्य हासिल करना' },
      { mr: 'बाजार संशोधन आणि विश्लेषण', en: 'Market research and analysis', hi: 'बाजार अनुसंधान और विश्लेषण' },
      { mr: 'भागीदारी आणि सहयोग विकसित करणे', en: 'Develop partnerships and collaborations', hi: 'साझेदारी और सहयोग विकसित करना' }
    ]
  };

  const benefits = [
    { icon: FaRupeeSign, label: { mr: 'प्रशिक्षणादरम्यान', en: 'During Training', hi: 'प्रशिक्षण के दौरान' }, value: '₹25,000/month' },
    { icon: FaRocket, label: { mr: 'प्रशिक्षणानंतर', en: 'After Training', hi: 'प्रशिक्षण के बाद' }, value: '₹50,000/month' },
    { icon: FaHome, label: { mr: 'निवास व प्रवास', en: 'Accommodation & Travel', hi: 'आवास और यात्रा' }, value: { mr: 'मोफत', en: 'Free', hi: 'मुफ्त' } },
    { icon: FaHandshake, label: { mr: 'कामाचे वातावरण', en: 'Work Environment', hi: 'कार्य वातावरण' }, value: { mr: 'सहकारी', en: 'Supportive', hi: 'सहयोगी' } }
  ];

  const eligibility = [
    { icon: FaGraduationCap, label: { mr: 'शिक्षण', en: 'Education', hi: 'शिक्षा' }, value: { mr: 'किमान 12वी उत्तीर्ण', en: 'Min. 12th Pass', hi: 'न्यूनतम 12वीं पास' } },
    { icon: FaClock, label: { mr: 'वय मर्यादा', en: 'Age Limit', hi: 'आयु सीमा' }, value: '22-45 years' },
    { icon: FaBullseye, label: { mr: 'अनुभव', en: 'Experience', hi: 'अनुभव' }, value: { mr: 'फ्रेशर्स स्वागत', en: 'Freshers Welcome', hi: 'फ्रेशर्स का स्वागत' } },
    { icon: FaUsers, label: { mr: 'रिक्त पदे', en: 'Vacancies', hi: 'रिक्तियां' }, value: '50+' }
  ];

  const handleApply = () => {
    window.location.href = "mailto:hr@suyashhealthcare.com?subject=Application for " +
      (selectedRole === 'survey' ? 'Health Survey Representative' : 'Business Development Executive');
  };

  const handleCall = () => {
    window.location.href = "tel:+919876543210";
  };

  return (
    <section
      ref={ref}
      className="relative py-16 lg:py-20 bg-gradient-to-b from-neutral-50 to-white overflow-hidden"
      id="jobs"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-40 h-40 border border-primary-600 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 border border-secondary-600 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-full mb-4">
            <FaBriefcase className="text-primary-600" />
            <span className="text-sm font-semibold text-primary-700">
              {locale === 'mr' ? 'करिअर संधी' : locale === 'hi' ? 'कैरियर अवसर' : 'Career Opportunities'}
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            {locale === 'mr' ? 'आमच्या वाढत्या टीममध्ये सामील व्हा' :
             locale === 'hi' ? 'हमारी बढ़ती टीम में शामिल हों' :
             'Join Our Growing Team'}
          </h2>

          <p className="text-base text-neutral-600 max-w-2xl mx-auto">
            {locale === 'mr' ? 'सुयश हेल्थ केअर समाजातील प्रत्येकापर्यंत दर्जेदार आरोग्य सेवा पोहोचवण्यासाठी उत्साही व्यक्तींना शोधत आहे' :
             locale === 'hi' ? 'सुयश हेल्थ केयर समुदाय के हर व्यक्ति तक गुणवत्तापूर्ण स्वास्थ्य सेवा पहुंचाने के लिए उत्साही व्यक्तियों की तलाश कर रहा है' :
             'Suyash Health Care is looking for passionate individuals to deliver quality healthcare to every member of the community'}
          </p>
        </motion.div>

        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column - Job Roles */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            {/* Role Selector Tabs */}
            <div className="bg-white rounded-lg p-2 shadow-sm mb-6 flex gap-2">
              {Object.entries(roles).map(([key, role]) => (
                <button
                  key={key}
                  onClick={() => setSelectedRole(key as 'survey' | 'bde')}
                  className={`flex-1 py-3 px-4 rounded-md transition-all duration-200 ${
                    selectedRole === key
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'bg-white text-neutral-600 hover:bg-neutral-50'
                  }`}
                >
                  <role.icon className="w-5 h-5 mx-auto mb-1" />
                  <span className="text-xs font-medium">
                    {key === 'survey'
                      ? (locale === 'mr' ? 'सर्वेक्षण प्रतिनिधी' : locale === 'hi' ? 'सर्वेक्षण प्रतिनिधि' : 'Survey Rep')
                      : (locale === 'mr' ? 'व्यवसाय विकास' : locale === 'hi' ? 'व्यापार विकास' : 'Business Dev')}
                  </span>
                </button>
              ))}
            </div>

            {/* Selected Role Details */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6 text-white">
                <div className="flex items-start gap-4">
                  {selectedRole === 'survey' ? (
                    <FaHeartbeat className="w-8 h-8 flex-shrink-0 mt-1" />
                  ) : (
                    <FaChartLine className="w-8 h-8 flex-shrink-0 mt-1" />
                  )}
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      {roles[selectedRole].title[locale]}
                    </h3>
                    <p className="text-sm text-white/90">
                      {roles[selectedRole].description[locale]}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Location */}
                <div className="flex items-center gap-3 text-sm text-neutral-600 mb-6 pb-6 border-b border-neutral-100">
                  <FaMapMarkerAlt className="text-primary-600" />
                  <span>Swargate, Pune</span>
                </div>

                {/* Responsibilities */}
                <h4 className="font-semibold text-neutral-900 mb-4">
                  {locale === 'mr' ? 'मुख्य जबाबदाऱ्या' : locale === 'hi' ? 'मुख्य जिम्मेदारियां' : 'Key Responsibilities'}
                </h4>
                <ul className="space-y-3 mb-6">
                  {responsibilities[selectedRole].map((resp, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                      <FaCheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{resp[locale]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="bg-white rounded-lg p-4 border border-neutral-200"
                >
                  <benefit.icon className="w-5 h-5 text-primary-600 mb-2" />
                  <p className="text-xs text-neutral-600 mb-1">
                    {typeof benefit.label === 'object' ? benefit.label[locale] : benefit.label}
                  </p>
                  <p className="font-semibold text-sm text-neutral-900">
                    {typeof benefit.value === 'object' ? benefit.value[locale] : benefit.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Application Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7"
          >
            {/* Eligibility Card */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg p-6 mb-6 shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-6">
                {locale === 'mr' ? 'पात्रता निकष' : locale === 'hi' ? 'पात्रता मानदंड' : 'Eligibility Criteria'}
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {eligibility.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-white/80 mb-0.5">
                        {typeof item.label === 'object' ? item.label[locale] : item.label}
                      </p>
                      <p className="text-sm font-medium text-white">
                        {typeof item.value === 'object' ? item.value[locale] : item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Join Us */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg shadow-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                {locale === 'mr' ? 'आमच्यात सामील व्हा का?' :
                 locale === 'hi' ? 'हमसे क्यों जुड़ें?' :
                 'Why Join Us?'}
              </h3>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                    <FaChartLine className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-medium text-white mb-1">
                    {locale === 'mr' ? 'करिअर वाढ' : locale === 'hi' ? 'कैरियर विकास' : 'Career Growth'}
                  </h4>
                  <p className="text-sm text-white/80">
                    {locale === 'mr' ? 'व्यावसायिक विकासाच्या उत्कृष्ट संधी' :
                     locale === 'hi' ? 'पेशेवर विकास के उत्कृष्ट अवसर' :
                     'Excellent opportunities for professional development'}
                  </p>
                </div>

                <div>
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                    <FaUsers className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-medium text-white mb-1">
                    {locale === 'mr' ? 'टीम वातावरण' : locale === 'hi' ? 'टीम वातावरण' : 'Team Environment'}
                  </h4>
                  <p className="text-sm text-white/80">
                    {locale === 'mr' ? 'सहयोगी आणि समर्थनकारी कार्य संस्कृती' :
                     locale === 'hi' ? 'सहयोगी और सहायक कार्य संस्कृति' :
                     'Collaborative and supportive work culture'}
                  </p>
                </div>

                <div>
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                    <FaHeartbeat className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-medium text-white mb-1">
                    {locale === 'mr' ? 'सामाजिक प्रभाव' : locale === 'hi' ? 'सामाजिक प्रभाव' : 'Social Impact'}
                  </h4>
                  <p className="text-sm text-white/80">
                    {locale === 'mr' ? 'समाजात सकारात्मक बदल घडवा' :
                     locale === 'hi' ? 'समाज में सकारात्मक बदलाव लाएं' :
                     'Make a positive difference in society'}
                  </p>
                </div>

                <div>
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                    <FaGraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-medium text-white mb-1">
                    {locale === 'mr' ? 'प्रशिक्षण कार्यक्रम' : locale === 'hi' ? 'प्रशिक्षण कार्यक्रम' : 'Training Program'}
                  </h4>
                  <p className="text-sm text-white/80">
                    {locale === 'mr' ? 'संपूर्ण प्रशिक्षण आणि कौशल्य विकास' :
                     locale === 'hi' ? 'व्यापक प्रशिक्षण और कौशल विकास' :
                     'Comprehensive training and skill development'}
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-2">
                {locale === 'mr' ? 'आजच अर्ज करा!' : locale === 'hi' ? 'आज ही आवेदन करें!' : 'Apply Today!'}
              </h3>
              <p className="text-sm text-white/90 mb-6">
                {locale === 'mr' ? 'या संधीचा लाभ घ्या आणि आमच्या मिशनचा भाग बना' :
                 locale === 'hi' ? 'इस अवसर का लाभ उठाएं और हमारे मिशन का हिस्सा बनें' :
                 'Take advantage of this opportunity and be part of our mission'}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleApply}
                  className="flex-1 bg-white text-primary-600 hover:bg-neutral-50 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <FaEnvelope />
                  {locale === 'mr' ? 'रिज्यूमे पाठवा' : locale === 'hi' ? 'रिज्यूमे भेजें' : 'Send Resume'}
                </button>

                <button
                  onClick={handleCall}
                  className="flex-1 bg-primary-700 hover:bg-primary-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <FaPhone />
                  {locale === 'mr' ? 'संपर्क करा' : locale === 'hi' ? 'संपर्क करें' : 'Contact Us'}
                </button>
              </div>

              <div className="mt-4 pt-4 border-t border-white/20 flex items-center justify-between text-xs text-white/80">
                <span>{locale === 'mr' ? 'ईमेल:' : locale === 'hi' ? 'ईमेल:' : 'Email:'} hr@suyashhealthcare.com</span>
                <span>{locale === 'mr' ? 'फोन:' : locale === 'hi' ? 'फोन:' : 'Phone:'} +91 98765 43210</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 p-4 bg-neutral-50 rounded-lg"
        >
          <p className="text-sm text-neutral-600">
            <span className="font-medium text-neutral-700">
              {locale === 'mr' ? 'टीप:' : locale === 'hi' ? 'नोट:' : 'Note:'}
            </span>{' '}
            {locale === 'mr' ? 'कोणतेही मार्केटिंग कार्य नाही • सर्व लिंगांसाठी समान संधी • मोफत निवास आणि प्रवास सुविधा' :
             locale === 'hi' ? 'कोई मार्केटिंग कार्य नहीं • सभी लिंगों के लिए समान अवसर • मुफ्त आवास और यात्रा सुविधा' :
             'No marketing work involved • Equal opportunities for all genders • Free accommodation and travel facilities'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

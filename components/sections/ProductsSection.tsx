'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  FaTimes,
  FaCheckCircle,
  FaShoppingCart,
  FaWhatsapp,
  FaLeaf,
  FaAward
} from 'react-icons/fa';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface Product {
  id: number;
  name: {
    mr: string;
    en: string;
    hi: string;
  };
  shortDescription: {
    mr: string;
    en: string;
    hi: string;
  };
  fullDescription: {
    mr: string;
    en: string;
    hi: string;
  };
  benefits: {
    mr: string[];
    en: string[];
    hi: string[];
  };
  ingredients: {
    mr: string;
    en: string;
    hi: string;
  };
  howToUse: {
    mr: string;
    en: string;
    hi: string;
  };
  price: string;
  category: 'ayurvedic' | 'healthcare' | 'immunity';
  image: string;
  inStock: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: {
      mr: 'सुयश डायबॉन नोनी सिरप',
      en: 'Suyash Dybon Noni Syrup',
      hi: 'सुयश डायबॉन नोनी सिरप'
    },
    shortDescription: {
      mr: 'नोनी फळापासून बनवलेले प्रीमियम आयुर्वेदिक पूरक',
      en: 'Premium Ayurvedic supplement made from Noni fruit',
      hi: 'नोनी फल से बना प्रीमियम आयुर्वेदिक सप्लिमेंट'
    },
    fullDescription: {
      mr: 'नोनी फळापासून (Morinda citrifolia) बनवलेले हे प्रीमियम आयुर्वेदिक पूरक पारंपरिक शहाणपणाला आधुनिक प्रक्रियेसह एकत्र करते. 400ml फॅमिली पॅक 100% नैसर्गिक नोनी अर्कासह येते.',
      en: 'A premium Ayurvedic health supplement made from Noni fruit (Morinda citrifolia), combining traditional wisdom with modern processing. The 400ml family pack features a 100% Natural Noni extract formulation.',
      hi: 'नोनी फल (Morinda citrifolia) से बना यह प्रीमियम आयुर्वेदिक स्वास्थ्य पूरक पारंपरिक ज्ञान को आधुनिक प्रक्रिया के साथ मिलाता है। 400ml फैमिली पैक में 100% प्राकृतिक नोनी अर्क है।'
    },
    benefits: {
      mr: ['नैसर्गिक रोगप्रतिकारक शक्ती वाढवते', 'पाचन आरोग्य सुधारते', 'ऊर्जा आणि तग वाढवते', 'अँटीऑक्सिडंट्स आणि व्हिटॅमिन्सने समृद्ध'],
      en: ['Boosts natural immunity', 'Supports digestive health', 'Promotes energy and stamina', 'Rich in antioxidants and vitamins'],
      hi: ['प्राकृतिक प्रतिरक्षा बढ़ाता है', 'पाचन स्वास्थ्य सुधारता है', 'ऊर्जा और सहनशक्ति बढ़ाता है', 'एंटीऑक्सिडेंट और विटामिन से समृद्ध']
    },
    ingredients: {
      mr: '100% नैसर्गिक नोनी अर्क',
      en: '100% Natural Noni extract',
      hi: '100% प्राकृतिक नोनी अर्क'
    },
    howToUse: {
      mr: 'प्रौढ: दिवसातून दोनदा 15-30ml, मुले (5 वर्षांपेक्षा जास्त): दिवसातून दोनदा 10-15ml, रिकाम्या पोटी घ्यावे',
      en: 'Adults: 15-30ml twice daily, Children (above 5 years): 10-15ml twice daily, Best consumed on empty stomach',
      hi: 'वयस्क: दिन में दो बार 15-30ml, बच्चे (5 साल से अधिक): दिन में दो बार 10-15ml, खाली पेट लें'
    },
    price: '₹999',
    category: 'ayurvedic',
    image: '/assets/images/products/dybon-noni-syrup.png',
    inStock: true
  },
  {
    id: 2,
    name: {
      mr: 'सुयश VE-COVER सिरप',
      en: 'Suyash VE-COVER Syrup',
      hi: 'सुयश VE-COVER सिरप'
    },
    shortDescription: {
      mr: 'वर्तणूक आरोग्य समर्थनासाठी आयुर्वेदिक सूत्र',
      en: 'Ayurvedic formulation for behavioral health support',
      hi: 'व्यवहार स्वास्थ्य सहायता के लिए आयुर्वेदिक फॉर्मूला'
    },
    fullDescription: {
      mr: 'व्यसनमुक्ती आणि वर्तणूक आरोग्य समर्थनासाठी तयार केलेले आयुर्वेदिक द्रव पूरक, पारंपरिक औषधी घटक वापरून आधुनिक कल्याण तत्त्वांसह.',
      en: 'An Ayurvedic liquid supplement formulated to assist individuals in addiction recovery and behavioral health support, utilizing traditional herbal ingredients with modern wellness principles.',
      hi: 'व्यसन मुक्ति और व्यवहार स्वास्थ्य सहायता के लिए तैयार आयुर्वेदिक तरल पूरक, पारंपरिक जड़ी-बूटी सामग्री का उपयोग करते हुए आधुनिक कल्याण सिद्धांतों के साथ।'
    },
    benefits: {
      mr: ['100% नैसर्गिक औषधी सूत्र', 'वर्तणूक कल्याणास समर्थन', 'पारंपरिक आयुर्वेदिक दृष्टीकोन', 'FSSAI मंजूर'],
      en: ['100% Natural herbal formulation', 'Supports behavioral wellness', 'Traditional Ayurvedic approach', 'FSSAI approved'],
      hi: ['100% प्राकृतिक हर्बल फॉर्मूलेशन', 'व्यवहार कल्याण का समर्थन करता है', 'पारंपरिक आयुर्वेदिक दृष्टिकोण', 'FSSAI मंजूर']
    },
    ingredients: {
      mr: 'आयुर्वेदिक तत्त्वांनुसार नैसर्गिक औषधी घटक',
      en: 'Natural herbal ingredients following Ayurvedic principles',
      hi: 'आयुर्वेदिक सिद्धांतों के अनुसार प्राकृतिक हर्बल सामग्री'
    },
    howToUse: {
      mr: 'सेवन करण्यापूर्वी व्यावसायिक आरोग्य मार्गदर्शन घ्यावे, पात्र व्यावसायिकांच्या सल्ल्यानुसार',
      en: 'Seek professional healthcare guidance before consumption, Follow dosage recommendations from qualified practitioners',
      hi: 'सेवन से पहले पेशेवर स्वास्थ्य मार्गदर्शन लें, योग्य चिकित्सकों की सिफारिशों का पालन करें'
    },
    price: '₹999',
    category: 'healthcare',
    image: '/assets/images/products/ve-cover-syrup.png',
    inStock: true
  },
  {
    id: 3,
    name: {
      mr: 'सुयश स्लिम फिट बूस्ट कॅप्सूल',
      en: 'Suyash Slim Fit Boost Capsules',
      hi: 'सुयश स्लिम फिट बूस्ट कैप्सूल'
    },
    shortDescription: {
      mr: 'नैसर्गिक चरबी बर्न आणि ऊर्जा वर्धक',
      en: 'Natural fat burning and energy enhancer',
      hi: 'प्राकृतिक वसा जलाने और ऊर्जा बढ़ाने वाला'
    },
    fullDescription: {
      mr: 'प्रगत सूत्रासह नैसर्गिक चरबी बर्न आणि ऊर्जा वाढ समर्थन करण्यासाठी डिझाइन केलेले 60 सेंद्रिय कॅप्सूल असलेले प्रीमियम वजन व्यवस्थापन पूरक.',
      en: 'A premium weight management supplement containing 60 organic capsules designed to support natural fat burning and energy enhancement through an advanced formula.',
      hi: '60 ऑर्गेनिक कैप्सूल युक्त प्रीमियम वजन प्रबंधन पूरक जो उन्नत फॉर्मूले के माध्यम से प्राकृतिक वसा जलाने और ऊर्जा वृद्धि का समर्थन करने के लिए डिज़ाइन किया गया है।'
    },
    benefits: {
      mr: ['वेगाने चरबी जाळते', 'ऊर्जा पातळी वाढवते', 'चरबी इंधन म्हणून वापरते', '100% सेंद्रिय सूत्र'],
      en: ['Burn fat fast', 'Increase energy levels', 'Utilizes fat as fuel', '100% organic formulation'],
      hi: ['तेजी से वसा जलाता है', 'ऊर्जा स्तर बढ़ाता है', 'वसा को ईंधन के रूप में उपयोग करता है', '100% ऑर्गेनिक फॉर्मूलेशन']
    },
    ingredients: {
      mr: '100% सेंद्रिय प्रमाणित घटक',
      en: '100% Organic certified ingredients',
      hi: '100% ऑर्गेनिक प्रमाणित सामग्री'
    },
    howToUse: {
      mr: 'पॅकेजिंगवर निर्देशित केल्याप्रमाणे घ्यावे, निरोगी आहार आणि व्यायामासह सर्वोत्तम परिणाम',
      en: 'Take as directed on packaging, Best results when paired with healthy diet and exercise',
      hi: 'पैकेजिंग पर निर्देशित अनुसार लें, स्वस्थ आहार और व्यायाम के साथ सर्वोत्तम परिणाम'
    },
    price: '₹999',
    category: 'healthcare',
    image: '/assets/images/products/slim-fit-capsules.png',
    inStock: true
  },
  {
    id: 4,
    name: {
      mr: 'सुयश डायबॉन पावडर',
      en: 'Suyash Dybon Powder',
      hi: 'सुयश डायबॉन पाउडर'
    },
    shortDescription: {
      mr: 'संपूर्ण मधुमेह व्यवस्थापन सूत्र',
      en: 'Complete Diabetes Management Formula',
      hi: 'संपूर्ण मधुमेह प्रबंधन फॉर्मूला'
    },
    fullDescription: {
      mr: 'मधुमेह व्यवस्थापनासाठी विशेष तयार केलेले आयुर्वेदिक मालकी औषध. निरोगी रक्तातील साखर पातळी समर्थन करण्यासाठी नैसर्गिक औषधी मिश्रण. 300 ग्रॅम औषधी पावडर.',
      en: 'Ayurvedic proprietary medicine specially formulated for complete diabetes management. Natural herbal blend to support healthy blood sugar levels. 300 gram herbal powder.',
      hi: 'पूर्ण मधुमेह प्रबंधन के लिए विशेष रूप से तैयार आयुर्वेदिक स्वामित्व औषधि। स्वस्थ रक्त शर्करा स्तर का समर्थन करने के लिए प्राकृतिक हर्बल मिश्रण। 300 ग्राम हर्बल पाउडर।'
    },
    benefits: {
      mr: ['निरोगी रक्तातील साखर पातळी समर्थन', 'मधुमेह व्यवस्थापनास मदत', 'स्वादुपिंडाच्या आरोग्याला प्रोत्साहन', 'चयापचय कार्यास समर्थन'],
      en: ['Supports healthy blood sugar levels', 'Aids in diabetes management', 'Promotes pancreatic health', 'Supports metabolic function'],
      hi: ['स्वस्थ रक्त शर्करा स्तर का समर्थन करता है', 'मधुमेह प्रबंधन में सहायता', 'अग्नाशयी स्वास्थ्य को बढ़ावा देता है', 'चयापचय कार्य का समर्थन करता है']
    },
    ingredients: {
      mr: 'नोनी (Morinda citrifolia), पारंपरिक मधुमेह औषधी, नैसर्गिक अँटीऑक्सिडंट्स',
      en: 'Noni (Morinda citrifolia), Traditional diabetic herbs, Natural antioxidants',
      hi: 'नोनी (Morinda citrifolia), पारंपरिक मधुमेह जड़ी-बूटियां, प्राकृतिक एंटीऑक्सिडेंट'
    },
    howToUse: {
      mr: '5-10gm पावडर कोमट पाण्यात मिसळा. जेवणापूर्वी दिवसातून दोनदा घ्यावे किंवा पात्र आयुर्वेदिक व्यावसायिकांच्या सल्ल्यानुसार',
      en: 'Mix 5-10gm powder in warm water. Take twice daily before meals or as directed by qualified Ayurvedic practitioner',
      hi: '5-10gm पाउडर को गुनगुने पानी में मिलाएं। भोजन से पहले दिन में दो बार लें या योग्य आयुर्वेदिक चिकित्सक के निर्देशानुसार'
    },
    price: '₹999',
    category: 'healthcare',
    image: '/assets/images/products/dybon-powder.jpg',
    inStock: true
  }
];

export default function ProductsSection() {
  const { locale } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = locale === 'mr' ? 'नाव आवश्यक आहे' : locale === 'hi' ? 'नाम आवश्यक है' : 'Name is required';
    }

    if (!formData.phone.trim()) {
      errors.phone = locale === 'mr' ? 'फोन नंबर आवश्यक आहे' : locale === 'hi' ? 'फोन नंबर आवश्यक है' : 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = locale === 'mr' ? '10 अंकी फोन नंबर असावा' : locale === 'hi' ? '10 अंकों का फोन नंबर होना चाहिए' : 'Phone must be 10 digits';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = locale === 'mr' ? 'वैध ईमेल टाका' : locale === 'hi' ? 'वैध ईमेल दर्ज करें' : 'Enter valid email';
    }

    if (!formData.city.trim()) {
      errors.city = locale === 'mr' ? 'शहर आवश्यक आहे' : locale === 'hi' ? 'शहर आवश्यक है' : 'City is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);
      setFormSubmitted(true);

      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', phone: '', email: '', city: '', message: '' });
        setSelectedProduct(null);
      }, 3000);
    }
  };

  return (
    <section id="products" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Minimal */}
        <div className="text-center mb-12" ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4"
          >
            {locale === 'mr' ? 'आमची उत्पादने' : locale === 'hi' ? 'हमारे उत्पाद' : 'Our Products'}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base text-neutral-600 max-w-2xl mx-auto"
          >
            {locale === 'mr' ?
              'आयुर्वेदिक आणि नैसर्गिक आरोग्य उत्पादने' :
             locale === 'hi' ?
              'आयुर्वेदिक और प्राकृतिक स्वास्थ्य उत्पाद' :
             'Ayurvedic and Natural Health Products'}
          </motion.p>
        </div>

        {/* Products Grid - Minimal Design */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              {/* Product Card - Minimal */}
              <div
                className="bg-white border border-neutral-200 hover:border-neutral-300 rounded-lg overflow-hidden cursor-pointer transition-all duration-200 h-full flex flex-col"
                onClick={() => setSelectedProduct(product)}
              >
                {/* Image */}
                <div className="relative aspect-square bg-neutral-50">
                  <Image
                    src={product.image}
                    alt={product.name[locale]}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-semibold text-neutral-900 text-base mb-1">
                    {product.name[locale]}
                  </h3>

                  <p className="text-sm text-neutral-600 mb-3 line-clamp-2">
                    {product.shortDescription[locale]}
                  </p>

                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-lg font-semibold text-neutral-900">
                      {product.price}
                    </span>

                    <button className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors">
                      {locale === 'mr' ? 'पहा →' : locale === 'hi' ? 'देखें →' : 'View →'}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section - Minimal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-neutral-600 mb-3">
            {locale === 'mr' ? 'अधिक माहितीसाठी' :
             locale === 'hi' ? 'अधिक जानकारी के लिए' :
             'For more information'}
          </p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
          >
            <FaWhatsapp className="text-lg" />
            <span>WhatsApp</span>
          </a>
        </motion.div>

        {/* Product Detail Modal - Clean & Responsive */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={() => !formSubmitted && setSelectedProduct(null)}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="sticky top-0 bg-white border-b border-neutral-200 px-6 py-4 flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-neutral-900">
                    {selectedProduct.name[locale]}
                  </h2>
                  <button
                    onClick={() => !formSubmitted && setSelectedProduct(null)}
                    className="p-1 hover:bg-neutral-100 rounded transition-colors"
                  >
                    <FaTimes className="w-4 h-4 text-neutral-600" />
                  </button>
                </div>

                <div className="p-6">
                  {/* Product Image - Mobile Responsive */}
                  <div className="relative aspect-[4/3] sm:aspect-video bg-neutral-50 rounded-lg overflow-hidden mb-6">
                    <Image
                      src={selectedProduct.image}
                      alt={selectedProduct.name[locale]}
                      fill
                      className="object-contain p-4 sm:p-6"
                      sizes="(max-width: 768px) 100vw, 600px"
                      priority
                    />
                  </div>

                  {/* Price & Stock */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-semibold text-neutral-900">
                      {selectedProduct.price}
                    </span>
                    {selectedProduct.inStock && (
                      <span className="text-sm text-green-600">
                        {locale === 'mr' ? '✓ उपलब्ध' : locale === 'hi' ? '✓ उपलब्ध' : '✓ In Stock'}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-neutral-700 leading-relaxed mb-6">
                    {selectedProduct.fullDescription[locale]}
                  </p>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h3 className="font-medium text-neutral-900 mb-3">
                      {locale === 'mr' ? 'फायदे' : locale === 'hi' ? 'लाभ' : 'Benefits'}
                    </h3>
                    <ul className="space-y-2">
                      {selectedProduct.benefits[locale].map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                          <FaCheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ingredients & Usage - Collapsible on Mobile */}
                  <details className="mb-6 border border-neutral-200 rounded-lg">
                    <summary className="px-4 py-3 font-medium text-sm text-neutral-900 cursor-pointer hover:bg-neutral-50">
                      {locale === 'mr' ? 'घटक आणि वापर' : locale === 'hi' ? 'सामग्री और उपयोग' : 'Ingredients & Usage'}
                    </summary>
                    <div className="px-4 pb-4 pt-2 space-y-4 text-sm text-neutral-600">
                      <div>
                        <span className="font-medium text-neutral-700">
                          {locale === 'mr' ? 'घटक:' : locale === 'hi' ? 'सामग्री:' : 'Ingredients:'}
                        </span>
                        <p className="mt-1">{selectedProduct.ingredients[locale]}</p>
                      </div>
                      <div>
                        <span className="font-medium text-neutral-700">
                          {locale === 'mr' ? 'वापर:' : locale === 'hi' ? 'उपयोग:' : 'Usage:'}
                        </span>
                        <p className="mt-1">{selectedProduct.howToUse[locale]}</p>
                      </div>
                    </div>
                  </details>

                  {/* Contact Form - Simplified */}
                  {formSubmitted ? (
                    <motion.div
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      className="text-center py-8"
                    >
                      <FaCheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                      <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                        {locale === 'mr' ? 'धन्यवाद!' : locale === 'hi' ? 'धन्यवाद!' : 'Thank You!'}
                      </h3>
                      <p className="text-sm text-neutral-600">
                        {locale === 'mr' ? 'आम्ही लवकरच संपर्क करू' :
                         locale === 'hi' ? 'हम जल्द ही संपर्क करेंगे' :
                         'We will contact you soon'}
                      </p>
                    </motion.div>
                  ) : (
                    <div>
                      <h3 className="font-medium text-neutral-900 mb-4">
                        {locale === 'mr' ? 'ऑर्डर करा' : locale === 'hi' ? 'ऑर्डर करें' : 'Order Now'}
                      </h3>

                      <form onSubmit={handleSubmit} className="space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <input
                              type="text"
                              placeholder={locale === 'mr' ? 'नाव *' : locale === 'hi' ? 'नाम *' : 'Name *'}
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className={`w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 ${
                                formErrors.name ? 'border-red-500' : 'border-neutral-300'
                              }`}
                            />
                            {formErrors.name && (
                              <p className="text-red-500 text-xs mt-0.5">{formErrors.name}</p>
                            )}
                          </div>

                          <div>
                            <input
                              type="tel"
                              placeholder={locale === 'mr' ? 'फोन *' : locale === 'hi' ? 'फोन *' : 'Phone *'}
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className={`w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 ${
                                formErrors.phone ? 'border-red-500' : 'border-neutral-300'
                              }`}
                            />
                            {formErrors.phone && (
                              <p className="text-red-500 text-xs mt-0.5">{formErrors.phone}</p>
                            )}
                          </div>

                          <div>
                            <input
                              type="email"
                              placeholder={locale === 'mr' ? 'ईमेल' : locale === 'hi' ? 'ईमेल' : 'Email'}
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className={`w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 ${
                                formErrors.email ? 'border-red-500' : 'border-neutral-300'
                              }`}
                            />
                            {formErrors.email && (
                              <p className="text-red-500 text-xs mt-0.5">{formErrors.email}</p>
                            )}
                          </div>

                          <div>
                            <input
                              type="text"
                              placeholder={locale === 'mr' ? 'शहर *' : locale === 'hi' ? 'शहर *' : 'City *'}
                              value={formData.city}
                              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                              className={`w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 ${
                                formErrors.city ? 'border-red-500' : 'border-neutral-300'
                              }`}
                            />
                            {formErrors.city && (
                              <p className="text-red-500 text-xs mt-0.5">{formErrors.city}</p>
                            )}
                          </div>
                        </div>

                        <textarea
                          placeholder={locale === 'mr' ? 'संदेश' : locale === 'hi' ? 'संदेश' : 'Message'}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          rows={2}
                          className="w-full px-3 py-2 text-sm border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 resize-none"
                        />

                        <div className="flex gap-3 pt-2">
                          <button
                            type="submit"
                            className="flex-1 bg-neutral-900 hover:bg-neutral-800 text-white py-2.5 rounded-md font-medium text-sm transition-colors"
                          >
                            {locale === 'mr' ? 'ऑर्डर पाठवा' : locale === 'hi' ? 'ऑर्डर भेजें' : 'Submit Order'}
                          </button>
                          <a
                            href="https://wa.me/919876543210"
                            className="flex-1 border border-green-600 text-green-600 hover:bg-green-50 py-2.5 rounded-md font-medium text-sm transition-colors text-center"
                          >
                            WhatsApp
                          </a>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

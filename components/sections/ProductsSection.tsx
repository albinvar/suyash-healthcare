'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  FaTimes,
  FaCheckCircle,
  FaShoppingCart,
  FaWhatsapp,
  FaFacebook
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
      mr: 'सुवर्णप्राशन',
      en: 'Suvarnaprashan',
      hi: 'सुवर्णप्राशन'
    },
    shortDescription: {
      mr: 'लहान मुलांसाठी आयुर्वेदिक इम्युनिटी बूस्टर',
      en: 'Ayurvedic immunity booster for children',
      hi: 'बच्चों के लिए आयुर्वेदिक इम्यूनिटी बूस्टर'
    },
    fullDescription: {
      mr: 'सुवर्णप्राशन हे प्राचीन आयुर्वेदिक औषध आहे जे मुलांची रोगप्रतिकारक शक्ती वाढवते आणि त्यांच्या एकूण आरोग्यासाठी फायदेशीर आहे.',
      en: 'Suvarnaprashan is an ancient Ayurvedic medicine that boosts children\'s immunity and is beneficial for their overall health.',
      hi: 'सुवर्णप्राशन एक प्राचीन आयुर्वेदिक औषधि है जो बच्चों की प्रतिरक्षा बढ़ाती है और उनके संपूर्ण स्वास्थ्य के लिए लाभदायक है।'
    },
    benefits: {
      mr: ['रोगप्रतिकारक शक्ती वाढवते', 'बुद्धिमत्ता वाढवते', 'स्मरणशक्ती सुधारते', 'सर्वसाधारण आरोग्य सुधारते'],
      en: ['Boosts immunity', 'Enhances intelligence', 'Improves memory', 'Improves overall health'],
      hi: ['प्रतिरक्षा बढ़ाता है', 'बुद्धि बढ़ाता है', 'स्मृति सुधारता है', 'सम्पूर्ण स्वास्थ्य सुधारता है']
    },
    ingredients: {
      mr: 'सुवर्ण भस्म, घृत, मध, विविध आयुर्वेदिक औषधी',
      en: 'Gold ash, Ghee, Honey, Various Ayurvedic herbs',
      hi: 'स्वर्ण भस्म, घी, शहद, विभिन्न आयुर्वेदिक जड़ी-बूटियां'
    },
    howToUse: {
      mr: 'दर महिन्याच्या पुष्य नक्षत्रात सकाळी रिक्त पोटी द्यावे',
      en: 'Give on empty stomach in the morning during Pushya Nakshatra each month',
      hi: 'प्रत्येक महीने पुष्य नक्षत्र में सुबह खाली पेट दें'
    },
    price: 'संपर्क करा',
    category: 'ayurvedic',
    image: '/assets/images/products/product-placeholder.jpg',
    inStock: true
  },
  {
    id: 2,
    name: {
      mr: 'इम्युनिटी बूस्टर',
      en: 'Immunity Booster',
      hi: 'इम्यूनिटी बूस्टर'
    },
    shortDescription: {
      mr: 'नैसर्गिक रोगप्रतिकारक शक्ती वाढवणारे औषध',
      en: 'Natural immunity enhancing medicine',
      hi: 'प्राकृतिक प्रतिरक्षा बढ़ाने वाली दवा'
    },
    fullDescription: {
      mr: 'सर्व वयोगटातील लोकांसाठी योग्य असलेले हे औषध रोगप्रतिकारक शक्ती वाढवून आरोग्य सुधारते.',
      en: 'Suitable for all age groups, this medicine improves health by boosting immunity.',
      hi: 'सभी आयु वर्ग के लोगों के लिए उपयुक्त, यह दवा प्रतिरक्षा बढ़ाकर स्वास्थ्य में सुधार करती है।'
    },
    benefits: {
      mr: ['रोगप्रतिकारक शक्ती वाढवते', 'ऊर्जा देते', 'थकवा कमी करते', 'संक्रमणापासून संरक्षण'],
      en: ['Boosts immunity', 'Provides energy', 'Reduces fatigue', 'Protection from infections'],
      hi: ['प्रतिरक्षा बढ़ाता है', 'ऊर्जा देता है', 'थकान कम करता है', 'संक्रमण से सुरक्षा']
    },
    ingredients: {
      mr: 'गिलोय, तुळस, आंवळा, अश्वगंधा',
      en: 'Giloy, Tulsi, Amla, Ashwagandha',
      hi: 'गिलोय, तुलसी, आंवला, अश्वगंधा'
    },
    howToUse: {
      mr: 'दिवसातून दोनदा, जेवणानंतर',
      en: 'Twice daily, after meals',
      hi: 'दिन में दो बार, भोजन के बाद'
    },
    price: '₹299',
    category: 'immunity',
    image: '/assets/images/products/product-placeholder.jpg',
    inStock: true
  },
  {
    id: 3,
    name: {
      mr: 'आयुर्वेदिक च्यवनप्राश',
      en: 'Ayurvedic Chyawanprash',
      hi: 'आयुर्वेदिक च्यवनप्राश'
    },
    shortDescription: {
      mr: 'संपूर्ण कुटुंबासाठी आरोग्यवर्धक टॉनिक',
      en: 'Health tonic for the whole family',
      hi: 'पूरे परिवार के लिए स्वास्थ्यवर्धक टॉनिक'
    },
    fullDescription: {
      mr: '40+ औषधी वनस्पतींपासून बनवलेले हे पारंपरिक आयुर्वेदिक टॉनिक संपूर्ण कुटुंबासाठी उपयुक्त आहे.',
      en: 'Made from 40+ medicinal herbs, this traditional Ayurvedic tonic is useful for the whole family.',
      hi: '40+ औषधीय जड़ी-बूटियों से बना यह पारंपरिक आयुर्वेदिक टॉनिक पूरे परिवार के लिए उपयोगी है।'
    },
    benefits: {
      mr: ['रोगप्रतिकारक शक्ती वाढवते', 'ऊर्जा देते', 'पचन सुधारते', 'त्वचा निरोगी ठेवते'],
      en: ['Boosts immunity', 'Provides energy', 'Improves digestion', 'Keeps skin healthy'],
      hi: ['प्रतिरक्षा बढ़ाता है', 'ऊर्जा देता है', 'पाचन सुधारता है', 'त्वचा स्वस्थ रखता है']
    },
    ingredients: {
      mr: 'आंवळा, अश्वगंधा, ब्राह्मी आणि 40+ आयुर्वेदिक औषधी',
      en: 'Amla, Ashwagandha, Brahmi and 40+ Ayurvedic herbs',
      hi: 'आंवला, अश्वगंधा, ब्राह्मी और 40+ आयुर्वेदिक जड़ी-बूटियां'
    },
    howToUse: {
      mr: 'दररोज सकाळी 1-2 चमचे',
      en: '1-2 spoons daily in the morning',
      hi: 'प्रतिदिन सुबह 1-2 चम्मच'
    },
    price: '₹499',
    category: 'ayurvedic',
    image: '/assets/images/products/product-placeholder.jpg',
    inStock: true
  },
  {
    id: 4,
    name: {
      mr: 'हर्बल काढा',
      en: 'Herbal Kadha',
      hi: 'हर्बल काढ़ा'
    },
    shortDescription: {
      mr: 'सर्दी-खोकला आणि रोगप्रतिकारकतेसाठी',
      en: 'For cold, cough and immunity',
      hi: 'सर्दी, खांसी और प्रतिरक्षा के लिए'
    },
    fullDescription: {
      mr: 'नैसर्गिक औषधी वनस्पतींपासून बनवलेला हा काढा सर्दी, खोकला आणि ताप यांना प्रभावी आहे.',
      en: 'Made from natural medicinal herbs, this kadha is effective for cold, cough and fever.',
      hi: 'प्राकृतिक औषधीय जड़ी-बूटियों से बना यह काढ़ा सर्दी, खांसी और बुखार के लिए प्रभावी है।'
    },
    benefits: {
      mr: ['सर्दी-खोकला कमी करते', 'रोगप्रतिकारक शक्ती वाढवते', 'घशाला आराम', 'नैसर्गिक उपचार'],
      en: ['Reduces cold and cough', 'Boosts immunity', 'Soothes throat', 'Natural remedy'],
      hi: ['सर्दी-खांसी कम करता है', 'प्रतिरक्षा बढ़ाता है', 'गले को आराम', 'प्राकृतिक उपाय']
    },
    ingredients: {
      mr: 'तुळस, अदरक, काळी मिरी, दालचिनी, लवंग',
      en: 'Tulsi, Ginger, Black pepper, Cinnamon, Clove',
      hi: 'तुलसी, अदरक, काली मिर्च, दालचीनी, लौंग'
    },
    howToUse: {
      mr: 'गरम पाण्यात मिसळून दिवसातून 2-3 वेळा प्यावे',
      en: 'Mix in hot water and drink 2-3 times daily',
      hi: 'गर्म पानी में मिलाकर दिन में 2-3 बार पिएं'
    },
    price: '₹199',
    category: 'immunity',
    image: '/assets/images/products/product-placeholder.jpg',
    inStock: true
  },
  {
    id: 5,
    name: {
      mr: 'पाचक पावडर',
      en: 'Digestive Powder',
      hi: 'पाचक पाउडर'
    },
    shortDescription: {
      mr: 'पचनक्रिया सुधारणारे आयुर्वेदिक पावडर',
      en: 'Ayurvedic powder to improve digestion',
      hi: 'पाचन सुधारने के लिए आयुर्वेदिक पाउडर'
    },
    fullDescription: {
      mr: 'अपचन, गॅस, ऍसिडिटी यांसारख्या समस्यांसाठी हे नैसर्गिक उपाय योजना आहे.',
      en: 'This natural remedy is for problems like indigestion, gas, acidity.',
      hi: 'अपच, गैस, एसिडिटी जैसी समस्याओं के लिए यह प्राकृतिक उपाय है।'
    },
    benefits: {
      mr: ['पचनक्रिया सुधारते', 'गॅस कमी करते', 'ऍसिडिटी नियंत्रण', 'भूक वाढवते'],
      en: ['Improves digestion', 'Reduces gas', 'Controls acidity', 'Increases appetite'],
      hi: ['पाचन सुधारता है', 'गैस कम करता है', 'एसिडिटी नियंत्रण', 'भूख बढ़ाता है']
    },
    ingredients: {
      mr: 'हिंग, जिरे, मेथी, आले',
      en: 'Asafoetida, Cumin, Fenugreek, Ginger',
      hi: 'हींग, जीरा, मेथी, अदरक'
    },
    howToUse: {
      mr: 'जेवणानंतर गरम पाण्यासोबत घ्यावे',
      en: 'Take with warm water after meals',
      hi: 'भोजन के बाद गर्म पानी के साथ लें'
    },
    price: '₹149',
    category: 'ayurvedic',
    image: '/assets/images/products/product-placeholder.jpg',
    inStock: true
  },
  {
    id: 6,
    name: {
      mr: 'जॉइंट केअर',
      en: 'Joint Care',
      hi: 'जॉइंट केयर'
    },
    shortDescription: {
      mr: 'सांधेदुखी आणि गुडघेदुखीसाठी',
      en: 'For joint pain and knee pain',
      hi: 'जोड़ों के दर्द और घुटने के दर्द के लिए'
    },
    fullDescription: {
      mr: 'सांधेदुखी, गुडघेदुखी आणि स्नायूंच्या वेदनांना आराम देणारे आयुर्वेदिक औषध.',
      en: 'Ayurvedic medicine that relieves joint pain, knee pain and muscle pain.',
      hi: 'जोड़ों के दर्द, घुटने के दर्द और मांसपेशियों के दर्द से राहत देने वाली आयुर्वेदिक दवा।'
    },
    benefits: {
      mr: ['सांधेदुखी कमी करते', 'सुजन कमी करते', 'हालचाल सुधारते', 'हाडे मजबूत करते'],
      en: ['Reduces joint pain', 'Reduces swelling', 'Improves mobility', 'Strengthens bones'],
      hi: ['जोड़ों का दर्द कम करता है', 'सूजन कम करता है', 'गतिशीलता सुधारता है', 'हड्डियां मजबूत करता है']
    },
    ingredients: {
      mr: 'गुग्गुळ, शल्लकी, रसोन, अश्वगंधा',
      en: 'Guggul, Boswellia, Garlic, Ashwagandha',
      hi: 'गुग्गुल, शल्लकी, लहसुन, अश्वगंधा'
    },
    howToUse: {
      mr: 'दिवसातून दोनदा जेवणानंतर',
      en: 'Twice daily after meals',
      hi: 'दिन में दो बार भोजन के बाद'
    },
    price: '₹399',
    category: 'healthcare',
    image: '/assets/images/products/product-placeholder.jpg',
    inStock: true
  },
  {
    id: 7,
    name: {
      mr: 'डायबेटिक केअर किट',
      en: 'Diabetic Care Kit',
      hi: 'डायबेटिक केयर किट'
    },
    shortDescription: {
      mr: 'मधुमेह नियंत्रणासाठी संपूर्ण किट',
      en: 'Complete kit for diabetes control',
      hi: 'मधुमेह नियंत्रण के लिए पूर्ण किट'
    },
    fullDescription: {
      mr: 'रक्तातील साखरेची पातळी नैसर्गिकरित्या नियंत्रित करण्यासाठी आयुर्वेदिक उत्पादनांची किट.',
      en: 'Kit of Ayurvedic products to naturally control blood sugar levels.',
      hi: 'रक्त शर्करा के स्तर को प्राकृतिक रूप से नियंत्रित करने के लिए आयुर्वेदिक उत्पादों की किट।'
    },
    benefits: {
      mr: ['रक्तातील साखर नियंत्रण', 'ऊर्जा वाढवते', 'वजन नियंत्रण', 'गुंतागुंत कमी करते'],
      en: ['Controls blood sugar', 'Increases energy', 'Weight control', 'Reduces complications'],
      hi: ['रक्त शर्करा नियंत्रण', 'ऊर्जा बढ़ाता है', 'वजन नियंत्रण', 'जटिलताएं कम करता है']
    },
    ingredients: {
      mr: 'करेला, जांभूळ, मेथी, गुडमार',
      en: 'Bitter gourd, Jamun, Fenugreek, Gymnema',
      hi: 'करेला, जामुन, मेथी, गुडमार'
    },
    howToUse: {
      mr: 'डॉक्टरांच्या सल्ल्यानुसार',
      en: 'As per doctor\'s advice',
      hi: 'डॉक्टर की सलाह के अनुसार'
    },
    price: '₹899',
    category: 'healthcare',
    image: '/assets/images/products/product-placeholder.jpg',
    inStock: true
  },
  {
    id: 8,
    name: {
      mr: 'हेल्थ चेकअप पॅकेज',
      en: 'Health Checkup Package',
      hi: 'हेल्थ चेकअप पैकेज'
    },
    shortDescription: {
      mr: 'संपूर्ण आरोग्य तपासणी पॅकेज',
      en: 'Complete health checkup package',
      hi: 'संपूर्ण स्वास्थ्य जांच पैकेज'
    },
    fullDescription: {
      mr: '50+ पॅरामीटर्सची संपूर्ण आरोग्य तपासणी 90 सेकंदात रिपोर्ट सह.',
      en: 'Complete health checkup of 50+ parameters with report in 90 seconds.',
      hi: '50+ पैरामीटर की पूर्ण स्वास्थ्य जांच 90 सेकंड में रिपोर्ट के साथ।'
    },
    benefits: {
      mr: ['90 सेकंदात रिपोर्ट', '50+ पॅरामीटर्स', 'NABL मान्यताप्राप्त', 'डॉक्टर सल्ला'],
      en: ['Report in 90 seconds', '50+ Parameters', 'NABL Approved', 'Doctor consultation'],
      hi: ['90 सेकंड में रिपोर्ट', '50+ पैरामीटर', 'NABL मान्यता प्राप्त', 'डॉक्टर परामर्श']
    },
    ingredients: {
      mr: 'लागू नाही',
      en: 'Not applicable',
      hi: 'लागू नहीं'
    },
    howToUse: {
      mr: 'आमच्याकडे भेट द्या किंवा आम्ही तुमच्याकडे येऊ',
      en: 'Visit us or we will come to you',
      hi: 'हमसे मिलें या हम आपके पास आएंगे'
    },
    price: 'संपर्क करा',
    category: 'healthcare',
    image: '/assets/images/gallery/machine.png',
    inStock: true
  }
];

export default function ProductsSection() {
  const { locale } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
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

  const categories = [
    { id: 'all', label: { mr: 'सर्व', en: 'All', hi: 'सभी' } },
    { id: 'ayurvedic', label: { mr: 'आयुर्वेदिक', en: 'Ayurvedic', hi: 'आयुर्वेदिक' } },
    { id: 'healthcare', label: { mr: 'हेल्थ केअर', en: 'Healthcare', hi: 'हेल्थ केयर' } },
    { id: 'immunity', label: { mr: 'इम्युनिटी', en: 'Immunity', hi: 'इम्यूनिटी' } }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

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
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      setFormSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', phone: '', email: '', city: '', message: '' });
        setSelectedProduct(null);
      }, 3000);
    }
  };

  return (
    <section id="products" className="py-20 lg:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12" ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-900 mb-4"
          >
            {locale === 'mr' ? 'आमची उत्पादने' : locale === 'hi' ? 'हमारे उत्पाद' : 'Our Products'}
          </motion.h2>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                {category.label[locale]}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-lg overflow-hidden border border-neutral-200 hover:shadow-xl transition-all cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              {/* Product Image */}
              <div className="relative aspect-square bg-neutral-100 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name[locale]}
                  fill
                  className="object-contain p-8 hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white font-bold">
                      {locale === 'mr' ? 'स्टॉक संपला' : locale === 'hi' ? 'स्टॉक खत्म' : 'Out of Stock'}
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  {product.name[locale]}
                </h3>
                <p className="text-sm text-neutral-600 mb-4 line-clamp-2">
                  {product.shortDescription[locale]}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary-600">
                    {product.price}
                  </span>
                  <button className="text-primary-600 hover:text-primary-700 font-semibold text-sm">
                    {locale === 'mr' ? 'तपशील पहा' : locale === 'hi' ? 'विवरण देखें' : 'View Details'} →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Product Detail Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => !formSubmitted && setSelectedProduct(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="sticky top-0 bg-white border-b border-neutral-200 p-4 flex items-center justify-between z-10">
                  <h2 className="text-2xl font-bold text-neutral-900">
                    {selectedProduct.name[locale]}
                  </h2>
                  <button
                    onClick={() => !formSubmitted && setSelectedProduct(null)}
                    className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
                  >
                    <FaTimes className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-6 lg:p-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left - Image */}
                    <div>
                      <div className="relative aspect-square bg-neutral-100 rounded-lg overflow-hidden mb-4">
                        <Image
                          src={selectedProduct.image}
                          alt={selectedProduct.name[locale]}
                          fill
                          className="object-contain p-8"
                          sizes="50vw"
                        />
                      </div>

                      {/* Share Buttons */}
                      <div className="flex gap-2">
                        <button className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                          <FaWhatsapp />
                          WhatsApp
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                          <FaFacebook />
                          Facebook
                        </button>
                      </div>
                    </div>

                    {/* Right - Details & Form */}
                    <div>
                      {/* Description */}
                      <div className="mb-6">
                        <p className="text-neutral-700 leading-relaxed mb-4">
                          {selectedProduct.fullDescription[locale]}
                        </p>

                        {/* Price & Stock */}
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-2xl font-bold text-primary-600">
                            {selectedProduct.price}
                          </span>
                          {selectedProduct.inStock && (
                            <span className="text-sm text-green-600 font-medium">
                              {locale === 'mr' ? 'स्टॉकमध्ये उपलब्ध' : locale === 'hi' ? 'स्टॉक में उपलब्ध' : 'In Stock'}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="mb-6">
                        <h3 className="font-bold text-neutral-900 mb-3">
                          {locale === 'mr' ? 'फायदे' : locale === 'hi' ? 'लाभ' : 'Benefits'}
                        </h3>
                        <ul className="space-y-2">
                          {selectedProduct.benefits[locale].map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                              <FaCheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Ingredients */}
                      <div className="mb-6">
                        <h3 className="font-bold text-neutral-900 mb-2">
                          {locale === 'mr' ? 'घटक' : locale === 'hi' ? 'सामग्री' : 'Ingredients'}
                        </h3>
                        <p className="text-sm text-neutral-700">
                          {selectedProduct.ingredients[locale]}
                        </p>
                      </div>

                      {/* How to Use */}
                      <div className="mb-6">
                        <h3 className="font-bold text-neutral-900 mb-2">
                          {locale === 'mr' ? 'वापरण्याची पद्धत' : locale === 'hi' ? 'उपयोग की विधि' : 'How to Use'}
                        </h3>
                        <p className="text-sm text-neutral-700">
                          {selectedProduct.howToUse[locale]}
                        </p>
                      </div>

                      {/* Contact Form */}
                      {formSubmitted ? (
                        <motion.div
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                        >
                          <FaCheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
                          <h3 className="text-lg font-bold text-green-900 mb-2">
                            {locale === 'mr' ? 'धन्यवाद!' : locale === 'hi' ? 'धन्यवाद!' : 'Thank You!'}
                          </h3>
                          <p className="text-green-700">
                            {locale === 'mr' ? 'आम्ही लवकरच संपर्क करू' :
                             locale === 'hi' ? 'हम जल्द ही संपर्क करेंगे' :
                             'We will contact you soon'}
                          </p>
                        </motion.div>
                      ) : (
                        <form onSubmit={handleSubmit} className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
                          <h3 className="font-bold text-neutral-900 mb-4">
                            {locale === 'mr' ? 'संपर्क करा' : locale === 'hi' ? 'संपर्क करें' : 'Contact Us'}
                          </h3>

                          <div className="space-y-4">
                            <div>
                              <input
                                type="text"
                                placeholder={locale === 'mr' ? 'नाव *' : locale === 'hi' ? 'नाम *' : 'Name *'}
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                                  formErrors.name ? 'border-red-500' : 'border-neutral-300'
                                }`}
                              />
                              {formErrors.name && (
                                <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
                              )}
                            </div>

                            <div>
                              <input
                                type="tel"
                                placeholder={locale === 'mr' ? 'फोन नंबर *' : locale === 'hi' ? 'फोन नंबर *' : 'Phone Number *'}
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                                  formErrors.phone ? 'border-red-500' : 'border-neutral-300'
                                }`}
                              />
                              {formErrors.phone && (
                                <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
                              )}
                            </div>

                            <div>
                              <input
                                type="email"
                                placeholder={locale === 'mr' ? 'ईमेल' : locale === 'hi' ? 'ईमेल' : 'Email'}
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                                  formErrors.email ? 'border-red-500' : 'border-neutral-300'
                                }`}
                              />
                              {formErrors.email && (
                                <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                              )}
                            </div>

                            <div>
                              <input
                                type="text"
                                placeholder={locale === 'mr' ? 'शहर *' : locale === 'hi' ? 'शहर *' : 'City *'}
                                value={formData.city}
                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                                  formErrors.city ? 'border-red-500' : 'border-neutral-300'
                                }`}
                              />
                              {formErrors.city && (
                                <p className="text-red-500 text-xs mt-1">{formErrors.city}</p>
                              )}
                            </div>

                            <div>
                              <textarea
                                placeholder={locale === 'mr' ? 'संदेश/प्रमाण' : locale === 'hi' ? 'संदेश/मात्रा' : 'Message/Quantity'}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows={3}
                                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                              />
                            </div>

                            <button
                              type="submit"
                              className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                            >
                              <FaShoppingCart />
                              {locale === 'mr' ? 'माहिती पाठवा' : locale === 'hi' ? 'जानकारी भेजें' : 'Send Information'}
                            </button>
                          </div>
                        </form>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

// TypeScript interfaces for multi-language support
// This provides type safety for translations across the entire application

export type Locale = 'mr' | 'en' | 'hi';

export interface Translations {
  common: {
    home: string;
    about: string;
    ourMachine: string;
    products: string;
    services: string;
    contact: string;
    learnMore: string;
    submit: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    address: string;
    readMore: string;
    getInTouch: string;
    sendMessage: string;
    allRightsReserved: string;
  };

  nav: {
    logo: string;
    tagline: string;
  };

  hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };

  about: {
    heading: string;
    title: string;
    description: string;
    mission: string;
    missionText: string;
    vision: string;
    visionText: string;
    features: {
      quality: string;
      qualityDesc: string;
      certified: string;
      certifiedDesc: string;
      support: string;
      supportDesc: string;
      innovation: string;
      innovationDesc: string;
    };
  };

  machine: {
    heading: string;
    title: string;
    description: string;
    specifications: string;
    features: string;
    benefits: string;
  };

  products: {
    heading: string;
    title: string;
    description: string;
    viewAll: string;
    category: {
      all: string;
      medical: string;
      diagnostic: string;
      surgical: string;
    };
  };

  services: {
    heading: string;
    title: string;
    description: string;
    list: {
      consultation: string;
      consultationDesc: string;
      maintenance: string;
      maintenanceDesc: string;
      training: string;
      trainingDesc: string;
      support: string;
      supportDesc: string;
    };
  };

  contact: {
    heading: string;
    title: string;
    description: string;
    info: {
      address: string;
      addressText: string;
      phone: string;
      phoneText: string;
      email: string;
      emailText: string;
      hours: string;
      hoursText: string;
    };
    form: {
      title: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      phonePlaceholder: string;
      messagePlaceholder: string;
      submitButton: string;
      successMessage: string;
      errorMessage: string;
    };
  };

  footer: {
    about: {
      title: string;
      description: string;
    };
    quickLinks: {
      title: string;
    };
    contactInfo: {
      title: string;
      address: string;
      phone: string;
      email: string;
    };
    socialMedia: {
      title: string;
      followUs: string;
    };
    businessHours: {
      title: string;
      weekdays: string;
      saturday: string;
      sunday: string;
    };
    copyright: string;
  };

  whatsapp: {
    message: string;
    tooltip: string;
  };
}

export interface TranslationContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

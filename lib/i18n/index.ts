import { Locale, Translations } from './types';
import mrTranslations from './locales/mr.json';
import enTranslations from './locales/en.json';
import hiTranslations from './locales/hi.json';

// Translation object with all locales
export const translations: Record<Locale, Translations> = {
  mr: mrTranslations as Translations,
  en: enTranslations as Translations,
  hi: hiTranslations as Translations,
};

// Default locale
export const defaultLocale: Locale = 'mr';

// Available locales
export const locales: Locale[] = ['mr', 'en', 'hi'];

// Locale metadata for language switcher
export const localeMetadata = {
  mr: { name: 'मराठी', flag: '🇮🇳' },
  en: { name: 'English', flag: '🇬🇧' },
  hi: { name: 'हिंदी', flag: '🇮🇳' },
};

// Simple translation function (for now, just returns the default locale translations)
// This will be replaced with context-based translation when we implement the Language Context
export function getTranslations(locale: Locale = defaultLocale): Translations {
  return translations[locale] || translations[defaultLocale];
}

// Helper function to get a nested translation value
export function t(
  translations: Translations,
  key: string
): string {
  const keys = key.split('.');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let value: any = translations;

  for (const k of keys) {
    value = value?.[k];
  }

  return typeof value === 'string' ? value : key;
}

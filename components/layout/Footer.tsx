'use client';

import Link from 'next/link';
import { FaHeartbeat, FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion } from 'framer-motion';

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { href: '#home', label: t.common.home },
    { href: '#about', label: t.common.about },
    { href: '#machine', label: t.common.ourMachine },
    { href: '#products', label: t.common.products },
    { href: '#services', label: t.common.services },
    { href: '#contact', label: t.common.contact },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: FaFacebook,
      color: 'hover:text-blue-600',
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: FaInstagram,
      color: 'hover:text-pink-600',
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/91XXXXXXXXXX',
      icon: FaWhatsapp,
      color: 'hover:text-green-600',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: FaLinkedin,
      color: 'hover:text-blue-700',
    },
  ];

  const handleNavClick = (href: string) => {
    const elementId = href.replace('#', '');
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About Us Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FaHeartbeat className="w-8 h-8 text-primary-400" />
              <h3 className="text-xl font-bold text-white">
                {t.footer.about.title}
              </h3>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed">
              {t.footer.about.description}
            </p>
            <div className="pt-2">
              <Link
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#about');
                }}
                className="text-primary-400 hover:text-primary-300 text-sm font-medium inline-flex items-center group"
              >
                {t.common.learnMore}
                <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">
              {t.footer.quickLinks.title}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-neutral-300 hover:text-primary-400 text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">
              {t.footer.contactInfo.title}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <FiMapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-300">
                  {t.footer.contactInfo.address}
                </span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <FiPhone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href={`tel:${t.footer.contactInfo.phone}`}
                  className="text-neutral-300 hover:text-primary-400 transition-colors"
                >
                  {t.footer.contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <FiMail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href={`mailto:${t.footer.contactInfo.email}`}
                  className="text-neutral-300 hover:text-primary-400 transition-colors break-all"
                >
                  {t.footer.contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media & Business Hours Column */}
          <div className="space-y-6">
            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">
                {t.footer.socialMedia.title}
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-neutral-400 ${social.color} transition-colors duration-200`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <FiClock className="w-5 h-5 text-primary-400" />
                <h3 className="text-lg font-bold text-white">
                  {t.footer.businessHours.title}
                </h3>
              </div>
              <ul className="space-y-1 text-sm text-neutral-300">
                <li>{t.footer.businessHours.weekdays}</li>
                <li>{t.footer.businessHours.saturday}</li>
                <li className="text-neutral-400">{t.footer.businessHours.sunday}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-neutral-400 text-center md:text-left">
              {t.footer.copyright}
            </p>
            <div className="flex items-center space-x-4 text-sm text-neutral-400">
              <Link href="/privacy" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-neutral-600">|</span>
              <Link href="/terms" className="hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

# Suyash Health Care Centre Website

A modern, responsive Next.js 14 website for Suyash Health Care Centre with multi-language support architecture (Marathi, English, Hindi).

## Features

- **Next.js 14** with App Router and TypeScript
- **Multi-language Support** - Ready for Marathi, English, and Hindi translations
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Healthcare Theme** - Professional color scheme optimized for healthcare industry
- **Smooth Animations** - Framer Motion for engaging user interactions
- **SEO Optimized** - Meta tags and structured data ready
- **Accessibility** - WCAG compliant with focus states and semantic HTML

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons, Lucide React
- **Forms:** React Hook Form + Zod validation

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
suyash/
├── app/
│   ├── layout.tsx          # Root layout with Navigation, Footer
│   ├── page.tsx            # Homepage with sections
│   └── globals.css         # Global styles
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx  # Responsive navigation with language switcher
│   │   ├── Footer.tsx      # Footer with quick links, contact info
│   │   └── WhatsAppButton.tsx # Floating WhatsApp button
│   ├── sections/
│   │   └── Hero.tsx        # Hero section with feature cards
│   ├── ui/                 # Reusable UI components
│   └── forms/              # Form components
├── lib/
│   ├── i18n/
│   │   ├── types.ts        # TypeScript interfaces for translations
│   │   ├── index.ts        # Translation utilities
│   │   └── locales/
│   │       ├── mr.json     # Marathi translations (primary)
│   │       ├── en.json     # English translations
│   │       └── hi.json     # Hindi translations
│   └── utils.ts            # Utility functions
└── public/
    ├── images/             # Images folder
    └── icons/              # Icons folder
```

## Color Scheme

Healthcare-optimized professional color palette:

- **Primary Blue:** `#2196F3` - Trust, professionalism
- **Secondary Green:** `#4CAF50` - Health, wellness
- **Accent Orange:** `#FF6F00` - Energy, call-to-action
- **Neutral Gray:** Full spectrum for balance

## Multi-Language Support

The website is structured to support Marathi (primary), English, and Hindi.

### How to Add Translations

1. Edit locale files in `lib/i18n/locales/`
2. All translations are TypeScript-safe
3. Language switcher in navigation (UI ready)

## Customization

### Update Contact Information

1. **Phone/Email/Address:** Edit `lib/i18n/locales/mr.json` (and other locales)
2. **WhatsApp:** Update phone number in `components/layout/WhatsAppButton.tsx`
3. **Social Media:** Edit `components/layout/Footer.tsx`

### Add Content

The homepage has placeholder sections:
- About (आमच्याबद्दल)
- Machine/Equipment (आमचे यंत्र)
- Products (उत्पादने)
- Jobs (नोकऱ्या)
- Services (सेवा)
- Contact (संपर्क)

Create components in `components/sections/` and import in `page.tsx`.

## Next Steps

### Content Needed:
- [ ] Company logo
- [ ] Product images
- [ ] Equipment photos
- [ ] Actual contact information
- [ ] Complete English/Hindi translations

### Features to Add:
- [ ] Complete About section
- [ ] Machine/Equipment showcase
- [ ] Product catalog
- [ ] Services listing
- [ ] Contact form with validation
- [ ] Image gallery
- [ ] Testimonials

## Browser Support

Latest versions of Chrome, Firefox, Safari, Edge, and mobile browsers.

## License

© 2024 Suyash Health Care Centre. All rights reserved.

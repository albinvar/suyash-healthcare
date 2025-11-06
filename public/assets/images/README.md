# Image Assets

This folder contains all the image assets for the Suyash Health Care Centre website.

## Folder Structure

### `/logo`
Company logo files in various formats and sizes:
- `logo.png` - Main logo (transparent background)
- `logo-white.png` - White version for dark backgrounds
- `logo-full.png` - Logo with text
- `favicon.ico` - Browser favicon

**Recommended sizes:**
- Logo: 200x60px to 400x120px
- Favicon: 32x32px or 64x64px

### `/hero`
Hero section and banner images:
- `hero-main.jpg` - Main hero background
- `hero-about.jpg` - About page hero
- `banner-*.jpg` - Various banner images

**Recommended sizes:**
- Desktop: 1920x1080px
- Tablet: 1200x800px
- Mobile: 800x600px

### `/products`
Product images:
- Individual product photos
- Product category images
- Product thumbnails

**Recommended sizes:**
- Product images: 800x800px (square)
- Thumbnails: 300x300px
- Category images: 600x400px

### `/machines`
Medical equipment and machine photos:
- Main equipment photos
- Detail shots
- Equipment in use

**Recommended sizes:**
- Main photos: 1200x800px
- Detail shots: 800x600px

### `/services`
Service-related images:
- Service category images
- Process illustrations
- Service delivery photos

**Recommended sizes:**
- 800x600px or 600x400px

### `/team`
Team member photos:
- Individual portraits
- Team group photos
- Professional headshots

**Recommended sizes:**
- Headshots: 400x400px (square)
- Group photos: 1200x800px

### `/gallery`
General gallery images:
- Facility photos
- Event photos
- Customer testimonials
- Certificates and awards

**Recommended sizes:**
- Gallery images: 800x600px to 1200x900px

### `/icons`
Icon files and small graphics:
- Service icons
- Feature icons
- Social media icons (if custom)

**Recommended formats:**
- SVG (preferred for scalability)
- PNG with transparency

## Image Optimization Guidelines

1. **Format:**
   - Use WebP for modern browsers with JPG/PNG fallback
   - Use SVG for logos and icons
   - Use PNG for images requiring transparency
   - Use JPG for photographs

2. **Compression:**
   - Compress all images before uploading
   - Target file size: < 200KB per image
   - Use tools like TinyPNG, ImageOptim, or Squoosh

3. **Naming Convention:**
   - Use lowercase letters
   - Use hyphens for spaces
   - Be descriptive: `product-blood-pressure-monitor.jpg`
   - Include version if needed: `logo-v2.png`

4. **Responsive Images:**
   - Provide multiple sizes for different screen sizes
   - Use Next.js Image component for automatic optimization

## Usage in Code

```tsx
import Image from 'next/image';

// Example usage
<Image
  src="/assets/images/logo/logo.png"
  alt="Suyash Health Care Centre Logo"
  width={200}
  height={60}
  priority
/>
```

## Notes

- Always provide descriptive alt text for accessibility
- Use lazy loading for images below the fold
- Consider using placeholder/blur images for better UX
- Keep original high-resolution versions in a separate backup

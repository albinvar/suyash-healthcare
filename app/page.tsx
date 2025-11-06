import Hero from '@/components/sections/Hero';

export default function Home() {
  return (
    <div>
      <Hero />

      {/* About Section - Placeholder */}
      <section id="about" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="heading-secondary mb-4">आमच्याबद्दल</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              येथे आपल्या संस्थेबद्दलची माहिती येईल...
            </p>
          </div>
        </div>
      </section>

      {/* Machine Section - Placeholder */}
      <section id="machine" className="section-padding bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="heading-secondary mb-4">आमचे यंत्र</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              आमच्या अत्याधुनिक वैद्यकीय उपकरणांबद्दल माहिती येथे येईल...
            </p>
          </div>
        </div>
      </section>

      {/* Products Section - Placeholder */}
      <section id="products" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="heading-secondary mb-4">उत्पादने</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              आमची उत्पादन श्रेणी येथे दाखवली जाईल...
            </p>
          </div>
        </div>
      </section>

      {/* Services Section - Placeholder */}
      <section id="services" className="section-padding bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="heading-secondary mb-4">सेवा</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              आमच्या सेवांची माहिती येथे येईल...
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section - Placeholder */}
      <section id="contact" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="heading-secondary mb-4">संपर्क</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              आमच्याशी संपर्क साधण्यासाठी फॉर्म येथे येईल...
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

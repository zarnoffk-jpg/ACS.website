import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Professional Cleaning Services | Window, Gutter, Pressure Washing | NEPA',
  description: 'Complete cleaning services in Northeast PA: residential & commercial window cleaning, gutter cleaning, screen repair, and pressure washing. Serving Scranton and surrounding areas. Free estimates.',
  alternates: {
    canonical: 'https://windowcleaning.sbs/services'
  }
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Residential Window Cleaning',
      href: '/services/residential',
      icon: '🏠',
      description: 'Crystal clear windows for your home. Interior, exterior, screens, and tracks included.',
      features: ['Inside & outside', 'Screen cleaning', 'Hard water removal', 'Sill & track cleaning']
    },
    {
      title: 'Commercial Window Cleaning',
      href: '/services/commercial',
      icon: '🏢',
      description: 'Professional window cleaning for businesses, offices, and commercial properties.',
      features: ['Storefront windows', 'Office buildings', 'Flexible scheduling', 'Recurring service']
    },
    {
      title: 'Gutter Cleaning',
      href: '/services/gutter-cleaning',
      icon: '🏚️',
      description: 'Complete gutter cleaning, debris removal, and downspout flushing to protect your home.',
      features: ['Debris removal', 'Downspout flushing', 'Leak inspection', 'Ground cleanup']
    },
    {
      title: 'Screen Repair',
      href: '/services/screen-repair',
      icon: '🪟',
      description: 'Professional screen repair and replacement. Fix tears, pet damage, and broken frames.',
      features: ['Re-screening', 'Frame repair', 'Pet-resistant mesh', 'Custom screens']
    },
    {
      title: 'Pressure Washing',
      href: '/services/pressure-washing',
      icon: '💦',
      description: 'Transform your property with expert pressure washing for houses, driveways, decks, and more.',
      features: ['House washing', 'Driveway cleaning', 'Deck restoration', 'Sidewalk cleaning']
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="mb-6">Professional Cleaning Services in Northeast PA</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Complete exterior cleaning solutions for homes and businesses across Lackawanna and Monroe Counties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="btn-secondary text-center">
              View All Services
            </a>
            <a href="tel:+15706149575" className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors text-lg text-center" style={{ minHeight: '48px' }}>
              (570) 614-9575
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-4">Our Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            From sparkling windows to pressure-washed driveways, we provide comprehensive cleaning services to keep your property looking its best.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-primary"
              >
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-primary">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <span className="text-primary font-semibold hover:underline">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Why Choose Alexander's Cleaning Service?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: '🏆',
                title: '10+ Years Experience',
                description: 'Serving NEPA since 2015 with proven results'
              },
              {
                icon: '💯',
                title: 'Satisfaction Guaranteed',
                description: 'We don\'t leave until you\'re 100% happy'
              },
              {
                icon: '🛡️',
                title: 'Fully Insured',
                description: 'Licensed and insured for your protection'
              },
              {
                icon: '📞',
                title: 'Free Estimates',
                description: 'No-obligation quotes, always upfront pricing'
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get your free, no-obligation estimate today. We serve all of Lackawanna and Monroe Counties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#quote" className="btn-secondary text-center">
              Get Free Quote
            </Link>
            <a href="tel:+15706149575" className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors text-lg text-center" style={{ minHeight: '48px' }}>
              Call (570) 614-9575
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

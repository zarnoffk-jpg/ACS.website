import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/app/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Commercial Window Cleaning Services | Scranton, PA',
  description: 'Professional commercial window cleaning for businesses, offices, and storefronts in Northeast PA. Flexible scheduling, insured service. Call (570) 614-9575.',
  openGraph: {
    title: 'Commercial Window Cleaning | Alexander\'s Cleaning Service',
    description: 'Expert commercial window cleaning for businesses across Northeast Pennsylvania.',
    images: ['/images/commercial-og.jpg'],
  },
  alternates: {
    canonical: 'https://windowcleaning.sbs/services/commercial'
  }
};

export default function CommercialPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Commercial Window Cleaning",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Alexander's Cleaning Service",
      "telephone": "+1-570-614-9575"
    },
    "areaServed": {
      "@type": "State",
      "name": "Pennsylvania"
    },
    "description": "Professional commercial window cleaning for offices, retail stores, restaurants, and commercial buildings in Northeast Pennsylvania."
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://windowcleaning.sbs"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://windowcleaning.sbs/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Commercial Window Cleaning",
        "item": "https://windowcleaning.sbs/services/commercial"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="bg-gray-100 py-3">
        <div className="container-custom">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-primary hover:text-primary-dark">Home</Link></li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-700">Commercial Window Cleaning</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="mb-6">Professional Commercial Window Cleaning in Northeast PA</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Maintain your business's professional appearance with sparkling clean windows. Flexible scheduling, fully insured, minimal disruption.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#quote" className="btn-secondary text-center">Get Free Quote</a>
              <a href="tel:+15706149575" className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors text-lg text-center" style={{ minHeight: '48px' }}>
                (570) 614-9575
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Office Buildings',
                description: 'Multi-tenant buildings, corporate offices, medical offices, and professional suites'
              },
              {
                title: 'Retail Stores',
                description: 'Storefronts, shopping centers, boutiques, and retail chains'
              },
              {
                title: 'Restaurants & Cafes',
                description: 'Dining establishments, coffee shops, bars, and food service venues'
              },
              {
                title: 'Property Management',
                description: 'Apartment complexes, condos, and multi-unit residential buildings'
              },
              {
                title: 'Healthcare Facilities',
                description: 'Medical offices, dental practices, clinics, and care facilities'
              },
              {
                title: 'Educational Institutions',
                description: 'Schools, daycare centers, training facilities, and churches'
              }
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Commercial Window Cleaning Matters */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8">Why Clean Windows Matter for Your Business</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3">First Impressions Count</h3>
                <p className="text-gray-700">
                  Your storefront or office windows are often the first thing customers see. Dirty, streaky windows signal neglect and unprofessionalism. Clean windows convey that you care about details and take pride in your business. In our experience serving Scranton's downtown business district, clean windows can directly impact foot traffic and customer perception.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3">Natural Light Improves Productivity</h3>
                <p className="text-gray-700">
                  Studies show that natural light in the workplace improves employee mood, energy levels, and productivity. Dirty windows can block up to 40% of natural light. Regular professional cleaning ensures maximum light transmission, creating a better work environment and potentially reducing lighting costs.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3">Extend Window Lifespan</h3>
                <p className="text-gray-700">
                  Northeast Pennsylvania's industrial history means our air contains corrosive particles that, over time, can etch and permanently damage glass. Regular professional cleaning removes these contaminants before they cause irreversible harm, protecting your investment in commercial-grade windows.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-3">Maintain Warranty Compliance</h3>
                <p className="text-gray-700">
                  Many commercial window warranties require regular professional maintenance. Neglecting this can void your warranty. We provide documentation of service for your records to ensure compliance with manufacturer requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commercial Services */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-12">Our Commercial Window Cleaning Services</h2>
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Storefront Window Cleaning</h3>
              <p className="text-gray-700 mb-4">
                Perfect for retail businesses, restaurants, and street-level offices. We clean both interior and exterior glass, entry doors, and display windows. Available on daily, weekly, or custom schedules to keep your storefront looking pristine.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Early morning or after-hours service to avoid disrupting business
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Removal of tape, stickers, and adhesive residue
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Cleaning of door glass and frames
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Multi-Story Building Window Cleaning</h3>
              <p className="text-gray-700 mb-4">
                For buildings up to 3 stories, we use water-fed pole systems with deionized water for streak-free results. This method is safer, faster, and more eco-friendly than traditional methods.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  OSHA-compliant safety procedures
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  $2M liability insurance for your protection
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  No ladders on your property (reduces liability)
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Property Management Services</h3>
              <p className="text-gray-700 mb-4">
                Customized maintenance programs for apartment complexes, condo associations, and multi-unit buildings. We handle tenant communication and scheduling on your behalf.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Discounted rates for recurring service contracts
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Detailed reporting and documentation
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Flexible billing options (per unit or whole building)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Scheduling Flexibility */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Flexible Scheduling for Your Business</h2>
            <p className="text-lg text-gray-700 mb-8">
              We understand that minimizing disruption to your business is crucial. That's why we offer flexible scheduling options:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-4xl mb-3">🌅</div>
                <h3 className="text-xl font-semibold mb-2">Early Morning</h3>
                <p className="text-gray-600">Before your business opens (as early as 6 AM)</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-4xl mb-3">🌙</div>
                <h3 className="text-xl font-semibold mb-2">After Hours</h3>
                <p className="text-gray-600">After you close (evenings and weekends)</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-4xl mb-3">📅</div>
                <h3 className="text-xl font-semibold mb-2">Recurring Plans</h3>
                <p className="text-gray-600">Weekly, monthly, or quarterly service agreements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12">Commercial Window Cleaning FAQ</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">How often should commercial windows be cleaned?</h3>
                <p className="text-gray-700">
                  It depends on your business type and location. Storefronts typically benefit from weekly or bi-weekly cleaning. Office buildings usually schedule monthly or quarterly service. High-traffic areas or buildings near roads may need more frequent cleaning due to dirt and pollution.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Do you provide certificates of insurance?</h3>
                <p className="text-gray-700">
                  Yes! We carry $2M in liability insurance and can provide certificates of insurance (COI) for your building management or property records. We can also add you as an additional insured if required by your lease or property manager.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">What's the difference between commercial and residential pricing?</h3>
                <p className="text-gray-700">
                  Commercial pricing is based on square footage of glass, accessibility, frequency of service, and scheduling requirements. Recurring service contracts receive discounted rates. We provide detailed quotes after a site visit or based on accurate building specifications.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Can you work around our business hours?</h3>
                <p className="text-gray-700">
                  Absolutely. We specialize in flexible scheduling including early morning (starting at 6 AM), evenings, and weekends. We work with your schedule to minimize disruption to your operations.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Do you clean interior windows in occupied offices?</h3>
                <p className="text-gray-700">
                  Yes. We're experienced working in occupied spaces and will work quietly and professionally around your employees. We can also schedule interior cleaning after hours if you prefer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-blue-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Complete Commercial Cleaning</h2>
          <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
            Beyond windows - we handle all your commercial cleaning needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Pressure Washing</h3>
              <p className="text-gray-600 mb-4">Clean parking lots, storefronts, building exteriors</p>
              <Link href="/services/pressure-washing" className="text-primary hover:text-primary-dark font-semibold">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Gutter Cleaning</h3>
              <p className="text-gray-600 mb-4">Maintain commercial building gutters</p>
              <Link href="/services/gutter-cleaning" className="text-primary hover:text-primary-dark font-semibold">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="quote" className="section-padding bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-white mb-4">Ready to Enhance Your Business's Appearance?</h2>
              <p className="text-xl text-blue-100">Get a free commercial quote tailored to your needs. Flexible contracts available.</p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}

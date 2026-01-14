import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import QuoteForm from '@/app/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Residential Window Cleaning Services in Northeast PA',
  description: 'Professional residential window cleaning for homes in Lackawanna & Monroe County. Interior & exterior, screen cleaning, hard water removal. Free estimates. Call (570) 614-9575.',
  openGraph: {
    title: 'Residential Window Cleaning | Alexander\'s Cleaning Service',
    description: 'Expert home window cleaning in Northeast Pennsylvania. 500+ homes serviced since 2015.',
    images: ['/images/residential-og.jpg'],
  },
  alternates: {
    canonical: 'https://windowcleaning.sbs/services/residential'
  }
};

export default function ResidentialPage() {
  return (
    <>

      {/* Breadcrumb */}
      <nav className="bg-gray-100 py-3">
        <div className="container-custom">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-primary hover:text-primary-dark">Home</Link></li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-700">Residential Window Cleaning</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="mb-6">Professional Residential Window Cleaning in Northeast PA</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Crystal clear windows for your home. Inside, outside, screens, and tracks. Serving 500+ homeowners since 2015.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#quote" className="btn-secondary text-center">Get Free Estimate</a>
              <a href="tel:+15706149575" className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors text-lg text-center" style={{ minHeight: '48px' }}>
                (570) 614-9575
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-12">What's Included in Our Residential Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Interior Window Cleaning',
                description: 'Hand-washed interior glass, streak-free finish, detailed edge work'
              },
              {
                title: 'Exterior Window Cleaning',
                description: 'Pressure-washed or hand-cleaned exterior, removal of dirt, pollen, and debris'
              },
              {
                title: 'Screen Cleaning',
                description: 'Screens removed, washed, dried, and reinstalled properly'
              },
              {
                title: 'Sill & Track Cleaning',
                description: 'Window sills and tracks wiped clean of dirt and debris'
              },
              {
                title: 'Hard Water Stain Removal',
                description: 'Specialized treatment for mineral deposits common in NEPA'
              },
              {
                title: 'Frame & Mullion Wiping',
                description: 'Window frames and dividers cleaned and detailed'
              }
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Professional Cleaning */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8">Why Choose Professional Window Cleaning?</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                In our 10 years cleaning windows across Northeast Pennsylvania, we've seen countless homeowners struggle with DIY window cleaning. The reality is that professional window cleaning isn't just about convenience—it's about results, safety, and protecting your investment.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Safety First:</strong> Cleaning second and third-story windows is dangerous without proper equipment and training. We use professional water-fed poles, safety harnesses, and follow OSHA guidelines. Every year, thousands of homeowners are injured falling from ladders—don't become a statistic.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Superior Results:</strong> Our deionized water system and professional-grade solutions leave windows genuinely streak-free—something nearly impossible to achieve with store-bought cleaners and paper towels. We also know how to handle Northeast Pennsylvania's specific challenges: coal region hard water stains, Pocono pollen buildup, and road salt residue that requires specialized treatment.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Time Savings:</strong> What takes you an entire weekend takes our experienced team 2-4 hours. Kyle and Pamela have cleaned over 500 homes and can work efficiently while maintaining meticulous attention to detail.
              </p>
              <p className="text-gray-700">
                <strong>Protecting Historic Windows:</strong> If you own one of Scranton's beautiful Victorian or turn-of-the-century homes, you know that original wavy glass and wooden frames require special care. We're trained in historic window preservation and use techniques that clean without damaging delicate materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-12">Our Residential Window Cleaning Process</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                step: '1',
                title: 'Free Estimate',
                description: "Call us or fill out our online form. We'll provide a detailed quote, usually within 1 hour during business hours. No high-pressure sales, just honest pricing."
              },
              {
                step: '2',
                title: 'Scheduling',
                description: "We work around your schedule, including evenings and weekends. We'll confirm the appointment 24 hours in advance and provide a 2-hour arrival window."
              },
              {
                step: '3',
                title: 'Preparation',
                description: "We arrive with all equipment and supplies. You don't need to do anything except provide access. We'll protect your floors and furniture near windows."
              },
              {
                step: '4',
                title: 'Cleaning',
                description: "We remove and clean screens, wash interior glass, detail sills and tracks, then clean exterior glass using appropriate methods for your home's height and architecture."
              },
              {
                step: '5',
                title: 'Inspection',
                description: "We do a final walkthrough with you to ensure complete satisfaction. If you're not happy with any window, we'll re-clean it immediately at no charge."
              },
              {
                step: '6',
                title: 'Follow-Up',
                description: "We'll send a reminder for your next recommended cleaning (typically 6 months). Many of our customers are on a recurring schedule for hassle-free maintenance."
              }
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Transparent Pricing</h2>
            <p className="text-lg text-gray-700 text-center mb-12">
              We believe in honest, upfront pricing. While every home is unique, here are typical price ranges:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">$150-$250</h3>
                <h4 className="font-semibold mb-3">Small Home</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>1,000-1,500 sq ft</li>
                  <li>10-15 windows</li>
                  <li>1-2 stories</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center border-2 border-primary">
                <div className="bg-primary text-white text-xs font-bold py-1 px-3 rounded-full inline-block mb-2">
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">$250-$350</h3>
                <h4 className="font-semibold mb-3">Medium Home</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>1,500-2,500 sq ft</li>
                  <li>20-30 windows</li>
                  <li>2-3 stories</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">$350-$500+</h3>
                <h4 className="font-semibold mb-3">Large Home</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>2,500+ sq ft</li>
                  <li>30+ windows</li>
                  <li>3+ stories</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="font-semibold mb-2">Additional Services Available:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Gutter cleaning: $100-$250</li>
                <li>• Screen repair: $15-$30 per screen</li>
                <li>• Hard water stain removal: $50-$150 extra</li>
                <li>• Chandelier cleaning: $75-$200</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">What's included in residential window cleaning?</h3>
                <p className="text-gray-700">
                  Our residential window cleaning service includes interior and exterior window washing, screen cleaning and reinstallation, sill and track wiping, and removal of hard water stains. We use eco-friendly, streak-free solutions safe for your family and pets.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">How long does it take to clean a house's windows?</h3>
                <p className="text-gray-700">
                  Most residential jobs take 2-4 hours depending on home size and number of windows. A typical 2,000 sq ft home with 20-25 windows takes approximately 2.5 hours for a thorough interior and exterior cleaning.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Can you clean high or hard-to-reach windows?</h3>
                <p className="text-gray-700">
                  Yes! We use professional-grade water-fed poles and safety equipment to safely clean windows up to 3 stories high. We're trained in OSHA safety procedures and have specialized equipment for difficult access areas.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Do you clean historic or antique windows?</h3>
                <p className="text-gray-700">
                  Absolutely. Over 60% of our Scranton clients live in historic districts. We're trained in cleaning wavy glass, original wooden frames, and delicate vintage windows without causing damage. We use gentle techniques specifically designed for historic properties.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">What if it rains after you clean my windows?</h3>
                <p className="text-gray-700">
                  Rain is actually just pure water and won't streak your windows. The dirt and minerals are what cause streaking, and we remove those completely. However, if heavy rain causes splashing from gutters or ground debris, we're happy to do a quick touch-up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-blue-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Complementary Services</h2>
          <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
            Keep your home looking pristine with our additional cleaning services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Gutter Cleaning</h3>
              <p className="text-gray-600 mb-4">Prevent water damage and ice dams with regular gutter maintenance</p>
              <Link href="/services/gutter-cleaning" className="text-primary hover:text-primary-dark font-semibold">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Screen Repair</h3>
              <p className="text-gray-600 mb-4">Fix torn screens and damaged frames quickly and affordably</p>
              <Link href="/services/screen-repair" className="text-primary hover:text-primary-dark font-semibold">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Pressure Washing</h3>
              <p className="text-gray-600 mb-4">Clean exterior surfaces safely and effectively</p>
              <Link href="/services/pressure-washing" className="text-primary hover:text-primary-dark font-semibold">
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
              <h2 className="text-white mb-4">Ready for Sparkling Clean Windows?</h2>
              <p className="text-xl text-blue-100">Get your free estimate today. Most homes serviced within a week!</p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}

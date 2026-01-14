import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/app/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Professional Gutter Cleaning Services | Scranton & NEPA',
  description: 'Expert gutter cleaning in Northeast PA. Prevent water damage, foundation issues, and ice dams. Debris removal, downspout flushing, inspection included. Free estimates. Call (570) 614-9575.',
  openGraph: {
    title: 'Gutter Cleaning Services | Alexander\'s Cleaning Service',
    description: 'Professional gutter cleaning protecting homes across Northeast Pennsylvania since 2015.',
    images: ['/images/gutter-og.jpg'],
  },
  alternates: {
    canonical: 'https://windowcleaning.sbs/services/gutter-cleaning'
  }
};

export default function GutterCleaningPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Gutter Cleaning",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Alexander's Cleaning Service",
      "telephone": "+1-570-614-9575",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Scranton",
        "addressRegion": "PA",
        "addressCountry": "US"
      }
    },
    "areaServed": [
      {"@type": "City", "name": "Scranton"},
      {"@type": "City", "name": "Clarks Summit"},
      {"@type": "State", "name": "Pennsylvania"}
    ],
    "offers": {
      "@type": "Offer",
      "priceRange": "$120-$400",
      "priceCurrency": "USD"
    },
    "description": "Professional gutter cleaning in Northeast PA. Prevent water damage, foundation issues, and ice dams. Complete debris removal, downspout flushing, inspection included."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Breadcrumb */}
      <nav className="bg-gray-100 py-3">
        <div className="container-custom">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-primary hover:text-primary-dark">Home</Link></li>
            <li className="text-gray-500">/</li>
            <li><Link href="/services" className="text-primary hover:text-primary-dark">Services</Link></li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-700">Gutter Cleaning</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="mb-6">Professional Gutter Cleaning in Northeast Pennsylvania</h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Protect your home from water damage, foundation issues, and ice dams. Complete debris removal, downspout flushing, and gutter inspection included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#quote" className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors text-lg text-center" style={{ minHeight: '48px' }}>
                Get Free Estimate
              </a>
              <a href="tel:+15706149575" className="bg-white text-green-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors text-lg text-center" style={{ minHeight: '48px' }}>
                (570) 614-9575
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Gutter Cleaning Matters */}
      <section className="section-padding bg-red-50">
        <div className="container-custom">
          <h2 className="text-center mb-4">Why Regular Gutter Cleaning Is Critical in NEPA</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Northeast Pennsylvania's heavy rainfall, autumn leaf fall, and harsh winters make gutter maintenance essential for protecting your home investment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: '💧',
                title: 'Prevent Foundation Damage',
                description: 'Clogged gutters overflow and dump water near your foundation, causing cracks, basement flooding, and costly structural repairs averaging $10,000+.'
              },
              {
                icon: '🧊',
                title: 'Stop Ice Dam Formation',
                description: 'NEPA winters create ice dams when clogged gutters trap water. This backs up under shingles, causing roof leaks and interior water damage.'
              },
              {
                icon: '🏠',
                title: 'Protect Siding & Fascia',
                description: 'Overflowing water rots wood fascia boards and stains siding. Replacement costs $1,500-3,000, far more than preventive cleaning.'
              },
              {
                icon: '🦟',
                title: 'Eliminate Pest Breeding',
                description: 'Standing water in clogged gutters attracts mosquitoes, wasps, and rodents. Debris piles become nests for birds and squirrels.'
              },
              {
                icon: '🌳',
                title: 'Remove Tree Debris',
                description: 'Oak, maple, and pine trees drop massive amounts of leaves, seeds, and needles in NEPA. This clogs gutters within months.'
              },
              {
                icon: '⚡',
                title: 'Extend Gutter Lifespan',
                description: 'Regular cleaning prevents rust and corrosion, extending your gutter system\'s life from 15 to 25+ years.'
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-12">What's Included in Our Gutter Cleaning Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Complete Debris Removal',
                description: 'We hand-scoop all leaves, twigs, pine needles, shingle grit, and decomposed organic matter from your entire gutter system.'
              },
              {
                title: 'Downspout Flushing',
                description: 'Every downspout is flushed with water to ensure proper flow and identify any clogs or drainage issues.'
              },
              {
                title: 'Gutter System Inspection',
                description: 'We inspect for rust, holes, loose sections, improper pitch, and recommend repairs before they become expensive problems.'
              },
              {
                title: 'Ground Cleanup',
                description: 'All debris is bagged and hauled away. We leave your property cleaner than we found it—no mess left behind.'
              },
              {
                title: 'Leak Detection',
                description: 'We test for leaks at seams and end caps while flushing gutters, alerting you to any issues needing attention.'
              },
              {
                title: 'Safety Compliant',
                description: 'Professional-grade ladders, stabilizers, and safety equipment. Fully insured for your protection and peace of mind.'
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEPA-Specific Challenges */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Gutter Challenges Unique to Northeast PA</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                title: 'Heavy Autumn Leaf Fall',
                description: 'The Pocono region is covered in mature oaks, maples, and other deciduous trees. October-November brings massive leaf drops that can completely fill gutters in days. We recommend bi-annual cleaning (spring and fall) for most homes, or even quarterly for heavily wooded properties.'
              },
              {
                title: 'Pine Needle Accumulation',
                description: 'Pine and hemlock trees are abundant in NEPA. Their needles create a dense mat that traps water and accelerates rust. Unlike leaves, pine needles interlock and are harder to remove, requiring hand-scooping rather than blowing.'
              },
              {
                title: 'Freeze-Thaw Cycles',
                description: "NEPA's winter temperatures fluctuate above and freezing, causing repeated ice expansion in clogged gutters. This damages seams and hangers. Pre-winter cleaning is critical to prevent thousands in ice dam damage."
              },
              {
                title: 'Spring Pollen & Seed Pods',
                description: 'Maple helicopters, oak catkins, and pine pollen create a sludge when mixed with spring rain. This clogs downspouts and slows drainage right when April showers hit hardest.'
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-4">Transparent Gutter Cleaning Pricing</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Fair, upfront pricing based on your home's linear feet of gutters. No hidden fees.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Small Homes',
                price: '$120-180',
                details: 'Up to 100 linear feet',
                features: ['Ranch homes', '1-story structures', '1-2 bedrooms', 'Typical: 30-45 min']
              },
              {
                title: 'Medium Homes',
                price: '$180-250',
                details: '100-150 linear feet',
                features: ['2-story colonials', '3-4 bedrooms', 'Most NEPA homes', 'Typical: 1-1.5 hours'],
                highlight: true
              },
              {
                title: 'Large Homes',
                price: '$250-400+',
                details: '150+ linear feet',
                features: ['Large colonials', '3-story homes', 'Complex rooflines', 'Typical: 2-3 hours']
              },
            ].map((tier, idx) => (
              <div key={idx} className={`p-6 rounded-lg ${tier.highlight ? 'bg-green-600 text-white ring-4 ring-green-400' : 'bg-white border-2 border-gray-200'}`}>
                <h3 className={`text-xl font-bold mb-2 ${tier.highlight ? 'text-white' : 'text-gray-900'}`}>{tier.title}</h3>
                <div className={`text-3xl font-bold mb-2 ${tier.highlight ? 'text-white' : 'text-green-600'}`}>{tier.price}</div>
                <p className={`mb-6 text-sm ${tier.highlight ? 'text-green-100' : 'text-gray-600'}`}>{tier.details}</p>
                <ul className="space-y-2">
                  {tier.features.map((feature, i) => (
                    <li key={i} className={`flex items-start gap-2 text-sm ${tier.highlight ? 'text-white' : 'text-gray-700'}`}>
                      <span className={tier.highlight ? 'text-green-200' : 'text-green-600'}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 max-w-2xl mx-auto">
            Pricing factors: linear feet of gutters, height/stories, gutter condition, roof pitch, and accessibility. <strong>Free estimates always provided before work begins.</strong>
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'How often should I clean my gutters in Northeast PA?',
                a: 'Most NEPA homes need gutter cleaning twice per year: late spring (May) and late fall (November). Homes surrounded by trees may need quarterly cleaning. Pine trees require more frequent service due to constant needle drop.'
              },
              {
                q: 'What happens if I don\'t clean my gutters?',
                a: 'Clogged gutters cause water to overflow near your foundation, leading to basement flooding, foundation cracks, rotted fascia boards, ice dams in winter, and mosquito breeding. Repair costs easily exceed $5,000-10,000 versus $150-250 for preventive cleaning.'
              },
              {
                q: 'Can you clean gutters in winter?',
                a: 'Yes, weather permitting. However, we recommend fall cleaning before the first hard freeze to prevent ice dam formation. If gutters are already frozen solid, we may need to wait for a thaw or use specialized techniques.'
              },
              {
                q: 'Do you repair gutters or just clean them?',
                a: 'We focus on cleaning but will identify any issues (loose hangers, holes, improper pitch) during our inspection. We can recommend trusted local gutter contractors for repairs or installations.'
              },
              {
                q: 'How long does gutter cleaning take?',
                a: 'Most residential homes take 1-2 hours for complete cleaning and flushing. Large homes or severely clogged gutters may take 2-3 hours. Commercial properties vary by size.'
              },
              {
                q: 'Do you offer gutter guard installation?',
                a: 'We don\'t install gutter guards, but can discuss pros/cons based on our 10 years of experience. Many guards still require cleaning and can be difficult to service. We\'re happy to share honest advice.'
              },
              {
                q: 'What areas do you serve?',
                a: 'We serve all of Lackawanna County (Scranton, Clarks Summit, Dunmore, Waverly Twp) and parts of Monroe County (Pocono region). Call us to confirm service in your area.'
              },
              {
                q: 'Are you insured?',
                a: 'Yes, we carry full liability insurance and workers compensation. You\'ll never be held liable if an accident occurs on your property.'
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2 text-gray-900">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-blue-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Window Cleaning</h3>
              <Link href="/services/residential" className="text-primary hover:text-primary-dark font-semibold">
                Residential Window Cleaning →
              </Link>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Pressure Washing</h3>
              <Link href="/services/pressure-washing" className="text-primary hover:text-primary-dark font-semibold">
                Exterior Cleaning →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="section-padding">
        <div className="container-custom max-w-2xl">
          <h2 className="text-center mb-8">Get Your Free Gutter Cleaning Estimate</h2>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}

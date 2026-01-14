import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/app/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Pressure Washing Services | Houses, Driveways, Decks | Scranton PA',
  description: 'Professional pressure washing in Northeast PA. Vinyl siding, driveways, sidewalks, decks, patios. Remove mold, algae, dirt. Restore curb appeal. Free estimates. Call (570) 614-9575.',
  openGraph: {
    title: 'Pressure Washing Services | Alexander\'s Cleaning Service',
    description: 'Expert pressure washing for homes and properties across Northeast Pennsylvania.',
    images: ['/images/pressure-washing-og.jpg'],
  },
  alternates: {
    canonical: 'https://windowcleaning.sbs/services/pressure-washing'
  }
};

export default function PressureWashingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Pressure Washing",
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
      "priceRange": "$200-$650",
      "priceCurrency": "USD"
    },
    "description": "Professional pressure washing in Northeast PA. Houses, siding, driveways, sidewalks, decks, patios. Remove mold, algae, dirt. Restore curb appeal."
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
            <li className="text-gray-700">Pressure Washing</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-600 to-red-700 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="mb-6">Professional Pressure Washing Services in Northeast PA</h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Transform your property with expert pressure washing. Houses, siding, driveways, sidewalks, decks, and patios. Remove years of mold, algae, and grime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#quote" className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors text-lg text-center" style={{ minHeight: '48px' }}>
                Get Free Quote
              </a>
              <a href="tel:+15706149575" className="bg-white text-orange-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors text-lg text-center" style={{ minHeight: '48px' }}>
                (570) 614-9575
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What We Pressure Wash */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-12">What We Pressure Wash</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: '🏠',
                title: 'House Siding',
                description: 'Vinyl, aluminum, and wood siding. Remove green algae, black mold, dirt, and oxidation. Restore your home\'s original color and curb appeal.',
                details: 'Safe low-pressure soft washing for delicate surfaces'
              },
              {
                icon: '🚗',
                title: 'Driveways',
                description: 'Concrete and asphalt driveways. Remove oil stains, tire marks, moss, and years of embedded dirt. Dramatically improves appearance.',
                details: '2500-3500 PSI for deep concrete cleaning'
              },
              {
                icon: '🚶',
                title: 'Sidewalks & Walkways',
                description: 'Eliminate slippery algae and moss from concrete walks. Remove gum, stains, and discoloration. Make walkways safe and attractive.',
                details: 'Edge-to-edge cleaning with surface cleaners'
              },
              {
                icon: '🪵',
                title: 'Decks & Patios',
                description: 'Wood and composite decks, concrete or paver patios. Strip old stain/sealer, remove mildew, prepare for refinishing or just clean and restore.',
                details: 'Adjustable pressure for wood vs. concrete'
              },
              {
                icon: '🏘️',
                title: 'Foundations',
                description: 'Concrete block or poured foundations. Remove efflorescence (white mineral deposits), dirt, and mildew. Reveal clean foundation walls.',
                details: 'Prevents deterioration and improves basement sealing'
              },
              {
                icon: '🪜',
                title: 'Fences',
                description: 'Vinyl, wood, and chain-link fences. Restore weathered wood, remove algae from vinyl, clean years of grime from all fence types.',
                details: 'Gentle washing preserves fence integrity'
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-700 mb-3">{item.description}</p>
                <p className="text-sm text-orange-600 italic">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-orange-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Why Pressure Wash Your Property?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Boost Curb Appeal & Home Value',
                description: 'Clean siding, driveway, and deck can increase perceived home value by 5-10% ($10,000-20,000 on a $200k home). Essential before selling or listing.'
              },
              {
                title: 'Prevent Costly Damage',
                description: 'Mold, mildew, and algae break down siding and decking over time. Regular pressure washing extends material lifespan by 5-10 years, saving thousands in replacement costs.'
              },
              {
                title: 'Improve Health & Safety',
                description: 'Algae and moss on walkways/decks create slip hazards. Mold on siding spreads to interior walls. Pressure washing eliminates these health and safety risks.'
              },
              {
                title: 'Prepare for Painting or Staining',
                description: 'Proper pressure washing is essential prep before painting siding or staining decks. Paint/stain won\'t adhere to dirty, moldy surfaces—it\'ll peel within months.'
              },
              {
                title: 'Remove Stubborn Stains',
                description: 'Oil drips on driveways, rust stains on concrete, gum on sidewalks—pressure washing tackles stains that scrubbing by hand can\'t touch.'
              },
              {
                title: 'Save Time & Effort',
                description: 'What would take you days of scrubbing, we complete in hours with professional equipment. No ladders, no back-breaking labor, just results.'
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-4">Our Pressure Washing Process</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            We use professional-grade equipment and proven techniques to safely clean your property without damage.
          </p>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: '1',
                title: 'Property Assessment',
                description: 'We inspect surfaces to identify material types (vinyl vs. wood, concrete vs. pavers) and determine appropriate pressure levels. Delicate surfaces get soft washing; tough concrete gets high pressure.'
              },
              {
                step: '2',
                title: 'Pre-Treatment Application',
                description: 'For heavy mold, algae, or oil stains, we apply eco-friendly cleaning solutions and let them dwell 10-15 minutes. This breaks down organic growth and emulsifies grease for easier removal.'
              },
              {
                step: '3',
                title: 'High-Pressure Washing',
                description: 'Using commercial-grade pressure washers (up to 3500 PSI), we systematically clean surfaces. Adjustable pressure ensures we don\'t damage siding, strip paint, or etch concrete.'
              },
              {
                step: '4',
                title: 'Surface Cleaning (Concrete)',
                description: 'For driveways and sidewalks, we use rotary surface cleaners that provide uniform, streak-free results and prevent "zebra striping" from wand washing.'
              },
              {
                step: '5',
                title: 'Detail Work & Edges',
                description: 'We hand-wand hard-to-reach areas, corners, and edges. We pay special attention to around windows, doors, vents, and electrical fixtures.'
              },
              {
                step: '6',
                title: 'Post-Rinse & Inspection',
                description: 'Final rinse removes all cleaning solution residue. We inspect our work to ensure complete coverage and customer satisfaction before packing up.'
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 bg-white p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEPA Specific */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Pressure Washing Challenges in Northeast PA</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                title: 'Heavy Algae & Moss Growth',
                description: 'NEPA\'s humidity and tree cover create perfect conditions for green algae (gloeocapsa magma) on north-facing siding. This organism feeds on limestone in siding and spreads rapidly. Our treatment kills algae at the roots and prevents regrowth for 12-18 months.'
              },
              {
                title: 'Coal Region Hard Water Stains',
                description: 'Hard water from wells and municipal supplies leaves white calcium deposits on driveways and foundations. Standard pressure washing won\'t remove these—we use acidic cleaners specifically formulated to dissolve mineral buildup.'
              },
              {
                title: 'Winter Salt & De-Icer Damage',
                description: 'Road salt and ice melt products track onto driveways and sidewalks, leaving white residue and accelerating concrete deterioration. Spring pressure washing removes salt before it causes spalling and pitting.'
              },
              {
                title: 'Tree Pollen & Sap',
                description: 'Oak, pine, and maple trees drop massive amounts of pollen and sticky sap on driveways, decks, and siding in spring. This hardens into a stubborn film that requires pre-treatment and higher pressure to remove.'
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
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
          <h2 className="text-center mb-4">Pressure Washing Pricing</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Transparent pricing based on surface type and square footage. Free estimates always provided.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">House Washing</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700">Small ranch (1,000-1,500 sq ft)</span>
                  <span className="font-bold text-orange-600 text-lg">$200-300</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700">Medium colonial (1,500-2,500 sq ft)</span>
                  <span className="font-bold text-orange-600 text-lg">$300-450</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700">Large home (2,500-3,500 sq ft)</span>
                  <span className="font-bold text-orange-600 text-lg">$450-650</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Extra-large (3,500+ sq ft)</span>
                  <span className="font-bold text-orange-600 text-lg">$650+</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-6 italic">Includes all siding, soffits, fascia, and foundation</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Concrete & Decks</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700">Driveway (per 100 sq ft)</span>
                  <span className="font-bold text-orange-600 text-lg">$40-60</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700">Sidewalk (per 50 linear ft)</span>
                  <span className="font-bold text-orange-600 text-lg">$30-50</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700">Deck (wood, per 100 sq ft)</span>
                  <span className="font-bold text-orange-600 text-lg">$75-125</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Patio (concrete/pavers)</span>
                  <span className="font-bold text-orange-600 text-lg">$100-250</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-6 italic">Pricing varies by condition and accessibility</p>
            </div>
          </div>

          <div className="mt-8 max-w-4xl mx-auto bg-yellow-50 border-2 border-yellow-300 p-6 rounded-lg">
            <h4 className="font-bold text-lg mb-3 text-gray-900">Package Deals & Discounts</h4>
            <ul className="space-y-2 text-gray-700">
              <li>✓ <strong>10% off</strong> when combining house + driveway washing</li>
              <li>✓ <strong>15% off</strong> for full exterior package (house, driveway, deck, walkways)</li>
              <li>✓ <strong>Seasonal specials</strong> in spring (April-May) and fall (September-October)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-center mb-12">Pressure Washing FAQs</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Will pressure washing damage my siding or deck?',
                a: 'Not when done correctly. We adjust pressure based on surface type: 500-1200 PSI for vinyl siding and wood (soft washing), 2500-3500 PSI for concrete. Our technicians are trained to avoid damage. DIY pressure washing often causes issues because homeowners use too much pressure or get too close.'
              },
              {
                q: 'What\'s the difference between pressure washing and power washing?',
                a: 'Power washing uses heated water; pressure washing uses cold water. For most residential applications (siding, driveways, decks), cold pressure washing is sufficient and safer. We use power washing only for heavy grease or oil removal.'
              },
              {
                q: 'When is the best time of year to pressure wash in NEPA?',
                a: 'Spring (April-May) and fall (September-October) are ideal. Spring removes winter salt and grime; fall prepares for winter. Avoid washing in freezing temps (below 40°F) as water can freeze on surfaces and in cracks.'
              },
              {
                q: 'How often should I pressure wash my house?',
                a: 'Most NEPA homes benefit from annual or bi-annual house washing. North-facing sides with heavy algae may need annual cleaning. Driveways can be cleaned every 1-2 years. Decks should be washed before staining (every 2-3 years).'
              },
              {
                q: 'Do you use chemicals, and are they safe?',
                a: 'We use eco-friendly, biodegradable detergents for pre-treatment (algaecides, degreasers). These are safe for plants, pets, and humans when used properly. We rinse thoroughly and can cover sensitive plants if needed.'
              },
              {
                q: 'Can you remove oil stains from my driveway?',
                a: 'Yes, though success varies by stain age and concrete porosity. Fresh oil stains (under 6 months) usually come out 90-100% with degreaser and hot water. Old stains (years old) may lighten but not fully disappear, as oil penetrates deep into concrete.'
              },
              {
                q: 'Should I seal my deck or driveway after pressure washing?',
                a: 'Highly recommended! Pressure washing opens wood pores and concrete surface, making it ideal for sealer/stain penetration. Deck stain should be applied within 2-7 days of washing. Concrete sealer extends driveway life and prevents salt damage.'
              },
              {
                q: 'Do I need to be home during pressure washing?',
                a: 'Not necessarily. As long as we have access to an outdoor water spigot and the areas to be cleaned, we can work while you\'re away. We\'ll provide before/after photos and a completion notification.'
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
              <h3 className="text-xl font-semibold mb-2">Gutter Cleaning</h3>
              <Link href="/services/gutter-cleaning" className="text-primary hover:text-primary-dark font-semibold">
                Professional Gutter Cleaning →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="section-padding">
        <div className="container-custom max-w-2xl">
          <h2 className="text-center mb-8">Get Your Free Pressure Washing Quote</h2>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}

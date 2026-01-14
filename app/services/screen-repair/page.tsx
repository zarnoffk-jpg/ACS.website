import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/app/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Window Screen Repair & Replacement | Scranton PA',
  description: 'Professional window screen repair and replacement in Northeast PA. Torn screens, broken frames, pet damage, custom screens. Same-day service available. Call (570) 614-9575.',
  openGraph: {
    title: 'Screen Repair Services | Alexander\'s Cleaning Service',
    description: 'Expert window screen repair and replacement serving Northeast Pennsylvania.',
    images: ['/images/screen-og.jpg'],
  },
  alternates: {
    canonical: 'https://windowcleaning.sbs/services/screen-repair'
  }
};

export default function ScreenRepairPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Window Screen Repair and Replacement",
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
      "priceRange": "$25-$80",
      "priceCurrency": "USD"
    },
    "description": "Professional window screen repair and replacement in Northeast PA. Torn screens, broken frames, pet damage, custom screens. Same-day service available."
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
            <li className="text-gray-700">Screen Repair</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="mb-6">Professional Window Screen Repair & Replacement</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Torn screens? Broken frames? Pet damage? We repair or replace all types of window and door screens. Same-day service often available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#quote" className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors text-lg text-center" style={{ minHeight: '48px' }}>
                Get Free Quote
              </a>
              <a href="tel:+15706149575" className="bg-white text-blue-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors text-lg text-center" style={{ minHeight: '48px' }}>
                (570) 614-9575
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Common Screen Problems */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-12">Common Screen Problems We Fix</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: '🕸️',
                title: 'Torn or Ripped Mesh',
                description: 'Small tears from branches, hail, or accidents. We re-screen with durable fiberglass or aluminum mesh that lasts 10-15 years.'
              },
              {
                icon: '🐕',
                title: 'Pet Damage',
                description: 'Cats and dogs claw or push through standard screens. We install heavy-duty pet-resistant screen material (Phifer Pet Screen) that\'s 7x stronger.'
              },
              {
                icon: '🪟',
                title: 'Bent or Broken Frames',
                description: 'Aluminum frames bend from impacts or improper storage. We straighten frames or fabricate custom replacements to match your windows exactly.'
              },
              {
                icon: '🔧',
                title: 'Loose or Missing Spline',
                description: 'The rubber spline holding mesh in the frame deteriorates over time. We re-spline with fresh material for a tight, long-lasting fit.'
              },
              {
                icon: '📏',
                title: 'Wrong Size Screens',
                description: 'Moved into a home with missing or ill-fitting screens? We custom-build screens to your exact window measurements.'
              },
              {
                icon: '🦟',
                title: 'Ineffective Bug Protection',
                description: 'Torn screens let mosquitoes and flies inside. Fresh screens keep bugs out so you can enjoy summer breezes without pests.'
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screen Options */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Screen Material Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Standard Fiberglass (18x16)',
                price: 'Most economical',
                description: 'Our default mesh. Charcoal gray color, won\'t rust or corrode. Good visibility, blocks 65% of UV rays. Ideal for most homes.',
                best: 'Best for: Standard residential use'
              },
              {
                title: 'Heavy-Duty Pet Screen',
                price: '+$15-25 per screen',
                description: 'Phifer PetScreen material is 7x stronger than standard fiberglass. Resists clawing and pushing from dogs and cats. Slightly thicker weave.',
                best: 'Best for: Homes with pets, high-traffic areas'
              },
              {
                title: 'Aluminum Screen (18x14)',
                price: '+$10-15 per screen',
                description: 'Metal mesh that\'s more durable than fiberglass but can dent. Preferred for historic homes or when matching existing aluminum screens.',
                best: 'Best for: Historic homes, sun porches'
              },
              {
                title: 'Solar/Sunscreen (20x20)',
                price: '+$20-30 per screen',
                description: 'Tighter weave blocks 90% of UV rays and reduces heat gain by 15-30%. Darker appearance but maintains decent visibility.',
                best: 'Best for: South-facing windows, sun rooms'
              },
            ].map((option, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{option.title}</h3>
                <p className="text-blue-600 font-semibold mb-4">{option.price}</p>
                <p className="text-gray-700 mb-4">{option.description}</p>
                <p className="text-sm text-gray-600 italic">{option.best}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-12">Our Screen Repair Process</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                step: '1',
                title: 'Inspection & Assessment',
                description: 'We inspect your screens to determine if repair or replacement is more cost-effective. Minor tears can be patched; large damage requires re-screening.'
              },
              {
                step: '2',
                title: 'Measurement & Material Selection',
                description: 'We measure your screens precisely and help you choose the right mesh type (standard, pet-resistant, solar, etc.) based on your needs and budget.'
              },
              {
                step: '3',
                title: 'Frame Preparation',
                description: 'We remove old spline and damaged mesh, clean the frame channel, and straighten any bent aluminum. Severely damaged frames are replaced.'
              },
              {
                step: '4',
                title: 'Screen Installation',
                description: 'New mesh is stretched taut and secured with fresh rubber spline. We use professional spline rollers to ensure a tight, wrinkle-free fit that won\'t sag.'
              },
              {
                step: '5',
                title: 'Trimming & Quality Check',
                description: 'Excess mesh is trimmed flush with the frame. We test the screen\'s fit in your window and check for proper tension and appearance.'
              },
              {
                step: '6',
                title: 'Reinstallation',
                description: 'Screens are reinstalled in your windows. We ensure they slide smoothly, latch properly, and sit flush in the frame without gaps.'
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl">
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

      {/* Pricing */}
      <section className="section-padding bg-blue-50">
        <div className="container-custom">
          <h2 className="text-center mb-4">Screen Repair Pricing</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Fair, transparent pricing based on screen size and material. Volume discounts for multiple screens.
          </p>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-gray-900">Standard Re-Screening</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-700">Small (up to 24" x 36")</span>
                    <span className="font-bold text-blue-600">$25-35</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Medium (36" x 48")</span>
                    <span className="font-bold text-blue-600">$35-45</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Large (48" x 60"+)</span>
                    <span className="font-bold text-blue-600">$45-60</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Sliding door screens</span>
                    <span className="font-bold text-blue-600">$60-80</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-gray-900">Additional Services</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-700">Pet-resistant upgrade</span>
                    <span className="font-bold text-blue-600">+$15-25</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Solar screen upgrade</span>
                    <span className="font-bold text-blue-600">+$20-30</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Frame replacement</span>
                    <span className="font-bold text-blue-600">$50-75</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Custom fabrication</span>
                    <span className="font-bold text-blue-600">Call for quote</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-center text-gray-700">
                <strong>Volume Discount:</strong> 10% off when ordering 5+ screens | 15% off for 10+ screens
              </p>
              <p className="text-center text-sm text-gray-600 mt-2">
                Prices include labor, materials, and reinstallation. Free estimates always provided.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h2 className="text-center mb-12">Screen Repair FAQs</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Can you repair a small tear in my screen, or do I need full replacement?',
                a: 'Small tears (under 1-2 inches) can sometimes be patched with screen repair tape or patches. However, for long-term durability and appearance, we usually recommend full re-screening, which costs $25-60 depending on size. Patches are visible and only last 1-2 years.'
              },
              {
                q: 'How long does screen repair take?',
                a: 'Most screens are repaired on-site in 10-15 minutes each. If we need to take screens to our shop for custom work or frame straightening, turnaround is typically same-day or next-day.'
              },
              {
                q: 'What\'s the difference between fiberglass and aluminum screen?',
                a: 'Fiberglass is more flexible, won\'t dent, and is rust-proof. It\'s our standard choice for 90% of homes. Aluminum is stiffer and more dent-prone but is preferred for historic homes or when matching existing metal screens.'
              },
              {
                q: 'Will pet-resistant screen work for my dog/cat?',
                a: 'Yes! Phifer PetScreen is specifically designed to resist clawing and pushing from cats and dogs. It\'s 7x stronger than standard fiberglass. We\'ve seen it hold up to large dogs jumping against screens. Highly recommended for pet owners.'
              },
              {
                q: 'Can you make custom screens for oddly-shaped windows?',
                a: 'Absolutely. We custom-fabricate screens for arched windows, bay windows, unusual sizes, and historic windows. We take precise measurements and build screens to match your exact specifications.'
              },
              {
                q: 'Do you repair porch screens and screen doors?',
                a: 'Yes, we repair screens for porches, patios, and screen doors. These are typically larger and may require heavier-duty framing, but the re-screening process is the same.'
              },
              {
                q: 'How long will new screens last?',
                a: 'Standard fiberglass screens last 10-15 years with proper care. Pet-resistant and aluminum screens can last 15-20 years. UV exposure, pet activity, and weather all affect lifespan.'
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-gray-900">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-12">Related Services</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-2">Window Cleaning</h3>
            <p className="text-gray-600 mb-4">Keep your windows sparkling clean with our professional residential window cleaning service</p>
            <Link href="/services/residential" className="text-primary hover:text-primary-dark font-semibold">
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="section-padding bg-gray-50">
        <div className="container-custom max-w-2xl">
          <h2 className="text-center mb-8">Get Your Free Screen Repair Quote</h2>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}

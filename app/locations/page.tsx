import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Service Areas | Window Cleaning Throughout Northeast PA',
  description: 'Professional window cleaning serving Lackawanna County, Monroe County, and all of Northeast Pennsylvania. Find your city or town.',
  alternates: {
    canonical: 'https://windowcleaning.sbs/locations'
  }
};

export default function LocationsPage() {
  const counties = [
    {
      name: 'Lackawanna County',
      cities: [
        { name: 'Scranton', slug: 'scranton' },
        { name: 'Clarks Summit', slug: 'clarks-summit' },
        { name: 'Waverly Township', slug: 'waverly-township' },
        { name: 'Dunmore', slug: 'dunmore' },
        { name: 'Dalton', slug: 'dalton' },
        { name: 'Glenburn', slug: 'glenburn' },
        { name: 'Glenmaura', slug: 'glenmaura' },
        { name: 'Abington Township', slug: 'abington-township' },
        { name: 'South Abington', slug: 'south-abington' },
        { name: 'Moscow', slug: 'moscow' },
      ]
    },
    {
      name: 'Monroe County',
      cities: [
        { name: 'Lake Naomi', slug: 'lake-naomi' },
        { name: 'Timber Trails', slug: 'timber-trails' },
        { name: 'Pocono Pines', slug: 'pocono-pines' },
      ]
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="mb-6">Serving All of Northeast Pennsylvania</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Professional window cleaning across Lackawanna and Monroe County. Find your city below to learn about our local services.
          </p>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="mb-4">Our Service Area</h2>
            <p className="text-lg text-gray-700">
              We proudly serve over 500 homes and businesses throughout Northeast Pennsylvania. Our service area spans Lackawanna and Monroe counties, with specialized knowledge of each community's unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {counties.map((county) => (
              <div key={county.name} className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">{county.name}</h3>
                <ul className="space-y-3">
                  {county.cities.map((city) => (
                    <li key={city.slug}>
                      <Link
                        href={`/locations/${city.slug}`}
                        className="text-lg text-gray-700 hover:text-primary font-medium flex items-center justify-between group"
                      >
                        <span>{city.name}</span>
                        <svg className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Why Local Expertise Matters</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Climate Knowledge</h3>
                <p className="text-gray-600">
                  We understand NEPA's harsh winters, spring pollen from the Poconos, and coal region hard water issues.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Historic Home Specialists</h3>
                <p className="text-gray-600">
                  Trained in cleaning Victorian-era wavy glass and delicate original windows common in our area.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Community Connection</h3>
                <p className="text-gray-600">
                  As locals ourselves, we're invested in our community and committed to exceptional service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Don't See Your City Listed?</h2>
          <p className="text-xl text-blue-100 mb-8">
            We serve additional communities throughout Northeast PA. Call to confirm we service your area!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+15706149575" className="btn-secondary text-center">
              Call (570) 614-9575
            </a>
            <Link href="/#quote" className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors text-lg text-center" style={{ minHeight: '48px' }}>
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

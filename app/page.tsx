import Image from 'next/image';
import Link from 'next/link';
import QuoteForm from './components/QuoteForm';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container-custom py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Professional Window Cleaning<br />in Northeast Pennsylvania
              </h1>
              <p className="text-xl md:text-2xl font-semibold mb-4 text-blue-50">
                Alexander's Cleaning Service - Crystal Clear Service Since 2015
              </p>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Professional window cleaning serving Lackawanna & Monroe County since 2015
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/pricing" className="btn-primary text-center bg-secondary hover:bg-secondary-dark">
                  Get Instant Pricing →
                </Link>
                <a
                  href="tel:+15706149575"
                  className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors text-lg text-center"
                  style={{ minHeight: '48px' }}
                >
                  (570) 614-9575
                </a>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>5.0 Stars (35+ Reviews)</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>500+ Homes Serviced</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Bar */}
      <section className="bg-gray-100 py-8">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">10+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">$2M</div>
              <div className="text-sm text-gray-600">Liability Insurance</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">5.0★</div>
              <div className="text-sm text-gray-600">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Family-Owned Window Cleaning in Northeast Pennsylvania</h2>
            <p className="text-lg text-gray-700 mb-4">
              Since 2015, Kyle and Pamela have been providing professional window cleaning services throughout Lackawanna and Monroe County. As a husband and wife team, we personally handle every job, ensuring the highest quality service and attention to detail that larger companies simply can't match.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              We understand the unique challenges of Northeast Pennsylvania's climate. From harsh winters that leave salt residue and ice damage to spring pollen from the Pocono Mountains, our specialized techniques and eco-friendly solutions keep your windows spotless year-round. Whether you own a historic Victorian in Scranton's Hill Section or a modern home near Lake Naomi, we have the expertise to handle your windows with care.
            </p>
            <p className="text-lg text-gray-700">
              Our commitment to excellence has earned us a 5.0-star rating and the trust of over 500 families and businesses across the region. We're fully licensed and insured with $2M liability coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Professional cleaning solutions for every need</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="mb-3">Residential Window Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Interior and exterior window cleaning for homes of all sizes. We specialize in historic properties, multi-story homes, and hard-to-reach windows. Includes screen cleaning and track detail work.
              </p>
              <Link href="/services/residential" className="text-primary font-semibold hover:text-primary-dark">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="mb-3">Commercial Window Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Professional storefront and office building window cleaning. Flexible scheduling including after-hours service. We work with property managers, retail stores, restaurants, and office complexes.
              </p>
              <Link href="/services/commercial" className="text-primary font-semibold hover:text-primary-dark">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Choose Alexander's Cleaning Service?</h2>
            <p className="text-xl text-gray-600">The difference is in the details</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Husband & Wife Team</h3>
              <p className="text-gray-600">
                You'll work directly with Kyle and Pamela, the owners. No subcontractors, no surprises. Just personal, reliable service every time.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fully Insured & Licensed</h3>
              <p className="text-gray-600">
                $2M liability insurance and Pennsylvania state licensing give you complete peace of mind. Your property is fully protected.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
              <p className="text-gray-600">
                10 years of experience with NEPA's climate, architecture, and unique challenges. We know how to handle everything from coal region hard water to historic windows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real reviews from real customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex text-secondary mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Kyle and Pamela did an incredible job on our 1920s Victorian in Scranton. They were so careful with the original wavy glass windows. Highly recommend!"
              </p>
              <p className="font-semibold text-gray-900">Jennifer M.</p>
              <p className="text-sm text-gray-500">Green Ridge, Scranton</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex text-secondary mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Best window cleaning service in the area! They cleaned all 40 windows at our office building downtown. Professional, on time, and reasonably priced."
              </p>
              <p className="font-semibold text-gray-900">Mike R.</p>
              <p className="text-sm text-gray-500">Business Owner, Clarks Summit</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex text-secondary mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Living near the woods, we get a lot of debris on our windows. Alexander's keeps them spotless year-round. Wouldn't trust anyone else!"
              </p>
              <p className="font-semibold text-gray-900">Sarah K.</p>
              <p className="text-sm text-gray-500">Lake Naomi</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/about#reviews" className="text-primary font-semibold hover:text-primary-dark text-lg">
              Read All 35+ Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Serving All of Northeast Pennsylvania</h2>
            <p className="text-xl text-gray-600">Professional window cleaning across Lackawanna & Monroe County</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            {[
              'Scranton',
              'Clarks Summit',
              'Waverly Township',
              'Glenburn',
              'Lake Naomi',
              'Dalton',
              'Dunmore',
              'Glenmaura',
              'Timber Trails',
              'Abington Township',
              'South Abington',
              'Moscow'
            ].map((city) => (
              <Link
                key={city}
                href={`/locations/${city.toLowerCase().replace(/ /g, '-')}`}
                className="text-primary hover:text-primary-dark font-medium text-center py-2 hover:underline"
              >
                {city}
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/locations" className="btn-primary inline-block">
              View All Service Areas
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing CTA Section */}
      <section id="quote" className="section-padding bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get Your Instant Pricing</h2>
            <p className="text-xl text-blue-100 mb-8">
              Use our interactive pricing calculator to get an instant quote. See exactly what your service will cost based on your home size, location, and window condition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="btn-primary text-center bg-secondary hover:bg-secondary-dark text-lg py-4 px-10"
              >
                Start Pricing Calculator →
              </Link>
              <a
                href="tel:+15706149575"
                className="bg-white text-primary hover:bg-gray-100 font-bold py-4 px-10 rounded-lg transition-colors text-lg text-center"
              >
                Or Call (570) 614-9575
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">How much does window cleaning cost?</h3>
                <p className="text-gray-700">
                  Residential window cleaning typically ranges from $150-$400 depending on the size of your home and number of windows. We offer free estimates and will provide an exact quote after assessing your specific needs.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">Do you clean windows year-round in Pennsylvania's winter?</h3>
                <p className="text-gray-700">
                  Yes! We offer year-round service in Northeast PA. We use specialized solutions that work effectively in cold weather, though we may reschedule in extreme conditions (below 20°F or during ice storms) for safety reasons.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">Are you insured?</h3>
                <p className="text-gray-700">
                  Absolutely. We carry $2M in liability insurance and are fully licensed in Pennsylvania. Your property and our team are completely protected.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">Do I need to be home during the service?</h3>
                <p className="text-gray-700">
                  For exterior-only cleaning, you don't need to be home. For interior and exterior service, we'll need access to your home. Many customers provide a key or garage code for convenience.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">How often should I have my windows professionally cleaned?</h3>
                <p className="text-gray-700">
                  We recommend twice a year (spring and fall) for most homes in Northeast PA. However, if you're near wooded areas, high-traffic roads, or have hard water issues, quarterly cleaning may be beneficial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

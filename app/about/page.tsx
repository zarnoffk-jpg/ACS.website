import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '../components/QuoteForm';

export const metadata: Metadata = {
  title: 'About Us | Meet Kyle & Pamela - Alexander\'s Cleaning Service',
  description: 'Meet Kyle and Pamela, the husband and wife team behind Alexander\'s Cleaning Service. Serving Northeast PA since 2015 with professional window cleaning.',
  alternates: {
    canonical: 'https://windowcleaning.sbs/about'
  }
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="mb-6">Meet Kyle & Pamela</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            The husband and wife team bringing crystal-clear windows to Northeast Pennsylvania since 2015
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                In 2015, Kyle and Pamela Alexander started what would become Northeast Pennsylvania's most trusted window cleaning service. As a husband and wife team based in Waverly Township, we saw a need for reliable, professional window cleaning services that prioritized quality over volume and personal service over corporate efficiency.
              </p>
              <p className="text-gray-700 mb-4">
                What began as a small operation serving our immediate neighbors has grown through word-of-mouth referrals into a thriving business serving over 500 homes and businesses across Lackawanna and Monroe County. We've never advertised heavily—our growth comes entirely from satisfied customers recommending us to friends, family, and neighbors.
              </p>
              <p className="text-gray-700 mb-4">
                Unlike larger companies that send different crews to your home each time, when you hire Alexander's Cleaning Service, you get Kyle and Pamela personally. We don't use subcontractors. We don't employ large teams. It's just us, which means consistent quality, familiar faces, and a level of care and attention that only comes when the business owners are doing the work themselves.
              </p>
              <p className="text-gray-700">
                We're proud to call Northeast Pennsylvania home, and we're grateful to serve the community that has supported us. Whether we're cleaning windows on a historic Victorian in Scranton's Hill Section, a modern estate in Clarks Summit, or helping a small business owner maintain their storefront, we bring the same dedication to excellence that has defined our business from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Why We're Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Owner-Operated Service</h3>
              <p className="text-gray-600">
                You'll always work directly with Kyle and Pamela—the owners. No rotating crews, no subcontractors. Just consistent, quality service from people who stake their reputation on every job.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
              <p className="text-gray-600">
                As Waverly Township residents ourselves, we understand NEPA's unique challenges: hard water from coal region minerals, Pocono pollen, harsh winters, and historic architecture requiring specialized care.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fully Licensed & Insured</h3>
              <p className="text-gray-600">
                We carry $2M in liability insurance and are licensed in Pennsylvania. Your property is fully protected.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">
                If you're not completely satisfied with any window, we'll re-clean it immediately at no charge. Our 5.0-star rating across 35+ reviews reflects our commitment to making things right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Credentials */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Professional Credentials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-primary">10+ Years Experience</h3>
              <p className="text-gray-700 mb-4">
                Since 2014, we've perfected the art of professional window cleaning across Northeast PA. Our decade of expertise covers everything from modern homes to historic properties.
              </p>
              <p className="text-sm text-gray-600">
                <strong>What it means:</strong> You're working with experienced professionals who know the region's unique water and climate challenges.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-primary">Pennsylvania Licensed</h3>
              <p className="text-gray-700 mb-4">
                Fully licensed and insured for both residential and commercial work. Our $2M liability insurance protects your property completely.
              </p>
              <p className="text-sm text-gray-600">
                <strong>What it means:</strong> Complete protection and accountability for every job we do.
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-primary">Historic Home Specialists</h3>
              <p className="text-gray-700 mb-4">
                Specialized training in caring for historic, vintage, and specialty windows. Experience with wavy glass, single-pane, and fragile historical frames.
              </p>
              <p className="text-sm text-gray-600">
                <strong>What it means:</strong> Your historic home gets the expert care it deserves.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-primary">OSHA Safety Certified</h3>
              <p className="text-gray-700 mb-4">
                Trained and certified in workplace safety standards including proper ladder usage, fall protection, and hazard awareness.
              </p>
              <p className="text-sm text-gray-600">
                <strong>What it means:</strong> Safety is our top priority on every job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Community Involvement</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 mb-8">
              Beyond window cleaning, Kyle and Pamela are committed to supporting Northeast Pennsylvania's growth and prosperity.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary text-2xl flex-shrink-0">✓</span>
                <span className="text-gray-700"><strong>Active community members</strong> in Waverly Township</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-2xl flex-shrink-0">✓</span>
                <span className="text-gray-700"><strong>Support for local schools</strong> and educational initiatives</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-2xl flex-shrink-0">✓</span>
                <span className="text-gray-700"><strong>Sponsorship of community events</strong> and organizations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-2xl flex-shrink-0">✓</span>
                <span className="text-gray-700"><strong>Regular participation</strong> in Scranton area networking and business groups</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-2xl flex-shrink-0">✓</span>
                <span className="text-gray-700"><strong>Environmental commitment</strong> to sustainable, eco-friendly cleaning practices</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container-custom">
          <h2 className="text-center text-white mb-12">Alexander's Cleaning Service By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Years in Business</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">35+</div>
              <div className="text-blue-100">5-Star Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="mb-4">Ready to Work With Us?</h2>
              <p className="text-xl text-gray-600">
                Experience the difference that personal, professional service makes. Get your free quote today.
              </p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}

'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Alexander's Cleaning Service</h3>
            <p className="text-gray-300 mb-4">
              Professional window cleaning serving Northeast Pennsylvania since 2015.
            </p>
            <div className="space-y-2 text-gray-300">
              <p>Waverly Township, PA 18411</p>
              <p>
                <a href="tel:+15706149575" className="hover:text-primary-light transition-colors">
                  (570) 614-9575
                </a>
              </p>
              <p>
                <a href="mailto:contact@windowcleaning.sbs" className="hover:text-primary-light transition-colors">
                  contact@windowcleaning.sbs
                </a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/services/residential" className="hover:text-primary-light transition-colors">
                  Residential Window Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/commercial" className="hover:text-primary-light transition-colors">
                  Commercial Window Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/gutter-cleaning" className="hover:text-primary-light transition-colors">
                  Gutter Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/screen-repair" className="hover:text-primary-light transition-colors">
                  Screen Repair
                </Link>
              </li>
              <li>
                <Link href="/services/pressure-washing" className="hover:text-primary-light transition-colors">
                  Pressure Washing
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-primary-light transition-colors font-semibold">
                  Get Instant Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/locations/scranton" className="hover:text-primary-light transition-colors">
                  Scranton
                </Link>
              </li>
              <li>
                <Link href="/locations/clarks-summit" className="hover:text-primary-light transition-colors">
                  Clarks Summit
                </Link>
              </li>
              <li>
                <Link href="/locations/waverly-township" className="hover:text-primary-light transition-colors">
                  Waverly Township
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-primary-light transition-colors">
                  View All Areas
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust Signals */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Why Choose Us</h4>
            <ul className="space-y-2 text-gray-300">
              <li>✓ $2M Liability Insurance</li>
              <li>✓ Licensed in Pennsylvania</li>
              <li>✓ 500+ Homes Serviced</li>
              <li>✓ 5.0 Star Rating</li>
              <li>✓ Family-Owned & Operated</li>
              <li>✓ Since 2015</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Alexander's Cleaning Service. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-primary-light text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-primary-light text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

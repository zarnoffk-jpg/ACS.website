'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors">
              Alexander's Cleaning
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/services/residential" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Residential
            </Link>
            <Link href="/services/commercial" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Commercial
            </Link>
            <Link href="/locations" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Service Areas
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary font-medium transition-colors">
              About Us
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Pricing
            </Link>
            <a
              href="tel:+15706149575"
              className="text-xl font-bold text-primary hover:text-primary-dark transition-colors"
              aria-label="Call Alexander's Cleaning Service at 570-614-9575"
            >
              (570) 614-9575
            </a>
            <Link href="/pricing" className="btn-primary">
              Get Instant Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle mobile menu"
            style={{ minWidth: '48px', minHeight: '48px' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/services/residential"
                className="text-gray-700 hover:text-primary font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Residential Services
              </Link>
              <Link
                href="/services/commercial"
                className="text-gray-700 hover:text-primary font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Commercial Services
              </Link>
              <Link
                href="/services/gutter-cleaning"
                className="text-gray-700 hover:text-primary font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gutter Cleaning
              </Link>
              <Link
                href="/services/screen-repair"
                className="text-gray-700 hover:text-primary font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Screen Repair
              </Link>
              <Link
                href="/services/pressure-washing"
                className="text-gray-700 hover:text-primary font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pressure Washing
              </Link>
              <Link
                href="/locations"
                className="text-gray-700 hover:text-primary font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Service Areas
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-primary font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/pricing"
                className="text-gray-700 hover:text-primary font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Instant Pricing
              </Link>
              <a
                href="tel:+15706149575"
                className="text-2xl font-bold text-primary hover:text-primary-dark py-2"
                aria-label="Call Alexander's Cleaning Service"
              >
                (570) 614-9575
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

'use client';

import Link from 'next/link';

export default function MobileBottomBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-lg z-50">
      <div className="grid grid-cols-2 gap-2 p-2">
        <a
          href="tel:+15706149575"
          className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-4 rounded-lg transition-colors text-center flex items-center justify-center"
          style={{ minHeight: '56px' }}
          aria-label="Call Alexander's Cleaning Service"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call Now
        </a>
        <Link
          href="/#quote"
          className="bg-secondary hover:bg-secondary-dark text-gray-900 font-bold py-4 px-4 rounded-lg transition-colors text-center flex items-center justify-center"
          style={{ minHeight: '56px' }}
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Get Quote
        </Link>
      </div>
    </div>
  );
}

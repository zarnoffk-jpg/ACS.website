import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist. It may have been moved or deleted.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-xl font-semibold mb-4">Looking for window cleaning services?</h3>
          <p className="text-gray-700 mb-6">
            We're here to help! Explore our services or get in touch for a free quote.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <Link
              href="/"
              className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Go to Homepage
            </Link>
            <Link
              href="/locations"
              className="bg-secondary hover:bg-secondary-dark text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors"
            >
              View Service Areas
            </Link>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-600 mb-4">Or call us directly:</p>
            <a
              href="tel:+15706149575"
              className="text-3xl font-bold text-primary hover:text-primary-dark transition-colors"
            >
              (570) 614-9575
            </a>
          </div>
        </div>

        <nav className="bg-white rounded-lg shadow-lg p-6">
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <Link href="/services/residential" className="text-primary hover:text-primary-dark">
              Residential Services
            </Link>
            <Link href="/services/commercial" className="text-primary hover:text-primary-dark">
              Commercial Services
            </Link>
            <Link href="/about" className="text-primary hover:text-primary-dark">
              About Us
            </Link>
            <Link href="/#quote" className="text-primary hover:text-primary-dark">
              Get Free Quote
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

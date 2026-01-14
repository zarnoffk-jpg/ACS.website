'use client';

import { useState } from 'react';

interface ValidationError {
  field: string;
  message: string;
}

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setFieldErrors({});

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle rate limiting
        if (response.status === 429) {
          const retryAfter = data.retryAfter || 60;
          throw new Error(
            `Too many requests. Please wait ${retryAfter} seconds and try again, or call us at (570) 614-9575`
          );
        }

        // Handle validation errors
        if (response.status === 400 && data.details) {
          const errors: Record<string, string> = {};
          data.details.forEach((err: ValidationError) => {
            errors[err.field] = err.message;
          });
          setFieldErrors(errors);
          throw new Error('Please check the form for errors');
        }

        throw new Error(data.error || 'Failed to submit quote request');
      }

      setSubmitted(true);

      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', contact: '', service: '', message: '' });
      }, 5000);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please call us at (570) 614-9575'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
      <h3 className="text-2xl font-bold mb-2">Get Your Free Quote</h3>
      <p className="text-gray-600 mb-6 text-sm">
        We'll respond within 1 hour during business hours
      </p>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
          <p className="text-red-800 text-sm">{error}</p>
        </div>
      )}

      {submitted ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <svg className="w-16 h-16 mx-auto text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <h4 className="text-xl font-bold text-green-800 mb-2">Thank You!</h4>
          <p className="text-green-700">We'll contact you shortly with your free quote.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                fieldErrors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="John Smith"
              style={{ minHeight: '48px', fontSize: '16px' }}
              aria-invalid={!!fieldErrors.name}
              aria-describedby={fieldErrors.name ? 'name-error' : undefined}
            />
            {fieldErrors.name && (
              <p id="name-error" className="text-red-600 text-sm mt-1" role="alert">
                {fieldErrors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
              Phone or Email *
            </label>
            <input
              type="text"
              id="contact"
              required
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                fieldErrors.contact ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="(570) 555-1234 or email@example.com"
              style={{ minHeight: '48px', fontSize: '16px' }}
              aria-invalid={!!fieldErrors.contact}
              aria-describedby={fieldErrors.contact ? 'contact-error' : undefined}
            />
            {fieldErrors.contact && (
              <p id="contact-error" className="text-red-600 text-sm mt-1" role="alert">
                {fieldErrors.contact}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
              Service Needed *
            </label>
            <select
              id="service"
              required
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                fieldErrors.service ? 'border-red-500' : 'border-gray-300'
              }`}
              style={{ minHeight: '48px', fontSize: '16px' }}
              aria-invalid={!!fieldErrors.service}
              aria-describedby={fieldErrors.service ? 'service-error' : undefined}
            >
              <option value="">Select a service</option>
              <option value="residential">Residential Window Cleaning</option>
              <option value="commercial">Commercial Window Cleaning</option>
              <option value="gutter-cleaning">Gutter Cleaning</option>
              <option value="screen-repair">Screen Repair</option>
              <option value="pressure-washing">Pressure Washing</option>
              <option value="other">Other / Not Sure</option>
            </select>
            {fieldErrors.service && (
              <p id="service-error" className="text-red-600 text-sm mt-1" role="alert">
                {fieldErrors.service}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Additional Details (Optional)
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                fieldErrors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Tell us about your project..."
              rows={3}
              style={{ fontSize: '16px' }}
              aria-invalid={!!fieldErrors.message}
              aria-describedby={fieldErrors.message ? 'message-error' : undefined}
            />
            {fieldErrors.message && (
              <p id="message-error" className="text-red-600 text-sm mt-1" role="alert">
                {fieldErrors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ minHeight: '48px' }}
          >
            {loading ? 'Sending...' : 'Get My Free Quote'}
          </button>

          <p className="text-xs text-gray-500 text-center">
            We never share your information. Privacy guaranteed.
          </p>
        </form>
      )}

      <div className="mt-6 pt-6 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-600 mb-2">Prefer to call?</p>
        <a
          href="tel:+15706149575"
          className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors"
        >
          (570) 614-9575
        </a>
      </div>
    </div>
  );
}

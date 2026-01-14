import type { Metadata } from 'next';
import PricingCalculator from '@/app/components/calculator/PricingCalculator';

export const metadata: Metadata = {
  title: 'Instant Pricing Calculator - Free Quote in 60 Seconds',
  description: 'Get your window cleaning quote instantly with our AI-powered pricing calculator. Serving Lackawanna & Monroe County. Free estimate, no obligation.',
  keywords: [
    'window cleaning calculator',
    'instant quote',
    'pricing tool',
    'window cleaning cost',
    'free estimate',
    'NEPA window cleaning'
  ],
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <PricingCalculator />
    </div>
  );
}

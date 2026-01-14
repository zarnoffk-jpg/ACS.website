'use client';

import React, { useState, useEffect, useRef } from 'react';
import { CalcHero } from './CalcHero';
import { WizardProgress } from './WizardProgress';
import { PackageCard } from './PackageCard';
import { PropertyHealthMeter } from './PropertyHealthMeter';
import { SocialProofPopup } from './SocialProofPopup';
import { StickyBar } from './StickyBar';
import { ContactModal } from './ContactModal';
import { generateDynamicInsights } from '@/lib/gemini-service';
import { notifyNewLead, notifyPackageSelected } from '@/lib/lead-notification';
import { AssessmentData, Package, AiInsight, HomeSize } from '@/types/calculator';
import { PRICING_TIERS, LUXURY_FEATURES, DELUXE_FEATURES, BASIC_FEATURES } from '@/lib/pricing-constants';

const PricingCalculator: React.FC = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<AssessmentData>({
    zipCode: '',
    homeSize: 'medium',
    stories: '2',
    lastCleaned: '1-2yr',
    trackCondition: 'dusty',
    services: ['Window Cleaning'],
    name: '',
    phone: '',
    email: '',
    requestedServices: [],
  });
  const [insights, setInsights] = useState<AiInsight | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStatus, setProcessingStatus] = useState('');
  const [selectedPackageId, setSelectedPackageId] = useState<'basic' | 'deluxe' | 'luxury'>('deluxe');
  const [revealedIds, setRevealedIds] = useState<Set<string>>(new Set());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isStickyBarVisible, setIsStickyBarVisible] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [revealedSteps, setRevealedSteps] = useState<Set<number>>(new Set());

  const reportRef = useRef<HTMLDivElement>(null);
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);
  const step4Ref = useRef<HTMLDivElement>(null);
  const pricingSectionRef = useRef<HTMLDivElement>(null);
  const totalSteps = 4;

  // Scroll event handler for sticky bar visibility
  useEffect(() => {
    const handleScroll = () => {
      if (!step4Ref.current || !pricingSectionRef.current) return;

      const step4Rect = step4Ref.current.getBoundingClientRect();
      const pricingRect = pricingSectionRef.current.getBoundingClientRect();

      const passedHeader = step4Rect.top < -100;
      const reachedPricing = pricingRect.top < 150;

      if (step === 4 && passedHeader && !reachedPricing) {
        setIsStickyBarVisible(true);
      } else {
        setIsStickyBarVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [step]);

  // Step entrance animations
  useEffect(() => {
    const stepRefs = [
      { ref: step1Ref, stepNum: 1 },
      { ref: step2Ref, stepNum: 2 },
      { ref: step3Ref, stepNum: 3 },
      { ref: step4Ref, stepNum: 4 }
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepNum = parseInt(entry.target.getAttribute('data-step') || '0');
            if (stepNum > 0) {
              setRevealedSteps(prev => {
                const newSet = new Set(prev);
                newSet.add(stepNum);
                return newSet;
              });
            }
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    stepRefs.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Premium Scroll Intersection Logic
  useEffect(() => {
    if (step === 4 && insights) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute('data-reveal-id');
              if (id) {
                setRevealedIds(prev => {
                  const newSet = new Set(prev);
                  newSet.add(id);
                  return newSet;
                });
              }
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
      );

      const items = document.querySelectorAll('[data-reveal-id]');
      items.forEach((item) => observer.observe(item));

      return () => observer.disconnect();
    }
  }, [step, insights]);

  const handleNext = () => {
    if (step === 3) {
      triggerProcessing();
    } else {
      setStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const handleBack = () => setStep(prev => Math.max(prev - 1, 1));

  const triggerProcessing = async () => {
    // STEP 1: VALIDATE DATA (before any notifications)
    if (!data.name || !data.phone) {
      setSubmitError('Please provide your name and phone number');
      return;
    }

    if (!data.zipCode) {
      setSubmitError('Please enter a valid ZIP code');
      return;
    }

    setSubmitError(null);
    setIsProcessing(true);

    try {
      // STEP 2: FIRE LEAD NOTIFICATION (after validation succeeds)
      // Fire in background - don't wait for it to complete
      notifyNewLead({
        name: data.name,
        phone: data.phone,
        zipCode: data.zipCode,
        homeSize: data.homeSize
      }).catch(err => {
        // Log error but don't interrupt user experience
        console.warn('Lead notification failed (non-critical):', err);
      });

      // STEP 3: SHOW PROCESSING ANIMATION
      const statuses = [
        'ANALYZING YOUR PROPERTY...',
        'SCANNING ' + data.zipCode + ' REGION...',
        'ASSESSING ' + data.homeSize.toUpperCase() + ' CHARACTERISTICS...',
        'CROSS-REFERENCING 500+ HOMES...',
        'GENERATING YOUR ESTIMATE...'
      ];

      for (const status of statuses) {
        setProcessingStatus(status);
        await new Promise(r => setTimeout(r, 600));
      }

      // STEP 4: GENERATE AI INSIGHTS
      const result = await generateDynamicInsights(data);
      if (!result) {
        throw new Error('Failed to generate insights');
      }

      setInsights(result);
      setStep(4);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : 'Failed to generate estimate. Please try again.'
      );
      console.error('Processing error:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const getPackages = (): Package[] => {
    const prices = PRICING_TIERS[data.homeSize];
    return [
      {
        id: 'basic',
        name: 'Just the Basics',
        tagline: 'Basic Package',
        priceRange: prices.basic,
        features: BASIC_FEATURES,
        preservationValue: 150
      },
      {
        id: 'deluxe',
        name: 'Inside + Outside',
        tagline: 'Most Popular',
        priceRange: prices.deluxe,
        features: DELUXE_FEATURES,
        preservationValue: 300,
        recommended: true
      },
      {
        id: 'luxury',
        name: 'The Full Treatment',
        tagline: 'Premium Package',
        priceRange: prices.luxury,
        features: LUXURY_FEATURES,
        preservationValue: 500
      }
    ];
  };

  const isRevealed = (id: string) => revealedIds.has(id);

  const openModal = async () => {
    // Validate that we have all required data
    if (!data.name || !data.phone || !data.zipCode) {
      setSubmitError('Please complete all required fields');
      return;
    }

    const selectedPackage = getPackages().find(p => p.id === selectedPackageId);
    if (!selectedPackage) {
      setSubmitError('Please select a valid package');
      return;
    }

    // Fire package selection notification (fire and forget, don't block user)
    notifyPackageSelected({
      name: data.name,
      phone: data.phone,
      zipCode: data.zipCode,
      homeSize: data.homeSize,
      lastCleaned: data.lastCleaned,
      trackCondition: data.trackCondition,
      packageName: selectedPackage.name,
      priceRange: selectedPackage.priceRange
    }).catch(err => {
      // Log but don't interrupt - this is non-critical
      console.warn('Package selection notification failed:', err);
    });

    // Open the contact modal
    setIsContactModalOpen(true);
  };

  const handleSubmitQuote = async () => {
    // Validate all required data before submission
    if (!data.name || !data.phone || !data.zipCode || !insights) {
      setSubmitError('Missing required information. Please go back and complete all fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const selectedPackage = getPackages().find(p => p.id === selectedPackageId);
      if (!selectedPackage) {
        throw new Error('Selected package not found');
      }

      const quoteData = {
        name: data.name,
        contact: data.phone,
        service: 'Calculator Quote',
        message: `
          Calculator Quote Summary:
          - Home Size: ${data.homeSize}
          - ZIP: ${data.zipCode}
          - Selected Package: ${selectedPackageId}
          - Estimated Price: $${selectedPackage?.priceRange[0]}-$${selectedPackage?.priceRange[1]}
          - Property Health Score: ${insights?.healthScore || 0}
        `,
        // Calculator-specific fields
        zipCode: data.zipCode,
        homeSize: data.homeSize,
        stories: data.stories,
        lastCleaned: data.lastCleaned,
        trackCondition: data.trackCondition,
        selectedPackage: selectedPackageId,
        calculatedPrice: selectedPackage?.priceRange[0] || 0,
        aiInsights: insights,
        quoteSource: 'calculator' as const,
      };

      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(quoteData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to submit quote');
      }

      // Success - show confirmation
      setStep(5);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit quote');
      console.error('Submit error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isProcessing) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center overflow-hidden">
        <div className="relative">
          <div className="w-48 h-48 mb-12 relative mx-auto">
            <div className="absolute inset-0 border-[1px] border-blue-100 rounded-full scale-125 animate-pulse" />
            <div className="absolute inset-0 border-t-2 border-[#0066CC] rounded-full animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[#0066CC] font-black text-xs tracking-widest">ANALYZING</span>
            </div>
          </div>
          <h2 className="text-xl font-black text-slate-900 tracking-widest uppercase mb-4">
            {processingStatus}
          </h2>
          <div className="max-w-xs mx-auto h-0.5 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-[#0066CC] transition-all duration-500" style={{ width: `${(processingStatus.length * 7) % 100}%` }} />
          </div>
        </div>
      </div>
    );
  }

  // Success screen
  if (step === 5) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-2xl">
          <div className="mb-8">
            <div className="text-8xl mb-6">✓</div>
            <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter">
              Quote Submitted Successfully!
            </h1>
            <p className="text-2xl text-slate-500 font-medium mb-8">
              Kyle will review your information and contact you within 1 hour at <strong>{data.phone}</strong>
            </p>
            <p className="text-lg text-slate-400 mb-12">
              We've also sent your personalized estimate to your email if you provided one.
            </p>
          </div>
          <div className="bg-blue-50 border-2 border-[#0066CC] rounded-3xl p-8 mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Your Quote Summary</h2>
            <div className="grid grid-cols-2 gap-8 text-left mb-8">
              <div>
                <div className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">Package</div>
                <div className="text-2xl font-black text-slate-900">{selectedPackageId.charAt(0).toUpperCase() + selectedPackageId.slice(1)}</div>
              </div>
              <div>
                <div className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">Estimated Price</div>
                <div className="text-2xl font-black text-[#0066CC]">
                  ${getPackages().find(p => p.id === selectedPackageId)?.priceRange[0]}-${getPackages().find(p => p.id === selectedPackageId)?.priceRange[1]}
                </div>
              </div>
            </div>
          </div>
          <a
            href="/"
            className="inline-block px-12 py-5 bg-[#0066CC] text-white rounded-2xl font-black text-lg hover:bg-[#004C99] transition-all"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-40 relative">
      <div className="max-w-6xl mx-auto px-6">
        <CalcHero />
        <WizardProgress currentStep={step} totalSteps={totalSteps} />

        <div className="max-w-4xl mx-auto">
          {step === 1 && (
            <div
              ref={step1Ref}
              data-step="1"
              className={`bg-white rounded-[3.5rem] p-12 shadow-lg border border-slate-100 ${
                revealedSteps.has(1) ? 'animate-fade-in' : 'opacity-0 translate-y-5'
              }`}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-[#0066CC] rounded-[1.8rem] flex items-center justify-center text-white font-black text-xl">01</div>
                  <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Property Details</h2>
                </div>
                <div className="px-6 py-3 bg-blue-50 border border-blue-100 rounded-[1.5rem] text-[#0066CC] text-[10px] font-black uppercase tracking-[0.2em]">
                  ✓ ZIP Code Calibrated
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-12">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-5 px-1">ZIP Code</label>
                    <input
                      type="text"
                      value={data.zipCode}
                      onChange={(e) => setData({...data, zipCode: e.target.value})}
                      placeholder="e.g. 18411"
                      className="w-full px-8 py-7 rounded-[2.5rem] border-2 border-slate-100 bg-white focus:border-[#0066CC] outline-none transition-all text-2xl font-black"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-5 px-1">Home Size</label>
                    <div className="grid grid-cols-2 gap-4">
                      {(['small', 'medium', 'large', 'xl'] as HomeSize[]).map(size => (
                        <button
                          key={size}
                          onClick={() => setData({...data, homeSize: size})}
                          className={`py-6 rounded-[2rem] border-2 font-black text-sm transition-all hover:scale-[1.02] ${
                            data.homeSize === size
                              ? 'border-[#0066CC] bg-[#0066CC] text-white shadow-xl'
                              : 'border-slate-100 bg-white text-slate-500 hover:border-blue-200'
                          }`}
                        >
                          {size === 'small' ? 'Small' : size === 'medium' ? 'Medium' : size === 'large' ? 'Large' : 'Estate'}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-slate-900 rounded-[3rem] p-12 text-white flex flex-col justify-between shadow-2xl">
                  <div>
                    <h3 className="text-3xl font-bold mb-4 tracking-tight">Honest work. Every time.</h3>
                    <p className="text-slate-400 text-sm mb-8 leading-relaxed">We're local. We do it right. Been at it since 2014. No hidden fees, just clear windows.</p>
                  </div>
                  <div className="pt-12 border-t border-slate-700 mt-12">
                    <button
                      onClick={handleNext}
                      disabled={!data.zipCode}
                      className="w-full py-7 bg-[#0066CC] text-white rounded-[2.5rem] font-black text-2xl hover:bg-[#004C99] transition-all disabled:opacity-20 active:scale-95"
                    >
                      NEXT STEP →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div
              ref={step2Ref}
              data-step="2"
              className={`max-w-xl mx-auto bg-white rounded-[3.5rem] p-12 shadow-lg border border-slate-100 text-center ${
                revealedSteps.has(2) ? 'animate-fade-in' : 'opacity-0 translate-y-5'
              }`}
            >
              <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tighter">
                Window Condition Check
              </h2>
              <div className="space-y-6 text-left mt-12">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4 px-3">Last Cleaning</label>
                  <div className="space-y-3">
                    {(['recent', '1-2yr', 'over2yr', 'never'] as const).map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setData({...data, lastCleaned: opt})}
                        className={`w-full text-left px-8 py-6 rounded-[2.5rem] border-2 transition-all flex justify-between items-center ${
                          data.lastCleaned === opt
                            ? 'border-[#0066CC] bg-blue-50 text-slate-900'
                            : 'border-slate-100 bg-white text-slate-600 hover:border-blue-200'
                        }`}
                      >
                        <span className="font-black">
                          {opt === 'recent' ? 'Under 6 months' : opt === '1-2yr' ? '6-12 months' : opt === 'over2yr' ? '1-3 years' : '3+ years'}
                        </span>
                        <div className={`w-4 h-4 rounded-full border-2 ${data.lastCleaned === opt ? 'bg-[#0066CC] border-[#0066CC]' : 'border-slate-300'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4 px-3">Current Condition</label>
                  <div className="space-y-3">
                    {(['clean', 'dusty', 'dirty', 'neglected'] as const).map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setData({...data, trackCondition: opt})}
                        className={`w-full text-left px-8 py-6 rounded-[2.5rem] border-2 transition-all flex justify-between items-center ${
                          data.trackCondition === opt
                            ? 'border-[#0066CC] bg-blue-50 text-slate-900'
                            : 'border-slate-100 bg-white text-slate-600 hover:border-blue-200'
                        }`}
                      >
                        <span className="font-black capitalize">
                          {opt === 'clean' ? 'Clean' : opt === 'dusty' ? 'Light dust' : opt === 'dirty' ? 'Moderate buildup' : 'Heavy buildup'}
                        </span>
                        <div className={`w-4 h-4 rounded-full border-2 ${data.trackCondition === opt ? 'bg-[#0066CC] border-[#0066CC]' : 'border-slate-300'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleNext}
                  className="w-full mt-8 py-8 bg-[#0066CC] text-white rounded-[2.5rem] font-black text-2xl hover:bg-[#004C99] transition-all shadow-xl active:scale-95"
                >
                  CONTINUE →
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div
              ref={step3Ref}
              data-step="3"
              className={`bg-white rounded-[3.5rem] p-12 shadow-lg border border-slate-100 ${
                revealedSteps.has(3) ? 'animate-fade-in' : 'opacity-0 translate-y-5'
              }`}
            >
              <div className="flex items-center gap-6 mb-16">
                <div className="w-14 h-14 bg-[#0066CC] rounded-[1.8rem] flex items-center justify-center text-white font-black text-xl">03</div>
                <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Your Contact Info</h2>
              </div>
              <div className="max-w-xl mx-auto space-y-8 mb-12">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4 px-3">Full Name</label>
                  <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData({...data, name: e.target.value})}
                    placeholder="Your name"
                    className="w-full px-8 py-7 rounded-[2.5rem] border-2 border-slate-100 bg-white outline-none font-black text-xl focus:border-[#0066CC] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4 px-3">Phone Number</label>
                  <input
                    type="tel"
                    value={data.phone}
                    onChange={(e) => setData({...data, phone: e.target.value})}
                    placeholder="(570) 555-1234"
                    className="w-full px-8 py-7 rounded-[2.5rem] border-2 border-slate-100 bg-white outline-none font-bold text-xl focus:border-[#0066CC] transition-all"
                  />
                </div>

                {submitError && (
                  <div className="mt-8 p-6 bg-rose-50 border-2 border-rose-200 rounded-2xl">
                    <p className="text-rose-700 font-bold">{submitError}</p>
                  </div>
                )}

                <button
                  onClick={handleNext}
                  disabled={!data.name || !data.phone || isProcessing}
                  className="w-full mt-8 py-8 bg-[#0066CC] text-white rounded-[2.5rem] font-black text-2xl hover:bg-[#004C99] transition-all shadow-xl disabled:opacity-20 active:scale-95"
                >
                  GENERATE ESTIMATE →
                </button>
              </div>
            </div>
          )}

          {step === 4 && insights && (
            <div className="space-y-32 pb-48" ref={step4Ref}>
              <div className="grid md:grid-cols-12 gap-12 items-start">
                <div className="md:col-span-8 space-y-12">
                  <div data-reveal-id="header" className={`mb-20 ${isRevealed('header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} transition-all duration-700 ease-out`}>
                    <span className="px-6 py-2 bg-blue-50 text-[#0066CC] text-[10px] font-black uppercase tracking-[0.4em] rounded-full border border-blue-200 mb-6 inline-block">
                      ESTIMATE #{Math.floor(Math.random()*10000)}
                    </span>
                    <h2 className="text-7xl font-black text-slate-900 tracking-tighter leading-none">Your Estimate</h2>
                    <p className="text-2xl text-slate-400 font-medium mt-4 tracking-tight">Based on 500+ homes in Northeast PA</p>
                  </div>

                  <div
                    data-reveal-id="analysis-box"
                    className={`p-16 bg-slate-900 rounded-[3.5rem] text-white shadow-lg relative group overflow-hidden ${
                      isRevealed('analysis-box') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    } transition-all duration-700 ease-out`}
                  >
                    <label className="text-[11px] font-black text-blue-400 uppercase tracking-[0.6em] block mb-10 opacity-60">Property Assessment</label>
                    <p className="text-slate-100 font-semibold leading-relaxed text-3xl">
                      "{insights.observation}"
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <div
                      data-reveal-id="risk-box"
                      className={`p-12 bg-white border-2 border-slate-100 rounded-[3rem] shadow-lg ${
                        isRevealed('risk-box') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                      } transition-all duration-700 ease-out`}
                    >
                      <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mb-8 font-black text-xl">!</div>
                      <label className="text-[11px] font-black text-rose-600 uppercase tracking-[0.4em] block mb-6">Risk Factor</label>
                      <p className="text-slate-700 text-lg font-bold leading-relaxed">{insights.riskFactor}</p>
                    </div>

                    <div
                      data-reveal-id="math-box"
                      className={`p-12 bg-white border-2 border-slate-100 rounded-[3rem] shadow-lg ${
                        isRevealed('math-box') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                      } transition-all duration-700 ease-out`}
                    >
                      <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-8 font-black text-xl">$</div>
                      <label className="text-[11px] font-black text-amber-600 uppercase tracking-[0.4em] block mb-6">Financial Impact</label>
                      <p className="text-slate-700 text-lg font-bold leading-relaxed">{insights.financialImpact}</p>
                    </div>
                  </div>

                  <div
                    data-reveal-id="tip-box"
                    className={`p-14 bg-[#0066CC] rounded-[4rem] flex items-center gap-12 shadow-xl ${
                      isRevealed('tip-box') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    } transition-all duration-700 ease-out`}
                  >
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-[2.5rem] flex items-center justify-center text-white flex-shrink-0 font-black text-5xl">💡</div>
                    <div className="text-white">
                      <label className="text-[11px] font-black text-blue-100 uppercase tracking-[0.5em] block mb-4 opacity-70">Pro Tip</label>
                      <p className="text-3xl font-black leading-tight tracking-tighter">{insights.proTip}</p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-4 space-y-12 sticky top-16">
                  <div data-reveal-id="health-box" className={`${isRevealed('health-box') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} transition-all duration-700 ease-out`}>
                    <PropertyHealthMeter score={insights.healthScore} />
                  </div>
                </div>
              </div>

              <div ref={pricingSectionRef}>
                <div data-reveal-id="pricing-header" className={`text-center pt-48 pb-24 ${isRevealed('pricing-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} transition-all duration-700 ease-out`}>
                  <h2 className="text-8xl font-black text-slate-900 tracking-tighter mb-8 leading-none">Select Your Service</h2>
                <p className="text-slate-400 font-bold uppercase text-[12px] tracking-[0.6em]">Recommended for {data.homeSize} homes in {data.zipCode}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-10">
                {getPackages().map((pkg, idx) => (
                  <div
                    key={pkg.id}
                    data-reveal-id={`pkg-${pkg.id}`}
                    className={`${isRevealed(`pkg-${pkg.id}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} transition-all duration-700 ease-out`}
                  >
                    <PackageCard
                      pkg={pkg}
                      isSelected={selectedPackageId === pkg.id}
                      onClick={() => setSelectedPackageId(pkg.id as any)}
                      homeSize={data.homeSize}
                      zipCode={data.zipCode}
                    />
                  </div>
                ))}
              </div>

              <div
                data-reveal-id="final-cta"
                className={`mt-40 bg-white rounded-[4rem] p-24 shadow-lg text-center relative overflow-hidden border border-slate-100 ${
                  isRevealed('final-cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                } transition-all duration-700 ease-out`}
              >
                <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-[#0066CC] via-[#0066CC] to-[#0066CC]" />
                <div className="mb-20">
                  <span className="px-10 py-4 bg-slate-50 rounded-full text-[14px] font-black text-slate-400 uppercase tracking-[0.6em]">
                    Estimated Range
                  </span>
                </div>
                <h3 className="text-[12rem] font-black text-slate-900 mb-10 tracking-tighter leading-none select-none">
                  ${getPackages().find(p => p.id === selectedPackageId)?.priceRange[0]}
                  <span className="text-6xl text-slate-300 align-top mt-16 inline-block font-black ml-2">+</span>
                </h3>
                <p className="text-slate-400 font-bold text-3xl mb-24 tracking-tighter max-w-2xl mx-auto">
                  Your Custom Estimate
                  <br />
                  <span className="text-xl opacity-60">Final price will be confirmed on-site</span>
                </p>

                {submitError && (
                  <div className="mb-8 p-6 bg-rose-50 border-2 border-rose-200 rounded-2xl">
                    <p className="text-rose-700 font-bold">{submitError}</p>
                  </div>
                )}

                <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto pt-10">
                  <button
                    onClick={openModal}
                    disabled={isSubmitting}
                    className="flex-[3] py-14 bg-[#0066CC] text-white rounded-[2rem] font-black text-3xl shadow-xl hover:bg-[#004C99] hover:-translate-y-2 transition-all active:scale-95 disabled:opacity-50 leading-none"
                  >
                    LET'S DO THIS →
                  </button>
                  <button
                    onClick={() => window.location.href = 'tel:5706149575'}
                    className="flex-1 py-14 bg-white border-[3px] border-slate-200 text-slate-900 rounded-[2rem] font-black text-2xl hover:border-[#0066CC] hover:text-[#0066CC] transition-all active:scale-95 shadow-lg"
                  >
                    📞
                  </button>
                </div>
              </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Global Components */}
      <SocialProofPopup />
      <StickyBar
        name={data.name}
        isVisible={isStickyBarVisible}
        onSeePrice={() => pricingSectionRef.current?.scrollIntoView({ behavior: 'smooth' })}
      />
      <ContactModal
        isOpen={isContactModalOpen}
        name={data.name}
        packageName={getPackages().find(p => p.id === selectedPackageId)?.name || 'Service'}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
};

export default PricingCalculator;

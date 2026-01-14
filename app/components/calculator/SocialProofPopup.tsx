'use client';

import React, { useState, useEffect } from 'react';

interface Review {
  name: string;
  body: string;
  source: string;
}

const REVIEWS: Review[] = [
  { name: "Linda S.", body: "Excellent service from Kyle and Pamela at a very reasonable price!", source: "Google" },
  { name: "Roland C.", body: "The best in the business! Kyle is one of the most professional business owners we know.", source: "Facebook" },
  { name: "Clarks Summit Customer", body: "They worked quickly and did a fantastic job on our two story house!", source: "Google" },
  { name: "Verified Homeowner", body: "Pricing was fair. We had very difficult to reach windows, and they made them shine!", source: "Google" },
  { name: "Spring Cleaning Client", body: "Such a friendly, trustworthy and HARDWORKING couple.", source: "NiceJob" },
  { name: "High Windows Client", body: "I have very high windows and many of them! They looked amazing!", source: "NiceJob" },
  { name: "Repeat Customer", body: "I'll always be on their yearly callback list. Excellent work.", source: "Google" },
  { name: "Home Seller", body: "They were very professional and made our windows look their best.", source: "Google" },
  { name: "Waverly Township Resident", body: "Finally found a local team I can trust. No upselling, just great honest work.", source: "Google" },
  { name: "Commercial Client", body: "We use Kyle and Pamela for our shop and they never disappoint.", source: "Facebook" }
];

export const SocialProofPopup: React.FC = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 4 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    // Cycle reviews every 10 seconds
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentReviewIndex(prev => (prev + 1) % REVIEWS.length);
        setIsVisible(true);
      }, 500);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const review = REVIEWS[currentReviewIndex];

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 transition-all duration-700 transform ${
        isVisible
          ? 'translate-y-0 opacity-100 scale-100 pointer-events-auto'
          : 'translate-y-12 opacity-0 scale-95 pointer-events-none'
      }`}
    >
      <div className="bg-white shadow-2xl rounded-2xl p-4 border border-slate-100 flex items-center gap-4 max-w-sm">
        <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center shrink-0">
          <span className="text-emerald-600 text-xl font-bold">★</span>
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black text-slate-900 uppercase tracking-tighter">Verified Review</span>
            <div className="flex gap-0.5">
              <span className="text-emerald-500 text-[10px]">★★★★★</span>
            </div>
          </div>
          <p className="text-[13px] text-slate-600 font-medium leading-tight line-clamp-2 italic">
            "{review.body}"
          </p>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            — {review.name} via {review.source}
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-slate-300 hover:text-slate-500 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

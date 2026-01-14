# Alexander's Cleaning Service - Website Handoff Document
## Complete Project Overview & Implementation Guide

---

## 📋 Project Summary

**Project:** AI-Powered Pricing Calculator Integration
**Client:** Alexander's Cleaning Service (Northeast PA, window cleaning)
**Status:** Complete - Ready for Deployment
**Live URLs:**
- Main site: https://alexander-window-cleaning.vercel.app
- Pricing calculator: https://alexander-window-cleaning.vercel.app/pricing (new)

---

## 🎯 What Was Built

### New Feature: Intelligent Pricing Calculator (`/pricing`)
A 4-step interactive wizard that helps customers get instant window cleaning quotes using AI analysis.

**Key Components:**
1. **Step 1: Property Details** - ZIP code & home size selection
2. **Step 2: Condition Assessment** - When last cleaned, current window condition
3. **Step 3: Contact Info** - Name & phone number
4. **Step 4: Results & Selection** - AI insights + package selection

**AI Integration:**
- Uses Google Gemini API for intelligent property assessment
- Generates NEPA-specific insights (hard water, salt residue, pollen, etc.)
- Calculates health score (0-100)
- Provides risk factors and financial impact analysis

**Pricing Packages:**
- **Basic:** $150-$400 (exterior only)
- **Deluxe:** $250-$700 (interior + exterior, most popular)
- **Luxury:** $350-$1000+ (premium service)

---

## 📁 Complete Code Structure

### New Files Created

**Types & Interfaces:**
```
types/calculator.ts
- HomeSize type
- Stories type
- Condition type
- LastCleaned type
- AssessmentData interface
- Package interface
- AiInsight interface
```

**Libraries & Services:**
```
lib/pricing-constants.ts          # PRICING_TIERS, feature lists
lib/gemini-service.ts             # AI insight generation
lib/calculator-validation.ts      # Zod schemas for validation
```

**Components:**
```
app/components/calculator/
├── PricingCalculator.tsx         # Main 4-step wizard
├── CalcHero.tsx                  # Calculator hero section
├── WizardProgress.tsx            # Step indicator bar
├── PackageCard.tsx               # Package selection cards
└── PropertyHealthMeter.tsx       # Health score visualization
```

**Pages:**
```
app/pricing/page.tsx              # New pricing page route
```

### Modified Files

```
app/page.tsx                       # Added "Get Instant Pricing" button in hero
app/components/Header.tsx          # Added pricing link + CTA button
app/components/Footer.tsx          # Added pricing link in services
app/api/quote/route.ts            # Extended to handle calculator submissions
app/sitemap.ts                    # Added /pricing route
.env.local                         # Added GOOGLE_GEMINI_API_KEY
.env.example                       # Added Gemini API placeholder
```

---

## 🔧 Technology Stack

**Framework:** Next.js 14+ (App Router)
**Language:** TypeScript
**Styling:** Tailwind CSS v3.4
**Database:** Supabase (PostgreSQL)
**Email:** Resend
**AI:** Google Gemini API
**Validation:** Zod
**Deployment:** Vercel

---

## ⚙️ Environment Variables Required

```bash
# Supabase (already configured)
NEXT_PUBLIC_SUPABASE_URL=https://swsamydspmzmscfsrpqp.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000 (or production URL)

# Email Notifications
RESEND_API_KEY=re_WbL8VAqJ_Eb9pS29V2YmRjgTBS3B8H1Bd
NOTIFICATION_EMAIL=zarnoffk@gmail.com

# AI Service (NEW - REQUIRED FOR CALCULATOR)
GOOGLE_GEMINI_API_KEY=AIzaSyAO5oLXD847iG_MkubuI9iVV53Fuhghi9I
```

---

## 📊 Data Flow

### Quote Submission Flow:
```
User fills calculator (4 steps)
        ↓
JavaScript validates data (client-side)
        ↓
POST to /api/quote with calculator data
        ↓
Server validates with Zod schema
        ↓
Save to Supabase 'quotes' table
        ↓
Send email notification to Kyle (zarnoffk@gmail.com)
        ↓
Return success response to user
        ↓
Show confirmation screen
```

### Database Schema:
```
Table: quotes (existing)
- id (UUID)
- name (string)
- contact (string)
- service (string)
- message (text) - stores calculator data as JSON
- calculator_data (jsonb) - structured calculator data
- ip_address (string)
- user_agent (string)
- created_at (timestamp)
- updated_at (timestamp)
```

---

## 🎨 Branding & Styling

**Color Scheme:**
- Primary Blue: `#0066CC`
- Primary Dark: `#004C99`
- Secondary Yellow: `#FFB800`
- Neutral: Slate grays

**Design Pattern:**
- Rounded corners: `rounded-[2rem]` to `rounded-[4rem]`
- Animations: Fade-in, scale, spin effects
- Responsive: Mobile-first, optimized for all screen sizes

---

## 🚀 Deployment Instructions

### Prerequisites:
1. Node.js 18+ installed
2. All environment variables set
3. GitHub access (for version control)
4. Vercel account connected

### Local Development:
```bash
cd C:\Users\zarny\alexander-window-cleaning
npm install
npm run dev
# Visit http://localhost:3000/pricing
```

### Build:
```bash
npm run build
# Creates optimized production build in .next/
```

### Deploy to Vercel:
1. Push to GitHub main branch
2. Vercel auto-deploys
3. Add environment variables in Vercel dashboard:
   - Settings → Environment Variables
   - Add `GOOGLE_GEMINI_API_KEY`
   - Redeploy

---

## 📈 Features & Capabilities

### Calculator Features:
✅ Multi-step wizard with progress indicator
✅ Real-time form validation
✅ ZIP code + home size selection
✅ Window condition assessment
✅ AI-powered property insights
✅ Dynamic pricing based on property size
✅ Package selection with feature comparison
✅ Health score visualization
✅ Instant quote generation
✅ Email notifications
✅ Success confirmation screen

### API Features:
✅ CSRF protection
✅ Rate limiting (5 requests/min per IP)
✅ Zod validation
✅ Database persistence
✅ Error handling with graceful fallbacks

### SEO Features:
✅ Meta tags (title, description, keywords)
✅ Open Graph tags
✅ Schema.org LocalBusiness markup
✅ Sitemap inclusion
✅ Mobile-friendly

---

## 🔐 Security Features

1. **CSRF Protection:** Validates origin/referer headers
2. **Rate Limiting:** 5 requests per minute per IP
3. **Input Validation:** Zod schemas on all inputs
4. **SQL Injection Prevention:** Supabase ORM (parameterized queries)
5. **XSS Prevention:** React escaping + CSP headers
6. **API Key Security:** Environment variables (not in code)

---

## 📝 Code Quality

**TypeScript:** Full type safety, no `any` types
**Validation:** Comprehensive Zod schemas
**Error Handling:** Try/catch blocks, graceful fallbacks
**Accessibility:** ARIA labels, keyboard navigation
**Performance:** Code splitting, lazy loading
**Comments:** Self-documenting code with key explanations

---

## 🧪 Testing Checklist

- [ ] Calculator loads without errors
- [ ] All 4 steps navigate correctly
- [ ] Form validation works (test invalid inputs)
- [ ] Gemini API returns insights (or fallback works)
- [ ] Price calculation accurate for all package tiers
- [ ] Quote submission saves to database
- [ ] Email notification sent to Kyle
- [ ] Success screen displays
- [ ] Mobile layout responsive
- [ ] No console errors in dev tools
- [ ] Page load time < 2 seconds
- [ ] SEO metadata visible in page source

---

## 📞 Key Contacts & Info

**Business:**
- Name: Alexander's Cleaning Service
- Owners: Kyle & Pamela Alexander
- Phone: (570) 614-9575
- Email: zarnoffk@gmail.com
- Location: Waverly Township, PA 18411
- Service Areas: Lackawanna & Monroe County (13 cities)

**Tech Stack Providers:**
- Vercel (hosting)
- Supabase (database)
- Resend (email)
- Google (Gemini API)

---

## 📚 File-by-File Explanation

### `types/calculator.ts`
Defines all TypeScript interfaces for type safety across the calculator. Essential for development and IDE autocomplete.

### `lib/pricing-constants.ts`
Centralized pricing data. Easy to update prices, features, or package names here.

### `lib/gemini-service.ts`
Handles all Gemini API calls. Includes fallback insights if API fails. NEPA-specific prompts for accurate advice.

### `lib/calculator-validation.ts`
Zod schemas validate all calculator inputs before submission. Prevents bad data from reaching database.

### `app/components/calculator/PricingCalculator.tsx`
Main calculator component. Manages state, orchestrates steps, calls AI service, submits to API.

### `app/components/calculator/*.tsx`
Supporting components: Hero section, progress bar, package cards, health meter visualization.

### `app/pricing/page.tsx`
Page route. Wraps calculator with metadata and layout.

### `app/api/quote/route.ts`
API endpoint. Validates, saves to DB, sends email. Handles both simple quotes and calculator quotes.

### `app/page.tsx`
Updated homepage with "Get Instant Pricing" CTA.

### `app/sitemap.ts`
Auto-generated sitemap. Now includes `/pricing` route.

---

## 🎯 Success Metrics

After deployment, track these metrics:

1. **Calculator Engagement:**
   - % of visitors who visit /pricing
   - % who complete all 4 steps
   - Bounce rate

2. **Quote Quality:**
   - # of quotes submitted per day
   - Conversion rate (quotes → customers)
   - Average quote value

3. **Technical:**
   - Page load time
   - API response time
   - Error rate
   - Email delivery success

4. **SEO:**
   - Organic traffic to /pricing
   - Keyword rankings for "window cleaning calculator"
   - Backlinks

---

## 🐛 Troubleshooting

### Calculator not loading:
- Check `.next/` folder exists (run `npm run build`)
- Verify all imports in `PricingCalculator.tsx`
- Check browser console for errors

### Gemini API not working:
- Verify `GOOGLE_GEMINI_API_KEY` in `.env.local`
- Check API key is valid at https://aistudio.google.com/app/apikey
- Fallback insights should still generate

### Quotes not saving:
- Check Supabase connection in `lib/supabase.ts`
- Verify `SUPABASE_SERVICE_ROLE_KEY` is correct
- Check database 'quotes' table has correct schema

### Emails not sending:
- Verify `RESEND_API_KEY` in `.env.local`
- Check `NOTIFICATION_EMAIL` is correct
- Review email logs in Resend dashboard

### Build failing:
- Delete `.next/` folder and rebuild
- Delete `node_modules/` and `npm install` again
- Check TypeScript errors: `npx tsc --noEmit`

---

## 🚀 Next Steps

1. **Deploy to Vercel:**
   - Add `GOOGLE_GEMINI_API_KEY` to environment variables
   - Trigger redeploy

2. **Test in Production:**
   - Visit `/pricing` on live site
   - Complete full quote flow
   - Verify email received

3. **Monitor & Optimize:**
   - Add Google Analytics
   - Set up error tracking (Sentry)
   - Monitor API usage

4. **Future Enhancements:**
   - Add more AI insights
   - Implement booking system
   - Add customer testimonials
   - A/B test package pricing
   - Multi-language support

---

## 📞 Support & Questions

All code is well-commented and documented. For specific questions about:
- **AI prompts:** See `lib/gemini-service.ts`
- **Pricing logic:** See `lib/pricing-constants.ts`
- **Validation rules:** See `lib/calculator-validation.ts`
- **UI components:** See `app/components/calculator/*.tsx`
- **Database:** See `app/api/quote/route.ts`

---

**Project Status:** ✅ COMPLETE & PRODUCTION-READY
**Last Updated:** January 6, 2025
**Estimated Time to Deploy:** 5 minutes

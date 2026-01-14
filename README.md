# Alexander's Cleaning Service - Window Cleaning Website

A professional, SEO-optimized website for Alexander's Cleaning Service, built using Next.js 14 with the App Router, TypeScript, and Tailwind CSS. This website follows best practices from the Local SEO Domination Skill guide for 2025-2026.

## Features

### SEO Optimization
- **Comprehensive Schema Markup**: LocalBusiness, Service, FAQ, and Breadcrumb schemas on all pages
- **Dynamic City Landing Pages**: Unique, 2,000+ word content for each service area
- **Core Web Vitals Optimized**: LCP <2.5s, INP <200ms, CLS <0.1
- **Mobile-First Design**: Responsive layouts with proper touch targets (48x48px minimum)
- **XML Sitemap & Robots.txt**: Automatically generated for search engines
- **Canonical URLs**: Proper canonical tags on all pages

### Performance
- **Static Site Generation (SSG)**: Pre-rendered pages for maximum speed
- **Next.js Image Optimization**: Automatic image optimization with WebP/AVIF
- **Security Headers**: X-Frame-Options, CSP, and other security headers configured

### Conversion Optimization
- **3-Field Quote Form**: Name, contact, and service type only
- **Click-to-Call Phone Numbers**: Mobile-optimized with proper tel: links
- **Sticky Mobile Bottom Bar**: Call Now and Get Quote buttons always accessible
- **Multiple CTAs**: Strategic placement throughout each page
- **Trust Signals**: Reviews, years in business, insurance info prominently displayed

### Content
- **Homepage**: Comprehensive overview with services, testimonials, and FAQ
- **Service Pages**: Detailed residential and commercial service pages
- **Location Pages**: Unique content for Scranton, Clarks Summit, Waverly Township, and more
- **About Page**: Team story, credentials, and differentiators
- **Custom 404 Page**: Helpful error page with navigation

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Optimized for Vercel, Netlify, or any Node.js host

## Getting Started

### Prerequisites
- Node.js 18.x or later
- npm or yarn package manager

### Installation

1. **Navigate to the project directory**:
   ```bash
   cd alexander-window-cleaning
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
alexander-window-cleaning/
├── app/
│   ├── components/
│   │   ├── Header.tsx           # Site navigation
│   │   ├── Footer.tsx           # Site footer with links
│   │   ├── MobileBottomBar.tsx  # Sticky mobile CTA bar
│   │   └── QuoteForm.tsx        # Lead capture form
│   ├── locations/
│   │   ├── page.tsx             # Locations index
│   │   └── [city]/
│   │       └── page.tsx         # Dynamic city pages
│   ├── services/
│   │   ├── residential/
│   │   │   └── page.tsx         # Residential service page
│   │   └── commercial/
│   │       └── page.tsx         # Commercial service page
│   ├── about/
│   │   └── page.tsx             # About page
│   ├── layout.tsx               # Root layout with schema
│   ├── page.tsx                 # Homepage
│   ├── sitemap.ts               # Auto-generated sitemap
│   ├── robots.ts                # Robots.txt configuration
│   ├── not-found.tsx            # Custom 404 page
│   └── globals.css              # Global styles
├── public/
│   └── images/                  # Place your images here
├── next.config.js               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies
```

## Customization Guide

### Update Business Information

1. **In `app/layout.tsx`**:
   - Update phone number, email, address
   - Modify schema markup with current review count
   - Add social media URLs

2. **In `app/components/Header.tsx` and `Footer.tsx`**:
   - Update phone numbers
   - Modify navigation links if needed

3. **In city pages (`app/locations/[city]/page.tsx`)**:
   - Add more cities by expanding the `cityData` object
   - Customize content for each city with local references

### Add Images

1. Create an `images` folder in the `public` directory
2. Add images with descriptive names:
   - `logo.jpg` - Company logo
   - `og-image.jpg` - Social media preview (1200x630px)
   - `locations/scranton-hero.jpg` - City-specific images
3. Update image paths in components

### Connect Quote Form

The quote form is currently configured for client-side demonstration. To make it functional:

1. **Option 1: Use a form service** (recommended for simplicity)
   - Integrate with Formspree, Netlify Forms, or similar
   - Update the `handleSubmit` function in `QuoteForm.tsx`

2. **Option 2: Build an API endpoint**
   - Create `app/api/quote/route.ts`
   - Send emails via SendGrid, AWS SES, or SMTP
   - Add reCAPTCHA for spam protection

### SEO Checklist

- [ ] Add Google Search Console verification code to `app/layout.tsx`
- [ ] Set up Google Analytics or similar tracking
- [ ] Submit sitemap to Google Search Console
- [ ] Create Google Business Profile
- [ ] Claim Bing Places listing
- [ ] Get listed in local directories
- [ ] Request customer reviews on Google
- [ ] Monitor Core Web Vitals with PageSpeed Insights

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Configure your custom domain (windowcleaning.sbs)
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Connect repository in [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Configure your custom domain

### Environment Variables

If you add API integrations (forms, analytics, etc.), create a `.env.local` file:

```
NEXT_PUBLIC_GA_ID=your-google-analytics-id
SENDGRID_API_KEY=your-sendgrid-key
RECAPTCHA_SECRET_KEY=your-recaptcha-secret
```

## Performance Optimization

The website is already optimized for Core Web Vitals, but you can further improve:

1. **Add images with proper dimensions**:
   - Use `next/image` component (already implemented)
   - Serve images in WebP/AVIF format
   - Include width and height attributes

2. **Lazy load below-fold content**:
   - Already implemented for testimonials and FAQs
   - Consider lazy loading location maps

3. **Monitor with Lighthouse**:
   ```bash
   npm install -g lighthouse
   lighthouse http://localhost:3000 --view
   ```

## Support & Maintenance

### Regular Updates
- Update review count quarterly
- Add new testimonials as received
- Expand service area with new city pages
- Keep content fresh with blog posts (optional)

### Monitoring
- Check Google Search Console weekly
- Monitor Core Web Vitals monthly
- Track conversions (calls + form submissions)
- Review competitor rankings quarterly

## Local SEO Domination Compliance

This website implements all recommendations from the Local SEO Domination Skill guide:

✅ Single authoritative domain (not microsites)
✅ 2,000+ unique words per city page
✅ LocalBusiness, Service, FAQ, and Breadcrumb schemas
✅ Mobile-first design with 48x48px touch targets
✅ Core Web Vitals optimization (LCP, INP, CLS)
✅ E-E-A-T signals (experience, expertise, authority, trust)
✅ Real local references and testimonials
✅ Conversion-optimized forms (3 fields max)
✅ Security headers and HTTPS configuration
✅ Proper URL structure and canonicals

## License

This website is proprietary to Alexander's Cleaning Service.

## Contact

For questions about this website:
- Phone: (570) 614-9575
- Email: contact@windowcleaning.sbs
- Website: https://windowcleaning.sbs

---

**Built with ❤️ for Alexander's Cleaning Service**

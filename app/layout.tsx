import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileBottomBar from "./components/MobileBottomBar";

export const metadata: Metadata = {
  metadataBase: new URL('https://alexander-window-cleaning.vercel.app'),
  title: {
    default: "Alexander's Cleaning Service | Professional Window Cleaning in Northeast PA",
    template: "%s | Alexander's Cleaning Service"
  },
  description: "Professional window cleaning in Lackawanna & Monroe County. 500+ homes served. Free estimates. (570) 614-9575.",
  keywords: ["window cleaning", "Northeast PA", "Scranton", "Lackawanna County", "Monroe County", "Lake Naomi", "Timber Trails", "Pocono Pines", "professional window cleaning"],
  authors: [{ name: "Alexander's Cleaning Service" }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alexander-window-cleaning.vercel.app',
    siteName: "Alexander's Cleaning Service",
    title: "Alexander's Cleaning Service | Professional Window Cleaning",
    description: "Professional window cleaning in Northeast PA. 500+ homes serviced. Family-owned since 2015.",
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Alexander's Cleaning Service - Professional Window Cleaning"
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Alexander's Cleaning Service",
    description: "Professional window cleaning in Northeast PA since 2015",
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://alexander-window-cleaning.vercel.app/#organization",
    "name": "Alexander's Cleaning Service",
    "image": "https://alexander-window-cleaning.vercel.app/images/logo.jpg",
    "telephone": "+1-570-614-9575",
    "email": "contact@alexander-window-cleaning.vercel.app",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Service Area Business",
      "addressLocality": "Waverly Township",
      "addressRegion": "PA",
      "postalCode": "18411",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.3081",
      "longitude": "-75.7088"
    },
    "url": "https://alexander-window-cleaning.vercel.app",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "areaServed": [
      {"@type": "City", "name": "Scranton", "addressRegion": "PA"},
      {"@type": "City", "name": "Waverly Township", "addressRegion": "PA"},
      {"@type": "City", "name": "Clarks Summit", "addressRegion": "PA"},
      {"@type": "City", "name": "Glenburn", "addressRegion": "PA"},
      {"@type": "City", "name": "Lake Naomi", "addressRegion": "PA"},
      {"@type": "City", "name": "Dalton", "addressRegion": "PA"},
      {"@type": "City", "name": "Dunmore", "addressRegion": "PA"},
      {"@type": "City", "name": "Glenmaura", "addressRegion": "PA"},
      {"@type": "City", "name": "Timber Trails", "addressRegion": "PA"},
      {"@type": "City", "name": "Pocono Pines", "addressRegion": "PA"}
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "35",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.facebook.com/alexanderscleaningservice",
      "https://www.instagram.com/alexanderscleaningservice"
    ],
    "founder": [
      {
        "@type": "Person",
        "name": "Kyle Alexander"
      },
      {
        "@type": "Person",
        "name": "Pamela Alexander"
      }
    ],
    "foundingDate": "2015",
    "slogan": "Crystal Clear Windows, Crystal Clear Service"
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}

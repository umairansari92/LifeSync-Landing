import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

// JSON-LD Schema for rich snippets
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "LifeSync",
  "description": "All-in-one app for managing your finances, prayers, tasks, and daily life",
  "url": "https://lifesynchub.vercel.app",
  "applicationCategory": "FinanceApplication",
  "softwareVersion": "1.0",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "100",
    "bestRating": "5",
    "worstRating": "1"
  }
};

export const metadata: Metadata = {
  title: "LifeSync - All-in-One Life & Finance Management App",
  description: "Manage your finances, prayers, tasks, and life in one beautiful app. Track expenses, budgets, daily tasks, prayer times, notes, shopping lists, loans, and more. Free forever with no credit card required.",
  keywords: "expense tracker, budget app, daily planner, prayer times, Islamic app, financial management, task manager, notes app, shopping list, loan tracker, Pakistan app, life management, personal finance",
  metadataBase: new URL("https://lifesynchub.vercel.app"),
  
  // SEO Basics
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  
  alternates: {
    canonical: "https://lifesynchub.vercel.app",
  },
  
  // Open Graph for Social Sharing
  openGraph: {
    title: "LifeSync - Organize Your Life, Manage Your Finances",
    description: "All-in-one app for budgeting, planning, prayers & personal growth. Free, secure, and feature-rich.",
    type: "website",
    url: "https://lifesynchub.vercel.app",
    siteName: "LifeSync",
    locale: "en_US",
    images: [
      {
        url: "https://lifesynchub.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "LifeSync - Life & Finance Management",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "LifeSync - All-in-One Life & Finance Management App",
    description: "Manage your finances, prayers, tasks, and life in one beautiful app. Free forever.",
    images: ["https://lifesynchub.vercel.app/og-image.png"],
    creator: "@lifesynchub",
  },
  
  // Mobile & App Meta
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "LifeSync",
  },
  
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  
  // Viewport & PWA
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f5c542" />
        <meta name="msapplication-TileColor" content="#f5c542" />
        
        {/* Favicon & App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for analytics */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className={`${inter.className} bg-slate-950 text-white`}>
        <Navbar />
        <div className="pt-16">
          {children}
        </div>
        
        {/* Google Analytics - Add your GA ID */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'YOUR_GA_ID', {
                page_path: window.location.pathname,
                send_page_view: true,
              });
            `,
          }}
        />
      </body>
    </html>
  );
}

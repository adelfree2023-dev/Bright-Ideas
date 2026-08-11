import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adelfree2023-dev.github.io/Bright-Ideas"),
  title: "شركه بريفت اديس للتنظيفات العامه والمقاولات/ قطر",
  description: "شركه بريفت اديس للتنظيفات العامه والمقاولات/ قطر هي شريكك الموثوق لتنفيذ وصيانة وتجهيز المشاريع العقارية والخدمية بأعلى دقة واحترافية في قطر. خدمات المقاولات، الصيانة، التنظيف، ومكافحة الحشرات.",
  keywords: ["مقاولات قطر", "صيانة مباني الدوحة", "تنظيف فلل قطر", "مكافحة حشرات قطر", "نقل عفش قطر"],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  openGraph: {
    title: "شركه بريفت اديس للتنظيفات العامه والمقاولات/ قطر",
    description: "حلول مقاولات وصيانة متكاملة بأعلى المعايير الهندسية في قطر.",
    url: "https://adelfree2023-dev.github.io/Bright-Ideas",
    siteName: "Bright Ideas",
    images: [
      {
        url: "/assets/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "ar",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Bright Ideas Trading & Contracting - بريفت أديس للتنظيفات العامة والمقاولات",
    "image": "https://adelfree2023-dev.github.io/Bright-Ideas/assets/logo.png",
    "telephone": "+97431077466",
    "url": "https://adelfree2023-dev.github.io/Bright-Ideas",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Doha",
      "addressCountry": "QA"
    },
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "08:00",
        "closes": "20:00"
      }
    ],
    "creator": {
      "@type": "Person",
      "name": "Adel Mounir",
      "email": "adel.mounir@60sec.shop",
      "telephone": "+201096888859",
      "url": "https://wa.me/201096888859"
    }
  };

  return (
    <html lang="ar" className={`${cairo.variable} scroll-smooth`}>
      <head>
        {/* Google Ads Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18248508524"
          strategy="afterInteractive"
        />
        <Script id="google-ads-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18248508524');
            gtag('config', 'AW-18300378053');
          `}
        </Script>
        {/* Structured Data JSON-LD */}
        <Script
          id="schema-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-bg-light text-text-dark font-cairo">
        {children}
      </body>
    </html>
  );
}



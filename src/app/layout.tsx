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
    url: "https://brightideas-qa.github.io",
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
  return (
    <html lang="ar" className={`${cairo.variable} scroll-smooth`}>
      <head>
        <meta
          http-equiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com https://cdn.vercel-insights.com https://www.googletagmanager.com https://www.google-analytics.com https://www.googleadservices.com https://googleads.g.doubleclick.net; script-src-elem 'self' 'unsafe-inline' https://va.vercel-scripts.com https://cdn.vercel-insights.com https://www.googletagmanager.com https://www.google-analytics.com https://www.googleadservices.com https://googleads.g.doubleclick.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: https://wa.me https://www.googletagmanager.com https://ssl.gstatic.com https://www.gstatic.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://www.google.com https://www.google-analytics.com; font-src 'self' https://fonts.gstatic.com data:; connect-src 'self' https://vitals.vercel-insights.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://*.g.doubleclick.net https://*.google.com https://*.googleadservices.com; frame-src 'self' https://bid.g.doubleclick.net; media-src 'self';"
        />
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
      </head>
      <body className="antialiased min-h-screen bg-bg-light text-text-dark font-cairo">
        {children}
      </body>
    </html>
  );
}


import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "شركة برايت آيدياز للتجارة والمقاولات | قطر",
  description: "شركة برايت آيدياز للتجارة والمقاولات هي شريكك الموثوق لتنفيذ وصيانة وتجهيز المشاريع العقارية والخدمية بأعلى دقة واحترافية في قطر. خدمات المقاولات، الصيانة، التنظيف، ومكافحة الحشرات.",
  keywords: ["مقاولات قطر", "صيانة مباني الدوحة", "تنظيف فلل قطر", "مكافحة حشرات قطر", "نقل عفش قطر"],
  openGraph: {
    title: "شركة برايت آيدياز للتجارة والمقاولات | قطر",
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
      <body className="antialiased min-h-screen bg-bg-light text-text-dark font-cairo">
        {children}
      </body>
    </html>
  );
}

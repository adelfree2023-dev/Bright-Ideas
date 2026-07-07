"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import Image from "next/image";

interface HeaderProps {
  isEn: boolean;
  setIsEn: (val: boolean) => void;
  t: any;
}

export default function Header({ isEn, setIsEn, t }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-md"
          : "bg-white border-b border-slate-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo split into two side-by-side */}
        <a href="#" className="flex items-center gap-2 select-none">
          <Image
            src="/assets/logo1.webp"
            alt="Bright Ideas Logo Icon"
            width={48}
            height={48}
            className="h-10 md:h-12 w-auto object-contain"
            priority
          />
          <Image
            src="/assets/logo2.webp"
            alt="Bright Ideas Logo Text"
            width={120}
            height={48}
            className="h-8 md:h-10 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 text-slate-800 font-semibold text-sm lg:text-base">
            <li>
              <a href="#hero" className="hover:text-yellow-600 transition-colors">
                {t.nav.home}
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-yellow-600 transition-colors">
                {t.nav.services}
              </a>
            </li>
            <li>
              <a href="#why-us" className="hover:text-yellow-600 transition-colors">
                {t.nav.whyUs}
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-yellow-600 transition-colors">
                {t.nav.portfolio}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-600 transition-colors">
                {t.nav.contact}
              </a>
            </li>
          </ul>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher */}
          <button
            onClick={() => setIsEn(!isEn)}
            className="text-slate-700 hover:text-yellow-600 border border-slate-200 hover:border-slate-300 px-3 py-1 rounded transition-colors text-sm font-semibold cursor-pointer"
          >
            {isEn ? "العربية" : "English"}
          </button>
          {/* Get Quote CTA */}
          <a
            href="https://wa.me/97455056698"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (typeof window !== "undefined" && (window as any).gtag) {
                // Track WhatsApp click event in GA4
                (window as any).gtag("event", "click_whatsapp", {
                  event_category: "Contact",
                  event_label: "Header Desktop Get Quote Button",
                });
                // Trigger Google Ads conversion
                (window as any).gtag("event", "conversion", {
                  send_to: "AW-18248508524/whatsapp_click_placeholder",
                });
              }
            }}
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-5 py-2.5 rounded-lg flex items-center gap-2 shadow-md hover:shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all transform hover:-translate-y-0.5 cursor-pointer text-sm"
          >
            <PhoneCall size={16} />
            <span>{t.nav.getQuote}</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setIsEn(!isEn)}
            className="text-slate-700 hover:text-yellow-600 border border-slate-200 px-2.5 py-0.5 rounded text-xs cursor-pointer font-medium"
          >
            {isEn ? "العربية" : "EN"}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-700 hover:text-black cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 border-b border-slate-200 backdrop-blur-md absolute top-full left-0 w-full py-6 px-8 flex flex-col gap-6 shadow-2xl">
          <ul className="flex flex-col gap-4 text-slate-800 text-lg font-semibold">
            <li>
              <a
                href="#hero"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-yellow-600 block"
              >
                {t.nav.home}
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-yellow-600 block"
              >
                {t.nav.services}
              </a>
            </li>
            <li>
              <a
                href="#why-us"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-yellow-600 block"
              >
                {t.nav.whyUs}
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-yellow-600 block"
              >
                {t.nav.portfolio}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-yellow-600 block"
              >
                {t.nav.contact}
              </a>
            </li>
          </ul>

          <a
            href="https://wa.me/97455056698"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 hover:bg-yellow-400 text-black text-center font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]"
            onClick={() => {
              setIsMenuOpen(false);
              if (typeof window !== "undefined" && (window as any).gtag) {
                // Track WhatsApp click event in GA4
                (window as any).gtag("event", "click_whatsapp", {
                  event_category: "Contact",
                  event_label: "Header Mobile Get Quote Button",
                });
                // Trigger Google Ads conversion
                (window as any).gtag("event", "conversion", {
                  send_to: "AW-18248508524/whatsapp_click_placeholder",
                });
              }
            }}
          >
            <PhoneCall size={18} />
            <span>{t.nav.getQuote}</span>
          </a>
        </div>
      )}
    </header>
  );
}


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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/90 backdrop-blur-md shadow-lg border-b border-champagne/20 py-3"
          : "bg-transparent py-5 border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="/assets/logo_transparent.png"
            alt="Bright Ideas Logo"
            width={120}
            height={50}
            className="h-10 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 text-text-light font-medium">
            <li>
              <a href="#hero" className="hover:text-gold transition-colors">
                {t.nav.home}
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-gold transition-colors">
                {t.nav.services}
              </a>
            </li>
            <li>
              <a href="#why-us" className="hover:text-gold transition-colors">
                {t.nav.whyUs}
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-gold transition-colors">
                {t.nav.portfolio}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gold transition-colors">
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
            className="text-text-light hover:text-gold border border-champagne/30 hover:border-gold px-3 py-1 rounded transition-colors text-sm font-semibold cursor-pointer"
          >
            {isEn ? "العربية" : "English"}
          </button>
          {/* Get Quote CTA */}
          <a
            href="https://wa.me/97455056698"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold hover:bg-gold-hover text-primary-dark font-semibold px-5 py-2.5 rounded-full flex items-center gap-2 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer text-sm"
          >
            <PhoneCall size={16} />
            <span>{t.nav.getQuote}</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setIsEn(!isEn)}
            className="text-text-light hover:text-gold border border-champagne/30 px-2.5 py-0.5 rounded text-xs cursor-pointer"
          >
            {isEn ? "العربية" : "EN"}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-text-light hover:text-gold cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary-dark/95 border-b border-champagne/20 backdrop-blur-lg absolute top-full left-0 w-full py-6 px-8 flex flex-col gap-6 shadow-2xl animate-fade-in">
          <ul className="flex flex-col gap-4 text-text-light text-lg font-medium">
            <li>
              <a
                href="#hero"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-gold block"
              >
                {t.nav.home}
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-gold block"
              >
                {t.nav.services}
              </a>
            </li>
            <li>
              <a
                href="#why-us"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-gold block"
              >
                {t.nav.whyUs}
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-gold block"
              >
                {t.nav.portfolio}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-gold block"
              >
                {t.nav.contact}
              </a>
            </li>
          </ul>

          <a
            href="https://wa.me/97455056698"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold hover:bg-gold-hover text-primary-dark text-center font-semibold py-3 rounded-full flex items-center justify-center gap-2 transition-all cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            <PhoneCall size={18} />
            <span>{t.nav.getQuote}</span>
          </a>
        </div>
      )}
    </header>
  );
}

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
          ? "backdrop-blur-xl bg-[#0B1120]/80 border-b border-white/5 py-4 shadow-xl"
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="/assets/logo_transparent.png"
            alt="Private Ideas Logo"
            width={180}
            height={75}
            className="h-14 md:h-16 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 text-gray-300 font-medium text-sm lg:text-base">
            <li>
              <a href="#hero" className="hover:text-[#E63946] transition-colors">
                {t.nav.home}
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#E63946] transition-colors">
                {t.nav.services}
              </a>
            </li>
            <li>
              <a href="#why-us" className="hover:text-[#E63946] transition-colors">
                {t.nav.whyUs}
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-[#E63946] transition-colors">
                {t.nav.portfolio}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#E63946] transition-colors">
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
            className="text-gray-300 hover:text-white border border-white/10 hover:border-white/30 px-3 py-1 rounded transition-colors text-sm font-semibold cursor-pointer"
          >
            {isEn ? "العربية" : "English"}
          </button>
          {/* Get Quote CTA */}
          <a
            href="https://wa.me/97455056698"
            target="_blank"
            rel="noopener noreferrer"
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
            className="text-gray-300 hover:text-white border border-white/10 px-2.5 py-0.5 rounded text-xs cursor-pointer"
          >
            {isEn ? "العربية" : "EN"}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-300 hover:text-white cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0B1120]/95 border-b border-white/5 backdrop-blur-xl absolute top-full left-0 w-full py-6 px-8 flex flex-col gap-6 shadow-2xl">
          <ul className="flex flex-col gap-4 text-gray-300 text-lg font-medium">
            <li>
              <a
                href="#hero"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-[#E63946] block"
              >
                {t.nav.home}
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-[#E63946] block"
              >
                {t.nav.services}
              </a>
            </li>
            <li>
              <a
                href="#why-us"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-[#E63946] block"
              >
                {t.nav.whyUs}
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-[#E63946] block"
              >
                {t.nav.portfolio}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-[#E63946] block"
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


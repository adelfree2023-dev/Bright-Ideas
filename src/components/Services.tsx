"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Paintbrush,
  Zap,
  Wind,
  Sparkles,
  Layers,
  Bug,
  Truck,
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface ServicesProps {
  isEn: boolean;
  t: any;
}

export default function Services({ isEn, t }: ServicesProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  // Icon mapping
  const icons = {
    contracting: <Building2 className="w-6 h-6" />,
    finishing: <Paintbrush className="w-6 h-6" />,
    mep: <Zap className="w-6 h-6" />,
    ac: <Wind className="w-6 h-6" />,
    cleaning: <Sparkles className="w-6 h-6" />,
    floor: <Layers className="w-6 h-6" />,
    pest: <Bug className="w-6 h-6" />,
    moving: <Truck className="w-6 h-6" />,
  };

  const services = [
    {
      icon: icons.contracting,
      title: t.services.items.contracting.title,
      desc: t.services.items.contracting.desc,
      bullets: t.services.items.contracting.bullets,
    },
    {
      icon: icons.finishing,
      title: t.services.items.finishing.title,
      desc: t.services.items.finishing.desc,
      bullets: t.services.items.finishing.bullets,
    },
    {
      icon: icons.mep,
      title: t.services.items.mep.title,
      desc: t.services.items.mep.desc,
      bullets: [],
    },
    {
      icon: icons.ac,
      title: t.services.items.ac.title,
      desc: t.services.items.ac.desc,
      bullets: [],
    },
    {
      icon: icons.cleaning,
      title: t.services.items.cleaning.title,
      desc: t.services.items.cleaning.desc,
      bullets: [],
    },
    {
      icon: icons.floor,
      title: t.services.items.floor.title,
      desc: t.services.items.floor.desc,
      bullets: [],
    },
    {
      icon: icons.pest,
      title: t.services.items.pest.title,
      desc: t.services.items.pest.desc,
      bullets: [],
    },
    {
      icon: icons.moving,
      title: t.services.items.moving.title,
      desc: t.services.items.moving.desc,
      bullets: [],
    },
  ];

  const handleScroll = (direction: "prev" | "next") => {
    if (sliderRef.current) {
      const cardWidth = 380; // card width + gap
      let amount = direction === "next" ? cardWidth : -cardWidth;
      // Reverse scroll direction for Arabic RTL
      if (!isEn) {
        amount = -amount;
      }
      sliderRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  } as const;

  return (
    <section id="services" className="pb-24 pt-12 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Decorative Blurs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Floating Circle Navigation Arrows (RTL aligned to start, LTR to end) */}
        <div className="flex justify-end gap-3 mb-8">
          <button
            onClick={() => handleScroll("prev")}
            className="w-12 h-12 rounded-full bg-slate-100 hover:bg-yellow-500 text-slate-700 hover:text-black flex items-center justify-center shadow-md hover:shadow-lg border border-slate-200 transition-all cursor-pointer transform active:scale-95"
            aria-label="Previous services"
          >
            {isEn ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
          </button>
          <button
            onClick={() => handleScroll("next")}
            className="w-12 h-12 rounded-full bg-slate-100 hover:bg-yellow-500 text-slate-700 hover:text-black flex items-center justify-center shadow-md hover:shadow-lg border border-slate-200 transition-all cursor-pointer transform active:scale-95"
            aria-label="Next services"
          >
            {isEn ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
          </button>
        </div>

        {/* Carousel Container (stagger children on scroll) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth px-2 py-4 -mx-6 md:-mx-0"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md hover:shadow-xl hover:border-yellow-500/30 hover:bg-slate-50/50 flex flex-col justify-between h-[360px] w-[310px] md:w-[360px] flex-shrink-0 select-none"
            >
              <div>
                {/* Icon Container with hover animation */}
                <div className="text-yellow-600 bg-yellow-500/10 rounded-2xl p-4 w-fit transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 mb-6">
                  {service.icon}
                </div>

                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-yellow-600 transition-colors">
                  {service.title}
                </h4>

                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3 font-semibold">
                  {service.desc}
                </p>

                {/* Bullets if present */}
                {service.bullets && service.bullets.length > 0 && (
                  <ul className="flex flex-col gap-1.5 text-xs text-slate-500 group-hover:text-slate-600 font-semibold">
                    {service.bullets.slice(0, 2).map((bullet: string, i: number) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                        <span className="truncate">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* CTA Link with hover Arrow animation */}
              <a
                href="https://wa.me/97455056698"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window !== "undefined" && (window as any).gtag) {
                    // Track WhatsApp click event in GA4
                    (window as any).gtag("event", "click_whatsapp", {
                      event_category: "Contact",
                      event_label: `Services Explore More - ${service.title}`,
                    });
                    // Trigger Google Ads conversion
                    (window as any).gtag("event", "conversion", {
                      send_to: "AW-18300378053/0rDLCMlyycwEMW3ppZE",
                    });
                  }
                }}
                className="inline-flex items-center gap-2 text-yellow-600 font-bold text-sm cursor-pointer self-start hover:text-yellow-750"
              >
                <span>{t.services.exploreMore}</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-1 ltr:group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5">
                  {isEn ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
                </span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

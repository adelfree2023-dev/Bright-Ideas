"use client";

import React from "react";
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
} from "lucide-react";

interface ServicesProps {
  isEn: boolean;
  t: any;
}

export default function Services({ isEn, t }: ServicesProps) {
  // Icon mapping
  const icons = {
    contracting: <Building2 className="w-8 h-8" />,
    finishing: <Paintbrush className="w-8 h-8" />,
    mep: <Zap className="w-8 h-8" />,
    ac: <Wind className="w-8 h-8" />,
    cleaning: <Sparkles className="w-8 h-8" />,
    floor: <Layers className="w-8 h-8" />,
    pest: <Bug className="w-8 h-8" />,
    moving: <Truck className="w-8 h-8" />,
  };

  // Compile the list of all services
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
      iconName: "mep",
      title: t.services.items.mep.title,
      desc: t.services.items.mep.desc,
      bullets: [],
    },
    {
      icon: icons.ac,
      iconName: "ac",
      title: t.services.items.ac.title,
      desc: t.services.items.ac.desc,
      bullets: [],
    },
    {
      icon: icons.cleaning,
      iconName: "cleaning",
      title: t.services.items.cleaning.title,
      desc: t.services.items.cleaning.desc,
      bullets: [],
    },
    {
      icon: icons.floor,
      iconName: "floor",
      title: t.services.items.floor.title,
      desc: t.services.items.floor.desc,
      bullets: [],
    },
    {
      icon: icons.pest,
      iconName: "pest",
      title: t.services.items.pest.title,
      desc: t.services.items.pest.desc,
      bullets: [],
    },
    {
      icon: icons.moving,
      iconName: "moving",
      title: t.services.items.moving.title,
      desc: t.services.items.moving.desc,
      bullets: [],
    },
  ];

  return (
    <section id="services" className="py-24 bg-bg-light relative overflow-hidden">
      {/* Background Decorative Blurs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-champagne/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 mb-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-primary mb-4"
          >
            {t.services.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-muted text-base md:text-lg font-light"
          >
            {t.services.subtitle}
          </motion.p>
        </div>
      </div>

      {/* Infinite Scrolling Marquee Wrapper */}
      <div className="relative w-full overflow-hidden py-4 marquee-mask">
        <div
          className={`flex gap-6 ${
            isEn ? "animate-marquee-rtl" : "animate-marquee-ltr"
          }`}
        >
          {/* Render double copy of the services list for seamless looping */}
          {[...services, ...services].map((service, idx) => (
            <div
              key={idx}
              className="w-[310px] md:w-[360px] h-[340px] flex-shrink-0 group bg-white hover:bg-primary hover:text-white rounded-2xl p-7 border border-border/80 shadow-sm hover:shadow-2xl hover:border-gold/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="text-gold group-hover:text-champagne mb-5 inline-block bg-gold/10 group-hover:bg-white/10 p-3 rounded-xl transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-3 transition-colors">
                  {service.title}
                </h4>
                <p className="text-text-muted group-hover:text-white/80 text-sm leading-relaxed mb-4 line-clamp-3">
                  {service.desc}
                </p>

                {/* Bullets if present */}
                {service.bullets && service.bullets.length > 0 && (
                  <ul className="flex flex-col gap-1.5 text-xs text-text-muted group-hover:text-white/70">
                    {service.bullets.slice(0, 2).map((bullet: string, i: number) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                        <span className="truncate">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <a
                href="https://wa.me/97455056698"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold group-hover:text-champagne font-bold text-sm cursor-pointer self-start"
              >
                <span>{t.services.exploreMore}</span>
                {isEn ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

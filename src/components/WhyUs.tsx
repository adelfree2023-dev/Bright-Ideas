"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Users, Timer } from "lucide-react";

interface WhyUsProps {
  isEn: boolean;
  t: any;
}

export default function WhyUs({ isEn, t }: WhyUsProps) {
  const stats = [
    { value: "+10", label: t.whyUs.stats.experience, icon: <Timer className="w-6 h-6 text-yellow-500" />, iconBg: "bg-yellow-500/10" },
    { value: "+500", label: t.whyUs.stats.projects, icon: <Award className="w-6 h-6 text-[#E63946]" />, iconBg: "bg-[#E63946]/10" },
    { value: "+1200", label: t.whyUs.stats.clients, icon: <Users className="w-6 h-6 text-blue-400" />, iconBg: "bg-blue-400/10" },
    { value: "+150", label: t.whyUs.stats.team, icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />, iconBg: "bg-emerald-400/10" },
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-50 text-slate-800 relative overflow-hidden">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:30px_30px] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              key={idx}
              className="bg-white border border-slate-200/80 p-6 rounded-2xl text-center shadow-md flex flex-col items-center justify-center hover:border-yellow-500/30 transition-colors"
            >
              <div className={`mb-4 ${stat.iconBg} p-3 rounded-full`}>{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-black text-amber-600 mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-slate-700 font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Content & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Header */}
          <div className="lg:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-slate-900"
            >
              {t.whyUs.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 text-base md:text-lg leading-relaxed font-semibold mb-8"
            >
              {t.whyUs.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-20 h-1 bg-yellow-500 rounded-full"
            />
          </div>

          {/* Features list */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {t.whyUs.points.map((point: any, idx: number) => (
              <motion.div
                initial={{ opacity: 0, x: isEn ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                key={idx}
                className="bg-white border border-slate-200/80 hover:border-yellow-500/30 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h4 className="text-amber-700 font-bold text-lg mb-2">
                  {point.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed font-semibold">
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

interface ContactFormProps {
  isEn: boolean;
  t: any;
}

export default function ContactForm({ isEn, t }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "contracting",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceLabels: Record<string, { ar: string; en: string }> = {
    contracting: { ar: "أعمال المقاولات والإنشاءات", en: "Contracting & Construction" },
    finishing: { ar: "التشطيبات والديكور الداخلي", en: "Finishing & Decor" },
    mep: { ar: "الأعمال الكهروميكانيكية (MEP)", en: "Electrical & Plumbing (MEP)" },
    ac: { ar: "صيانة التكييف", en: "AC Maintenance" },
    cleaning: { ar: "خدمات النظافة", en: "Cleaning Services" },
    floor: { ar: "جلي وتلميع الأرضيات", en: "Floor Polishing" },
    pest: { ar: "مكافحة الحشرات", en: "Pest Control" },
    moving: { ar: "نقل الأثاث والعفش", en: "Furniture Moving" },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      alert(isEn ? "Please fill all required fields" : "يرجى ملء جميع الحقول المطلوبة");
      return;
    }

    setIsSubmitting(true);

    const serviceName = serviceLabels[formData.service]?.[isEn ? "en" : "ar"] || formData.service;
    
    // Construct the WhatsApp message
    const waMessage = isEn 
      ? `*New Service Request from Website:*
• *Name:* ${formData.name}
• *Phone:* ${formData.phone}
• *Service:* ${serviceName}
• *Details:* 
${formData.message}`
      : `*طلب خدمة جديد من الموقع الإلكتروني:*
• *الاسم الكريّم:* ${formData.name}
• *رقم الجوال:* ${formData.phone}
• *الخدمة المطلوبة:* ${serviceName}
• *تفاصيل الاستفسار:*
${formData.message}`;

    const waUrl = `https://wa.me/97455056698?text=${encodeURIComponent(waMessage)}`;

    // Open WhatsApp in a new tab
    window.open(waUrl, "_blank");

    setIsSubmitting(false);
    setFormData({
      name: "",
      phone: "",
      service: "contracting",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Information */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
                {t.contact.title}
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed font-semibold mb-12">
                {t.contact.subtitle}
              </p>

              <div className="flex flex-col gap-8">
                {/* Address */}
                <div className="flex gap-4 items-start">
                  <div className="bg-yellow-500/10 p-3 rounded-full text-yellow-600 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg mb-1">
                      {t.contact.officeTitle}
                    </h4>
                    <p className="text-slate-600 text-sm font-semibold">{t.contact.officeDesc}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 items-start">
                  <div className="bg-yellow-500/10 p-3 rounded-full text-yellow-600 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg mb-1">
                      {t.contact.phoneTitle}
                    </h4>
                    <p className="text-slate-600 text-sm font-semibold" dir="ltr">
                      +974 55056698
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="bg-yellow-500/10 p-3 rounded-full text-yellow-600 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg mb-1">
                      {t.contact.emailTitle}
                    </h4>
                    <p className="text-slate-600 text-sm font-semibold">info@brightideas-qa.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 p-8 md:p-10 rounded-3xl shadow-xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-bold text-slate-700">
                  {t.contact.nameLabel} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={isEn ? "Enter your name" : "أدخل اسمك الكريم"}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 outline-none focus:bg-white focus:border-yellow-600 focus:ring-2 focus:ring-yellow-500/15 transition-all text-sm font-semibold placeholder-slate-400"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-sm font-bold text-slate-700">
                  {t.contact.phoneLabel} *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="e.g. 55056698"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 outline-none focus:bg-white focus:border-yellow-600 focus:ring-2 focus:ring-yellow-500/15 transition-all text-sm font-semibold placeholder-slate-400"
                />
              </div>

              {/* Service Select */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="service" className="text-sm font-bold text-slate-700">
                  {t.contact.serviceLabel}
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 outline-none focus:bg-white focus:border-yellow-600 focus:ring-2 focus:ring-yellow-500/15 transition-all text-sm font-semibold"
                >
                  <option value="contracting" className="bg-white text-slate-800">
                    {isEn ? "Contracting & Construction" : "أعمال المقاولات والإنشاءات"}
                  </option>
                  <option value="finishing" className="bg-white text-slate-800">
                    {isEn ? "Finishing & Decor" : "التشطيبات والديكور الداخلي"}
                  </option>
                  <option value="mep" className="bg-white text-slate-800">
                    {isEn ? "Electrical & Plumbing (MEP)" : "الأعمال الكهروميكانيكية (MEP)"}
                  </option>
                  <option value="ac" className="bg-white text-slate-800">
                    {isEn ? "AC Maintenance" : "صيانة التكييف"}
                  </option>
                  <option value="cleaning" className="bg-white text-slate-800">
                    {isEn ? "Cleaning Services" : "خدمات النظافة"}
                  </option>
                  <option value="floor" className="bg-white text-slate-800">
                    {isEn ? "Floor Polishing" : "جلي وتلميع الأرضيات"}
                  </option>
                  <option value="pest" className="bg-white text-slate-800">
                    {isEn ? "Pest Control" : "مكافحة الحشرات"}
                  </option>
                  <option value="moving" className="bg-white text-slate-800">
                    {isEn ? "Furniture Moving" : "نقل الأثاث والعفش"}
                  </option>
                </select>
              </div>

              {/* Message Details */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-bold text-slate-700">
                  {t.contact.messageLabel} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder={isEn ? "Describe your request..." : "اكتب تفاصيل طلبك هنا..."}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 outline-none focus:bg-white focus:border-yellow-600 focus:ring-2 focus:ring-yellow-500/15 transition-all text-sm font-semibold resize-none placeholder-slate-400"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-yellow-500 hover:bg-yellow-400 disabled:bg-yellow-500/50 text-black font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all cursor-pointer text-base mt-2"
              >
                <Send size={18} />
                <span>{isSubmitting ? "..." : t.contact.submitBtn}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      alert(isEn ? "Please fill all required fields" : "يرجى ملء جميع الحقول المطلوبة");
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      alert(
        isEn
          ? "Thank you! Your request has been received successfully."
          : "شكراً لك! تم استلام طلبك بنجاح وسنتواصل معك قريباً."
      );
      setIsSubmitting(false);
      setFormData({
        name: "",
        phone: "",
        service: "contracting",
        message: "",
      });
    }, 1500);
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
    <section id="contact" className="py-24 bg-[#0B1120] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Information */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                {t.contact.title}
              </h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light mb-12">
                {t.contact.subtitle}
              </p>

              <div className="flex flex-col gap-8">
                {/* Address */}
                <div className="flex gap-4 items-start">
                  <div className="bg-yellow-500/10 p-3 rounded-full text-yellow-500 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">
                      {t.contact.officeTitle}
                    </h4>
                    <p className="text-gray-400 text-sm">{t.contact.officeDesc}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 items-start">
                  <div className="bg-yellow-500/10 p-3 rounded-full text-yellow-500 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">
                      {t.contact.phoneTitle}
                    </h4>
                    <p className="text-gray-400 text-sm" dir="ltr">
                      +974 55056698
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="bg-yellow-500/10 p-3 rounded-full text-yellow-500 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">
                      {t.contact.emailTitle}
                    </h4>
                    <p className="text-gray-400 text-sm">info@brightideas-qa.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white/5 border border-white/5 p-8 md:p-10 rounded-3xl shadow-xl backdrop-blur-xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-semibold text-gray-300">
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
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/15 transition-all text-sm font-medium placeholder-gray-500"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-sm font-semibold text-gray-300">
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
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/15 transition-all text-sm font-medium placeholder-gray-500"
                />
              </div>

              {/* Service Select */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="service" className="text-sm font-semibold text-gray-300">
                  {t.contact.serviceLabel}
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-white/10 text-white outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/15 transition-all text-sm font-medium"
                >
                  <option value="contracting" className="bg-[#0B1120]">
                    {isEn ? "Contracting & Construction" : "أعمال المقاولات والإنشاءات"}
                  </option>
                  <option value="finishing" className="bg-[#0B1120]">
                    {isEn ? "Finishing & Decor" : "التشطيبات والديكور الداخلي"}
                  </option>
                  <option value="mep" className="bg-[#0B1120]">
                    {isEn ? "Electrical & Plumbing (MEP)" : "الأعمال الكهروميكانيكية (MEP)"}
                  </option>
                  <option value="ac" className="bg-[#0B1120]">
                    {isEn ? "AC Maintenance" : "صيانة التكييف"}
                  </option>
                  <option value="cleaning" className="bg-[#0B1120]">
                    {isEn ? "Cleaning Services" : "خدمات النظافة"}
                  </option>
                  <option value="floor" className="bg-[#0B1120]">
                    {isEn ? "Floor Polishing" : "جلي وتلميع الأرضيات"}
                  </option>
                  <option value="pest" className="bg-[#0B1120]">
                    {isEn ? "Pest Control" : "مكافحة الحشرات"}
                  </option>
                  <option value="moving" className="bg-[#0B1120]">
                    {isEn ? "Furniture Moving" : "نقل الأثاث والعفش"}
                  </option>
                </select>
              </div>

              {/* Message Details */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-semibold text-gray-300">
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
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/15 transition-all text-sm font-medium resize-none placeholder-gray-500"
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

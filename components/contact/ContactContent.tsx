"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send, CheckCircle2 } from "lucide-react";
import {
  IPHONE_MODELS,
  IPAD_MODELS,
  SAMSUNG_S_MODELS,
  SAMSUNG_A_MODELS,
  GAME_CONSOLES,
  LAPTOP_BRANDS,
} from "@/lib/utils";

const SAMSUNG_NOTE = ["Samsung Note 10", "Samsung Note 20", "Other Samsung Note"];
const SAMSUNG_TABLETS = ["Samsung Tab A", "Samsung Tab S", "Samsung Tab S7/S8/S9", "Other Samsung Tablet"];
const ANDROID_OTHER = ["Huawei", "Xiaomi", "Oppo", "Nokia", "OnePlus", "Other Android"];

type FormState = {
  name: string; phone: string; email: string; branch: string;
  iphoneModel: string; ipadModel: string; samsungS: string; samsungA: string;
  samsungNote: string; samsungTablet: string; androidOther: string;
  gameConsole: string; laptopBrand: string; message: string;
};

const initial: FormState = {
  name: "", phone: "", email: "", branch: "leopardstown",
  iphoneModel: "", ipadModel: "", samsungS: "", samsungA: "",
  samsungNote: "", samsungTablet: "", androidOther: "", gameConsole: "",
  laptopBrand: "", message: "",
};

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/20 transition-colors";

const labelClass = "block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2";

export function ContactContent() {
  const [form, setForm] = useState<FormState>(initial);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSuccess(true);
      setForm(initial);
    } catch {
      setError("Something went wrong. Please try calling us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-2xl">
            <h1 className="font-display font-extrabold text-4xl md:text-5xl text-white leading-tight mb-5">
              Contact Us
            </h1>
            <p className="text-zinc-400 leading-relaxed text-sm">
              Questions about our products, repairs, or services? We&apos;re here to help.
              Fill out the form below or call us directly at either branch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form — 3 cols */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-7">
                {success ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center mb-5">
                      <CheckCircle2 className="w-7 h-7 text-emerald-400" />
                    </div>
                    <h2 className="font-display font-bold text-2xl text-white mb-2">Message Sent!</h2>
                    <p className="text-zinc-400 max-w-sm text-sm">
                      Thank you for reaching out. We&apos;ll get back to you as soon as possible.
                    </p>
                    <button onClick={() => setSuccess(false)} className="mt-7 btn-accent">
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="font-display font-bold text-xl text-white mb-2">Send Us a Message</h2>

                    {/* Name + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Name *</label>
                        <input required value={form.name} onChange={update("name")} placeholder="Your full name" className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Contact Number *</label>
                        <input required type="tel" value={form.phone} onChange={update("phone")} placeholder="Your phone number" className={inputClass} />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className={labelClass}>Email *</label>
                      <input required type="email" value={form.email} onChange={update("email")} placeholder="your@email.com" className={inputClass} />
                    </div>

                    {/* Branch */}
                    <div>
                      <label className={labelClass}>Branch *</label>
                      <div className="flex flex-wrap gap-4">
                        {[
                          { value: "leopardstown", label: "Leopardstown Shopping Center" },
                          { value: "dun-laoghaire", label: "Dun Laoghaire Town Centre" },
                        ].map(({ value, label }) => (
                          <label key={value} className="flex items-center gap-2.5 cursor-pointer">
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${form.branch === value ? "border-accent" : "border-zinc-600"}`}>
                              {form.branch === value && <div className="w-2 h-2 rounded-full bg-accent" />}
                            </div>
                            <input type="radio" name="branch" value={value} checked={form.branch === value} onChange={update("branch")} className="sr-only" />
                            <span className="text-sm text-zinc-400">{label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Device selects */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { label: "iPhone Repair", field: "iphoneModel" as const, options: IPHONE_MODELS, placeholder: "Choose iPhone model" },
                        { label: "iPad Repairs", field: "ipadModel" as const, options: IPAD_MODELS, placeholder: "Choose iPad model" },
                        { label: 'Samsung "S" Series', field: "samsungS" as const, options: SAMSUNG_S_MODELS, placeholder: "Choose Samsung S model" },
                        { label: 'Samsung "A" Series', field: "samsungA" as const, options: SAMSUNG_A_MODELS, placeholder: "Choose Samsung A model" },
                        { label: "Samsung Note / Other", field: "samsungNote" as const, options: SAMSUNG_NOTE, placeholder: "Choose Samsung Note" },
                        { label: "Samsung Tablet", field: "samsungTablet" as const, options: SAMSUNG_TABLETS, placeholder: "Choose Samsung Tablet" },
                        { label: "Other Android", field: "androidOther" as const, options: ANDROID_OTHER, placeholder: "Choose brand" },
                        { label: "Game Console", field: "gameConsole" as const, options: GAME_CONSOLES, placeholder: "Choose console" },
                      ].map(({ label, field, options, placeholder }) => (
                        <div key={field}>
                          <label className={labelClass}>{label}</label>
                          <select value={form[field]} onChange={update(field)} className={inputClass + " appearance-none cursor-pointer"}>
                            <option value="">{placeholder}</option>
                            {options.map((o) => <option key={o} value={o}>{o}</option>)}
                          </select>
                        </div>
                      ))}
                    </div>

                    {/* Laptop */}
                    <div>
                      <label className={labelClass}>Laptop Repairs</label>
                      <select value={form.laptopBrand} onChange={update("laptopBrand")} className={inputClass + " appearance-none cursor-pointer"}>
                        <option value="">Choose laptop brand</option>
                        {LAPTOP_BRANDS.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className={labelClass}>Message *</label>
                      <textarea
                        required rows={5}
                        value={form.message} onChange={update("message")}
                        placeholder="Describe the issue with your device. For Other Android and Laptops, please include the model number."
                        className={inputClass + " resize-none"}
                      />
                    </div>

                    {error && (
                      <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">{error}</p>
                    )}

                    <button type="submit" disabled={loading} className="btn-accent disabled:opacity-60">
                      {loading ? (
                        <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
                      ) : (
                        <><Send className="w-4 h-4" />Send Message</>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Sidebar — 2 cols */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2 space-y-4"
            >
              {[
                { name: "Dun Laoghaire Branch", address: "67 Convent Road, Dun Laoghaire, Co. Dublin", phone: "(01) 2303852", tel: "012303852", hours: "Mon–Sat: 10:00am – 6:00pm" },
                { name: "Leopardstown Branch", address: "Unit 3B, Leopardstown SC, Ballyogan Road, Dublin 18", phone: "(01) 2944561", tel: "012944561", hours: "Mon–Sat: 10:30am – 6:00pm" },
              ].map((branch) => (
                <div key={branch.name} className="p-6 rounded-xl border border-zinc-800 bg-zinc-900">
                  <h3 className="font-semibold text-white mb-4 text-sm">{branch.name}</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-zinc-400">
                      <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      {branch.address}
                    </li>
                    <li className="flex items-center gap-3 text-sm text-zinc-400">
                      <Phone className="w-4 h-4 text-accent shrink-0" />
                      <a href={`tel:${branch.tel}`} className="hover:text-accent transition-colors">{branch.phone}</a>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-zinc-400">
                      <Clock className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      <div>{branch.hours}<div className="text-xs text-zinc-600 mt-0.5">Closed Sundays & Bank Holidays</div></div>
                    </li>
                  </ul>
                  <a href={`tel:${branch.tel}`} className="mt-4 btn-accent w-full justify-center">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              ))}

              {/* Hours summary */}
              <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900">
                <h3 className="font-semibold text-white mb-4 text-sm">Opening Hours</h3>
                <div className="space-y-2.5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Dun Laoghaire</span>
                    <span className="text-zinc-300 text-xs font-medium">Mon–Sat 10:00–18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Leopardstown</span>
                    <span className="text-zinc-300 text-xs font-medium">Mon–Sat 10:30–18:00</span>
                  </div>
                  <div className="flex justify-between pt-2.5 border-t border-zinc-800">
                    <span className="text-zinc-400">Sunday & Bank Holidays</span>
                    <span className="text-red-400 text-xs font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

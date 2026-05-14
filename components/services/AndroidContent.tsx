"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Smartphone, ArrowRight } from "lucide-react";

const androidCategories = [
  { title: "Samsung \"S\" Series", models: ["Samsung S20", "Samsung S21", "Samsung S22", "Samsung S23", "Samsung S24"], cta: "Book Repair" },
  { title: "Samsung \"A\" Series", models: ["Samsung A12", "Samsung A32", "Samsung A52", "Samsung A53", "Samsung A54", "All A Series"], cta: "Book Repair" },
  { title: "Samsung Note Series", models: ["Samsung Note 10", "Samsung Note 20", "Other Samsung Note"], cta: "Book Repair" },
  { title: "Samsung Tablets", models: ["Samsung Tab A", "Samsung Tab S", "Samsung Tab S7/S8/S9", "All Samsung Tablets"], cta: "Book Repair" },
  { title: "Other Android Phones & Tablets", models: ["Huawei", "Xiaomi", "Oppo", "Nokia", "OnePlus", "All Other Brands"], cta: "Make Quotation" },
];

const commonRepairs = [
  "Screen Replacement", "Battery Replacement", "Charging Port Repair", "Camera Repair",
  "Software Issues", "Water Damage", "Speaker / Microphone", "Back Glass Replacement",
];

export function AndroidContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-2xl">
            <h1 className="font-display font-extrabold text-4xl md:text-5xl text-white leading-tight mb-5">
              Android Repairs
            </h1>
            <p className="text-zinc-400 leading-relaxed max-w-xl text-sm">
              Expert repairs for all Android phones and tablets. Samsung S, A & Note series,
              Samsung tablets, Huawei, Xiaomi, Oppo, Nokia and all other Android devices.
              Our technicians use specialised tools and genuine parts for every repair.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="section bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {androidCategories.map(({ title, models, cta }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-6 rounded-xl border border-zinc-800 bg-zinc-900 hover:border-zinc-700 transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center mb-4">
                  <Smartphone className="w-4 h-4 text-accent" />
                </div>
                <h3 className="font-semibold text-white mb-3 text-sm">{title}</h3>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {models.map((m) => (
                    <span key={m} className="px-2 py-0.5 rounded-full bg-zinc-800 border border-zinc-700 text-xs text-zinc-400">
                      {m}
                    </span>
                  ))}
                </div>
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm text-accent font-medium">
                  {cta}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Common repairs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-7 rounded-xl border border-zinc-800 bg-zinc-900"
          >
            <h3 className="font-semibold text-white mb-5">Common Repairs We Offer</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {commonRepairs.map((repair) => (
                <div key={repair} className="flex items-center gap-2 text-sm text-zinc-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {repair}
                </div>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-zinc-800 flex flex-wrap items-center gap-3">
              <Link href="/contact" className="btn-accent">
                Book Android Repair
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-xs text-zinc-600">* For other brands, please supply the model number in your message.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

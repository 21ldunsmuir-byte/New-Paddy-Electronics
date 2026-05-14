"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Smartphone, ArrowRight } from "lucide-react";

const categories = [
  {
    title: "iPhone Repairs",
    subtitle: "All Generations iPhone Repairs",
    description: "From iPhone 7 all the way through to the iPhone 15 Series, our certified technicians handle every model with precision and genuine parts.",
    href: "/services/iphone-repairs",
    cta: "View All",
  },
  {
    title: "iPad Repairs",
    subtitle: "All Generations iPad Repairs",
    description: "Screen replacements, battery changes, charging unit repairs, and motherboard repairs for every iPad generation including Air, Pro, and Mini.",
    href: "/services/ipad-repairs",
    cta: "View All",
  },
  {
    title: "Android Phone Repairs",
    subtitle: "Samsung, Huawei, Xiaomi, Oppo, Nokia",
    description: "Expert repairs for the full range of Android devices. From Samsung flagships to budget Androids, we diagnose and fix with specialised tools.",
    href: "/services/android",
    cta: "View All",
  },
  {
    title: "Android Tablet Repairs",
    subtitle: "Samsung Tablet Repairs",
    description: "Samsung tablet repairs across the full Tab range. For other Android tablet brands, please contact us to make a quotation.",
    href: "/contact",
    cta: "Make Quotation",
  },
];

export function SmartphonesContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-2xl">
            <h1 className="font-display font-extrabold text-4xl md:text-5xl text-white leading-tight mb-5">
              Smartphones &amp; Tablets
            </h1>
            <p className="text-zinc-400 leading-relaxed max-w-xl text-sm">
              Smartphone repairs encompass a range of services aimed at restoring functionality
              to mobile devices such as phones and tablets. From cracked screens to malfunctioning
              components, we address hardware and software issues that impede device performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="section bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories.map(({ title, subtitle, description, href, cta }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-7 rounded-xl border border-zinc-800 bg-zinc-900 hover:border-zinc-700 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-5">
                  <Smartphone className="w-4 h-4 text-accent" />
                </div>
                <h2 className="font-display font-bold text-xl text-white mb-1">{title}</h2>
                <div className="text-xs font-medium text-accent mb-3">{subtitle}</div>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">{description}</p>
                <Link href={href} className="btn-accent">
                  {cta}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

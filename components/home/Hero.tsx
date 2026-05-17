"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section className="bg-zinc-950 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.h1
            variants={item}
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white leading-tight tracking-tight mb-5"
          >
            Dublin&apos;s Trusted<br className="hidden sm:block" />
            Electronics Repair<br className="hidden sm:block" />
            <span className="text-accent">Specialists.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg text-zinc-400 leading-relaxed max-w-xl mb-8"
          >
            iPhones, Android phones, iPads, laptops, MacBooks, and game consoles — repaired
            fast with genuine parts. Two branches across Dublin since 2008.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3 mb-12">
            <Link href="/contact" className="btn-accent">
              Book a Repair
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services" className="btn-ghost">
              View Services
            </Link>
            <a href="tel:012303852" className="btn-ghost">
              <Phone className="w-4 h-4" />
              Call Us
            </a>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-8 pt-8 border-t border-zinc-800">
            {[
              { value: "16+", label: "Years in Dublin" },
              { value: "2", label: "Branch Locations" },
              { value: "10,000+", label: "Repairs Done" },
              { value: "100%", label: "Genuine Parts" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="font-display font-bold text-2xl text-white">{value}</div>
                <div className="text-xs text-zinc-500 mt-0.5">{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Gamepad2, ArrowRight } from "lucide-react";

const consoles = [
  { title: "Sony PS4 Repairs", brand: "PlayStation 4", services: ["System Reinstall", "PS4 Overheating", "Blu-ray Laser Eye Replacement", "HDMI Port Replacement", "Motherboard Replacement"] },
  { title: "Sony PS5 Repairs", brand: "PlayStation 5", services: ["System Reinstall", "PS5 Overheating", "Blu-ray Laser Eye Replacement", "HDMI Port Replacement", "Motherboard Replacement"] },
  { title: "Xbox 360 Repairs", brand: "Microsoft Xbox 360", services: ["System Reinstall", "Xbox Overheating", "Blu-ray Laser Eye Replacement", "HDMI Port Replacement", "Motherboard Replacement"] },
  { title: "Xbox One Series Repairs", brand: "Microsoft Xbox One", services: ["System Reinstall", "Xbox Overheating", "Blu-ray Laser Eye Replacement", "HDMI Port Replacement", "Motherboard Replacement"] },
  { title: "Nintendo Switch Repairs", brand: "Nintendo Switch", services: ["Charging Port Replacement", "Screen Replacement", "Charging IC Repair", "Joy-Stick Track Repair", "Motherboard Repair"] },
  { title: "Nintendo Switch Lite Repairs", brand: "Nintendo Switch Lite", services: ["Charging Port Replacement", "Screen Replacement", "Charging IC Repair", "Joy-Stick Track Repair", "Motherboard Repair"] },
];

export function GameConsolesContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-2xl">
            <h1 className="font-display font-extrabold text-4xl md:text-5xl text-white leading-tight mb-5">
              Console Repairs
            </h1>
            <p className="text-zinc-400 leading-relaxed max-w-xl text-sm">
              Game console repair is a specialised field focused on diagnosing, troubleshooting,
              and fixing issues in various gaming systems, including popular consoles like
              PlayStation, Xbox, and Nintendo Switch. Our skilled technicians use a combination
              of technical expertise and specialised tools to restore functionality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Consoles grid */}
      <section className="section bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white leading-tight">Consoles We Repair</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {consoles.map(({ title, brand, services }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-6 rounded-xl border border-zinc-800 bg-zinc-900 hover:border-zinc-700 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4">
                  <Gamepad2 className="w-4 h-4 text-accent" />
                </div>
                <h3 className="font-semibold text-white mb-0.5 text-sm">{title}</h3>
                <div className="text-xs text-zinc-500 mb-4">{brand}</div>
                <ul className="space-y-2 mb-5">
                  {services.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-xs text-zinc-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm text-accent font-medium">
                  Make Quotation
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 p-7 rounded-xl border border-zinc-800 bg-zinc-900 flex flex-col md:flex-row items-center justify-between gap-5"
          >
            <div>
              <h3 className="font-semibold text-white mb-1">Don&apos;t see your console?</h3>
              <p className="text-sm text-zinc-400">Contact us and we&apos;ll let you know if we can help.</p>
            </div>
            <Link href="/contact" className="btn-accent shrink-0">
              Get In Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

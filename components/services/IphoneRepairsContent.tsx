"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Smartphone, ArrowRight, ShieldCheck, Zap, Award, Phone } from "lucide-react";

const iphoneModels = [
  { title: "iPhone 7/8/SE 2020 Repairs", description: "Complete repair services for iPhone 7, 8, and SE 2020 including screen replacement, battery, and charging port.", note: null },
  { title: "iPhone 7/8 Plus Repairs", description: "Full repair services for the Plus range including screen replacement, rear camera, battery, and charging port repairs.", note: null },
  { title: "iPhone X/XS/XR/XS Max Repairs", description: "Premium repairs for the X range including OLED screen replacement, Face ID, battery, and back glass repairs.", note: null },
  { title: "iPhone 11 Repairs", description: "Specialist repair services for the iPhone 11 lineup — screen replacement, battery, camera, and charging port.", note: null },
  { title: "iPhone 12 Repairs", description: "Expert repair services for the iPhone 12 series including ceramic shield glass replacement and battery service.", note: null },
  { title: "iPhone 13 Repairs", description: "Certified repairs for the iPhone 13 range. Screen, battery, rear camera system, and charging port repairs.", note: null },
  { title: "iPhone 14 Repairs", description: "Professional iPhone 14 & 14 Pro Max repair services — screen replacement, battery, and back glass repairs.", note: null },
  { title: "iPhone 15 Repairs", description: "iPhone 15 Series screen replacement is available. Please note a deposit is required when ordering the screen.", note: "iPhone 15 Series screen replacement available — deposit required for ordering screen." },
];

const whyUs = [
  { icon: ShieldCheck, label: "Genuine Parts" },
  { icon: Zap, label: "Same Day Service" },
  { icon: Award, label: "Certified Technicians" },
];

export function IphoneRepairsContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl text-white leading-tight mb-5">
                iPhone Repairs
              </h1>
              <p className="text-zinc-400 leading-relaxed mb-4 max-w-lg text-sm">
                Whether you&apos;ve suffered a cracked screen, a failing battery, or need a
                malfunctioning button replaced, we&apos;ve got you covered. Our team of certified
                technicians specialises in providing top-quality service, using only the best
                parts to ensure your device operates like new.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-6 max-w-lg text-sm">
                At New Paddy Electronics, we understand how essential your iPhone is to your
                daily life, which is why we offer fast, reliable, and affordable repair services.
                Visit us today for swift service and competitive pricing.
              </p>
              <div className="flex flex-wrap gap-2 mb-7">
                {whyUs.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-800 border border-zinc-700 text-xs text-zinc-300">
                    <Icon className="w-3.5 h-3.5 text-accent" />
                    {label}
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-accent">
                Book a Repair
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Stat card */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="w-full max-w-xs p-8 rounded-2xl border border-zinc-800 bg-zinc-900 text-center">
                <div className="w-16 h-16 rounded-2xl bg-zinc-800 flex items-center justify-center mx-auto mb-5">
                  <Smartphone className="w-8 h-8 text-accent" />
                </div>
                <div className="font-display font-bold text-2xl text-white mb-1">All Models</div>
                <div className="text-sm text-zinc-500 mb-6">iPhone 7 → 15 Series</div>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 rounded-lg bg-zinc-800 border border-zinc-700">
                    <div className="font-bold text-white text-sm">16+</div>
                    <div className="text-xs text-zinc-500 mt-0.5">Years exp.</div>
                  </div>
                  <div className="p-3 rounded-lg bg-zinc-800 border border-zinc-700">
                    <div className="font-bold text-white text-sm">100%</div>
                    <div className="text-xs text-zinc-500 mt-0.5">Genuine parts</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Models grid */}
      <section className="section bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white leading-tight">
              Select Your Model
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {iphoneModels.map(({ title, description, note }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group p-6 rounded-xl border border-zinc-800 bg-zinc-900 hover:border-zinc-700 transition-all duration-200"
              >
                {note && (
                  <div className="mb-4 px-3 py-2 rounded-lg border border-accent/20 bg-accent/5 text-xs text-accent leading-relaxed">
                    {note}
                  </div>
                )}
                <h3 className="font-semibold text-white mb-2 text-sm">{title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-5">{description}</p>
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm text-accent font-medium">
                  Book Repair Now
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-8 md:p-10 rounded-xl border border-zinc-800 bg-zinc-950 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-1">Not sure what&apos;s wrong?</h2>
              <p className="text-zinc-400 text-sm">Bring it in and we&apos;ll diagnose for free. No fix, no fee.</p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a href="tel:012303852" className="btn-accent">
                <Phone className="w-4 h-4" />
                Dun Laoghaire
              </a>
              <a href="tel:012944561" className="btn-ghost">
                <Phone className="w-4 h-4" />
                Leopardstown
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

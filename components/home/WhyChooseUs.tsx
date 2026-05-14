"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Award, Clock, Wrench, ThumbsUp } from "lucide-react";

const reasons = [
  { icon: Award, title: "Established Excellence", description: "Serving Dublin since 2008. Over 16 years of trust built with thousands of satisfied customers." },
  { icon: ShieldCheck, title: "Genuine Parts Only", description: "We use genuine parts and adhere to the highest industry standards on every repair." },
  { icon: Zap, title: "Swift Turnaround", description: "Your time matters. Our efficient process gets your device back to you as quickly as possible." },
  { icon: Wrench, title: "Certified Technicians", description: "Seasoned professionals with expertise, precision, and a passion for all things tech." },
  { icon: Clock, title: "Transparent Pricing", description: "Fast, reliable, and affordable. No hidden fees — you know the cost before any work begins." },
  { icon: ThumbsUp, title: "Two Dublin Locations", description: "Branches in Dun Laoghaire and Leopardstown — always close when you need us." },
];

export function WhyChooseUs() {
  return (
    <section className="section bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white leading-tight mb-5">
              Why New Paddy<br />Electronics?
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-8 max-w-md">
              We&apos;re not just a repair service — we&apos;re a tech community passionate about
              enhancing your digital experience. Our commitment to excellence has made us
              Dublin&apos;s go-to repair specialists for over 16 years.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-6 p-5 rounded-xl border border-zinc-800 bg-zinc-900 w-fit">
              {[
                { value: "16+", label: "Years" },
                { value: "2", label: "Branches" },
                { value: "10k+", label: "Repairs" },
              ].map(({ value, label }, i) => (
                <div key={label} className="flex items-center gap-5">
                  {i > 0 && <div className="w-px h-8 bg-zinc-800" />}
                  <div className="text-center">
                    <div className="font-display font-bold text-2xl text-white">{value}</div>
                    <div className="text-xs text-zinc-500 mt-0.5">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: reasons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {reasons.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4 text-accent" />
                </div>
                <h3 className="font-semibold text-white text-sm mb-1">{title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

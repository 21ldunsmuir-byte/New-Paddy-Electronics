"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Zap, Award, Users, ArrowRight } from "lucide-react";

const values = [
  { icon: Award, title: "Excellence", description: "Over 16 years of delivering top-quality repairs with a commitment to precision in every job." },
  { icon: Shield, title: "Integrity", description: "Genuine parts only. Transparent pricing. No surprises — just honest, reliable service." },
  { icon: Zap, title: "Efficiency", description: "Swift turnaround without cutting corners. We respect your time as much as your device." },
  { icon: Users, title: "Community", description: "Rooted in Dublin since 2008, we're proud to be a trusted part of the local community." },
];

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-2xl">
            <h1 className="font-display font-extrabold text-4xl md:text-5xl text-white leading-tight mb-5">
              About New Paddy Electronics
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Since 2008, we&apos;ve been a beacon of reliability in the tech world. With our commitment
              to excellence, we operate two branches in Dun Laoghaire and Leopardstown, Dublin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white leading-tight mb-6">Our Story</h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed text-sm">
                <p>New Paddy Electronics was founded in 2008 with a simple mission: to provide Dublin residents with fast, affordable, and reliable electronics repairs. What started as a single shop in Dun Laoghaire has grown into two thriving branches serving thousands of customers every year.</p>
                <p>Our mobile and laptop repair services benefit from over a decade of experience. Our certified technicians bring a wealth of expertise to every repair, ensuring your gadgets function like new — whether it&apos;s replacing a damaged screen, fixing a charging port, or resolving software glitches.</p>
                <p>Beyond repairs, we stock an extensive selection of high-quality mobile accessories. At New Paddy Electronics, we&apos;re not just a service — we&apos;re a tech community passionate about enhancing your digital life.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="grid grid-cols-2 gap-3">
              {[
                { value: "2008", label: "Founded" },
                { value: "16+", label: "Years in Business" },
                { value: "2", label: "Dublin Branches" },
                { value: "10k+", label: "Repairs Done" },
              ].map(({ value, label }) => (
                <div key={label} className="p-6 rounded-xl border border-zinc-800 bg-zinc-950 text-center">
                  <div className="font-display font-bold text-3xl text-white mb-1">{value}</div>
                  <div className="text-xs text-zinc-500">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white leading-tight">What Drives Us</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {values.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-xl border border-zinc-800 bg-zinc-900 hover:border-zinc-700 transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center mb-4">
                  <Icon className="w-4 h-4 text-accent" />
                </div>
                <h3 className="font-semibold text-white mb-1.5 text-sm">{title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services intro */}
      <section className="section bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white leading-tight mb-6">Our Services</h2>
              <div className="space-y-3 text-zinc-400 leading-relaxed text-sm mb-8">
                <p><strong className="text-zinc-200">Mobile and Laptop Repairs:</strong> With over a decade of experience, our certified technicians bring a wealth of expertise to every repair, ensuring your gadgets function like new.</p>
                <p><strong className="text-zinc-200">Accessories Galore:</strong> Explore our extensive selection of high-quality mobile accessories, handpicked to elevate your device experience.</p>
                <p><strong className="text-zinc-200">Expert Technicians:</strong> Our seasoned team embodies expertise, precision, and a passion for all things tech. Your devices are in capable hands.</p>
              </div>
              <Link href="/services" className="btn-accent">
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Laptop, Monitor, Keyboard, Cpu, Droplets, Package, ArrowRight, Settings } from "lucide-react";

const repairs = [
  { icon: Settings, title: "System Service", description: "Maintenance and optimisation of software and operating systems running on portable computers. This includes tasks such as operating system updates, driver installations, disk cleanup, and system diagnostics to enhance performance and resolve software-related issues." },
  { icon: Monitor, title: "Screen Replacements", description: "Specialised service aimed at repairing or replacing damaged displays on portable computers. Whether it's due to accidental drops, cracks, or malfunctioning screens, this service restores visual functionality to laptops and MacBooks." },
  { icon: Keyboard, title: "Keyboard Replacements", description: "Specialised service focused on repairing or replacing malfunctioning or damaged keyboards on portable computers. Whether due to spills, wear and tear, or physical damage, keyboard issues can hinder productivity and usability." },
  { icon: Cpu, title: "Motherboard Repairs", description: "Laptop and MacBook motherboard repairs involve diagnosing and fixing issues related to the central circuit board. From power failures to connectivity issues, problems with the motherboard can severely impact performance." },
  { icon: Droplets, title: "Liquid Damage Repairs", description: "Essential services aimed at restoring functionality to devices affected by spills or exposure to liquids. Liquid damage can cause a range of issues, from short circuits to corrosion of internal components." },
  { icon: Package, title: "PC Building Service", description: "Expertise and assistance in assembling custom desktop computers tailored to individual needs. From gaming rigs to professional workstations, we guide customers through component selection to create a powerful and efficient system." },
];

export function LaptopsContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-2xl">
            <h1 className="font-display font-extrabold text-4xl md:text-5xl text-white leading-tight mb-5">
              Laptops &amp; MacBooks
            </h1>
            <p className="text-zinc-400 leading-relaxed max-w-xl text-sm">
              Laptop and MacBook repairs encompass a wide array of services aimed at resolving
              hardware and software issues. From damaged screens and malfunctioning keyboards to
              software glitches and logic board failures, our repair services ensure optimal
              performance and extend the lifespan of these devices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Repairs */}
      <section className="section bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white leading-tight">Our Laptop Services</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {repairs.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group p-6 rounded-xl border border-zinc-800 bg-zinc-900 hover:border-zinc-700 transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center mb-4">
                  <Icon className="w-4 h-4 text-accent" />
                </div>
                <h3 className="font-semibold text-white mb-2 text-sm">{title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-5">{description}</p>
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm text-accent font-medium">
                  Make Quotation
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Supported brands */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 p-6 rounded-xl border border-zinc-800 bg-zinc-900"
          >
            <h3 className="font-semibold text-white mb-4 text-sm">Supported Brands</h3>
            <div className="flex flex-wrap gap-2">
              {["Apple MacBook", "Dell", "HP", "Lenovo", "Asus", "Acer", "Microsoft Surface", "Toshiba", "Samsung", "All Other Brands"].map((brand) => (
                <span key={brand} className="px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-xs text-zinc-400">
                  {brand}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

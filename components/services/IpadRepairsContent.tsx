"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Tablet, ArrowRight, Monitor, Battery, Zap, Cpu } from "lucide-react";

const repairs = [
  {
    icon: Monitor,
    title: "iPad Screen Replacement",
    description: "Replacing the screen of an iPad is a delicate process that requires precision and care. Whether due to accidental drops, cracks, or malfunctioning displays, a damaged screen can significantly hinder the functionality and aesthetic of your device. Screen replacement involves carefully removing the broken screen, ensuring no further internal damage occurs, and installing a new screen with proper alignment and connectivity.",
  },
  {
    icon: Zap,
    title: "iPad Charging Unit Replacement",
    description: "Replacing the charging unit of an iPad can be essential when experiencing issues such as slow charging, no charging, or connectivity problems. Over time, the charging port can accumulate dust, become worn, or sustain damage, leading to these issues.",
  },
  {
    icon: Battery,
    title: "iPad Battery Replacement",
    description: "Replacing the battery of an iPad can breathe new life into a device that has seen diminished performance and shorter battery life over time. Whether due to natural wear and tear or intensive usage, batteries degrade and eventually fail to hold a charge.",
  },
  {
    icon: Cpu,
    title: "iPad Motherboard Repair",
    description: "The motherboard, or logic board, is the central hub of the device, housing critical components such as the CPU, memory, and various controllers. Damage to this part can manifest as issues with power, charging, connectivity, or overall functionality. Successful repair involves precise diagnostics to identify faults, followed by careful soldering and component replacement.",
  },
];

export function IpadRepairsContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-2xl">
            <h1 className="font-display font-extrabold text-4xl md:text-5xl text-white leading-tight mb-5">
              iPad Repairs
            </h1>
            <p className="text-zinc-400 leading-relaxed max-w-xl text-sm">
              iPad repair involves diagnosing and fixing issues ranging from hardware
              malfunctions to software glitches. Common repair tasks include screen replacements,
              battery changes, addressing charging issues, and resolving software errors. Skilled
              technicians use specialised tools and techniques to ensure the device is restored to
              optimal working condition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Repairs */}
      <section className="section bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white leading-tight">Repair Services</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {repairs.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-7 rounded-xl border border-zinc-800 bg-zinc-900 hover:border-zinc-700 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4">
                  <Icon className="w-4 h-4 text-accent" />
                </div>
                <h3 className="font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-5">{description}</p>
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm text-accent font-medium">
                  Book Repair Appointment
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
            transition={{ delay: 0.2 }}
            className="mt-6 p-6 rounded-xl border border-zinc-800 bg-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div>
              <h3 className="font-semibold text-white mb-1">Ready to get your iPad fixed?</h3>
              <p className="text-sm text-zinc-400">All iPad generations — Air, Pro, Mini, standard.</p>
            </div>
            <Link href="/contact" className="btn-accent shrink-0">
              Book Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";

const branches = [
  {
    name: "Dun Laoghaire",
    address: "67 Convent Road, Dun Laoghaire, Co. Dublin",
    phone: "(01) 2303852",
    tel: "012303852",
    hours: "Mon–Sat: 10:00am – 6:00pm",
    note: "Closed Sundays & Bank Holidays",
    mapUrl: "https://maps.google.com/?q=67+Convent+Road+Dun+Laoghaire+Dublin",
  },
  {
    name: "Leopardstown",
    address: "Unit 3B, Leopardstown SC, Ballyogan Road, Dublin 18",
    phone: "(01) 2944561",
    tel: "012944561",
    hours: "Mon–Sat: 10:30am – 6:00pm",
    note: "Closed Sundays & Bank Holidays",
    mapUrl: "https://maps.google.com/?q=Leopardstown+Shopping+Centre+Dublin+18",
  },
];

export function BranchesSection() {
  return (
    <section className="section bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-10"
        >
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white leading-tight">
            Find Us in Dublin
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {branches.map(({ name, address, phone, tel, hours, note, mapUrl }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-zinc-950 rounded-xl border border-zinc-800 p-7"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-display font-bold text-lg text-white">{name} Branch</h3>
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Open
                </span>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-sm text-zinc-400">
                  <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  {address}
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-accent shrink-0" />
                  <a href={`tel:${tel}`} className="text-zinc-400 hover:text-accent transition-colors">{phone}</a>
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-400">
                  <Clock className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <div>{hours}<br /><span className="text-xs text-zinc-600">{note}</span></div>
                </li>
              </ul>

              <div className="flex gap-2">
                <a href={`tel:${tel}`} className="btn-accent flex-1 justify-center">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost flex-1 justify-center"
                >
                  <MapPin className="w-4 h-4" />
                  Directions
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-4 px-6 py-5 rounded-xl border border-zinc-800 bg-zinc-950 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p className="text-sm text-zinc-400">Not sure which branch to visit? Send us a message.</p>
          <Link href="/contact" className="btn-ghost shrink-0">
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

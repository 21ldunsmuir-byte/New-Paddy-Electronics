"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Smartphone, Monitor, Tablet, Laptop, Gamepad2, Package, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "iPhone Repairs",
    description: "All iPhone models from 7 to 15 Series. Screen, battery, charging port, camera and more.",
    href: "/services/iphone-repairs",
    popular: true,
  },
  {
    icon: Tablet,
    title: "Smartphones & Tablets",
    description: "iPhones, iPads, Samsung, Huawei, Xiaomi, Oppo, Nokia and all Android devices.",
    href: "/services/smartphones-tablets",
  },
  {
    icon: Monitor,
    title: "iPad Repairs",
    description: "Screen replacements, battery, charging unit and motherboard repairs for all iPads.",
    href: "/services/ipad-repairs",
  },
  {
    icon: Laptop,
    title: "Laptops & MacBooks",
    description: "Screen, keyboard, motherboard, liquid damage, system service and PC building.",
    href: "/services/laptops-macbooks",
  },
  {
    icon: Smartphone,
    title: "Android Phones & Tablets",
    description: "Samsung S & A series, Note, Huawei, Xiaomi, Oppo, Nokia and all Android devices.",
    href: "/services/android",
  },
  {
    icon: Gamepad2,
    title: "Game Console Repairs",
    description: "PS4, PS5, Xbox 360, Xbox One Series, Nintendo Switch & Switch Lite.",
    href: "/services/game-consoles",
  },
  {
    icon: Package,
    title: "Accessories",
    description: "Cases, screen guards, adapters, chargers and accessories for all devices.",
    href: "/services",
  },
];

export function ServicesSection() {
  return (
    <section className="section bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.25 }}
          className="mb-12"
        >
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white leading-tight mb-3">
            What We Fix
          </h2>
          <p className="text-zinc-400 max-w-lg text-base">
            Our certified technicians handle everything from cracked screens to complex motherboard repairs — with genuine parts and a fast turnaround.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map(({ icon: Icon, title, description, href, popular }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.22, delay: i * 0.03 }}
            >
              <Link href={href} className="group block h-full">
                <div className="relative h-full p-6 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 hover:shadow-lg hover:shadow-black/30 transition-[border-color,box-shadow] duration-200">
                  {popular && (
                    <span className="absolute top-4 right-4 px-2 py-0.5 bg-accent/10 border border-accent/25 rounded-full text-[10px] font-semibold text-accent uppercase tracking-wide">
                      Popular
                    </span>
                  )}
                  <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors duration-200">
                    <Icon className="w-5 h-5 text-zinc-500 group-hover:text-accent transition-colors duration-200" />
                  </div>
                  <h3 className="font-semibold text-white mb-1.5 text-sm">{title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-4">{description}</p>
                  <div className="flex items-center gap-1 text-sm text-accent font-medium">
                    Find out more
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-150" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

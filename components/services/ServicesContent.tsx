"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Smartphone, Monitor, Tablet, Laptop, Gamepad2, Package, ArrowRight, Wrench } from "lucide-react";

const allServices = [
  {
    icon: Smartphone,
    category: "Most Popular",
    title: "iPhone Repairs",
    description: "All iPhone models from 7 to 15 Series. Screen replacements, battery swaps, charging ports, camera repairs, and more. We use only genuine Apple-compatible parts.",
    features: ["iPhone 7 through 15 Series", "Screen Replacement", "Battery Replacement", "Charging Port Repair", "Camera Repair"],
    href: "/services/iphone-repairs",
    cta: "Book Repair Now",
    popular: true,
  },
  {
    icon: Tablet,
    category: "Apple",
    title: "iPad Repairs",
    description: "Screen replacements, battery changes, charging unit repairs, and motherboard repairs for all iPad generations.",
    features: ["iPad Screen Replacement", "Battery Replacement", "Charging Unit Repair", "Motherboard Repair", "All iPad Generations"],
    href: "/services/ipad-repairs",
    cta: "Book Repair Appointment",
    popular: false,
  },
  {
    icon: Monitor,
    category: "Mobile",
    title: "Smartphones & Tablets",
    description: "All generations of iPhones, iPads, Samsung, Huawei, Xiaomi, Oppo, Nokia and all Android devices. Make a quotation for Samsung tablets.",
    features: ["iPhones — All Generations", "iPads — All Generations", "Android Phone Repairs", "Android Tablet Repairs", "Samsung, Huawei, Xiaomi, Oppo, Nokia"],
    href: "/services/smartphones-tablets",
    cta: "View All",
    popular: false,
  },
  {
    icon: Laptop,
    category: "Computers",
    title: "Laptops & MacBooks",
    description: "System service, screen replacements, keyboard replacements, motherboard repairs, liquid damage repairs, and PC building service.",
    features: ["System Service (Windows & Mac)", "Screen Replacement", "Keyboard Replacement", "Motherboard Repair", "Liquid Damage Repair", "PC Building Service"],
    href: "/services/laptops-macbooks",
    cta: "Make Quotation",
    popular: false,
  },
  {
    icon: Smartphone,
    category: "Android",
    title: "Android Phones & Tablets",
    description: "Samsung S & A series, Note series, Samsung tablets, and all other Android phones and tablets including Huawei, Xiaomi, Oppo, Nokia.",
    features: ["Samsung S Series", "Samsung A Series", "Samsung Note Series", "Samsung Tablet Repairs", "Other Android Brands"],
    href: "/services/android",
    cta: "View All",
    popular: false,
  },
  {
    icon: Gamepad2,
    category: "Gaming",
    title: "Game Console Repairs",
    description: "PlayStation 4 & 5, Xbox 360, Xbox One Series, Nintendo Switch and Switch Lite. System reinstall, overheating, HDMI port, motherboard, and more.",
    features: ["Sony PS4 & PS5", "Xbox 360 & Xbox One Series", "Nintendo Switch", "Nintendo Switch Lite", "HDMI Port Replacement", "Motherboard Replacement"],
    href: "/services/game-consoles",
    cta: "Make Quotation",
    popular: false,
  },
  {
    icon: Package,
    category: "Accessories",
    title: "Phone & Laptop Accessories",
    description: "Protective cases, screen guards, versatile adapters, stylish stands, chargers, and a wide range of accessories for all devices.",
    features: ["Protective Cases", "Screen Guards", "Adapters & Chargers", "Laptop Stands", "Audio Accessories"],
    href: "/contact",
    cta: "Contact Us",
    popular: false,
  },
];

export function ServicesContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="font-display font-extrabold text-4xl md:text-5xl text-white leading-tight mb-5">
              Our Services
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed">
              From cracked screens to complex motherboard repairs — our certified technicians
              handle it all with precision, speed, and genuine parts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services list */}
      <section className="section bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-4">
            {allServices.map(({ icon: Icon, category, title, description, features, href, cta, popular }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative p-6 md:p-8 rounded-xl border border-zinc-800 bg-zinc-900 hover:border-zinc-700 transition-all duration-200"
              >
                {popular && (
                  <span className="absolute top-6 right-6 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide bg-accent/10 border border-accent/25 text-accent">
                    Popular
                  </span>
                )}
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon + category */}
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div className="mt-2 text-[10px] font-medium text-zinc-600 uppercase tracking-widest">
                      {category}
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="flex-1 min-w-0">
                    <h2 className="font-display font-bold text-xl text-white mb-2">{title}</h2>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4 max-w-2xl">
                      {description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {features.map((f) => (
                        <span key={f} className="px-2.5 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-xs text-zinc-400">
                          {f}
                        </span>
                      ))}
                    </div>
                    <Link href={href} className="btn-accent">
                      {cta}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

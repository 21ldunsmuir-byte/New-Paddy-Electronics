"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

function CountUp({ to, suffix = "", decimals = 0, duration = 1.6, delay = 0 }: {
  to: number; suffix?: string; decimals?: number; duration?: number; delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => {
    const formatted = decimals === 0 ? Math.floor(v).toLocaleString() : v.toFixed(decimals);
    return `${formatted}${suffix}`;
  });
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionVal, to, {
      duration,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    });
    return controls.stop;
  }, [inView, motionVal, to, duration, delay]);

  return <motion.span ref={ref} className="tabular-nums">{rounded}</motion.span>;
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section className="relative bg-zinc-950 border-b border-zinc-800 overflow-hidden min-h-[90vh] flex items-center">

      {/* Background — laptop exploded image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/laptop-exploded.png"
          alt=""
          fill
          className="object-cover object-center"
          style={{ mixBlendMode: "luminosity", opacity: 0.18 }}
          priority
        />
        {/* Gradient overlays to blend edges and ensure text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-zinc-950/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/50 via-transparent to-zinc-950/50" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent" />
      </div>

      {/* Foreground — centered content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
        <motion.div variants={container} initial="hidden" animate="visible">

          <motion.h1
            variants={item}
            className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl text-white leading-tight tracking-tight mb-6"
          >
            Dublin&apos;s Trusted<br />
            Electronics Repair<br />
            <span className="text-accent">Specialists.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg text-zinc-400 leading-relaxed max-w-xl mx-auto mb-10"
          >
            iPhones, Android phones, iPads, laptops, MacBooks, and game consoles — repaired
            fast with genuine parts. Two branches across Dublin since 2008.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap justify-center gap-3 mb-16">
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

          <motion.div
            variants={item}
            className="flex flex-wrap justify-center gap-10 pt-8 border-t border-zinc-800"
          >
            {[
              { to: 16, suffix: "+", label: "Years in Dublin", delay: 0 },
              { to: 2, suffix: "", label: "Branch Locations", delay: 0.1 },
              { to: 10000, suffix: "+", label: "Repairs Done", delay: 0.2 },
              { to: 100, suffix: "%", label: "Genuine Parts", delay: 0.3 },
            ].map(({ to, suffix, label, delay }) => (
              <div key={label} className="text-center">
                <div className="font-display font-bold text-2xl text-white">
                  <CountUp to={to} suffix={suffix} duration={1.8} delay={delay} />
                </div>
                <div className="text-xs text-zinc-500 mt-0.5">{label}</div>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

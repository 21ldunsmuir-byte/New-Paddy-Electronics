"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

function CountUp({ to, suffix = "", prefix = "", decimals = 0, duration = 1.6, delay = 0 }: {
  to: number; suffix?: string; prefix?: string; decimals?: number; duration?: number; delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => {
    const fixed = v.toFixed(decimals);
    const formatted = decimals === 0 ? Math.floor(v).toLocaleString() : fixed;
    return `${prefix}${formatted}${suffix}`;
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

  return (
    <motion.span ref={ref} className="tabular-nums">
      {rounded}
    </motion.span>
  );
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section className="bg-zinc-950 border-b border-zinc-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-0">

          {/* Left — text, shifted left on large screens */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex-1 lg:pr-8 lg:-ml-2"
          >
            <motion.h1
              variants={item}
              className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white leading-tight tracking-tight mb-5"
            >
              Dublin&apos;s Trusted<br className="hidden sm:block" />
              Electronics Repair<br className="hidden sm:block" />
              <span className="text-accent">Specialists.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg text-zinc-400 leading-relaxed max-w-md mb-8"
            >
              iPhones, Android phones, iPads, laptops, MacBooks, and game consoles — repaired
              fast with genuine parts. Two branches across Dublin since 2008.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3 mb-12">
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

            <motion.div variants={item} className="flex flex-wrap gap-8 pt-8 border-t border-zinc-800">
              {[
                { to: 16, suffix: "+", label: "Years in Dublin", delay: 0 },
                { to: 2, suffix: "", label: "Branch Locations", delay: 0.1 },
                { to: 10000, suffix: "+", label: "Repairs Done", delay: 0.2 },
                { to: 100, suffix: "%", label: "Genuine Parts", delay: 0.3 },
              ].map(({ to, suffix, label, delay }) => (
                <div key={label}>
                  <div className="font-display font-bold text-2xl text-white">
                    <CountUp to={to} suffix={suffix} duration={1.8} delay={delay} />
                  </div>
                  <div className="text-xs text-zinc-500 mt-0.5">{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — laptop exploded image */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="w-full lg:w-[52%] xl:w-[55%] shrink-0 relative"
          >
            {/* Left fade so image blends into the text column */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10" />
            {/* Top + bottom fades */}
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-zinc-950 to-transparent z-10" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-zinc-950 to-transparent z-10" />

            <Image
              src="/laptop-exploded.png"
              alt="Laptop exploded view showing all components"
              width={1400}
              height={900}
              className="w-full object-contain"
              priority
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

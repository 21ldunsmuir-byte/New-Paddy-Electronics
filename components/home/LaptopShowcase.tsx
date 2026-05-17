"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const specs = [
  { label: "Logic Board", detail: "Diagnosed & resoldered" },
  { label: "Display Panel", detail: "OEM replacement" },
  { label: "Thermal System", detail: "Repasted & cleaned" },
  { label: "Battery Array", detail: "Capacity restored" },
];

export function LaptopShowcase() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.96]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative bg-zinc-950 overflow-hidden py-0">
      {/* Full-bleed image with gradient fade */}
      <motion.div
        style={{ y: imageY, scale: imageScale, opacity: imageOpacity }}
        className="relative w-full"
      >
        <Image
          src="/laptop-exploded.png"
          alt="Laptop exploded view showing all internal components"
          width={2560}
          height={1440}
          className="w-full object-cover"
          priority
        />

        {/* Gradient overlays — blend into bg on all sides */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950 opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-zinc-950 opacity-60" />

        {/* Bottom hard fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-zinc-950 to-transparent" />
      </motion.div>

      {/* Overlaid content — centered on image */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[10px] font-mono tracking-[0.25em] text-accent uppercase mb-4 opacity-80"
        >
          Expert Repair · Every Layer
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="font-display font-extrabold text-4xl md:text-6xl text-white text-center leading-tight tracking-tight mb-4 drop-shadow-2xl"
        >
          We Know Every<br />
          <span className="text-accent">Component.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-zinc-400 text-sm md:text-base text-center max-w-md leading-relaxed mb-10"
        >
          From logic board micro-soldering to display panel replacement — our technicians work at component level, not just surface repairs.
        </motion.p>

        {/* Spec chips */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="flex flex-wrap justify-center gap-2 pointer-events-auto"
        >
          {specs.map(({ label, detail }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.28 + i * 0.07 }}
              whileHover={{ scale: 1.04, y: -2 }}
              className="flex flex-col items-center px-4 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-sm"
            >
              <span className="text-[10px] font-mono text-accent tracking-widest uppercase">{label}</span>
              <span className="text-xs text-zinc-400 mt-0.5">{detail}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

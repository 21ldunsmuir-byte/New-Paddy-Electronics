"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

const reviews = [
  {
    name: "Audrey Cowzer",
    rating: 5,
    date: "3 months ago",
    text: "Excellent and efficient service. Phone wouldn't charge. Repair took five minutes and there was no charge. Always use this shop and have positive experience.",
    badge: null,
  },
  {
    name: "Darren Mulligan",
    rating: 5,
    date: "3 months ago",
    text: "Amazing service and the lads are genuine, spent ages with my son trying to fix his phone at no charge, and always try to get the cheapest repair for the customer, wouldn't use any other electronic repair shop.",
    badge: "Local Guide",
  },
  {
    name: "Angeliqs05",
    rating: 5,
    date: "8 months ago",
    text: "Perfect service. The young man that works there is very calm and professional and gets the job done quickly. Would highly recommend. Not too expensive.",
    badge: null,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i < count ? "fill-amber-400 text-amber-400" : "text-zinc-700"}`}
        />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="section bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10"
        >
          <div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white leading-tight mb-3">
              What Our Customers Say
            </h2>
            {/* Overall rating */}
            <div className="flex items-center gap-3">
              <span className="font-display font-bold text-4xl text-white">4.5</span>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400 opacity-50" />
                </div>
                <p className="text-xs text-zinc-500 mt-0.5">92 reviews on Google</p>
              </div>
            </div>
          </div>
          <a
            href="https://maps.google.com/?q=New+Paddy+Electronics+Leopardstown+Shopping+Centre+Dublin+18"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost shrink-0 self-start sm:self-auto"
          >
            View on Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map(({ name, rating, date, text, badge }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="flex flex-col bg-zinc-900 rounded-xl border border-zinc-800 p-6 hover:border-zinc-700 hover:shadow-lg hover:shadow-black/30 transition-[border-color,box-shadow] duration-200"
            >
              {/* Stars */}
              <Stars count={rating} />

              {/* Review text */}
              <p className="text-sm text-zinc-300 leading-relaxed mt-4 flex-1">
                &ldquo;{text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between mt-5 pt-4 border-t border-zinc-800">
                <div className="flex items-center gap-2.5">
                  {/* Avatar initials */}
                  <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-semibold text-zinc-400">
                    {name[0]}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">{name}</p>
                    {badge && (
                      <p className="text-[10px] text-accent">{badge}</p>
                    )}
                  </div>
                </div>
                <span className="text-[10px] text-zinc-600">{date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google badge strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-4 flex items-center justify-center gap-2 text-xs text-zinc-600"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Reviews from Google · Leopardstown Branch
        </motion.div>
      </div>
    </section>
  );
}

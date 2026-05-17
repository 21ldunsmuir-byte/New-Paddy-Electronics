"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { label: "All Services", href: "/services" },
  { label: "iPhone Repairs", href: "/services/iphone-repairs" },
  { label: "iPad Repairs", href: "/services/ipad-repairs" },
  { label: "Smartphones & Tablets", href: "/services/smartphones-tablets" },
  { label: "Laptops & MacBooks", href: "/services/laptops-macbooks" },
  { label: "Android Phones & Tablets", href: "/services/android" },
  { label: "Game Console Repairs", href: "/services/game-consoles" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", dropdown: services },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top info bar */}
      <div className="bg-zinc-950 border-b border-zinc-900 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-8 text-xs text-zinc-500">
            <a href="tel:012303852" className="flex items-center gap-1.5 hover:text-zinc-300 transition-colors">
              <Phone className="w-3 h-3" />
              Dun Laoghaire: (01) 2303852
            </a>
            <a href="tel:012944561" className="flex items-center gap-1.5 hover:text-zinc-300 transition-colors">
              <Phone className="w-3 h-3" />
              Leopardstown: (01) 2944561
            </a>
          </div>
          <span className="text-xs text-zinc-600">Mon–Sat · Dun Laoghaire 10:00–18:00 · Leopardstown 10:30–18:00</span>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={cn(
          "sticky top-0 z-50 bg-zinc-950 transition-shadow duration-200",
          scrolled ? "shadow-nav border-b border-zinc-800/80" : "border-b border-zinc-800"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="New Paddy Electronics"
              width={120}
              height={70}
              className="object-contain"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.href} className="relative">
                  <button
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      pathname.startsWith("/services")
                        ? "text-accent bg-accent/10"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                    )}
                  >
                    {link.label}
                    <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-150", servicesOpen && "rotate-180")} />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.12 }}
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                        className="absolute top-full left-0 mt-1.5 w-60 bg-zinc-900 border border-zinc-800 rounded-xl shadow-card-hover overflow-hidden py-1"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                              "block px-4 py-2.5 text-sm transition-colors",
                              pathname === item.href
                                ? "text-accent font-medium bg-accent/10"
                                : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                            )}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "text-accent bg-accent/10"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link href="/contact" className="btn-accent">
              Book Repair
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-zinc-800 bg-zinc-950"
            >
              <div className="px-4 py-4 space-y-0.5">
                <div className="pb-3 mb-2 border-b border-zinc-800 space-y-2">
                  <a href="tel:012303852" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-accent transition-colors py-1">
                    <Phone className="w-4 h-4" />
                    Dun Laoghaire: (01) 2303852
                  </a>
                  <a href="tel:012944561" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-accent transition-colors py-1">
                    <Phone className="w-4 h-4" />
                    Leopardstown: (01) 2944561
                  </a>
                </div>

                {navLinks.map((link) =>
                  link.dropdown ? (
                    <div key={link.href}>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
                      >
                        {link.label}
                        <ChevronDown className={cn("w-4 h-4 transition-transform duration-150", servicesOpen && "rotate-180")} />
                      </button>
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            className="overflow-hidden pl-3"
                          >
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block px-3 py-2 rounded-md text-sm text-zinc-500 hover:text-accent transition-colors"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "block px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                        pathname === link.href
                          ? "text-accent bg-accent/10 font-semibold"
                          : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                )}
                <div className="pt-3">
                  <Link href="/contact" className="btn-accent w-full justify-center">
                    Book a Repair
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

import Link from "next/link";
import { Phone, MapPin, Clock, Facebook, Linkedin, Mail } from "lucide-react";

const serviceLinks = [
  { label: "iPhone Repairs", href: "/services/iphone-repairs" },
  { label: "iPad Repairs", href: "/services/ipad-repairs" },
  { label: "Smartphones & Tablets", href: "/services/smartphones-tablets" },
  { label: "Laptops & MacBooks", href: "/services/laptops-macbooks" },
  { label: "Android Repairs", href: "/services/android" },
  { label: "Game Console Repairs", href: "/services/game-consoles" },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
  { label: "Terms & Conditions", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white text-xs font-bold font-display">
                NP
              </div>
              <div>
                <div className="font-display font-bold text-sm text-white leading-none">New Paddy Electronics</div>
                <div className="text-[10px] text-zinc-500 mt-0.5">Est. 2008 · Dublin, Ireland</div>
              </div>
            </Link>
            <p className="text-sm text-zinc-500 leading-relaxed mb-6">
              Dublin&apos;s trusted electronics repair specialists. Two convenient locations across the city.
            </p>
            <div className="flex gap-2">
              {[
                { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "mailto:info@newpaddy.ie", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-600 transition-colors"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold text-zinc-300 uppercase tracking-widest mb-4">Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dun Laoghaire */}
          <div>
            <h3 className="text-xs font-semibold text-zinc-300 uppercase tracking-widest mb-4">Dun Laoghaire</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-zinc-500">
                <MapPin className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                67 Convent Road, Dun Laoghaire, Co. Dublin
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <Phone className="w-3.5 h-3.5 text-accent shrink-0" />
                <a href="tel:012303852" className="text-zinc-500 hover:text-zinc-200 transition-colors">(01) 2303852</a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-zinc-500">
                <Clock className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                <div>Mon–Sat: 10:00 – 18:00<br /><span className="text-zinc-600 text-xs">Closed Sundays & Bank Holidays</span></div>
              </li>
            </ul>
          </div>

          {/* Leopardstown */}
          <div>
            <h3 className="text-xs font-semibold text-zinc-300 uppercase tracking-widest mb-4">Leopardstown</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2.5 text-sm text-zinc-500">
                <MapPin className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                Unit 3B, Leopardstown SC, Ballyogan Road, Dublin 18
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <Phone className="w-3.5 h-3.5 text-accent shrink-0" />
                <a href="tel:012944561" className="text-zinc-500 hover:text-zinc-200 transition-colors">(01) 2944561</a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-zinc-500">
                <Clock className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                <div>Mon–Sat: 10:30 – 18:00<br /><span className="text-zinc-600 text-xs">Closed Sundays & Bank Holidays</span></div>
              </li>
            </ul>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-zinc-600">© {new Date().getFullYear()} New Paddy Electronics Ltd. All rights reserved.</p>
          <p className="text-xs text-zinc-700">Professional PC & Mobile Phone Repair · Dublin, Ireland</p>
        </div>
      </div>
    </footer>
  );
}

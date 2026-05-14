import type { Metadata } from "next";
import { ServicesContent } from "@/components/services/ServicesContent";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "iPhone, iPad, Android, laptop, MacBook and game console repair services in Dublin. Expert technicians, genuine parts, swift turnaround.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}

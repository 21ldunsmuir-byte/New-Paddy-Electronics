import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { BranchesSection } from "@/components/home/BranchesSection";

export const metadata: Metadata = {
  title: "New Paddy Electronics | Phone & Laptop Repairs Dublin",
  description:
    "Dublin's trusted electronics repair specialists since 2008. iPhone, iPad, Android, laptop, MacBook & game console repairs in Dun Laoghaire and Leopardstown.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <BranchesSection />
    </>
  );
}

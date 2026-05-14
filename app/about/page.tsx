import type { Metadata } from "next";
import { motion } from "framer-motion";
import { AboutContent } from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "New Paddy Electronics has been Dublin's trusted electronics repair specialists since 2008. Learn about our story, team, and commitment to excellence.",
};

export default function AboutPage() {
  return <AboutContent />;
}

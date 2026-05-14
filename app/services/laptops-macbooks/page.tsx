import type { Metadata } from "next";
import { LaptopsContent } from "@/components/services/LaptopsContent";

export const metadata: Metadata = {
  title: "Laptop & MacBook Repairs Dublin",
  description:
    "Professional laptop and MacBook repairs in Dublin — screen replacement, keyboard, motherboard, liquid damage, system service, and custom PC building.",
};

export default function LaptopsPage() {
  return <LaptopsContent />;
}

import type { Metadata } from "next";
import { SmartphonesContent } from "@/components/services/SmartphonesContent";

export const metadata: Metadata = {
  title: "Smartphone & Tablet Repairs Dublin",
  description:
    "iPhone, iPad, Android phone and tablet repairs in Dublin. Samsung, Huawei, Xiaomi, Oppo, Nokia repairs by certified technicians.",
};

export default function SmartphonesPage() {
  return <SmartphonesContent />;
}

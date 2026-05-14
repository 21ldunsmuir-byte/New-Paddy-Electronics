import type { Metadata } from "next";
import { AndroidContent } from "@/components/services/AndroidContent";

export const metadata: Metadata = {
  title: "Android Phone & Tablet Repairs Dublin",
  description:
    "Android phone and tablet repairs in Dublin — Samsung S, A, Note series, Huawei, Xiaomi, Oppo, Nokia and all Android devices.",
};

export default function AndroidPage() {
  return <AndroidContent />;
}

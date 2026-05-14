import type { Metadata } from "next";
import { IpadRepairsContent } from "@/components/services/IpadRepairsContent";

export const metadata: Metadata = {
  title: "iPad Repair Services Dublin",
  description:
    "Expert iPad repair services in Dublin — screen replacement, battery, charging unit, and motherboard repairs for all iPad models.",
};

export default function IpadRepairsPage() {
  return <IpadRepairsContent />;
}

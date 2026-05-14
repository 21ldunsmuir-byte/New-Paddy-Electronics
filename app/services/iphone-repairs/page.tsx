import type { Metadata } from "next";
import { IphoneRepairsContent } from "@/components/services/IphoneRepairsContent";

export const metadata: Metadata = {
  title: "iPhone Repairs Dublin",
  description:
    "Professional iPhone repair services in Dublin. All models from iPhone 7 to iPhone 15 Series. Screen replacement, battery, charging port, camera repairs. Book now.",
};

export default function IphoneRepairsPage() {
  return <IphoneRepairsContent />;
}

import type { Metadata } from "next";
import { GameConsolesContent } from "@/components/services/GameConsolesContent";

export const metadata: Metadata = {
  title: "Game Console Repairs Dublin",
  description:
    "PS4, PS5, Xbox 360, Xbox One Series, Nintendo Switch and Switch Lite repairs in Dublin. System reinstall, overheating, HDMI, motherboard repairs.",
};

export default function GameConsolesPage() {
  return <GameConsolesContent />;
}

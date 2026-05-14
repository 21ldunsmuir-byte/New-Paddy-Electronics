import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with New Paddy Electronics. Book a repair, ask about our services, or visit us in Dun Laoghaire or Leopardstown, Dublin.",
};

export default function ContactPage() {
  return <ContactContent />;
}

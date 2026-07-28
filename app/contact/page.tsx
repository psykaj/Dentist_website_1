import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { ContactPageClient } from "./ContactPageClient";

export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.name}`,
  description: `Get in touch with ${siteConfig.name}. Find our address, phone number, working hours, and book your next appointment.`,
};

export default function ContactPage() {
  return <ContactPageClient />;
}

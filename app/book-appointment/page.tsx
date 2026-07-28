import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { BookAppointmentClient } from "./BookAppointmentClient";

export const metadata: Metadata = {
  title: `Book an Appointment | ${siteConfig.name}`,
  description: `Schedule your dental appointment at ${siteConfig.name} in ${siteConfig.city}. We are currently accepting new patients.`,
};

export default function BookAppointmentPage() {
  return <BookAppointmentClient />;
}

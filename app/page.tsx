import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { DoctorsPreview } from "@/components/home/DoctorsPreview";

import { AppointmentCTA } from "@/components/home/AppointmentCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AboutPreview />
      <ServicesPreview />
      <AppointmentCTA />
      <DoctorsPreview />
    </>
  );
}

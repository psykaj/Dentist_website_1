import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { AppointmentCTA } from "@/components/home/AppointmentCTA";

export const metadata: Metadata = {
  title: `Gallery | ${siteConfig.name}`,
  description: `Take a tour of our state-of-the-art dental clinic and see the beautiful smiles we've helped create.`,
};

export default function GalleryPage() {
  const images = [
    { id: 1, alt: "Clinic Interior", category: "Clinic Tour", url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop" },
    { id: 2, alt: "Dental Equipment", category: "Clinic Tour", url: "/images/Dental_Equipment.png" },
    { id: 3, alt: "Doctor and Patient", category: "Happy Patients", url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop" },
    { id: 4, alt: "Whitening Results", category: "Before & After", url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop" },
    { id: 5, alt: "Child Patient", category: "Happy Patients", url: "/images/Child_in_dentist_clinic.jpg" },
    { id: 6, alt: "Dental Checkup", category: "Clinic Tour", url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop" },
    { id: 7, alt: "Smiling Woman", category: "Happy Patients", url: "/images/smiling_women.jpg" },
    { id: 8, alt: "Implants Result", category: "Before & After", url: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop" },
    { id: 9, alt: "Reception Area", category: "Clinic Tour", url: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=800&auto=format&fit=crop" },
    { id: 10, alt: "Male Patient", category: "Happy Patients", url: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop" },
    { id: 11, alt: "Braces Off", category: "Before & After", url: "/images/Braces_off.jpg" },
    { id: 12, alt: "Clinic Room", category: "Clinic Tour", url: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <div className="pt-20">
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Smile Gallery</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Take a look at our state-of-the-art facility and the beautiful smiles we&apos;ve transformed.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {images.map((img) => (
              <div key={img.id} className="relative group overflow-hidden rounded-2xl aspect-[4/3] bg-slate-200">
                <img src={img.url} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold tracking-wider uppercase text-sm border-b border-primary pb-1">
                    {img.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </div>
  );
}

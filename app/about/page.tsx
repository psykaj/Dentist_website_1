import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DoctorsPreview } from "@/components/home/DoctorsPreview";

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.name}`,
  description: `Learn about our history, mission, and the experienced team behind ${siteConfig.name}.`,
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-primary/20 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About Our Clinic</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Dedicated to providing exceptional dental care in a comfortable and welcoming environment.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Our Story</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
                A Legacy of Healthy Smiles
              </h3>
              <div className="space-y-4 text-slate-600 text-lg">
                <p>
                  Founded in 2008, {siteConfig.name} began with a simple vision: to change the way people experience dentistry. We wanted to create a clinic where patients feel relaxed, heard, and cared for, rather than anxious.
                </p>
                <p>
                  Over the past {siteConfig.stats.experience} years, we have grown from a small two-chair practice to a state-of-the-art facility equipped with the latest dental technology. Despite our growth, our core values remain the same.
                </p>
                <p>
                  We have proudly treated over {siteConfig.stats.patients} patients, performing {siteConfig.stats.treatments} successful procedures, and we continue to strive for excellence in every smile we restore.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="h-64 rounded-2xl bg-slate-200 shadow-md overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop" alt="Clinic Interior" className="w-full h-full object-cover" />
                </div>
                <div className="h-48 rounded-2xl bg-slate-200 shadow-md overflow-hidden">
                  <img src="/Images/Dental_Equipment.png" alt="Dental Equipment" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-48 rounded-2xl bg-slate-200 shadow-md overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop" alt="Doctor with Patient" className="w-full h-full object-cover" />
                </div>
                <div className="h-64 rounded-2xl bg-slate-200 shadow-md overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop" alt="Happy Patient" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                To deliver the highest quality dental care using advanced technology and minimally invasive techniques, ensuring our patients achieve optimal oral health in a pain-free, comfortable environment.
              </p>
              <ul className="space-y-3">
                {['Patient-first approach', 'Continuous education', 'Uncompromising hygiene standards'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-primary text-white p-10 rounded-3xl shadow-md">
              <h3 className="text-2xl font-heading font-bold mb-4">Our Vision</h3>
              <p className="text-primary-foreground/90 text-lg leading-relaxed mb-6">
                To be the most trusted and recognized dental clinic in {siteConfig.city}, known for our commitment to clinical excellence, compassionate care, and creating beautiful, confident smiles.
              </p>
              <ul className="space-y-3">
                {['Community leadership', 'Innovation in dentistry', 'Lifelong patient relationships'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Location Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Visit Our Clinic</h2>
            <p className="text-lg text-slate-600">
              Located conveniently in {siteConfig.city}, we offer easy access, secure parking, and a comfortable environment.
            </p>
          </div>
          <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100">
            <iframe 
              src={siteConfig.contact.mapUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Doctors Preview */}
      <DoctorsPreview />

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">Experience the Difference</h2>
          <p className="text-lg text-slate-600 mb-8">
            Join thousands of happy patients who have trusted us with their smiles.
          </p>
          <Link href="/book-appointment">
            <Button size="lg" className="rounded-full px-8 h-14 text-base font-semibold">
              Schedule Your Visit
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

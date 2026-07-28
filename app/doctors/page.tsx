import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { doctors } from "@/data/doctors";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AppointmentCTA } from "@/components/home/AppointmentCTA";

export const metadata: Metadata = {
  title: `Our Doctors | ${siteConfig.name}`,
  description: `Meet the expert team of dentists and specialists at ${siteConfig.name}.`,
};

export default function DoctorsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Specialists</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Experienced, compassionate, and dedicated to your oral health.
          </p>
        </div>
      </section>

      {/* Doctors List */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {doctors.map((doctor, index) => (
              <Card key={doctor.id} className="overflow-hidden border-none shadow-md bg-white">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3 lg:w-1/4 h-80 md:h-auto relative bg-slate-200">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name} 
                      className="w-full h-full object-cover object-top" 
                    />
                  </div>
                  <CardContent className="w-full md:w-2/3 lg:w-3/4 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-6 gap-4">
                      <div>
                        <h2 className="text-3xl font-heading font-bold text-slate-900 mb-2">
                          {doctor.name}
                        </h2>
                        <p className="text-primary font-semibold text-lg mb-1">{doctor.specialization}</p>
                        <p className="text-slate-500 font-medium">{doctor.qualification} • {doctor.experience}</p>
                      </div>
                      <div className="flex items-center gap-1 bg-amber-50 px-3 py-1.5 rounded-full w-fit">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="text-amber-700 font-bold text-sm">5.0</span>
                        <span className="text-amber-600/70 text-xs ml-1">(Google Reviews)</span>
                      </div>
                    </div>
                    
                    <div className="prose prose-slate max-w-none mb-8">
                      <p className="text-slate-600 text-lg leading-relaxed">{doctor.bio}</p>
                    </div>

                    <div className="mb-8">
                      <h4 className="font-semibold text-slate-900 mb-2">Languages Spoken:</h4>
                      <div className="flex gap-2">
                        {doctor.languages.map(lang => (
                          <span key={lang} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto pt-6 border-t border-slate-100 flex gap-4">
                      <Link href={`/book-appointment?doctor=${doctor.id}`}>
                        <Button size="lg" className="rounded-full px-8">
                          Book Appointment
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </div>
  );
}

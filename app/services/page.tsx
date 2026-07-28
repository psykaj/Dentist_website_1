import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AppointmentCTA } from "@/components/home/AppointmentCTA";

export const metadata: Metadata = {
  title: `Our Services | ${siteConfig.name}`,
  description: `Explore our comprehensive range of dental treatments including ${siteConfig.services.map(s => s.name).join(", ")}.`,
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-full h-full bg-accent/20 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Services</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Comprehensive, advanced, and pain-free dental treatments tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.services.map((service) => (
              <Link href={service.slug} key={service.id} className="block group">
                <Card className="overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-300 h-full bg-white group-hover:-translate-y-1">
                  <div className="relative h-60 w-full overflow-hidden bg-slate-200">
                    <img 
                      src={service.image} 
                      alt={service.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-2xl font-heading font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                      {service.name}
                    </h4>
                    <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3">
                      Expert {service.name.toLowerCase()} treatments designed to restore functionality and enhance the natural beauty of your smile, ensuring long-lasting oral health.
                    </p>
                    <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                      View Treatment Details
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <AppointmentCTA />
    </div>
  );
}

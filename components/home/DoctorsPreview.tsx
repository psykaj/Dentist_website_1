"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { doctors } from "@/data/doctors";
import { ArrowRight, Star } from "lucide-react";

export function DoctorsPreview() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Meet Our Specialists</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Expert Care From Top Dentists
          </h3>
          <p className="text-slate-600 text-lg">
            Our highly qualified team is dedicated to providing you with personalized, pain-free treatments for a lasting, healthy smile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {doctors.slice(0, 3).map((doctor, index) => (
            <motion.div 
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-300 group bg-white h-full flex flex-col">
                <div className="relative h-72 w-full overflow-hidden bg-slate-200">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <h4 className="text-xl font-heading font-bold text-slate-900 mb-1">
                      {doctor.name}
                    </h4>
                    <p className="text-primary font-medium text-sm mb-2">{doctor.specialization}</p>
                    <p className="text-slate-500 text-xs">{doctor.qualification} • {doctor.experience}</p>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center text-amber-400 text-sm">
                      <Star className="w-4 h-4 fill-current mr-1" />
                      <span className="text-slate-700 font-medium mr-1">5.0</span>
                      <span className="text-slate-400">(120+ Reviews)</span>
                    </div>
                    <Link href={`/book-appointment?doctor=${doctor.id}`}>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                        Book <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/doctors">
            <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base font-semibold border-slate-300 text-slate-700 hover:bg-slate-100">
              View All Doctors
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

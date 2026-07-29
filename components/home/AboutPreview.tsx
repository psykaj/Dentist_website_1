"use client";

import { motion, useInView, animate } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/siteConfig";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useRef } from "react";

function AnimatedStat({ value, suffix, isDecimal = false }: { value: number, suffix: string, isDecimal?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(v) {
          if (ref.current) {
            ref.current.textContent = (isDecimal ? v.toFixed(1) : Math.floor(v).toString()) + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [inView, value, suffix, isDecimal]);

  return <span ref={ref}>0{suffix}</span>;
}

export function AboutPreview() {
  const stats = [
    { label: "Years Experience", value: 15, suffix: "+", isDecimal: false },
    { label: "Happy Patients", value: 5000, suffix: "+", isDecimal: false },
    { label: "Successful Treatments", value: 12000, suffix: "+", isDecimal: false },
    { label: "Google Rating", value: 4.9, suffix: "★", isDecimal: true },
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Grid */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="rounded-3xl overflow-hidden h-64 bg-slate-200 border border-slate-200 shadow-lg">
                  <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop" alt="Clinic Interior" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-3xl overflow-hidden h-48 bg-white border border-slate-200 shadow-lg p-2">
                  <img src="/Images/Dental_Equipment.png" alt="Dental Equipment" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden h-48 bg-slate-200 border border-slate-200 shadow-lg">
                  <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop" alt="Doctor with Patient" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-3xl overflow-hidden h-64 bg-slate-200 border border-slate-200 shadow-lg">
                  <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop" alt="Happy Patient" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">About Our Clinic</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6 leading-tight">
              Transforming Smiles With Precision & Care
            </h3>
            
            <div className="space-y-4 text-slate-600 text-lg mb-8">
              <p>
                At {siteConfig.name}, we believe that a healthy smile is the foundation of overall well-being. Founded over a decade ago, our clinic has become a trusted name in {siteConfig.city} for comprehensive dental care.
              </p>
              <p>
                Our mission is to provide pain-free, premium dental treatments in a relaxing environment. From routine check-ups to complex smile makeovers, our experienced team uses the latest technology to ensure the best results.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {['Painless Treatments', 'Top Quality Materials', 'Experienced Specialists', 'Affordable Pricing'].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="font-medium text-slate-800">{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/about">
              <Button size="lg" className="rounded-full px-8 h-12 text-base font-semibold">
                Read More About Us
              </Button>
            </Link>
          </motion.div>

        </div>

        {/* Stats Section */}
        <motion.div 
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-200 pt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h4 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                <AnimatedStat value={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal} />
              </h4>
              <p className="text-slate-600 font-medium uppercase tracking-wide text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

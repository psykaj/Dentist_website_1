"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/data/siteConfig";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ServicesPreview() {
  const featuredServices = siteConfig.services.slice(0, 6);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Our Services</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              Comprehensive Dental Solutions
            </h3>
            <p className="text-slate-600 text-lg">
              We offer a wide range of dental treatments under one roof, using advanced techniques to ensure the best outcomes for your oral health.
            </p>
          </div>
          <Link href="/services" className="shrink-0">
            <span className="inline-flex items-center font-semibold text-primary hover:text-primary/80 transition-colors group">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuredServices.map((service, index) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Link href={service.slug} className="block group">
                <Card className="overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-300 h-full bg-slate-50 group-hover:-translate-y-1">
                  <div className="relative h-56 w-full overflow-hidden bg-slate-200">
                    <img 
                      src={service.image} 
                      alt={service.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-heading font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                      {service.name}
                    </h4>
                    <p className="text-slate-600 mb-4 line-clamp-2">
                      Professional {service.name.toLowerCase()} services to restore your smile&apos;s function and aesthetics with minimal discomfort.
                    </p>
                    <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                      Learn More
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

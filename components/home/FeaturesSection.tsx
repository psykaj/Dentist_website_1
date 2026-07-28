"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, Microscope, Wallet, Ambulance, Sofa, HeartHandshake } from "lucide-react";

const features = [
  {
    title: "Experienced Dentists",
    description: "Our team of specialists brings years of expertise to provide you with the best dental care possible.",
    icon: Stethoscope,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Advanced Technology",
    description: "We use state-of-the-art equipment for precise diagnostics and painless treatments.",
    icon: Microscope,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    title: "Affordable Treatments",
    description: "Premium dental care that fits your budget with transparent pricing and flexible payment options.",
    icon: Wallet,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Emergency Care",
    description: "Fast and effective treatment for dental emergencies when you need it the most.",
    icon: Ambulance,
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
  {
    title: "Comfortable Clinic",
    description: "A relaxing, spa-like environment designed to make your dental visit anxiety-free.",
    icon: Sofa,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    title: "Personalized Care",
    description: "Customized treatment plans tailored to your unique oral health needs and smile goals.",
    icon: HeartHandshake,
    color: "text-success",
    bgColor: "bg-success/10",
  },
];

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

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Why Choose Us</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Premium Dental Care You Can Trust
          </h3>
          <p className="text-slate-600 text-lg">
            We combine expertise, technology, and compassion to deliver an exceptional dental experience.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-none shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1 bg-white">
                <CardContent className="p-8">
                  <div className={`w-14 h-14 rounded-2xl ${feature.bgColor} ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

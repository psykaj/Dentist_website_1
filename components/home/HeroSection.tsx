"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/siteConfig";
import { Star, ShieldCheck, Clock, Users } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/30 blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-accent/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            className="max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium">
              #1 Dental Clinic in {siteConfig.city}
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl lg:text-6xl xl:text-7xl font-heading font-bold tracking-tight mb-6 leading-tight">
              Your Healthy <span className="text-primary">Smile</span> Starts Here.
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg lg:text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
              Modern dental care for children and adults with experienced dentists, advanced technology, painless treatments, and personalized care.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/book-appointment">
                <Button size="lg" className="w-full sm:w-auto text-base h-14 px-8 rounded-full">
                  Book Appointment
                </Button>
              </Link>
              <a href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-14 px-8 rounded-full bg-transparent border-slate-700 hover:bg-slate-800 hover:text-white">
                  WhatsApp Us
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Images and Badges */}
          <motion.div 
            className="relative h-[500px] lg:h-[600px] w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden border border-slate-800 bg-slate-800/50">
              {/* Hero Image */}
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop" 
                alt="Experienced Dentist and Patient" 
                className="w-full h-full object-cover opacity-90" 
              />
            </div>

            {/* Trust Badges - Floating */}
            <motion.div 
              className="absolute top-10 -left-6 lg:-left-12 bg-white text-slate-900 p-4 rounded-2xl shadow-xl flex items-center gap-4 max-w-[220px]"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-lg leading-none">{siteConfig.stats.experience}</p>
                <p className="text-xs text-slate-500 font-medium">Years Experience</p>
              </div>
            </motion.div>

            <motion.div 
              className="absolute bottom-20 -right-6 lg:-right-8 bg-white text-slate-900 p-4 rounded-2xl shadow-xl flex items-center gap-4 max-w-[220px]"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            >
              <div className="bg-accent/10 p-3 rounded-full text-accent">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-lg leading-none">{siteConfig.stats.patients}</p>
                <p className="text-xs text-slate-500 font-medium">Happy Patients</p>
              </div>
            </motion.div>

            <motion.div 
              className="absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-6 bg-white text-slate-900 p-4 rounded-2xl shadow-xl flex items-center gap-3 max-w-[200px]"
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
            >
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="Patient 1" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" alt="Patient 2" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Patient 3" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-slate-900 font-bold text-sm">{siteConfig.stats.rating}</span>
                </div>
                <p className="text-xs text-slate-500">Google Rating</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-6 left-10 bg-white text-slate-900 p-3 px-5 rounded-full shadow-xl flex items-center gap-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
            >
              <Clock className="w-4 h-4 text-success" />
              <span className="text-sm font-semibold">Same-Day Appointments</span>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

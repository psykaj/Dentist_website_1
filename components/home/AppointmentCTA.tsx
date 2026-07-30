"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteConfig } from "@/data/siteConfig";
import { Phone, Calendar, Mail, MapPin } from "lucide-react";

export function AppointmentCTA() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden" id="appointment">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Contact
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Get in touch with us for any inquiries or to schedule your next visit. We're here to help you achieve a brighter smile.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Contact Info Side */}
          <div className="lg:w-2/5 bg-slate-900 text-white p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-slate-300 mb-8">
                Feel free to reach out to us. Our friendly team is always ready to assist you with your dental needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <p className="text-slate-300">{siteConfig.contact.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-slate-300">{siteConfig.contact.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg">Address</h4>
                    <p className="text-slate-300">{siteConfig.contact.address}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <Link href="/book-appointment">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold rounded-full h-12 flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Contact Form Side */}
          <div className="lg:w-3/5 p-10 bg-white">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-700 tracking-wide uppercase">Full Name</label>
                  <Input id="name" placeholder="John Doe" className="h-14 px-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all text-base shadow-sm" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-slate-700 tracking-wide uppercase">Phone Number</label>
                  <Input id="phone" placeholder="+1 234 567 890" className="h-14 px-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all text-base shadow-sm" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-slate-700 tracking-wide uppercase">Email Address</label>
                <Input id="email" type="email" placeholder="john@example.com" className="h-14 px-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all text-base shadow-sm" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700 tracking-wide uppercase">Your Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  placeholder="How can we help you?" 
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 text-base outline-none focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/20 transition-all shadow-sm resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="rounded-xl px-10 h-14 text-lg font-bold w-full sm:w-auto shadow-lg hover:shadow-xl transition-all">
                Send Message
              </Button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { siteConfig } from "@/data/siteConfig";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactPageClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form Data:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/30 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            We are here to answer your questions and help you schedule your next visit.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Clinic Address</h4>
                    <p className="text-slate-600 leading-relaxed">{siteConfig.contact.address}</p>
                    <p className="text-slate-500 text-sm mt-1">{siteConfig.contact.directions}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Phone & WhatsApp</h4>
                    <p className="text-slate-600">
                      <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-primary transition-colors">{siteConfig.contact.phone}</a>
                    </p>
                    <p className="text-slate-600 mt-1">
                      <a href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                        WhatsApp: {siteConfig.contact.whatsapp}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Email Address</h4>
                    <p className="text-slate-600">
                      <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary transition-colors">{siteConfig.contact.email}</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Working Hours</h4>
                    <p className="text-slate-600">{siteConfig.contact.workingHours}</p>
                  </div>
                </div>
              </div>

              {/* Emergency Banner */}
              <div className="bg-destructive/10 border border-destructive/20 rounded-2xl p-6">
                <h4 className="font-bold text-destructive text-lg mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-destructive animate-pulse"></span>
                  Dental Emergency?
                </h4>
                <p className="text-slate-700 mb-4">
                  We provide same-day emergency appointments. Call our dedicated emergency line immediately.
                </p>
                <a href={`tel:${siteConfig.contact.emergencyNumber}`}>
                  <Button variant="destructive" className="font-bold">
                    Call {siteConfig.contact.emergencyNumber}
                  </Button>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
              <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6">Send Us a Message</h3>
              
              {isSuccess ? (
                <div className="bg-success/10 border border-success/20 text-success-foreground p-6 rounded-xl text-center">
                  <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-xl mb-2 text-slate-900">Message Sent!</h4>
                  <p className="text-slate-600">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" {...register("name")} className={errors.name ? "border-destructive" : ""} />
                      {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" {...register("email")} className={errors.email ? "border-destructive" : ""} />
                      {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" {...register("phone")} className={errors.phone ? "border-destructive" : ""} />
                      {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="How can we help?" {...register("subject")} className={errors.subject ? "border-destructive" : ""} />
                      {errors.subject && <p className="text-xs text-destructive">{errors.subject.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className={`flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ${errors.message ? "border-destructive" : ""}`}
                      placeholder="Please describe your inquiry in detail..."
                      {...register("message")}
                    />
                    {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
                  </div>

                  <Button type="submit" size="lg" className="w-full h-14 rounded-xl text-base font-bold" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full">
        <iframe 
          src={siteConfig.contact.mapUrl} 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Clinic Location Map"
        ></iframe>
      </section>
    </div>
  );
}

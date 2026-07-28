"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { siteConfig } from "@/data/siteConfig";
import { doctors } from "@/data/doctors";
import { Calendar, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DatePicker } from "@/components/ui/date-picker";

const bookingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  date: z.string().min(1, "Preferred date is required"),
  time: z.string().min(1, "Preferred time is required"),
  service: z.string().min(1, "Please select a service"),
  doctor: z.string().optional(),
  notes: z.string().optional(),
});

type BookingData = z.infer<typeof bookingSchema>;

function BookingForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";
  const preselectedDoctor = searchParams.get("doctor") || "";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      service: preselectedService,
      doctor: preselectedDoctor,
    }
  });

  const onSubmit = async (data: BookingData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Booking Data:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 text-center max-w-2xl mx-auto">
        <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-success" />
        </div>
        <h3 className="text-3xl font-heading font-bold text-slate-900 mb-4">Request Received!</h3>
        <p className="text-lg text-slate-600 mb-8">
          Thank you for requesting an appointment. Our team will contact you shortly at the provided phone number to confirm your exact appointment time.
        </p>
        <Button size="lg" onClick={() => setIsSuccess(false)} variant="outline" className="rounded-full">
          Book Another Appointment
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 max-w-4xl mx-auto">
      <h2 className="text-2xl font-heading font-bold text-slate-900 mb-8 pb-4 border-b border-slate-100">
        Patient Information
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        
        {/* Personal Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input id="name" placeholder="John Doe" {...register("name")} className={errors.name ? "border-destructive" : ""} />
            {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" type="email" placeholder="john@example.com" {...register("email")} className={errors.email ? "border-destructive" : ""} />
            {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" {...register("phone")} className={errors.phone ? "border-destructive" : ""} />
            {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
          </div>
        </div>

        <h2 className="text-2xl font-heading font-bold text-slate-900 mb-8 pb-4 border-b border-slate-100 pt-4">
          Appointment Details
        </h2>

        {/* Appointment Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="service">Service Required *</Label>
            <select
              id="service"
              className={`flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ${errors.service ? "border-destructive" : ""}`}
              {...register("service")}
            >
              <option value="">Select a service...</option>
              {siteConfig.services.map(s => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
              <option value="other">Other / Not Sure</option>
            </select>
            {errors.service && <p className="text-xs text-destructive">{errors.service.message}</p>}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="doctor">Preferred Doctor (Optional)</Label>
            <select
              id="doctor"
              className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              {...register("doctor")}
            >
              <option value="">Any Available Doctor</option>
              {doctors.map(d => (
                <option key={d.id} value={d.id}>{d.name}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Preferred Date *</Label>
            <Controller
              control={control}
              name="date"
              render={({ field }) => (
                <DatePicker 
                  value={field.value} 
                  onChange={field.onChange} 
                  className={errors.date ? "border-destructive border-2" : ""} 
                />
              )}
            />
            {errors.date && <p className="text-xs text-destructive">{errors.date.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="time">Preferred Time *</Label>
            <select
              id="time"
              className={`flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ${errors.time ? "border-destructive" : ""}`}
              {...register("time")}
            >
              <option value="">Select time...</option>
              <option value="morning">Morning (8AM - 12PM)</option>
              <option value="afternoon">Afternoon (12PM - 4PM)</option>
              <option value="evening">Evening (4PM - 8PM)</option>
            </select>
            {errors.time && <p className="text-xs text-destructive">{errors.time.message}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="notes">Additional Notes</Label>
          <textarea 
            id="notes" 
            rows={4} 
            className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            placeholder="Any specific symptoms, questions, or requests..."
            {...register("notes")}
          />
        </div>

        <Button type="submit" size="lg" className="w-full md:w-auto h-14 rounded-full px-12 text-lg font-bold" disabled={isSubmitting}>
          {isSubmitting ? "Submitting Request..." : "Request Appointment"}
        </Button>
      </form>
    </div>
  );
}

export function BookAppointmentClient() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="w-20 h-20 mx-auto mb-6">
            <img src="/Images/calendar.png" alt="Calendar Icon" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Book an Appointment</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Fill out the form below to request an appointment. For immediate emergency care, please call us directly.
          </p>
          <div className="mt-8 flex justify-center">
            <a href={`tel:${siteConfig.contact.emergencyNumber}`} className="inline-flex items-center gap-2 bg-destructive/10 text-red-400 px-6 py-3 rounded-full font-semibold border border-destructive/20 hover:bg-destructive hover:text-white transition-colors">
              <Phone className="w-5 h-5" /> Emergency: {siteConfig.contact.emergencyNumber}
            </a>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-slate-50 relative">
        <div className="absolute top-0 w-full h-32 bg-slate-900"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Suspense fallback={<div className="bg-white p-12 rounded-3xl shadow-xl text-center">Loading booking form...</div>}>
            <BookingForm />
          </Suspense>
        </div>
      </section>
    </div>
  );
}

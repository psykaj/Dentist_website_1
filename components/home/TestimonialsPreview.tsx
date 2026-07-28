"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "Sneha Patel",
    date: "2 weeks ago",
    text: "Absolutely the best dental experience I've ever had. The staff is incredibly friendly, and Dr. Sharma made my root canal completely painless. Highly recommend!",
    rating: 5
  },
  {
    name: "Amit Kumar",
    date: "1 month ago",
    text: "State-of-the-art facility with a team that truly cares. I got dental implants here and the entire process from consultation to final placement was seamless.",
    rating: 5
  },
  {
    name: "Neha Gupta",
    date: "3 months ago",
    text: "I used to have terrible anxiety about visiting the dentist, but this clinic completely changed that for me. The calming environment and gentle approach are unmatched.",
    rating: 5
  }
];

export function TestimonialsPreview() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 translate-x-1/4 -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Patient Stories</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Don&apos;t Just Take Our Word For It
          </h3>
          <p className="text-slate-600 text-lg">
            See what our patients have to say about their experiences and smile transformations at our clinic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-slate-100 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white relative">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary" />
                </div>
                <CardContent className="p-8 pt-10">
                  <div className="flex gap-1 mb-4 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-6 leading-relaxed">
                    &quot;{review.text}&quot;
                  </p>
                  <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
                    <div>
                      <h5 className="font-bold text-slate-900">{review.name}</h5>
                      <p className="text-xs text-slate-500">{review.date}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400 uppercase">
                      {review.name.charAt(0)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

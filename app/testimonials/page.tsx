import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { Star, Quote, PlayCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AppointmentCTA } from "@/components/home/AppointmentCTA";

export const metadata: Metadata = {
  title: `Patient Reviews | ${siteConfig.name}`,
  description: `Read what our patients have to say about their experience at ${siteConfig.name}.`,
};

const reviews = [
  {
    name: "Sarah Johnson", date: "2 weeks ago", rating: 5,
    text: "Absolutely the best dental experience I've ever had. The staff is incredibly friendly, and Dr. Jenkins made my root canal completely painless. Highly recommend!"
  },
  {
    name: "David Chen", date: "1 month ago", rating: 5,
    text: "State-of-the-art facility with a team that truly cares. I got dental implants here and the entire process from consultation to final placement was seamless."
  },
  {
    name: "Emily Davis", date: "3 months ago", rating: 5,
    text: "I used to have terrible anxiety about visiting the dentist, but this clinic completely changed that for me. The calming environment and gentle approach are unmatched."
  },
  {
    name: "Michael Roberts", date: "4 months ago", rating: 5,
    text: "The best pediatric dentist in town! My kids actually look forward to their dental checkups now. The staff is so patient and great with children."
  },
  {
    name: "Jessica Williams", date: "5 months ago", rating: 5,
    text: "I recently completed my Invisalign treatment here and my smile looks amazing. The doctors were very thorough and the pricing was very transparent."
  },
  {
    name: "Robert Thompson", date: "6 months ago", rating: 5,
    text: "Had a dental emergency on a weekend and they were able to fit me in immediately. The care I received was prompt and professional. Very grateful!"
  }
];

export default function TestimonialsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Patient Reviews</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            We are proud to have helped over {siteConfig.stats.patients} patients achieve their dream smiles.
          </p>
          <div className="mt-8 flex items-center justify-center gap-2 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current" />
            ))}
            <span className="text-white font-bold text-xl ml-2">{siteConfig.stats.rating} Rating on Google</span>
          </div>
        </div>
      </section>

      {/* Video Reviews */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-slate-900 mb-12 text-center">Video Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[1, 2].map((video) => (
              <div key={video} className="relative aspect-video rounded-3xl overflow-hidden bg-slate-800 group cursor-pointer shadow-lg border border-slate-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="w-16 h-16 text-white/80 group-hover:text-white transition-colors group-hover:scale-110 duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-medium">Patient Story #{video}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Written Reviews */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="h-full border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white relative">
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
            ))}
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </div>
  );
}

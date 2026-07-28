import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { blogs } from "@/data/blogs";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AppointmentCTA } from "@/components/home/AppointmentCTA";

export const metadata: Metadata = {
  title: `Dental Blog | ${siteConfig.name}`,
  description: `Read the latest dental health tips, news, and insights from the experts at ${siteConfig.name}.`,
};

export default function BlogsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-0 right-0 w-full h-full bg-accent/20 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Dental Health Blog</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Expert insights, tips, and news for maintaining a healthy and beautiful smile.
          </p>
        </div>
      </section>

      {/* Blogs List */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link href={`/blogs/${blog.slug}`} key={blog.id} className="block group">
                <Card className="overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-300 h-full bg-white group-hover:-translate-y-1 flex flex-col">
                  <div className="relative h-60 w-full overflow-hidden bg-slate-200">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex gap-2 mb-4 flex-wrap">
                      {blog.tags.map(tag => (
                        <span key={tag} className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h4 className="text-2xl font-heading font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                      {blog.title}
                    </h4>
                    <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3 flex-1">
                      {blog.excerpt}
                    </p>
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{blog.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{blog.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </div>
  );
}

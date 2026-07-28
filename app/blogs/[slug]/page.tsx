import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { blogs } from "@/data/blogs";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { AppointmentCTA } from "@/components/home/AppointmentCTA";

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) return { title: "Blog Not Found" };

  return {
    title: `${blog.title} | ${siteConfig.name}`,
    description: blog.excerpt,
  };
}

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPostPage(
  props: { params: Promise<{ slug: string }> }
) {
  const params = await props.params;
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="pt-20">
      {/* Blog Header */}
      <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Link href="/blogs" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 mb-8 transition-colors">
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to all articles
          </Link>
          
          <div className="flex gap-2 mb-6 justify-center flex-wrap">
            {blog.tags.map(tag => (
              <span key={tag} className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-slate-900 leading-tight">
            {blog.title}
          </h1>
          
          <div className="flex items-center justify-center gap-6 text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span>{blog.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white pt-8 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="w-full h-[400px] md:h-[500px] bg-slate-200 rounded-3xl mb-12 flex items-center justify-center text-slate-400 overflow-hidden shadow-lg border border-slate-100">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-full object-cover" 
            />
          </div>
          
          {/* Blog Content */}
          <div className="prose prose-lg prose-slate max-w-none prose-headings:font-heading prose-headings:font-bold prose-h2:text-3xl prose-h2:text-slate-900 prose-a:text-primary prose-a:no-underline hover:prose-a:underline" dangerouslySetInnerHTML={{ __html: blog.content }}>
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </div>
  );
}

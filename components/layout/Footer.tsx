import Link from "next/link";
import { MessageCircle, Camera, Briefcase, Phone, MapPin, Mail, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Doctors", href: "/doctors" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & About */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl leading-none font-heading">
                  {siteConfig.shortName[0]}
                </span>
              </div>
              <span className="font-heading font-bold text-2xl text-white tracking-tight">
                {siteConfig.shortName}
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Providing premium, pain-free dental care using the latest technology. Your smile is our top priority.
            </p>
            <div className="flex gap-4">
              <a href={siteConfig.social.whatsapp} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <img src="/Images/Icons/Whatapp-icon.jpg" alt="WhatsApp" className="h-7 w-7 object-contain rounded" />
                <span className="sr-only">WhatsApp</span>
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <img src="/Images/Icons/linkedin.png" alt="LinkedIn" className="h-7 w-7 object-contain rounded" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <img src="/Images/Icons/Facebook-icon.jpg" alt="Facebook" className="h-7 w-7 object-contain rounded" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <img src="/Images/Icons/Instagram-icon.jpg" alt="Instagram" className="h-7 w-7 object-contain rounded" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group flex items-center hover:text-primary transition-colors">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {siteConfig.services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link href={service.slug} className="group flex items-center hover:text-primary transition-colors">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mr-3 shrink-0" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3 shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-primary transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 mt-12 text-center text-sm text-slate-500">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

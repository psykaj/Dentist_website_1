"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { siteConfig } from "@/data/siteConfig";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Service", href: "/services" },
  { name: "Testimonial", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  // On inner pages, we might want the header to always have a solid background
  const headerBgClass = isScrolled || !isHome ? "bg-white shadow-sm" : "bg-transparent";
  const headerTextClass = isScrolled || !isHome ? "text-slate-900" : "text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBgClass}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-heading font-bold text-primary">
                {siteConfig.shortName}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${pathname === link.href
                  ? "text-primary"
                  : headerTextClass
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className={`hidden xl:flex items-center gap-2 text-sm font-medium ${headerTextClass}`}>
              <Phone className="h-4 w-4" />
              <span>{siteConfig.contact.phone}</span>
            </div>
            <Link href="/book-appointment">
              <Button className="font-semibold rounded-full px-6">
                Book Appointment
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Link href="/book-appointment">
              <Button size="sm" className="font-semibold rounded-full">
                Book
              </Button>
            </Link>
            <Sheet>
              <SheetTrigger render={<Button variant="ghost" size="icon" className={headerTextClass} />}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">Main navigation for the website</SheetDescription>
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-lg font-medium px-4 py-2 rounded-md transition-colors hover:bg-slate-100 ${pathname === link.href ? "text-primary bg-blue-50" : "text-slate-900"
                        }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="mt-8 px-4 flex flex-col gap-4">
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="flex items-center gap-3 text-slate-600"
                    >
                      <Phone className="h-5 w-5" />
                      <span className="font-medium">{siteConfig.contact.phone}</span>
                    </a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

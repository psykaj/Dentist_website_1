import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { AppointmentCTA } from "@/components/home/AppointmentCTA";

export async function generateMetadata(
  props: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const service = siteConfig.services.find((s) => s.id === params.id);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.name} | ${siteConfig.name}`,
    description: `Learn more about our ${service.name} treatments in ${siteConfig.city}.`,
  };
}

export function generateStaticParams() {
  return siteConfig.services.map((service) => ({
    id: service.id,
  }));
}

export default async function ServiceDetailsPage(
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params;
  const service = siteConfig.services.find((s) => s.id === params.id);

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-full h-full bg-primary/20 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Link href="/services" className="inline-flex items-center text-sm font-medium text-primary hover:text-white mb-6 transition-colors">
              <ArrowRight className="mr-2 w-4 h-4 rotate-180" /> Back to Services
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              {service.name}
            </h1>
            <p className="text-lg md:text-xl text-slate-300">
              Advanced, pain-free {service.name.toLowerCase()} treatments designed to restore your smile&apos;s function and natural beauty.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-16">
              
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">Overview</h2>
                <div className="prose prose-lg text-slate-600 max-w-none">
                  <p>
                    Our {service.name.toLowerCase()} treatment is tailored to address your specific dental needs. We utilize the latest diagnostic tools and state-of-the-art equipment to ensure a comfortable and highly effective procedure. Whether you are experiencing discomfort or looking to enhance your smile, our expert team is here to help.
                  </p>
                  <p>
                    At {siteConfig.name}, we prioritize patient comfort. We offer various sedation options and take the time to explain every step of the process so you feel entirely at ease.
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">Key Benefits</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['Restores oral functionality', 'Prevents further decay or damage', 'Enhances aesthetic appearance', 'Long-lasting, durable results', 'Pain-free procedure', 'Boosts self-confidence'].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-6 h-6 text-success shrink-0" />
                      <span className="font-medium text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">Treatment Process</h2>
                <div className="space-y-8">
                  {[
                    { step: "01", title: "Consultation & Examination", desc: "We begin with a comprehensive exam and digital X-rays to assess your condition." },
                    { step: "02", title: "Customized Treatment Plan", desc: "Our specialists design a tailored plan discussing all options, timelines, and costs." },
                    { step: "03", title: "The Procedure", desc: "Using advanced techniques and anesthesia, we perform the treatment ensuring maximum comfort." },
                    { step: "04", title: "Recovery & Aftercare", desc: "You will receive detailed instructions for a smooth recovery, followed by a check-up appointment." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                        <p className="text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                <Accordion className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left font-bold text-lg">Is the {service.name.toLowerCase()} procedure painful?</AccordionTrigger>
                    <AccordionContent className="text-slate-600 text-base">
                      Not at all. We use local anesthesia and offer various sedation options to ensure you feel absolutely no pain during the procedure. Most patients report only mild discomfort during the recovery phase, which is easily managed with over-the-counter medication.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left font-bold text-lg">How long does the treatment take?</AccordionTrigger>
                    <AccordionContent className="text-slate-600 text-base">
                      The duration varies depending on the complexity of your case. A standard appointment takes between 45 minutes to 2 hours. We will give you an exact time estimate during your initial consultation.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left font-bold text-lg">Does my insurance cover this?</AccordionTrigger>
                    <AccordionContent className="text-slate-600 text-base">
                      Many dental insurance plans cover a significant portion of restorative treatments. Our front desk team will gladly verify your benefits and explain your coverage before we begin any work.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                
                {/* Booking Widget */}
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center">
                  <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">Book a Consultation</h3>
                  <p className="text-slate-600 mb-6">
                    Get an expert opinion on whether {service.name.toLowerCase()} is right for you.
                  </p>
                  <Link href={`/book-appointment?service=${service.id}`}>
                    <Button size="lg" className="w-full rounded-full text-base h-14 mb-4">
                      Book Appointment
                    </Button>
                  </Link>
                  <a href={`tel:${siteConfig.contact.phone}`}>
                    <Button variant="outline" size="lg" className="w-full rounded-full text-base h-14">
                      Call {siteConfig.contact.phone}
                    </Button>
                  </a>
                </div>

                {/* Other Services */}
                <div className="bg-slate-900 text-white p-8 rounded-3xl">
                  <h3 className="text-xl font-heading font-bold mb-6">Other Services</h3>
                  <ul className="space-y-4">
                    {siteConfig.services.filter(s => s.id !== service.id).slice(0, 5).map((s) => (
                      <li key={s.id}>
                        <Link href={s.slug} className="group flex items-center text-slate-300 hover:text-white transition-colors">
                          <ArrowRight className="mr-3 w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <AppointmentCTA />
    </div>
  );
}

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import { Package, ShieldCheck, Truck, CreditCard, BarChart3, ChevronDown, ChevronUp } from "lucide-react";

const services = [
  { icon: Package, title: "Donating Clothes, Books, Food & Money", desc: "Choose how you want to contribute—items or funds. We ensure everything is directed to verified orphanages and NGOs where it is actually needed." },
  { icon: ShieldCheck, title: "Orphanage & NGO Verification", desc: "Every organization is reviewed before being listed. This ensures your donations go only to genuine and accountable beneficiaries." },
  { icon: Truck, title: "Doorstep Donation Pickup", desc: "Schedule a pickup from your location for physical donations. No travel or coordination needed—we handle collection and delivery." },
  { icon: CreditCard, title: "Online Donation Support", desc: "Contribute money through a simple and secure process. Designed to make giving straightforward without unnecessary steps." },
  { icon: BarChart3, title: "Impact Tracking & Updates", desc: "Receive updates after your donation is delivered. Stay informed with visibility into how your contribution is being used." },
];

const faqs = [
  { q: "How do I know my donation reaches the right place?", a: "We verify every orphanage and NGO before listing them on our platform. You also receive updates, photos, and reports showing how your donation is being used." },
  { q: "What items can I donate?", a: "You can donate clothes, books, food, and money. We accept both physical donations and online financial contributions." },
  { q: "How does the doorstep pickup work?", a: "Simply schedule a pickup through our platform, and our team will collect your physical donations from your location and deliver them to verified organizations." },
  { q: "Is online donation secure?", a: "Yes, we use secure payment options for all online donations, and you receive updates on how your contributions are used." },
  { q: "How can I track my donation's impact?", a: "After donating, you will receive updates, photos, or reports showing how your donation is making a real difference in the lives of children and communities." },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-4 text-left bg-card hover:bg-muted/50 transition-colors">
        <span className="font-medium text-foreground text-sm">{q}</span>
        {open ? <ChevronUp className="h-4 w-4 text-muted-foreground shrink-0 ml-2" /> : <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0 ml-2" />}
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed bg-card">
          {a}
        </div>
      )}
    </div>
  );
};

const Services = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="pt-16" style={{ background: "var(--hero-gradient)" }}>
      <div className="container-narrow section-padding text-center">
        <h1 className="font-heading text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">Our Services</h1>
        <p className="text-primary-foreground/80 max-w-lg mx-auto">
          Clear, verified pathways to support orphanages and NGOs that genuinely need help
        </p>
      </div>
    </section>

    {/* Services */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <SectionHeading label="What We Offer" title="Services We Provide" />
        <div className="space-y-6">
          {services.map((s, i) => (
            <div key={i} className="bg-card rounded-xl p-6 md:p-8 border border-border flex flex-col md:flex-row gap-5 items-start hover:shadow-lg transition-shadow">
              <div className="bg-accent/10 w-14 h-14 rounded-lg flex items-center justify-center shrink-0">
                <s.icon className="h-7 w-7 text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-2 text-lg">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="section-padding bg-secondary">
      <div className="container-narrow max-w-3xl">
        <SectionHeading label="Questions" title="Frequently Asked Questions" description="Got questions? We've got answers." />
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <FAQItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <CTASection />

    {/* Footer */}
    <Footer />
  </div>
);

export default Services;

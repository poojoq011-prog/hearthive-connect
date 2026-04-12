import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import heroImage from "@/assets/hero-image.jpg";
import { ShieldCheck, Eye, RefreshCw, Heart, Package, Truck, CreditCard, BarChart3, CheckCircle, Quote } from "lucide-react";

const services = [
  { icon: Package, title: "Donating Clothes, Books, Food & Money", desc: "We help donors provide clothes, books, food, and financial support to orphanages and NGOs." },
  { icon: ShieldCheck, title: "Orphanage & NGO Verification", desc: "We verify orphanages and NGOs before listing them on our platform." },
  { icon: Truck, title: "Doorstep Donation Pickup", desc: "We offer pickup services for physical donations from your location." },
  { icon: CreditCard, title: "Online Donation Support", desc: "Donate money easily through our platform with secure payment options." },
  { icon: BarChart3, title: "Impact Tracking & Updates", desc: "Receive updates, photos, or reports showing how your donations make a difference." },
];

const process = [
  { step: "01", title: "Choose What to Donate", desc: "Select clothes, books, food, or money — whatever you'd like to contribute." },
  { step: "02", title: "We Verify & Connect", desc: "We match your donation with verified orphanages and NGOs in genuine need." },
  { step: "03", title: "Donation Delivered", desc: "Your contribution is safely delivered to the right beneficiaries." },
  { step: "04", title: "Track Your Impact", desc: "Receive updates and reports on how your donation is making a difference." },
];

const trustPoints = [
  { icon: ShieldCheck, text: "Verified and transparent donations" },
  { icon: CheckCircle, text: "Contributions reach the right organizations" },
  { icon: RefreshCw, text: "Regular updates to donors" },
  { icon: Eye, text: "Simple, reliable, and meaningful process" },
];

const Index = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="pt-16" style={{ background: "var(--hero-gradient)" }}>
      <div className="container-narrow section-padding">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4" style={{ color: "hsl(32 90% 68%)", background: "hsl(32 90% 68% / 0.15)" }}>
              Making Donations Meaningful
            </span>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground leading-tight mb-4">
              Connect, Donate, <br className="hidden md:block" />Change Lives
            </h1>
            <p className="text-primary-foreground/80 text-base md:text-lg mb-8 max-w-md">
              Hearthive connects donors with orphanages and NGOs in need. Contribute money, food, and essential items easily and transparently.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">Donate Now</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={heroImage} alt="Community donating to children at an orphanage" width={1280} height={800} className="rounded-2xl shadow-2xl max-w-full" />
          </div>
        </div>
      </div>
    </section>

    {/* Trust */}
    <section className="section-padding bg-trust">
      <div className="container-narrow">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustPoints.map((t, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3 p-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <t.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm font-medium text-trust-foreground">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <SectionHeading label="What We Do" title="Our Services" description="We bridge the gap between donors and real needs through verified and transparent services." />
        <div className="grid md:grid-cols-3 gap-6">
          {services.slice(0, 3).map((s, i) => (
            <div key={i} className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <s.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto">
          {services.slice(3).map((s, i) => (
            <div key={i} className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <s.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <SectionHeading label="How It Works" title="Simple Donation Process" description="Four easy steps to make your contribution reach those who need it most." />
        <div className="grid md:grid-cols-4 gap-6">
          {process.map((p, i) => (
            <div key={i} className="relative text-center">
              <div className="text-4xl font-heading font-extrabold text-primary/10 mb-2">{p.step}</div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
              {i < process.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-3 text-primary/20 text-2xl">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonial section between Process and CTA */}
    <section className="section-padding bg-background">
      <div className="container-narrow max-w-2xl">
        <div className="bg-card rounded-2xl p-8 border border-border text-center">
          <Quote className="h-8 w-8 text-accent mx-auto mb-4" />
          <p className="text-foreground italic leading-relaxed mb-6">
            "I wanted to support orphanages but didn't know how to start. Hearthive helped me connect with genuine organizations and ensured my donation reached the right place."
          </p>
          <div>
            <p className="font-heading font-semibold text-foreground">Karthik S.P</p>
            <p className="text-sm text-muted-foreground">Working Professional, Bangalore</p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <CTASection />

    {/* Footer */}
    <Footer />
  </div>
);

export default Index;

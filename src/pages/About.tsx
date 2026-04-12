import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import aboutHero from "@/assets/about-hero.jpg";
import { Heart, Users, Eye, ShieldCheck } from "lucide-react";

const values = [
  { icon: ShieldCheck, title: "Transparency", desc: "Every donation is verified and tracked so you know exactly where your contribution goes." },
  { icon: Heart, title: "Compassion", desc: "We are driven by a genuine desire to improve lives and bridge the gap between donors and those in need." },
  { icon: Users, title: "Community", desc: "We build meaningful connections between donors, orphanages, and NGOs to create lasting impact." },
  { icon: Eye, title: "Accountability", desc: "We provide regular updates and reports to donors, ensuring full accountability at every step." },
];

const About = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="pt-16" style={{ background: "var(--hero-gradient)" }}>
      <div className="container-narrow section-padding text-center">
        <h1 className="font-heading text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">About Hearthive</h1>
        <p className="text-primary-foreground/80 max-w-lg mx-auto">
          Learn about our mission to make donating simple, transparent, and meaningful.
        </p>
      </div>
    </section>

    {/* About */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src={aboutHero} alt="Volunteers sorting donated items" loading="lazy" width={1280} height={640} className="rounded-2xl shadow-lg" />
          <div>
            <SectionHeading label="Who We Are" title="Our Story" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hearthive is a platform that connects donors with orphanages and NGOs in need. We help people contribute money, food, and essential items easily.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our goal is to make donating simple, transparent, and meaningful. We bridge the gap between donors and real needs, ensuring that every contribution reaches the right beneficiaries.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <SectionHeading label="What Drives Us" title="Our Values" description="The principles that guide everything we do at Hearthive." />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <div key={i} className="bg-card rounded-xl p-6 border border-border">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <v.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
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

export default About;

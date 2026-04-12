import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import aboutHero from "@/assets/about-hero.jpg";

const About = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* About */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="flex flex-col gap-10 items-center">
          <img src={aboutHero} alt="Volunteers sorting donated items" loading="lazy" width={1280} height={640} className="rounded-2xl shadow-lg w-full max-w-4xl" />
          <div className="max-w-3xl">
            <SectionHeading label="Who We Are" title="Our Story" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hearthive connects donors with verified orphanages and NGOs that genuinely need support.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You can contribute money, food, clothes, or books through a process designed to ensure your donations are directed to the right beneficiaries.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every step is handled with clarity—from contribution to delivery—so you know where your support goes and the impact it creates.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <Footer />
  </div>
);

export default About;


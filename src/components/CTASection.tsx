import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const CTASection = () => (
  <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
    <div className="container-narrow text-center">
      <Heart className="h-10 w-10 text-accent fill-accent mx-auto mb-4" />
      <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
        Ready to Make a Difference?
      </h2>
      <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
        Your contribution can change lives. Join Hearthive and help us connect donors with orphanages and NGOs in need.
      </p>
      <Button variant="cta" size="lg" asChild>
        <Link to="/contact">Donate Now</Link>
      </Button>
    </div>
  </section>
);

export default CTASection;

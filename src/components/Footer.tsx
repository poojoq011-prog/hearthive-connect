import { Link } from "react-router-dom";
import { Heart, Phone, Mail, MapPin, Instagram, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container-narrow section-padding">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-0 mb-4">
            <Heart className="h-6 w-6 text-accent fill-accent" />
            <span className="font-heading font-bold text-lg">Hearthive</span>
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Connecting donors with verified orphanages and NGOs, ensuring every donation is clear, direct, and accountable
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
          <div className="space-y-2">
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <Link key={l.path} to={l.path} className="block text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Contact</h4>
          <div className="space-y-3 text-sm text-primary-foreground/70">
            <a href="tel:7904916846" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-4 w-4" /> 7904916846
            </a>
            <a href="mailto:poojoq011@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="h-4 w-4" /> poojoq011@gmail.com
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>NO:4 Salaima Nagar, Vyasarpadi, Chennai 39</span>
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <a href="https://www.instagram.com/hearthive.in?igsh=dnVseWp4OXMwZnJ2" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-accent transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/pooja-p-783a70381" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-accent transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Hearthive. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;

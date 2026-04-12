import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, MessageCircle, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="pt-16" style={{ background: "var(--hero-gradient)" }}>
      <div className="container-narrow section-padding text-center">
        <h1 className="font-heading text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">Contact Us</h1>
        <p className="text-primary-foreground/80 max-w-lg mx-auto">
          Have questions or ready to donate? Reach out to us — we'd love to hear from you.
        </p>
      </div>
    </section>

    {/* Contact */}
    <section className="section-padding bg-background">
      <div className="container-narrow max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="font-heading text-xl font-bold text-foreground">Get in Touch</h2>
            <p className="text-muted-foreground">
              Whether you want to donate, partner with us, or learn more about Hearthive, we're here to help.
            </p>

            <div className="space-y-4">
              <a href="tel:7904916846" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="font-medium">7904916846</p>
                </div>
              </a>

              <a href="https://wa.me/917904916846" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">WhatsApp</p>
                  <p className="font-medium">7904916846</p>
                </div>
              </a>

              <a href="mailto:poojoq011@gmail.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="font-medium">poojoq011@gmail.com</p>
                </div>
              </a>

              <div className="flex items-start gap-3 text-foreground">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Address</p>
                  <p className="font-medium">NO:4 Salaima Nagar, Vyasarpadi, Chennai 39</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-3">Follow us</p>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/hearthive.in?igsh=dnVseWp4OXMwZnJ2" target="_blank" rel="noopener noreferrer" className="bg-primary/10 p-3 rounded-lg hover:bg-primary/20 transition-colors">
                  <Instagram className="h-5 w-5 text-primary" />
                </a>
                <a href="https://www.linkedin.com/in/pooja-p-783a70381" target="_blank" rel="noopener noreferrer" className="bg-primary/10 p-3 rounded-lg hover:bg-primary/20 transition-colors">
                  <Linkedin className="h-5 w-5 text-primary" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Donate Card */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
            <h3 className="font-heading text-lg font-bold text-foreground mb-2">Ready to Donate?</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Reach out to us via WhatsApp or email to start your donation. We'll guide you through the process.
            </p>
            <div className="space-y-3">
              <Button variant="cta" size="lg" className="w-full" asChild>
                <a href="https://wa.me/917904916846" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 mr-2" /> Donate via WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="lg" className="w-full" asChild>
                <a href="mailto:poojoq011@gmail.com">
                  <Mail className="h-4 w-4 mr-2" /> Email Us
                </a>
              </Button>
              <Button variant="default" size="lg" className="w-full" asChild>
                <a href="tel:7904916846">
                  <Phone className="h-4 w-4 mr-2" /> Call Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <Footer />
  </div>
);

export default Contact;

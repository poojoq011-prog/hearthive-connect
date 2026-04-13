import emailjs from "@emailjs/browser";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, MessageCircle, Instagram, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const donationSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(1, "Phone number is required").max(15, "Invalid phone number").regex(/^[0-9+\-\s()]+$/, "Invalid phone number"),
  donationType: z.string().min(1, "Please select a donation type"),
  message: z.string().trim().max(1000, "Message must be less than 1000 characters").optional(),
});

type DonationForm = z.infer<typeof donationSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<DonationForm>({ name: "", email: "", phone: "", donationType: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof DonationForm, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: keyof DonationForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = donationSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof DonationForm, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof DonationForm;
        if (!fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);

    const templateParams = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      donationType: form.donationType,
      message: form.message,
    };

    // ✅ Send emails (Owner → then Auto Reply)
    emailjs
      .send(
        "service_sncvs3b",
        "template_q7f9tf8",
        templateParams,
        "WefqvNMdPlbMt9etZ"
      )
      .then(() => {
        console.log("Owner mail sent");

        return emailjs.send(
          "service_sncvs3b",
          "template_stqakpm",
          templateParams,
          "WefqvNMdPlbMt9etZ"
        );
      })
      .then(() => {
        console.log("Auto-reply sent");

        toast({
          title: "Success",
          description: "Message sent! Please check your email.",
        });

        setForm({
          name: "",
          email: "",
          phone: "",
          donationType: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error);

        toast({
          title: "Error",
          description: "Failed to send message",
        });
      })
      .finally(() => {
        setSubmitting(false);
      });
  };
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-16" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow section-padding text-center">
          <h1 className="font-heading text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-primary-foreground/80 max-w-lg mx-auto">
            Start your donation with clarity and the right guidance
          </p>
        </div>
      </section>

      {/* Contact + Form */}
      <section className="section-padding bg-background">
        <div className="container-narrow max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="font-heading text-xl font-bold text-foreground">Get in Touch</h2>
              <p className="text-muted-foreground">
                Whether you want to donate, schedule a pickup, or understand how the process works, reach out and we’ll guide you step by step.
              </p>

              <div className="space-y-4">
                <a href="tel:7904916846" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <div className="bg-primary/10 p-3 rounded-lg"><Phone className="h-5 w-5 text-primary" /></div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="font-medium">7904916846</p>
                  </div>
                </a>
                <a href="https://wa.me/917904916846" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <div className="bg-primary/10 p-3 rounded-lg"><MessageCircle className="h-5 w-5 text-primary" /></div>
                  <div>
                    <p className="text-xs text-muted-foreground">WhatsApp</p>
                    <p className="font-medium">7904916846</p>
                  </div>
                </a>
                <a href="mailto:poojoq011@gmail.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <div className="bg-primary/10 p-3 rounded-lg"><Mail className="h-5 w-5 text-primary" /></div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="font-medium">poojoq011@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-start gap-3 text-foreground">
                  <div className="bg-primary/10 p-3 rounded-lg"><MapPin className="h-5 w-5 text-primary" /></div>
                  <div>
                    <p className="text-xs text-muted-foreground">Address</p>
                    <p className="font-medium">NO:4, Salaima Nagar, Vyasarpadi, Chennai 39</p>
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

            {/* Donation Form */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm">
              <h3 className="font-heading text-lg font-bold text-foreground mb-1">Donation Inquiry Form</h3>
              <p className="text-sm text-muted-foreground mb-6">Fill in your details and we'll connect with you via WhatsApp.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" placeholder="Your name" value={form.name} onChange={(e) => handleChange("name", e.target.value)} className={errors.name ? "border-destructive" : ""} />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="you@example.com" value={form.email} onChange={(e) => handleChange("email", e.target.value)} className={errors.email ? "border-destructive" : ""} />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" placeholder="Your phone number" value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} className={errors.phone ? "border-destructive" : ""} />
                  {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <Label>Donation Type *</Label>
                  <Select value={form.donationType} onValueChange={(v) => handleChange("donationType", v)}>
                    <SelectTrigger className={errors.donationType ? "border-destructive" : ""}>
                      <SelectValue placeholder="Select what you'd like to donate" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clothes">Clothes</SelectItem>
                      <SelectItem value="books">Books</SelectItem>
                      <SelectItem value="food">Food</SelectItem>
                      <SelectItem value="money">Money</SelectItem>
                      <SelectItem value="multiple">Multiple Items</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.donationType && <p className="text-xs text-destructive mt-1">{errors.donationType}</p>}
                </div>

                <div>
                  <Label htmlFor="message">Message (optional)</Label>
                  <Textarea id="message" placeholder="Any additional details..." rows={3} value={form.message} onChange={(e) => handleChange("message", e.target.value)} className={errors.message ? "border-destructive" : ""} />
                  {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                </div>

                <Button variant="cta" size="lg" className="w-full" type="submit" disabled={submitting}>
                  <Send className="h-4 w-4 mr-2" /> Donate Now
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "I wanted to support orphanages but didn't know how to start. Hearthive helped me connect with genuine organizations and ensured my donation reached the right place.",
    name: "Karthik S.P",
    role: "Working Professional, Bangalore",
  },
  {
    quote: "The transparency Hearthive provides is unmatched. I could see exactly where my clothes and books went, and the updates I received made me feel truly connected to the cause.",
    name: "Priya M.",
    role: "College Student, Chennai",
  },
  {
    quote: "As a first-time donor, I was skeptical. But Hearthive's verification process gave me confidence that my contribution was going to a genuine orphanage. I'll definitely donate again.",
    name: "Arjun R.",
    role: "IT Consultant, Hyderabad",
  },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => setCurrent(index);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Card */}
      <div className="bg-card rounded-2xl p-8 md:p-10 border border-border text-center min-h-[280px] flex flex-col justify-center">
        <Quote className="h-8 w-8 text-accent mx-auto mb-4" />
        <p className="text-foreground italic leading-relaxed mb-6 transition-opacity duration-500">
          "{testimonials[current].quote}"
        </p>
        <div>
          <p className="font-heading font-semibold text-foreground">{testimonials[current].name}</p>
          <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 bg-card border border-border rounded-full p-2 shadow-md hover:bg-muted transition-colors"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-5 w-5 text-foreground" />
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 bg-card border border-border rounded-full p-2 shadow-md hover:bg-muted transition-colors"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-5 w-5 text-foreground" />
      </button>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-primary scale-110" : "bg-border hover:bg-muted-foreground"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;

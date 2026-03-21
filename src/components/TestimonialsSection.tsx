import useScrollReveal from "@/hooks/useScrollReveal";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Abhishek's layman approach completely changed how I see photography. Within weeks, I stopped worrying about gear and started focusing on what truly matters — the story in every frame.",
    name: "Priya Nair",
    role: "Landscape Photographer, Bangalore",
  },
  {
    text: "His workshops are unlike anything else in India. The way he simplifies complex techniques and makes you experiment fearlessly — that's what sets him apart from every other mentor out there.",
    name: "Karthik Raman",
    role: "Fashion Photographer, Chennai",
  },
];

const TestimonialsSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6 md:px-12">
      <div ref={ref} className="max-w-5xl mx-auto">
        <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-12 text-center">
          What Students Say
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card p-8 md:p-10 border border-border">
              <Quote className="w-6 h-6 text-primary/40 mb-4" />
              <p className="text-foreground text-lg leading-relaxed mb-6">
                {t.text}
              </p>
              <div>
                <p className="font-display font-bold">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

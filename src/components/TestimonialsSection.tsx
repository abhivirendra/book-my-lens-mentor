import useScrollReveal from "@/hooks/useScrollReveal";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Working with this mentor completely shifted how I approach every shoot. I went from technically competent to emotionally compelling in four months.",
    name: "Rina Takahashi",
    role: "Editorial Photographer",
  },
  {
    text: "The best investment I've made in my career. Not just techniques — a complete reframing of what photography means and what it can do.",
    name: "Marcus Eliott",
    role: "Documentary Filmmaker",
  },
];

const TestimonialsSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6 md:px-12">
      <div ref={ref} className="max-w-5xl mx-auto">
        <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-12 text-center">
          What They Say
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

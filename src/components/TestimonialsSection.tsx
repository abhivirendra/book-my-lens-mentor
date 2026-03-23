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

const videoFeedbacks = [
  { id: "-B8ZGdtxUSQ" },
  { id: "0M_KpBh6eo8" },
  { id: "v9Pj1tHMNq0" },
  { id: "ineNwbVifZQ" },
];

const TestimonialsSection = () => {
  const ref = useScrollReveal();
  const videoRef = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6 md:px-12">
      <div ref={ref} className="max-w-5xl mx-auto">
        <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-12 text-center">
          What Students Say
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
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

      <div ref={videoRef} className="max-w-5xl mx-auto">
        <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-10 text-center">
          Video Feedback
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {videoFeedbacks.map((v) => (
            <div key={v.id} className="relative w-full overflow-hidden border border-border" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${v.id}`}
                title="Student feedback"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

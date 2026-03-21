import useScrollReveal from "@/hooks/useScrollReveal";
import { ArrowRight, Clock, Users, Video } from "lucide-react";

const features = [
  { icon: Video, text: "4 live 1-on-1 sessions per month" },
  { icon: Users, text: "Portfolio review & creative direction" },
  { icon: Clock, text: "Unlimited async feedback via chat" },
];

const BookingSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="booking" className="py-24 md:py-32 px-6 md:px-12 bg-card grain-overlay">
      <div ref={ref} className="max-w-2xl mx-auto text-center relative z-10">
        <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-4">
          Limited Availability
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-4 text-balance">
          Ready to transform your photography?
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
          Only 6 mentorship spots open per quarter. Secure yours before they're gone.
        </p>

        <div className="bg-secondary/50 border border-border p-8 mb-8 text-left space-y-4">
          {features.map((f) => (
            <div key={f.text} className="flex items-center gap-3">
              <f.icon className="w-5 h-5 text-primary shrink-0" />
              <span className="text-foreground">{f.text}</span>
            </div>
          ))}
        </div>

        <a
          href="mailto:hello@yourdomain.com?subject=Mentorship%20Booking%20Inquiry"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 text-sm font-semibold tracking-[0.15em] uppercase hover:opacity-90 transition-opacity active:scale-[0.97]"
        >
          Book Your Spot
          <ArrowRight className="w-4 h-4" />
        </a>
        <p className="text-muted-foreground text-xs mt-4">
          You'll receive a response within 24 hours.
        </p>
      </div>
    </section>
  );
};

export default BookingSection;

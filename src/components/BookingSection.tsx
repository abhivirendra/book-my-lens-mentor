import useScrollReveal from "@/hooks/useScrollReveal";
import { ArrowRight, Clock, Users, Video, MapPin, Camera } from "lucide-react";

const features = [
  { icon: Video, text: "Live 1-on-1 & group mentorship sessions" },
  { icon: Camera, text: "Hands-on practical photography workshops" },
  { icon: Users, text: "Portfolio review & creative direction" },
  { icon: MapPin, text: "Online via Zoom + On-location in Bangalore" },
  { icon: Clock, text: "Flexible scheduling around your time" },
];

const BookingSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="booking" className="py-24 md:py-32 px-6 md:px-12 bg-card grain-overlay">
      <div ref={ref} className="max-w-2xl mx-auto text-center relative z-10">
        <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-4">
          Limited Spots Available
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-4 text-balance">
          Ready to learn photography the layman way?
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
          Get a chance to work directly with Abhishek Virendra. Book your spot before it's gone.
        </p>

        <div className="bg-secondary/50 border border-border p-8 mb-8 text-left space-y-4">
          {features.map((f) => (
            <div key={f.text} className="flex items-center gap-3">
              <f.icon className="w-5 h-5 text-primary shrink-0" />
              <span className="text-foreground">{f.text}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a
            href="tel:+919606766511"
            className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-10 py-4 text-sm font-semibold tracking-[0.15em] uppercase hover:opacity-90 transition-opacity active:scale-[0.97]"
          >
            Call Now
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="mailto:abhishekvirendra@gmail.com?subject=Photography%20Mentorship%20Inquiry"
            className="inline-flex items-center justify-center gap-3 border border-primary text-primary px-10 py-4 text-sm font-semibold tracking-[0.15em] uppercase hover:bg-primary hover:text-primary-foreground transition-colors active:scale-[0.97]"
          >
            Email Me
          </a>
        </div>

        <div className="text-muted-foreground text-sm space-y-1">
          <p>📞 +91 96067 66511</p>
          <p>✉️ abhishekvirendra@gmail.com</p>
          <p>📍 Koramangala, Bangalore, India</p>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;

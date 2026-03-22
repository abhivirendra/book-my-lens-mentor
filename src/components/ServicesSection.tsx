import { Camera, Heart, Users, Baby, Sparkles, User, PartyPopper } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const services = [
  { icon: Sparkles, name: "Glamour Photography", description: "Bold, confident imagery that celebrates individuality" },
  { icon: User, name: "Portrait Photography", description: "Authentic expressions captured with cinematic precision" },
  { icon: Camera, name: "Personal Photography", description: "Your story, your style — one frame at a time" },
  { icon: PartyPopper, name: "Event Photography", description: "Every moment documented with an editorial eye" },
  { icon: Heart, name: "Pre-Wedding Photography", description: "Romantic narratives crafted in stunning locations" },
  { icon: Baby, name: "Maternity Shoots", description: "Graceful, intimate portraits celebrating new beginnings" },
  { icon: Users, name: "Kids Natural Shoots", description: "Candid, joyful moments of childhood wonder" },
];


const ServicesSection = () => {
  const ref1 = useScrollReveal();
  const ref2 = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div ref={ref1} className="mb-16">
          <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-6">
            Services
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-[1.1] tracking-tight mb-4 text-balance max-w-xl">
            Photography that speaks your language.
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            From glamour to candid kids — every shoot is treated as a unique creative project.
          </p>
        </div>

        <div ref={ref2} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-20">
          {services.map((service) => (
            <div
              key={service.name}
              className="group relative p-6 md:p-8 bg-card border border-border rounded-sm hover:border-primary/40 transition-[border-color,box-shadow] duration-300 hover:shadow-[0_2px_24px_hsl(30_47%_64%/0.06)]"
            >
              <service.icon className="w-5 h-5 text-primary mb-4 opacity-80" strokeWidth={1.5} />
              <h3 className="font-display text-lg font-semibold mb-2 tracking-tight">
                {service.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

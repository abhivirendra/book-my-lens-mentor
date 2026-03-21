import useScrollReveal from "@/hooks/useScrollReveal";

const PhilosophySection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6 md:px-12">
      <div ref={ref} className="max-w-3xl mx-auto text-center">
        <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-6">
          My Philosophy
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-8 text-balance">
          Photography isn't about cameras. It's about seeing.
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
          Over nine years, I've guided hundreds of photographers — from absolute beginners to working professionals — to find their unique vision. My mentorship isn't about presets or gear lists. It's about training your eye, understanding light, and developing the confidence to create work that moves people.
        </p>
      </div>
    </section>
  );
};

export default PhilosophySection;

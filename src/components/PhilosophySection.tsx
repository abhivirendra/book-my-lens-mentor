import useScrollReveal from "@/hooks/useScrollReveal";

const PhilosophySection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6 md:px-12">
      <div ref={ref} className="max-w-3xl mx-auto text-center">
        <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-6">
          About Abhishek
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-8 text-balance">
          The engineer who became a photographer.
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-6">
          Born & brought up in Muzaffarpur, Bihar — Abhishek Virendra's journey from MIT Manipal engineering graduate to one of India's youngest fashion photographers is anything but ordinary. His unique talent lies in changing the perspective of every click without extra effort.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
          As the CEO & Founder of Interactive Photography Workshop Pvt. Ltd. and creator of the trademarked "A Lay Man Approach Towards Photography™", Abhishek has motivated over 1,500 photographers across India with his clean work and revolutionary teaching style. He doesn't just teach — he transforms how you see.
        </p>
      </div>
    </section>
  );
};

export default PhilosophySection;

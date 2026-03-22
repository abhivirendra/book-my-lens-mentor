import useScrollReveal from "@/hooks/useScrollReveal";

const stats = [
  { number: "9", suffix: "+", label: "YEARS MENTORING" },
  { number: "1,500", suffix: "+", label: "STUDENTS MENTORED" },
  { number: "126", suffix: "+", label: "LIVE WORKSHOPS" },
];

const PhilosophySection = () => {
  const ref = useScrollReveal();
  const statsRef = useScrollReveal();

  return (
    <>
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

      {/* Stats Banner */}
      <section ref={statsRef} className="py-20 md:py-28 bg-[hsl(30,5%,12%)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 grid grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-[hsl(33,40%,55%)] tracking-tight" style={{ lineHeight: 1 }}>
                {stat.number}<span className="text-3xl md:text-5xl lg:text-6xl align-top">{stat.suffix}</span>
              </p>
              <p className="text-[hsl(30,5%,60%)] text-xs md:text-sm tracking-[0.2em] uppercase mt-3 md:mt-4 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PhilosophySection;

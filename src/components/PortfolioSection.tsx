import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import useScrollReveal from "@/hooks/useScrollReveal";

const stats = [
  { number: "9+", label: "Years Mentoring" },
  { number: "3,000+", label: "Students Mentored" },
  { number: "200+", label: "Live Workshops" },
];

const PortfolioSection = () => {
  const ref1 = useScrollReveal();
  const ref2 = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-card">
      <div ref={ref1} className="max-w-6xl mx-auto mb-16">
        <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-6">
          The Work
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          <div className="row-span-2">
            <img src={portfolio1} alt="Landscape photography by Abhishek Virendra" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1">
            <img src={portfolio2} alt="Portrait photography" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1">
            <img src={portfolio3} alt="Street photography" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div ref={ref2} className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center border-t border-border pt-16">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-4xl md:text-6xl font-bold text-primary tracking-tight">
              {stat.number}
            </p>
            <p className="text-muted-foreground text-sm mt-2 tracking-wide uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;

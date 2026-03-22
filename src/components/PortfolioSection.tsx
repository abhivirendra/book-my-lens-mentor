import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolioFashion from "@/assets/portfolio-fashion.jpg";
import workshopStudents from "@/assets/workshop-students.jpg";
import workshopGroup from "@/assets/workshop-group.jpg";
import workshopBanner from "@/assets/workshop-banner.jpg";
import workshopBatch from "@/assets/workshop-batch.jpg";
import useScrollReveal from "@/hooks/useScrollReveal";

const stats = [
  { number: "9+", label: "Years Mentoring" },
  { number: "3,000+", label: "Students Mentored" },
  { number: "200+", label: "Live Workshops" },
];

const galleryImages = [
  { src: portfolioFashion, alt: "Black and white fashion portrait by Abhishek Virendra — editorial photography", span: "row-span-2" },
  { src: workshopStudents, alt: "iPW students learning photography during a live workshop", span: "" },
  { src: portfolio1, alt: "Flamingo wildlife photography by Abhishek Virendra — iPW branded", span: "" },
  { src: workshopBatch, alt: "iPW photography workshop batch with Abhishek Virendra — students in yellow iPW shirts", span: "col-span-2 md:col-span-2" },
  { src: portfolio2, alt: "Fashion photography shoot directed by Abhishek Virendra", span: "" },
  { src: workshopBanner, alt: "iPW Basic Photography Workshop at Bangalore — creative light bulb art", span: "" },
  { src: workshopGroup, alt: "Full batch of iPW photography workshop students — group photo", span: "col-span-2 md:col-span-1" },
  { src: portfolio3, alt: "Abhishek Virendra mentoring students with hands-on camera guidance", span: "" },
];

const PortfolioSection = () => {
  const ref1 = useScrollReveal();
  const ref2 = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-card">
      <div ref={ref1} className="max-w-6xl mx-auto mb-16">
        <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-6">
          The Work & Workshops
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[250px] md:auto-rows-[300px] gap-3 md:gap-4">
          {galleryImages.map((img) => (
            <div key={img.alt} className={`${img.span} overflow-hidden`}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
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

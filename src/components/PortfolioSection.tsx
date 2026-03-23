import { useState } from "react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolioFashion from "@/assets/portfolio-fashion.jpg";
import workshopStudents from "@/assets/workshop-students.jpg";
import workshopGroup from "@/assets/workshop-group.jpg";
import workshopBanner from "@/assets/workshop-banner.jpg";
import workshopBatch from "@/assets/workshop-batch.jpg";
import ipwLighttrails from "@/assets/ipw-lighttrails.jpg";
import abhishekLecture from "@/assets/abhishek-lecture.jpg";
import useScrollReveal from "@/hooks/useScrollReveal";

const featuredImages = [
  { src: portfolioFashion, alt: "Black and white fashion portrait by Abhishek Virendra — editorial photography", span: "" },
  { src: portfolio1, alt: "Flamingo wildlife photography by Abhishek Virendra — iPW branded", span: "" },
  { src: portfolio2, alt: "Fashion photography shoot directed by Abhishek Virendra", span: "" },
  { src: ipwLighttrails, alt: "Light trail long exposure photography — iPW branded work by Abhishek Virendra", span: "col-span-2" },
  { src: portfolio3, alt: "Abhishek Virendra mentoring students with hands-on camera guidance", span: "" },
];

const workshopImages = [
  { src: workshopStudents, alt: "iPW students learning photography during a live workshop", span: "" },
  { src: workshopBatch, alt: "iPW photography workshop batch with Abhishek Virendra — students in yellow iPW shirts", span: "col-span-2" },
  { src: workshopBanner, alt: "iPW Basic Photography Workshop at Bangalore — creative light bulb art", span: "" },
  { src: abhishekLecture, alt: "Abhishek Virendra delivering a photography lecture at iPW workshop", span: "" },
  { src: workshopGroup, alt: "Full batch of iPW photography workshop students — group photo", span: "col-span-2" },
];

const tabs = [
  { key: "featured", label: "Featured Work" },
  { key: "workshop", label: "Workshops" },
] as const;

const PortfolioSection = () => {
  const ref1 = useScrollReveal();
  const [activeTab, setActiveTab] = useState<"featured" | "workshop">("featured");

  const images = activeTab === "featured" ? featuredImages : workshopImages;

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-card">
      <div ref={ref1} className="max-w-6xl mx-auto mb-16">
        <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-6">
          The Work & Workshops
        </p>

        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2 text-sm font-medium tracking-wide rounded-sm transition-all duration-200 border ${
                activeTab === tab.key
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] md:auto-rows-[280px] gap-3 md:gap-4">
          {images.map((img) => (
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
    </section>
  );
};

export default PortfolioSection;

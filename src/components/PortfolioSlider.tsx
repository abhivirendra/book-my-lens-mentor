import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

import sliderFashion1 from "@/assets/slider-fashion-1.jpg";
import sliderGelLight from "@/assets/slider-gel-light.jpg";
import sliderCreativeBulb from "@/assets/slider-creative-bulb.jpg";
import sliderBwPortrait from "@/assets/slider-bw-portrait.jpg";
import sliderBeauty from "@/assets/slider-beauty.jpg";
import sliderBwCloseup from "@/assets/slider-bw-closeup.jpg";
import sliderStreetFashion from "@/assets/slider-street-fashion.jpg";
import sliderBwEditorial from "@/assets/slider-bw-editorial.jpg";

const slides = [
  { src: sliderStreetFashion, alt: "Street fashion portrait — leather jacket against red wall", caption: "Street Fashion" },
  { src: sliderGelLight, alt: "Gel lighting portrait — blue and red creative lighting", caption: "Creative Lighting" },
  { src: sliderBeauty, alt: "Beauty portrait — natural light studio photography", caption: "Beauty" },
  { src: sliderBwEditorial, alt: "Black and white editorial fashion portrait", caption: "Editorial B&W" },
  { src: sliderBwPortrait, alt: "Black and white self-portrait — Abhishek Virendra", caption: "Portraiture" },
  { src: sliderFashion1, alt: "Fashion portrait — editorial studio photography", caption: "Editorial" },
  { src: sliderCreativeBulb, alt: "Creative still life — light bulb with color ink in water", caption: "Creative" },
  { src: sliderBwCloseup, alt: "Black and white close-up portrait — dramatic lighting", caption: "Monochrome" },
];

const PortfolioSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const sectionRef = useScrollReveal();

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    const interval = setInterval(() => {
      if (emblaApi.canScrollNext()) emblaApi.scrollNext();
    }, 4500);

    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(interval);
    };
  }, [emblaApi, onSelect]);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 md:px-12 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-4">
          Featured Work
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-12 tracking-tight" style={{ lineHeight: 1.1 }}>
          Through the Lens
        </h2>

        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden rounded-sm">
            <div className="flex">
              {slides.map((slide, i) => (
                <div
                  key={slide.alt}
                  className="flex-[0_0_85%] md:flex-[0_0_70%] min-w-0 pl-4 first:pl-0 transition-opacity duration-500"
                  style={{ opacity: selectedIndex === i ? 1 : 0.4 }}
                >
                  <div className="relative h-[70vh] md:h-[75vh] flex items-center justify-center overflow-hidden rounded-sm bg-black/20">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <p className="text-white/90 text-sm tracking-[0.15em] uppercase font-medium mix-blend-difference">
                        {slide.caption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`h-[2px] transition-all duration-300 ${
                    selectedIndex === i ? "w-8 bg-primary" : "w-4 bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => emblaApi?.scrollPrev()}
                disabled={!canScrollPrev}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-secondary transition-colors duration-200 disabled:opacity-30 active:scale-95"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => emblaApi?.scrollNext()}
                disabled={!canScrollNext}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-secondary transition-colors duration-200 disabled:opacity-30 active:scale-95"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSlider;

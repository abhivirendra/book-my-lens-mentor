import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-mentor.jpg";
import { Camera, Phone } from "lucide-react";

const HeroSection = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-end grain-overlay overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Abhishek Virendra Photography mentoring session"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-[0_1px_3px_hsl(0,0%,0%/0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center gap-2">
          <Camera className="w-5 h-5 text-primary" />
          <span className="font-display text-lg tracking-tight text-foreground">AV Photography</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#services" className="hidden md:block text-foreground/70 text-sm hover:text-foreground transition-colors tracking-wide">Services</a>
          <a href="#portfolio" className="hidden md:block text-foreground/70 text-sm hover:text-foreground transition-colors tracking-wide">Work</a>
          <a href="#booking" className="hidden md:block text-foreground/70 text-sm hover:text-foreground transition-colors tracking-wide">Contact</a>
          <a href="tel:+919606766511" className="hidden md:flex items-center gap-2 text-foreground/70 text-sm hover:text-foreground transition-colors">
            <Phone className="w-4 h-4" />
            +91 96067 66511
          </a>
          <button
            onClick={scrollToBooking}
            className="bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium tracking-wide uppercase hover:opacity-90 transition-opacity active:scale-[0.97]"
          >
            Book Now
          </button>
        </div>
      </nav>

      <div className="relative z-10 px-6 md:px-12 pb-16 md:pb-24 max-w-3xl animate-fade-up">
        <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-4">
          Abhishek Virendra Photography
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-balance mb-6">
          A Lay Man Approach <em className="font-normal">Towards Photography</em>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed mb-8">
          Learn photography the way it was meant to be learned — simply, passionately, brilliantly.
        </p>
        <button
          onClick={scrollToBooking}
          className="bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-[0.15em] uppercase hover:opacity-90 transition-opacity active:scale-[0.97]"
        >
          Get a Chance to Work With Me
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

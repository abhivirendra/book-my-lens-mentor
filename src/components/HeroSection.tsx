import heroImage from "@/assets/hero-mentor.jpg";
import { Camera } from "lucide-react";

const HeroSection = () => {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-end grain-overlay overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Photography mentoring session in studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
      </div>

      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-12 py-6">
        <div className="flex items-center gap-2">
          <Camera className="w-5 h-5 text-primary" />
          <span className="font-display text-lg tracking-tight">Mentor</span>
        </div>
        <button
          onClick={scrollToBooking}
          className="bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium tracking-wide uppercase hover:opacity-90 transition-opacity active:scale-[0.97]"
        >
          Book Now
        </button>
      </nav>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 pb-16 md:pb-24 max-w-3xl animate-fade-up">
        <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-4">
          9 Years of Mentoring
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-balance mb-6">
          See the world differently. <em className="font-normal">I'll show you how.</em>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed mb-8">
          Limited spots available for one-on-one mentorship. Transform your eye, your craft, and your career.
        </p>
        <button
          onClick={scrollToBooking}
          className="bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-[0.15em] uppercase hover:opacity-90 transition-opacity active:scale-[0.97]"
        >
          Secure Your Spot
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

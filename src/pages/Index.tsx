import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PhilosophySection />
      <PortfolioSection />
      <TestimonialsSection />
      <BookingSection />
      <footer className="py-8 px-6 text-center text-muted-foreground text-xs tracking-wide border-t border-border">
        © {new Date().getFullYear()} — Photography Mentorship. All rights reserved.
      </footer>
    </main>
  );
};

export default Index;

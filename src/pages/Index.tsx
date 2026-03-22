import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import PortfolioSlider from "@/components/PortfolioSlider";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PhilosophySection />
      <PortfolioSlider />
      <PortfolioSection />
      <TestimonialsSection />
      <BookingSection />
      <footer className="py-8 px-6 text-center text-muted-foreground text-xs tracking-wide border-t border-border">
        <p>© {new Date().getFullYear()} Abhishek Virendra Photography. All rights reserved.</p>
        <p className="mt-1">A Lay Man Approach Towards Photography™</p>
      </footer>
    </main>
  );
};

export default Index;

import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import PortfolioSlider from "@/components/PortfolioSlider";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";

const Index = () => {
  const whatsappUrl = "https://wa.me/919606766511?text=Hi%20Abhishek%2C%20I%27m%20interested%20in%20your%20photography%20services.";

  return (
    <main className="min-h-screen">
      <HeroSection />
      <PhilosophySection />
      <PortfolioSlider />
      <div id="services"><ServicesSection /></div>
      <div id="portfolio"><PortfolioSection /></div>
      <TestimonialsSection />
      <div id="booking"><BookingSection /></div>
      <footer className="py-8 px-6 text-center text-muted-foreground text-xs tracking-wide border-t border-border">
        <p>© {new Date().getFullYear()} Abhishek Virendra Photography. All rights reserved.</p>
        <p className="mt-1">A Lay Man Approach Towards Photography™</p>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
        {/* Workshop for Employees */}
        <a
          href="https://drive.google.com/drive/folders/1yHN05InALlqZPjljhRlq8nwkQ7wnm_6m?usp=share_link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Photography Workshop for Employees"
          className="group relative w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 hover:scale-105"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <span className="absolute right-16 whitespace-nowrap bg-card text-foreground text-xs font-medium px-3 py-1.5 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-border">
            Workshop for Employees
          </span>
        </a>

        {/* Workshop for Kids */}
        <a
          href="https://drive.google.com/drive/folders/1RURhWy7xqeTXHYGJNcEiJFfcFSfnR09J?usp=share_link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Photography Workshop for Kids"
          className="group relative w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 hover:scale-105"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
          </svg>
          <span className="absolute right-16 whitespace-nowrap bg-card text-foreground text-xs font-medium px-3 py-1.5 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-border">
            Workshop for Kids
          </span>
        </a>

        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 hover:scale-105"
        >
          <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
            <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.914 15.914 0 0016.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.302 22.602c-.388 1.092-1.938 1.998-3.168 2.264-.842.178-1.94.32-5.638-1.212-4.734-1.96-7.776-6.756-8.012-7.07-.228-.314-1.904-2.536-1.904-4.836s1.204-3.432 1.632-3.902c.428-.47.936-.588 1.248-.588.312 0 .624.002.898.016.288.014.674-.11 1.054.804.388.936 1.326 3.236 1.442 3.47.116.234.194.508.038.82-.156.314-.234.508-.468.782-.234.274-.492.612-.702.822-.234.234-.478.488-.206.958.274.47 1.216 2.006 2.61 3.25 1.792 1.598 3.302 2.094 3.772 2.328.47.234.744.196 1.018-.118.274-.314 1.17-1.366 1.482-1.836.312-.47.624-.39 1.054-.234.43.156 2.728 1.288 3.196 1.522.47.234.782.352.898.546.116.196.116 1.13-.272 2.222z"/>
          </svg>
        </a>
      </div>
    </main>
  );
};

export default Index;

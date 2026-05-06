import { Phone } from "lucide-react";

const BookMyShowDangler = () => {
  const phone = "9606766511";

  return (
    <div className="fixed top-16 right-6 md:right-24 z-40 pointer-events-none select-none">
      {/* Rope */}
      <div
        className="mx-auto w-[2px] bg-gradient-to-b from-foreground/40 to-foreground/10"
        style={{ height: "48px" }}
      />
      {/* Knot */}
      <div className="mx-auto w-2 h-2 -mt-1 rounded-full bg-foreground/40" />

      {/* Card swings from top */}
      <div className="origin-top animate-swing pointer-events-auto">
        <a
          href={`tel:+91${phone}`}
          aria-label="Book your photographer in one call"
          className="mt-1 block w-[180px] md:w-[210px] bg-card border border-border rounded-md shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
        >
          <div className="bg-[hsl(var(--primary))] text-primary-foreground px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] uppercase flex items-center justify-between">
            <span>book photographer</span>
            <span className="text-[9px] opacity-80">LIVE</span>
          </div>
          <div className="p-3">
            <p className="font-display text-sm md:text-[15px] leading-tight text-foreground mb-2 text-center">
              Your search ends here
            </p>
            <div className="flex items-center justify-center gap-1.5 text-[12px] text-foreground mb-2.5">
              <Phone className="w-3.5 h-3.5 text-primary" />
              <span className="font-semibold tracking-wide">+91 {phone}</span>
            </div>
            <div className="bg-primary/10 text-primary text-[10px] font-semibold tracking-wide uppercase text-center py-1.5 rounded-sm">
              Call Now →
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default BookMyShowDangler;

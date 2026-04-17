import { Calendar, MapPin, X } from "lucide-react";
import { useState } from "react";

const BookMyShowDangler = () => {
  const [open, setOpen] = useState(false);
  const eventUrl = "https://in.bookmyshow.com/";

  if (!open === false && open) {
    // placeholder
  }

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
          href={eventUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book workshop on BookMyShow - 3rd May at Hyatt"
          className="mt-1 block w-[170px] md:w-[200px] bg-card border border-border rounded-md shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
        >
          <div className="bg-[hsl(var(--primary))] text-primary-foreground px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] uppercase flex items-center justify-between">
            <span>BookMyShow</span>
            <span className="text-[9px] opacity-80">LIVE</span>
          </div>
          <div className="p-3">
            <p className="font-display text-sm md:text-base leading-tight text-foreground mb-2">
              Photography Workshop
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground mb-1">
              <Calendar className="w-3 h-3 text-primary" />
              <span className="font-medium">3rd May</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground mb-2.5">
              <MapPin className="w-3 h-3 text-primary" />
              <span>Hyatt, Hyderabad</span>
            </div>
            <div className="bg-primary/10 text-primary text-[10px] font-semibold tracking-wide uppercase text-center py-1.5 rounded-sm">
              Book Tickets →
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default BookMyShowDangler;

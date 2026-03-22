import { useState } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";
import { ArrowRight, Mail, Phone, MapPin, Instagram } from "lucide-react";
import { toast } from "sonner";

const BookingSection = () => {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSending(true);
    const subject = encodeURIComponent("Photography Inquiry from " + form.name.trim());
    const body = encodeURIComponent(
      `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\n${form.message.trim()}`
    );
    window.location.href = `mailto:abhishekvirendra@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      toast.success("Opening your email client...");
    }, 1000);
  };

  return (
    <section id="booking" className="py-24 md:py-32 px-6 md:px-12 bg-card grain-overlay">
      <div
        ref={ref}
        className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20"
      >
        {/* Left: Contact Info */}
        <div>
          <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.05] tracking-tight mb-5 text-balance">
            Let's Create Something Beautiful
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-md">
            Whether you're looking for a stunning portrait session, event coverage, or creative mentorship — I'd love to hear from you.
          </p>

          <div className="space-y-8">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "abhishekvirendra@gmail.com",
                href: "mailto:abhishekvirendra@gmail.com",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "+91 96067 66511",
                href: "tel:+919606766511",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "Koramangala, Bangalore, India",
              },
              {
                icon: Instagram,
                label: "Instagram",
                value: "@av.fotography",
                href: "https://instagram.com/av.fotography",
              },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-primary text-xs font-medium tracking-[0.15em] uppercase mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Inquiry Form */}
        <div className="bg-secondary/40 border border-border p-8 md:p-10 rounded-sm">
          <h3 className="font-display text-2xl font-bold mb-8 tracking-tight">
            Send an Inquiry
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring rounded-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring rounded-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                placeholder="Tell me about your photography needs..."
                maxLength={1000}
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring rounded-sm resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-[0.15em] uppercase hover:opacity-90 transition-opacity active:scale-[0.97] disabled:opacity-60 rounded-sm"
            >
              {sending ? "Sending..." : "Send Inquiry"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;

import { Github, Linkedin, ArrowDown } from "lucide-react";

const navLinks = [
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
  { label: "Architecture", href: "#architecture" },
  { label: "Contact", href: "#contact" },
];

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-14 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_20%,transparent_100%)]" />

      <div className="container relative">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-xs text-muted-foreground tracking-wide">
              Lagos, Nigeria
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground tracking-tighter leading-[0.95] mb-6">
            Welcome to My
            <br />
            Engineering Space<span className="text-gradient">.</span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 max-w-xl">
            I build scalable backend systems, production APIs, and data-driven platforms.
          </p>
          <p className="text-sm text-muted-foreground/70 leading-relaxed mb-10 max-w-xl">
            Most of my work lives behind the scenes — powering applications, designing architectures, 
            and making systems reliable at scale.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-8">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all duration-200"
            >
              Peep My Work
              <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
            </a>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-3 text-sm text-muted-foreground hover:text-foreground rounded-lg border border-border/50 hover:border-border hover:bg-accent transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://github.com/Dera2k"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/chidera-nwogu-93944a258/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { Github, Linkedin, ArrowDown, ArrowUpRight } from "lucide-react";

import heroImage from "../assets/dera-hero.png";

const navLinks = [
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
  { label: "Architecture", href: "#architecture" },
  { label: "Contact", href: "#contact" },
];

const HeroSection = () => {

  return (
    <section className="min-h-[min(900px,100svh)] flex items-center pt-20 pb-12 relative overflow-hidden border-b border-border/70">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_20%,transparent_100%)]" />

      {/* Hero image — positioned on the right, bleeds into background */}
      <div className="absolute right-0 top-16 bottom-0 w-[46%] hidden lg:block">
        <div className="relative h-full w-full">
          <img
            src={heroImage}
            alt="Chidera Nwogu"
            className="h-full w-full object-cover object-top grayscale contrast-110 dark:brightness-90"
          />
          {/* Left fade — blends image into the content area */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/45 to-transparent" />
          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/10" />
          <div className="absolute inset-x-8 bottom-8 flex items-center justify-between border-y border-border/50 py-2 font-mono text-[10px] uppercase text-muted-foreground"><span>Portrait / 2026</span><span>Lagos, NG</span></div>
        </div>
      </div>

      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl lg:max-w-[62%]">
          <div className="font-mono text-[11px] text-primary mb-8">0x01 / INTRODUCTION</div>
          <div className="flex items-center gap-3 mb-6">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-primary" /></span>
            <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.18em]">
              Available for engineering opportunities
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-[4.5rem] font-bold uppercase leading-[1.02] mb-7 animate-[heroFadeIn_1.2s_ease-out_both]">
            <span className="block text-foreground">Chidera</span><span className="block shimmer-text">Nwogu_</span>
          </h1>

          <div className="animate-[heroFadeIn_1s_ease-out_0.6s_both]">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 max-w-xl">
              Backend software engineer building scalable systems, production APIs, and data-driven platforms.
            </p>
            <p className="text-sm text-muted-foreground/70 leading-relaxed mb-10 max-w-xl">
              Most of my work lives behind the scenes — powering applications, designing architectures,
              and making systems reliable at scale.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-8">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-5 py-3 font-mono text-xs font-bold uppercase bg-primary text-primary-foreground hover:opacity-90 transition-all duration-200"
            >
              Peep My Work
              <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
            </a>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-3 font-mono text-[11px] uppercase text-muted-foreground hover:text-primary border border-border hover:border-primary transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-5 pt-2 font-mono text-[11px] uppercase">
            <a
              href="https://github.com/Dera2k"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} /> GitHub <ArrowUpRight size={12} />
            </a>
            <a
              href="https://www.linkedin.com/in/chidera-nwogu-93944a258/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} /> LinkedIn <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile hero image — shown below content on smaller screens */}
      <div className="lg:hidden absolute bottom-0 right-0 w-2/3 h-1/2 opacity-20 pointer-events-none">
        <img
          src={heroImage}
          alt=""
          className="h-full w-full object-cover object-top grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
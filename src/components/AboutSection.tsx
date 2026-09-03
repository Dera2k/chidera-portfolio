import SectionHeader from "./SectionHeader";
import aboutImage from "../assets/dera-about.png";

const AboutSection = () => {
  return (
    <section id="about" className="section-shell">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-10 lg:gap-16">
          <SectionHeader label="About" index="02" title="The person behind the systems" />
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(240px,0.75fr)_1.25fr] gap-10 lg:gap-16 items-center">
            {/* Image - left side */}
            <div className="relative w-full max-w-[340px] mx-auto lg:mx-0">
              <div className="absolute -left-4 -top-4 font-mono text-[10px] text-primary">FIG. 02 — PROFILE</div>
              <div className="relative overflow-hidden aspect-[3/4] border border-border blueprint-surface">
                <img
                  src={aboutImage}
                  alt="Chidera Nwogu"
                  className="w-full h-full object-cover grayscale contrast-110 dark:opacity-90 opacity-95"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background via-background/40 to-transparent hidden lg:block" />
                <div className="absolute left-4 top-4 h-8 w-8 border-l border-t border-primary" />
                <div className="absolute right-4 bottom-4 h-8 w-8 border-r border-b border-primary" />
              </div>
            </div>

            {/* Text - right side */}
            <div className="space-y-5 text-[15px] text-muted-foreground leading-[1.85]">
              <p className="font-display text-xl sm:text-2xl font-bold text-foreground leading-snug">
                I build the invisible foundations that make products feel effortless.
              </p>
              <p>
                <span className="text-foreground font-medium">I am</span> a backend-focused
                software engineer with <span className="text-foreground">3+ years</span> of experience
                building and maintaining production APIs and scalable backend systems.
              </p>

              <p>
                My work focuses on{" "}
                <span className="text-foreground">system architecture</span>,{" "}
                <span className="text-foreground">backend performance</span>,{" "}
                <span className="text-foreground">database design</span> and{" "}
                <span className="text-foreground">distributed systems</span> — building platforms that
                scale.
              </p>

              <p>
                Beyond building systems, I have mentored and taught aspiring developers
                adopt best practices in fullstack engineering, secure coding and production-ready development.
              </p>
              <p>
                I care about maintainable codebases, clear documentation and systems that are easy
                to reason about. Whether designing from scratch or improving existing services — the focus
                is always on production-ready, well-architected work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
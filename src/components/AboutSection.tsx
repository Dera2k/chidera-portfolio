import SectionHeader from "./SectionHeader";
import aboutImage from "../assets/dera-about.png.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-28 border-t border-border/50 px-4 sm:px-6 lg:px-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
          <SectionHeader label="About" />
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-start">
            {/* Image - left side */}
            <div className="relative w-full max-w-[280px] mx-auto lg:mx-0">
              <div className="relative rounded-xl overflow-hidden aspect-[3/4]">
                <img
                  src={aboutImage}
                  alt="Chidera Nwogu"
                  className="w-full h-full object-cover grayscale dark:opacity-90 opacity-95"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background via-background/40 to-transparent hidden lg:block" />
                <div className="absolute inset-0 rounded-xl ring-1 ring-border/20" />
              </div>
            </div>

            {/* Text - right side */}
            <div className="space-y-5 text-[15px] text-muted-foreground leading-[1.8]">
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
                <span className="text-foreground">distributed systems</span>  building platforms that 
                scale
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

import SectionHeader from "./SectionHeader";

const AboutSection = () => {
  return (
    <section id="about" className="py-28 border-t border-border/50 px-4 sm:px-6 lg:px-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
          <SectionHeader label="About" />
          <div className="max-w-xl space-y-5 text-[15px] text-muted-foreground leading-[1.8]">
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
    </section>
  );
};

export default AboutSection;

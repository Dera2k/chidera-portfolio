import SectionHeader from "./SectionHeader";

const AboutSection = () => {
  return (
    <section id="about" className="py-28 border-t border-border/50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
          <SectionHeader label="About" />
          <div className="max-w-xl space-y-5 text-[15px] text-muted-foreground leading-[1.8]">
            <p>
              <span className="text-foreground font-medium">Chidera Nwogu</span> is a backend-focused 
              software engineer with <span className="text-foreground">3+ years</span> of experience 
              building and maintaining production APIs and scalable backend systems.
            </p>
            <p>
              His work focuses on{" "}
              <span className="text-foreground">system architecture</span>,{" "}
              <span className="text-foreground">backend performance</span>,{" "}
              <span className="text-foreground">database design</span>, and{" "}
              <span className="text-foreground">distributed systems</span> — building platforms that 
              support large numbers of users and organizations while maintaining reliability at scale.
            </p>
            <p>
              Beyond building systems, Chidera actively mentors and teaches developers — helping teams 
              adopt best practices in backend engineering, secure coding, and production-ready development.
            </p>
            <p>
              He cares about maintainable codebases, clear documentation, and systems that are easy 
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

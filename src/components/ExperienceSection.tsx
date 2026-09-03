import SectionHeader from "./SectionHeader";

const experiences = [
  {
    company: "Freelance",
    role: "Software Engineer",
    period: "Jun 2026 – Present",
    responsibilities: [
      "Developing full-stack applications and backend systems for clients",
      "Currently building Talon — a personal habit tracker application",
    ],
  },
  {
    company: "Neocloud Technologies",
    role: "Software Engineer",
    period: "Jan 2025 – May 2026",
    responsibilities: [
      "Integrated Keycloak (SSO) and Splunk (log monitoring) into an existing HR system, improving security, observability and reliability across 30+ active cohorts",
      "Built and maintained client-facing web applications using PHP, Laravel and Vue.js, including frontend refinements to the company LMS and an outsourced inventory system",
      "Trained 50+ students in cybersecurity fundamentals and full-stack web development (MERN stack)",
    ],
  },
  {
    company: "NIIT",
    role: "Software Development Intern",
    period: "Jan 2023 – Dec 2023",
    responsibilities: [
      "Built an inventory management system for a client using MySQL, handling database design and backend logic",
      "Developed a web scraper as part of internal tooling work",
      "Gained hands-on experience with MySQL schema design, query optimization and database refinement",
      "Worked within a team using version control (Git) and collaborative development workflows",
    ],
  },
];

const EducationSection = () => (
  <div className="mt-12 border-t border-border pt-8">
    <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-10 lg:gap-16">
      <SectionHeader label="Education" />
      <div className="space-y-6">
        <div>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h4 className="font-display text-base font-bold uppercase text-foreground">
              Babcock University
            </h4>
            <span className="text-xs font-mono text-muted-foreground/60">2020 – 2024</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            B.Sc. (Hons) Computer Software Engineering · 2:1 (Upper Second Class)
          </p>
        </div>
      </div>
    </div>
  </div>
);

const CertificationsSection = () => (
  <div className="mt-10 border-t border-border pt-8">
    <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-10 lg:gap-16">
      <SectionHeader label="Certifications" />
      <ul className="space-y-2 text-sm text-muted-foreground font-mono">
        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary" /> CompTIA A+</li>
        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary" /> Certified Secure Computer User (CSCU)</li>
        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary" /> Oracle Database 12c</li>
        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary" /> Java SE OCA & OCP</li>
        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary" /> NYSC Certificate</li>
      </ul>
    </div>
  </div>
);

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-shell">
      <div className="container">
        <SectionHeader label="Professional_Log" index="06" title="Where I have shipped and taught" />
        <div className="mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-[160px_1fr] gap-10 lg:gap-16">
          <div />
          <div>
            {experiences.map((exp, index) => (
              <div key={exp.company} className="relative pl-8 pb-12 border-l border-border last:pb-0">
                <span className={`absolute -left-1.5 top-1.5 h-3 w-3 border ${index === 0 ? "border-primary bg-primary" : "border-border bg-background"}`} />
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                  <h3 className="font-display text-base font-bold uppercase text-foreground">{exp.company}</h3>
                  <span className="text-xs font-mono text-muted-foreground/60">{exp.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{exp.role}</p>
                <ul className="space-y-2">
                  {exp.responsibilities.map((r) => (
                    <li key={r} className="text-sm text-muted-foreground flex items-start gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/40 mt-2 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <EducationSection />
            <CertificationsSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
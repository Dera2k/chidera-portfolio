import SectionHeader from "./SectionHeader";

const categories = [
  {
    title: "Backend & Languages",
    items: ["Node.js", "TypeScript", "Python", "Express.js", "NestJS", "PHP", "Laravel"],
  },
  {
    title: "Frontend",
    items: ["React", "Vue", "Html & Css", "Tailwind"],
  },
  {
    title: "Databases & Data",
    items: ["PostgreSQL", "MySQL", "Redis", "Database Modelling"],
  },
  {
    title: "Messaging & Architecture",
    items: ["Apache Kafka", "Event-Driven Systems", "Data-Driven Systems", "REST API Architecture"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS (EC2, S3, DynamoDB, Lambda)", "Docker", "CI/CD Pipelines"],
  },
  {
    title: "Developer Tools",
    items: ["GitHub", "Swagger", "Postman", "Compodoc", "GitLab"],
  },
];

const TechStackSection = () => {
  return (
    <section id="stack" className="py-28 border-t border-border/50 px-4 sm:px-6 lg:px-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
          <SectionHeader label="Stack" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div key={cat.title}>
                <h3 className="text-[13px] font-medium text-foreground mb-4">
                  {cat.title}
                </h3>
                <ul className="space-y-2.5">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted-foreground font-mono flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
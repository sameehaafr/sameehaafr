const skills = [
  {
    name: "Next.js & React",
    description: "Building fast, accessible web apps with the App Router and server components.",
  },
  {
    name: "TypeScript",
    description: "Writing type-safe code across the frontend and backend.",
  },
  {
    name: "Design Systems",
    description: "Translating brand and UI ideas into reusable, consistent components.",
  },
  {
    name: "Tailwind CSS",
    description: "Rapidly styling interfaces with a utility-first workflow.",
  },
  {
    name: "APIs & Backends",
    description: "Designing and integrating REST/GraphQL APIs and databases.",
  },
  {
    name: "Product Thinking",
    description: "Balancing user needs, business goals, and technical constraints.",
  },
];

export function Skills() {
  return (
    <section id="skills" className="border-t border-border px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold text-foreground">
          Tools &amp; Skills
        </h2>
        <div className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.name}>
              <h3 className="text-base font-semibold text-foreground">
                {skill.name}
              </h3>
              <p className="mt-1 text-sm text-muted">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    title: "Project One",
    description: "A short description of what this project is and the problem it solves.",
    href: "#",
  },
  {
    title: "Project Two",
    description: "A short description of what this project is and the problem it solves.",
    href: "#",
  },
  {
    title: "Project Three",
    description: "A short description of what this project is and the problem it solves.",
    href: "#",
  },
];

export function Work() {
  return (
    <section id="work" className="border-t border-border px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold text-foreground">
          Selected Work
        </h2>
        <p className="mt-3 max-w-lg text-base text-muted">
          A few projects I&apos;ve designed and built recently.
        </p>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

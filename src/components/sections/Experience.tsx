const experience = [
  {
    company: "United Airlines",
    role: "Data Analyst",
    dates: "Jan 2025 — Present",
    bullets: [
      "Build Power BI dashboards to track seat inventory controls across domestic flights and their impact on revenue performance.",
      "Query and analyze competitor pricing and internal revenue trends in SQL to inform strategic domestic revenue decisions.",
    ],
  },
  {
    company: "SpaceX, Starlink",
    role: "Data Science Intern",
    dates: "May 2024 — Aug 2024",
    bullets: [
      "Automated an ETL pipeline with Python and DataHub to centralize precipitation data, cutting diagnostic time for dish performance issues by 30%.",
      "Led performance analysis for a dish hardware upgrade using SQL and dish metric dashboards.",
    ],
  },
  {
    company: "Honeywell Aerospace",
    role: "Software Engineering Intern",
    dates: "May 2023 — Aug 2023",
    bullets: [
      "Developed a multi-variate regression neural network for an internal flight analysis dashboard.",
      "Fine-tuned a Python-based LLM for text-to-SQL processing to improve defense asset search and management.",
    ],
  },
  {
    company: "TechNext",
    role: "Applied Science Intern",
    dates: "Jun 2022 — Sep 2022",
    bullets: [
      "Analyzed technology improvement rates for computing hardware using patent data with the CTO.",
      "Produced a research report on computing hardware trends that guided R&D and investment decisions.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="border-t border-border px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="flex items-center gap-2 text-3xl font-semibold text-foreground">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/stickers/blue-star-clay.png"
            alt=""
            className="w-6 -rotate-6 select-none"
          />
          Experience
        </h2>
        <div className="mt-12 space-y-10">
          {experience.map((job) => (
            <div key={job.company}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-base font-semibold text-foreground">
                  {job.role} · {job.company}
                </h3>
                <span className="text-sm text-muted">{job.dates}</span>
              </div>
              <ul className="mt-3 space-y-1.5">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="text-sm leading-relaxed text-muted"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

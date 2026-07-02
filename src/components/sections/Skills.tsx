import Image from "next/image";

const skills = [
  {
    name: "Data Analysis & BI",
    description: "SQL, Python, Power BI, Excel — dashboards, pipelines, and revenue analysis.",
  },
  {
    name: "Machine Learning",
    description: "scikit-learn, TensorFlow, PyTorch — regression, classification, and time series models.",
  },
  {
    name: "Software Engineering",
    description: "Docker, React, NestJS, Git — full-stack development and system tooling.",
  },
  {
    name: "Data Engineering & ETL",
    description: "DataHub, Metabase — automated pipelines and reporting for large-scale telemetry data.",
  },
  {
    name: "LLMs & NLP",
    description: "LangChain, OpenAI — fine-tuning and building applications on top of language models.",
  },
  {
    name: "Research",
    description: "Patent analysis, KPI forecasting, and predictive reporting on technology trends.",
  },
];

export function Skills() {
  return (
    <section id="skills" className="border-t border-border px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="flex items-center gap-2 text-3xl font-semibold text-foreground">
          <Image
            src="/stickers/blue-star-clay.png"
            alt=""
            width={24}
            height={23}
            style={{ height: "auto" }}
            className="-rotate-6 select-none"
          />
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

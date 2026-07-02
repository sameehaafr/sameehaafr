import Image from "next/image";
import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    title: "Research Paper Assistant",
    description:
      "A research tool built with LangChain and OpenAI to help decision-makers explore academic papers faster.",
    href: "https://research-workshop-final-7fcsjeiuy9kzcsnyektuxu.streamlit.app/",
  },
  {
    title: "LSTM Time Series Forecasting",
    description:
      "A forecasting app using an LSTM network to predict future values from historical data.",
    href: "https://lstm-tsf-v2.streamlit.app/",
  },
  {
    title: "SVM Tumor Classifier",
    description:
      "A classification model using Support Vector Machines to distinguish benign from malignant tumors.",
    href: "https://sameehaafr-svmpca.streamlit.app/",
  },
  {
    title: "Spotify Song Recommender",
    description:
      "A music recommendation system built with K-Nearest Neighbors to suggest songs based on audio features.",
    href: "https://sameehaafr-knnmusic.streamlit.app/",
  },
];

export function Work() {
  return (
    <section id="work" className="border-t border-border px-6 py-20">
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
          Selected Work
        </h2>
        <p className="mt-3 max-w-lg text-base text-muted">
          A few projects I&apos;ve designed and built recently.
        </p>
        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { BASE_PATH } from "@/lib/basePath";

const articles = [
  {
    title: "ANNs for Air Quality Assessment and Pollution Forecasting — Paper Overview",
    date: "Jan 2023",
    href: "https://medium.com/ml-purdue/anns-for-air-quality-assessment-and-pollution-forecasting-paper-overview-296019720be3",
  },
  {
    title: "Exploring the Role of Probability Distributions in Real-World Applications",
    date: "Jan 2023",
    href: "https://sameehaafr.medium.com/exploring-the-role-of-probability-distributions-in-real-world-applications-f86d1296918a",
  },
  {
    title: "What You Need to Know for Your ARIMA Time Series Project",
    date: "Aug 2022",
    href: "https://medium.com/towards-data-science/what-you-need-to-know-for-your-arima-time-series-project-804713b8f00d",
  },
  {
    title: "How Close are we to Memory Reading Technology? (Black Mirror Edition)",
    date: "Jun 2022",
    href: "https://medium.com/predict/how-close-are-we-to-memory-reading-technology-black-mirror-edition-5cc55c51bd51",
  },
  {
    title: "What's the Difference Between Bayesians and Frequentists?",
    date: "Apr 2022",
    href: "https://sameehaafr.medium.com/whats-the-difference-between-bayesians-and-frequentist-3e0c0e8a0489",
  },
  {
    title: "Using KNN Algorithm to Classify Spotify Songs into Playlists",
    date: "Dec 2020",
    href: "https://medium.com/towards-data-science/ml-step-by-step-using-knn-algorithm-to-classify-spotify-songs-into-playlists-8c7892428371",
  },
  {
    title: "Observing Differences between 80s/90s music and Modern Day Hip-Hop using Spotipy",
    date: "Sep 2020",
    href: "https://medium.com/towards-data-science/using-data-visualizations-to-understand-the-vast-shift-from-80s-90s-hip-hop-to-today-afa0f942685",
  },
];

export function Writing() {
  return (
    <section id="writing" className="border-t border-border px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="flex items-center gap-2 text-3xl font-semibold text-foreground">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${BASE_PATH}/stickers/blue-star-clay.png`}
            alt=""
            className="w-6 -rotate-6 select-none"
          />
          Writing
        </h2>
        <p className="mt-3 max-w-lg text-base text-muted">
          Notes and articles on analytics and machine learning.
        </p>
        <ul className="mt-10 divide-y divide-border">
          {articles.map((article) => (
            <li key={article.href}>
              <a
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-4 text-foreground transition-colors hover:text-accent"
              >
                <span className="text-base">{article.title}</span>
                <span className="text-sm text-muted">{article.date}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="border-t border-border px-6 py-20">
      <div className="mx-auto grid max-w-5xl items-start gap-14 md:grid-cols-2">
        <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-md border border-border">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm text-muted">Working photo</span>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-foreground">About</h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            I&apos;m a data analyst at United Airlines in Chicago, IL,
            where I build data-driven tools and dashboards for domestic
            revenue performance. I care about turning raw data into
            decisions — and about the design and code that gets me
            there.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            I hold a B.S. in Data Science and a B.S. in Applied
            Statistics from Purdue University (Dec 2024), and previously
            worked on data science and engineering teams at SpaceX
            Starlink, Honeywell Aerospace, and TechNext.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Outside of work, I write about analytics and machine
            learning, and explore creative hobbies on the side.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Hero() {
  return (
    <section className="px-6 pt-20 pb-16 md:pt-28">
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm text-muted">Hey, I&apos;m</p>
          <h1 className="mt-2 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Sameeha Afrulbasha
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            I design and build things for the web — part code, part
            craft. This is where I keep my projects, my process, and a
            little bit of personality.
          </p>
        </div>
        <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-md border border-border md:justify-self-end">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm text-muted">Portrait photo</span>
          </div>
        </div>
      </div>
    </section>
  );
}

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
          <h2 className="text-2xl font-semibold text-foreground">About</h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            I&apos;m a developer and designer who loves turning ideas into
            polished, usable products. My background spans full-stack
            engineering and visual design, and I care a lot about the
            details — type, color, and code that&apos;s built to last.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Outside of building things, you&apos;ll find me exploring new
            tools, sketching ideas, or rethinking how a product should
            feel rather than just how it should work.
          </p>
        </div>
      </div>
    </section>
  );
}

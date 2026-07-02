import Image from "next/image";

export function Hero() {
  return (
    <section className="px-6 pt-20 pb-16 md:pt-28">
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
        <div className="relative">
          <Image
            src="/stickers/blue-star-clay.png"
            alt=""
            width={34}
            height={34}
            className="absolute -top-3 -right-2 -rotate-12 select-none"
          />
          <p className="text-sm text-muted">Hey, I&apos;m</p>
          <h1 className="mt-2 text-5xl font-semibold leading-tight text-foreground sm:text-6xl">
            Sameeha Afrulbasha
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            Data Analyst at United Airlines. I build data-driven
            experiences, write about analytics, and explore creative
            hobbies outside of work.
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

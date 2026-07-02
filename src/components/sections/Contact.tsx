import { Button } from "@/components/Button";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
          Let&apos;s work together
        </h2>
        <p className="mt-4 text-base text-muted">
          Have a project in mind or just want to say hi? My inbox is
          always open.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="mailto:sameehaafr@gmail.com">
            sameehaafr@gmail.com
          </Button>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/Button";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sameeha-afrulbasha/" }
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
          Let&apos;s work together
        </h2>
        <p className="mt-4 text-base text-muted">
          Have a project in mind or just want to say hi? My inbox is
          always open.
        </p>
        <div className="mt-6 flex justify-center gap-6">
          {socials.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

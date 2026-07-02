import Image from "next/image";
import Link from "next/link";

export function ProjectCard({
  title,
  description,
  href,
  image,
}: {
  title: string;
  description: string;
  href: string;
  image?: string;
}) {
  return (
    <Link href={href} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm text-muted">{title}</span>
          </div>
        )}
      </div>
      <div className="pt-4">
        <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
          {title}
        </h3>
        <p className="mt-1 text-sm text-muted">{description}</p>
      </div>
    </Link>
  );
}

import Link from "next/link";

export function Button({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-block border-b border-foreground pb-0.5 font-medium text-foreground transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      {children}
    </Link>
  );
}

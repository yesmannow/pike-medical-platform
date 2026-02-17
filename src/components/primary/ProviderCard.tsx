import Image from "next/image";

type ProviderCardProps = {
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
  priority?: boolean;
};

export function ProviderCard({
  name,
  role,
  imageSrc,
  imageAlt,
  priority = false,
}: ProviderCardProps) {
  return (
    <article className="border-2 border-border bg-card overflow-hidden transition-all duration-200 hover:border-primary hover:shadow-md">
      <div className="relative aspect-[3/4] w-full bg-muted">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 280px"
          priority={priority}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold uppercase tracking-tight text-foreground">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </article>
  );
}

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t-2 border-border bg-background">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 py-8 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.28em] text-foreground">
          A Pike Medical Consultants Clinic
        </span>
        <Image
          src="/PMC-Suite-300x79.png"
          alt="Pike Medical Consultants"
          width={300}
          height={79}
        />
      </div>
    </footer>
  );
}

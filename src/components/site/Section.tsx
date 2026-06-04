import { cn } from "@/lib/utils";

export function Section({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={cn("py-12 sm:py-16 lg:py-20 xl:py-24 transition-colors duration-300", className)}>
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionTitle({ eyebrow, title, subtitle, center }: { eyebrow?: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <div className={cn("max-w-3xl mb-10 sm:mb-12 lg:mb-16", center && "mx-auto text-center")}>
      {eyebrow && <div className="text-orange font-semibold tracking-[0.2em] text-xs uppercase mb-2 sm:mb-3 inline-block relative after:absolute after:bottom-0 after:left-0 after:w-6 after:h-0.5 after:bg-orange/30 after:ml-1">{eyebrow}</div>}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-navy-deep leading-tight">{title}</h2>
      {subtitle && <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl">{subtitle}</p>}
    </div>
  );
}

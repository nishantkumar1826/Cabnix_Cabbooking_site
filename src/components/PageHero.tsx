export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="container-px mx-auto max-w-7xl pt-16 pb-4 md:pt-24">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">{eyebrow}</p>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-foreground md:text-6xl">{title}</h1>
        {subtitle && <p className="mt-5 text-lg text-muted-foreground">{subtitle}</p>}
      </div>
    </section>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { packages } from "@/lib/data";
import { PageHero } from "@/components/PageHero";
import { Check } from "lucide-react";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Travel Packages — Cabnix" },
      { name: "description", content: "Mountain, Honeymoon, Family, Adventure, Spiritual and Luxury packages across North India." },
    ],
  }),
  component: PackagesPage,
});

function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Packages"
        title="Journeys for every kind of traveler."
        subtitle="Six thoughtfully designed packages — each fully customizable to your taste, pace and budget."
      />
      <section className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((p) => (
            <article key={p.title} className="flex flex-col rounded-3xl bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
              {p.badge && <span className="mb-3 inline-flex w-fit rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent-foreground">{p.badge}</span>}
              <h3 className="font-display text-2xl font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.blurb}</p>
              <ul className="mt-5 space-y-2 text-sm text-foreground/80">
                {p.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2">
                    <Check size={16} className="mt-0.5 shrink-0 text-primary" /> {h}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-end justify-between border-t border-border pt-4">
                <div>
                  <p className="text-xs text-muted-foreground">{p.duration} · From</p>
                  <p className="font-display text-2xl font-semibold text-primary">{p.from}</p>
                </div>
                <Link to="/plan" className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                  Book
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

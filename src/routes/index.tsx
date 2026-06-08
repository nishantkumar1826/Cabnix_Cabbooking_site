import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { InquiryForm } from "@/components/InquiryForm";
import { DestinationCard } from "@/components/DestinationCard";
import { destinations, packages } from "@/lib/data";
import { Shield, Sparkles, Headset, BadgeCheck, Quote, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cabnix — Premium North India Travel & Tours" },
      { name: "description", content: "Discover curated luxury trips to Manali, Leh, Srinagar, Jaipur and more. Plan your perfect North India journey with Cabnix." },
      { property: "og:title", content: "Cabnix — Premium North India Travel" },
      { property: "og:description", content: "Curated luxury journeys across North India." },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = destinations.slice(0, 6);
  const featuredPackages = packages.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={hero} alt="Himalayan peaks at golden hour" width={1920} height={1080} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-background" />
        </div>
        <div className="container-px mx-auto max-w-7xl pt-20 pb-32 md:pt-32 md:pb-48">
          <div className="max-w-3xl text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-medium text-white backdrop-blur">
              <Sparkles size={14} className="text-accent" /> Handcrafted journeys since 2018
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              The North of India,<br />
              <span className="italic text-accent">unfolded slowly.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-white/85 md:text-lg">
              From Himalayan silences to royal palaces — Cabnix designs intimate, premium journeys for travelers who want more than a checklist.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/destinations" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-soft hover:opacity-95">
                Explore Destinations
              </Link>
              <Link to="/plan" className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20">
                Plan My Trip
              </Link>
            </div>
          </div>
        </div>

        {/* Floating inquiry card */}
        <div className="container-px mx-auto max-w-7xl">
          <div className="relative -mt-20 rounded-3xl border border-border bg-card p-6 shadow-card md:p-8">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="font-display text-xl font-semibold text-foreground md:text-2xl">Tell us where you'd like to go</h2>
                <p className="text-sm text-muted-foreground">A travel curator will design your itinerary within 24 hours.</p>
              </div>
              <BadgeCheck className="hidden text-primary md:block" />
            </div>
            <InquiryForm compact />
          </div>
        </div>
      </section>

      {/* FEATURED DESTINATIONS */}
      <Section
        eyebrow="Featured destinations"
        title="Where wonder finds you"
        subtitle="Six handpicked escapes our travelers love most this season."
        actionHref="/destinations"
        actionLabel="View all destinations"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((d) => <DestinationCard key={d.name} d={d} />)}
        </div>
      </Section>

      {/* WHY CHOOSE */}
      <section className="container-px mx-auto mt-24 max-w-7xl">
        <div className="rounded-3xl bg-primary px-6 py-14 text-primary-foreground md:px-12 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-accent">Why Cabnix</p>
              <h2 className="mt-3 font-display text-3xl font-semibold md:text-5xl">Travel, the way it should feel.</h2>
            </div>
            <p className="text-base text-primary-foreground/80">
              We don't sell trips — we design journeys. Every itinerary is built by humans who've stayed in the stays we recommend, walked the trails we suggest, and met the families who'll host you.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              { icon: Sparkles, title: "Handcrafted itineraries", text: "Every detail tailored to you — no templates, ever." },
              { icon: Shield, title: "Verified stays", text: "Only properties we've personally vetted make our list." },
              { icon: Headset, title: "24/7 on-trip support", text: "A real human, one ring away, anywhere you are." },
              { icon: BadgeCheck, title: "Transparent pricing", text: "What you see is what you pay. No hidden fees." },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                <f.icon className="text-accent" />
                <h3 className="mt-4 font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-1.5 text-sm text-primary-foreground/75">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR PACKAGES */}
      <Section
        eyebrow="Popular packages"
        title="Built around the way you travel"
        subtitle="From honeymoons to high-altitude expeditions."
        actionHref="/packages"
        actionLabel="See all packages"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {featuredPackages.map((p) => (
            <div key={p.title} className="flex flex-col rounded-3xl bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
              {p.badge && <span className="mb-3 inline-flex w-fit rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent-foreground">{p.badge}</span>}
              <h3 className="font-display text-2xl font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.blurb}</p>
              <ul className="mt-5 space-y-2 text-sm text-foreground/80">
                {p.highlights.map((h) => <li key={h} className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" /> {h}</li>)}
              </ul>
              <div className="mt-6 flex items-end justify-between border-t border-border pt-4">
                <div>
                  <p className="text-xs text-muted-foreground">From</p>
                  <p className="font-display text-xl font-semibold text-primary">{p.from}</p>
                </div>
                <Link to="/plan" className="text-sm font-semibold text-primary hover:underline">Plan trip →</Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section eyebrow="Loved by travelers" title="Quiet praise, loud journeys.">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { q: "The most thoughtful trip planning we've ever experienced. Every stay felt personal.", n: "Aarav & Meera", w: "Honeymoon to Udaipur" },
            { q: "From the moment we landed in Leh, everything just worked. Cabnix is the real deal.", n: "Karthik R.", w: "Leh Ladakh Expedition" },
            { q: "Travelling with my parents felt effortless. Their team is patient, prompt and genuine.", n: "Priya Singh", w: "Family Tour, Shimla" },
          ].map((t) => (
            <figure key={t.n} className="rounded-3xl bg-card p-7 shadow-card">
              <Quote className="text-accent" />
              <blockquote className="mt-4 text-base leading-relaxed text-foreground">"{t.q}"</blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <p className="font-semibold text-foreground">{t.n}</p>
                <p className="text-xs text-muted-foreground">{t.w}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="container-px mx-auto mt-24 max-w-7xl">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-10 text-center text-primary-foreground md:p-16">
          <h2 className="font-display text-3xl font-semibold md:text-5xl">Your next journey starts with a conversation.</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">Tell us your travel dates and dreams. We'll handle the rest.</p>
          <Link to="/plan" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground hover:opacity-95">
            Start Planning <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

function Section({ eyebrow, title, subtitle, actionHref, actionLabel, children }: { eyebrow: string; title: string; subtitle?: string; actionHref?: string; actionLabel?: string; children: React.ReactNode; }) {
  return (
    <section className="container-px mx-auto mt-24 max-w-7xl">
      <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">{eyebrow}</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-foreground md:text-5xl">{title}</h2>
          {subtitle && <p className="mt-2 max-w-2xl text-muted-foreground">{subtitle}</p>}
        </div>
        {actionHref && actionLabel && (
          <Link to={actionHref} className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
            {actionLabel} <ArrowRight size={14} />
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}

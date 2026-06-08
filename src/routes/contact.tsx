import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Cabnix" },
      { name: "description", content: "Get in touch with Cabnix — phone, email, WhatsApp. We respond within hours." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); toast.success("Message sent. We'll be in touch soon."); (e.target as HTMLFormElement).reset(); }, 700);
  }
  return (
    <>
      <PageHero eyebrow="Contact" title="We'd love to hear from you." subtitle="Reach out anytime — our team responds within a few hours." />
      <section className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <ContactCard icon={Phone} label="Call us" value="+91 97187 77716" href="tel:+919718777716" />
            <ContactCard icon={MessageCircle} label="WhatsApp" value="Chat with a travel curator" href="https://wa.me/919718777716" />
            <ContactCard icon={Mail} label="Email" value="cabnix01@gmail.com" href="mailto:cabnix01@gmail.com" />
            <ContactCard icon={MapPin} label="Visit" value="New Delhi, India" />
          </div>
          <form onSubmit={submit} className="space-y-4 rounded-3xl bg-card p-8 shadow-card lg:col-span-3">
            <h2 className="font-display text-2xl font-semibold text-foreground">Send us a message</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Field name="name" placeholder="Your name" required />
              <Field name="email" type="email" placeholder="Email address" required />
            </div>
            <Field name="subject" placeholder="Subject" required />
            <textarea name="message" placeholder="Tell us about your trip..." required rows={5} className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15" />
            <button disabled={sending} className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:bg-primary/90 disabled:opacity-60">
              {sending ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/15" />;
}

function ContactCard({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-4 rounded-3xl bg-card p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-soft">
      <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary"><Icon size={20} /></div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</p>
        <p className="mt-1 font-display text-lg text-foreground">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{content}</a> : content;
}

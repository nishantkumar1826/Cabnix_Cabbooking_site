import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-card">
      <div className="container-px mx-auto grid max-w-7xl gap-10 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display text-2xl font-semibold text-primary">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">C</span>
            Cabnix
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Crafting unforgettable journeys across North India — from Himalayan peaks to royal palaces.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/destinations" className="hover:text-primary">Destinations</Link></li>
            <li><Link to="/packages" className="hover:text-primary">Packages</Link></li>
            <li><Link to="/routes" className="hover:text-primary">Routes</Link></li>
            <li><Link to="/plan" className="hover:text-primary">Plan My Trip</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone size={14} className="text-primary" /> <a href="tel:+919718777716" className="hover:text-primary">+91 97187 77716</a></li>
            <li className="flex items-center gap-2"><Mail size={14} className="text-primary" /> <a href="mailto:cabnix01@gmail.com" className="hover:text-primary">cabnix01@gmail.com</a></li>
            <li className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> New Delhi, India</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Newsletter</h4>
          <p className="mt-4 text-sm text-muted-foreground">Travel inspiration, in your inbox.</p>
          <form className="mt-3 flex gap-2">
            <input type="email" placeholder="you@email.com" className="flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm outline-none focus:border-primary" />
            <button className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:opacity-90">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Cabnix. All rights reserved.</p>
          <p>Designed for travelers who want more than a ride.</p>
        </div>
      </div>
    </footer>
  );
}

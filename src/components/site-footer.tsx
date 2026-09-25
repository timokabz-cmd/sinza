import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className="min-w-0">
            <p className="font-display text-3xl font-medium tracking-tight">Sinza</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Feeding families in underserved communities and giving mothers
              business capital they repay slowly, on their own terms — across Uganda.
            </p>
            <div className="gold-rule mt-6" />
            <p className="mt-4 text-xs leading-relaxed text-primary-foreground/50">
              Every family a thread, every gift a gold stitch — woven into one
              strong cloth.
            </p>
          </div>
          <nav className="flex min-w-0 flex-col gap-3" aria-label="Footer">
            <p className="eyebrow !text-gold-soft">Explore</p>
            <Link to="/" hash="programmes" className="text-sm font-semibold text-primary-foreground/80 no-underline hover:text-gold-soft">
              Our programmes
            </Link>
            <Link to="/donate" className="text-sm font-semibold text-primary-foreground/80 no-underline hover:text-gold-soft">
              Donate
            </Link>
            <Link to="/apply" className="text-sm font-semibold text-primary-foreground/80 no-underline hover:text-gold-soft">
              Apply for support
            </Link>
            <Link to="/partner" className="text-sm font-semibold text-primary-foreground/80 no-underline hover:text-gold-soft">
              Partner &amp; volunteer
            </Link>
          </nav>
        </div>
        <div className="mt-10 border-t border-primary-foreground/15 pt-6">
          <p className="text-xs text-primary-foreground/50">
            Sinza · Country-wide, Uganda
          </p>
        </div>
      </div>
    </footer>
  );
}

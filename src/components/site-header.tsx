import { useState } from "react";
import { Link } from "@tanstack/react-router";

const NAV_LINKS = [
  { label: "Our work", to: "/", hash: "programmes" },
  { label: "Donate", to: "/donate" },
  { label: "Apply for support", to: "/apply" },
  { label: "Partner", to: "/partner" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:flex sm:justify-between sm:px-6 sm:py-4">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-2.5 no-underline"
          onClick={() => setOpen(false)}
        >
          <span
            aria-hidden="true"
            className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary"
            style={{
              backgroundImage:
                "linear-gradient(90deg, transparent 42%, var(--gold) 42% 58%, transparent 58%), linear-gradient(0deg, transparent 42%, var(--gold) 42% 58%, transparent 58%)",
              backgroundSize: "8px 8px",
            }}
          >
            <span className="font-display text-lg font-semibold text-primary-foreground">S</span>
          </span>
          <span className="truncate font-display text-2xl font-medium tracking-tight text-foreground">
            Sinza
          </span>
        </Link>

        <nav className="hidden items-center gap-1 sm:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              hash={link.hash}
              className="rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground no-underline transition-colors hover:bg-card hover:text-foreground"
              activeProps={{ className: "bg-card text-foreground" }}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/donate" className="btn-gold ml-2 !px-5 !py-2.5">
            Donate
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-card sm:hidden"
        >
          <span className="flex flex-col gap-1" aria-hidden="true">
            <span className={`h-0.5 w-5 rounded-full bg-foreground transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 rounded-full bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 rounded-full bg-foreground transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 pb-4 pt-2 sm:hidden" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              hash={link.hash}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-3 text-base font-semibold text-foreground no-underline hover:bg-card"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

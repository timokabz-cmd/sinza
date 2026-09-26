import { useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/brand/sinza-logo-compact.png";

type NavLink = { label: string; to: "/" | "/about" | "/programs" | "/impact" | "/donate" | "/apply" | "/partner" };

const NAV_LINKS: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Programs", to: "/programs" },
  { label: "Our Impact", to: "/impact" },
  { label: "Apply for Support", to: "/apply" },
  { label: "Partner With Us", to: "/partner" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-2.5 no-underline"
          onClick={() => setOpen(false)}
        >
          <img
            src={logo}
            alt="SINZA — Sustainable, Inclusive, Nutrimental, Zealous Approaches for Society Empowerment"
            className="h-9 w-auto shrink-0 sm:h-10"
          />
          <span className="hidden truncate font-display text-lg font-medium tracking-tight text-foreground md:inline">
            Community Empowerment Mission
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <Link to="/donate" className="btn-gold !hidden !px-5 !py-2.5 sm:!inline-flex">
            Donate
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-card"
          >
            <span className="flex flex-col gap-1" aria-hidden="true">
              <span className={`h-0.5 w-5 rounded-full bg-foreground transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`h-0.5 w-5 rounded-full bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 rounded-full bg-foreground transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 pb-4 pt-2 sm:px-6" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-3 text-base font-semibold text-foreground no-underline hover:bg-card"
              activeProps={{ className: "bg-card text-primary" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/donate"
            onClick={() => setOpen(false)}
            className="btn-gold mt-2 w-full sm:hidden"
          >
            Donate
          </Link>
        </nav>
      )}
    </header>
  );
}

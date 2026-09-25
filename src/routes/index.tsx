import { createFileRoute, Link } from "@tanstack/react-router";

import heroImg from "@/assets/hero.jpg";
import feedingImg from "@/assets/programme-feeding.jpg";
import capitalImg from "@/assets/programme-capital.jpg";
import storyImg from "@/assets/story-mother.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sinza — Feeding families, funding mothers across Uganda" },
      {
        name: "description",
        content:
          "Sinza feeds families in underserved communities across Uganda and gives mothers business capital they repay slowly, on their own terms.",
      },
      {
        property: "og:title",
        content: "Sinza — Feeding families, funding mothers across Uganda",
      },
      {
        property: "og:description",
        content:
          "Two commitments, one country-wide mission: full plates for families, and patient capital for mothers.",
      },
    ],
  }),
  component: Index,
});

const STATS = [
  { value: "12,000+", label: "Meals served every month" },
  { value: "640", label: "Mothers funded so far" },
  { value: "31", label: "Districts reached" },
  { value: "96%", label: "Capital repaid" },
];

const STEPS = [
  {
    n: "01",
    title: "A grant, not a debt trap",
    body: "A mother receives modest capital for her stall, farm or trade — with no crushing interest and no pressure to rush.",
  },
  {
    n: "02",
    title: "She grows, she repays slowly",
    body: "Repayments are small, flexible and community-guided. Family first, business second, instalments third.",
  },
  {
    n: "03",
    title: "The thread moves on",
    body: "As her capital returns, it funds the next mother. One gift keeps weaving through the community.",
  },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Ugandan mothers gathered under a tree at golden hour"
          width={1536}
          height={1024}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in oklab, var(--emerald-deep) 78%, transparent) 0%, color-mix(in oklab, var(--emerald-deep) 55%, transparent) 45%, color-mix(in oklab, var(--emerald-deep) 88%, transparent) 100%)",
          }}
        />
        <div className="mx-auto max-w-6xl px-4 pb-20 pt-20 text-primary-foreground sm:px-6 sm:pb-28 sm:pt-28">
          <div className="rise-in max-w-2xl">
            <p className="eyebrow">Country-wide · Uganda</p>
            <h1 className="mt-4 font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-6xl">
              We feed families.
              <br />
              We fund mothers.
            </h1>
            <div className="gold-rule mt-6" />
            <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
              Sinza puts full plates on tables in underserved communities, and
              hands mothers the modest capital to build a business they repay
              slowly — on their own terms.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/donate" className="btn-gold">
                Donate now
              </Link>
              <Link to="/apply" className="btn-outline-light">
                Apply for support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-4 py-12 sm:px-6 sm:grid-cols-4 sm:py-14">
          {STATS.map((stat) => (
            <div key={stat.label} className="px-2 text-center sm:px-4">
              <p className="font-display text-3xl font-medium tracking-tight text-gold-soft sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-foreground/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Programmes */}
      <section id="programmes" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">Our work</p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Two programmes, one cloth
          </h2>
          <div className="gold-rule mt-5" />
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Every family we serve is a thread. Together with our donors, we
            weave them into something strong enough to hold a community.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <article className="card-panel overflow-hidden">
            <img
              src={feedingImg}
              alt="A community kitchen serving hot meals to children"
              loading="lazy"
              width={1200}
              height={912}
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="p-6 sm:p-8">
              <p className="eyebrow">Programme 01</p>
              <h3 className="mt-2 font-display text-2xl font-medium tracking-tight">
                Family feeding
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Hot, balanced meals and staple rations for underserved
                households — delivered through community kitchens and partner
                volunteers across the country.
              </p>
              <Link
                to="/apply"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-[0.12em] text-primary no-underline hover:text-emerald-brand"
              >
                Request food support
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>

          <article className="card-panel overflow-hidden">
            <img
              src={capitalImg}
              alt="A mother at her market stall with fresh produce"
              loading="lazy"
              width={1200}
              height={912}
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="p-6 sm:p-8">
              <p className="eyebrow">Programme 02</p>
              <h3 className="mt-2 font-display text-2xl font-medium tracking-tight">
                Mothers' business capital
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A modest grant to start or grow a small business — repaid
                slowly, in small instalments, so the same fund lifts the next
                mother.
              </p>
              <Link
                to="/apply"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-[0.12em] text-primary no-underline hover:text-emerald-brand"
              >
                Apply for capital
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* How capital works */}
      <section className="bg-ivory-soft">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">How the capital works</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
              Patient by design
            </h2>
            <div className="gold-rule mt-5" />
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {STEPS.map((step) => (
              <div key={step.n} className="card-panel p-6 sm:p-8">
                <p className="font-display text-3xl font-medium text-gold">{step.n}</p>
                <h3 className="mt-3 font-display text-xl font-medium tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured story */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid items-center gap-8 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:gap-12">
          <img
            src={storyImg}
            alt="A smiling Ugandan mother holding a basket of fresh produce"
            loading="lazy"
            width={1024}
            height={1024}
            className="aspect-square w-full rounded-3xl object-cover shadow-xl"
          />
          <div className="min-w-0">
            <p className="eyebrow">From the field</p>
            <blockquote className="mt-4 font-display text-2xl font-medium italic leading-snug tracking-tight sm:text-3xl">
              "The seed of this stall came from a loan I repaid a little at a
              time, month by month. Now my children never go to school hungry."
            </blockquote>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
              Grace — market trader, programme II
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Stories like Grace's are why Sinza exists. Every repayment that
              flows back becomes the next mother's beginning.
            </p>
            <Link to="/donate" className="btn-primary mt-7">
              Fund the next mother
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA band */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <p className="eyebrow">Add your stitch</p>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-4xl">
            The gold thread is yours
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/70">
            Give a meal, fund a mother, or bring your organisation to the
            table. Every thread holds.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/donate" className="btn-gold">
              Donate
            </Link>
            <Link to="/apply" className="btn-outline-light">
              Apply for support
            </Link>
            <Link to="/partner" className="btn-outline-light">
              Partner with us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

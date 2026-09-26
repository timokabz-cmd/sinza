import { createFileRoute, Link } from "@tanstack/react-router";

import heroImg from "@/assets/hero.jpg";
import storyImg from "@/assets/story-mother.jpg";
import { PROGRAMS } from "@/lib/programs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SINZA Community Empowerment Mission — Improving Lives, Fulfilling Purpose" },
      {
        name: "description",
        content:
          "A women-led community organisation in Wakiso/Kampala, Uganda, empowering women, girls, widows and youth through skilling, health, education and economic support.",
      },
      { property: "og:title", content: "SINZA Community Empowerment Mission" },
      {
        property: "og:description",
        content: "Improving Lives, Fulfilling Purpose — women-led empowerment in Wakiso/Kampala, Uganda since 2019.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const STATS = [
  { value: "5,000+", label: "Women & girls empowered" },
  { value: "7", label: "Communities reached" },
  { value: "50+", label: "Women trained in financial literacy" },
  { value: "10", label: "Children on education bursaries" },
];

const FEATURED_PROGRAMS = PROGRAMS.slice(0, 3);

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Ugandan women gathered under a tree at golden hour"
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
            <p className="eyebrow-on-photo">Women-led · Wakiso/Kampala, Uganda</p>
            <h1 className="mt-4 font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-6xl">
              Improving lives.
              <br />
              Fulfilling purpose.
            </h1>
            <div className="gold-rule mt-6" />
            <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
              SINZA Community Empowerment Mission touches lives through
              transformational programmes that restore hope and promote
              healthy behaviours for body, mind and spirit.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/donate" className="btn-gold">Donate now</Link>
              <Link to="/apply" className="btn-outline-light">Apply for support</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-4 py-12 sm:grid-cols-4 sm:px-6 sm:py-14">
          {STATS.map((stat) => (
            <div key={stat.label} className="px-2 text-center sm:px-4">
              <p className="font-display text-3xl font-medium tracking-tight text-gold-soft sm:text-4xl">{stat.value}</p>
              <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-foreground/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who we are */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
              Empowering children, adolescents, widows and youth
            </h2>
            <div className="gold-rule mt-5" />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Registered on 12 November 2019 (Reg No: 80020002207879), SINZA is a
              women-led community-based organisation helping people develop
              healthier and more responsible lives.
            </p>
            <Link to="/about" className="mt-5 inline-block text-sm font-bold text-primary no-underline hover:text-gold">
              Read our full story →
            </Link>
          </div>
          <div className="card-panel p-6 sm:p-8">
            <p className="eyebrow">Our core values</p>
            <ul className="mt-4 grid grid-cols-2 gap-4">
              {["Integrity", "Caring", "Collaboration", "Godliness"].map((v) => (
                <li key={v} className="font-display text-xl font-medium tracking-tight">{v}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Featured programs */}
      <section className="bg-ivory-soft">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="eyebrow">Our core focus</p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">Five threads of change</h2>
              <div className="gold-rule mt-5" />
            </div>
            <Link to="/programs" className="hidden text-sm font-bold text-primary no-underline hover:text-gold sm:inline-block">
              View all programmes →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {FEATURED_PROGRAMS.map((program) => (
              <Link
                key={program.slug}
                to="/programs/$slug"
                params={{ slug: program.slug }}
                className="card-panel block p-6 no-underline sm:p-8"
              >
                <p className="font-display text-3xl font-medium text-gold">{program.number}</p>
                <h3 className="mt-3 font-display text-xl font-medium tracking-tight text-foreground">{program.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{program.shortBody}</p>
              </Link>
            ))}
          </div>
          <Link to="/programs" className="mt-8 inline-block text-sm font-bold text-primary no-underline hover:text-gold sm:hidden">
            View all programmes →
          </Link>
        </div>
      </section>

      {/* One story */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid items-center gap-8 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:gap-12">
          <img src={storyImg} alt="A smiling Ugandan mother" loading="lazy" width={1024} height={1024} className="aspect-square w-full rounded-3xl object-cover shadow-xl" />
          <div className="min-w-0">
            <p className="eyebrow">Why our work matters</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">Lived evidence</h2>
            <div className="gold-rule mt-5" />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              A young mother received brief nutrition education and healthy
              groceries — and her infant's health turned around within weeks.
              It's a small story, but it's one of dozens like it across the
              communities we serve.
            </p>
            <Link to="/impact" className="mt-5 inline-block text-sm font-bold text-primary no-underline hover:text-gold">
              See our full impact →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <p className="eyebrow">Upcoming · November 2026</p>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Community outreach in Matugga
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/70">
            Give, volunteer or partner with us to make our next outreach reach
            even more women and children.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/donate" className="btn-gold">Donate</Link>
            <Link to="/partner" className="btn-outline-light">Partner with us</Link>
          </div>
        </div>
      </section>
    </>
  );
}

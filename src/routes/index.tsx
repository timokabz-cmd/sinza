import { createFileRoute, Link } from "@tanstack/react-router";

import heroImg from "@/assets/outreach/corsu/corsu-05-team.jpg";
import corsuFeeding from "@/assets/outreach/corsu/corsu-02-feeding.jpg";
import corsuPlaytable from "@/assets/outreach/corsu/corsu-01-playtable.jpg";
import katoogoCommunity from "@/assets/outreach/katoogo/katoogo-04-community-gathering.jpg";
import katoogoRice from "@/assets/outreach/katoogo/katoogo-01-rice-sacks.jpg";
import sickleCellHome from "@/assets/outreach/sickle-cell/sicklecell-03-home-visit.jpg";
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

const GALLERY = [
  { src: katoogoCommunity, caption: "Katoogo, 2025", alt: "Families gathered at a Feed the Streets Foundation event in Katoogo" },
  { src: corsuFeeding, caption: "CoRSU Hospital", alt: "A SINZA volunteer shares food with a mother and her baby at CoRSU Hospital" },
  { src: sickleCellHome, caption: "Sickle Cell Foundation", alt: "A SINZA volunteer visiting a mother and her son, supported by the Sickle Cell Care Foundation" },
  { src: katoogoRice, caption: "Food distribution", alt: "Sacks of rice ready for distribution to families in Katoogo" },
];

/** Programs 1, 2 and 5 have a real outreach photo available for the thumbnail. */
const PROGRAM_THUMBS: Record<string, string> = {
  "women-and-girl-empowerment": sickleCellHome,
  "hiv-aids-prevention": corsuPlaytable,
  "education-and-economic-empowerment": katoogoRice,
};

function Index() {
  return (
    <>
      {/* Chapter 1 — Hero */}
      <section className="flex min-h-[100svh] flex-col justify-center bg-primary px-4 pb-16 pt-12 text-primary-foreground sm:px-6">
        <div className="mx-auto w-full max-w-2xl">
          <p className="font-display text-sm italic text-primary-foreground/55">Chapter 01 — Who we are</p>
          <h1 className="mt-4 font-display text-4xl font-medium leading-[1.02] tracking-tight sm:text-6xl">
            Improving lives.
            <br />
            Fulfilling purpose.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            SINZA Community Empowerment Mission touches lives through
            transformational programmes that restore hope across Wakiso and
            Kampala, Uganda.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/donate" className="btn-gold">Donate now</Link>
            <Link to="/apply" className="btn-outline-light">Apply for support</Link>
          </div>
        </div>
        <p className="mx-auto mt-16 w-full max-w-2xl text-[11px] font-bold uppercase tracking-[0.12em] text-primary-foreground/45">
          Scroll to continue ↓
        </p>
      </section>

      {/* Chapter 2 — Photo takeover */}
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Two SINZA outreach volunteers in branded vests at CoRSU Hospital"
          width={1080}
          height={720}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(0deg, color-mix(in oklab, var(--emerald-deep) 90%, transparent) 0%, color-mix(in oklab, var(--emerald-deep) 10%, transparent) 55%, transparent 75%)",
          }}
        />
        <div className="w-full px-4 pb-10 pt-24 text-primary-foreground sm:px-6 sm:pb-14">
          <div className="mx-auto max-w-2xl">
            <p className="font-display text-sm italic text-primary-foreground/75">Chapter 02 — Where we work</p>
            <h2 className="mt-2 max-w-[16ch] font-display text-2xl font-medium tracking-tight sm:text-4xl">
              CoRSU Hospital, Kampala
            </h2>
            <p className="mt-3 max-w-[36ch] text-sm leading-relaxed text-primary-foreground/90 sm:text-base">
              Alongside CoRSU's own staff, we spent the day with patients —
              sharing food, games and company on the ward.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 3 — Stats */}
      <section className="flex min-h-[100svh] flex-col justify-center px-4 py-20 sm:px-6">
        <div className="mx-auto w-full max-w-2xl">
          <p className="font-display text-sm italic text-accent">Chapter 03 — What it adds up to</p>
          <div className="mt-6 grid gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-4 border-b border-border pb-5">
                <span className="font-display text-4xl font-medium text-primary sm:text-5xl">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 4 — Who we are */}
      <section className="flex min-h-[100svh] flex-col justify-center bg-ivory-soft px-4 py-20 sm:px-6">
        <div className="mx-auto grid w-full max-w-2xl gap-10">
          <div>
            <p className="font-display text-sm italic text-accent">Chapter 04 — Who we are</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
              Empowering children, adolescents, widows and youth
            </h2>
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

      {/* Chapter 5 — Field notes gallery */}
      <section className="flex min-h-[100svh] flex-col justify-center bg-secondary px-4 py-20 sm:px-6">
        <div className="mx-auto w-full max-w-2xl">
          <p className="font-display text-sm italic text-accent">Chapter 05 — Recent outreach</p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">Field notes</h2>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {GALLERY.map((item) => (
              <div key={item.caption} className="relative overflow-hidden rounded-2xl">
                <img src={item.src} alt={item.alt} loading="lazy" className="h-40 w-full object-cover sm:h-48" />
                <div
                  className="absolute inset-x-0 bottom-0 px-3 py-2 text-[11px] font-bold text-white"
                  style={{ background: "linear-gradient(0deg, color-mix(in oklab, var(--emerald-deep) 85%, transparent), transparent)" }}
                >
                  {item.caption}
                </div>
              </div>
            ))}
          </div>
          <Link to="/impact" className="mt-6 inline-block text-sm font-bold text-primary no-underline hover:text-gold">
            See our full impact →
          </Link>
        </div>
      </section>

      {/* Chapter 6 — Programs */}
      <section className="flex min-h-[100svh] flex-col justify-center bg-accent px-4 py-20 text-primary-foreground sm:px-6">
        <div className="mx-auto w-full max-w-2xl">
          <p className="font-display text-sm italic text-primary-foreground/70">Chapter 06 — Our core focus</p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">Six threads of change</h2>
          <div className="mt-8 flex flex-col">
            {PROGRAMS.map((program) => {
              const thumb = PROGRAM_THUMBS[program.slug];
              return (
                <Link
                  key={program.slug}
                  to="/programs/$slug"
                  params={{ slug: program.slug }}
                  className="flex items-center gap-4 border-t border-primary-foreground/20 py-4 no-underline last:border-b"
                >
                  {thumb ? (
                    <img src={thumb} alt="" className="size-12 shrink-0 rounded-xl object-cover" />
                  ) : (
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/15 font-display text-sm italic text-primary-foreground/70">
                      {program.number}
                    </span>
                  )}
                  <div className="min-w-0">
                    <p className="font-display text-base font-semibold tracking-tight">{program.title}</p>
                    <p className="mt-0.5 text-xs text-primary-foreground/75">{program.shortBody}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Chapter 7 — Final CTA */}
      <section className="flex min-h-[100svh] flex-col items-center justify-center bg-foreground px-4 py-20 text-center text-background sm:px-6">
        <div className="mx-auto w-full max-w-xl">
          <p className="font-display text-sm italic text-background/60">Chapter 07 — Join the story</p>
          <h2 className="mx-auto mt-3 max-w-[16ch] font-display text-3xl font-medium italic tracking-tight sm:text-4xl">
            Every gift becomes a thread in someone's story
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/donate" className="btn-gold">Donate now</Link>
            <Link to="/partner" className="btn-outline-light">Partner with us</Link>
          </div>
        </div>
      </section>
    </>
  );
}

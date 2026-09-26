import { createFileRoute, Link } from "@tanstack/react-router";

import feedingImg from "@/assets/programme-feeding.jpg";
import capitalImg from "@/assets/programme-capital.jpg";
import storyImg from "@/assets/story-mother.jpg";
import corsuLead from "@/assets/outreach/corsu/corsu-01-playtable.jpg";
import sickleCellHomeVisit from "@/assets/outreach/sickle-cell/sicklecell-03-home-visit.jpg";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Our Impact — SINZA Community Empowerment Mission" },
      {
        name: "description",
        content:
          "Outreach history, stories from the field, and the partners who make SINZA's work possible across Uganda.",
      },
      { property: "og:title", content: "Our Impact — SINZA" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ImpactPage,
});

const STATS = [
  { value: "5,000+", label: "Women & girls empowered" },
  { value: "7", label: "Communities reached" },
  { value: "50+", label: "Women trained in financial literacy" },
  { value: "10", label: "Children on education bursaries" },
];

const STORIES = [
  {
    title: "Maternal health justice",
    body: "Losing Mama S after two years of post-C-section complications revealed gaps in postnatal information and timely referral. It drives our advocacy for women's health rights and our dialogue with district health authorities.",
  },
  {
    title: "Health navigation",
    body: "A woman with year-long eye pain accessed subsidised professional care at Mulago National Referral Hospital through our accompaniment — proof that information saves sight and lives.",
  },
  {
    title: "Early childhood nutrition",
    body: "Brief nutrition education and healthy groceries for a young mother improved her infant's health. Small support, big impact.",
  },
];

const OUTREACHES = [
  "BATWA Kisoro (2018)",
  "CoRSU Hospital (2021)",
  "Sickle Cell Care Foundation, Kampala (2021)",
  "ZOE Foundation Orphanage (2021)",
  "Kiryagonja Widows (2021)",
  "Katanga Slum (2022)",
  "Feed the Streets, Katoogo (2025)",
  "Ray of Hope (2025–2026)",
];

const PARTNERS = [
  "Mercy Outreach Missions (MOMS)",
  "Gender & Social Affairs Club — Victoria University",
  "Feed the Streets Foundation",
  "Ray of Hope Ministries",
  "CoRSU",
  "Mulago National Referral Hospital",
];

function ImpactPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-16 sm:px-6 sm:pb-16 sm:pt-20">
          <div className="rise-in max-w-2xl">
            <p className="eyebrow">Our impact</p>
            <h1 className="mt-3 font-display text-4xl font-medium tracking-tight sm:text-5xl">
              Hope, delivered in person
            </h1>
            <div className="gold-rule mt-5" />
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/75">
              Every number below is a household. Here's a look at where we've
              worked, the difference it made, and who stands alongside us.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 border-t border-primary-foreground/10 px-4 py-12 sm:grid-cols-4 sm:px-6 sm:py-14">
          {STATS.map((stat) => (
            <div key={stat.label} className="px-2 text-center sm:px-4">
              <p className="font-display text-3xl font-medium tracking-tight text-gold-soft sm:text-4xl">{stat.value}</p>
              <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-foreground/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent outreach */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">Recent outreach</p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">Where we've been</h2>
          <div className="gold-rule mt-5" />
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Link to="/programs/$slug" params={{ slug: "hiv-aids-prevention" }} className="card-panel block overflow-hidden no-underline">
            <img src={corsuLead} alt="SINZA volunteers and CoRSU staff playing with children at CoRSU Hospital" loading="lazy" width={1080} height={720} className="aspect-[4/3] w-full object-cover" />
            <div className="p-6 sm:p-8">
              <p className="eyebrow">CoRSU Hospital</p>
              <h3 className="mt-2 font-display text-2xl font-medium tracking-tight">A day of care and play</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Alongside CoRSU's own staff, we spent the day with patients —
                sharing food, games and company on the ward.
              </p>
              <p className="mt-4 text-sm font-bold text-primary">See the full gallery →</p>
            </div>
          </Link>
          <article className="card-panel overflow-hidden">
            <img src={sickleCellHomeVisit} alt="A SINZA volunteer visiting a mother and her son at their home, supported by the Sickle Cell Care Foundation" loading="lazy" width={486} height={1080} className="aspect-[4/3] w-full object-cover object-top" />
            <div className="p-6 sm:p-8">
              <p className="eyebrow">2021 · Kampala</p>
              <h3 className="mt-2 font-display text-2xl font-medium tracking-tight">Standing with sickle cell families</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Working with the Sickle Cell Care Foundation, we delivered food
                supplies to the foundation's Kampala office and visited families
                at home to check in on their children.
              </p>
            </div>
          </article>
          <article className="card-panel overflow-hidden">
            <img src={feedingImg} alt="Food distribution to families" loading="lazy" width={1200} height={912} className="aspect-[4/3] w-full object-cover" />
            <div className="p-6 sm:p-8">
              <p className="eyebrow">Nov 2025 · Katoogo</p>
              <h3 className="mt-2 font-display text-2xl font-medium tracking-tight">200kg of rice with Feed the Streets</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Together with Feed the Streets Foundation, we distributed 200kg of
                rice to families in Katoogo.
              </p>
            </div>
          </article>
          <article className="card-panel overflow-hidden">
            <img src={capitalImg} alt="A woman at her market stall" loading="lazy" width={1200} height={912} className="aspect-[4/3] w-full object-cover" />
            <div className="p-6 sm:p-8">
              <p className="eyebrow">May 2026 · Ray of Hope</p>
              <h3 className="mt-2 font-display text-2xl font-medium tracking-tight">110 women and children reached</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                In a single outreach we reached 110 women and children, gave
                interest-free loans to 4 women and paid school fees for 4 children.
              </p>
            </div>
          </article>
        </div>
        <div className="mt-10">
          <p className="eyebrow">Key outreaches</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {OUTREACHES.map((o) => (
              <li key={o} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold">{o}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stories */}
      <section className="bg-ivory-soft">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="grid items-start gap-8 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:gap-12">
            <img src={storyImg} alt="A smiling Ugandan mother" loading="lazy" width={1024} height={1024} className="aspect-square w-full rounded-3xl object-cover shadow-xl" />
            <div className="min-w-0">
              <p className="eyebrow">Why our work matters</p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">Lived evidence</h2>
              <div className="gold-rule mt-5" />
              <div className="mt-6 grid gap-6">
                {STORIES.map((s) => (
                  <div key={s.title}>
                    <h3 className="font-display text-xl font-medium tracking-tight">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                One graduate now works in Saudi Arabia supporting her family, and
                another young woman is at university studying Early Childhood
                Education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="eyebrow">Our partners</p>
        <h2 className="mt-3 font-display text-3xl font-medium tracking-tight">Many hands, one mission</h2>
        <div className="gold-rule mt-5" />
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {PARTNERS.map((p) => (
            <li key={p} className="card-panel p-5 font-semibold">{p}</li>
          ))}
        </ul>
      </section>

      {/* Upcoming CTA */}
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

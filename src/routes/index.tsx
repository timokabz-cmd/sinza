import { createFileRoute, Link } from "@tanstack/react-router";

import heroImg from "@/assets/hero.jpg";
import feedingImg from "@/assets/programme-feeding.jpg";
import capitalImg from "@/assets/programme-capital.jpg";
import storyImg from "@/assets/story-mother.jpg";

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

const FOCUS = [
  { title: "Women & Girl Child Empowerment", body: "Restoring hope and confidence so women and girls can lead healthier, purposeful lives." },
  { title: "HIV/AIDS Prevention", body: "Community education and dialogue that promote healthy behaviours for body, mind and spirit." },
  { title: "Gender-Based Violence Prevention", body: "Awareness, safe conversations and support for women and girls affected by violence." },
  { title: "Skilling, Training & Financial Literacy", body: "Entrepreneurship and money skills — plus interest-free loans that help women run their businesses." },
  { title: "Education Support & Economic Empowerment", body: "Full and half bursaries for vulnerable children, and pathways from school into work." },
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
            <p className="eyebrow">Women-led · Wakiso/Kampala, Uganda</p>
            <h1 className="mt-4 font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-6xl">
              Improving lives.
              <br />
              Fulfilling purpose.
            </h1>
            <div className="gold-rule mt-6" />
            <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
              SINZA Community Empowerment Mission touches lives through
              transformational programmes that restore hope and promote healthy
              behaviours for body, mind and spirit.
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

      {/* Focus areas */}
      <section id="programmes" className="scroll-mt-20 bg-ivory-soft">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Our core focus</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">Five threads of change</h2>
            <div className="gold-rule mt-5" />
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FOCUS.map((f, i) => (
              <div key={f.title} className="card-panel p-6 sm:p-8">
                <p className="font-display text-3xl font-medium text-gold">0{i + 1}</p>
                <h3 className="mt-3 font-display text-xl font-medium tracking-tight">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent outreach */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">Recent outreach</p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">Hope, delivered in person</h2>
          <div className="gold-rule mt-5" />
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
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

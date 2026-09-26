import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — SINZA Community Empowerment Mission" },
      {
        name: "description",
        content:
          "SINZA is a women-led community-based organisation registered in Uganda in 2019, helping women, girls, widows and youth build healthier, more responsible lives.",
      },
      { property: "og:title", content: "About Us — SINZA" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { title: "Integrity", body: "We do what we say, and we account honestly for every gift entrusted to us." },
  { title: "Caring", body: "Every person we work with is met with dignity, patience and genuine concern." },
  { title: "Collaboration", body: "We work through partnerships — with hospitals, churches, universities and other charities — rather than alone." },
  { title: "Godliness", body: "Our work is grounded in faith and a belief in the inherent worth of every person we serve." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-16 sm:px-6 sm:pb-16 sm:pt-20">
          <div className="rise-in max-w-2xl">
            <p className="eyebrow">About us</p>
            <h1 className="mt-3 font-display text-4xl font-medium tracking-tight sm:text-5xl">
              Sustainable, Inclusive, Nutrimental, Zealous
            </h1>
            <div className="gold-rule mt-5" />
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/75">
              SINZA — Approaches for Society Empowerment — is a women-led
              community-based organisation registered on 12 November 2019
              (Reg No: 80020002207879), working across Wakiso and Kampala,
              Uganda.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-3 font-display text-2xl font-medium tracking-tight sm:text-3xl">
              Enriching lives, one household at a time
            </h2>
            <div className="gold-rule mt-5" />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              SINZA was founded to help children, adolescents, widows and
              youth develop healthier and more responsible lives. What began
              as small, direct outreach to families in need has grown into
              five focused programmes spanning health, education, safety and
              economic empowerment — always led by the women closest to the
              communities we serve.
            </p>
          </div>
          <div className="card-panel p-6 sm:p-8">
            <p className="eyebrow">Our core values</p>
            <div className="mt-4 grid gap-5">
              {VALUES.map((v) => (
                <div key={v.title}>
                  <h3 className="font-display text-lg font-medium tracking-tight">{v.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory-soft">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6 sm:py-20">
          <p className="eyebrow">See it in action</p>
          <h2 className="mx-auto mt-3 max-w-xl font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Explore our five programmes
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/programs" className="btn-primary">
              View our programmes
            </Link>
            <Link to="/impact" className="btn-outline">
              See our impact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

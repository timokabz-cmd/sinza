import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProgramBySlug, PROGRAMS } from "@/lib/programs";

import feedingImg from "@/assets/programme-feeding.jpg";
import capitalImg from "@/assets/programme-capital.jpg";
import storyImg from "@/assets/story-mother.jpg";
import heroImg from "@/assets/hero.jpg";

const IMAGES = {
  feeding: feedingImg,
  capital: capitalImg,
  story: storyImg,
  hero: heroImg,
};

export const Route = createFileRoute("/programs/$slug")({
  loader: ({ params }) => {
    const program = getProgramBySlug(params.slug);
    if (!program) throw notFound();
    return program;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — SINZA` },
          { name: "description", content: loaderData.shortBody },
          { property: "og:title", content: `${loaderData.title} — SINZA` },
          { property: "og:description", content: loaderData.shortBody },
          { property: "og:type", content: "website" },
        ]
      : [],
  }),
  component: ProgramDetail,
});

function ProgramDetail() {
  const program = Route.useLoaderData();
  const image = program.imageKey ? IMAGES[program.imageKey] : null;
  const currentIndex = PROGRAMS.findIndex((p) => p.slug === program.slug);
  const next = PROGRAMS[(currentIndex + 1) % PROGRAMS.length];

  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-16 sm:px-6 sm:pb-16 sm:pt-20">
          <Link
            to="/programs"
            className="text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground/60 no-underline hover:text-gold-soft"
          >
            ← All programmes
          </Link>
          <div className="rise-in mt-4 max-w-2xl">
            <p className="eyebrow">Programme {program.number}</p>
            <h1 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
              {program.title}
            </h1>
            <div className="gold-rule mt-5" />
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/75">
              {program.heroBody}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className={`grid gap-10 ${image ? "sm:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]" : ""}`}>
          <div>
            <p className="eyebrow">How this works</p>
            <h2 className="mt-3 font-display text-2xl font-medium tracking-tight sm:text-3xl">
              What this programme includes
            </h2>
            <div className="gold-rule mt-5" />
            <ul className="mt-6 grid gap-4">
              {program.details.map((detail) => (
                <li key={detail} className="card-panel p-5 text-sm leading-relaxed text-muted-foreground">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
          {image && (
            <img
              src={image}
              alt={program.title}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-xl"
            />
          )}
        </div>

        <div className="mt-14 flex flex-wrap gap-3">
          <Link to="/donate" className="btn-gold">
            Support this programme
          </Link>
          <Link to="/apply" className="btn-outline">
            Apply for support
          </Link>
        </div>
      </section>

      <section className="bg-ivory-soft">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <p className="eyebrow">Next</p>
          <Link
            to="/programs/$slug"
            params={{ slug: next.slug }}
            className="mt-2 block font-display text-2xl font-medium tracking-tight text-foreground no-underline hover:text-primary sm:text-3xl"
          >
            {next.title} →
          </Link>
        </div>
      </section>
    </>
  );
            }

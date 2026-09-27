import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProgramBySlug, PROGRAMS, type GalleryImage } from "@/lib/programs";

import capitalImg from "@/assets/programme-capital.jpg";

import corsuPlaytable from "@/assets/outreach/corsu/corsu-01-playtable.jpg";
import corsuFeeding from "@/assets/outreach/corsu/corsu-02-feeding.jpg";
import corsuWardVisit from "@/assets/outreach/corsu/corsu-03-ward-visit.jpg";
import corsuPlayMat from "@/assets/outreach/corsu/corsu-04-play-mat.jpg";
import corsuTeam from "@/assets/outreach/corsu/corsu-05-team.jpg";
import katoogoRiceSacks from "@/assets/outreach/katoogo/katoogo-01-rice-sacks.jpg";
import sickleCellHomeVisit from "@/assets/outreach/sickle-cell/sicklecell-03-home-visit.jpg";

const IMAGES = {
  feeding: katoogoRiceSacks,
  capital: capitalImg,
  story: sickleCellHomeVisit,
};

/** Real outreach photo galleries, keyed by programme slug. */
const GALLERIES: Record<string, GalleryImage[]> = {
  "hiv-aids-prevention": [
    { src: corsuPlaytable, alt: "A CoRSU nurse and a SINZA volunteer play a board game with children at CoRSU Hospital" },
    { src: corsuFeeding, alt: "A SINZA volunteer shares food with a mother and her baby at CoRSU Hospital" },
    { src: corsuWardVisit, alt: "SINZA volunteers visiting a young patient in a CoRSU Hospital ward" },
    { src: corsuPlayMat, alt: "Children playing with toys on a mat during a SINZA visit to CoRSU Hospital" },
    { src: corsuTeam, alt: "Two SINZA outreach volunteers in branded vests at CoRSU Hospital" },
  ],
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
  const gallery = GALLERIES[program.slug];
  const image = !gallery && program.imageKey ? IMAGES[program.imageKey] : null;
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

      {gallery && (
        <section className="bg-ivory-soft">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <p className="eyebrow">In the field</p>
            <h2 className="mt-3 font-display text-2xl font-medium tracking-tight sm:text-3xl">
              {program.galleryCaption ?? "Photos from the field"}
            </h2>
            <div className="gold-rule mt-5" />
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
              {gallery.map((img, i) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className={`aspect-[4/3] w-full rounded-2xl object-cover shadow-md ${
                    i === 0 ? "col-span-2 aspect-[16/10] sm:col-span-2 sm:aspect-[4/3]" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

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

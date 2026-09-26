import { createFileRoute, Link } from "@tanstack/react-router";
import { PROGRAMS } from "@/lib/programs";

export const Route = createFileRoute("/programs/")({
  head: () => ({
    meta: [
      { title: "Our Programs — SINZA Community Empowerment Mission" },
      {
        name: "description",
        content:
          "Five threads of change: women & girl empowerment, HIV/AIDS prevention, gender-based violence prevention, skilling & financial literacy, and education support.",
      },
      { property: "og:title", content: "Our Programs — SINZA" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ProgramsIndex,
});

function ProgramsIndex() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-16 sm:px-6 sm:pb-16 sm:pt-20">
          <div className="rise-in max-w-2xl">
            <p className="eyebrow">What we do</p>
            <h1 className="mt-3 font-display text-4xl font-medium tracking-tight sm:text-5xl">
              Five threads of change
            </h1>
            <div className="gold-rule mt-5" />
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/75">
              Every programme we run traces back to one goal: helping women,
              girls, widows and youth in Wakiso and Kampala live healthier,
              more self-determined lives.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((program) => (
            <Link
              key={program.slug}
              to="/programs/$slug"
              params={{ slug: program.slug }}
              className="card-panel block p-6 no-underline sm:p-8"
            >
              <p className="font-display text-3xl font-medium text-gold">{program.number}</p>
              <h2 className="mt-3 font-display text-xl font-medium tracking-tight text-foreground">
                {program.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {program.shortBody}
              </p>
              <p className="mt-4 text-sm font-bold text-primary">Learn more →</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
        }

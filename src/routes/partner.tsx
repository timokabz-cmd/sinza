import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/partner")({
  head: () => ({
    meta: [
      { title: "Partner & volunteer — Sinza" },
      {
        name: "description",
        content:
          "Churches, businesses, schools and volunteers help Sinza feed families and fund mothers across Uganda. Bring skills, stock, time or funding.",
      },
      { property: "og:title", content: "Partner & volunteer — Sinza" },
      {
        property: "og:description",
        content: "Bring skills, stock, time or funding — weave with Sinza across Uganda.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PartnerPage,
});

const WAYS = [
  {
    title: "Corporate & business partners",
    body: "Sponsor a community kitchen, fund a cohort of mothers, or match your team's giving.",
  },
  {
    title: "Churches & community groups",
    body: "Host a food drive, identify families in need, or help us reach the last mile in your district.",
  },
  {
    title: "Volunteers & professionals",
    body: "Train mothers in bookkeeping, mentor a young business, or lend a hand at distribution days.",
  },
  {
    title: "In-kind support",
    body: "Maize flour, beans, cooking oil, equipment — practical stock that goes straight to families.",
  },
];

const FORMSPREE_ENDPOINT = "https://formspree.io/f/moevzzvo";

function PartnerPage() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(false);
    const formData = new FormData(event.currentTarget);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setSent(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-16 sm:px-6 sm:pb-16 sm:pt-20">
          <div className="rise-in max-w-2xl">
            <p className="eyebrow">Weave with us</p>
            <h1 className="mt-3 font-display text-4xl font-medium tracking-tight sm:text-5xl">
              Strong cloth takes many hands
            </h1>
            <div className="gold-rule mt-5" />
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/75">
              Sinza's work stretches across Uganda because partners and
              volunteers carry the thread beyond the loom — into kitchens,
              markets and towns we could not reach alone.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">Ways to weave</p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight">
            Choose your thread
          </h2>
          <div className="gold-rule mt-5" />
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {WAYS.map((way) => (
            <article key={way.title} className="card-panel p-6 sm:p-8">
              <h3 className="font-display text-xl font-medium tracking-tight">{way.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{way.body}</p>
            </article>
          ))}
        </div>

        {sent ? (
          <div className="card-panel mx-auto mt-12 max-w-xl p-8 text-center">
            <p className="eyebrow">Thank you</p>
            <h2 className="mt-3 font-display text-2xl font-medium tracking-tight">
              We'll be in touch
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Your interest means a lot. A member of our partnerships team will
              reach out to plan your first thread with us.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="card-panel mx-auto mt-12 max-w-xl p-6 sm:p-8">
            <p className="eyebrow">Start a conversation</p>
            <h2 className="mt-2 font-display text-2xl font-medium tracking-tight">
              Tell us how you'd like to help
            </h2>
            <div className="mt-6 grid gap-4">
              <label className="block">
                <span className="mb-1.5 block text-sm font-bold">Your name</span>
                <input required name="name" placeholder="Your name" className="field" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-bold">Organisation (optional)</span>
                <input name="org" placeholder="Company, church or group" className="field" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-bold">Email or phone</span>
                <input required name="contact" placeholder="you@example.com" className="field" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-bold">How would you like to be involved?</span>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Funding, volunteering, in-kind donations, something else…"
                  className="field resize-none"
                />
              </label>
            </div>
            {error && (
              <p className="mt-4 text-sm font-semibold text-destructive">
                Something went wrong sending your message. Please try again, or
                reach us directly at{" "}
                <a href="mailto:info@sinza.ug" className="underline">info@sinza.ug</a>.
              </p>
            )}
            <button type="submit" disabled={submitting} className="btn-gold mt-6 w-full disabled:opacity-60">
              {submitting ? "Sending…" : "Send message"}
            </button>
          </form>
        )}
      </section>
    </>
  );
              }

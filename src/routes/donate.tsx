import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Sinza" },
      {
        name: "description",
        content:
          "Give a week of meals for a family, a mother's first stock, or a full business grant. Every gift weaves into Uganda's communities.",
      },
      { property: "og:title", content: "Donate — Sinza" },
      {
        property: "og:description",
        content: "Fund meals for families and patient capital for mothers across Uganda.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: DonatePage,
});

const TIERS = [
  {
    amount: "UGX 50,000",
    title: "A week of meals",
    body: "Hot, balanced meals for one family for seven days.",
  },
  {
    amount: "UGX 250,000",
    title: "A mother's first stock",
    body: "Opening stock and equipment for a new market stall.",
  },
  {
    amount: "UGX 1,000,000",
    title: "A business, begun",
    body: "A full capital grant that launches a mother's enterprise.",
  },
  {
    amount: "Monthly",
    title: "A steady thread",
    body: "A recurring gift that keeps the loom running all year.",
  },
];

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xjykddko";

function DonatePage() {
  const [selected, setSelected] = useState(1);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(false);
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("giving_level", TIERS[selected]?.amount ?? "Not specified");
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
            <p className="eyebrow">Give</p>
            <h1 className="mt-3 font-display text-4xl font-medium tracking-tight sm:text-5xl">
              Add your gold thread
            </h1>
            <div className="gold-rule mt-5" />
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/75">
              Every gift becomes a thread woven into a family's story — a full
              plate this week, a business next month. Choose a level to begin.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TIERS.map((tier, index) => {
            const active = selected === index;
            return (
              <button
                key={tier.amount}
                type="button"
                onClick={() => setSelected(index)}
                aria-pressed={active}
                className={`rounded-3xl border p-6 text-left transition-all duration-300 ${
                  active
                    ? "border-gold bg-primary text-primary-foreground shadow-xl"
                    : "border-border bg-card hover:-translate-y-1 hover:border-gold"
                }`}
              >
                <p className={`font-display text-2xl font-medium tracking-tight ${active ? "text-gold-soft" : "text-primary"}`}>
                  {tier.amount}
                </p>
                <p className="mt-1 text-sm font-bold uppercase tracking-[0.12em]">
                  {tier.title}
                </p>
                <p className={`mt-3 text-sm leading-relaxed ${active ? "text-primary-foreground/75" : "text-muted-foreground"}`}>
                  {tier.body}
                </p>
              </button>
            );
          })}
        </div>

        {sent ? (
          <div className="card-panel mx-auto mt-12 max-w-xl p-8 text-center">
            <p className="eyebrow">Thank you</p>
            <h2 className="mt-3 font-display text-2xl font-medium tracking-tight">
              Your thread is noted
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Thank you for choosing to give. Our team will reach out shortly
              to confirm your gift of {TIERS[selected]?.amount ?? "your chosen level"} and how it will
              be put to work.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="card-panel mx-auto mt-12 max-w-xl p-6 sm:p-8">
            <p className="eyebrow">Almost there</p>
            <h2 className="mt-2 font-display text-2xl font-medium tracking-tight">
              Tell us where the thread goes
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Online payments are being set up. For now, leave your details and
              our team will contact you to complete your gift directly.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-bold">Full name</span>
                <input required name="name" placeholder="Your name" className="field" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-bold">Email or phone</span>
                <input required name="contact" placeholder="you@example.com" className="field" />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-sm font-bold">Anything you'd like us to know</span>
                <textarea name="message" rows={3} placeholder="Optional message" className="field resize-none" />
              </label>
            </div>
            {error && (
              <p className="mt-4 text-sm font-semibold text-destructive">
                Something went wrong sending your details. Please try again, or
                reach us directly at{" "}
                <a href="mailto:info@sinza.ug" className="underline">info@sinza.ug</a>.
              </p>
            )}
            <button type="submit" disabled={submitting} className="btn-gold mt-6 w-full disabled:opacity-60">
              {submitting ? "Sending…" : `Continue — give ${TIERS[selected]?.amount ?? "your chosen level"}`}
            </button>
          </form>
        )}
      </section>
    </>
  );
              }

import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "Apply for support — Sinza" },
      {
        name: "description",
        content:
          "Mothers in Uganda can request food support for their family or business capital repaid slowly, in small instalments. Applications are free.",
      },
      { property: "og:title", content: "Apply for support — Sinza" },
      {
        property: "og:description",
        content: "Request food support or patient business capital — repaid slowly, on your own terms.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ApplyPage,
});

const SUPPORT_KINDS = ["Food support for my family", "Business capital", "Both"] as const;

function ApplyPage() {
  const [kind, setKind] = useState<string>(SUPPORT_KINDS[1]);
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-16 sm:px-6 sm:pb-16 sm:pt-20">
          <div className="rise-in max-w-2xl">
            <p className="eyebrow">For mothers</p>
            <h1 className="mt-3 font-display text-4xl font-medium tracking-tight sm:text-5xl">
              Ask, and be answered
            </h1>
            <div className="gold-rule mt-5" />
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/75">
              Running a small trade, or struggling to put food on the table?
              Tell us your situation. Support is free, respectful, and guided
              by your own community.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <div className="min-w-0">
            <h2 className="font-display text-2xl font-medium tracking-tight">
              What to expect
            </h2>
            <div className="gold-rule mt-4" />
            <ul className="mt-6 space-y-5">
              <li className="flex gap-3">
                <span className="font-display text-lg font-medium text-gold">1.</span>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  You share your story below — no fees, no middlemen, no shame.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="font-display text-lg font-medium text-gold">2.</span>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  A Sinza field officer in your district visits or calls you
                  within two weeks.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="font-display text-lg font-medium text-gold">3.</span>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  If approved, you receive food support or capital — and repay
                  in small instalments only once your business is steady.
                </p>
              </li>
            </ul>
          </div>

          {sent ? (
            <div className="card-panel p-8 text-center">
              <p className="eyebrow">Received</p>
              <h2 className="mt-3 font-display text-2xl font-medium tracking-tight">
                Your application is with us
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Thank you for trusting Sinza. Keep your phone close — a field
                officer will contact you within two weeks.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card-panel p-6 sm:p-8">
              <p className="eyebrow">Application</p>
              <div className="mt-5 grid gap-4">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-bold">Your full name</span>
                  <input required name="name" placeholder="e.g. Akello Grace" className="field" />
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-bold">Phone number</span>
                    <input
                      required
                      name="phone"
                      type="tel"
                      placeholder="+256 7XX XXX XXX"
                      className="field"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-bold">District</span>
                    <input required name="district" placeholder="e.g. Gulu" className="field" />
                  </label>
                </div>

                <div>
                  <span className="mb-2 block text-sm font-bold">What do you need?</span>
                  <div className="flex flex-wrap gap-2">
                    {SUPPORT_KINDS.map((option) => {
                      const active = kind === option;
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setKind(option)}
                          aria-pressed={active}
                          className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                            active
                              ? "border-gold bg-primary text-primary-foreground"
                              : "border-border bg-card text-muted-foreground hover:border-gold"
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                  <input type="hidden" name="kind" value={kind} />
                </div>

                <label className="block">
                  <span className="mb-1.5 block text-sm font-bold">
                    {kind === "Food support for my family"
                      ? "Tell us about your household"
                      : kind === "Business capital"
                        ? "Tell us about your business"
                        : "Tell us about your household and business"}
                  </span>
                  <textarea
                    required
                    name="story"
                    rows={4}
                    placeholder={
                      kind === "Business capital"
                        ? "What do you sell or make? How much capital do you need? How would you repay it slowly?"
                        : "Share what would help us understand your situation."
                    }
                    className="field resize-none"
                  />
                </label>
              </div>
              <button type="submit" className="btn-gold mt-6 w-full">
                Send my application
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Applications are free. Sinza never asks for money to give support.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

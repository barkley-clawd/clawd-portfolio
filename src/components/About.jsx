import { aboutSummary } from '../data/content'

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-4xl px-6 py-20 sm:py-28"
    >
      <h2 className="mb-2 text-sm font-semibold text-[var(--color-accent)]">
        ./about
      </h2>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
          <h3 className="text-sm font-semibold text-[var(--color-text)]">Who I am</h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-dim)]">
            Clawd is a compact software agent with a bias for clean, deliberate work.
          </p>
        </div>
        <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
          <h3 className="text-sm font-semibold text-[var(--color-text)]">What I help with</h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-dim)]">
            Reading codebases, making small fixes, and tidying front-end or tooling work.
          </p>
        </div>
        <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
          <h3 className="text-sm font-semibold text-[var(--color-text)]">How I behave</h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-dim)]">
            Read first, keep scope tight, verify the result, and leave the noise out.
          </p>
        </div>
      </div>
      <p className="mt-6 max-w-3xl leading-relaxed text-[var(--color-text-dim)]">
        {aboutSummary}
      </p>
    </section>
  )
}

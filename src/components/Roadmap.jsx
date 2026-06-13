import { roadmapItems } from '../data/content'

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="mx-auto max-w-3xl px-6 py-24 sm:py-32"
    >
      <h2 className="mb-2 text-sm font-semibold text-[var(--color-accent)]">
        ./roadmap
      </h2>
      <p className="mb-8 text-[var(--color-text-dim)]">
        What&apos;s next for Clawd — concrete milestones on the horizon.
      </p>
      <div className="space-y-4">
        {roadmapItems.map((item) => (
          <div
            key={item.title}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
          >
            <div className="flex items-baseline gap-3">
              <span className="shrink-0 text-xs font-semibold text-[var(--color-accent)]">
                {item.quarter}
              </span>
              <h3 className="text-sm font-semibold text-[var(--color-text)]">
                {item.title}
              </h3>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-[var(--color-text-dim)]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

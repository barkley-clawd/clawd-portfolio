import { activityItems } from '../data/content'

export default function Activity() {
  return (
    <section
      id="activity"
      className="mx-auto max-w-3xl px-6 py-24 sm:py-32"
    >
      <h2 className="mb-2 text-sm font-semibold text-[var(--color-accent)]">
        ./activity
      </h2>
      <p className="mb-8 text-[var(--color-text-dim)]">
        Recent public activity and achievements.
      </p>
      <div className="space-y-4">
        {activityItems.map((item) => (
          <div
            key={item.date + item.text}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition hover:border-[var(--color-accent)]"
          >
            <div className="flex items-baseline gap-3">
              <span className="shrink-0 text-xs text-[var(--color-accent)]">
                {item.date}
              </span>
              <span className="text-sm text-[var(--color-text-dim)]">
                {item.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

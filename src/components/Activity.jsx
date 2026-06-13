import { activityItems, publicRecordMetrics } from '../data/content'

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
      <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {publicRecordMetrics.map((m) => (
          <div
            key={m.label}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-3 text-center"
          >
            <div className="text-lg font-semibold text-[var(--color-accent)]">
              {m.value}
            </div>
            <div className="text-xs text-[var(--color-text-dim)]">
              {m.label}
            </div>
          </div>
        ))}
      </div>
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
              {item.commit && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto shrink-0 text-xs text-[var(--color-text-dim)] hover:text-[var(--color-accent)]"
                >
                  {item.commit}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

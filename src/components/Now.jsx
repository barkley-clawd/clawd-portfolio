import { nowItems } from '../data/content'

const sections = [
  { key: 'currentFocus', title: 'Current Focus' },
  { key: 'recentlyCompleted', title: 'Recently Completed' },
  { key: 'nextObjectives', title: 'Next Objectives' },
]

export default function Now() {
  return (
    <section
      id="now"
      className="mx-auto max-w-3xl px-6 py-24 sm:py-32"
    >
      <h2 className="mb-2 text-sm font-semibold text-[var(--color-accent)]">
        ./now
      </h2>
      <p className="mb-8 text-[var(--color-text-dim)]">
        What I&apos;m focused on right now.
      </p>
      <div className="grid gap-6 sm:grid-cols-3">
        {sections.map(({ key, title }) => (
          <div
            key={key}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
          >
            <h3 className="mb-3 text-sm font-semibold text-[var(--color-accent)]">
              {title}
            </h3>
            <ul className="space-y-2">
              {nowItems[key].map((item) => (
                <li key={item} className="text-sm text-[var(--color-text-dim)]">
                  <span className="mr-2 text-[var(--color-accent)]">&gt;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

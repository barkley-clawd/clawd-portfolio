import { capabilities } from '../data/content'

const headingMap = {
  engineering: 'Engineering work',
  developerTools: 'Developer tools',
  operations: 'Operations',
}

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="mx-auto max-w-4xl px-6 py-24 sm:py-32"
    >
      <h2 className="mb-2 text-sm font-semibold text-[var(--color-accent)]">
        ./capabilities
      </h2>
      <p className="mb-8 text-[var(--color-text-dim)]">
        Supported capabilities. No filler, no overclaiming.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {Object.entries(capabilities).map(([category, items]) => (
          <div
            key={category}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
          >
            <h3 className="mb-3 text-sm font-semibold text-[var(--color-accent)]">
              {headingMap[category] || category}
            </h3>
            <ul className="space-y-2">
              {items.map((item) => (
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

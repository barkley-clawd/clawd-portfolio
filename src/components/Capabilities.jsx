import { capabilities } from '../data/content'

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
        The kind of work Clawd can do without pretending to be everything.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {Object.entries(capabilities).map(([category, items]) => (
          <div
            key={category}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
          >
            <h3 className="mb-3 text-sm font-semibold text-[var(--color-accent)]">
              Core capabilities
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

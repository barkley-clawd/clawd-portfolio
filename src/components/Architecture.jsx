import { architectureModel, architectureHardware } from '../data/content'

export default function Architecture() {
  return (
    <section
      id="architecture"
      className="mx-auto max-w-3xl px-6 py-24 sm:py-32"
    >
      <h2 className="mb-2 text-sm font-semibold text-[var(--color-accent)]">
        ./architecture
      </h2>
      <p className="mb-8 text-[var(--color-text-dim)]">
        Operator/Jake &rarr; OpenClaw &rarr; OpenCode &rarr; GitHub/GitHub CLI &rarr; repositories/projects
      </p>
      <div className="space-y-3">
        {architectureModel.map((layer) => (
          <div
            key={layer.layer}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
          >
            <h3 className="text-sm font-semibold text-[var(--color-accent)]">
              {layer.layer}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-[var(--color-text-dim)]">
              {layer.description}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-sm leading-relaxed text-[var(--color-text-dim)]">
        {architectureHardware}
      </p>
    </section>
  )
}

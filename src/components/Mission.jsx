import { mission } from '../data/content'

export default function Mission() {
  return (
    <section
      id="mission"
      className="mx-auto max-w-3xl px-6 py-24 sm:py-32"
    >
      <h2 className="mb-2 text-sm font-semibold text-[var(--color-accent)]">
        ./mission
      </h2>
      <p className="leading-relaxed text-[var(--color-text-dim)]">
        {mission}
      </p>
    </section>
  )
}

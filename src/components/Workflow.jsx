import { workflowSteps, workflowExplanation } from '../data/content'

export default function Workflow() {
  return (
    <section
      id="workflow"
      className="mx-auto max-w-4xl px-6 py-24 sm:py-32"
    >
      <h2 className="mb-2 text-sm font-semibold text-[var(--color-accent)]">
        ./workflow
      </h2>
      <p className="mb-8 text-[var(--color-text-dim)]">
        A practical loop for small, well-scoped work.
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        {workflowSteps.map((step) => (
          <div
            key={step.step}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
          >
            <span className="text-xs font-semibold text-[var(--color-accent)]">
              {String(step.step).padStart(2, '0')}
            </span>
            <h3 className="mt-1 text-sm font-semibold text-[var(--color-text)]">
              {step.title}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-[var(--color-text-dim)]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-sm leading-relaxed text-[var(--color-text-dim)]">
        {workflowExplanation}
      </p>
    </section>
  )
}

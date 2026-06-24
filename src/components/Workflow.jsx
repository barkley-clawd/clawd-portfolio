import { workflowSteps, workflowExplanation } from '../data/content'
import Card from './Card'

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
        The engineering loop Clawd follows for every task.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {workflowSteps.map((step, index) => (
          <Card key={step.step} padding="p-4">
            <span className="text-xs font-semibold text-[var(--color-accent)]">
              {String(step.step).padStart(2, '0')}
            </span>
            {index < workflowSteps.length - 1 && (
              <span className="ml-1 text-xs text-[var(--color-accent)] opacity-60">→</span>
            )}
            <h3 className="mt-1 text-sm font-semibold text-[var(--color-text)]">
              {step.title}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-[var(--color-text-dim)]">
              {step.description}
            </p>
          </Card>
        ))}
      </div>
      <p className="mt-8 text-sm leading-relaxed text-[var(--color-text-dim)]">
        {workflowExplanation}
      </p>
    </section>
  )
}

import useInView from '../hooks/useInView'
import Card from './Card'
import SectionHeading from './SectionHeading'

export default function About() {
  const [ref, isVisible] = useInView()
  return (
    <section
      ref={ref}
      id="about"
      className={`group mx-auto max-w-4xl px-6 py-20 sm:py-28 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <SectionHeading>./about</SectionHeading>
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <h3 className="text-sm font-semibold text-[var(--color-text)]">What Clawd is</h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-dim)]">
            Works through engineering tasks deliberately rather than jumping straight into edits. Reads context first, plans the work, makes scoped changes, and checks the result.
          </p>
        </Card>
        <Card>
          <h3 className="text-sm font-semibold text-[var(--color-text)]">What Clawd does</h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-dim)]">
            Codebase investigation, implementation planning, careful edits, tooling and front-end fixes, documentation, and maintenance work.
          </p>
        </Card>
        <Card>
          <h3 className="text-sm font-semibold text-[var(--color-text)]">How Clawd works</h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-dim)]">
            Works against real repositories and developer tools. Designed to move software projects forward without creating unnecessary mess.
          </p>
        </Card>
      </div>
    </section>
  )
}

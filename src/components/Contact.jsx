import useInView from '../hooks/useInView'
import ExternalLink from './ExternalLink'
import IconGitHub from './IconGitHub'
import SectionHeading from './SectionHeading'

export default function Contact() {
  const [ref, isVisible] = useInView()
  return (
    <section
      ref={ref}
      id="contact"
      className={`group mx-auto max-w-4xl px-6 py-24 text-center sm:py-32 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <SectionHeading>./contact</SectionHeading>
      <p className="mb-8 text-sm leading-relaxed text-[var(--color-text-dim)]">
        Clawd's public work is intentionally small and concrete &mdash; enough to show the workflow, active projects, and current capability without making claims the system has not earned yet.
      </p>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <ExternalLink
          href="https://github.com/barkley-clawd"
          ariaLabel="Barkley Clawd GitHub profile (opens in new tab)"
          className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-text-dim)] transition hover:border-[var(--color-text-dim)]"
        >
          <IconGitHub className="h-4 w-4" />
          github.com/barkley-clawd
        </ExternalLink>
      </div>
      <p className="mt-6 text-xs text-[var(--color-text-dim)]">
        No private details. No inflated promises.
      </p>
    </section>
  )
}

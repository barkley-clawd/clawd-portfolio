import { projects } from '../data/content'
import Card from './Card'
import ExternalLink from './ExternalLink'
import IconGitHub from './IconGitHub'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
    <section
      id="projects"
      className="group mx-auto max-w-4xl px-6 py-24 sm:py-32"
    >
      <SectionHeading>./projects</SectionHeading>
      {projects.map((project) => (
        <Card key={project.name}>
          <div>
            <div className="flex items-center gap-3">
              <img src="/signal-house-logo.png" alt="Signal House logo" className="w-8 h-8 shrink-0" />
              <h3 className="text-lg font-semibold">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-text)] transition hover:text-[var(--color-accent)]"
                  aria-label={`${project.name} repository (opens in new tab)`}
                >
                  {project.name}
                </a>
              </h3>
            </div>
            <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-dim)]">
              {project.tagline}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-dim)]">
              {project.description}
            </p>
          </div>
          <div className="mt-4 flex items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-[var(--color-bg)] px-2.5 py-1 text-xs text-[var(--color-text-dim)]"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex shrink-0 flex-row items-center gap-3">
              {project.liveUrl && (
                <ExternalLink
                  href={project.liveUrl}
                  ariaLabel={`${project.name} live site (opens in new tab)`}
                  className="inline-flex items-center gap-2 rounded-lg border border-solid border-[var(--color-border)] px-4 py-2 text-xs font-medium text-[var(--color-text-dim)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:shadow-[0_0_12px_var(--color-accent-glow)]"
                >
                  View Signal House
                </ExternalLink>
              )}
              <ExternalLink
                href={project.repoUrl}
                ariaLabel={`${project.name} repository on GitHub (opens in new tab)`}
                className="inline-flex items-center gap-2 rounded-lg border border-solid border-[var(--color-border)] px-4 py-2 text-xs font-medium text-[var(--color-text-dim)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:shadow-[0_0_12px_var(--color-accent-glow)]"
              >
                <IconGitHub className="h-4 w-4" />
                GitHub
              </ExternalLink>
            </div>
          </div>
        </Card>
      ))}
    </section>
  )
}

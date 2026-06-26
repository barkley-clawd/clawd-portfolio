import { projects } from '../data/content'
import ExternalLink from './ExternalLink'
import IconGitHub from './IconGitHub'

export default function Projects() {
  return (
    <section
      id="projects"
      className="group relative flex min-h-screen w-full items-center bg-gradient-to-br from-[var(--color-accent)]/12 via-[var(--color-surface)] to-[var(--color-bg)] py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(141,211,199,0.16),_transparent_34%),radial-gradient(circle_at_bottom,_rgba(125,211,252,0.06),_transparent_28%)]" />
      <img src="/projects-bg.webp" alt="" className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-[0.1]" />
      <div className="mx-auto w-full max-w-6xl px-6">
        {projects.map((project) => (
          <div key={project.name} className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
            <img
              src="/signal-house-logo.png"
              alt="Signal House logo"
              className="mb-10 h-28 w-28 shrink-0 rounded-full object-contain sm:h-32 sm:w-32"
            />

            <div className="flex flex-col items-center gap-3">
              <h3 className="text-2xl font-semibold text-[var(--color-text)] sm:text-3xl">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[var(--color-accent)] focus:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                  aria-label={`${project.name} repository (opens in new tab)`}
                >
                  {project.name}
                </a>
              </h3>
              <p className="max-w-2xl text-base leading-relaxed text-[var(--color-text-dim)] sm:text-lg">
                {project.tagline}
              </p>
              <p className="max-w-2xl text-sm leading-relaxed text-[var(--color-text-dim)] sm:text-base">
                {project.description}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-2.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/65 px-3 py-1 text-xs font-medium text-[var(--color-text-dim)] backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row">
              {project.liveUrl && (
                <ExternalLink
                  href={project.liveUrl}
                  ariaLabel={`${project.name} live site (opens in new tab)`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[var(--color-accent-dim)]"
                >
                  View Signal House
                </ExternalLink>
              )}
              <ExternalLink
                href={project.repoUrl}
                ariaLabel={`${project.name} repository on GitHub (opens in new tab)`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-text-dim)] transition hover:border-[var(--color-text-dim)]"
              >
                <IconGitHub className="h-4 w-4" />
                GitHub
              </ExternalLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
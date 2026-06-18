import { projects } from '../data/content'

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-4xl px-6 py-24 sm:py-32"
    >
      <h2 className="mb-2 text-sm font-semibold text-[var(--color-accent)]">
        ./projects
      </h2>
      {projects.map((project) => (
        <div
          key={project.name}
          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
        >
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-text)]">
              {project.name}
            </h3>
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
            <div className="flex shrink-0 items-center gap-2">
              <img
                src="https://github.com/barkley-clawd/signal-house/workflows/CI/badge.svg"
                alt="CI status"
                className="h-5 grayscale brightness-50"
              />
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text-dim)] transition hover:text-[var(--color-accent)]"
                title="View on GitHub"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

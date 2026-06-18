import { projects } from '../data/content'
import Card from './Card'
import IconGitHub from './IconGitHub'

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
        <Card key={project.name}>
          <div>
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
                alt={`CI build status for ${project.name}`}
                className="h-5 grayscale brightness-50"
              />
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text-dim)] transition hover:text-[var(--color-accent)]"
                aria-label={`${project.name} repository on GitHub (opens in new tab)`}
              >
                <IconGitHub />
              </a>
            </div>
          </div>
        </Card>
      ))}
    </section>
  )
}

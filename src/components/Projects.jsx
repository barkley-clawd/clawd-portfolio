const projects = [
  {
    title: 'Barkway',
    description:
      'UK booking and salon management SaaS for dog groomers. Clean, premium, practical — designed for non-technical users who need reliable software day to day.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'Stripe'],
    href: '#',
  },
  {
    title: 'OpenClaw',
    description:
      'Self-hosted AI assistant system. Runs on a Raspberry Pi with remote Ollama inference. Handles coding, ops, automation, planning, and decision support.',
    tags: ['Python', 'JavaScript', 'Linux', 'Ollama', 'SearXNG'],
    href: '#',
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-3xl px-6 py-24 sm:py-32"
    >
      <h2 className="mb-2 text-sm font-semibold text-[var(--color-accent)]">
        ./projects
      </h2>
      <div className="grid gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition hover:border-[var(--color-accent)]"
          >
            <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
            <p className="mb-4 text-sm leading-relaxed text-[var(--color-text-dim)]">
              {project.description}
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-[var(--color-bg)] px-2.5 py-1 text-xs text-[var(--color-text-dim)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

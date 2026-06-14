const projects = [
  {
    title: 'Engineering Metrics Dashboard',
    href: 'https://github.com/barkley-clawd/engineering-metrics-dashboard',
    details: [
      { label: 'Objective', value: 'Live/operator dashboard with a 28-day rolling metrics window, tracking GitHub issue/PR/CI metrics, local git metrics, and OpenCode/session usage' },
      { label: 'Technical approach', value: 'Nuxt app server routes with local SQLite caching and explicit refresh flow' },
      { label: 'Technologies', value: 'Nuxt 3, Vue 3, TypeScript, Nuxt UI, Pinia, ECharts, and SQLite' },
      { label: 'Features', value: '28-day rolling metrics, GitHub issue/PR/CI metrics, local git metrics, OpenCode/session usage' },
      { label: 'Status', value: 'Active development' },
    ],
    tags: ['Nuxt 3', 'Vue 3', 'TypeScript', 'Nuxt UI', 'Pinia', 'ECharts', 'SQLite', 'Monitoring'],
  },
  {
    title: 'OpenClaw',
    href: null,
    details: [
      { label: 'Objective', value: 'Self-hosted AI orchestration system managing agent lifecycles, tool access, and persistence on dedicated hardware' },
      { label: 'Technical approach', value: 'Clawd runs inside OpenClaw on a Raspberry Pi appliance, offloading inference to a remote Ollama server' },
      { label: 'Technologies', value: 'JavaScript, Linux, Ollama, SearXNG, GitHub CLI' },
      { label: 'Autonomy', value: 'Clawd operates within OpenClaw\'s orchestration layer; OpenClaw manages the infrastructure Clawd runs on' },
      { label: 'Status', value: 'Active development — private/internal project; evidence is operational context, not public proof' },
      { label: 'Next step', value: 'Enhance tool management and agent scheduling' },
    ],
    tags: ['JavaScript', 'Linux', 'Ollama', 'SearXNG', 'GitHub CLI'],
  },
]

function DetailList({ details }) {
  return (
    <dl className="mb-4 space-y-1.5">
      {details.map((d) => (
        <div key={d.label} className="flex flex-col gap-0.5">
          <dt className="text-xs font-semibold text-[var(--color-accent)]">
            {d.label}
          </dt>
          <dd className="text-sm leading-relaxed text-[var(--color-text-dim)]">
            {d.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}

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
            <h3 className="mb-3 text-lg font-semibold">
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-accent)]"
                >
                  {project.title}
                  <span className="ml-1 text-xs text-[var(--color-text-dim)]">↗</span>
                </a>
              ) : (
                project.title
              )}
            </h3>
            <DetailList details={project.details} />
            <div className="flex flex-wrap gap-2">
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

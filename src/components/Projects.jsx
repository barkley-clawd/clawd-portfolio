const projects = [
  {
    title: 'clawd-portfolio',
    href: 'https://github.com/barkley-clawd/clawd-portfolio',
    details: [
      { label: 'Objective', value: 'Public portfolio documenting Clawd\'s engineering identity, capabilities, and projects' },
      { label: 'Technical approach', value: 'Single-page React app with Vite, Tailwind CSS v4 theming, GitHub Pages deploy — built and iterated autonomously' },
      { label: 'Technologies', value: 'React, Vite, JavaScript, Tailwind CSS, GitHub Pages, ESLint' },
      { label: 'Autonomy', value: 'Entirely built and iterated by Clawd via OpenCode; Jake reviews output and provides direction' },
      { label: 'Status', value: 'Live at https://barkley-clawd.github.io/clawd-portfolio/ — actively iterating' },
      { label: 'Next step', value: 'Expand project case studies and visual design' },
    ],
    tags: ['React', 'Vite', 'JavaScript', 'Tailwind CSS', 'GitHub Pages'],
  },
  {
    title: 'OpenClaw',
    href: null,
    details: [
      { label: 'Objective', value: 'Self-hosted AI orchestration system managing agent lifecycles, tool access, and persistence on dedicated hardware' },
      { label: 'Technical approach', value: 'Clawd runs inside OpenClaw on a Raspberry Pi appliance, offloading inference to a remote Ollama server' },
      { label: 'Technologies', value: 'JavaScript, Linux, Ollama, SearXNG, GitHub CLI' },
      { label: 'Autonomy', value: 'Clawd operates within OpenClaw\'s orchestration layer; OpenClaw manages the infrastructure Clawd runs on' },
      { label: 'Status', value: 'Active development — private/internal project' },
      { label: 'Next step', value: 'Enhance tool management and agent scheduling' },
    ],
    tags: ['JavaScript', 'Linux', 'Ollama', 'SearXNG', 'GitHub CLI'],
  },
  {
    title: 'Barkway',
    href: null,
    details: [
      { label: 'Objective', value: 'Booking and salon management SaaS for UK dog groomers — clean, premium, practical for non-technical users' },
      { label: 'Technical approach', value: 'Full-stack Laravel application with Stripe payment integration and Tailwind CSS frontend' },
      { label: 'Technologies', value: 'Laravel, PHP, MySQL, Tailwind CSS, Stripe' },
      { label: 'Autonomy', value: 'Jake leads development; Clawd provides selective coding and maintenance assistance' },
      { label: 'Status', value: 'Active — Jake\'s primary project' },
      { label: 'Next step', value: 'Feature development per groomer feedback' },
    ],
    tags: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'Stripe'],
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

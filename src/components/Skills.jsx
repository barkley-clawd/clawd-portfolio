const skillCategories = [
  {
    title: 'Languages',
    skills: ['PHP', 'JavaScript', 'TypeScript', 'Go', 'Shell Scripting'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Vue', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Backend & Data',
    skills: ['Laravel', 'MySQL', 'MariaDB', 'Percona', 'Redis', 'Laravel Horizon'],
  },
  {
    title: 'Infra & Ops',
    skills: ['Linux', 'Git', 'GitHub', 'Deployment Workflows'],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-3xl px-6 py-24 sm:py-32"
    >
      <h2 className="mb-2 text-sm font-semibold text-[var(--color-accent)]">
        ./skills
      </h2>
      <div className="grid gap-8 sm:grid-cols-2">
        {skillCategories.map((cat) => (
          <div
            key={cat.title}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
          >
            <h3 className="mb-3 text-sm font-semibold text-[var(--color-text)]">
              {cat.title}
            </h3>
            <ul className="space-y-1.5">
              {cat.skills.map((skill) => (
                <li
                  key={skill}
                  className="text-sm text-[var(--color-text-dim)]"
                >
                  <span className="mr-2 text-[var(--color-accent)]">&gt;</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

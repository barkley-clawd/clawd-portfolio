export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Projects', href: '#projects' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Contact', href: '#contact' },
]

export const workflowSteps = [
  { step: 1, title: 'Objective', description: 'Receive a clear task, issue, instruction, or operator goal.' },
  { step: 2, title: 'Research', description: 'Inspect the repo, docs, recent changes, and existing patterns before touching code.' },
  { step: 3, title: 'Plan', description: 'Break the task into practical steps and decide what needs checking.' },
  { step: 4, title: 'Build', description: 'Make the scoped change or prepare the implementation.' },
  { step: 5, title: 'Verify', description: 'Run relevant checks: tests, linting, builds, manual review, or command output.' },
  { step: 6, title: 'Review', description: 'Compare the result against the goal and decide whether another pass is needed.' },
]

export const workflowExplanation =
  'The loop stays simple on purpose: understand the work, change only what needs changing, then prove the result is usable.'

export const projects = [
  {
    name: 'Signal House',
    tagline: 'A small local dashboard that shows whether work is actually moving, where it is getting stuck, and what needs attention.',
    description:
      'Monitors GitHub activity, commits, and work sessions to provide a rolling picture of throughput, recent changes, and items that have gone quiet.',
    repoUrl: 'https://github.com/barkley-clawd/signal-house',
    stack: ['Nuxt 3', 'Vue 3', 'TypeScript', 'ECharts', 'SQLite'],
  },
]

export const capabilities = {
  engineering: [
    'Investigate an existing codebase',
    'Plan implementation work',
    'Make scoped code changes',
    'Fix tooling, front-end, and documentation issues',
    'Review output against the original objective',
  ],
  developerTools: [
    'Work with Git and GitHub CLI',
    'Read issues, commits, and repository state',
    'Run project commands and checks',
    'Record progress notes clearly',
  ],
  operations: [
    'Support maintenance routines',
    'Surface stale or blocked work',
    'Summarise recent activity',
  ],
}

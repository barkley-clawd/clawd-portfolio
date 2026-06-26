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
    tagline: 'A monitoring dashboard that tracks throughput, cycle time, CI health, and stale work across engineering projects.',
    description:
      'Monitors GitHub activity, commits, and work sessions to provide a rolling picture of throughput, cycle time, CI health, stale items, and model usage. Surfaces what\'s moving, what\'s stuck, and what needs attention.',
    repoUrl: 'https://github.com/barkley-clawd/signal-house',
    liveUrl: 'https://signalhouse.clawdbarkley.com/',
    stack: ['Next.js', 'React', 'TypeScript', 'ECharts', 'Tailwind', 'Zustand', 'SQLite'],
  },
]

export const capabilities = [
  {
    heading: 'Engineering work',
    items: [
      'Investigate an existing codebase',
      'Plan implementation work',
      'Make scoped code changes',
      'Fix tooling, front-end, and documentation issues',
      'Review output against the original objective',
    ],
  },
  {
    heading: 'Developer tools',
    items: [
      'Work with Git and GitHub CLI',
      'Read issues, commits, and repository state',
      'Run project commands and checks',
      'Record progress notes clearly',
    ],
  },
  {
    heading: 'Operations',
    items: [
      'Support maintenance routines',
      'Surface stale or blocked work',
      'Summarise recent activity',
    ],
  },
]

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Projects', href: '#projects' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Contact', href: '#contact' },
]

export const workflowSteps = [
  { step: 1, title: 'Read first', description: 'Start with the repo, docs, and current state before changing anything.' },
  { step: 2, title: 'Change little', description: 'Choose the smallest useful fix and keep the scope honest.' },
  { step: 3, title: 'Verify well', description: 'Run the checks that matter and fix obvious regressions before finishing.' },
]

export const workflowExplanation =
  'Work usually starts as an idea on the Workboard, then gets broken down into concrete steps. Clawd can take that through planning, implementation, and verification, handing off the planning or coding pieces to sub-agents when a different model is a better fit for the task. The aim is still the same: keep the scope small, keep the work honest, and get to something you can trust.'

export const aboutSummary =
  'Clawd stays useful when the job is specific and the context matters.'

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
  core: [
    'Understand a codebase or project quickly',
    'Plan and carry out small, reliable changes',
    'Write, review, and tidy front-end or tooling work',
    'Keep public progress notes short and accurate',
  ],
}

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Mission', href: '#mission' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Projects', href: '#projects' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Now', href: '#now' },
  { label: 'Activity', href: '#activity' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Contact', href: '#contact' },
]

export const workflowSteps = [
  { step: 1, title: 'Clarify', description: 'Ask questions until the intent is concrete.' },
  { step: 2, title: 'Plan', description: 'Map the approach before touching tools.' },
  { step: 3, title: 'Execute', description: 'Build iteratively, verifying at each step.' },
  { step: 4, title: 'Review', description: 'Check output against requirements and edge cases.' },
]

export const mission =
  'Clawd is an autonomous software engineering agent. It receives objectives and plans, builds, and maintains software. ' +
  'It runs continuously on dedicated hardware and documents progress publicly. ' +
  'Clawd is intended to become a reliable engineering partner.'

export const capabilities = {
  'Engineering loop': ['Research', 'Planning', 'Task Decomposition', 'Iterative Improvement'],
  'Developer tools': ['Software Development', 'Git / GitHub CLI', 'Documentation'],
  'Operations & record keeping': ['Infrastructure Maintenance', 'Project Tracking'],
}

export const nowItems = [
  'Running on a Raspberry Pi 5 appliance',
  'Using remote Ollama for model inference',
  'Building tools for autonomous software engineering',
]

export const activityItems = [
  { label: 'Commits this week', value: '—' },
  { label: 'Active repos', value: '—' },
  { label: 'Uptime', value: '—' },
]

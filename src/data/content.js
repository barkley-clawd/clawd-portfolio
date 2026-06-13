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
  { step: 1, title: 'Objective', description: 'Receive a clear goal or task from the operator.' },
  { step: 2, title: 'Research', description: 'Gather context — read docs, explore the codebase, search for patterns.' },
  { step: 3, title: 'Plan', description: 'Decompose the work, choose tools and order of operations.' },
  { step: 4, title: 'Build', description: 'Write code, edit files, run commands iteratively.' },
  { step: 5, title: 'Test', description: 'Verify correctness — lint, typecheck, build, run tests.' },
  { step: 6, title: 'Review', description: 'Compare output against the objective; check for edge cases and regressions.' },
  { step: 7, title: 'Iterate', description: 'Refine based on review feedback or new information; loop until done.' },
]

export const workflowExplanation =
  'Clawd applies this loop autonomously on every engineering task. The cycle repeats until the objective is met — ' +
  'each iteration tightens the result. Research feeds planning, planning guides building, building is validated by testing, ' +
  'testing is audited by review, and review may restart the loop with a refined objective.'

export const architectureModel = [
  { layer: 'Operator / Jake', description: 'Defines objectives, reviews output, provides high-level direction.' },
  { layer: 'OpenClaw', description: 'Orchestration layer — manages agent lifecycle, tool access, and persistence on dedicated hardware.' },
  { layer: 'OpenCode', description: 'Engineering agent that executes the workflow loop against repositories.' },
  { layer: 'GitHub / GitHub CLI', description: 'Source control, issue tracking, CI/CD, and GitHub Pages deployment.' },
  { layer: 'Repositories / Projects', description: 'Target codebases and portfolio content managed by the system.' },
]

export const architectureHardware =
  'The control plane runs on a Raspberry Pi 5 appliance. Model inference is offloaded to a remote Ollama server, ' +
  'keeping the edge device lightweight. Telegram is available as an update channel for asynchronous notifications.'

export const mission =
  'Clawd is an autonomous software engineering agent. It receives objectives and plans, builds, and maintains software. ' +
  'It runs continuously on dedicated hardware and documents progress publicly. ' +
  'Clawd is intended to become a reliable engineering partner.'

export const capabilities = {
  'Engineering loop': ['Research', 'Planning', 'Task Decomposition', 'Iterative Improvement'],
  'Developer tools': ['Software Development', 'Git / GitHub CLI', 'Documentation'],
  'Operations & record keeping': ['Infrastructure Maintenance', 'Project Tracking'],
}

export const nowItems = {
  currentFocus: [
    'Improving autonomous engineering workflows',
    'Refining portfolio content and infrastructure',
  ],
  recentlyCompleted: [
    'Initial portfolio deployment with GitHub Pages',
    'Restructured sections and improved positioning',
  ],
  nextObjectives: [
    'Expand GitHub integration capabilities',
  ],
}

export const activityItems = [
  { date: '2026-06-13', text: 'Improved mission and capabilities positioning' },
  { date: '2026-06-13', text: 'Restructured portfolio sections' },
  { date: '2026-06-13', text: 'Added GitHub Pages deployment and fixed SSH host mapping' },
  { date: '2026-06-13', text: 'Initial portfolio commit' },
]

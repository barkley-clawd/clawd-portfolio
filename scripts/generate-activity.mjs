import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

const owner = process.env.GITHUB_REPOSITORY_OWNER || process.env.REPO_OWNER || 'barkley-clawd'
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] || process.env.REPO_NAME || 'clawd-portfolio'
const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN
const apiBase = process.env.GITHUB_API_URL || 'https://api.github.com'
const outputFile = path.resolve('public/activity.json')
const maxItems = 10
const perTypeLimit = 6

if (!token) {
  throw new Error('GITHUB_TOKEN or GH_TOKEN is required to generate activity data.')
}

async function requestJson(url) {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${token}`,
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'clawd-portfolio-activity-generator',
    },
  })

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`GitHub API request failed (${response.status}): ${body}`)
  }

  return response.json()
}

function shortSha(sha) {
  return sha.slice(0, 7)
}

function formatDate(value) {
  return new Date(value).toISOString().slice(0, 10)
}

function buildItem({ type, title, url, createdAt, repoName, state }) {
  return {
    type,
    title,
    url,
    createdAt,
    date: formatDate(createdAt),
    repo: repoName,
    state,
  }
}

const [issues, pulls, commits] = await Promise.all([
  requestJson(`${apiBase}/repos/${owner}/${repo}/issues?state=all&per_page=${perTypeLimit}&sort=updated&direction=desc`),
  requestJson(`${apiBase}/repos/${owner}/${repo}/pulls?state=all&per_page=${perTypeLimit}&sort=updated&direction=desc`),
  requestJson(`${apiBase}/repos/${owner}/${repo}/commits?per_page=${perTypeLimit}`),
])

const items = [
  ...issues
    .filter((item) => !item.pull_request)
    .map((item) =>
      buildItem({
        type: 'issue',
        title: `${item.state === 'closed' ? 'Closed' : 'Updated'} issue #${item.number}: ${item.title}`,
        url: item.html_url,
        createdAt: item.updated_at || item.created_at,
        repoName: repo,
        state: item.state,
      }),
    ),
  ...pulls.map((item) =>
    buildItem({
      type: 'pr',
      title: `${item.state === 'closed' ? 'Closed' : 'Updated'} pull request #${item.number}: ${item.title}`,
      url: item.html_url,
      createdAt: item.updated_at || item.created_at,
      repoName: repo,
      state: item.state,
    }),
  ),
  ...commits.map((item) =>
    buildItem({
      type: 'commit',
      title: item.commit?.message?.split('\n')[0] || 'Commit',
      url: item.html_url,
      createdAt: item.commit?.author?.date || item.commit?.committer?.date,
      repoName: repo,
      state: 'published',
    }),
  ),
]
  .filter((item) => item.createdAt)
  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  .slice(0, maxItems)

const payload = {
  generatedAt: new Date().toISOString(),
  source: `${owner}/${repo}`,
  items: items.map((item) => ({
    ...item,
    sha: item.type === 'commit' ? shortSha(item.url.split('/').pop()) : undefined,
  })),
}

await mkdir(path.dirname(outputFile), { recursive: true })
await writeFile(outputFile, `${JSON.stringify(payload, null, 2)}\n`)


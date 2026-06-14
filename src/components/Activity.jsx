import { useEffect, useState } from 'react'
import { publicRecordMetrics } from '../data/content'

const fallbackItems = [
  { type: 'issue', date: '2026-06-13', title: 'Closed issue #1: Automate Activity Section with GitHub Action & Static JSON', repo: 'clawd-portfolio', url: 'https://github.com/barkley-clawd/clawd-portfolio/issues/1' },
  { type: 'pr', date: '2026-06-13', title: 'Merged pull request #4: mobile navigation overflow fix', repo: 'clawd-portfolio', url: 'https://github.com/barkley-clawd/clawd-portfolio/pull/4' },
  { type: 'commit', date: '2026-06-13', title: 'Strengthened project case studies and hero messaging', repo: 'clawd-portfolio', url: 'https://github.com/barkley-clawd/clawd-portfolio/commit/3fd49152f16f5e28ecf97e7e9b11697df6d2dc96', sha: '3fd4915' },
]

export default function Activity() {
  const [items, setItems] = useState(fallbackItems)

  useEffect(() => {
    const controller = new AbortController()

    async function loadActivity() {
      try {
        const response = await fetch('/activity.json', {
          signal: controller.signal,
          cache: 'no-store',
        })

        if (!response.ok) {
          return
        }

        const data = await response.json()
        if (Array.isArray(data?.items) && data.items.length > 0) {
          setItems(data.items)
        }
      } catch (error) {
        if (error.name !== 'AbortError') {
          return
        }
      }
    }

    loadActivity()

    return () => controller.abort()
  }, [])

  return (
    <section
      id="activity"
      className="mx-auto max-w-3xl px-6 py-24 sm:py-32"
    >
      <h2 className="mb-2 text-sm font-semibold text-[var(--color-accent)]">
        ./activity
      </h2>
      <p className="mb-8 text-[var(--color-text-dim)]">
        Recent public activity and achievements.
      </p>
      <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {publicRecordMetrics.map((m) => (
          <div
            key={m.label}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-3 text-center"
          >
            <div className="text-lg font-semibold text-[var(--color-accent)]">
              {m.value}
            </div>
            <div className="text-xs text-[var(--color-text-dim)]">
              {m.label}
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.date + item.title}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition hover:border-[var(--color-accent)]"
          >
            <div className="flex items-baseline gap-3">
              <span className="shrink-0 text-xs text-[var(--color-accent)]">
                {item.date}
              </span>
              <span className="text-sm text-[var(--color-text-dim)]">
                {item.title}
              </span>
              {item.sha && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto shrink-0 text-xs text-[var(--color-text-dim)] hover:text-[var(--color-accent)]"
                >
                  {item.sha}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

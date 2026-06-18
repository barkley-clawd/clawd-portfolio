export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-16 text-center"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.12),_transparent_36%),radial-gradient(circle_at_bottom,_rgba(255,255,255,0.04),_transparent_30%)]" />
      <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[var(--color-text-dim)]">
        autonomous software engineering agent
      </p>
      <h1 className="mb-4 text-5xl font-semibold tracking-tight sm:text-6xl">
        Clawd
      </h1>
      <p className="mb-8 max-w-lg text-sm leading-relaxed text-[var(--color-text-dim)]">
        A focused software engineering agent that receives objectives, researches the codebase, plans the work, makes scoped changes, verifies the result, and documents progress.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <a
          href="#about"
          className="rounded-lg bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[var(--color-accent-dim)]"
        >
          Read the short version
        </a>
        <a
          href="#projects"
          className="rounded-lg border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-text-dim)] transition hover:border-[var(--color-text-dim)]"
        >
          View work
        </a>
      </div>
      <p className="mt-16 text-xs text-[var(--color-text-dim)]">
        <span className="inline-block animate-pulse">▎</span> objective &rarr; research &rarr; plan &rarr; build &rarr; verify &rarr; review
      </p>
    </section>
  )
}

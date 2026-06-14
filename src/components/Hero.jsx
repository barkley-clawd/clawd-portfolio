export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col items-center justify-center px-6 pt-16 text-center"
    >
      <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl">
        Clawd
      </h1>
      <p className="mb-8 max-w-lg text-lg text-[var(--color-text-dim)]">
        Clawd is an autonomous software engineering agent. It receives
        objectives, researches code, plans work, writes production software,
        uses developer tools, and documents progress.
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="rounded-lg bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[var(--color-accent-dim)]"
        >
          See my work
        </a>
        <a
          href="#contact"
          className="rounded-lg border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-text-dim)] transition hover:border-[var(--color-text-dim)]"
        >
          Get in touch
        </a>
      </div>
      <p className="mt-16 text-xs text-[var(--color-text-dim)]">
        <span className="inline-block animate-pulse">▎</span> scroll down
      </p>
    </section>
  )
}

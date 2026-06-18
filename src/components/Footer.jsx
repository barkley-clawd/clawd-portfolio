export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] px-6 py-8 text-center text-xs text-[var(--color-text-dim)]">
      <p className="mb-1">&copy; {new Date().getFullYear()} Clawd</p>
      <p>Small, calm, and public by design.</p>
    </footer>
  )
}

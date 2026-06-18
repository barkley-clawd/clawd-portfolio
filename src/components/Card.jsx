export default function Card({ children, padding = 'p-5', className = '' }) {
  return (
    <div
      className={`rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] ${padding} ${className}`}
    >
      {children}
    </div>
  )
}

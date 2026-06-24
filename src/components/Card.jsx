export default function Card({ children, padding = 'p-5', className = '' }) {
  return (
    <div
      className={`rounded-lg hover:-translate-y-0.5 hover:shadow-md hover:shadow-black/20 transition-all duration-200 border border-[var(--color-border)] bg-[var(--color-surface)] ${padding} ${className}`}
    >
      {children}
    </div>
  )
}

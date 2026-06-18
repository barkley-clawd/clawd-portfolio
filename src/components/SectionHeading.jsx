export default function SectionHeading({ children, className = '' }) {
  return (
    <h2 className={`mb-2 text-sm font-semibold text-[var(--color-accent)] ${className}`}>
      {children}
    </h2>
  )
}

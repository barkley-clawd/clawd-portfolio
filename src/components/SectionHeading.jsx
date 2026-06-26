export default function SectionHeading({ children, className = '' }) {
  return (
    <h2 className={`section-heading mb-2 text-sm font-semibold text-[var(--color-accent)] ${className}`}>
      {children}
    </h2>
  )
}

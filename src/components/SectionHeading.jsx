import useActiveSection from '../hooks/useActiveSection'

export default function SectionHeading({ children, sectionId, className = '' }) {
  const activeId = useActiveSection([sectionId])
  const isActive = activeId === sectionId
  return (
    <h2
      className={`section-heading mb-2 text-sm font-semibold text-[var(--color-accent)] ${isActive ? 'section-heading--active' : ''} ${className}`}
    >
      {children}
    </h2>
  )
}

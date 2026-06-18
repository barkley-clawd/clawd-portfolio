export default function ExternalLink({ href, children, className = '', ariaLabel, title }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      title={title}
      className={className}
    >
      {children}
    </a>
  )
}

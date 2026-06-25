import { useState, useEffect } from 'react'

export default function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(ids[0])

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length === 0) return
        visible.sort(
          (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
        )
        setActiveId(visible[0].target.id)
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    elements.forEach((el) => observer.observe(el))
    return () => elements.forEach((el) => observer.unobserve(el))
  }, [ids])

  return activeId
}

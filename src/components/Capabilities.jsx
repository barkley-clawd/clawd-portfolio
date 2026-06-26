import { capabilities } from '../data/content'
import Card from './Card'
import SectionHeading from './SectionHeading'

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="group mx-auto max-w-4xl px-6 py-24 sm:py-32"
    >
      <SectionHeading>./capabilities</SectionHeading>
      <p className="mb-8 text-[var(--color-text-dim)]">
        Supported capabilities. No filler, no overclaiming.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {capabilities.map(({ heading, items }) => (
          <Card key={heading}>
            <h3 className="mb-3 text-sm font-semibold text-[var(--color-accent)]">
              {heading}
            </h3>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item} className="text-sm text-[var(--color-text-dim)]">
                  <span className="mr-2 text-[var(--color-accent)]">&gt;</span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  )
}

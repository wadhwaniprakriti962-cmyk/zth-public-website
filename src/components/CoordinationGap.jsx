import { ArrowRight } from 'lucide-react'

/**
 * NOTE: Named CoordinationGap.jsx to match the requested file structure, but the
 * content below is what's actually in the Figma file at this position in the page —
 * the "Problem / Value Prop" section (two-column text, no fragmented-vendor diagram).
 * The Figma file does not contain a visual pipeline of "Pitch deck → handoff → ...".
 * If you want that specific diagram built, it needs to be added to the Figma first,
 * or say the word and I'll build it as new content on top of this section.
 */
export default function CoordinationGap() {
  const scrollToJourney = (e) => {
    e.preventDefault()
    document.querySelector('#journey')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-16 md:py-28">
      <div className="max-w-content mx-auto px-6 lg:px-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] gap-10 md:gap-20">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.08em] text-blue">The problem</span>
            <h2 className="mt-3.5 text-[28px] md:text-[40px] leading-[1.15] font-extrabold tracking-[-0.02em] text-ink">
              Fundraising fails in the gaps between people.
            </h2>
          </div>

          <div>
            <p className="text-[17px] md:text-lg leading-[1.66] text-body">
              A designer builds the deck. A CA builds the model. A lawyer writes the agreements.
              Someone introduces you to an investor. Nobody owns the outcome, and the founder ends
              up being the project manager of their own raise — during the quarter they can least
              afford it.
            </p>
            <p className="mt-6 text-[17px] md:text-lg leading-[1.66] font-semibold text-ink">
              ZTH is one team across the whole arc: prepare the company, run the raise, then stay on
              the cap table conversation after it closes.
            </p>
            <a
              href="#journey"
              onClick={scrollToJourney}
              className="group inline-flex items-center gap-1.5 mt-7 text-sm font-semibold text-blue"
            >
              See the three stages
              <ArrowRight size={13} strokeWidth={2} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

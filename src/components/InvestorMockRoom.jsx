import Button from './Button'

const TAGS = ['Narrative', 'Clarity', 'Confidence']

export default function InvestorMockRoom() {
  return (
    <section className="bg-surface pb-16 md:pb-28" aria-labelledby="mockroom-heading">
      <div className="max-w-content mx-auto px-6 lg:px-[120px]">
        <div className="border border-border rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 bg-white">
          {/* Left: copy */}
          <div className="p-8 md:p-12">
            <span className="text-xs font-bold uppercase tracking-[0.08em] text-blue">
              Investor Mock Room · Coming soon
            </span>
            <h3
              id="mockroom-heading"
              className="mt-3.5 text-[26px] md:text-[30px] leading-[1.2] font-bold tracking-[-0.02em] text-ink"
            >
              Pressure-test your pitch before investors do.
            </h3>
            <p className="mt-4 max-w-[420px] text-[15px] leading-[1.62] text-body">
              A simulated investor conversation designed to help founders pressure-test the story,
              sharpen responses and notice where the narrative loses clarity.
            </p>
            <div className="mt-7">
              <Button variant="secondary" href="#cta">
                Join the waitlist
              </Button>
            </div>
          </div>

          {/* Right: simulated conversation preview, on the #F0F4FF background per brief */}
          <div className="p-6 md:p-8 flex flex-col justify-center gap-3.5 border-t md:border-t-0 md:border-l border-border bg-[#F0F4FF]">
            <div className="bg-white border border-border rounded p-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.06em] text-blue mb-1.5">
                VC Partner
              </p>
              <p className="text-[15px] font-semibold text-ink leading-[1.5]">
                &ldquo;What changes in the business if this round does not happen on the timeline
                you expect?&rdquo;
              </p>
            </div>

            <div className="bg-white border border-border rounded p-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.06em] text-body mb-1.5">
                Founder response
              </p>
              <p className="text-sm text-body leading-[1.5]">
                &ldquo;The plan separates the immediate operating priorities from the acceleration
                this capital enables. I would walk you through both paths and the decisions
                attached to each.&rdquo;
              </p>
            </div>

            <p className="text-sm font-semibold text-navy mt-1">Practice the room before you enter it.</p>

            <div className="flex gap-2 flex-wrap">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-bold uppercase tracking-[0.05em] text-blue bg-blue-50 rounded-full px-2.5 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-[13px] text-body text-center mt-2">
              Illustrative interface — product not yet released.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

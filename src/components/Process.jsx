const STEPS = [
  {
    n: '01',
    title: 'Readiness conversation',
    body: 'A 30-minute call about your stage, your numbers and what you\u2019re actually trying to raise. No deck required.',
  },
  {
    n: '02',
    title: 'Gap report',
    body: 'We tell you what\u2019s missing between where you are and what an investor will ask for \u2014 in writing, before you commit to anything.',
  },
  {
    n: '03',
    title: 'Build & raise',
    body: 'We close the gaps, then run the round with you: targeting, meetings, structuring, diligence.',
  },
  {
    n: '04',
    title: 'Stay on',
    body: 'Advisory, governance and growth support continue after the wire, straight into preparation for the next round.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-16 md:py-28">
      <div className="max-w-content mx-auto px-6 lg:px-[120px]">
        <div className="max-w-[720px]">
          <span className="text-xs font-bold uppercase tracking-[0.08em] text-blue">
            What working together looks like
          </span>
          <h2 className="mt-3.5 text-[28px] md:text-[40px] leading-[1.15] font-extrabold tracking-[-0.02em] text-ink">
            Four steps, and you know where you stand after the first one.
          </h2>
        </div>

        <div className="mt-14 border-t border-border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div
              key={step.n}
              className={`py-6 lg:py-8 border-b border-border lg:border-b-0
                ${i < STEPS.length - 1 ? 'lg:border-r' : ''} lg:pr-7
                ${i > 0 ? 'lg:pl-7' : ''} border-border`}
            >
              <span className="text-[13px] font-extrabold tracking-[0.06em] text-blue tabular-nums">
                {step.n}
              </span>
              <h4 className="mt-3.5 text-[17px] font-bold text-ink">{step.title}</h4>
              <p className="mt-2 text-sm leading-[1.6] text-body">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

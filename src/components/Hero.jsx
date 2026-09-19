import { Check } from 'lucide-react'
import Button from './Button'

const STAGES = [
  {
    label: 'Prepare',
    detail: 'Deck · Model · Valuation · Data room',
    state: 'Complete',
    status: 'done',
  },
  {
    label: 'Raise',
    detail: 'Investor access · Meetings · Term sheet',
    state: 'In progress',
    status: 'active',
  },
  {
    label: 'Grow',
    detail: 'Governance · Ops · Next round',
    state: 'Upcoming',
    status: 'upcoming',
  },
]

function StageNode({ status }) {
  if (status === 'done') {
    return (
      <span className="w-[23px] h-[23px] rounded-full bg-blue border border-blue grid place-items-center shrink-0">
        <Check size={11} strokeWidth={2.5} className="text-white" />
      </span>
    )
  }
  if (status === 'active') {
    return (
      <span className="relative w-[23px] h-[23px] rounded-full bg-white border border-blue grid place-items-center shrink-0">
        <span className="absolute inset-0 rounded-full shadow-[0_0_0_4px_rgba(36,73,184,0.1)]" />
        <span className="w-[7px] h-[7px] rounded-full bg-blue" />
      </span>
    )
  }
  return <span className="w-[23px] h-[23px] rounded-full bg-white border border-border shrink-0" />
}

export default function Hero() {
  return (
    <section id="hero" className="border-b border-border pt-16 md:pt-24 pb-16 md:pb-[88px] overflow-hidden">
      <div className="max-w-content mx-auto px-6 lg:px-[120px]">
        <span className="block text-right md:text-left text-[13px] md:text-[18px] font-bold uppercase tracking-[0.1em] text-blue mb-5">
          Create&nbsp;&nbsp;•&nbsp;&nbsp;Convert&nbsp;&nbsp;•&nbsp;&nbsp;Scale
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-12 lg:gap-[72px] items-center">
          {/* Left: copy */}
          <div>
            <h1 className="text-[38px] md:text-[64px] leading-[1.1] md:leading-[1.06] font-extrabold tracking-[-0.025em] text-ink">
              Where capital meets{' '}
              <span className="text-blue">execution.</span>
            </h1>

            <p className="mt-6 max-w-[520px] text-[17px] md:text-lg leading-[1.66] text-body">
              ZTH takes founders from &ldquo;we might raise&rdquo; to a closed round — and stays on
              afterwards. Readiness, investor access and advisory, run as one continuous engagement
              instead of six separate vendors.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-10">
              <Button
                variant="primary"
                showArrow
                href="#cta"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Talk to ZTH
              </Button>
              <Button
                variant="secondary"
                href="#process"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#process')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                See how it works
              </Button>
            </div>

            <div className="flex items-center gap-2 mt-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
              <span className="text-sm font-medium text-body">
                Start with a readiness conversation — we tell you what&rsquo;s missing before you commit.
              </span>
            </div>
          </div>

          {/* Right: Founder Engagement panel */}
          <div
            className="bg-white border border-border rounded-lg shadow-rest overflow-hidden"
            role="img"
            aria-label="Illustration of the ZTH engagement: Prepare complete, Raise in progress, Grow upcoming."
          >
            <div className="bg-surface border-b border-border px-5 py-4 flex items-center justify-between">
              <span className="text-[13px] font-bold uppercase tracking-[0.04em] text-ink">
                Founder Engagement
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.05em] text-blue bg-blue-50 rounded-full px-2 py-1">
                Live
              </span>
            </div>

            <div className="px-5 py-2">
              {STAGES.map((stage, i) => (
                <div key={stage.label} className="relative flex gap-4 py-4">
                  {i < STAGES.length - 1 && (
                    <span className="absolute left-[11px] top-10 bottom-[-8px] w-px bg-border" />
                  )}
                  <StageNode status={stage.status} />
                  <div className="flex-1">
                    <p className="text-sm font-bold text-ink">{stage.label}</p>
                    <p className="text-[13px] text-body mt-0.5">{stage.detail}</p>
                  </div>
                  <span
                    className={`text-[11px] font-bold uppercase tracking-[0.04em] self-center text-right ${
                      stage.status === 'done' ? 'text-blue' : 'text-body'
                    }`}
                  >
                    {stage.state}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-t border-border px-5 py-[18px]">
              <p className="text-[13px] text-body-muted">
                Readiness is scored across narrative, financials, compliance and data room.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

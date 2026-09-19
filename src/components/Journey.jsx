import { Check } from 'lucide-react'

const STAGES = [
  {
    id: 'prepare',
    step: 'Stage 01 — Prepare',
    heading: 'Become the company investors say yes to.',
    body: 'Before anyone sees your deck, the story, the numbers and the paperwork have to agree with each other. This is where most rounds are quietly lost.',
    items: [
      'A pitch deck that carries the argument, not just the brand',
      'A financial model you can defend line by line',
      'A valuation range with reasoning behind the number',
      'Incorporation, GST, ROC and founder agreements in order',
      'A data room built before diligence, not during it',
    ],
    outcome: 'A raise-ready company with the fundamentals investors expect.',
  },
  {
    id: 'raise',
    step: 'Stage 02 — Raise',
    heading: 'We stay in the room until the round closes.',
    body: 'Access is the easy half. The hard half is the follow-up email, the awkward question in meeting three, and the clause nobody explained to you.',
    items: [
      'Investor introductions and investor targeting',
      'Meeting preparation and pitch day support',
      'Term sheet review and negotiation on your side of the table',
      'Due diligence coordination through to the final wire',
    ],
    outcome: 'A closed round with the right structure and the right partners.',
  },
  {
    id: 'grow',
    step: 'Stage 03 — Grow',
    heading: 'Build beyond the round.',
    body: 'The money arriving is a start date, not a finish line. The next eighteen months decide whether there is a next round at all.',
    items: [
      'Financial advisory and investor reporting',
      'Governance, compliance and board rhythm',
      'GTM, hiring and operating support as you scale',
      'Strategic partnerships and follow-on round support',
    ],
    outcome: 'A company prepared for the next raise.',
  },
]

function JourneyCard({ stage }) {
  return (
    <div
      id={stage.id}
      className="bg-white border border-border rounded-lg p-8 h-full transition-all duration-200 hover:border-[#B9C8EE] hover:shadow-hover hover:-translate-y-0.5"
    >
      <span className="text-xs font-bold uppercase tracking-[0.08em] text-blue">{stage.step}</span>
      <h3 className="mt-2.5 text-[22px] leading-[1.35] font-bold tracking-[-0.01em] text-ink">
        {stage.heading}
      </h3>
      <p className="mt-2.5 text-[15px] leading-[1.62] text-body">{stage.body}</p>

      <div className="mt-6 pt-5 border-t border-border flex flex-col gap-3">
        {stage.items.map((item) => (
          <div key={item} className="flex items-start gap-2.5">
            <Check size={14} strokeWidth={2} className="text-blue shrink-0 mt-1" />
            <span className="text-sm font-medium text-body-dark">{item}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 bg-blue-50 rounded p-3.5">
        <span className="block text-[11px] font-bold uppercase tracking-[0.06em] text-blue mb-0.5">
          You walk away with
        </span>
        <span className="text-[13px] font-semibold text-navy">{stage.outcome}</span>
      </div>
    </div>
  )
}

export default function Journey() {
  return (
    <section id="journey" className="bg-surface border-y border-border py-16 md:py-28">
      <div className="max-w-content mx-auto px-6 lg:px-[120px]">
        <div className="max-w-[720px]">
          <span className="text-xs font-bold uppercase tracking-[0.08em] text-blue">
            Prepare → Raise → Grow
          </span>
          <h2 className="mt-3.5 text-[28px] md:text-[40px] leading-[1.15] font-extrabold tracking-[-0.02em] text-ink">
            Three stages. One team. One continuous line.
          </h2>
          <p className="mt-4 text-[17px] md:text-lg leading-[1.66] text-body">
            Most founders arrive somewhere in the middle of this. Find where you are — we start
            there, not at the beginning.
          </p>
        </div>

        {/* Rail — desktop only; the three cards carry the sequence on mobile via their own labels */}
        <div className="hidden lg:block relative mt-14">
          <span className="absolute top-[11px] left-0 right-0 h-px bg-gradient-to-r from-blue via-blue/40 to-blue/10" />
          <div className="grid grid-cols-3 gap-6 relative">
            {STAGES.map((stage) => (
              <div key={stage.id}>
                <span className="relative z-10 block w-[23px] h-[23px] rounded-full bg-white border border-blue">
                  <span className="absolute inset-0 m-auto w-[7px] h-[7px] rounded-full bg-blue" />
                </span>
                <div className="mt-7">
                  <JourneyCard stage={stage} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: stacked, no rail */}
        <div className="lg:hidden flex flex-col gap-8 mt-10">
          {STAGES.map((stage) => (
            <JourneyCard key={stage.id} stage={stage} />
          ))}
        </div>
      </div>
    </section>
  )
}

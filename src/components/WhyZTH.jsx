const CARDS = [
  {
    title: 'One team, not six vendors',
    body: 'One coordinated engagement across readiness, capital and growth.',
  },
  {
    title: 'Deliverables you own',
    body: 'Decks, models, diligence materials and systems built to stay useful after the round.',
  },
  {
    title: "We don't leave at the close",
    body: 'The relationship continues into governance, growth and future fundraising.',
  },
]

export default function WhyZTH() {
  return (
    <section id="why" className="bg-surface border-y border-border py-16 md:py-28">
      <div className="max-w-content mx-auto px-6 lg:px-[120px]">
        <div className="max-w-[720px]">
          <span className="text-xs font-bold uppercase tracking-[0.08em] text-blue">
            Why founders choose ZTH
          </span>
          <h2 className="mt-3.5 text-[28px] md:text-[40px] leading-[1.15] font-extrabold tracking-[-0.02em] text-ink">
            Advisors hand you a document. We stay accountable for the outcome.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-white border border-border rounded-lg p-8 transition-all duration-200 hover:border-[#B9C8EE] hover:shadow-hover hover:-translate-y-0.5"
            >
              <h4 className="text-[19px] font-bold text-ink">{card.title}</h4>
              <p className="mt-2.5 text-[15px] leading-[1.62] text-body">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const NAMES = ['VidMart', 'Snapgo', 'Nextor', 'Stoik Sports', 'Travysys', 'Cogknit', 'Shanadzzar']

export default function TrustStrip() {
  return (
    <section className="border-b border-border bg-surface py-9" aria-label="Founder engagements">
      <div className="max-w-content mx-auto px-6 lg:px-[120px]">
        <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-10">
          <span className="text-xs font-bold uppercase tracking-[0.08em] text-body whitespace-nowrap shrink-0">
            Founder engagements
          </span>
          <div className="flex gap-6 md:gap-9 overflow-x-auto md:flex-wrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {NAMES.map((name) => (
              <span
                key={name}
                className="text-base font-bold tracking-[-0.01em] text-[#8A93A3] hover:text-ink transition-colors whitespace-nowrap shrink-0"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

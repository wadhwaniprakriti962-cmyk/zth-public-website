const STATS = [
  { value: '\u2014', label: 'Businesses supported', tag: 'Needs real figure' },
  { value: '\u2014', label: 'Sectors covered', tag: 'Needs real figure' },
  { value: '\u2014', label: 'Ecosystem connections', tag: 'Needs real figure' },
  { value: '7', label: 'Named founder engagements shown above', tag: 'Verified from site' },
]

export default function Credibility() {
  return (
    <section className="py-16 md:py-28">
      <div className="max-w-content mx-auto px-6 lg:px-[120px]">
        <div className="max-w-[720px]">
          <span className="text-xs font-bold uppercase tracking-[0.08em] text-blue">Track record</span>
          <h2 className="mt-3.5 text-[28px] md:text-[40px] leading-[1.15] font-extrabold tracking-[-0.02em] text-ink">
            Numbers we can stand behind.
          </h2>
          <p className="mt-4 text-[17px] md:text-lg leading-[1.66] text-body">
            Figures below are placeholders pending verified data from ZTH. Nothing here is
            invented — each tile is a slot for a real, checkable number.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <div key={stat.label} className="border border-border rounded-lg p-7">
              <span className={`block font-extrabold tracking-[-0.02em] text-navy ${stat.value === '\u2014' ? 'text-[34px]' : 'text-[26px]'}`}>
                {stat.value}
              </span>
              <span className="block text-sm text-body mt-1.5">{stat.label}</span>
              <span className="inline-block mt-3 text-[10px] font-bold uppercase tracking-[0.06em] text-[#9AA3B2] border border-dashed border-[#C9D2E0] rounded px-1.5 py-0.5">
                {stat.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import Button from './Button'

const META = [
  {
    label: "What we'll ask",
    body: "Your stage, what you're raising, and what already exists.",
  },
  {
    label: 'What you get back',
    body: 'A written view of the gaps between you and a term sheet.',
  },
  {
    label: 'Response time',
    body: 'We review every submission personally.',
  },
]

export default function FinalCTA() {
  return (
    <section id="cta" className="bg-navy py-16 md:py-[104px]">
      <div className="max-w-content mx-auto px-6 lg:px-[120px]">
        <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#7FA0E8]">
          Let&rsquo;s work together
        </span>
        <h2 className="mt-4 max-w-[760px] text-[28px] md:text-[40px] leading-[1.15] font-bold tracking-[-0.02em] text-white">
          Tell us where you are. We&rsquo;ll tell you what&rsquo;s missing.
        </h2>
        <p className="mt-5 max-w-[560px] text-[17px] md:text-lg leading-[1.66] text-[#B9C6E4]">
          Start with a readiness conversation. You&rsquo;ll leave it knowing what an investor will
          ask for and whether you&rsquo;re ready to be asked — whether or not you work with us.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-10">
          <Button
            variant="primary"
            showArrow
            className="!bg-white !text-navy hover:!bg-white/90"
          >
            Talk to ZTH
          </Button>
          <button className="h-[50px] px-6 rounded border border-white/28 text-white font-semibold text-[15px] hover:border-white transition-colors">
            I&rsquo;m an investor
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 mt-16 pt-8 border-t border-white/14">
          {META.map((item) => (
            <div key={item.label}>
              <span className="block text-xs font-bold uppercase tracking-[0.08em] text-[#7FA0E8] mb-2">
                {item.label}
              </span>
              <p className="text-[15px] text-[#DCE5FA] leading-[1.5]">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

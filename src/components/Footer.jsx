const scrollTo = (e, href) => {
  e.preventDefault()
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border pt-16 pb-8">
      <div className="max-w-content mx-auto px-6 lg:px-[120px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <a href="#hero" onClick={(e) => scrollTo(e, '#hero')} className="flex items-center gap-[9px] mb-4">
              <span className="w-7 h-7 rounded-md bg-blue text-white grid place-items-center text-sm font-extrabold">
                Z
              </span>
              <span className="font-extrabold text-[19px] tracking-[-0.03em] text-ink">ZTH</span>
            </a>
            <p className="max-w-[280px] text-sm text-body">
              Capital access, fundraising readiness and growth advisory for ambitious founders.
            </p>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-[0.08em] text-ink mb-[18px]">Journey</h5>
            <ul className="flex flex-col gap-[11px]">
              <li>
                <a href="#journey" onClick={(e) => scrollTo(e, '#journey')} className="text-sm text-body hover:text-blue transition-colors">
                  Prepare
                </a>
              </li>
              <li>
                <a href="#journey" onClick={(e) => scrollTo(e, '#journey')} className="text-sm text-body hover:text-blue transition-colors">
                  Raise
                </a>
              </li>
              <li>
                <a href="#journey" onClick={(e) => scrollTo(e, '#journey')} className="text-sm text-body hover:text-blue transition-colors">
                  Grow
                </a>
              </li>
              <li>
                <a href="#process" onClick={(e) => scrollTo(e, '#process')} className="text-sm text-body hover:text-blue transition-colors">
                  How it works
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-[0.08em] text-ink mb-[18px]">Company</h5>
            <ul className="flex flex-col gap-[11px]">
              <li>
                <a href="#why" onClick={(e) => scrollTo(e, '#why')} className="text-sm text-body hover:text-blue transition-colors">
                  Why ZTH
                </a>
              </li>
              <li>
                <span className="text-sm text-body">Investor Mock Room</span>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-[0.08em] text-ink mb-[18px]">Contact</h5>
            <ul className="flex flex-col gap-[11px]">
              <li>
                <a href="mailto:zth@zth.co.in" className="text-sm text-body hover:text-blue transition-colors">
                  zth@zth.co.in
                </a>
              </li>
              <li>
                <a href="tel:+917219422299" className="text-sm text-body hover:text-blue transition-colors">
                  +91 72194 22299
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border">
          <p className="text-[13px] text-body">© 2026 ZTH, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

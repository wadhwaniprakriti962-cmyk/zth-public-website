import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'How it works', href: '#process' },
  { label: 'Prepare', href: '#journey' },
  { label: 'Raise', href: '#journey' },
  { label: 'Grow', href: '#journey' },
  { label: 'Why ZTH', href: '#why' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 bg-white/88 backdrop-blur-[10px] border-b border-border">
      <div className="max-w-content mx-auto flex items-center justify-between h-[72px] px-6 lg:px-[120px]">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-[9px] font-extrabold text-[19px] tracking-[-0.03em] text-ink"
          aria-label="ZTH home"
        >
          <span className="w-7 h-7 rounded-md bg-blue text-white grid place-items-center text-sm font-extrabold">
            Z
          </span>
          ZTH
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative py-1 text-[15px] font-semibold text-body-dark hover:text-ink transition-colors
                after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[1.5px] after:w-0 after:bg-blue
                after:transition-all after:duration-200 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-5">
          <span className="text-sm font-semibold text-body">ZTH OS</span>
          <a
            href="#cta"
            onClick={(e) => handleNavClick(e, '#cta')}
            className="h-[42px] px-5 inline-flex items-center rounded bg-blue text-white text-sm font-semibold hover:bg-blue-hover transition-colors"
          >
            Talk to ZTH
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden w-[42px] h-[42px] border border-border rounded grid place-items-center"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

     {/* Mobile drawer */}
{open && (
  <div className="md:hidden absolute top-[72px] left-0 w-full bg-white border-t border-border shadow-lg z-[100] px-6 py-8">
    <nav className="flex flex-col gap-6" aria-label="Mobile primary">
      {NAV_LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          onClick={(e) => handleNavClick(e, link.href)}
          className="block text-xl font-bold text-ink"
        >
          {link.label}
        </a>
      ))}

      <a
        href="#cta"
        onClick={(e) => handleNavClick(e, '#cta')}
        className="mt-4 w-full h-[50px] flex items-center justify-center rounded bg-blue text-white font-semibold"
      >
        Talk to ZTH
      </a>
    </nav>
  </div>
)}
    </header>
  )
}

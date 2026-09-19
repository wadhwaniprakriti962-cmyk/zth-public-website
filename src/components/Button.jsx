import { ArrowRight } from 'lucide-react'

/**
 * Button — matches Figma "Component 1" (secondary) / "Component 3" (primary)
 * variant: 'primary' | 'secondary'
 * showArrow: adds the trailing arrow icon that nudges right on hover
 */
export default function Button({
  children,
  variant = 'primary',
  showArrow = false,
  href,
  onClick,
  className = '',
  ariaLabel,
}) {
  const base =
    'group inline-flex items-center gap-2 h-[50px] px-6 rounded font-semibold text-[15px] leading-[1.5] transition-all duration-200 cursor-pointer'

  const styles =
    variant === 'primary'
      ? 'bg-blue text-white hover:bg-blue-hover hover:-translate-y-px hover:shadow-[0_6px_18px_rgba(36,73,184,0.22)]'
      : 'bg-white text-ink border border-border hover:border-blue hover:text-blue'

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight
          size={14}
          strokeWidth={2}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </>
  )

  if (href) {
    return (
      <a href={href} onClick={onClick} aria-label={ariaLabel} className={`${base} ${styles} ${className}`}>
        {content}
      </a>
    )
  }

  return (
    <button onClick={onClick} aria-label={ariaLabel} className={`${base} ${styles} ${className}`}>
      {content}
    </button>
  )
}

interface HeroSectionProps {
  eyebrow: string
  title: string
  subtitle: string
  ctaLabel: string
}

export function HeroSection({ eyebrow, title, subtitle, ctaLabel }: HeroSectionProps) {
  return (
    <section className="hero">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="subtitle">{subtitle}</p>
      </div>
      <button className="primary-button">{ctaLabel}</button>
    </section>
  )
}

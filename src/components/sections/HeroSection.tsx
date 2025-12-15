import { AcertentiyGlow } from '../ui/AcertentiyGlow'
import { Button } from '../ui/Button'
import { heroHighlights } from '../../data/modules'
import { useInView } from '../../lib/useInView'

interface HeroSectionProps {
  onStart: () => void
  onExplore: () => void
}

export function HeroSection({ onStart, onExplore }: HeroSectionProps) {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.12 })

  return (
    <section ref={ref} className="relative overflow-hidden px-6 pt-10 pb-24 text-white sm:px-10 lg:px-0">
      <div className="pointer-events-none absolute inset-x-10 -top-24 z-0 h-96 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 blur-[120px]" />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.8fr]">
          <div className="space-y-6">
            <p className={`inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/70 reveal ${inView ? 'visible' : ''}`}>
              <span className="h-2 w-2 rounded-full bg-secondary" />
              AI-Powered Education Platform
            </p>
            <h1 className={`font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl reveal ${inView ? 'visible' : ''}`}>
              Welcome to EduPulse
            </h1>
            <p className={`text-lg text-white/75 reveal delay-1 ${inView ? 'visible' : ''}`}>
              The complete educational ecosystem that unifies AI personalization, gamification, and operational control in a single, intentional surface.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" onClick={onStart} className={`reveal delay-2 ${inView ? 'visible' : ''}`}>
                Get Started
              </Button>
              <Button variant="ghost" onClick={onExplore} className={`reveal delay-3 ${inView ? 'visible' : ''}`}>
                Explore Modules
              </Button>
            </div>
          </div>
          <AcertentiyGlow className="hidden md:block">
            <div className={`space-y-4 reveal delay-2 ${inView ? 'visible' : ''}`}>
              <div className="flex items-center justify-between text-sm font-semibold text-white/60">
                <span>Pulse score</span>
                <span className="text-secondary">Live</span>
              </div>
              <p className="text-4xl font-bold text-white">98% uptime</p>
              <p className="text-sm text-white/70">
                Smooth playback across every module before exams and new class launches.
              </p>
              <div className="grid gap-4 text-sm text-white/80">
                <div className="flex items-center justify-between border-t border-white/10 pt-3">
                  <span>Teachers onboarded</span>
                  <strong>1,200+</strong>
                </div>
                <div className="flex items-center justify-between border-t border-white/10 pt-3">
                  <span>Automated suggestions</span>
                  <strong>4.7M</strong>
                </div>
              </div>
            </div>
          </AcertentiyGlow>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {heroHighlights.map((panel, idx) => (
            <div
              key={panel.title}
              style={{ transitionDelay: `${idx * 80}ms` }}
              className={`rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-white/80 shadow-[0_15px_40px_rgba(9,7,17,0.4)] reveal ${inView ? 'visible' : ''}`}
            >
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">{panel.title}</p>
              <p className="mt-3 text-2xl font-semibold text-white">{panel.value}</p>
              <p className="mt-2 text-white/70">{panel.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

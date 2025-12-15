import { modules } from '../../data/modules'
import { AcertentiyGlow } from '../ui/AcertentiyGlow'
import { Card } from '../ui/Card'
import { useInView } from '../../lib/useInView'
import type { RefObject } from 'react'

interface ModulesSectionProps {
  sectionRef: RefObject<HTMLElement>
  highlightRef: RefObject<HTMLDivElement>
}

export function ModulesSection({ sectionRef, highlightRef }: ModulesSectionProps) {
  const { ref: gridRef, inView } = useInView<HTMLDivElement>({ threshold: 0.12 })

  return (
    <section ref={sectionRef} className="relative px-6 pb-28 pt-12 sm:px-10 lg:px-0">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <div className="space-y-2 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">Modules</p>
          <h2 className="font-heading text-4xl font-semibold text-white sm:text-5xl">
            Comprehensive Platform Modules
          </h2>
          <p className="text-white/70">
            Every journey is unified: operations, AI learning, gamified engagement, and insight reports live inside one luminous stage.
          </p>
        </div>
        <AcertentiyGlow className="mx-auto w-full max-w-3xl">
          <div className="space-y-1 text-center text-sm text-white/70">
            <p>Shadcn-inspired hierarchy keeps each module discoverable with consistent spacing, badges, and gradients.</p>
            <p>
              The glowing frame nods to the Acertentiy UI aesthetic—layered lighting, subtle blur, and tactile depth.
            </p>
          </div>
        </AcertentiyGlow>
        <div ref={gridRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, idx) => {
            const cardContent = (
              <Card
                id={module.id}
                className="h-full bg-gradient-to-b from-white/5 to-white/0 text-white"
              >
                <div className="flex items-center justify-between gap-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${module.accent} text-2xl shadow-[0_20px_60px_rgba(0,0,0,0.45)]`}
                  >
                    {module.icon}
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-[0.65rem] tracking-[0.35em] uppercase ${
                      module.status === 'coming-soon'
                        ? 'bg-orange-500/30 text-orange-300'
                        : 'bg-emerald-500/20 text-emerald-200'
                    }`}
                  >
                    {module.status === 'coming-soon' ? 'Coming soon' : 'Live'}
                  </span>
                </div>
                <div className="mt-5 space-y-2">
                  <h3 className="text-xl font-semibold text-white">{module.title}</h3>
                  <p className="text-sm text-white/70">{module.description}</p>
                </div>
                <ul className="mt-5 space-y-3 text-sm text-white/70">
                  {module.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="text-secondary">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )

            const wrapper = (
              <div
                key={module.id}
                className={`reveal ${inView ? 'visible' : ''}`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                {cardContent}
              </div>
            )

            return module.id === 'admin-operations' ? (
              <div key={module.id} ref={highlightRef}>
                {wrapper}
              </div>
            ) : (
              wrapper
            )
          })}
        </div>
      </div>
    </section>
  )
}

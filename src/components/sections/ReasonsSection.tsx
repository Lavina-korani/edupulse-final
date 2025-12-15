import { reasons } from '../../data/modules'
import { Card } from '../ui/Card'

export function ReasonsSection() {
  return (
    <section className="px-6 pb-24 pt-10 sm:px-10 lg:px-0">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">Why choose EduPulse?</p>
          <h2 className="font-heading text-4xl font-semibold text-white sm:text-5xl">Why choose EduPulse?</h2>
          <p className="text-white/70">
            A connected experience where design, data, and delight keep teachers in the flow.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <Card key={reason.title} className="space-y-4">
              <div className="text-2xl">{reason.icon}</div>
              <div className="space-y-2 text-sm text-white/70">
                <p className="font-semibold text-white">{reason.title}</p>
                <p>{reason.description}</p>
                {reason.metric && <p className="text-xs uppercase tracking-[0.3em] text-white/40">{reason.metric}</p>}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

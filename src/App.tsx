import { useCallback, useRef } from 'react'
import { Footer } from './components/sections/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { MainNav } from './components/navigation/MainNav'
import { ModulesSection } from './components/sections/ModulesSection'
import { ReasonsSection } from './components/sections/ReasonsSection'

export function App() {
  const modulesSectionRef = useRef<HTMLElement>(null)
  const adminHighlightRef = useRef<HTMLDivElement>(null)

  const handleStart = useCallback(() => {
    adminHighlightRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [])

  const handleExplore = useCallback(() => {
    modulesSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <div className="min-h-screen bg-[#020314] text-white">
      <MainNav />
      <main className="pt-6">
        <HeroSection onStart={handleStart} onExplore={handleExplore} />
        <ModulesSection sectionRef={modulesSectionRef} highlightRef={adminHighlightRef} />
        <ReasonsSection />
      </main>
      <Footer />
    </div>
  )
}

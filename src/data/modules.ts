export type EduModule = {
  id: string
  title: string
  description: string
  features: string[]
  accent: string
  status?: 'live' | 'coming-soon'
  icon: string
}

export const modules: EduModule[] = [
  {
    id: 'admin-operations',
    title: 'Admin & School Operations',
    description: 'Robust control center for attendance, fees, communication, and AI timetable orchestration.',
    features: [
      'Smart attendance system with live analytics',
      'AI-powered timetable and resource scheduling',
      'Fee, alumni, and parent database orchestration',
      'Automated notification engine (SMS, email, chat)'
    ],
    accent: 'from-primary/70 via-indigo-500/60 to-sky-500/40',
    status: 'live',
    icon: '🧭'
  },
  {
    id: 'ai-learning',
    title: 'AI-Powered Learning',
    description: 'Adaptive journeys that nudge every student forward with prompts, recaps, and coaching.',
    features: [
      'Adaptive learning engine with mastery checkpoints',
      'Personalized topic scheduling and reminders',
      'Real-time progress tracking + teacher alerts',
      'AI-generated personalized coaching notes'
    ],
    accent: 'from-emerald-500/70 via-secondary/70 to-cyan-500/50',
    status: 'live',
    icon: '🤖'
  },
  {
    id: 'gamification',
    title: 'Gamification Hub',
    description: 'Motivation-first activities with flashcards, streaks, leaderboards, and challenges.',
    features: [
      'Flashcard engine with spaced repetition',
      'Points, badges, and streak tracking',
      'Class-wide leaderboards and insights',
      'Interactive quizzes with instant feedback'
    ],
    accent: 'from-amber-500/80 via-orange-500/60 to-rose-500/50',
    status: 'live',
    icon: '🏆'
  },
  {
    id: 'resource-library',
    title: 'Resource Library',
    description: 'Organize videos, PDFs, live docs, and assignments in a single searchable vault.',
    features: [
      'Searchable lecture and syllabus library',
      'Assignment distribution with due-date automation',
      'Automated feedback loops for every submission',
      'Multi-format content support and previews'
    ],
    accent: 'from-sky-500/70 via-blue-500/60 to-indigo-500/50',
    status: 'live',
    icon: '📚'
  },
  {
    id: 'future-tools',
    title: 'Future AI Tools',
    description: 'Next-generation assistants sketching problems, scaffolding reasoning, and surfacing recommendations.',
    features: [
      'OCR-based problem recognition for handwritten homework',
      'AI-generated step-by-step explanation builder',
      'Smart study recommendations with pacing cues',
      'Predictive performance analytics ahead of assessments'
    ],
    accent: 'from-fuchsia-500/70 via-purple-600/50 to-indigo-500/40',
    status: 'coming-soon',
    icon: '🔮'
  },
  {
    id: 'analytics',
    title: 'Analytics & Reports',
    description: 'Visual dashboards and export-ready reports for school leaders and parents.',
    features: [
      'Student performance analytics and cohort trends',
      'Attendance and behavior reports with alerts',
      'Custom report builder with PDF/Excel export',
      'Live data API for SIS and LMS sync'
    ],
    accent: 'from-zinc-900 via-slate-900 to-slate-800',
    status: 'coming-soon',
    icon: '📈'
  }
]

export type Reason = {
  title: string
  description: string
  icon: string
  metric?: string
}

export const reasons: Reason[] = [
  {
    title: 'Lightning Fast',
    description: 'Edge-cached modules and precomputed dashboards keep educators moving.',
    icon: '⚡',
    metric: 'sub-200ms interactions'
  },
  {
    title: 'AI-Powered Co-pilot',
    description: 'Shadcn-inspired UI keeps controls clear while allowing deep customization.',
    icon: '🧠',
    metric: '98% automation satisfaction'
  },
  {
    title: 'Track Every Pulse',
    description: 'Multi-tenant analytics unify students, teachers, and parents into one view.',
    icon: '📊',
    metric: 'weekly executive reports'
  },
  {
    title: 'Gamified Engagement',
    description: 'Acertentiy-style glow surfaces highlight motivations and rewards.',
    icon: '🎮',
    metric: '3x longer study sessions'
  }
]

export const heroHighlights = [
  {
    title: 'AI-Driven Learning',
    value: 'Adaptive mastery',
    description: 'Paths update when students need stretch or remediation.'
  },
  {
    title: 'Engaging Activities',
    value: 'Games + projects',
    description: 'Real-time feedback keeps challenge aligned with flow.'
  },
  {
    title: 'Complete Operations',
    value: 'All-in-one platform',
    description: 'Scheduling, billing, communication, and reporting in one hub.'
  }
]

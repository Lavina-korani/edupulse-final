import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7055F5',
        secondary: '#10B981',
        accent: '#F59E0B',
        'background-ink': '#09070B',
        'surface-soft': '#111318',
        'surface-muted': '#1f1f26'
      },
      fontFamily: {
        heading: ['Space Grotesk', 'Inter', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        focus: '0 0 0 3px rgba(112, 85, 245, 0.4)',
        card: '0 20px 40px rgba(10, 10, 15, 0.25)'
      }
    }
  },
  plugins: []
}

export default config

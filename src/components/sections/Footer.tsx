export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#020314] px-6 py-12 text-white sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <a href="#" className="flex items-center gap-3 text-lg font-semibold tracking-wide text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-2xl">
                ⚡
              </span>
              <span>EduPulse</span>
            </a>
            <p className="mt-4 text-sm text-white/70">© 2025 EduPulse Platform. Empowering education through technology.</p>
          </div>

          <div className="flex justify-between gap-8 md:justify-center">
            <div>
              <h4 className="mb-3 text-sm font-semibold text-white/80">Product</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#ai-learning" className="hover:text-white">AI Learning</a></li>
                <li><a href="#gamification" className="hover:text-white">Gamification</a></li>
                <li><a href="#analytics" className="hover:text-white">Analytics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-white/80">Company</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#about" className="hover:text-white">About</a></li>
                <li><a href="#careers" className="hover:text-white">Careers</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="md:text-right">
            <h4 className="mb-3 text-sm font-semibold text-white/80">Stay updated</h4>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input id="footer-email" type="email" placeholder="you@school.edu" className="w-full rounded-full border border-white/10 bg-white/3 px-4 py-2 text-sm text-white/90 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" />
              <button className="ml-2 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2 text-sm font-semibold text-white">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}

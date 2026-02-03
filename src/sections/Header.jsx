const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-20">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between text-white">
        {/* Status */}
        <span className="text-sm text-neutral-300 border border-neutral-700 px-3 py-1 rounded-full">
          Available for hire
        </span>

        {/* Toggle / Theme */}
        <button className="text-sm text-neutral-400 hover:text-white transition">
          Toggle
        </button>

        {/* Social Links */}
        <nav className="flex gap-4 text-neutral-400">
          <a href="https://github.com/Belema7" target="_blank"  className="hover:text-white transition">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/belemagirma/" target="_blank" className="hover:text-white transition">
            LinkedIn
          </a>
          <a href="https://x.com/BelemaGr" target="_blank" className="hover:text-white transition">
            Twitter
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
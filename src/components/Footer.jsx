export default function Footer() {
  return (
    <footer className="bg-[#0f172a] border-t border-white/10 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Ishaan Ranjan. All rights reserved.
        </p>
        <div className="flex gap-5">
          <a
            href="https://github.com/ishaan-ranjan16"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-accentLight transition-colors material-icons"
          >
            code
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-accentLight transition-colors material-icons"
          >
            work
          </a>
          <a
            href="mailto:your-email@example.com"
            className="text-gray-400 hover:text-accentLight transition-colors material-icons"
          >
            mail
          </a>
        </div>
      </div>
    </footer>
  )
}

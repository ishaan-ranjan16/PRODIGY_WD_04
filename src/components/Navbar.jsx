import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-gradient">
          Ishaan.dev
        </NavLink>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm font-medium transition-colors ${
                  isActive ? 'text-accentLight' : 'text-gray-300 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <span className="flex flex-col items-center">
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navUnderline"
                      className="h-0.5 w-full bg-accentLight mt-1 rounded-full"
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white material-icons"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'close' : 'menu'}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-[#0f172a] border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-sm font-medium ${
                      isActive ? 'text-accentLight' : 'text-gray-300'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 },
}

export default function Home() {
  return (
    <motion.section
      {...pageTransition}
      className="gradient-bg min-h-[85vh] flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accentLight font-medium mb-3">Hi, my name is</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Ishaan Ranjan
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gradient mb-6">
            I build things for the web.
          </h2>
          <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
            I'm a web developer specializing in building exceptional digital
            experiences. Currently focused on creating accessible,
            data-driven applications using Python and React.
          </p>
          <div className="flex gap-4">
            <Link
              to="/projects"
              className="px-6 py-3 bg-accent hover:bg-accentLight transition-colors rounded-full text-white font-medium"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border border-white/30 hover:border-accentLight transition-colors rounded-full text-white font-medium"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center shadow-2xl shadow-accent/30">
            <span className="material-icons text-white text-9xl">person</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

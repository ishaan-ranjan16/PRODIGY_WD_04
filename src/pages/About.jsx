import { motion } from 'framer-motion'

const skills = [
  'JavaScript / TypeScript',
  'React.js',
  'Python',
  'PostgreSQL',
  'Streamlit',
  'Tailwind CSS',
  'Git & GitHub',
  'REST APIs',
]

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
      <div className="w-16 h-1 bg-accentLight rounded-full mb-10" />

      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-4 text-gray-300 leading-relaxed">
          <p>
            I'm a web developer with a passion for building clean, functional
            applications that solve real problems. My background combines
            software development with data-driven thinking — I enjoy turning
            messy requirements into polished, usable products.
          </p>
          <p>
            Recently, I've been building an{' '}
            <span className="text-accentLight font-medium">
              Inventory Management System
            </span>{' '}
            using Streamlit and PostgreSQL, focusing on clean UI/UX, precise
            grid layouts, and robust data handling.
          </p>
          <p>
            <span className="text-white font-semibold">Education:</span> B.Tech
            in Computer Science (or your relevant degree).
          </p>
          <p>
            <span className="text-white font-semibold">Experience:</span> Add
            your internships, freelance projects, or work history here.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Skills</h3>
          <ul className="space-y-2">
            {skills.map((skill, i) => (
              <motion.li
                key={skill}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 text-gray-300"
              >
                <span className="material-icons text-accentLight text-base">
                  check_circle
                </span>
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  )
}

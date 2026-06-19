import { motion } from 'framer-motion'

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-accentLight/50 transition-colors"
    >
      <div className="h-44 bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center">
        <span className="material-icons text-white text-5xl">{project.icon}</span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accentLight"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-accentLight hover:underline flex items-center gap-1"
          >
            <span className="material-icons text-base">launch</span> Live
          </a>
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray-300 hover:underline flex items-center gap-1"
          >
            <span className="material-icons text-base">code</span> Code
          </a>
        </div>
      </div>
    </motion.div>
  )
}

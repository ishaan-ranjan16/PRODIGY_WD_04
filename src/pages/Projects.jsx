import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <h2 className="text-3xl font-bold text-white mb-2">My Projects</h2>
      <div className="w-16 h-1 bg-accentLight rounded-full mb-10" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </motion.section>
  )
}

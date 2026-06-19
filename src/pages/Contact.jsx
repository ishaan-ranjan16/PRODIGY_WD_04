import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Hook this up to your backend / form service (e.g. Formspree, EmailJS)
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="max-w-2xl mx-auto px-6 py-20"
    >
      <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
      <div className="w-16 h-1 bg-accentLight rounded-full mb-8" />
      <p className="text-gray-300 mb-10">
        Have a project in mind or just want to say hi? Fill out the form
        below.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm text-gray-300 mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-accentLight"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-accentLight"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-1">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-accentLight"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="px-6 py-3 bg-accent hover:bg-accentLight transition-colors rounded-full text-white font-medium flex items-center gap-2"
        >
          <span className="material-icons text-base">send</span> Send Message
        </motion.button>
        {sent && (
          <p className="text-green-400 text-sm mt-2">
            ✓ Message sent (connect a backend to actually deliver it).
          </p>
        )}
      </form>
    </motion.section>
  )
}

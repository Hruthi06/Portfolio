import { motion } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-full">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter"
        >
          H.Portfolio
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              href={link.href}
              className="text-sm uppercase tracking-widest text-zinc-400 hover:text-white transition-colors flex items-center gap-1 group"
            >
              {link.name}
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-x-0.5 group-hover:translate-y-0" />
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors"
        >
          Let's Talk
        </motion.button>
      </div>
    </nav>
  )
}

export default Navbar

import { motion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.5 } 
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } 
    },
  }

  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl"
      >
        <motion.p 
          variants={itemVariants}
          className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-6 font-mono"
        >
          Visual Designer • Developer • Creator
        </motion.p>

        <motion.h1 
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-4 text-gradient"
        >
          CRAFTING DIGITAL <br /> EXPERIENCES
        </motion.h1>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12"
        >
          <p className="text-zinc-500 max-w-sm text-sm md:text-base leading-relaxed font-light">
            Blending aesthetics with technical excellence to create truly immersive web applications.
          </p>
          
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group cursor-pointer"
          >
            <ArrowDownRight className="w-6 h-6 group-hover:rotate-45 transition-transform duration-500" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Background Decorative Element */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-white/20 to-transparent"></div>
        <span className="text-[10px] uppercase tracking-widest text-zinc-600 vertical-text font-mono">
            Scroll to explore
        </span>
      </motion.div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
        }
      `}</style>
    </section>
  )
}

export default Hero

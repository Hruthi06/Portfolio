import { motion } from 'framer-motion'
import { ArrowUpRight, Github, LayoutGrid, Cpu, Palette } from 'lucide-react'

const projects = [
  {
    title: 'AI Dashboard',
    category: 'Full Stack',
    icon: <Cpu className="w-5 h-5" />,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    gridSpan: 'md:col-span-2 md:row-span-1',
  },
  {
    title: 'Crystal UI',
    category: 'Design System',
    icon: <Palette className="w-5 h-5" />,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    gridSpan: 'md:col-span-1 md:row-span-2',
  },
  {
    title: 'Orbit 3D',
    category: 'Three.js',
    icon: <LayoutGrid className="w-5 h-5" />,
    image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=800',
    gridSpan: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Glass Logic',
    category: 'Development',
    icon: <Github className="w-5 h-5" />,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    gridSpan: 'md:col-span-2 md:row-span-1',
  },
]

function PortfolioGrid() {
  return (
    <section id="work" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl font-bold tracking-tighter mb-4">SELECTED WORKS</h2>
        <p className="text-zinc-500 font-light max-w-md">
          A collection of projects where design meets code to solve meaningful problems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`group relative overflow-hidden rounded-3xl border border-white/10 glass ${project.gridSpan}`}
          >
            {/* Background Image with Overlay */}
            <div 
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                  {project.icon}
                </div>
                <motion.div 
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    className="p-3 rounded-full bg-white text-black opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </motion.div>
              </div>

              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold tracking-tight">
                  {project.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default PortfolioGrid

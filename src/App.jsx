import { Suspense, useEffect } from 'react'
import Lenis from 'lenis'
import Scene from './components/canvas/Scene'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PortfolioGrid from './components/PortfolioGrid'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative min-h-screen">
      {/* 3D Canvas Background */}
      <div className="fixed inset-0 -z-10 bg-black">
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </div>

      {/* UI Layers */}
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <PortfolioGrid />
        
        {/* About Section */}
        <section id="about" className="py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
                <h2 className="text-4xl font-bold tracking-tighter mb-8">BRINGING IDEAS TO LIFE</h2>
                <div className="space-y-6 text-zinc-400 font-light leading-relaxed">
                    <p>
                        I am a multidisciplinary developer focused on crafting clean, performant, and visually stunning digital products. My approach combines technical precision with a deep understanding of user experience.
                    </p>
                    <p>
                        With expertise in React, Three.js, and modern animation libraries, I bridge the gap between imagination and implementation.
                    </p>
                </div>
            </div>
            <div className="flex-1 w-full aspect-square glass rounded-[40px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                <div className="text-8xl font-bold text-white/5 tracking-tighter select-none">H.KR</div>
            </div>
        </section>
      </main>

      {/* Noise Texture Overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay noise-bg"></div>
    </div>
  )
}

export default App

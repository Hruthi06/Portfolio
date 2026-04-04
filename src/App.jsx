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
      </main>
    </div>
  )
}

export default App

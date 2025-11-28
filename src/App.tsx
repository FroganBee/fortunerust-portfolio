import { useState, useEffect } from 'react'
import AnimatedBackground from './components/AnimatedBackground.tsx'
import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import TechStack from './components/TechStack.tsx'
import ConnectWithMe from './components/ConnectWithMe.tsx'
import Projects from './components/Projects.tsx'
import Footer from './components/Footer.tsx'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-900 relative">
      <AnimatedBackground />
              <div className="relative z-10">
                <Header />
                <main>
                  <Hero />
                  <Projects />
                  <TechStack />
                  <ConnectWithMe />
                </main>
                <Footer />
              </div>
    </div>
  )
}

export default App

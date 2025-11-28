import { useEffect, useState } from 'react'

const AnimatedBackground = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated Network Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f472b6" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f472b6" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        
        {/* Network Lines Layer 1 */}
        <g>
          <line x1="50" y1="100" x2="250" y2="300" stroke="url(#lineGradient)" strokeWidth="1" className="animate-network-pulse" />
          <line x1="150" y1="50" x2="450" y2="250" stroke="url(#lineGradient)" strokeWidth="1" className="animate-network-pulse-delayed" />
          <line x1="350" y1="100" x2="650" y2="300" stroke="url(#lineGradient)" strokeWidth="1" className="animate-network-pulse" />
          <line x1="550" y1="50" x2="850" y2="400" stroke="url(#lineGradient)" strokeWidth="1" className="animate-network-pulse-delayed" />
          <line x1="100" y1="400" x2="400" y2="600" stroke="url(#lineGradient)" strokeWidth="1" className="animate-network-pulse" />
          <line x1="300" y1="500" x2="600" y2="700" stroke="url(#lineGradient)" strokeWidth="1" className="animate-network-pulse-delayed" />
          <line x1="700" y1="150" x2="950" y2="550" stroke="url(#lineGradient)" strokeWidth="1" className="animate-network-pulse" />
          <line x1="200" y1="700" x2="500" y2="900" stroke="url(#lineGradient)" strokeWidth="1" className="animate-network-pulse-delayed" />
          <line x1="600" y1="800" x2="900" y2="950" stroke="url(#lineGradient)" strokeWidth="1" className="animate-network-pulse" />
        </g>

        {/* Network Lines Layer 2 */}
        <g>
          <line x1="100" y1="200" x2="300" y2="400" stroke="url(#lineGradient2)" strokeWidth="1" className="animate-network-pulse-delayed" />
          <line x1="250" y1="150" x2="550" y2="350" stroke="url(#lineGradient2)" strokeWidth="1" className="animate-network-pulse" />
          <line x1="450" y1="200" x2="750" y2="400" stroke="url(#lineGradient2)" strokeWidth="1" className="animate-network-pulse-delayed" />
          <line x1="650" y1="150" x2="950" y2="500" stroke="url(#lineGradient2)" strokeWidth="1" className="animate-network-pulse" />
          <line x1="150" y1="500" x2="450" y2="700" stroke="url(#lineGradient2)" strokeWidth="1" className="animate-network-pulse-delayed" />
          <line x1="400" y1="600" x2="700" y2="800" stroke="url(#lineGradient2)" strokeWidth="1" className="animate-network-pulse" />
          <line x1="800" y1="250" x2="950" y2="650" stroke="url(#lineGradient2)" strokeWidth="1" className="animate-network-pulse-delayed" />
        </g>
        
        {/* Network Nodes */}
        <g>
          <circle cx="150" cy="200" r="2" fill="#38bdf8" className="animate-float" />
          <circle cx="350" cy="150" r="2" fill="#a78bfa" className="animate-float-delayed" />
          <circle cx="550" cy="200" r="2" fill="#f472b6" className="animate-float" />
          <circle cx="750" cy="150" r="2" fill="#38bdf8" className="animate-float-delayed" />
          <circle cx="250" cy="500" r="2" fill="#a78bfa" className="animate-float" />
          <circle cx="450" cy="600" r="2" fill="#f472b6" className="animate-float-delayed" />
          <circle cx="650" cy="500" r="2" fill="#38bdf8" className="animate-float" />
          <circle cx="850" cy="400" r="2" fill="#a78bfa" className="animate-float-delayed" />
          <circle cx="150" cy="800" r="2" fill="#f472b6" className="animate-float" />
          <circle cx="350" cy="900" r="2" fill="#38bdf8" className="animate-float-delayed" />
          <circle cx="550" cy="800" r="2" fill="#a78bfa" className="animate-float" />
          <circle cx="750" cy="700" r="2" fill="#f472b6" className="animate-float-delayed" />
        </g>
      </svg>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {/* Large floating circles */}
          <div className="absolute top-20 left-20 w-4 h-4 bg-blue-500/40 rounded-full animate-float"></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-purple-500/40 rounded-full animate-float-delayed"></div>
          <div className="absolute top-60 left-1/3 w-2 h-2 bg-pink-500/40 rounded-full animate-float"></div>
          <div className="absolute top-80 right-20 w-5 h-5 bg-blue-500/35 rounded-full animate-float-delayed"></div>
          
          <div className="absolute top-96 left-16 w-3 h-3 bg-purple-500/40 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-40 w-4 h-4 bg-pink-500/35 rounded-full animate-float-delayed"></div>
          <div className="absolute top-1/2 left-24 w-2 h-2 bg-blue-500/40 rounded-full animate-float"></div>
          <div className="absolute top-2/3 right-16 w-3 h-3 bg-purple-500/40 rounded-full animate-float-delayed"></div>
          
          <div className="absolute bottom-40 left-32 w-4 h-4 bg-pink-500/35 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-24 w-2 h-2 bg-blue-500/40 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-60 left-40 w-3 h-3 bg-purple-500/40 rounded-full animate-float"></div>
          <div className="absolute bottom-80 right-32 w-5 h-5 bg-pink-500/35 rounded-full animate-float-delayed"></div>
        </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-full blur-xl animate-float-delayed"></div>
      <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-float"></div>
    </div>
  )
}

export default AnimatedBackground

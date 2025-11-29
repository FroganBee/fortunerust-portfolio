import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend')
  const [hoveredTech, setHoveredTech] = useState<number | null>(null)
  const [animatingTech, setAnimatingTech] = useState<number | null>(null)

  // Reset hover state when category changes
  useEffect(() => {
    setHoveredTech(null)
    setAnimatingTech(null)
  }, [activeCategory])

  const handleMouseEnter = (index: number) => {
    setHoveredTech(index)
    setAnimatingTech(null)
    // Reset to 0% first, then animate
    setTimeout(() => {
      setAnimatingTech(index)
    }, 50)
  }

  const handleMouseLeave = () => {
    setHoveredTech(null)
    setAnimatingTech(null)
  }

  const categories = [
    'Frontend',
    'Backend', 
    'Blockchain',
    'Database',
    'DevOps & Tools',
    'Mobile & Other'
  ]

  const technologies = {
    Frontend: [
      { name: 'React', icon: 'logos:react', progress: 90 },
      { name: 'Next.js', icon: 'logos:nextjs-icon', progress: 85 },
      { name: 'Vue.js', icon: 'logos:vue', progress: 70 },
      { name: 'Angular', icon: 'logos:angular-icon', progress: 60 },
      { name: 'TypeScript', icon: 'logos:typescript-icon', progress: 95 },
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon', progress: 90 },
      { name: 'JavaScript', icon: 'logos:javascript', progress: 95 },
      { name: 'HTML5', icon: 'logos:html-5', progress: 90 },
      { name: 'CSS3', icon: 'logos:css-3', progress: 85 },
      { name: 'Redux', icon: 'logos:redux', progress: 80 }
    ],
    Backend: [
      { name: 'Node.js', icon: 'logos:nodejs-icon', progress: 90 },
      { name: 'Express', icon: 'simple-icons:expressvpn', progress: 85 },
      { name: 'TypeScript', icon: 'logos:typescript-icon', progress: 95 },
      { name: 'Python', icon: 'logos:python', progress: 80 },
      { name: 'Django', icon: 'logos:django-icon', progress: 70 },
      { name: 'GraphQL', icon: 'logos:graphql', progress: 75 },
      { name: 'Go', icon: 'logos:go', progress: 65 }
    ],
    Blockchain: [
      { name: 'Solidity', icon: 'logos:solidity', progress: 85 },
      { name: 'Rust', icon: 'logos:rust', progress: 80 },
      { name: 'Ethereum', icon: 'logos:ethereum', progress: 90 },
      { name: 'Solana', icon: 'token-branded:solana', progress: 75 },
      { name: 'Bitcoin', icon: 'logos:bitcoin', progress: 70 }
    ],
    Database: [
      { name: 'MongoDB', icon: 'logos:mongodb-icon', progress: 85 },
      { name: 'PostgreSQL', icon: 'logos:postgresql', progress: 80 },
      { name: 'MySQL', icon: 'logos:mysql-icon', progress: 75 },
      { name: 'Redis', icon: 'logos:redis', progress: 70 }
    ],
    'DevOps & Tools': [
      { name: 'Git', icon: 'logos:git-icon', progress: 95 },
      { name: 'Docker', icon: 'logos:docker-icon', progress: 80 },
      { name: 'AWS', icon: 'logos:aws', progress: 70 },
      { name: 'Figma', icon: 'logos:figma', progress: 85 },
      { name: 'VS Code', icon: 'logos:visual-studio-code', progress: 95 }
    ],
    'Mobile & Other': [
      { name: 'React Native', icon: 'logos:react', progress: 80 },
      { name: 'Flutter', icon: 'logos:flutter', progress: 70 },
      { name: 'Firebase', icon: 'logos:firebase', progress: 75 },
      { name: 'Webpack', icon: 'logos:webpack', progress: 70 }
    ]
  }

  return (
    <section id="tech-stack" className="py-20">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Tech Stack
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            These are the technologies I work with to bring ideas to life. I'm constantly learning and expanding my skillset.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-dark-800 text-gray-300 hover:bg-dark-700 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {technologies[activeCategory as keyof typeof technologies]?.map((tech, index) => {
            const isHovered = hoveredTech === index
            
            return (
              <div 
                key={index} 
                className="text-center group cursor-pointer"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-4 bg-dark-800 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-200 ${isHovered ? 'animate-shake' : ''}`}>
                  <Icon icon={tech.icon} className="w-8 h-8" />
                </div>
                
                {/* Name */}
                <h3 className="text-white font-medium mb-3">{tech.name}</h3>
                
                {/* Progress Bar */}
                <div className="w-full bg-dark-700 rounded-full h-1 mb-2 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-1 rounded-full"
                    style={{ 
                      width: animatingTech === index ? `${tech.progress}%` : isHovered ? '0%' : `${tech.progress}%`,
                      transition: animatingTech === index ? 'width 0.7s ease-out' : isHovered ? 'width 0s' : 'width 0.3s ease-in'
                    }}
                  ></div>
                </div>
                
                {/* Progress Percentage */}
                <span className="text-sm text-gray-400">{tech.progress}%</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TechStack

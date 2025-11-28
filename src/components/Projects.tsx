import { useState } from 'react'
import { Icon } from '@iconify/react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Pumpfun Forking',
      description: 'Pump.fun forking - A decentralized platform for token creation and trading on Solana blockchain.',
      image: '/images/pumpfun-project.jpg',
      technologies: ['Solana', 'Dex'],
      category: 'defi',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true,
      headline: 'TAKE YOUR AGENT TO THE PROMISED LAND',
      ctaButtons: ['LAUNCH YOUR AGENT', 'MINT UTILITY']
    },
    {
      id: 2,
      title: 'Solana 9mm Dex',
      description: 'Raydium cpmm forking (Token2022 support) - Easy, secure, and user-friendly DEX for Solana tokens.',
      image: '/images/9mm-project.jpg',
      technologies: ['Solana', 'Dex'],
      category: 'defi',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true,
      headline: 'Trade tokens with ease on 9mm',
      ctaButtons: ['Start Trading', 'View 9mm Projects']
    },
    {
      id: 3,
      title: 'Big FI',
      description: 'Experience the next generation of DeFi with institutional-grade strategies accessible to everyone.',
      image: '/images/bigfi-project.jpg',
      technologies: ['Solana', 'Ethereum', 'BTC', 'DeFi'],
      category: 'defi',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true,
      headline: 'Yield Made Extraordinary',
      ctaButtons: ['Launch App', 'Learn More']
    }
  ]

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'solana', label: 'Solana' },
    { key: 'dex', label: 'Dex' },
    { key: 'ethereum', label: 'Ethereum' },
    { key: 'btc', label: 'BTC' },
    { key: 'defi', label: 'DeFi' },
    { key: 'ai-agent', label: 'AI Agent' },
    { key: 'trading-tool', label: 'Trading Tool' },
    { key: 'token', label: 'Token' },
    { key: 'trading', label: 'Trading' },
    { key: 'web3-game', label: 'Web3 Game' },
    { key: 'nft', label: 'NFT' },
    { key: 'bsc', label: 'BSC' },
    { key: 'healthcare', label: 'Healthcare' },
    { key: 'marketplace', label: 'Marketplace' },
    { key: 'presale', label: 'Presale' },
    { key: 'python', label: 'Python' },
    { key: 'staking', label: 'Staking' },
    { key: 'mobile-app', label: 'Mobile App' },
    { key: 'ecommerce', label: 'Ecommerce' }
  ]

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  )

  return (
    <section id="projects" className="py-20">
      <div className="container-max section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              My <span className="text-primary-400">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="w-full mb-10">
            {/* Responsive Filter Grid */}
            <div className="w-full flex flex-wrap justify-center gap-2 sm:gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-2 sm:px-3 md:px-4 py-2 rounded-full font-medium transition-colors duration-200 text-nowrap text-xs sm:text-sm ${
                    activeFilter === filter.key
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-dark-800 text-gray-300 hover:bg-dark-700 hover:text-white'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-dark-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
              >
                {/* Project Image with Hover Scale */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = '/api/placeholder/600/400'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Project Headline */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-lg font-bold mb-2">{project.headline}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.ctaButtons.map((button, index) => (
                        <button
                          key={index}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                            index === 0 
                              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                              : 'bg-transparent border border-white text-white hover:bg-white hover:text-black'
                          }`}
                        >
                          {button}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Footer */}
                <div className="p-6">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-dark-700 text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Title */}
                  <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                  
                  {/* Project Description */}
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

                  {/* View Project Link */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors duration-200"
                  >
                    View Project
                    <Icon icon="lucide:external-link" className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

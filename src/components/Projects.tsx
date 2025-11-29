import { useState } from 'react'
import { Icon } from '@iconify/react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    // Solana Projects
    {
      id: 1,
      title: 'Pumpfun Forking',
      description: 'Pump.fun forking - A decentralized platform for token creation and trading on Solana blockchain.',
      image: '/images/pumpfun-project.jpg',
      technologies: ['Solana', 'Dex'],
      categories: ['solana', 'dex', 'defi', 'token'],
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
      categories: ['solana', 'dex', 'defi', 'trading'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true,
      headline: 'Trade tokens with ease on 9mm',
      ctaButtons: ['Start Trading', 'View 9mm Projects']
    },
    {
      id: 3,
      title: 'Solana Staking Platform',
      description: 'High-yield staking platform for SOL and SPL tokens with flexible lock periods.',
      image: '/images/solana-staking.jpg',
      technologies: ['Solana', 'Staking'],
      categories: ['solana', 'staking', 'defi'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false,
      headline: 'Maximize Your SOL Rewards',
      ctaButtons: ['Start Staking', 'View Docs']
    },
    {
      id: 4,
      title: 'Solana NFT Marketplace',
      description: 'Decentralized NFT marketplace with low fees and instant transactions on Solana.',
      image: '/images/solana-nft.jpg',
      technologies: ['Solana', 'NFT'],
      categories: ['solana', 'nft', 'marketplace'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false,
      headline: 'Trade NFTs Instantly',
      ctaButtons: ['Explore Market', 'List NFT']
    },
    // Ethereum Projects
    {
      id: 5,
      title: 'Ethereum DeFi Aggregator',
      description: 'Aggregate liquidity from multiple DEXs on Ethereum for the best trading rates.',
      image: '/images/ethereum-defi.jpg',
      technologies: ['Ethereum', 'DeFi', 'Dex'],
      categories: ['ethereum', 'dex', 'defi', 'trading'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true,
      headline: 'Best Rates Across All DEXs',
      ctaButtons: ['Start Trading', 'View Analytics']
    },
    {
      id: 6,
      title: 'ERC-20 Token Launcher',
      description: 'Create and deploy your own ERC-20 token on Ethereum with a simple interface.',
      image: '/images/ethereum-token.jpg',
      technologies: ['Ethereum', 'Token'],
      categories: ['ethereum', 'token', 'presale'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false,
      headline: 'Launch Your Token Today',
      ctaButtons: ['Create Token', 'Learn More']
    },
    {
      id: 7,
      title: 'Ethereum Staking Pool',
      description: 'Stake ETH and earn rewards with our secure and transparent staking pool.',
      image: '/images/ethereum-staking.jpg',
      technologies: ['Ethereum', 'Staking'],
      categories: ['ethereum', 'staking', 'defi'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false,
      headline: 'Earn ETH Rewards',
      ctaButtons: ['Stake Now', 'View Pool']
    },
    // BTC Projects
    {
      id: 8,
      title: 'Big FI',
      description: 'Experience the next generation of DeFi with institutional-grade strategies accessible to everyone.',
      image: '/images/bigfi-project.jpg',
      technologies: ['Solana', 'Ethereum', 'BTC', 'DeFi'],
      categories: ['btc', 'defi', 'solana', 'ethereum'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true,
      headline: 'Yield Made Extraordinary',
      ctaButtons: ['Launch App', 'Learn More']
    },
    {
      id: 9,
      title: 'BTC Lightning Network App',
      description: 'Fast and cheap Bitcoin transactions using Lightning Network technology.',
      image: '/images/btc-lightning.jpg',
      technologies: ['BTC', 'Trading'],
      categories: ['btc', 'trading'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false,
      headline: 'Lightning Fast Payments',
      ctaButtons: ['Try Now', 'Learn More']
    },
    // AI Agent Projects
    {
      id: 10,
      title: 'AI Trading Agent',
      description: 'Autonomous AI agent that trades cryptocurrencies using advanced machine learning algorithms.',
      image: '/images/ai-agent.jpg',
      technologies: ['AI Agent', 'Trading', 'Python'],
      categories: ['ai-agent', 'trading-tool', 'trading', 'python'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true,
      headline: 'Trade with AI Intelligence',
      ctaButtons: ['Launch Agent', 'View Strategy']
    },
    {
      id: 11,
      title: 'AI Portfolio Manager',
      description: 'AI-powered portfolio management system that optimizes your crypto investments.',
      image: '/images/ai-portfolio.jpg',
      technologies: ['AI Agent', 'Python'],
      categories: ['ai-agent', 'python', 'trading-tool'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false,
      headline: 'Optimize Your Portfolio',
      ctaButtons: ['Get Started', 'View Demo']
    },
    // Trading Tools
    {
      id: 12,
      title: 'Advanced Trading Dashboard',
      description: 'Professional trading dashboard with real-time charts, indicators, and order management.',
      image: '/images/trading-dashboard.jpg',
      technologies: ['Trading Tool', 'Trading'],
      categories: ['trading-tool', 'trading'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false,
      headline: 'Professional Trading Tools',
      ctaButtons: ['Open Dashboard', 'View Features']
    },
    {
      id: 13,
      title: 'Crypto Price Alert System',
      description: 'Get instant notifications when your favorite cryptocurrencies hit target prices.',
      image: '/images/price-alert.jpg',
      technologies: ['Trading Tool', 'Mobile App'],
      categories: ['trading-tool', 'mobile-app'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false,
      headline: 'Never Miss a Trade',
      ctaButtons: ['Set Alerts', 'Download App']
    },
    // Web3 Games
    {
      id: 14,
      title: 'Crypto Battle Arena',
      description: 'Play-to-earn NFT game where you battle with unique characters and earn rewards.',
      image: '/images/web3-game.jpg',
      technologies: ['Web3 Game', 'NFT', 'Solana'],
      categories: ['web3-game', 'nft', 'solana'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true,
      headline: 'Battle and Earn Rewards',
      ctaButtons: ['Play Now', 'Buy NFT']
    },
    {
      id: 15,
      title: 'DeFi Adventure Game',
      description: 'Embark on quests, collect NFTs, and earn crypto rewards in this immersive Web3 game.',
      image: '/images/defi-game.jpg',
      technologies: ['Web3 Game', 'DeFi', 'NFT'],
      categories: ['web3-game', 'defi', 'nft'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false,
      headline: 'Adventure Awaits',
      ctaButtons: ['Start Quest', 'View Collection']
    },
    // BSC Projects
    {
      id: 16,
      title: 'BSC Token Presale Platform',
      description: 'Launch and participate in token presales on Binance Smart Chain with ease.',
      image: '/images/bsc-presale.jpg',
      technologies: ['BSC', 'Token', 'Presale'],
      categories: ['bsc', 'token', 'presale'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false,
      headline: 'Join the Next Big Token',
      ctaButtons: ['View Presales', 'Launch Yours']
    },
    {
      id: 17,
      title: 'BSC Yield Farm',
      description: 'Maximize your returns with automated yield farming on Binance Smart Chain.',
      image: '/images/bsc-yield.jpg',
      technologies: ['BSC', 'DeFi', 'Staking'],
      categories: ['bsc', 'defi', 'staking'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false,
      headline: 'Farm High Yields',
      ctaButtons: ['Start Farming', 'View Pools']
    },
    // Healthcare
    {
      id: 18,
      title: 'Healthcare Data Platform',
      description: 'Secure blockchain-based platform for managing and sharing healthcare data.',
      image: '/images/healthcare.jpg',
      technologies: ['Healthcare', 'Ethereum'],
      categories: ['healthcare', 'ethereum'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false,
      headline: 'Secure Health Records',
      ctaButtons: ['Learn More', 'Request Demo']
    },
    // Marketplace
    {
      id: 19,
      title: 'Multi-Chain NFT Marketplace',
      description: 'Trade NFTs across Ethereum, Solana, and Polygon in one unified marketplace.',
      image: '/images/multi-chain-nft.jpg',
      technologies: ['Marketplace', 'NFT', 'Ethereum', 'Solana'],
      categories: ['marketplace', 'nft', 'ethereum', 'solana'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true,
      headline: 'Trade Across Chains',
      ctaButtons: ['Explore Market', 'List NFT']
    },
    // Presale
    {
      id: 20,
      title: 'Token Launchpad',
      description: 'Complete platform for launching new tokens with presale, vesting, and liquidity management.',
      image: '/images/token-launchpad.jpg',
      technologies: ['Presale', 'Token', 'Solana'],
      categories: ['presale', 'token', 'solana'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false,
      headline: 'Launch Your Token',
      ctaButtons: ['Create Launch', 'View Docs']
    },
    // Python Projects
    {
      id: 21,
      title: 'Crypto Data Analyzer',
      description: 'Python-based tool for analyzing cryptocurrency market data and generating insights.',
      image: '/images/python-analyzer.jpg',
      technologies: ['Python', 'Trading Tool'],
      categories: ['python', 'trading-tool'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false,
      headline: 'Analyze Market Data',
      ctaButtons: ['View Code', 'Try Demo']
    },
    {
      id: 22,
      title: 'Blockchain Explorer API',
      description: 'RESTful API built with Python for querying blockchain data across multiple networks.',
      image: '/images/python-api.jpg',
      technologies: ['Python'],
      categories: ['python'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false,
      headline: 'Access Blockchain Data',
      ctaButtons: ['View API', 'Get Started']
    },
    // Mobile App
    {
      id: 23,
      title: 'Crypto Wallet Mobile App',
      description: 'Secure mobile wallet supporting multiple cryptocurrencies with DeFi integration.',
      image: '/images/mobile-wallet.jpg',
      technologies: ['Mobile App', 'DeFi'],
      categories: ['mobile-app', 'defi'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false,
      headline: 'Your Crypto in Your Pocket',
      ctaButtons: ['Download App', 'View Features']
    },
    // Ecommerce
    {
      id: 24,
      title: 'Crypto Payment Gateway',
      description: 'Accept cryptocurrency payments on your ecommerce store with instant settlement.',
      image: '/images/crypto-payments.jpg',
      technologies: ['Ecommerce', 'Ethereum', 'BTC'],
      categories: ['ecommerce', 'ethereum', 'btc'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false,
      headline: 'Accept Crypto Payments',
      ctaButtons: ['Get Started', 'View Integration']
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
    activeFilter === 'all' || project.categories.includes(activeFilter)
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
            {/* Responsive Filter Grid with Scroll */}
            <div className="w-full overflow-x-auto pb-2 scrollbar-hide">
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 min-w-max px-2">
                {filters.map((filter) => {
                  const projectCount = activeFilter === filter.key 
                    ? filteredProjects.length 
                    : projects.filter(p => filter.key === 'all' || p.categories.includes(filter.key)).length
                  
                  return (
                    <button
                      key={filter.key}
                      onClick={() => setActiveFilter(filter.key)}
                      className={`px-3 sm:px-4 md:px-5 py-2.5 rounded-full font-medium transition-all duration-300 text-nowrap text-xs sm:text-sm relative ${
                        activeFilter === filter.key
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50 scale-105'
                          : 'bg-dark-800 text-gray-300 hover:bg-dark-700 hover:text-white hover:scale-105'
                      }`}
                    >
                      {filter.label}
                      {projectCount > 0 && (
                        <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                          activeFilter === filter.key
                            ? 'bg-white/20 text-white'
                            : 'bg-dark-700 text-gray-400'
                        }`}>
                          {projectCount}
                        </span>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-dark-800 mb-6">
                <Icon icon="lucide:folder-x" className="w-10 h-10 text-gray-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
              <p className="text-gray-400 mb-6">Try selecting a different filter category</p>
              <button
                onClick={() => setActiveFilter('all')}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
              >
                View All Projects
              </button>
            </div>
          )}

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-dark-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
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
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full shadow-lg">
                        ⭐ Featured
                      </span>
                    </div>
                  )}
                  
                  {/* Project Headline */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-lg font-bold mb-2 drop-shadow-lg">{project.headline}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.ctaButtons.map((button, index) => (
                        <button
                          key={index}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                            index === 0 
                              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/50' 
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
                        className="px-3 py-1 bg-dark-700 text-gray-300 rounded-full text-xs font-medium hover:bg-dark-600 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Title */}
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-200">{project.title}</h4>
                  
                  {/* Project Description */}
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">{project.description}</p>

                  {/* Action Links */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors duration-200 group/link"
                    >
                      View Project
                      <Icon icon="lucide:external-link" className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-200" />
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-400 hover:text-gray-300 transition-colors duration-200"
                        title="View Source Code"
                      >
                        <Icon icon="lucide:github" className="w-5 h-5" />
                      </a>
                    )}
                  </div>
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

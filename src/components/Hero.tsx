import { useEffect, useState } from 'react'

const Hero = () => {
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)

  const texts = [
    'Full Stack Developer',
    'React Specialist',
    'TypeScript Enthusiast',
    'UI/UX Designer',
  ]

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[textIndex]
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1))
      } else {
        setCurrentText(current.substring(0, currentText.length + 1))
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setTextIndex((prev) => (prev + 1) % texts.length)
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, textIndex, texts])

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container-max section-padding relative z-10">
        <div className="text-center max-w-4xl mx-auto pt-[200px] pb-[100px]">
          {/* Avatar */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
                {/* You can replace this with your actual avatar image */}
                <img 
                  src="/images/avatar.png" 
                  alt="Avatar" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Animated Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-pink-500 animate-ping opacity-75"></div>
              <div className="absolute inset-0 rounded-full border-2 border-purple-500 animate-ping delay-1000 opacity-75"></div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Full Stack and blockchain{' '}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Engineer
            </span>
          </h1>

          {/* Personal Introduction */}
          <div className="mb-8">
            <p className="text-xl md:text-2xl text-white mb-2">
              My name is <span className="text-purple-400 font-semibold">Jimmy Brink</span>, known as{' '}
              <span className="text-pink-400 font-semibold">0xFortuneRust</span>
            </p>
            <p className="text-lg text-gray-300">Building the future of web applications</p>
          </div>

          {/* Expertise Areas */}
          <div className="mb-12 space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-white">
                <span className="text-purple-400 font-semibold">Frontend</span> – modern, responsive user interfaces
              </span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              <span className="text-white">
                <span className="text-pink-400 font-semibold">Backend</span> – scalable, efficient server solutions
              </span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-white">
                <span className="text-blue-400 font-semibold">Full Stack</span> – end-to-end application development
              </span>
            </div>
          </div>

          {/* Call to Action Box */}
          <div className="bg-dark-800/30 backdrop-blur-md rounded-2xl p-8 border border-gray-600/30 mb-12 shadow-2xl">
            <p className="text-white text-lg mb-4">
              From <span className="font-semibold">Smart Contracts</span> to <span className="font-semibold">Full stack dApps</span>, 
              I deliver fast, scalable, and user-first web applications.
            </p>
            <p className="text-gray-400 text-sm">Let's build what's next.</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 shadow-lg"
            >
              Get In Touch
            </button>
            <button
              onClick={() => {
                const element = document.querySelector('#projects')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="bg-transparent border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200"
            >
              View My Work
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

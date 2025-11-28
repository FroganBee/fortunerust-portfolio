import { Icon } from '@iconify/react'

const ConnectWithMe = () => {
  const socialLinks = [
    { name: 'GitHub', icon: 'logos:github-icon', url: 'https://github.com/0xFortuneRust' },
    { name: 'Twitter', icon: 'logos:twitter', url: 'https://twitter.com/0xFortuneRust' },
    { name: 'Telegram', icon: 'logos:telegram', url: 'https://t.me/FortuneRust' },
    { name: 'Discord', icon: 'logos:discord-icon', url: 'https://discord.com/channels/@me/1427640347701547038' }
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Connect With Me
          </h2>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-16 h-16 bg-dark-800 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:bg-dark-700 transition-all duration-200">
                <Icon icon={social.icon} className="w-8 h-8 text-white" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ConnectWithMe

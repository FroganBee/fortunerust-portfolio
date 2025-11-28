const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-gray-600">
      <div className="container-max section-padding">
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            Copyright © {currentYear} 0xFortuneRust
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

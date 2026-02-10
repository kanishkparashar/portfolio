import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin } from 'lucide-react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={() => scrollToSection('#home')}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">Kanishk</span>
          <span className="logo-bracket">/&gt;</span>
        </a>

        <div className="nav-links desktop">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(link.href)
              }}
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="nav-social desktop">
          <a href="https://github.com/Pt-kanishk" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/kanishk-parashar" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Linkedin size={20} />
          </a>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => {
              e.preventDefault()
              scrollToSection(link.href)
            }}
            className="mobile-nav-link"
          >
            {link.name}
          </a>
        ))}
        <div className="mobile-social">
          <a href="https://github.com/Pt-kanishk" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/kanishk-parashar" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

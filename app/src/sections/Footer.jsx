import { Heart, Github, Linkedin, Twitter, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    { name: 'GitHub', icon: <Github size={18} />, link: 'https://github.com/kanishkparashar' },
    { name: 'LinkedIn', icon: <Linkedin size={18} />, link: 'https://linkedin.com/in/kanishk-parashar' },
    { name: 'LeetCode', icon: <span className="leetcode-icon">LC</span>, link: 'https://www.leetcode.com/kanishk4518' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="var(--footer-bg)"
          />
        </svg>
      </div>

      <div className="footer-content">
        <div className="footer-container">
          <div className="footer-brand">
            <a href="#home" className="footer-logo" onClick={() => scrollToSection('#home')}>
              <span className="logo-bracket">&lt;</span>
              <span className="logo-text">Kanishk</span>
              <span className="logo-bracket">/&gt;</span>
            </a>
            <p className="footer-tagline">
              Data Science Student | Aspiring ML Engineer | DevOps Enthusiast
            </p>
            <p className="footer-description">
              Building intelligent systems and exploring the intersection of Data Science, 
              Machine Learning, and DevOps.
            </p>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="links-list">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-social">
            <h4 className="footer-title">Connect</h4>
            <div className="social-list">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-item"
                >
                  {social.icon}
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-contact">
            <h4 className="footer-title">Contact</h4>
            <div className="contact-info">
              <a href="mailto:kanishkparashar159@gmail.com" className="contact-item">
                kanishkparashar159@gmail.com
              </a>
              <a href="tel:+919005668822" className="contact-item">
                +91-9005668822
              </a>
              <span className="contact-item">Punjab, India</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            <p>
              © {currentYear} <span className="name-highlight">Kanishk Parashar</span>. All rights reserved.
            </p>
            <p className="made-with">
              Made with <Heart className="heart-icon" size={14} /> using React & Node.js
            </p>
          </div>

          <button className="scroll-top-btn" onClick={scrollToTop} title="Back to Top">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import { useEffect, useState } from 'react'
import { ArrowDown, Code2, Database, Cloud } from 'lucide-react'

const Hero = () => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(100)

  const roles = [
    'Data Science Student',
    'Aspiring ML Engineer',
    'DevOps Enthusiast',
    'Problem Solver',
    'Tech Explorer'
  ]

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length
      const fullText = roles[i]

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      )

      setTypingSpeed(isDeleting ? 50 : 100)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed])

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="hero-content">
        <div className="hero-greeting">
          <span className="wave-emoji">👋</span>
          <span className="greeting-text">Hello, I'm</span>
        </div>

        <h1 className="hero-name">
          <span className="name-highlight">Kanishk</span> Parashar
        </h1>

        <div className="hero-typing">
          <span className="typing-text">{text}</span>
          <span className="typing-cursor">|</span>
        </div>

        <p className="hero-description">
          Passionate about building intelligent systems and exploring the intersection of 
          <span className="highlight"> Data Science</span>, 
          <span className="highlight"> Machine Learning</span>, and 
          <span className="highlight"> DevOps</span>.
        </p>

        <div className="hero-stats">
          <div className="stat-item">
            <Code2 className="stat-icon" />
            <span className="stat-number">750+</span>
            <span className="stat-label">Problems Solved</span>
          </div>
          <div className="stat-item">
            <Database className="stat-icon" />
            <span className="stat-number">5+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-item">
            <Cloud className="stat-icon" />
            <span className="stat-number">5+</span>
            <span className="stat-label">Certifications</span>
          </div>
        </div>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </div>

        <div className="hero-social">
          <a href="https://github.com/Pt-kanishk" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg viewBox="0 0 24 24" fill="currentColor" className="social-svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/kanishk-parashar" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg viewBox="0 0 24 24" fill="currentColor" className="social-svg">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="https://www.leetcode.com/kanishk4518" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg viewBox="0 0 24 24" fill="currentColor" className="social-svg">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.622 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.028c.693-.693 1.814-.693 2.508 0 .434.433.618 1.017.541 1.587a1.378 1.378 0 0 0 1.366 1.514 1.381 1.381 0 0 0 1.376-1.294c.161-1.363-.404-2.785-1.528-3.907l-.019-.018C16.631 3.83 14.904 3.83 13.79 4.943l-3.626 3.589-2.161-2.13a1.38 1.38 0 0 0-1.009-.438h.002zm.052 9.797a1.383 1.383 0 0 0-1.378 1.388 1.383 1.383 0 0 0 1.378 1.388 1.383 1.383 0 0 0 1.378-1.388 1.383 1.383 0 0 0-1.378-1.388z"/>
            </svg>
          </a>
          <a href="https://www.hackerrank.com/kanishkparashar1" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg viewBox="0 0 24 24" fill="currentColor" className="social-svg">
              <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12-.642 1.114-9.107 6-10.392 6-1.288 0-9.75-4.886-10.395-6-.641-1.115-.641-10.885 0-12C2.25 4.886 10.712 0 12 0zm2.295 6.799c-.278 0-.578.102-.865.299L11.14 8.666c-.204.148-.34.339-.388.549l-.1.418c-.04.166-.166.29-.332.33l-.418.1c-.21.046-.4.184-.549.388l-1.568 2.29c-.197.287-.299.587-.299.865s.102.578.299.865l1.568 2.29c.148.204.339.342.549.388l.418.1c.166.04.292.164.332.33l.1.418c.048.21.184.401.388.549l2.29 1.568c.287.197.587.299.865.299s.578-.102.865-.299l2.29-1.568c.204-.148.34-.339.388-.549l.1-.418c.04-.166.166-.29.332-.33l.418-.1c.21-.046.4-.184.549-.388l1.568-2.29c.197-.287.299-.587.299-.865s-.102-.578-.299-.865l-1.568-2.29c-.148-.204-.339-.342-.549-.388l-.418-.1c-.166-.04-.292-.164-.332-.33l-.1-.418c-.048-.21-.184-.401-.388-.549l-2.29-1.568c-.287-.197-.587-.299-.865-.299zM12 8.4a3.6 3.6 0 1 1 0 7.2 3.6 3.6 0 0 1 0-7.2z"/>
            </svg>
          </a>
        </div>
      </div>

      <button className="scroll-indicator" onClick={scrollToAbout}>
        <span className="scroll-text">Scroll Down</span>
        <ArrowDown className="scroll-arrow" />
      </button>
    </section>
  )
}

export default Hero

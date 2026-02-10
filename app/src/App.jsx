import { useEffect, useState } from 'react'
import './App.css'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Certificates from './sections/Certificates'
import Achievements from './sections/Achievements'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Navigation from './sections/Navigation'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false)
    }, 1500)

    // Track visitor
    const trackVisitor = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL
        const visitorUrl = apiUrl.endsWith('/api') ? `${apiUrl}/visitor` : `${apiUrl}/api/visitor`
        await fetch(visitorUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ip: 'client',
            userAgent: navigator.userAgent
          })
        })
      } catch (error) {
        console.log('Visitor tracking disabled or server not running')
      }
    }
    trackVisitor()
  }, [])

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-spinner"></div>
          <h2>Loading Portfolio...</h2>
          <p>Kanishk Parashar</p>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

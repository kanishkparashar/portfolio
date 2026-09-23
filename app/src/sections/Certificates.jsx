import { useEffect, useRef, useState } from 'react'
import { Award, Calendar, ExternalLink, CheckCircle2, Trophy } from 'lucide-react'

const Certificates = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const certificates = [
    {
      name: 'Cloud Computing',
      issuer: 'IIT Kharagpur by NPTEL',
      date: 'November 2025',
      description: 'Comprehensive course covering cloud architecture, virtualization, and distributed systems.',
      skills: ['Cloud Architecture', 'Virtualization', 'Distributed Systems', 'AWS Basics'],
      color: '#ff6b6b',
      icon: '☁️',
      verified: true,
      link: '/certificates/NPTEL.pdf'
    },
    {
      name: 'Software Development',
      issuer: 'University of Minnesota',
      date: 'May 2024',
      description: 'Professional software development practices including agile methodologies and version control.',
      skills: ['Agile', 'Git', 'Software Design', 'Testing'],
      color: '#4ecdc4',
      icon: '💻',
      verified: true,
      link: '/certificates/SOFTWARE_DEVELOPMENT.pdf'
    },
    {
      name: 'Android Developer Pro',
      issuer: 'Lovely Professional University',
      date: 'June 2025 - August 2025',
      description: 'Hands-on Android development training with Play Store launch preparation.',
      skills: ['Java', 'Kotlin', 'Android Studio', 'Firebase', 'App Deployment'],
      color: '#45b7d1',
      icon: '📱',
      verified: true,
      link: '/certificates/ANDROID_DEVELOPMENT.pdf'
    }
  ]

  const achievements = [
    {
      title: 'Competitive Coding Expert',
      description: 'Solved 850+ problems across LeetCode and GeeksForGeeks',
      details: 'LeetCode rating 1531, earned 12 badges',
      icon: <Trophy className="achievement-icon" />,
      color: '#f9ca24'
    },
    {
      title: 'Version Control Mastery',
      description: 'Built production-ready Git assistant with LLM integration',
      details: 'Advanced Git/GitHub automation and CI/CD workflows',
      icon: <CheckCircle2 className="achievement-icon" />,
      color: '#6c5ce7'
    }
  ]

  return (
    <section id="certificates" className="certificates" ref={sectionRef}>
      <div className="section-container">
        <div className={`section-header ${isVisible ? 'animate-in' : ''}`}>
          <span className="section-tag">Credentials</span>
          <h2 className="section-title">
            Certificates & <span className="title-highlight">Achievements</span>
          </h2>
          <div className="title-underline"></div>
        </div>

        <div className="certificates-content">
          <div className={`certificates-grid ${isVisible ? 'animate-in' : ''}`}>
            <h3 className="subsection-title">Professional Certifications</h3>
            <div className="cert-cards">
              {certificates.map((cert, index) => (
                <div 
                  key={index}
                  className="cert-card"
                  style={{ 
                    '--cert-color': cert.color,
                    animationDelay: `${index * 0.15}s`
                  }}
                >
                  <div className="cert-header" style={{ backgroundColor: `${cert.color}15` }}>
                    <div className="cert-icon">{cert.icon}</div>
                    <div className="cert-badge" style={{ backgroundColor: cert.color }}>
                      <Award size={16} />
                    </div>
                  </div>
                  <div className="cert-body">
                    <h4 className="cert-name">{cert.name}</h4>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <div className="cert-date">
                      <Calendar size={14} />
                      <span>{cert.date}</span>
                    </div>
                    <p className="cert-description">{cert.description}</p>
                    <div className="cert-skills">
                      {cert.skills.map((skill, sIndex) => (
                        <span 
                          key={sIndex}
                          className="skill-pill"
                          style={{ backgroundColor: `${cert.color}20`, color: cert.color }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    {cert.verified && (
                      <div className="verified-badge">
                        <CheckCircle2 size={14} />
                        <span>Verified</span>
                      </div>
                    )}
                    {cert.link && (
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="cert-link-icon"
                        title="View Certificate"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`achievements-section ${isVisible ? 'animate-in' : ''}`}>
            <h3 className="subsection-title">Notable Achievements</h3>
            <div className="achievement-cards">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="achievement-card"
                  style={{ 
                    '--achievement-color': achievement.color,
                    animationDelay: `${(certificates.length + index) * 0.15}s`
                  }}
                >
                  <div 
                    className="achievement-icon-wrapper"
                    style={{ backgroundColor: `${achievement.color}20` }}
                  >
                    {achievement.icon}
                  </div>
                  <div className="achievement-content">
                    <h4 className="achievement-title">{achievement.title}</h4>
                    <p className="achievement-description">{achievement.description}</p>
                    <p className="achievement-details">{achievement.details}</p>
                  </div>
                  <div 
                    className="achievement-glow"
                    style={{ backgroundColor: achievement.color }}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          <div className={`coding-stats ${isVisible ? 'animate-in' : ''}`}>
            <h3 className="subsection-title">Coding Journey</h3>
            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-number">850+</span>
                <span className="stat-label">Problems Solved</span>
                <div className="stat-platforms">
                  <span className="platform">LeetCode</span>
                  <span className="platform">GeeksForGeeks</span>
                </div>
              </div>
              <div className="stat-card">
                <span className="stat-number">1531</span>
                <span className="stat-label">LeetCode Rating</span>
                <div className="stat-badges">
                  <span className="badge-count">12 Badges Earned</span>
                </div>
              </div>
              <div className="stat-card">
                <span className="stat-number">3+</span>
                <span className="stat-label">Major Projects</span>
                <div className="stat-projects">
                  <span className="project-type">ML & AI</span>
                  <span className="project-type">DevOps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certificates

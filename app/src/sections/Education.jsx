import { useEffect, useRef, useState } from 'react'
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from 'lucide-react'

const Education = () => {
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

  const education = [
    {
      institution: 'Lovely Professional University',
      location: 'Punjab, India',
      degree: 'Bachelor of Technology',
      field: 'Computer Science and Engineering',
      duration: 'August 2023 - Present',
      grade: 'CGPA: 6.45',
      icon: <GraduationCap className="edu-icon" />,
      color: '#ff6b6b',
      highlights: [
        'Core coursework in Data Structures, Algorithms, DBMS, OOP',
        'Active participant in coding competitions',
        'Member of technical clubs and communities'
      ]
    },
    {
      institution: 'Mahatma Hansraj Modern School',
      location: 'Jhansi, Uttar Pradesh',
      degree: 'Intermediate (12th Grade)',
      field: 'Science Stream',
      duration: 'April 2020 - March 2022',
      grade: 'Percentage: 71.6%',
      icon: <BookOpen className="edu-icon" />,
      color: '#4ecdc4',
      highlights: [
        'Strong foundation in Mathematics and Physics',
        'Developed problem-solving skills',
        'Participated in science exhibitions'
      ]
    }
  ]

  const training = [
    {
      title: 'Android Developer Pro',
      provider: 'Lovely Professional University - Centre for Professional Enhancement',
      duration: 'June 2025 - August 2025',
      description: 'Intensive 2-month Android development training program covering Java, Kotlin, Android Studio, UI design, Firebase, and Play Store fundamentals.',
      tech: ['Java', 'Kotlin', 'Android Studio', 'XML', 'Firebase'],
      color: '#45b7d1'
    }
  ]

  return (
    <section id="education" className="education" ref={sectionRef}>
      <div className="section-container">
        <div className={`section-header ${isVisible ? 'animate-in' : ''}`}>
          <span className="section-tag">Background</span>
          <h2 className="section-title">
            Education & <span className="title-highlight">Training</span>
          </h2>
          <div className="title-underline"></div>
        </div>

        <div className="education-content">
          <div className={`education-timeline ${isVisible ? 'animate-in' : ''}`}>
            <h3 className="timeline-title">Academic Journey</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="timeline-item"
                  style={{ '--edu-color': edu.color, animationDelay: `${index * 0.2}s` }}
                >
                  <div className="timeline-marker" style={{ backgroundColor: edu.color }}>
                    {edu.icon}
                  </div>
                  <div className="timeline-card">
                    <div className="card-header" style={{ backgroundColor: `${edu.color}15` }}>
                      <div className="institution-info">
                        <h4 className="institution-name">{edu.institution}</h4>
                        <div className="institution-meta">
                          <span className="meta-item">
                            <MapPin size={14} />
                            {edu.location}
                          </span>
                          <span className="meta-item">
                            <Calendar size={14} />
                            {edu.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="degree-info">
                        <h5 className="degree-name">{edu.degree}</h5>
                        <span className="field-name">{edu.field}</span>
                      </div>
                      <div className="grade-badge" style={{ backgroundColor: edu.color }}>
                        <Award size={16} />
                        <span>{edu.grade}</span>
                      </div>
                      <ul className="highlights-list">
                        {edu.highlights.map((highlight, hIndex) => (
                          <li key={hIndex}>
                            <span className="highlight-dot" style={{ backgroundColor: edu.color }}></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`training-section ${isVisible ? 'animate-in' : ''}`}>
            <h3 className="timeline-title">Professional Training</h3>
            <div className="training-cards">
              {training.map((train, index) => (
                <div 
                  key={index} 
                  className="training-card"
                  style={{ '--train-color': train.color, animationDelay: `${(education.length + index) * 0.2}s` }}
                >
                  <div className="training-header" style={{ backgroundColor: `${train.color}15` }}>
                    <h4 className="training-title">{train.title}</h4>
                    <span className="training-provider">{train.provider}</span>
                    <span className="training-duration">
                      <Calendar size={14} />
                      {train.duration}
                    </span>
                  </div>
                  <div className="training-body">
                    <p className="training-description">{train.description}</p>
                    <div className="training-tech">
                      <span className="tech-label">Technologies:</span>
                      <div className="tech-tags">
                        {train.tech.map((tech, tIndex) => (
                          <span 
                            key={tIndex} 
                            className="tech-tag"
                            style={{ backgroundColor: `${train.color}20`, color: train.color }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

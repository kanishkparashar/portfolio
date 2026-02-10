import { useEffect, useRef, useState } from 'react'
import { 
  Rocket, 
  BookOpen, 
  Users, 
  HelpCircle, 
  MessageCircle, 
  Mail, 
  Sparkles,
  Target,
  Zap
} from 'lucide-react'

const About = () => {
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
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const aboutItems = [
    {
      icon: <Rocket className="about-icon" />,
      title: 'Currently Building',
      content: 'Version Control Assistant Chatbot (LLM + GitHub APIs)',
      color: '#ff6b6b'
    },
    {
      icon: <BookOpen className="about-icon" />,
      title: 'Learning',
      content: 'DSA (Java), Python for Data Science, DevOps (Docker, CI/CD, K8s)',
      color: '#4ecdc4'
    },
    {
      icon: <Users className="about-icon" />,
      title: 'Open to Collaborate',
      content: 'ML models, Data Science projects & DevOps automation',
      color: '#45b7d1'
    },
    {
      icon: <HelpCircle className="about-icon" />,
      title: 'Need Help With',
      content: 'Making my Version Control Assistant production-ready',
      color: '#f9ca24'
    },
    {
      icon: <MessageCircle className="about-icon" />,
      title: 'Ask Me About',
      content: 'Data Science, DSA, Git, GitHub, DevOps',
      color: '#6c5ce7'
    },
    {
      icon: <Mail className="about-icon" />,
      title: 'Reach Me At',
      content: 'kanishkparashar159@gmail.com',
      color: '#a29bfe'
    }
  ]

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="section-container">
        <div className={`section-header ${isVisible ? 'animate-in' : ''}`}>
          <span className="section-tag">About Me</span>
          <h2 className="section-title">
            Get To Know <span className="title-highlight">Me</span>
          </h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className={`about-intro ${isVisible ? 'animate-in' : ''}`}>
            <div className="about-image-container">
              <div className="about-image-wrapper">
                <div className="about-image">
                  <div className="profile-avatar">
                    <span className="avatar-text">KP</span>
                  </div>
                </div>
                <div className="image-glow"></div>
              </div>
              <div className="floating-badge badge-1">
                <Zap size={16} />
                <span>ML Enthusiast</span>
              </div>
              <div className="floating-badge badge-2">
                <Target size={16} />
                <span>Problem Solver</span>
              </div>
            </div>

            <div className="about-text">
              <h3 className="about-greeting">
                Hi, I'm <span className="name-accent">Kanishk Parashar</span>
              </h3>
              <p className="about-description">
                I'm a passionate <span className="text-highlight">Data Science student</span> and aspiring 
                <span className="text-highlight"> Machine Learning Engineer</span> currently pursuing my B.Tech in 
                Computer Science and Engineering at Lovely Professional University.
              </p>
              <p className="about-description">
                My journey in tech is driven by curiosity and a desire to build intelligent, scalable systems. 
                I love exploring the intersection of <span className="text-highlight">Data Science</span>, 
                <span className="text-highlight"> Machine Learning</span>, and <span className="text-highlight">DevOps</span>.
              </p>
              <div className="about-funfact">
                <Sparkles className="funfact-icon" />
                <p className="funfact-text">
                  <strong>Fun Fact:</strong> I debug my life like I debug my code — one print statement at a time 😄
                </p>
              </div>
            </div>
          </div>

          <div className={`about-grid ${isVisible ? 'animate-in' : ''}`}>
            {aboutItems.map((item, index) => (
              <div 
                key={index} 
                className="about-card"
                style={{ '--card-color': item.color, animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-icon-wrapper" style={{ backgroundColor: `${item.color}20` }}>
                  {item.icon}
                </div>
                <h4 className="card-title">{item.title}</h4>
                <p className="card-content">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

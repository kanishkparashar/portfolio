import { useEffect, useRef, useState } from 'react'
import { 
  Rocket, 
  BookOpen, 
  Users, 
  HelpCircle, 
  MessageCircle, 
  Mail, 
  Github,
  Linkedin,
  Sparkles,
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
      content: 'Version Control Assistant',
      detail: 'LLM + GitHub APIs',
      color: '#ff6b6b'
    },
    {
      icon: <BookOpen className="about-icon" />,
      title: 'Learning',
      content: 'DSA with Java',
      detail: 'Python for Data Science · DevOps & Cloud',
      color: '#4ecdc4'
    },
    {
      icon: <Users className="about-icon" />,
      title: 'Open to Collaborate',
      content: 'Machine Learning',
      detail: 'Data Science projects · DevOps automation',
      color: '#45b7d1'
    },
    {
      icon: <HelpCircle className="about-icon" />,
      title: 'Need Help With',
      content: 'Making my Version Control Assistant production-ready',
      detail: '',
      color: '#f9ca24'
    },
    {
      icon: <MessageCircle className="about-icon" />,
      title: 'Ask Me About',
      content: 'Machine Learning · Data Science',
      detail: 'DevOps · Backend Development',
      color: '#6c5ce7'
    },
    {
      icon: <Mail className="about-icon" />,
      title: 'Reach Me At',
      content: '',
      detail: '',
      links: [
        { label: 'GitHub', href: 'https://github.com/kanishkparashar', icon: <Github size={15} /> },
        { label: 'LinkedIn', href: 'https://linkedin.com/in/kanishk-parashar', icon: <Linkedin size={15} /> },
        { label: 'Email', href: 'mailto:kanishkparashar159@gmail.com', icon: <Mail size={15} /> }
      ],
      color: '#a29bfe'
    }
  ]

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="section-container">
        <div className={`section-header ${isVisible ? 'animate-in' : ''}`}>
          <span className="section-tag">Developer Profile</span>
          <h2 className="section-title">About <span className="title-highlight">Me</span></h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Getting to know the developer behind the projects.</p>
        </div>

        <div className="about-content">
          <div className={`about-intro ${isVisible ? 'animate-in' : ''}`}>
            <div className="about-image-container">
              <div className="about-image-wrapper">
                <div className="about-image">
                  <img src="/profilePic.jpeg" alt="Kanishk Parashar" className="profile-image" />
                </div>
                <div className="image-glow"></div>
              </div>
            </div>

            <div className="about-text">
              <h3 className="about-greeting">
                Hi, I'm <span className="name-accent">Kanishk Parashar</span>
              </h3>
              <p className="about-description">
                I'm a <span className="text-highlight">B.Tech Computer Science student</span> at Lovely Professional University, passionate about <span className="text-highlight">Data Science</span>, <span className="text-highlight">Machine Learning</span>, <span className="text-highlight">Backend Development</span>, and <span className="text-highlight">DevOps</span>. I enjoy building practical systems that combine software engineering with intelligent technologies.
              </p>
              <p className="about-description">
                I'm currently focused on strengthening <span className="text-highlight">DSA</span>, <span className="text-highlight">Python</span>, <span className="text-highlight">Machine Learning</span>, and <span className="text-highlight">DevOps</span> while building projects that solve real-world problems.
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
                {item.links ? (
                  <div className="card-links">
                    {item.links.map((link) => (
                      <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="card-link">
                        {link.icon}
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                ) : (
                  <>
                    <p className="card-content">{item.content}</p>
                    {item.detail && <p className="card-detail">{item.detail}</p>}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

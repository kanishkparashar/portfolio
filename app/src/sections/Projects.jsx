import { useEffect, useRef, useState } from 'react'
import { 
  Github, 
  ExternalLink, 
  Bot, 
  Shield, 
  BarChart2, 
  Brain,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react'

const Projects = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeProject, setActiveProject] = useState(0)

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

  const projects = [
    {
      id: 5,
      title: 'Hospital Management with AI',
      subtitle: 'MERN Stack · AI Medical Triage',
      description: 'A full-stack hospital management system for patient registration, appointment booking, doctor management, and AI-powered medical triage.',
      icon: <Brain className="project-icon" />,
      color: '#38bdf8',
      gradient: 'linear-gradient(135deg, #38bdf8 0%, #2563eb 100%)',
      features: [
        'JWT authentication with role-based access for Admin, Doctor, and Patient',
        'Patient registration and appointment booking workflows',
        'AI-powered symptom analysis and medical triage recommendations',
        'Admin and doctor dashboards with appointment management',
        'Cloudinary integration for doctor profile photo uploads'
      ],
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Grok AI', 'Cloudinary'],
      github: 'https://github.com/kanishkparashar/Hospital_management_with_ai',
      demo: null,
      status: 'Ready for Local Development'
    },
    {
      id: 1,
      title: 'Version Control Assistant',
      subtitle: 'AI Chatbot for Git/GitHub',
      description: 'An AI-powered chatbot that provides accurate Git/GitHub support, helping users solve merge conflicts, commit issues, and CI/CD errors with intelligent responses.',
      icon: <Bot className="project-icon" />,
      color: '#ff6b6b',
      gradient: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a5a 100%)',
      features: [
        'Domain-restricted prompting for Git-only responses',
        'Conversation-aware system with context memory',
        'Code block formatting and command suggestions',
        'Step-by-step solutions for error resolution',
        'OpenAI API integration with robust error handling'
      ],
      tech: ['Python', 'Streamlit', 'OpenAI API', 'Git/GitHub', 'HTML/CSS'],
      github: 'https://github.com/kanishkparashar',
      demo: null,
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Anon Cloth',
      subtitle: 'E-Commerce Platform',
      description: 'A modern e-commerce platform for anonymous clothing transactions built with React, Node.js, and MongoDB. Features user authentication, product catalog, shopping cart, and secure payment integration.',
      icon: <Shield className="project-icon" />,
      color: '#4ecdc4',
      gradient: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)',
      features: [
        'Secure user authentication and privacy protection',
        'Dynamic product catalog with filtering and search',
        'Shopping cart and checkout functionality',
        'Order management and tracking system',
        'Responsive design for all devices'
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
      github: 'https://github.com/kanishkparashar',
      demo: null,
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Data Analysis Suite',
      subtitle: 'Analytics & Visualization',
      description: 'A collection of data analysis projects focusing on exploratory data analysis, predictive modeling, and interactive visual analytics dashboards.',
      icon: <BarChart2 className="project-icon" />,
      color: '#45b7d1',
      gradient: 'linear-gradient(135deg, #45b7d1 0%, #3498db 100%)',
      features: [
        'Exploratory data analysis on real-world datasets',
        'Predictive modeling with various algorithms',
        'Interactive visual analytics dashboards',
        'Statistical analysis and hypothesis testing'
      ],
      tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Power BI'],
      github: 'https://github.com/kanishkparashar',
      demo: null,
      status: 'Ongoing'
    },
    {
      id: 4,
      title: 'ML Model Collection',
      subtitle: 'Classification & Regression',
      description: 'Various machine learning models for classification and regression tasks on real-world datasets with comprehensive model evaluation and deployment work.',
      icon: <Brain className="project-icon" />,
      color: '#6c5ce7',
      gradient: 'linear-gradient(135deg, #6c5ce7 0%, #5f3dc4 100%)',
      features: [
        'Classification & Regression models',
        'Real-world dataset implementations',
        'Model evaluation metrics',
        'Cross-validation techniques',
        'Hyperparameter tuning'
      ],
      tech: ['Python', 'Scikit-learn', 'TensorFlow', 'Keras', 'Jupyter'],
      github: 'https://github.com/kanishkparashar',
      demo: null,
      status: 'In Progress'
    }
  ]

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="section-container">
        <div className={`section-header ${isVisible ? 'animate-in' : ''}`}>
          <span className="section-tag">My Work</span>
          <h2 className="section-title">
            Featured <span className="title-highlight">Projects</span>
          </h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Showcasing my journey through code and innovation
          </p>
        </div>

        <div className={`projects-showcase ${isVisible ? 'animate-in' : ''}`}>
          <div className="project-navigation">
            <button className="nav-btn prev" onClick={prevProject}>
              <ChevronLeft size={24} />
            </button>
            <button className="nav-btn next" onClick={nextProject}>
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="projects-carousel">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card ${index === activeProject ? 'active' : ''} ${
                  index < activeProject ? 'prev' : ''
                } ${index > activeProject ? 'next' : ''}`}
                style={{ '--project-color': project.color }}
              >
                <div className="project-visual" style={{ background: project.gradient }}>
                  <div className="project-icon-wrapper">
                    {project.icon}
                  </div>
                  <div className="project-status">
                    <Sparkles size={14} />
                    <span>{project.status}</span>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-subtitle">{project.subtitle}</span>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-features">
                    <h4>Key Features</h4>
                    <ul>
                      {project.features.map((feature, fIndex) => (
                        <li key={fIndex}>
                          <span className="feature-bullet" style={{ backgroundColor: project.color }}></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-tech">
                    <h4>Tech Stack</h4>
                    <div className="tech-tags">
                      {project.tech.map((tech, tIndex) => (
                        <span 
                          key={tIndex} 
                          className="tech-tag"
                          style={{ 
                            backgroundColor: `${project.color}20`,
                            color: project.color,
                            borderColor: `${project.color}40`
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      style={{ backgroundColor: project.color }}
                    >
                      <Github size={18} />
                      <span>View Code</span>
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link demo"
                        style={{ borderColor: project.color, color: project.color }}
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="project-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === activeProject ? 'active' : ''}`}
                onClick={() => setActiveProject(index)}
                style={{ 
                  backgroundColor: index === activeProject ? projects[activeProject].color : '' 
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

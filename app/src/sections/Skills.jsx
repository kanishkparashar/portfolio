import { useEffect, useRef, useState } from 'react'
import { 
  Code2, 
  Database, 
  Cloud, 
  GitBranch, 
  Terminal, 
  BarChart3,
  Cpu,
  Layers,
  Box,
  Server
} from 'lucide-react'

const Skills = () => {
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

  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 className="category-icon" />,
      color: '#ff6b6b',
      skills: [
        { name: 'Python', level: 90, icon: '🐍' },
        { name: 'Java', level: 85, icon: '☕' },
        { name: 'JavaScript', level: 80, icon: '⚡' },
        { name: 'C', level: 75, icon: '🔧' },
        { name: 'HTML/CSS', level: 85, icon: '🎨' },
        { name: 'SQL', level: 80, icon: '📊' },
        { name: 'PHP', level: 70, icon: '🐘' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Layers className="category-icon" />,
      color: '#4ecdc4',
      skills: [
        { name: 'Scikit-Learn', level: 85, icon: '🤖' },
        { name: 'Pandas', level: 88, icon: '🐼' },
        { name: 'NumPy', level: 82, icon: '🔢' },
        { name: 'Matplotlib', level: 80, icon: '📈' },
        { name: 'Seaborn', level: 78, icon: '📊' },
        { name: 'Streamlit', level: 75, icon: '🌊' },
        { name: 'React', level: 80, icon: '⚛️' },
        { name: 'Node.js', level: 75, icon: '🟢' }
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: <Terminal className="category-icon" />,
      color: '#45b7d1',
      skills: [
        { name: 'Git', level: 90, icon: '🌿' },
        { name: 'GitHub', level: 88, icon: '🐙' },
        { name: 'Linux', level: 80, icon: '🐧' },
        { name: 'Docker', level: 75, icon: '🐳' },
        { name: 'Kubernetes', level: 70, icon: '☸️' },
        { name: 'AWS', level: 72, icon: '☁️' },
        { name: 'VS Code', level: 90, icon: '💻' },
        { name: 'Android Studio', level: 75, icon: '📱' }
      ]
    },
    {
      title: 'Data & Analytics',
      icon: <BarChart3 className="category-icon" />,
      color: '#f9ca24',
      skills: [
        { name: 'MySQL', level: 85, icon: '🐬' },
        { name: 'SQLite', level: 80, icon: '🗄️' },
        { name: 'MongoDB', level: 75, icon: '🍃' },
        { name: 'MS Excel', level: 88, icon: '📑' },
        { name: 'Power BI', level: 78, icon: '📊' },
        { name: 'Figma', level: 72, icon: '🎨' }
      ]
    },
    {
      title: 'DevOps & Cloud',
      icon: <Cloud className="category-icon" />,
      color: '#6c5ce7',
      skills: [
        { name: 'CI/CD', level: 75, icon: '🔄' },
        { name: 'Docker Compose', level: 72, icon: '📦' },
        { name: 'GitHub Actions', level: 78, icon: '⚡' },
        { name: 'Cloud Computing', level: 80, icon: '☁️' }
      ]
    },
    {
      title: 'Coursework',
      icon: <Cpu className="category-icon" />,
      color: '#a29bfe',
      skills: [
        { name: 'DBMS', level: 85, icon: '🗃️' },
        { name: 'OOP', level: 88, icon: '🎯' },
        { name: 'Computer Networks', level: 80, icon: '🌐' },
        { name: 'Operating Systems', level: 82, icon: '💿' },
        { name: 'Data Structures', level: 85, icon: '📚' },
        { name: 'Algorithms', level: 83, icon: '🧮' }
      ]
    }
  ]

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="section-container">
        <div className={`section-header ${isVisible ? 'animate-in' : ''}`}>
          <span className="section-tag">My Skills</span>
          <h2 className="section-title">
            Technical <span className="title-highlight">Expertise</span>
          </h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={catIndex}
              className={`skill-category ${isVisible ? 'animate-in' : ''}`}
              style={{ 
                '--category-color': category.color,
                animationDelay: `${catIndex * 0.15}s`
              }}
            >
              <div className="category-header">
                <div 
                  className="category-icon-wrapper"
                  style={{ backgroundColor: `${category.color}20` }}
                >
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="skill-item"
                    style={{ animationDelay: `${(catIndex * 0.15) + (skillIndex * 0.05)}s` }}
                  >
                    <div className="skill-info">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <div className="skill-bar-container">
                      <div 
                        className="skill-bar"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          backgroundColor: category.color
                        }}
                      >
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`soft-skills ${isVisible ? 'animate-in' : ''}`}>
          <h3 className="soft-skills-title">Soft Skills</h3>
          <div className="soft-skills-grid">
            {['Problem-Solving', 'Project Management', 'Adaptability', 'Teamwork', 'Communication', 'Critical Thinking'].map((skill, index) => (
              <div key={index} className="soft-skill-tag" style={{ animationDelay: `${index * 0.1}s` }}>
                <Server size={14} />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

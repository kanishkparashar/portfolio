import { useEffect, useRef, useState } from 'react'
import {
  BarChart3,
  Cloud,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Layers,
  Server,
  Sparkles,
  Terminal
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
      { threshold: 0.12 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: 'Languages',
      subtitle: 'Core programming skills',
      icon: Code2,
      color: '#ff6b6b',
      skills: [
        { name: 'Java', level: 90, icon: Code2 },
        { name: 'Python', level: 88, icon: Terminal },
        { name: 'JavaScript', level: 82, icon: Sparkles },
        { name: 'SQL', level: 80, icon: Database }
      ]
    },
    {
      title: 'Frameworks',
      subtitle: 'Modern build and data tooling',
      icon: Layers,
      color: '#4ecdc4',
      skills: [
        { name: 'React.js', level: 85, icon: Layers },
        { name: 'Node.js', level: 80, icon: Server },
        { name: 'Express.js', level: 78, icon: Code2 },
        { name: 'Scikit-learn', level: 82, icon: Cpu },
        { name: 'Pandas', level: 84, icon: BarChart3 },
        { name: 'NumPy', level: 80, icon: Cpu },
        { name: 'Matplotlib', level: 78, icon: BarChart3 }
      ]
    },
    {
      title: 'DevOps & Cloud',
      subtitle: 'Shipping and deployment workflows',
      icon: Cloud,
      color: '#6c5ce7',
      skills: [
        { name: 'Docker', level: 84, icon: Cloud },
        { name: 'Jenkins', level: 78, icon: GitBranch },
        { name: 'AWS', level: 76, icon: Cloud },
        { name: 'CI/CD', level: 80, icon: Terminal }
      ]
    },
    {
      title: 'Tools & Platforms',
      subtitle: 'Developer productivity and analysis',
      icon: Terminal,
      color: '#45b7d1',
      skills: [
        { name: 'Git', level: 90, icon: GitBranch },
        { name: 'GitHub', level: 88, icon: Code2 },
        { name: 'Streamlit', level: 80, icon: Sparkles },
        { name: 'Power BI', level: 82, icon: BarChart3 }
      ]
    },
    {
      title: 'Coursework',
      subtitle: 'Academic foundations in computer science',
      icon: Cpu,
      color: '#a29bfe',
      skills: [
        { name: 'Data Structures & Algorithms', level: 88, icon: Cpu },
        { name: 'OOPS', level: 86, icon: Layers },
        { name: 'DBMS', level: 84, icon: Database },
        { name: 'Computer Networks', level: 80, icon: Server },
        { name: 'Operating System', level: 78, icon: Terminal }
      ]
    }
  ]

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="section-container">
        <div className={`section-header ${isVisible ? 'animate-in' : ''}`}>
          <span className="section-tag">Technical Skills</span>
          <h2 className="section-title">
            Technical <span className="title-highlight">Expertise</span>
          </h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Technologies and tools I use to build, analyze, and deploy applications.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => {
            const CategoryIcon = category.icon

            return (
              <div
                key={catIndex}
                className={`skill-category ${isVisible ? 'animate-in' : ''}`}
                style={{
                  '--category-color': category.color,
                  animationDelay: `${catIndex * 0.12}s`
                }}
              >
                <div className="category-header">
                  <div
                    className="category-icon-wrapper"
                    style={{ background: `linear-gradient(135deg, ${category.color}22, ${category.color}0d)` }}
                  >
                    <CategoryIcon className="category-icon" />
                  </div>
                  <div className="category-heading">
                    <h3 className="category-title">{category.title}</h3>
                    <p className="category-subtitle">{category.subtitle}</p>
                  </div>
                </div>

                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon

                    return (
                      <div
                        key={`${category.title}-${skill.name}`}
                        className="skill-item"
                        style={{ animationDelay: `${(catIndex * 0.12) + (skillIndex * 0.08)}s` }}
                      >
                        <div className="skill-row">
                          <div className="skill-main">
                            <span className="skill-tech-icon" style={{ color: category.color }}>
                              <SkillIcon size={16} />
                            </span>
                            <span className="skill-name">{skill.name}</span>
                          </div>
                          <span className="skill-percent">{skill.level}%</span>
                        </div>

                        <div className="skill-progress-track">
                          <div
                            className="skill-progress-fill"
                            style={{
                              width: isVisible ? `${skill.level}%` : '0%',
                              background: `linear-gradient(90deg, ${category.color} 0%, rgba(255,255,255,0.95) 100%)`
                            }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        <div className={`soft-skills ${isVisible ? 'animate-in' : ''}`}>
          <h3 className="soft-skills-title">Soft Skills</h3>
          <div className="soft-skills-grid">
            {['Problem-Solving', 'Leadership', 'Adaptability', 'Collaboration'].map((skill, index) => (
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

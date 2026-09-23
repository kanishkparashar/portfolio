import { useEffect, useRef, useState } from 'react'
import { Trophy, Target, TrendingUp, Code2, Star, Zap } from 'lucide-react'

const Achievements = () => {
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

  const platforms = [
    {
      name: 'LeetCode',
      username: 'kanishk4518',
      stats: [
        { label: 'Problems Solved', value: '600+' },
        { label: 'Contest Rating', value: '1531' },
        { label: 'Badges', value: '12' }
      ],
      color: '#ffa116',
      icon: '🔥',
      link: 'https://www.leetcode.com/kanishk4518'
    },
    {
      name: 'GeeksForGeeks',
      username: 'kanishk_parashar',
      stats: [
        { label: 'Problems Solved', value: '100+' },
        { label: 'Institute Rank', value: 'Top 1000' },
        { label: 'Score', value: '800+' }
      ],
      color: '#2f8d46',
      icon: '📚',
      link: 'https://auth.geeksforgeeks.org/user/kanishk_parashar'
    },
    {
      name: 'HackerRank',
      username: 'kanishkparashar1',
      stats: [
        { label: 'Badges', value: '5+' },
        { label: 'Stars', value: 'Gold' },
        { label: 'Skills', value: '10+' }
      ],
      color: '#00ab6c',
      icon: '⭐',
      link: 'https://www.hackerrank.com/kanishkparashar1'
    },
    {
      name: 'Codolio',
      username: 'Kanishkcodes',
      stats: [
        { label: 'Profile', value: 'Active' },
        { label: 'Progress', value: 'Tracking' },
        { label: 'Goals', value: 'Set' }
      ],
      color: '#6366f1',
      icon: '🎯',
      link: 'https://codolio.com/profile/Kanishkcodes'
    }
  ]

  const milestones = [
    {
      icon: <Code2 className="milestone-icon" />,
      title: '850+ Problems',
      description: 'Total problems solved across all platforms',
      color: '#ff6b6b'
    },
    {
      icon: <Trophy className="milestone-icon" />,
      title: 'LeetCode Rating',
      description: 'Achieved 1531 rating with 12 badges',
      color: '#4ecdc4'
    },
    {
      icon: <Target className="milestone-icon" />,
      title: 'Consistent Practice',
      description: 'Daily coding practice for 6+ months',
      color: '#45b7d1'
    },
    {
      icon: <TrendingUp className="milestone-icon" />,
      title: 'Continuous Growth',
      description: 'Steady improvement in problem-solving skills',
      color: '#f9ca24'
    }
  ]

  return (
    <section id="achievements" className="achievements" ref={sectionRef}>
      <div className="section-container">
        <div className={`section-header ${isVisible ? 'animate-in' : ''}`}>
          <span className="section-tag">Coding Journey</span>
          <h2 className="section-title">
            Competitive <span className="title-highlight">Programming</span>
          </h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            My journey through algorithms, data structures, and problem-solving
          </p>
        </div>

        <div className={`milestones-grid ${isVisible ? 'animate-in' : ''}`}>
          {milestones.map((milestone, index) => (
            <div 
              key={index}
              className="milestone-card"
              style={{ 
                '--milestone-color': milestone.color,
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div 
                className="milestone-icon-wrapper"
                style={{ backgroundColor: `${milestone.color}20` }}
              >
                {milestone.icon}
              </div>
              <h4 className="milestone-title">{milestone.title}</h4>
              <p className="milestone-description">{milestone.description}</p>
            </div>
          ))}
        </div>

        <div className={`platforms-grid ${isVisible ? 'animate-in' : ''}`}>
          {platforms.map((platform, index) => (
            <a
              key={index}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="platform-card"
              style={{ 
                '--platform-color': platform.color,
                animationDelay: `${(milestones.length + index) * 0.1}s`
              }}
            >
              <div className="platform-header" style={{ backgroundColor: `${platform.color}15` }}>
                <span className="platform-icon">{platform.icon}</span>
                <div className="platform-info">
                  <h4 className="platform-name">{platform.name}</h4>
                  <span className="platform-username">@{platform.username}</span>
                </div>
              </div>
              <div className="platform-stats">
                {platform.stats.map((stat, sIndex) => (
                  <div key={sIndex} className="platform-stat">
                    <span 
                      className="stat-value"
                      style={{ color: platform.color }}
                    >
                      {stat.value}
                    </span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
              <div className="platform-arrow" style={{ color: platform.color }}>
                <span>View Profile</span>
                <Zap size={14} />
              </div>
            </a>
          ))}
        </div>

        <div className={`vision-section ${isVisible ? 'animate-in' : ''}`}>
          <div className="vision-card">
            <div className="vision-icon">
              <Star size={32} />
            </div>
            <h3 className="vision-title">My Vision</h3>
            <p className="vision-quote">
              "To become a skilled <span className="vision-highlight">Machine Learning Engineer</span> and <span className="vision-highlight">Back End Developer</span> who builds 
              intelligent, scalable systems. Combining <span className="vision-highlight">Data Science + Backend + DevOps</span> to 
              create production-grade ML solutions."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements

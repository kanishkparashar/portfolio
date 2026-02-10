import { useEffect, useRef, useState } from 'react'
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  Github, 
  Linkedin, 
  MessageCircle,
  CheckCircle2,
  Loader2
} from 'lucide-react'

const Contact = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const apiUrl = import.meta.env.VITE_API_URL
      const contactUrl = apiUrl.endsWith('/api') ? `${apiUrl}/contact` : `${apiUrl}/api/contact`
      const response = await fetch(contactUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="contact-icon" />,
      title: 'Email',
      value: 'kanishkparashar159@gmail.com',
      link: 'mailto:kanishkparashar159@gmail.com',
      color: '#ff6b6b'
    },
    {
      icon: <Phone className="contact-icon" />,
      title: 'Phone',
      value: '+91-9005668822',
      link: 'tel:+919005668822',
      color: '#4ecdc4'
    },
    {
      icon: <MapPin className="contact-icon" />,
      title: 'Location',
      value: 'Punjab, India',
      link: null,
      color: '#45b7d1'
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      link: 'https://github.com/Pt-kanishk',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      link: 'https://linkedin.com/in/kanishk-parashar',
      color: '#0077b5'
    },
    {
      name: 'LeetCode',
      icon: <MessageCircle size={20} />,
      link: 'https://www.leetcode.com/kanishk4518',
      color: '#ffa116'
    }
  ]

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="section-container">
        <div className={`section-header ${isVisible ? 'animate-in' : ''}`}>
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">
            Let's <span className="title-highlight">Connect</span>
          </h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Have a project in mind or just want to say hi? I'd love to hear from you!
          </p>
        </div>

        <div className="contact-content">
          <div className={`contact-info-section ${isVisible ? 'animate-in' : ''}`}>
            <h3 className="contact-subtitle">Contact Information</h3>
            <p className="contact-description">
              Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities.
            </p>

            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="contact-card"
                  style={{ 
                    '--info-color': info.color,
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div 
                    className="contact-icon-wrapper"
                    style={{ backgroundColor: `${info.color}20` }}
                  >
                    {info.icon}
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">{info.title}</span>
                    <span className="contact-value">{info.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="social-section">
              <h4 className="social-title">Follow Me</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-btn"
                    style={{ 
                      '--social-color': social.color,
                      animationDelay: `${(contactInfo.length + index) * 0.1}s`
                    }}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={`contact-form-section ${isVisible ? 'animate-in' : ''}`}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="form-title">Send a Message</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Collaboration"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                />
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="spinner" size={18} />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="submit-message success">
                  <CheckCircle2 size={18} />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="submit-message error">
                  <span>Failed to send message. Please try again or email me directly.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio', {
  serverSelectionTimeoutMS: 5000,
}).catch(err => {
  console.error('MongoDB connection failed:', err.message);
  process.exit(1);
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model('Contact', contactSchema);

// Visitor Schema for tracking
const visitorSchema = new mongoose.Schema({
  ip: String,
  userAgent: String,
  visitedAt: { type: Date, default: Date.now },
});

const Visitor = mongoose.model('Visitor', visitorSchema);

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running!' });
});

// Get portfolio data
app.get('/api/portfolio', (req, res) => {
  const portfolioData = {
    name: 'Kanishk Parashar',
    title: 'Data Science Student | Aspiring ML Engineer | DevOps Enthusiast',
    about: {
      currentProject: 'Version Control Assistant Chatbot (LLM + GitHub APIs)',
      learning: 'DSA (Java), Python for Data Science, DevOps (Docker, CI/CD, K8s)',
      collaborateOn: 'ML models, Data Science projects & DevOps automation',
      helpWith: 'Making my Version Control Assistant production-ready',
      askMeAbout: 'Data Science, DSA, Git, GitHub, DevOps',
      email: 'kanishkparashar159@gmail.com',
      funFact: 'I debug my life like I debug my code — one print statement at a time 😄'
    },
    skills: {
      languages: ['Python', 'Java', 'C', 'JavaScript', 'HTML', 'CSS', 'PHP', 'SQL'],
      frameworks: ['Scikit-Learn', 'Seaborn', 'Streamlit', 'React', 'Node.js', 'Express'],
      tools: ['Git', 'GitHub', 'Linux', 'AWS', 'Docker', 'Kubernetes', 'MS Excel', 'Power BI'],
      databases: ['MySQL', 'SQLite', 'MongoDB'],
      coursework: ['DBMS', 'OOP', 'Computer Networks', 'Operating Systems'],
      softSkills: ['Problem-Solving', 'Project Management', 'Adaptability']
    },
    projects: [
      {
        id: 1,
        title: 'Version Control Assistant (LLM + GitHub API)',
        description: 'AI-powered chatbot that provides accurate Git/GitHub support, helping users solve merge conflicts, commit issues, and CI/CD errors.',
        features: [
          'Domain-restricted prompting for Git-only responses',
          'Conversation-aware system with context memory',
          'Code block formatting and command suggestions',
          'Step-by-step solutions for error resolution',
          'OpenAI API integration with error handling'
        ],
        tech: ['Python', 'Streamlit', 'HTML/CSS', 'Git/GitHub', 'OpenAI API'],
        github: 'https://github.com/Pt-kanishk',
        demo: null,
        image: 'version-control-assistant'
      },
      {
        id: 2,
        title: 'Online Payments Fraud Detection',
        description: 'Machine learning-based fraud detection system capable of identifying suspicious transactions in real-time with 99.97% accuracy.',
        features: [
          'Decision Tree Classifier with optimized hyperparameters',
          'Real-time fraud detection capabilities',
          'Extensive data preprocessing and EDA',
          'Feature optimization and visualization',
          'Outlier detection and handling'
        ],
        tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
        github: 'https://github.com/Pt-kanishk',
        demo: null,
        image: 'fraud-detection'
      },
      {
        id: 3,
        title: 'Data Analysis Projects',
        description: 'Collection of data analysis projects focusing on exploratory data analysis, predictive modeling, and visual analytics dashboards.',
        features: [
          'Exploratory data analysis on real-world datasets',
          'Predictive modeling with various algorithms',
          'Interactive visual analytics dashboards',
          'Statistical analysis and hypothesis testing'
        ],
        tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Power BI'],
        github: 'https://github.com/Pt-kanishk',
        demo: null,
        image: 'data-analysis'
      }
    ],
    education: [
      {
        institution: 'Lovely Professional University',
        location: 'Punjab, India',
        degree: 'Bachelor of Technology - Computer Science and Engineering',
        duration: 'Since August 2023',
        grade: 'CGPA: 6.45'
      },
      {
        institution: 'Mahatma Hansraj Modern School',
        location: 'Jhansi, Uttar Pradesh',
        degree: 'Intermediate',
        duration: 'April 2020 - March 2022',
        grade: 'Percentage: 71.6%'
      }
    ],
    certificates: [
      {
        name: 'Cloud Computing',
        issuer: 'IIT Kharagpur by NPTEL',
        date: 'November 2025'
      },
      {
        name: 'Software Development',
        issuer: 'University of Minnesota',
        date: 'May 2024'
      },
      {
        name: 'Android Developer Pro',
        issuer: 'Lovely Professional University - Centre for Professional Enhancement',
        date: 'June 2025 - August 2025'
      }
    ],
    achievements: [
      {
        title: 'Competitive Coding & Algorithm Expertise',
        description: 'Solved 700+ problems across LeetCode and GeeksForGeeks',
        details: 'LeetCode rating 1531, earned 7 badges'
      }
    ],
    social: {
      linkedin: 'https://linkedin.com/in/kanishk-parashar',
      github: 'https://github.com/Pt-kanishk',
      leetcode: 'https://www.leetcode.com/kanishk4518',
      hackerrank: 'https://www.hackerrank.com/kanishkparashar1',
      geeksforgeeks: 'https://auth.geeksforgeeks.org/user/kanishk_parashar',
      codolio: 'https://codolio.com/profile/Kanishkcodes'
    }
  };
  res.json(portfolioData);
});

// Contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    // Ensure MongoDB is connected
    if (mongoose.connection.readyState !== 1) {
      console.error('MongoDB not connected. readyState=', mongoose.connection.readyState);
      return res.status(500).json({ success: false, message: 'MongoDB not connected' });
    }

    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error saving contact:', error);
    // In development, include the error message to help debugging
    const resp = { success: false, message: 'Failed to send message' };
    if (process.env.NODE_ENV !== 'production') resp.error = error.message;
    res.status(500).json(resp);
  }
});

// Track visitor
app.post('/api/visitor', async (req, res) => {
  try {
    const { ip, userAgent } = req.body;
    const newVisitor = new Visitor({ ip, userAgent });
    await newVisitor.save();
    res.status(201).json({ success: true });
  } catch (error) {
    console.error('Error tracking visitor:', error);
    res.status(500).json({ success: false });
  }
});

// Get visitor count (protected route - for admin)
app.get('/api/visitors', async (req, res) => {
  try {
    const count = await Visitor.countDocuments();
    res.json({ count });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get visitor count' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

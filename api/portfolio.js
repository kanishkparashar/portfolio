export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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

  return res.status(200).json(portfolioData);
}

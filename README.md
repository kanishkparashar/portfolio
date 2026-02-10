# Kanishk Parashar Portfolio

A modern, responsive portfolio website built with the MERN stack (MongoDB, Express, React, Node.js) showcasing my skills in Data Science, Machine Learning, and DevOps.

![Portfolio Preview](https://h4qiyszksmdgy.ok.kimi.link)

## 🚀 Live Demo

**Frontend:** [https://h4qiyszksmdgy.ok.kimi.link](https://h4qiyszksmdgy.ok.kimi.link)

## 📋 Features

- **Hero Section** - Animated typing effect with gradient background
- **About Section** - Personal introduction with floating badges
- **Skills Section** - Animated skill bars with categories
- **Projects Section** - Interactive carousel showcasing featured projects
- **Education Section** - Timeline view of academic journey
- **Certificates Section** - Professional certifications display
- **Achievements Section** - Competitive programming stats
- **Contact Section** - Functional contact form with backend integration
- **Responsive Design** - Works on all devices

## 🛠️ Tech Stack

### Frontend
- React (JavaScript)
- Tailwind CSS
- Lucide React Icons
- Vite Build Tool

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- CORS
- dotenv

## 📁 Project Structure

```
portfolio/
├── app/                    # React Frontend
│   ├── src/
│   │   ├── sections/       # Page sections (Hero, About, Skills, etc.)
│   │   ├── App.jsx         # Main App component
│   │   ├── App.css         # Global styles
│   │   └── main.jsx        # Entry point
│   ├── dist/               # Build output
│   └── index.html
│
├── portfolio-server/       # Node.js Backend
│   ├── server.js           # Express server
│   ├── package.json
│   └── .env.example
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Frontend Setup

```bash
# Navigate to frontend directory
cd app

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Backend Setup

```bash
# Navigate to backend directory
cd portfolio-server

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your MongoDB URI
MONGODB_URI=mongodb://localhost:27017/portfolio
PORT=5000

# Start server
npm start

# Or use nodemon for development
npm run dev
```

## 🔗 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Health check |
| `/api/portfolio` | GET | Get all portfolio data |
| `/api/contact` | POST | Submit contact form |
| `/api/visitor` | POST | Track visitor |
| `/api/visitors` | GET | Get visitor count |

## 📱 Sections

### 1. Hero
- Animated typing effect
- Gradient orbs background
- Social links
- Quick stats

### 2. About
- Personal introduction
- Floating badges
- Info cards with hover effects

### 3. Skills
- Categorized skill bars
- Animated progress bars
- Soft skills tags

### 4. Projects
- 3D carousel
- Version Control Assistant
- Fraud Detection System
- Data Analysis Projects

### 5. Education
- Timeline view
- LPU B.Tech CSE
- School education
- Professional training

### 6. Certificates
- NPTEL Cloud Computing
- Software Development
- Android Developer Pro

### 7. Achievements
- 700+ problems solved
- LeetCode rating 1531
- Platform profiles

### 8. Contact
- Contact form
- Social links
- Direct contact info

## 🎨 Color Scheme

- **Primary:** #6366f1 (Indigo)
- **Secondary:** #8b5cf6 (Purple)
- **Accent:** #ec4899 (Pink)
- **Background:** #0f0f1a (Dark)
- **Card:** #1e1e3f (Dark Blue)

## 📞 Contact

- **Email:** kanishkparashar159@gmail.com
- **Phone:** +91-9005668822
- **LinkedIn:** [kanishk-parashar](https://linkedin.com/in/kanishk-parashar)
- **GitHub:** [Pt-kanishk](https://github.com/Pt-kanishk)
- **LeetCode:** [kanishk4518](https://www.leetcode.com/kanishk4518)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ by Kanishk Parashar

# Vercel Deployment Guide

This project is configured for deployment on Vercel. Follow these steps to deploy:

## Prerequisites

- Vercel account (https://vercel.com)
- MongoDB Atlas cluster with connection string
- Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### 1. Push to Git Repository
```bash
git add .
git commit -m "Vercel deployment setup"
git push origin main
```

### 2. Import Project in Vercel
- Go to https://vercel.com/new
- Select your repository
- Click "Import"

### 3. Configure Environment Variables
In Vercel project settings, add the following environment variable:

- **Name**: `MONGODB_URI`
- **Value**: Your MongoDB connection string (from `.env` file)
  ```
  mongodb+srv://kanishkparashar159_db_user:PzaHCkQXr0ZMc4RU@cluster0.f4mjaoa.mongodb.net/portfolio?retryWrites=true&w=majority
  ```

### 4. Deploy
Click "Deploy" and wait for the build to complete.

## Project Structure

```
├── app/                    # React frontend (Vite)
│   ├── src/
│   ├── .env.local         # Dev environment (localhost:5000)
│   ├── .env.production    # Production environment (/api)
│   └── vite.config.ts
├── api/                   # Serverless functions (Vercel)
│   ├── contact.js         # Contact form handler
│   └── portfolio.js       # Portfolio data endpoint
├── vercel.json            # Vercel configuration
└── .env.example           # Template for env variables
```

## Local Development

### Frontend Only
```bash
cd app
npm install
npm run dev
```

### Frontend + Local Backend
```bash
# Terminal 1: Frontend
cd app
npm install
npm run dev

# Terminal 2: Backend (portfolio-server)
cd portfolio-server
npm install
npm start
```

The frontend will connect to `http://localhost:5000` via `.env.local`.

## API Endpoints

### Production (Vercel)
- `POST /api/contact` - Submit contact form
- `GET /api/portfolio` - Get portfolio data

### Local Development
- `POST http://localhost:5000/api/contact`
- `GET http://localhost:5000/api/portfolio`

## Troubleshooting

### Contact form not working
1. Check `MONGODB_URI` is set correctly in Vercel environment variables
2. Verify MongoDB Atlas allows connections from Vercel IPs
3. Check network tab in browser DevTools for error details

### Build failing
1. Check Vercel build logs
2. Ensure `package.json` in app folder has all dependencies
3. Verify `.env.production` exists in app folder

## Notes

- The frontend uses Vite and is deployed to Vercel's CDN
- API functions are Node.js serverless functions
- MongoDB connection is cached for performance in serverless environment
- CORS is enabled for all endpoints

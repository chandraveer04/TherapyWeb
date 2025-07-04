# Deployment Guide for Dr. Serena Blake's Therapy Website

This guide provides step-by-step instructions for deploying the therapy website to various hosting platforms, with a focus on Vercel deployment.

## Table of Contents

- [Preparing for Deployment](#preparing-for-deployment)
- [Deploying to Vercel](#deploying-to-vercel)
- [Alternative Deployment Options](#alternative-deployment-options)
- [Post-Deployment Steps](#post-deployment-steps)
- [Troubleshooting](#troubleshooting)

## Preparing for Deployment

Before deploying the website, ensure that:

1. All code changes are committed to your repository
2. The application builds successfully locally
3. All ESLint errors are resolved
4. Environment variables are properly configured

### Build the Application Locally

```bash
# Navigate to the project directory
cd website

# Install dependencies (if not already installed)
npm install

# Build the application
npm run build
```

If the build succeeds without errors, you're ready to deploy.

## Deploying to Vercel

Vercel is the recommended platform for deploying Next.js applications due to its seamless integration and optimization features.

### Option 1: Deploy via Vercel Dashboard (Recommended for First Deployment)

1. Create an account on [Vercel](https://vercel.com/) if you don't have one
2. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
3. In the Vercel dashboard, click "New Project"
4. Import your repository
5. Configure the project:
   - Set the framework preset to "Next.js"
   - Set the root directory to "website" (since the project is in a subdirectory)
   - Configure any environment variables if needed
6. Click "Deploy"

Vercel will automatically build and deploy your application.

### Option 2: Deploy via Vercel CLI

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Navigate to the website directory and deploy:
   ```bash
   cd website
   vercel
   ```

4. Follow the prompts to configure your deployment

### Environment Variables

If your project uses environment variables, you need to configure them in Vercel:

1. In the Vercel dashboard, go to your project
2. Navigate to "Settings" > "Environment Variables"
3. Add each environment variable and its value
4. Choose which environments (Production, Preview, Development) should use each variable
5. Click "Save"

## Alternative Deployment Options

### Deploying to Netlify

1. Create an account on [Netlify](https://www.netlify.com/)
2. Push your code to a Git repository
3. In Netlify, click "New site from Git"
4. Select your repository
5. Configure build settings:
   - Base directory: `website`
   - Build command: `npm run build`
   - Publish directory: `website/.next`
6. Click "Deploy site"

### Deploying to AWS Amplify

1. Create an AWS account and navigate to AWS Amplify
2. Click "New app" > "Host web app"
3. Connect to your Git repository
4. Configure build settings:
   - Root directory: `website`
   - Build command: `npm run build`
   - Output directory: `.next`
5. Click "Save and deploy"

### Deploying to a Traditional Web Server

For deployment to a traditional web server (VPS, dedicated server):

1. Build the application:
   ```bash
   npm run build
   ```

2. Install PM2 (process manager):
   ```bash
   npm install -g pm2
   ```

3. Start the application:
   ```bash
   pm2 start npm --name "therapy-website" -- start
   ```

4. Configure Nginx as a reverse proxy:
   ```nginx
   server {
     listen 80;
     server_name yourdomain.com;
     
     location / {
       proxy_pass http://localhost:3000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
     }
   }
   ```

## Post-Deployment Steps

After successfully deploying your website:

### 1. Connect a Custom Domain

In Vercel:
1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the instructions to configure DNS settings

### 2. Enable HTTPS

Vercel and most modern hosting platforms enable HTTPS by default. If using a custom setup:
1. Install Certbot
2. Generate SSL certificates
3. Configure your web server to use the certificates

### 3. Set Up Redirects

Configure redirects to ensure users are directed to the correct URL format:
- Redirect from non-www to www (or vice versa)
- Redirect from HTTP to HTTPS

### 4. Configure Analytics

Set up analytics to track website performance:
1. Create a Google Analytics account
2. Add the tracking code to your website
3. Set up goals and conversion tracking

## Troubleshooting

### Common Deployment Issues

#### Build Failures

If your build fails during deployment:
1. Check the build logs for specific error messages
2. Ensure all dependencies are properly installed
3. Verify that your code works in the development environment
4. Check for ESLint errors that might be preventing the build

#### Missing Environment Variables

If your application depends on environment variables:
1. Ensure all required environment variables are set in your deployment platform
2. Check that the variables are correctly named
3. Verify that the variables are accessible in your code

#### Routing Issues

If pages are not accessible after deployment:
1. Check your Next.js configuration
2. Verify that dynamic routes are properly set up
3. Ensure that your hosting platform is configured to handle Next.js routing

#### Performance Issues

If your site loads slowly after deployment:
1. Enable caching for static assets
2. Optimize images and other media files
3. Consider using a CDN for content delivery
4. Implement code splitting to reduce initial load time

---

For additional support, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment) or contact your hosting provider's support team. 
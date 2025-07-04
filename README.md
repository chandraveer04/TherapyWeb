# Dr. Serena Blake - Therapy Website

A professional therapy website for Dr. Serena Blake built with Next.js 14 and Tailwind CSS.

![Dr. Serena Blake Therapy Website](https://img.freepik.com/free-photo/woman-therapy-session-psychologist_23-2149073258.jpg)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Components](#components)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

## Overview

This website serves as a professional online presence for Dr. Serena Blake, a licensed clinical psychologist based in Los Angeles, CA. The site is designed to provide information about her therapy services, credentials, and contact details for potential clients.

The website features a modern, responsive design with a focus on accessibility and user experience. It includes sections for services offered, about the therapist, frequently asked questions, and a contact form for booking consultations.

## Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Modern UI**: Clean, professional design with animations and transitions
- **SEO Optimized**: Proper metadata and semantic HTML for better search engine visibility
- **Accessibility**: WCAG compliant with proper contrast ratios, keyboard navigation, and screen reader support
- **Performance**: Optimized images, code splitting, and minimal dependencies for fast loading
- **Contact Form**: Validated form with error handling for booking consultations
- **Interactive Elements**: Accordion FAQ section, responsive navigation, and hover effects

## Project Structure

```
website/
├── app/                  # Next.js app directory
│   ├── components/       # React components
│   │   ├── About.js      # About section component
│   │   ├── Contact.js    # Contact form component
│   │   ├── FAQ.js        # FAQ accordion component
│   │   ├── Footer.js     # Footer component
│   │   ├── Hero.js       # Hero/landing section component
│   │   ├── Navbar.js     # Navigation bar component
│   │   └── Services.js   # Services section component
│   ├── favicon.ico       # Site favicon
│   ├── globals.css       # Global CSS styles
│   ├── layout.js         # Root layout component
│   ├── loading.js        # Loading state component
│   ├── not-found.js      # 404 page component
│   └── page.js           # Home page component
├── jsconfig.json         # JavaScript configuration
├── next.config.mjs       # Next.js configuration
├── package.json          # Project dependencies and scripts
├── postcss.config.js     # PostCSS configuration
├── public/               # Static assets
└── tailwind.config.js    # Tailwind CSS configuration
```

## Technologies Used

- **Next.js 14**: React framework for production with server-side rendering
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React**: JavaScript library for building user interfaces
- **ESLint**: Code linting for JavaScript and JSX
- **PostCSS**: Tool for transforming CSS with JavaScript
- **Node.js**: JavaScript runtime for development

## Components

### Navbar

A responsive navigation bar that transforms on scroll from transparent to solid background. Features:
- Mobile-friendly hamburger menu with animations
- Smooth scrolling to page sections
- Active state indicators
- Call-to-action button for booking consultations

### Hero

Full-screen hero section with:
- Background image with overlay
- Headline and subheadline
- Call-to-action button
- Scroll indicator

### About

Information about Dr. Serena Blake including:
- Professional photo
- Biography and credentials
- Education and certifications
- Professional approach to therapy

### Services

Cards displaying therapy services with:
- Service images with hover effects
- Service titles and descriptions
- Pricing information
- Call-to-action links

### FAQ

Accordion-style frequently asked questions section:
- Expandable/collapsible questions
- Smooth animations
- Session fee information
- Link to contact for additional questions

### Contact

Contact form with:
- Input validation
- Error handling
- Success confirmation
- Contact information sidebar
- Office hours and location

### Footer

Site footer with:
- Office location and map link
- Office hours
- Contact information
- Social media links
- Quick navigation links
- Copyright information

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd therapy-website/website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Development

### File Structure

- Components are located in the `app/components` directory
- Global styles are in `app/globals.css`
- Page layout is defined in `app/layout.js`
- Main page content is in `app/page.js`

### Adding New Components

1. Create a new component file in the `app/components` directory
2. Import and use the component in `app/page.js` or another component

### Styling

This project uses Tailwind CSS for styling. The configuration is in `tailwind.config.js`.

- Use Tailwind utility classes for styling components
- For custom styles, add them to `app/globals.css`
- The color scheme is based on teal (`teal-600`) as the primary color

### Form Handling

The contact form in `Contact.js` includes:
- Form state management with React useState
- Form validation with error messages
- Success state after submission

## Deployment

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

### Deploying to Vercel

The easiest way to deploy this Next.js app is using Vercel:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import the project into Vercel
3. Vercel will detect it's a Next.js app and set up the build configuration automatically
4. Deploy and get a preview URL

For more details, visit [Vercel's deployment documentation](https://nextjs.org/docs/deployment).

## Troubleshooting

### Common Issues

#### ESLint Errors

If you encounter ESLint errors related to unescaped entities:
- Replace apostrophes (`'`) with `&apos;`
- Replace double quotes (`"`) with `&quot;`

#### Build Errors

If the build fails:
1. Check the error message
2. Ensure all dependencies are installed
3. Verify that all imports are correct
4. Check for syntax errors in components

#### Hydration Errors

If you see hydration mismatch warnings:
- Add `suppressHydrationWarning={true}` to the element causing the issue
- Ensure server and client rendering match

---

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support regarding this project, please contact the developer.

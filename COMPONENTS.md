# Component Documentation

This document provides detailed information about each component in Dr. Serena Blake's therapy website.

## Table of Contents

- [Navbar](#navbar)
- [Hero](#hero)
- [About](#about)
- [Services](#services)
- [FAQ](#faq)
- [Contact](#contact)
- [Footer](#footer)

## Navbar

**File:** `app/components/Navbar.js`

### Description

A responsive navigation bar that transforms on scroll from transparent to solid background. It includes a mobile menu for smaller screens and navigation links to different sections of the website.

### State Management

- `isMenuOpen`: Controls the visibility of the mobile menu
- `scrolled`: Tracks whether the user has scrolled down the page

### Key Features

- **Scroll Transformation**: Changes appearance when scrolling down
- **Mobile Menu**: Toggleable menu for mobile devices
- **Click Outside Detection**: Closes mobile menu when clicking outside
- **Smooth Scrolling**: Links scroll smoothly to page sections

### Code Example

```jsx
// Usage in page.js
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* Other components */}
    </main>
  );
}
```

## Hero

**File:** `app/components/Hero.js`

### Description

A full-screen hero section that serves as the landing area of the website. It includes a background image, headline, and call-to-action button.

### Key Features

- **Full-screen Design**: Takes up the entire viewport height
- **Background Image**: Professional therapy-related image with overlay
- **Call-to-Action**: Button to navigate to the contact section
- **Responsive Text**: Font sizes adjust based on screen size

### Code Example

```jsx
// Usage in page.js
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* Other components */}
    </main>
  );
}
```

## About

**File:** `app/components/About.js`

### Description

A section that provides information about Dr. Serena Blake, including her biography, credentials, and approach to therapy.

### Key Features

- **Professional Photo**: Image of Dr. Blake
- **Biography**: Personal and professional background
- **Credentials**: Education and certifications
- **Approach**: Description of therapy approach and philosophy

### Code Example

```jsx
// Usage in page.js
import About from "./components/About";

export default function Home() {
  return (
    <main>
      {/* Other components */}
      <About />
      {/* Other components */}
    </main>
  );
}
```

## Services

**File:** `app/components/Services.js`

### Description

A section that displays the therapy services offered by Dr. Blake in a card layout.

### Data Structure

```jsx
const services = [
  {
    id: 1,
    title: "Anxiety & Stress Management",
    description: "...",
    image: "https://example.com/image.jpg",
    icon: <svg>...</svg>
  },
  // More services...
];
```

### Key Features

- **Service Cards**: Visual representation of each service
- **Responsive Grid**: Adjusts layout based on screen size
- **Hover Effects**: Visual feedback on interaction
- **Call-to-Action**: Links to contact section for each service

### Code Example

```jsx
// Usage in page.js
import Services from "./components/Services";

export default function Home() {
  return (
    <main>
      {/* Other components */}
      <Services />
      {/* Other components */}
    </main>
  );
}
```

## FAQ

**File:** `app/components/FAQ.js`

### Description

An accordion-style section that displays frequently asked questions and their answers.

### State Management

- `activeIndex`: Tracks which FAQ item is currently expanded

### Data Structure

```jsx
const faqs = [
  {
    id: 1,
    question: "Do you accept insurance?",
    answer: "..."
  },
  // More FAQs...
];
```

### Key Features

- **Accordion Interface**: Expandable/collapsible questions
- **Smooth Animations**: Transitions when opening/closing items
- **Hydration Warning Fix**: Uses `suppressHydrationWarning` to prevent React warnings
- **Accessibility**: Proper ARIA attributes for screen readers

### Code Example

```jsx
// Usage in page.js
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <main>
      {/* Other components */}
      <FAQ />
      {/* Other components */}
    </main>
  );
}
```

## Contact

**File:** `app/components/Contact.js`

### Description

A section with a contact form and information for reaching Dr. Blake.

### State Management

- `formData`: Stores form input values
- `errors`: Tracks validation errors
- `isSubmitting`: Indicates form submission in progress
- `isSubmitted`: Indicates successful form submission

### Form Fields

- Name (required)
- Phone (required)
- Email (required, validated)
- Reason for visit (required)
- Additional message (optional)
- Preferred contact time (required)
- Agreement to be contacted (required)

### Key Features

- **Form Validation**: Client-side validation with error messages
- **Submission Handling**: Loading and success states
- **Contact Information**: Address, phone, email, and office hours
- **Social Media Links**: Links to social media profiles

### Code Example

```jsx
// Usage in page.js
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      {/* Other components */}
      <Contact />
      {/* Other components */}
    </main>
  );
}
```

## Footer

**File:** `app/components/Footer.js`

### Description

The website footer containing contact information, office hours, navigation links, and copyright information.

### Key Features

- **Quote Section**: Inspirational quote with decorative styling
- **Office Information**: Address with Google Maps link
- **Office Hours**: Business hours display
- **Contact Details**: Phone and email information
- **Social Media Links**: Icons linking to social media profiles
- **Quick Navigation**: Links to main sections of the website
- **Copyright**: Dynamic year display with copyright notice

### Code Example

```jsx
// Usage in page.js
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      {/* Other components */}
      <Footer />
    </main>
  );
}
```

## Best Practices for Component Modification

When modifying these components:

1. **Maintain Responsiveness**: Ensure changes work on all screen sizes
2. **Preserve Accessibility**: Keep ARIA attributes and semantic HTML
3. **Follow Style Conventions**: Use existing color schemes and design patterns
4. **Test Thoroughly**: Check functionality across different browsers and devices

## Adding New Components

To add a new component:

1. Create a new file in the `app/components` directory
2. Import necessary dependencies
3. Define the component function
4. Export the component
5. Import and use the component in `app/page.js` or another component

Example:

```jsx
// app/components/NewComponent.js
"use client";

import { useState } from "react";

export default function NewComponent() {
  const [state, setState] = useState(initialValue);
  
  return (
    <section id="new-section" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Component content */}
      </div>
    </section>
  );
}
```

Then import and use it:

```jsx
// app/page.js
import NewComponent from "./components/NewComponent";

export default function Home() {
  return (
    <main>
      {/* Other components */}
      <NewComponent />
      {/* Other components */}
    </main>
  );
}
``` 
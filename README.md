Project Overview: Agency App

Project Information
A modern digital agency website built with React and Vite. The application showcases agency services, portfolio work, team members, and provides a contact form for client inquiries. Designed for high performance and visual appeal with smooth animations and responsive design.

Tech Stack

Core Framework:
•  React 19.2.0
•  Vite 7.2.4 

Styling & UI:
•  Tailwind CSS 4.0.0 with PostCSS integration
•  Custom theme system with Tailwind @theme
•  Responsive design with mobile-first approach

Animation & Motion:
•  Motion library 12.23.26 for scroll-triggered and interactive animations

User Feedback:
•  React Hot Toast 2.6.0 for toast notifications

Development Tools:
•  ESLint 9.39.1 with React plugin configuration
•  Babel/oxc via Vite for Fast Refresh

Key Features

1. Theme Toggle System - Light/dark mode with localStorage persistence and system preference detection
2. Custom Animated Cursor - Dual-element cursor effect (dot + ring) using requestAnimationFrame for smooth tracking
3. Responsive Navigation - Sticky navbar with mobile sidebar toggle and smooth animations
4. Hero Section - Large-scale imagery with staggered animations and gradient text
5. Services Showcase - Four service cards with interactive mouse-tracking gradient overlay effect
6. Portfolio Gallery - Three work examples with hover scale transitions
7. Team Directory - Dynamic team member grid with profile images and role information
8. Contact Form - Web3Forms integration for email submissions with real-time toast feedback
9. Scroll-Based Animations - Motion's whileInView triggers for entrance animations
10. Brand Integration - Client logo carousel (Microsoft, Google, Airbnb, Coinbase, Zoom, Rakuten)

Development Highlights

Technical Challenges & Solutions:

1. Custom Cursor Implementation
◦  Challenge: Creating a smooth, performant custom cursor while maintaining native responsiveness
◦  Solution: Used dual refs with requestAnimationFrame for the outer ring (with easing interpolation) and immediate positioning for the inner dot, keeping cursor off-screen by default
2. Theme Persistence & System Preference
◦  Challenge: Consistent theme management across sessions and respecting OS preferences
◦  Solution: Implemented localStorage for persistence, system preference detection via prefers-color-scheme, and dynamic class addition to document root for Tailwind's dark mode
3. Interactive Service Card Gradient
◦  Challenge: Creating a following gradient effect at mouse position
◦  Solution: Used getBoundingClientRect() for relative positioning calculations, blur filter effects for visual polish, and mix-blend-lighten for aesthetic gradient blending
4. Form Submission Integration
◦  Challenge: Handling client-side form submission without a backend
◦  Solution: Integrated Web3Forms API (no server required), with proper error handling and user feedback via toast notifications
5. Performance Optimization
◦  Used Vite's modern bundling for fast builds
◦  Implemented scroll-triggered animations with viewport detection to avoid rendering off-screen content
◦  Leveraged React 19's automatic memoization improvements

Code Organization:
•  Modular component structure (12 reusable components)
•  Centralized asset management via assets.js 
•  Consistent styling patterns using Tailwind utilities
•  ESLint configuration for code quality enforcement

Browser Compatibility Considerations:
•  CSS autofill styling for dark mode (webkit-specific fixes)
•  Smooth scroll behavior with motion library polyfills
•  CSS Grid/Flexbox for responsive layouts without dependencies
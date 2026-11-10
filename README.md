# Agency App

A modern digital agency website built with React and Vite. The app showcases agency services, portfolio work, and team members, and includes a contact form for client inquiries — designed for high performance and visual appeal with smooth animations and responsive design.

## Tech Stack

| Category | Tools |
|---|---|
| Core Framework | React 19.2.0, Vite 7.2.4 |
| Styling & UI | Tailwind CSS 4.0.0 (PostCSS integration), custom theme via Tailwind `@theme`, mobile-first responsive design |
| Animation & Motion | [Motion](https://motion.dev/) 12.23.26 for scroll-triggered and interactive animations |
| User Feedback | React Hot Toast 2.6.0 |
| Dev Tools | ESLint 9.39.1 with React plugin configuration, Vite Fast Refresh |

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Lint the code
npm run lint

# Build for production
npm run build

# Preview the production build
npm run preview
```

## Key Features

1. **Theme Toggle System** – Light/dark mode with localStorage persistence and system preference detection
2. **Custom Animated Cursor** – Dual-element cursor effect (dot + ring) using `requestAnimationFrame` for smooth tracking
3. **Responsive Navigation** – Sticky navbar with mobile sidebar toggle and smooth animations
4. **Hero Section** – Large-scale imagery with staggered animations and gradient text
5. **Services Showcase** – Four service cards with interactive mouse-tracking gradient overlay effect
6. **Portfolio Gallery** – Three work examples with hover scale transitions
7. **Team Directory** – Dynamic team member grid with profile images and role information
8. **Contact Form** – Web3Forms integration for email submissions with real-time toast feedback
9. **Scroll-Based Animations** – Motion's `whileInView` triggers for entrance animations
10. **Brand Integration** – Client logo carousel (Microsoft, Google, Airbnb, Coinbase, Zoom, Rakuten)

## Development Highlights

### Technical Challenges & Solutions

<details>
<summary><strong>1. Custom Cursor Implementation</strong></summary>

- **Challenge:** Creating a smooth, performant custom cursor while maintaining native responsiveness
- **Solution:** Used dual refs with `requestAnimationFrame` for the outer ring (with easing interpolation) and immediate positioning for the inner dot, keeping the cursor off-screen by default
</details>

<details>
<summary><strong>2. Theme Persistence & System Preference</strong></summary>

- **Challenge:** Consistent theme management across sessions and respecting OS preferences
- **Solution:** Implemented localStorage for persistence, system preference detection via `prefers-color-scheme`, and dynamic class addition to the document root for Tailwind's dark mode
</details>

<details>
<summary><strong>3. Interactive Service Card Gradient</strong></summary>

- **Challenge:** Creating a following gradient effect at the mouse position
- **Solution:** Used `getBoundingClientRect()` for relative positioning calculations, blur filter effects for visual polish, and `mix-blend-lighten` for aesthetic gradient blending
</details>

<details>
<summary><strong>4. Form Submission Integration</strong></summary>

- **Challenge:** Handling client-side form submission without a backend
- **Solution:** Integrated the Web3Forms API (no server required), with proper error handling and user feedback via toast notifications
</details>

<details>
<summary><strong>5. Performance Optimization</strong></summary>

- Used Vite's modern bundling for fast builds
- Implemented scroll-triggered animations with viewport detection to avoid rendering off-screen content
- Leveraged React 19's automatic memoization improvements
</details>

### Code Organization

- Modular component structure (12 reusable components)
- Centralized asset management via `assets.js`
- Consistent styling patterns using Tailwind utilities
- ESLint configuration for code quality enforcement

### Browser Compatibility Considerations

- CSS autofill styling for dark mode (webkit-specific fixes)
- Smooth scroll behavior with Motion library polyfills
- CSS Grid/Flexbox for responsive layouts without dependencies

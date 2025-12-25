# SPA Refactor Documentation

## Overview
Refactored the portfolio from a single static grid layout into a scrollable Single Page Application (SPA) with distinct sections and smooth scroll navigation.

## Structure

### Section 1: Home / Hero (#home)
- **Location**: Top of the page, full viewport height
- **Content**:
  - Profile Card (with photo, name, title, bio, buttons)
  - Tech Stack carousel
  - Education (SJSU)
  - GitHub social link
  - Location & Time
  - Status (Available for Work)
  - LinkedIn social link
- **Layout**: Bento Grid (4-column responsive grid)
- **Styling**: `min-h-screen py-12 px-6 sm:px-8 lg:px-12 flex items-center`

### Section 2: Projects (#projects)
- **Location**: Below hero section
- **Content**:
  - Section heading: "Featured Projects"
  - BrainDeck project card (full-width, max-w-4xl)
    - Larger, more prominent display
    - Live iframe preview
    - Detailed description
    - Tech stack tags
- **Layout**: Centered single column
- **Styling**: `py-20 px-6 sm:px-8 lg:px-12`

### Section 3: Experience (#experience)
- **Location**: Below projects section
- **Content**:
  - Section heading: "Work Experience"
  - Mainspring Energy - Software Engineering Intern (Jan 2025 - May 2025)
    - Python & FastAPI service development
    - Performance optimization highlights
    - Docker containerization
  - Salam Food Pantry - Software Engineer (Present)
    - Full-stack web development
    - Nonprofit solutions
- **Layout**: Centered single column, max-w-4xl, stacked cards
- **Styling**: `py-20 px-6 sm:px-8 lg:px-12`

### Section 4: Leadership (#leadership)
- **Location**: Below experience section
- **Content**:
  - Section heading: "Leadership & Activities"
  - SJSU High Speed Autonomous Plane (H.S.A.P.) - Project Manager
    - Team leadership (20 members)
    - Project management tools (GitHub Projects, Jira)
    - Agile methodology
- **Layout**: Centered single column, max-w-4xl
- **Styling**: `py-20 px-6 sm:px-8 lg:px-12`

### Section 5: Contact (#contact)
- **Location**: Bottom of page (footer area)
- **Content**:
  - "Let's Work Together" heading
  - Call-to-action text
  - Email and LinkedIn buttons
  - Social media icons (GitHub, LinkedIn, Email)
- **Layout**: Centered card, max-w-3xl
- **Styling**: `py-20 px-6 sm:px-8 lg:px-12`

## Navigation Updates

### Floating Dock Component
Updated from route-based navigation to scroll-based navigation:

**Previous**: 
- Home → `/`
- Projects → `/projects`
- Contact → `/contact`

**Current**:
- Home → `#home` (scroll to hero)
- Projects → `#projects` (scroll to projects section)
- Experience → `#experience` (scroll to experience section)
- Leadership → `#leadership` (scroll to leadership section)
- Contact → `#contact` (scroll to contact section)

### Features
1. **Smooth Scrolling**: Uses `scrollIntoView({ behavior: 'smooth' })`
2. **Active Section Tracking**: Highlights the current section in the dock based on scroll position
3. **Click Handlers**: Prevent default anchor behavior and use smooth scroll
4. **Icons**: 
   - Home: `Home` icon
   - Projects: `FolderKanban` icon
   - Experience: `Briefcase` icon
   - Leadership: `Users` icon
   - Contact: `Mail` icon

### Hero Section Buttons
- "View Work" button → scrolls to `#projects`
- "Contact" button → scrolls to `#contact`

## Styling & Spacing

### Section Padding
- Hero: `py-12` (smaller, as it's full viewport height)
- Projects: `py-20` (significant vertical spacing)
- Experience: `py-20` (significant vertical spacing)
- Leadership: `py-20` (significant vertical spacing)
- Contact: `py-20` (significant vertical spacing)

### Container Widths
- Hero grid: `max-w-7xl`
- Projects: `max-w-4xl` (centered, prominent)
- Experience: `max-w-4xl` (centered)
- Leadership: `max-w-4xl` (centered)
- Contact: `max-w-3xl` (centered, narrower for readability)

### Design Consistency
- Maintained "Linear-style" dark aesthetic
- Glassmorphism effects on all cards
- `rounded-2xl` or `rounded-3xl` borders
- `bg-slate-950` background
- High-contrast typography (zinc-100 headings, zinc-400 body)
- Subtle borders (`border-white/10`)

## Animations

### Scroll-triggered Animations
All sections use Framer Motion's `whileInView` for fade-in effects:
```tsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
```

### Stagger Effects
Hero section maintains the original stagger animation for grid items.

## Global CSS Updates

Already configured in `globals.css`:
```css
html {
  scroll-behavior: smooth;
}
```

## Benefits

1. **Better UX**: Single-page navigation is faster and more fluid
2. **Improved Focus**: Each section has dedicated space and prominence
3. **Scalability**: Easy to add more sections (e.g., Skills, Testimonials)
4. **Mobile-friendly**: Vertical scrolling is natural on mobile devices
5. **Professional**: Matches modern portfolio standards

## Future Enhancements

Potential additions:
- Skills section with detailed tech breakdown
- More project cards in the Projects section
- Testimonials/recommendations section
- Blog posts or articles section
- Scroll progress indicator
- Section transition animations


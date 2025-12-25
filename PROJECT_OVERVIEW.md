# Portfolio Project Overview

## 🎯 Project Summary

A high-end developer portfolio for **Jaabir Ahamed Saleem** featuring a Linear-inspired dark aesthetic with glassmorphism effects, smooth animations, and responsive design.

## 📊 Project Statistics

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Total Components**: 4 UI components + utilities
- **Pages**: 2 (Home + Demo)
- **Dependencies**: 7 core packages
- **Status**: ✅ Foundation Complete

## 📁 Complete File Structure

```
Portfolio/
├── app/
│   ├── demo/
│   │   └── page.tsx              # Component showcase page
│   ├── globals.css               # Global styles + Tailwind
│   ├── layout.tsx                # Root layout with Geist font
│   └── page.tsx                  # Home page (starter template)
│
├── components/
│   └── ui/
│       ├── card.tsx              # Glassmorphic card component ⭐
│       ├── button.tsx            # Animated button (3 variants)
│       ├── section.tsx           # Section wrapper with animations
│       └── container.tsx         # Responsive container
│
├── lib/
│   ├── utils.ts                  # cn() utility for className merging
│   ├── animations.ts             # Framer Motion animation presets
│   └── resume-data.ts            # Your complete resume data
│
├── types/
│   └── resume.ts                 # TypeScript interfaces for resume
│
├── node_modules/                 # Dependencies (391 packages)
│
├── package.json                  # Project configuration
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.ts            # Tailwind with custom theme
├── postcss.config.mjs            # PostCSS config
├── next.config.mjs               # Next.js configuration
├── .eslintrc.json               # ESLint configuration
├── .gitignore                   # Git ignore rules
│
├── README.md                     # Main documentation
├── GETTING_STARTED.md           # Quick start guide
└── PROJECT_OVERVIEW.md          # This file
```

## 🎨 Design System

### Color Palette

```css
Background:     #0a0a0a (slate-950)
Foreground:     #ffffff (white)
Border:         rgba(255, 255, 255, 0.1)
Border Hover:   rgba(255, 255, 255, 0.2)
```

### Typography

- **Font Family**: Geist Sans
- **Headings**: Bold, 600-700 weight
- **Body**: Regular, 400 weight
- **Colors**: White for headings, slate-400 for body text

### Spacing Scale

```
Section Padding:  py-20 md:py-32
Container:        max-w-7xl mx-auto px-6 sm:px-8 lg:px-12
Card Padding:     p-6 to p-12
```

### Effects

1. **Glassmorphism**
   ```css
   background: linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0.02))
   border: 1px solid rgba(255,255,255,0.1)
   backdrop-filter: blur(12px)
   ```

2. **Hover Effects**
   - Scale: 1.02x
   - Border opacity: 10% → 20%
   - Glow: 0 0 30px rgba(255,255,255,0.2)

3. **Animations**
   - Duration: 300-500ms
   - Easing: ease-out
   - Stagger: 100ms between items

## 🧩 Component API Reference

### Card Component

```tsx
<Card
  className?: string          // Custom styles
  hoverable?: boolean         // Enable hover effects (default: true)
  animated?: boolean          // Animate on mount (default: true)
  ...props                    // All div props supported
>
  {children}
</Card>
```

**Examples:**
```tsx
// Basic card
<Card className="p-6">Content</Card>

// Static card (no hover)
<Card hoverable={false}>Content</Card>

// Custom gradient
<Card className="p-8 bg-gradient-to-br from-blue-500/10">
  Content
</Card>
```

### Button Component

```tsx
<Button
  variant?: "primary" | "secondary" | "ghost"  // Style variant (default: "primary")
  size?: "sm" | "md" | "lg"                    // Size (default: "md")
  type?: "button" | "submit" | "reset"         // Button type (default: "button")
  className?: string                            // Custom styles
  ...props                                      // All button props supported
>
  {children}
</Button>
```

**Examples:**
```tsx
<Button variant="primary" size="lg">Click Me</Button>
<Button variant="secondary">Learn More</Button>
<Button variant="ghost" size="sm">Cancel</Button>
```

### Section Component

```tsx
<Section
  className?: string          // Custom styles
  id?: string                 // Section ID for navigation
  animated?: boolean          // Scroll animations (default: true)
>
  {children}
</Section>
```

**Example:**
```tsx
<Section id="about" className="bg-slate-900">
  <h2>About Me</h2>
</Section>
```

### Container Component

```tsx
<Container className?: string>
  {children}
</Container>
```

## 📦 Animation Presets

Available in `lib/animations.ts`:

| Preset | Description |
|--------|-------------|
| `fadeIn` | Simple opacity fade |
| `slideUp` | Slide up with fade |
| `slideDown` | Slide down with fade |
| `slideInFromLeft` | Slide from left |
| `slideInFromRight` | Slide from right |
| `scaleIn` | Scale up with fade |
| `staggerContainer` | Container for staggered children |
| `staggerItem` | Child item with stagger delay |
| `pageTransition` | Full page transition |

**Usage:**
```tsx
import { motion } from "framer-motion";
import { slideUp } from "@/lib/animations";

<motion.div variants={slideUp} initial="hidden" animate="visible">
  Content
</motion.div>
```

## 🗂️ Resume Data Structure

Your resume is available as structured data in `lib/resume-data.ts`:

```typescript
resumeData {
  name: string
  location: string
  contact: { phone, email, linkedin, github }
  education: Education[]
  technical_skills: { languages, technologies, ai_llm }
  experience: Experience[]
  projects: Project[]
  leadership_and_activities: Leadership[]
}
```

**Access it anywhere:**
```tsx
import { resumeData } from "@/lib/resume-data";

<h1>{resumeData.name}</h1>
<p>{resumeData.education[0].institution}</p>
```

## 🚀 Development Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev          # → http://localhost:3000 (or 3001)

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🌐 Pages & Routes

| Route | Description | Status |
|-------|-------------|--------|
| `/` | Home page (starter) | ✅ Ready for content |
| `/demo` | Component showcase | ✅ Complete |

## 📱 Responsive Breakpoints

```css
sm:  640px   /* Tablet portrait */
md:  768px   /* Tablet landscape */
lg:  1024px  /* Desktop */
xl:  1280px  /* Large desktop */
2xl: 1536px  /* Extra large */
```

## 🎯 Current State

### ✅ Completed
- [x] Next.js 14 setup with TypeScript
- [x] Tailwind CSS configured with dark theme
- [x] Framer Motion integration
- [x] Geist Sans font setup
- [x] Card component with glassmorphism
- [x] Button component (3 variants, 3 sizes)
- [x] Section & Container components
- [x] Animation utility library
- [x] Resume data structure
- [x] Component demo page
- [x] Full documentation

### 🚧 To Build
- [ ] Hero section with animated intro
- [ ] About section with bio
- [ ] Experience timeline
- [ ] Projects showcase grid
- [ ] Skills section with tags
- [ ] Contact section with form
- [ ] Navigation bar
- [ ] Footer
- [ ] SEO optimization
- [ ] Deploy to Vercel

## 🎨 Visual Examples

### Card Variants

```tsx
// Hoverable card (default)
<Card className="p-6">
  // Hover to see scale + glow effect
</Card>

// Static card
<Card hoverable={false}>
  // No hover effects
</Card>

// Custom gradient card
<Card className="bg-gradient-to-br from-purple-500/10">
  // Colored overlay
</Card>
```

### Button Styles

```tsx
// Primary: White background with glow
<Button variant="primary">Primary</Button>

// Secondary: Subtle white background
<Button variant="secondary">Secondary</Button>

// Ghost: Transparent
<Button variant="ghost">Ghost</Button>
```

## 📚 Key Technologies

| Package | Version | Purpose |
|---------|---------|---------|
| next | 14.2.18 | React framework |
| react | 18.3.1 | UI library |
| framer-motion | 11.11.17 | Animation library |
| tailwindcss | 3.4.1 | Styling |
| lucide-react | 0.460.0 | Icon library |
| geist | 1.3.1 | Font family |
| typescript | 5.x | Type safety |

## 🎓 Learning Resources

- **Next.js App Router**: https://nextjs.org/docs/app
- **Framer Motion**: https://www.framer.com/motion/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs

## 💡 Pro Tips

1. **Use the Demo Page**: Visit `/demo` to see all components in action
2. **Start Small**: Build one section at a time
3. **Reuse Components**: All components are designed to be composable
4. **Stay Consistent**: Use the design system for spacing, colors, and typography
5. **Test Responsively**: Check mobile, tablet, and desktop views
6. **Optimize Later**: Focus on content first, optimization second

## 🐛 Known Issues

- **Watchpack Errors**: Harmless macOS file limit warnings, don't affect functionality
- **Node Version**: Project requires Node 18+, but Next.js 14.2+ prefers Node 20+

## 📞 Support

If you encounter issues:
1. Check `GETTING_STARTED.md` for quick fixes
2. Review the demo page for examples
3. Check the Next.js docs for framework questions
4. Check the Tailwind docs for styling questions

---

**Built with ❤️ using Linear-inspired design principles**

Last Updated: December 24, 2025
Version: 1.0.0


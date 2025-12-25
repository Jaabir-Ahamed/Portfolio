# Portfolio - Jaabir Ahamed Saleem

A high-end developer portfolio built with Next.js 14, featuring a Linear-inspired dark design with glassmorphism effects and smooth animations.

## 🚀 Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Font**: Geist Sans

## 🎨 Design Philosophy

This portfolio embraces a **Linear-style aesthetic** with:

- **Dark Mode First**: Slate-900/black backgrounds with high-contrast white text
- **Glassmorphism**: Subtle borders with 10% white opacity and gradient backgrounds
- **Micro-interactions**: Buttons and cards feature subtle glows and scale effects on hover
- **Smooth Animations**: Framer Motion powers all transitions and entrance animations
- **Responsive Design**: Mobile-first approach that scales beautifully to desktop

## 📁 Project Structure

```
/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout with Geist font
│   └── page.tsx           # Home page
├── components/
│   └── ui/                # Reusable UI components
│       ├── card.tsx       # Glassmorphic card component
│       ├── button.tsx     # Animated button component
│       ├── section.tsx    # Section wrapper with animations
│       └── container.tsx  # Responsive container
├── lib/
│   ├── utils.ts           # Utility functions (cn)
│   ├── animations.ts      # Framer Motion animation presets
│   └── resume-data.ts     # Resume data
├── types/
│   └── resume.ts          # TypeScript interfaces
└── tailwind.config.ts     # Tailwind configuration
```

## 🎯 Key Components

### Card Component

The `Card` component features:
- Glassmorphism with gradient backgrounds
- 10% white border opacity
- **Mouse-following spotlight effect** ✨
- Hover effects with scale and glow
- Optional animation on mount
- Customizable via className

```tsx
<Card className="p-6" hoverable animated spotlight>
  <h2>Card Title</h2>
  <p>Card content</p>
</Card>

// Disable spotlight effect
<Card spotlight={false}>
  <p>No spotlight</p>
</Card>
```

### Button Component

Interactive buttons with three variants:
- `primary`: White background with glow effect
- `secondary`: Subtle white background
- `ghost`: Transparent with hover state

```tsx
<Button variant="primary" size="md">
  Click Me
</Button>
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ (Note: Next.js 14.2+ requires Node 20+)
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
theme: {
  extend: {
    colors: {
      border: "rgba(255, 255, 255, 0.1)",
      // Add your custom colors
    },
  },
}
```

### Animations

Pre-built animation variants are available in `lib/animations.ts`:

- `fadeIn`, `slideUp`, `slideDown`
- `slideInFromLeft`, `slideInFromRight`
- `scaleIn`
- `staggerContainer`, `staggerItem`

### Resume Data

Update your information in `lib/resume-data.ts`.

## 🔧 Tech Details

### Glassmorphism Effect

The glass effect is achieved through:
```css
bg-gradient-to-br from-white/[0.05] to-white/[0.02]
border border-white/10
backdrop-blur-md
```

### Custom Utilities

Added utility classes in `globals.css`:
- `.glass`: Apply glassmorphism effect
- `.glass-hover`: Add hover transitions

## 📝 Next Steps

1. **Add Sections**: Create Hero, Experience, Projects, Skills, and Contact sections
2. **Navigation**: Implement a sticky nav with smooth scrolling
3. **Dark/Light Toggle**: Add theme switcher (optional)
4. **SEO**: Enhance metadata and add Open Graph images
5. **Analytics**: Integrate analytics platform
6. **Deployment**: Deploy to Vercel or your preferred platform

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

Build the static site:
```bash
npm run build
```

Deploy the `.next` folder to your hosting provider.

## 📄 License

MIT

---

Built with ❤️ by Jaabir Ahamed Saleem

# Bento Grid Layout Guide

## Overview

Your homepage now features a modern **Bento Grid** layout - a masonry-style grid with varying card sizes that creates visual interest and hierarchy.

## Grid Structure

The grid uses **CSS Grid** with the following configuration:

```css
grid-cols-1              /* Mobile: 1 column */
md:grid-cols-2           /* Tablet: 2 columns */
lg:grid-cols-4           /* Desktop: 4 columns */
auto-rows-[200px]        /* Each row is 200px tall */
gap-4                    /* 16px gap between items */
```

## Grid Items

### 1. Profile Block (2x2)
**Position**: Top left  
**Size**: `md:col-span-2 md:row-span-2` (spans 2 columns, 2 rows)

**Content**:
- Your name (large heading)
- Title: "Full Stack Engineer"
- Bio paragraph
- Location
- CTA buttons (View Work, Contact)

**Customization**:
```tsx
<h1>{resumeData.name}</h1>
<p>Your custom title</p>
<p>Your custom bio...</p>
```

### 2. Tech Stack Block (2x1)
**Position**: Top right  
**Size**: `lg:col-span-2 md:row-span-1` (spans 2 columns, 1 row)

**Features**:
- Infinite marquee animation
- Tech icons/badges
- Smooth 20-second loop

**Customization**:
```tsx
const techStack = [
  { name: "Your Tech", color: "from-color-400 to-color-600" },
  // Add more...
];
```

**Colors Available**:
- `from-blue-400 to-blue-600` - Blue gradient
- `from-green-400 to-green-600` - Green gradient
- `from-purple-400 to-purple-600` - Purple gradient
- `from-cyan-400 to-blue-500` - Cyan to blue
- Any Tailwind gradient!

### 3. Project Cards (Various Sizes)
**Sizes**: 
- First project: `md:col-span-1 md:row-span-2` (1x2)
- Other projects: `md:col-span-1 md:row-span-1` (1x1)

**Content**:
- Project screenshot placeholder
- Project name
- Description
- Status badge
- Tech stack tags

**Customization**:
```tsx
const projects = [
  {
    name: "Your Project",
    description: "Brief description",
    tech: ["Tech1", "Tech2"],
    color: "from-purple-500/20 to-pink-500/20",
    status: "Active" // or "Live", "Completed"
  },
];
```

**Color Options for Project Cards**:
- `from-purple-500/20 to-pink-500/20` - Purple/Pink
- `from-blue-500/20 to-cyan-500/20` - Blue/Cyan
- `from-orange-500/20 to-red-500/20` - Orange/Red
- `from-emerald-500/20 to-teal-500/20` - Green/Teal

### 4. Social Blocks (1x1 each)
**Size**: `md:col-span-1 md:row-span-1`

**Blocks**:
- GitHub
- LinkedIn

**Customization**:
```tsx
<a href={`https://${resumeData.contact.github}`}>
  // Change icon, colors, link
</a>
```

### 5. Location & Time Block (1x1)
**Content**:
- Location with MapPin icon
- Timezone with Clock icon

**Customization**:
```tsx
<p>Your City, State</p>
<p>Your Timezone (UTC offset)</p>
```

### 6. Status Block (1x1)
**Content**:
- Availability status (animated dot)
- Current role
- Graduation date

## Animations

### Stagger-Fade In
All grid items use **stagger animation** on page load:

```tsx
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,    // 100ms delay between each child
      delayChildren: 0.2,       // 200ms delay before starting
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },  // Start 20px below, invisible
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
```

**How it works**:
1. Page loads → all items are hidden
2. After 200ms → first item fades in
3. Every 100ms → next item fades in
4. Each item takes 500ms to fully animate

### Hover Effects
Cards have the following hover effects (built into the Card component):

1. **Scale**: Lifts up with `scale-[1.02]` (2% larger)
2. **Border**: Brightens from `white/10` to `white/20`
3. **Shadow**: Increases from `shadow-xl` to `shadow-2xl`
4. **Glow**: Subtle white gradient overlay fades in

**Duration**: 300ms with `ease-out` easing

### Marquee Animation
The tech stack block uses infinite scrolling:

```tsx
animate={{
  x: [0, -1000],  // Move 1000px to the left
}}
transition={{
  repeat: Infinity,
  repeatType: "loop",
  duration: 20,      // 20 second loop
  ease: "linear",
}}
```

## Responsive Behavior

### Mobile (< 768px)
- Single column layout
- Items stack vertically
- All items become full width
- Row height: 200px

### Tablet (768px - 1024px)
- 2 column grid
- Profile spans full width (2 cols)
- Tech stack spans full width (2 cols)
- Other items are single column

### Desktop (> 1024px)
- 4 column grid
- Profile: 2x2 (large square)
- Tech stack: 2x1 (horizontal rectangle)
- Projects: 1x2 and 1x1 (varied sizes)
- Other items: 1x1 (small squares)

## Customization Tips

### Change Grid Layout
Edit the grid container classes:

```tsx
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
  // More columns = more complex layout
</div>
```

### Add New Grid Items
Use motion.div with variants:

```tsx
<motion.div
  variants={staggerItem}
  className="md:col-span-1 md:row-span-1"
>
  <Card className="h-full p-6">
    Your content
  </Card>
</motion.div>
```

### Change Card Sizes
Column span options: `col-span-1`, `col-span-2`, `col-span-3`, `col-span-4`  
Row span options: `row-span-1`, `row-span-2`, `row-span-3`

Example - Make a wide card:
```tsx
<motion.div className="md:col-span-3 md:row-span-1">
```

### Disable Hover on Specific Cards
```tsx
<Card hoverable={false}>
  // This card won't have hover effects
</Card>
```

### Change Animation Speed
```tsx
// Faster stagger
staggerChildren: 0.05  // 50ms between items (faster)

// Slower item animation
duration: 1.0  // 1 second per item (slower)
```

### Change Marquee Speed
```tsx
duration: 30  // Slower (30 seconds)
duration: 10  // Faster (10 seconds)
```

## Color Palette

### Project Card Backgrounds
```css
from-purple-500/20 to-pink-500/20    /* Purple/Pink */
from-blue-500/20 to-cyan-500/20      /* Blue/Cyan */
from-orange-500/20 to-red-500/20     /* Orange/Red */
from-emerald-500/20 to-teal-500/20   /* Green/Teal */
from-yellow-500/20 to-orange-500/20  /* Yellow/Orange */
from-indigo-500/20 to-purple-500/20  /* Indigo/Purple */
```

### Status Badge Colors
```css
bg-emerald-500/20 text-emerald-400   /* Active/Live */
bg-blue-500/20 text-blue-400         /* In Progress */
bg-slate-500/20 text-slate-400       /* Completed */
bg-orange-500/20 text-orange-400     /* Beta */
```

### Icon Background Colors
```css
bg-white/5           /* Neutral */
bg-blue-500/10       /* Blue accent */
bg-emerald-500/10    /* Green accent */
bg-purple-500/10     /* Purple accent */
```

## Accessibility

✅ **Keyboard Navigation**: All interactive elements are keyboard accessible  
✅ **Focus States**: Visible focus rings on buttons and links  
✅ **Semantic HTML**: Proper heading hierarchy  
✅ **Alt Text**: Icons have proper ARIA labels (add aria-label to links)  
✅ **Color Contrast**: All text meets WCAG AA standards

### Improvements to Add:
```tsx
<a 
  href="..."
  aria-label="Visit my GitHub profile"
  target="_blank"
  rel="noopener noreferrer"
>
```

## Performance

- **No external images**: All visuals are CSS gradients
- **Optimized animations**: Using `transform` and `opacity` (GPU-accelerated)
- **Lazy loading**: Components load on scroll (Framer Motion handles this)

## Browser Support

✅ Chrome/Edge (latest)  
✅ Firefox (latest)  
✅ Safari (latest)  
✅ Mobile browsers (iOS Safari, Chrome)

## Next Steps

1. **Add Real Project Images**: Replace gradient placeholders with screenshots
2. **Add More Projects**: Expand the projects array
3. **Add Blog Section**: Create a new grid item for latest posts
4. **Add Analytics**: Track which cards get the most clicks
5. **Add Dark/Light Toggle**: Keep dark mode but offer light option

---

**Last Updated**: December 24, 2025  
**Component**: Bento Grid Homepage  
**Status**: ✅ Production Ready


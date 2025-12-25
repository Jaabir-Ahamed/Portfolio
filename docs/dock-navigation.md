# Dock Navigation Component

## Overview

A macOS-style floating dock navigation bar that appears at the bottom center of the screen. Features glassmorphism effects, smooth animations, and active state indicators.

## Design

### Visual Style
- **Position**: Fixed at bottom center (24px from bottom)
- **Shape**: Rounded rectangle (rounded-2xl)
- **Glassmorphism**: `backdrop-blur-md` + `bg-black/50`
- **Border**: `border-white/10` for subtle definition
- **Shadow**: `shadow-2xl shadow-black/50` for depth

### Layout
- Horizontal flex layout
- Icon-only buttons (48px × 48px)
- 8px gap between items
- Padding: 16px horizontal, 12px vertical

## Animation

### Entrance Animation
```tsx
initial={{ opacity: 0, y: 100 }}
animate={{ opacity: 1, y: 0 }}
transition={{
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1], // Custom easing curve
  delay: 0.3,
}}
```

**Behavior**:
- Starts 100px below final position
- Fades in from 0 to 100% opacity
- Smooth easing curve (cubic-bezier)
- 300ms delay before starting

### Active Indicator
Uses Framer Motion's `layoutId` for smooth transitions:
```tsx
<motion.div
  layoutId="activeIndicator"
  className="absolute inset-0 rounded-xl bg-white/10"
  transition={{
    type: "spring",
    stiffness: 500,
    damping: 30,
  }}
/>
```

**Behavior**:
- Smoothly animates between active items
- Spring physics for natural movement
- High stiffness for snappy response

### Hover Effects
- **Scale**: `hover:scale-110` (10% larger)
- **Background**: `hover:bg-white/10`
- **Icon Color**: `hover:text-zinc-100`
- **Tooltip**: Fades in on hover

## Navigation Items

### Default Items
1. **Home** (`/`)
   - Icon: `Home` (Lucide React)
   - Label: "Home"

2. **Projects** (`/projects`)
   - Icon: `FolderKanban` (Lucide React)
   - Label: "Projects"

3. **Contact** (`/contact`)
   - Icon: `Mail` (Lucide React)
   - Label: "Contact"

### Customization

To add/remove items, edit `components/navigation/dock.tsx`:

```tsx
const navItems = [
  {
    name: "Your Page",
    href: "/your-page",
    icon: YourIcon, // Import from lucide-react
  },
  // Add more items...
];
```

## States

### Default State
- Background: `bg-white/5`
- Icon Color: `text-zinc-400`
- Scale: `scale-100`

### Hover State
- Background: `bg-white/10`
- Icon Color: `text-zinc-100`
- Scale: `scale-110`
- Tooltip: Visible

### Active State
- Background: `bg-white/10`
- Icon Color: `text-zinc-100`
- Scale: `scale-110`
- Active Indicator: Visible

### Active State (Pressed)
- Scale: `scale-95` (via `active:`)

## Accessibility

✅ **Keyboard Navigation**: All links are keyboard accessible  
✅ **ARIA Labels**: Each link has `aria-label` with page name  
✅ **Focus States**: Visible focus rings (browser default)  
✅ **Semantic HTML**: Uses `<nav>` element  
✅ **Screen Readers**: Tooltips provide context

## Responsive Behavior

### Desktop
- Full dock visible
- All icons shown
- Tooltips on hover

### Mobile
- Dock remains visible
- Icons scale appropriately
- Touch-friendly (48px minimum)
- Tooltips may be less useful (consider hiding)

### Tablet
- Same as desktop
- Optimized for touch

## Implementation Details

### Component Location
`components/navigation/dock.tsx`

### Integration
Added to `app/layout.tsx`:
```tsx
<body>
  {children}
  <Dock />
</body>
```

### Dependencies
- `next/link` - Client-side navigation
- `next/navigation` - `usePathname` hook
- `framer-motion` - Animations
- `lucide-react` - Icons
- `@/lib/utils` - `cn()` utility

## Styling Breakdown

### Container
```css
backdrop-blur-md          /* Glassmorphism blur */
bg-black/50               /* Semi-transparent background */
border border-white/10    /* Subtle border */
rounded-2xl               /* Rounded corners */
shadow-2xl shadow-black/50 /* Deep shadow */
px-4 py-3                 /* Padding */
flex items-center gap-2   /* Layout */
```

### Navigation Items
```css
w-12 h-12                 /* 48px × 48px */
rounded-xl                /* Rounded corners */
bg-white/5                /* Default background */
hover:bg-white/10         /* Hover background */
hover:scale-110           /* Hover scale */
active:scale-95           /* Press scale */
transition-all duration-300 /* Smooth transitions */
```

### Active Indicator
```css
absolute inset-0          /* Full coverage */
rounded-xl                /* Match button shape */
bg-white/10               /* Subtle highlight */
```

### Tooltip
```css
absolute bottom-full       /* Above button */
mb-2                      /* Margin */
px-2 py-1                 /* Padding */
bg-black/80               /* Dark background */
backdrop-blur-sm          /* Blur effect */
border border-white/10    /* Border */
rounded-md                /* Rounded */
text-xs text-zinc-100     /* Small white text */
opacity-0                 /* Hidden by default */
group-hover:opacity-100   /* Visible on hover */
```

## Customization Options

### Change Dock Position
```tsx
// Move to top
className="fixed top-6 left-1/2 -translate-x-1/2"

// Move to left side
className="fixed left-6 top-1/2 -translate-y-1/2"
```

### Change Background Opacity
```tsx
bg-black/50  // Current (50% opacity)
bg-black/70  // More opaque
bg-black/30  // More transparent
```

### Change Blur Amount
```tsx
backdrop-blur-md  // Current
backdrop-blur-lg  // More blur
backdrop-blur-sm  // Less blur
```

### Change Icon Size
```tsx
w-5 h-5  // Current (20px)
w-6 h-6  // Larger (24px)
w-4 h-4  // Smaller (16px)
```

### Change Button Size
```tsx
w-12 h-12  // Current (48px)
w-14 h-14  // Larger (56px)
w-10 h-10  // Smaller (40px)
```

### Disable Tooltips
Remove the tooltip div or add `hidden` class:
```tsx
<div className="... hidden">
```

## Performance

✅ **Optimized Animations**: Uses `transform` and `opacity` (GPU-accelerated)  
✅ **Conditional Rendering**: Active indicator only renders when active  
✅ **Efficient Re-renders**: Only re-renders on route change  
✅ **No Layout Shifts**: Fixed positioning prevents layout shifts

## Browser Support

✅ Chrome/Edge (latest)  
✅ Firefox (latest)  
✅ Safari (latest)  
✅ Mobile browsers (iOS Safari, Chrome)

## Future Enhancements

Possible improvements:
- [ ] Add badge/notification indicators
- [ ] Add keyboard shortcuts (⌘+1, ⌘+2, etc.)
- [ ] Add drag-to-reorder functionality
- [ ] Add dock magnification effect (macOS style)
- [ ] Add sound effects on click (optional)
- [ ] Add haptic feedback on mobile

## Troubleshooting

### Dock Not Visible
- Check z-index (should be `z-50`)
- Verify backdrop-blur is supported
- Check if content is covering it

### Active State Not Working
- Ensure `usePathname()` is working
- Check route paths match exactly
- Verify Next.js routing is set up

### Animation Not Smooth
- Check Framer Motion is installed
- Verify GPU acceleration is enabled
- Reduce animation complexity if needed

### Tooltips Not Showing
- Check `group` class is on parent
- Verify `group-hover:` classes work
- Test on different browsers

---

**Created**: December 24, 2025  
**Component**: Dock Navigation  
**Status**: ✅ Production Ready


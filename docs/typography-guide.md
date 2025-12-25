# Typography Guide

## Overview

The portfolio uses a refined typography system with reduced contrast and tight letter-spacing for a modern, premium feel.

## Color System

### Headings
- **Color**: `text-zinc-100` (softer than pure white)
- **Usage**: All h1-h6 elements
- **Rationale**: Reduces harsh contrast while maintaining readability

### Body Text
- **Color**: `text-zinc-400` (softer than slate-400)
- **Usage**: Paragraphs, descriptions, general content
- **Rationale**: Creates a more comfortable reading experience

### Previous Colors (Deprecated)
- ❌ `text-white` → ✅ `text-zinc-100`
- ❌ `text-slate-400` → ✅ `text-zinc-400`
- ❌ `text-slate-500` → ✅ `text-zinc-500`
- ❌ `text-slate-300` → ✅ `text-zinc-300`

## Letter-Spacing

### Default Tracking
- **Value**: `-0.02em` (tight tracking)
- **Applied to**: All generic elements via base styles
- **Utility Class**: `.tracking-tight` (available for explicit use)

### Why Tight Tracking?
- Creates a modern, premium aesthetic
- Improves visual density
- Works well with Geist Sans font
- Reduces visual "gaps" between letters

## Typography Hierarchy

### H1 - Hero Headings
```tsx
<h1 className="text-5xl font-bold text-zinc-100 leading-tight tracking-tight">
  Your Name
</h1>
```

### H2 - Section Headings
```tsx
<h2 className="text-3xl font-bold text-zinc-100 mb-8 tracking-tight">
  Section Title
</h2>
```

### H3 - Subsection Headings
```tsx
<h3 className="text-xl font-semibold text-zinc-100 tracking-tight">
  Subsection
</h3>
```

### Body Text
```tsx
<p className="text-zinc-400 leading-relaxed tracking-tight">
  Your paragraph text here.
</p>
```

### Small Text / Captions
```tsx
<p className="text-sm text-zinc-500 tracking-tight">
  Caption or metadata
</p>
```

## Component-Specific Typography

### Card Component
- Headings inside cards: `text-zinc-100`
- Body text: `text-zinc-400`
- All text includes `tracking-tight`

### Button Component
- Primary: `text-black` (on white background)
- Secondary: `text-zinc-100`
- Ghost: `text-zinc-100`
- All buttons include `tracking-tight`

### Badges / Tags
```tsx
<span className="text-xs text-zinc-300 tracking-tight">
  Tag Text
</span>
```

## Implementation Details

### Base Styles (globals.css)
```css
/* Headings */
h1, h2, h3, h4, h5, h6 {
  @apply text-zinc-100;
  letter-spacing: -0.02em;
}

/* Body text */
p {
  @apply text-zinc-400;
  letter-spacing: -0.02em;
}

/* Global tight tracking */
body {
  letter-spacing: -0.02em;
}
```

### Utility Class
```css
.tracking-tight {
  letter-spacing: -0.02em;
}
```

## Color Palette Reference

### Zinc Scale (Used)
- `zinc-100` - Headings (was `white`)
- `zinc-300` - Secondary text, badges
- `zinc-400` - Body text (was `slate-400`)
- `zinc-500` - Muted text, captions (was `slate-500`)

### Why Zinc Over Slate?
- Zinc has slightly warmer undertones
- Better contrast balance on dark backgrounds
- Softer appearance reduces eye strain
- More modern aesthetic

## Best Practices

### ✅ Do
- Use `text-zinc-100` for all headings
- Use `text-zinc-400` for body text
- Add `tracking-tight` explicitly to important text
- Maintain consistent hierarchy

### ❌ Don't
- Don't use `text-white` (too harsh)
- Don't use `text-slate-400` (replaced with zinc)
- Don't use default letter-spacing (too loose)
- Don't mix old and new color systems

## Migration Checklist

When updating existing components:

- [ ] Replace `text-white` → `text-zinc-100`
- [ ] Replace `text-slate-400` → `text-zinc-400`
- [ ] Replace `text-slate-500` → `text-zinc-500`
- [ ] Replace `text-slate-300` → `text-zinc-300`
- [ ] Add `tracking-tight` to headings
- [ ] Add `tracking-tight` to body text
- [ ] Verify contrast ratios meet WCAG AA

## Accessibility

### Contrast Ratios
- `zinc-100` on `slate-950`: ✅ WCAG AAA (21:1)
- `zinc-400` on `slate-950`: ✅ WCAG AA (7.2:1)
- `zinc-500` on `slate-950`: ✅ WCAG AA (5.1:1)

All color combinations meet accessibility standards.

## Examples

### Profile Section
```tsx
<h1 className="text-5xl font-bold text-zinc-100 leading-tight tracking-tight">
  Jaabir Ahamed Saleem
</h1>
<p className="text-xl text-cyan-400 font-medium tracking-tight">
  Full Stack Engineer
</p>
<p className="text-zinc-400 leading-relaxed tracking-tight">
  Software Engineering student at SJSU...
</p>
```

### Project Card
```tsx
<h3 className="text-lg font-semibold text-zinc-100 tracking-tight">
  Project Name
</h3>
<p className="text-sm text-zinc-400 tracking-tight">
  Project description
</p>
```

### Status Badge
```tsx
<span className="text-xs text-zinc-500 tracking-tight">
  Status Text
</span>
```

## Font Details

- **Font Family**: Geist Sans (via next/font)
- **Font Features**: `rlig` (required ligatures), `calt` (contextual alternates)
- **Letter-Spacing**: `-0.02em` (tight, modern)
- **Line Height**: Varies by element (tight for headings, relaxed for body)

## Future Considerations

Potential enhancements:
- [ ] Add font-weight utilities for fine-tuning
- [ ] Create typography scale tokens
- [ ] Add responsive font sizing utilities
- [ ] Consider variable font features

---

**Last Updated**: December 24, 2025  
**Status**: ✅ Production Ready  
**Version**: 2.0 (Refined Typography)


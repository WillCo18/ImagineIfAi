---
name: ui-design
description: Standards and guidelines for creating premium, rich, and dynamic user interfaces.
---

# UI Design Skill: Premium & Dynamic Interfaces

This skill defines the standards for elevating the `Imagine-If.ai` interface from "MVP" to "Premium Product" status.

## 1. Core Aesthetic Principles
- **Visual Hierarchy**: Use size, weight, and color to clearly guide the eye. Primary actions should pop; secondary content should recede.
- **Whitespace**: Be generous with padding (`var(--spacing-3xl)`+). Cramped interfaces look cheap; spacious ones look premium.
- **Depth & Texture**: Move beyond flat design. Use subtle shadows (`box-shadow`), glassmorphism (`backdrop-filter: blur`), and gradients to add richness.
- **Typography**: `Inter` is the base, but use tight line heights for headlines (`1.1`) and relaxed for body (`1.6`).

## 2. Interaction Design (Micro-animations)
Static interfaces feel dead. Every interactive element must provide feedback:
- **Hover**: Buttons should lift (`transform: translateY(-2px)`), scale, or glow.
- **Active**: Elements should feel tactile (press down on click).
- **Focus**: Custom focus rings for accessibility + style (no default browser outline).
- **Transitions**: Smooth properties (color, transform, opacity) with `transition: all 0.2s cubic-bezier(...)`.

## 3. Color Strategy
- **Backgrounds**: Avoid pure `#FFFFFF` everywhere. Use off-whites (`#FDFCFF`, `#F9FAFB`) to create distinct zones.
- **Gradients**: Use subtle mesh gradients for backgrounds or text highlights to add vibrancy.
- **Systems**: Use CSS variables for everything to maintain consistency.

## 4. Implementation Checklist
When polishing a component:
1. [ ] Check **Padding/Margins**: Is there enough breathing room?
2. [ ] Check **Contrast**: Is the text readable? AA standard minimum.
3. [ ] Check **Interactions**: Do buttons/links react to hover/focus?
4. [ ] Check **Responsiveness**: Does it stack gracefully on mobile?
5. [ ] Check **Border Radius**: Consistent rounding (e.g., `8px` or `12px`) across all elements.

## 5. Specific Techniques
### Soft Shadows
```css
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
```

### Glassmorphism
```css
background: rgba(255, 255, 255, 0.7);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.3);
```

### Gradient Text
```css
background: linear-gradient(to right, var(--color-accent), #ff6b6b);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

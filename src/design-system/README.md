# Design System: Digital Workspace Ecosystem

**Platform**: Digital Workspace Ecosystem  
**Created**: 2025-10-27  
**Status**: Active & Maintained

---

## 📁 File Structure

```
src/design-system/
├── README.md              (This file)
├── tokens.css             (Colors, spacing, typography variables)
├── components.css         (Custom components ONLY - utility-first approach)
├── animations.css         (Keyframe animations)
└── accessibility.css      (WCAG 2.1 AA utilities)
```

---

## 🎨 Module Overview

### 1. `tokens.css` - Design Tokens

**Purpose**: CSS variables untuk konsistensi design

**Contains**:
- Color tokens (Primary, Secondary, Semantic, Government, Neutrals)
- Spacing scale (xs, sm, md, lg, xl, 2xl, 3xl, 4xl)
- Typography scale (xs → 6xl)
- Font weights & line heights
- Border radius scale
- Shadow system
- Transition timings
- Responsive adjustments

**Usage**:
```css
.my-component {
  background: var(--color-primary);
  padding: var(--space-lg);
  font-size: var(--text-xl);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
  transition: var(--transition-all);
}
```

---

### 2. `utilities.css` - Component Classes

**Purpose**: Reusable utility classes untuk konsistensi

**Contains**:
- Custom card variants (.card-highlight, .card-gov) - Tailwind tidak punya
- Custom badge variants (.badge-new, .badge-gov) - Tailwind tidak punya
- Custom gradients (.gradient-indigo, .gradient-gov) - custom theme
- **Prinsip**: Utility-first - gunakan Tailwind classes untuk yang sudah ada

**Usage**:
```html
<!-- Use Tailwind utility classes! -->
<div class="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md hover:border-indigo-300 transition-all">
  <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">NEW</div>
  <button class="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors">Click Me</button>
</div>

<!-- OR use custom classes ONLY for variants -->
<div class="bg-white rounded-xl border p-6 card-highlight">
  <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium badge-gov">Government</div>
</div>
```

---

### 3. `animations.css` - Animation Utilities

**Purpose**: Keyframe animations

**Contains**:
- fade-in
- fade-in-down
- scale-in
- slide-in-left
- slide-in-right
- pulse
- bounce

**Usage**:
```html
<div class="animate-fade-in">
  <div class="animate-scale-in">Content</div>
</div>
```

---

### 4. `accessibility.css` - Accessibility Utilities

**Purpose**: WCAG 2.1 AA compliance

**Contains**:
- Skip links (.skip-link)
- Focus rings (.focus-ring, .focus-ring-*)
- Screen reader utilities (.sr-only, .sr-only-focus)
- High contrast mode support
- Reduced motion support
- Keyboard navigation
- ARIA states
- Touch target sizes

**Usage**:
```html
<a href="#main" class="skip-link">Skip to content</a>
<button class="focus-ring">Accessible Button</button>
<div aria-busy="true">Loading...</div>
```

---

## 🎯 Design Principles

### 1. Keep It Simple
- Minimal CSS - hanya yang dibutuhkan
- No bloated utilities
- Easy to understand

### 2. Modular
- Pisahkan concerns (tokens, utilities, animations, accessibility)
- Easy to maintain
- Easy to extend

### 3. Consistent
- Naming conventions yang clear
- Reusable components
- Scalable design system

### 4. Accessible
- WCAG 2.1 AA compliant
- Keyboard navigation
- Screen reader support
- High contrast mode

---

## 🚀 Usage Guide

### Importing Design System

```css
/* In app.css */
@import './design-system/tokens.css';
@import './design-system/utilities.css';
@import './design-system/animations.css';
@import './design-system/accessibility.css';
```

### Using CSS Variables

```html
<div style="color: var(--color-primary); padding: var(--space-lg);">
  Content
</div>
```

### Using Utility Classes

```html
<div class="card card-highlight">
  <h3>Title</h3>
  <button class="btn btn-primary">Action</button>
</div>
```

### Combining with Tailwind

```html
<!-- Use both Tailwind AND utility classes -->
<div class="card p-8 bg-linear-to-br from-indigo-50">
  <span class="badge badge-new px-4 py-2">NEW</span>
</div>
```

---

## 📊 Token Reference

### Colors

```css
--color-primary           /* Indigo 600 - Main brand */
--color-gov-primary       /* Green 600 - Government */
--color-success           /* Green 600 - Success state */
--color-info              /* Blue 600 - Info state */
--color-warning           /* Amber 500 - Warning state */
--color-danger            /* Red 600 - Danger state */
```

### Spacing

```css
--space-xs                /* 8px */
--space-sm                /* 12px */
--space-md                /* 16px */
--space-lg                /* 24px */
--space-xl                /* 32px */
--space-2xl               /* 48px */
--space-3xl               /* 64px */
--space-4xl               /* 96px */
```

### Typography

```css
--text-xs                 /* 12px */
--text-sm                 /* 14px */
--text-base               /* 16px */
--text-lg                 /* 18px */
--text-xl                 /* 20px */
--text-2xl                /* 24px */
--text-3xl                /* 30px */
--text-4xl                /* 36px */
--text-5xl                /* 48px */
--text-6xl                /* 60px */
```

---

## 🔧 Maintenance

### When to Update

**Update `tokens.css`**:
- Menambah warna baru
- Mengubah spacing scale
- Update typography

**Update `utilities.css`**:
- Menambah component baru
- Update styling existing components

**Update `animations.css`**:
- Menambah animation baru
- Update timing

**Update `accessibility.css`**:
- Fix accessibility issues
- Update focus states
- Add new ARIA utilities

---

## 📝 Best Practices

1. **Consistency**: Gunakan tokens yang sudah ada sebelum membuat warna baru
2. **Modularity**: Pertahankan separation of concerns
3. **Documentation**: Update README saat menambah utilities baru
4. **Testing**: Test di berbagai browser dan device
5. **Accessibility**: Semua utilities harus accessible

---

**Last Updated**: 2025-10-27  
**Version**: 1.0.0  
**Maintainer**: Platform Team


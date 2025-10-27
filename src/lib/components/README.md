# Components Library

Koleksi reusable components untuk Digital Workspace Ecosystem.

## 📦 Components

### Header.svelte

Navigation header dengan support untuk glassmorphism effect.

#### Usage

```svelte
<script>
  import Header from '$lib/components/Header.svelte';
  
  const isLandingPage = true; // or false
</script>

<Header isGlassmorphism={isLandingPage} />
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isGlassmorphism` | `boolean` | `false` | Enable glassmorphism effect (fixed, backdrop-blur) |

#### Features

- ✅ Responsive mobile menu button
- ✅ Glassmorphism effect untuk landing page
- ✅ Standard header untuk halaman lain
- ✅ Type-safe dengan TypeScript
- ✅ Consistent styling dengan design system

#### Examples

##### Landing Page (with glassmorphism)

```svelte
<script>
  import Header from '$lib/components/Header.svelte';
</script>

<Header isGlassmorphism={true} />
```

##### Standard Page

```svelte
<script>
  import Header from '$lib/components/Header.svelte';
</script>

<Header isGlassmorphism={false} />
```

---

## 🎯 Design Philosophy

Components di library ini mengikuti prinsip:
- **Composability**: Bisa digabung dan customize
- **Type Safety**: Full TypeScript support
- **Reusability**: Dipakai di berbagai context
- **Consistency**: Mengikuti design system

## 📝 Adding New Components

When creating new components:

1. Place file in `src/lib/components/`
2. Add TypeScript interface for props
3. Add JSDoc comments
4. Update this README
5. Follow naming convention: PascalCase
6. Export from component file


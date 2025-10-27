# Digital Workspace Ecosystem

**Platform Manajemen Operasional Open Source untuk Organisasi Modern**

Digital Workspace Ecosystem adalah solusi manajemen HR dan operasional bisnis yang akuntable, bagian dari ekosistem open source Indonesia bersama dengan SLiMS (manajemen perpustakaan), OpenSID (manajemen desa), dan We Will Shine (edukasi).

---

## 🎯 What This Is

**Digital Workspace Ecosystem** - Platform manajemen operasional yang menghubungkan:

1. **SDM & HR** - Talent tracking, performance management, certification
2. **Operasional Bisnis** - CRM, project management, finance tracking
3. **Analitik & Transparansi** - Dashboard, reporting, audit trail

### Dua Model Deployment

**1. Open Source (Self-Hosted)**
- Core platform 100% open source (MIT License)
- Deploy sendiri di infrastruktur Anda
- Full control data - kedaulatan data penuh
- Customizable sesuai kebutuhan organisasi

**2. Proprietary Hub (Managed Service)**
- Marketplace terpusat yang menghubungkan SDM, vendors, dan klien
- Policy operations & advocacy tools
- Network effects - manfaat dari ekosistem besar
- Tetap memegang prinsip kedaulatan data

Keduanya dapat saling terintegrasi sesuai kebutuhan organisasi Anda.

## 🚀 Tech Stack

- **Framework:** [SvelteKit](https://kit.svelte.dev/) with [Svelte 5](https://svelte.dev/)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Database:** [Turso (libSQL/SQLite)](https://turso.tech/)
- **ORM:** [Drizzle](https://orm.drizzle.team/)
- **Authentication:** Custom Lucia implementation
- **Internationalization:** [Paraglide JS](https://inlang.com/paraglide) (en, id)
- **Testing:** [Vitest](https://vitest.dev/) & [Playwright](https://playwright.dev/)
- **Components:** [Storybook](https://storybook.js.org/)
- **Deployment:** [Cloudflare Pages](https://pages.cloudflare.com/)

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```sh
pnpm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL=your_turso_database_url
DATABASE_AUTH_TOKEN=your_turso_auth_token
```

### Database Setup

```sh
# Push schema to database
pnpm run db:push

# Generate migrations
pnpm run db:generate

# Run migrations
pnpm run db:migrate

# Open Drizzle Studio (visual database tool)
pnpm run db:studio
```

### Development

```sh
# Start development server
pnpm run dev

# Open browser automatically
pnpm run dev -- --open
```

## 🧪 Scripts

| Command              | Description                           |
| -------------------- | ------------------------------------- |
| `pnpm run dev`       | Start development server              |
| `pnpm run build`     | Build for production                  |
| `pnpm run preview`   | Preview production build              |
| `pnpm run check`     | Run type checking                     |
| `pnpm run lint`      | Run ESLint                            |
| `pnpm run format`    | Format code with Prettier             |
| `pnpm run test:unit` | Run unit tests with Vitest            |
| `pnpm run test:e2e`  | Run E2E tests with Playwright         |
| `pnpm run test`      | Run all tests                         |
| `pnpm run db:push`   | Push database schema                  |
| `pnpm run db:generate` | Generate migration files            |
| `pnpm run db:migrate` | Run database migrations              |
| `pnpm run db:studio` | Open Drizzle Studio                   |
| `pnpm run storybook` | Start Storybook for components       |
| `pnpm run build-storybook` | Build Storybook for production  |

## 📁 Project Structure

```
.
├── src/
│   ├── lib/           # Shared utilities and components
│   ├── routes/        # SvelteKit routes (pages)
│   └── stories/       # Storybook component stories
├── docs/              # Documentation
├── static/            # Static assets
├── e2e/               # End-to-end tests
├── drizzle.config.ts  # Drizzle ORM configuration
├── svelte.config.js   # SvelteKit configuration
└── vite.config.ts     # Vite configuration
```

## 🌐 Demo Routes

- `/demo/lucia` - Authentication demo
- `/demo/paraglide` - Internationalization demo

## 🚢 Deployment

This project is configured to deploy to [Cloudflare Pages](https://pages.cloudflare.com/).

```sh
pnpm run build
```

The build output will be in the `.svelte-kit` directory, ready for deployment.

## 📝 License

Private project for KonXC Space.

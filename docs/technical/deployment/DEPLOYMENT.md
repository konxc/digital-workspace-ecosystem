# Deployment Guide: Cloudflare Pages + Workers

**Platform**: Digital Workspace Ecosystem  
**Target**: Cloudflare Pages + Workers  
**Last Updated**: 2025-10-27

---

## 🚀 Why Cloudflare?

Cloudflare Pages adalah pilihan ideal untuk platform ini karena:

1. **✅ Edge Computing**: Deploy di edge network worldwide
2. **✅ Zero Config**: Automatic deploys dari GitHub
3. **✅ Fast**: Global CDN, instant response
4. **✅ Free Tier**: Generous free tier untuk open source
5. **✅ Workers Integration**: Serverless functions untuk dynamic features
6. **✅ Durable Objects**: Untuk future real-time features
7. **✅ R2 Storage**: Untuk future file storage needs

---

## 📋 Pre-Deployment Checklist

### ✅ Already Configured

- [x] `@sveltejs/adapter-cloudflare` installed
- [x] `svelte.config.js` configured dengan adapter
- [x] Markdown files bundled at build time (no filesystem I/O)
- [x] All static assets ready
- [x] No Node.js-specific APIs used

### ⚠️ Cloudflare-Specific Considerations

**No Filesystem Access:**
- ✅ Already fixed - using static imports
- ✅ All markdown bundled at build time
- ✅ No `fs.readFile()` at runtime

**No Node.js APIs:**
- ✅ Already using Web APIs
- ✅ No `fs`, `path` at runtime
- ✅ Compatible with Workers runtime

**Environment Variables:**
- Store in Cloudflare Dashboard
- Or use `wrangler.toml` (see below)

---

## 🛠️ Setup Steps

### 1. Install Wrangler CLI

```bash
npm install -g wrangler
# or
pnpm add -D wrangler
```

### 2. Login to Cloudflare

```bash
wrangler login
```

### 3. Configure Wrangler

Create `wrangler.toml`:

```toml
name = "crm-konxc-space"
compatibility_date = "2025-10-27"
pages_build_output_dir = ".svelte-kit/cloudflare"

[build]
command = "pnpm run build"

[site]
bucket = ".svelte-kit/cloudflare"
```

### 4. Configure Environment Variables

Create `.dev.vars` for local development:

```env
DATABASE_URL=your_turso_url
DATABASE_AUTH_TOKEN=your_token
```

**For Production**, set in Cloudflare Dashboard:
- Go to Pages project → Settings → Environment Variables
- Add: `DATABASE_URL`, `DATABASE_AUTH_TOKEN`

---

## 🚢 Deployment Methods

### Method 1: GitHub Integration (Recommended)

1. **Connect Repository:**
   - Go to Cloudflare Dashboard → Pages
   - Click "Create a project"
   - Connect GitHub repository

2. **Build Settings:**
   - Build command: `pnpm run build`
   - Build output directory: `.svelte-kit/cloudflare`
   - Root directory: `/` (default)

3. **Environment Variables:**
   - Set in Cloudflare Dashboard
   - Or use `wrangler secret`

4. **Deploy:**
   - Automatic deploy on push to `main` branch
   - Preview deploys for PRs

### Method 2: Wrangler CLI

```bash
# Deploy to production
pnpm run build
wrangler pages deploy .svelte-kit/cloudflare

# Deploy to preview
wrangler pages deploy .svelte-kit/cloudflare --branch=preview
```

---

## 🗄️ Database: Turso (LibSQL)

### Turso Compatibility

✅ **Compatible with Cloudflare Workers:**
- WebSocket-based connection
- HTTP API
- No Node.js specific APIs

### Connection String

```typescript
// src/lib/server/db/connect.ts
import { createClient } from '@libsql/client/web';

export const db = createClient({
  url: process.env.DATABASE_URL!,
  authToken: process.env.DATABASE_AUTH_TOKEN!
});
```

**Note**: Use `@libsql/client/web` not `@libsql/client` for Workers!

### Update Package.json

```bash
pnpm add @libsql/client
```

### Local Development

```env
DATABASE_URL=libsql://your-database.turso.io
DATABASE_AUTH_TOKEN=your-token
```

---

## 🔧 Cloudflare-Specific Configurations

### vite.config.ts Update

```typescript
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import cfPages from '@cloudflare/pages-shared';

export default defineConfig({
	plugins: [sveltekit(), cfPages()],
	ssr: {
		noExternal: ['@libsql/client']
	}
});
```

---

## 📊 Build Output

After `pnpm run build`:

```
.svelte-kit/
└── cloudflare/
    ├── _app/
    │   ├── route-manifest.json
    │   ├── layout.js
    │   └── ...
    ├── index.html
    ├── index.js  (worker)
    └── ...
```

**Deploy this `.svelte-kit/cloudflare` folder to Cloudflare Pages.**

---

## 🌍 Custom Domain

1. **Add Domain in Cloudflare:**
   - Pages project → Custom domains
   - Add `crm.konxc.space`
   - DNS will auto-configure

2. **SSL/TLS:**
   - Automatic HTTPS
   - Automatic certificate renewal

---

## 🎯 Performance Optimization

### Already Optimized ✅

- **Static imports**: All markdown bundled at build time
- **Zero runtime I/O**: No filesystem access
- **Edge deployment**: Global CDN
- **Code splitting**: Automatic by SvelteKit
- **Image optimization**: Via Cloudflare

### Additional Optimizations (Future)

- Use `<link rel="prefetch">` for docs navigation
- Add service worker for offline docs
- Use Cloudflare Images for image assets
- Use R2 for large file storage

---

## 🔄 CI/CD Pipeline

GitHub Actions (optional):

```yaml
# .github/workflows/deploy.yml
name: Deploy to Cloudflare

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v3
      - uses: actions/setup-node@v4
      
      - run: pnpm install
      - run: pnpm run build
      
      - uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
```

---

## 🐛 Troubleshooting

### Error: "Module not found"

**Problem**: Node.js modules not available in Workers  
**Solution**: Use Web APIs, not Node.js APIs

### Error: "Filesystem not accessible"

**Problem**: Trying to read files at runtime  
**Solution**: Use static imports, bundle at build time

### Error: "Database connection failed"

**Problem**: Using wrong libsql client  
**Solution**: Use `@libsql/client/web` not standard client

---

## 📈 Monitoring

### Cloudflare Analytics

- Page views
- Response times
- Error rates
- Geographic distribution

### Custom Analytics (Future)

- User behavior tracking
- Documentation usage
- Popular pages

---

## 🔐 Security

### Environment Variables

Store securely in Cloudflare Dashboard:
- ✅ Never commit to Git
- ✅ Use `wrangler secret` for CLI
- ✅ Use Dashboard for Pages deployments

### Headers (Optional)

Add in `wrangler.toml`:

```toml
[[pages.headers]]
for = "/*"
[headers.values]
X-Frame-Options = "DENY"
X-Content-Type-Options = "nosniff"
X-XSS-Protection = "1; mode=block"
```

---

## 📝 Summary

✅ **Ready for Cloudflare:**
- No filesystem I/O
- All assets bundled at build time
- Compatible with Workers runtime
- Edge-optimized

✅ **Benefits:**
- Global CDN
- Fast deployment
- Zero server maintenance
- Generous free tier

✅ **Next Steps:**
1. Connect GitHub repo to Cloudflare Pages
2. Set environment variables
3. Deploy!

---

**Last Updated**: 2025-10-27  
**Status**: Ready for Cloudflare Deployment ✅


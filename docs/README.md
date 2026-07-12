# KoneksiHub CRM - Documentation

**Modular, Open Source CRM untuk Digital Workspace Ecosystem - Complete Documentation.**

Last Updated: 2025-10-27  
Total Files: 28 documentation files

---

## 📁 Directory Structure
### Coming Soon Guideline
- **Coming Soon**: Development workflow
- **Coming Soon**: API documentation
- **Coming Soon**: Module development guide

### Structure Overview
```
docs/
├── README.md                          # Overview & index
├── INDEX.md                          # Complete documentation index
├── CHANGELOG.md                      # Project changelog
├── DOCUMENTATION_COMPLETE.md         # Documentation completeness report
│
├── strategy/                         # Strategic Planning
│   ├── vision/                      # Vision & Philosophy
│   │   ├── VISION_AND_MANIFESTO.md
│   │   ├── TIMELINE_AND_COMMITMENT.md
│   │   ├── BRAINSTORMING_SUMMARY.md
│   │   ├── BRAINSTORMING_SYNCHRONIZATION.md
│   │   └── BRAINSTORMING_DIGITAL_WORKSPACE_OS.md  ← NEW: AI-powered OS vision
│   ├── business/                    # Business Strategy
│   │   ├── BUSINESS_STRATEGY.md
│   │   ├── COMPETITIVE_ANALYSIS.md
│   │   └── SUSTAINABILITY_AND_REVENUE.md
│   └── planning/                   # Platform Planning
│       ├── NAMING_AND_POSITIONING.md
│       └── PLATFORM_DESCRIPTION.md
│
├── technical/                        # Technical Documentation
│   ├── architecture/                # System Architecture
│   │   ├── DATABASE_ARCHITECTURE.md
│   │   ├── GOVERNANCE_MODEL.md
│   │   ├── SECURITY_AND_TRANSPARENCY.md
│   │   ├── TECH_CHOICES_RATIONALE.md
│   │   └── TECH_STACK_PHILOSOPHY.md
│   ├── deployment/                  # Deployment Strategy
│   │   ├── DEPLOYMENT.md
│   │   ├── DEPLOYMENT_MODELS.md
│   │   └── SELF_HOSTING_STRATEGY.md
│   └── testing/                     # Future Features
│       └── FUTURE_FEATURES.md
│
├── teams/                           # Team & HR Documentation
│   └── hr/                         # Human Resources
│       ├── SKILL_REQUIREMENTS.md
│       └── QUICK_TEAM_GUIDE.md
│
├── feature/                        # Feature-Specific Documentation
│   └── docs/                       # Documentation Features
│       └── toc/                    # Table of Contents Feature
│           ├── TOC_FEATURE_SUMMARY.md
│           ├── DEVELOPMENT_TOC_FEATURE.md
│           ├── REVIEW_TOC_FEATURE.md
│           └── PROMPT_EVALUATION_TOC.md
│
└── legacy/                        # Legacy Documentation
    ├── DASHBOARD_CONCEPT.md
    ├── KONEKSI_CRM_CONCEPT.md
    ├── PROGRESS.md
    └── ROADMAP.md
```

---

## 🎯 About This Platform
**Digital Workspace Ecosystem** (Workspace Ekosistem Digital) - Placeholder name sedang dibuka untuk diskusi komunitas.

### **Strategy & Vision**
- Vision & Philosophy: `strategy/vision/`
- Business Strategy: `strategy/business/`
- Platform Planning: `strategy/planning/`

Platform operasional berdaulat yang mengintegrasikan manajemen bisnis, tracking SDM, dan 
advokasi kebijakan dalam satu ecosystem untuk mendukung 3 Pilar Kedaulatan Digital Indonesia.

### **Technical Documentation**
- Architecture: `technical/architecture/`
- Deployment: `technical/deployment/`
- Testing & Features: `technical/testing/`

1. **Modular** - Build hanya yang kamu butuhkan
2. **Open Source** - Full control, bisa customize sesuai kebutuhan
3. **Modern Stack** - SvelteKit 5, TypeScript, Tailwind CSS 4
4. **Community-Driven** - Dibangun dan dikembangkan bersama

### **Team Documentation**
- HR & Skills: `teams/hr/`

### **Feature Development**
- TOC Feature: `feature/components/toc/`

---

## 🚀 Quick Start

### For Users

```bash
# Clone repository
git clone https://github.com/koneksi-org/koneksihub.git
cd koneksihub

# Install dependencies
pnpm install

# Setup environment
cp .env.example .env
# Edit .env dengan configuration kamu

# Run database migrations
pnpm run db:push

# Start development server
pnpm run dev

# Open browser
# http://localhost:5173
```

### For Developers

Lihat [Development Guidelines](#) untuk panduan lengkap kontribusi.

---

### **Legacy Files**
- Historical: `legacy/`

## 📦 Core Features
### Phase 1 (MVP) - In Progress
- ✅ Project setup dengan SvelteKit 5 + TypeScript
- ✅ Authentication system (Lucia v3)
- ✅ Database schema (Drizzle ORM + Turso)
- ✅ i18n support (Paraglide)
- 🔄 Contacts management module
- 🔄 Sales pipeline module
- 🔄 Dashboard & analytics

### Phase 2 (Q1 2026)

- 📋 Customer support module
- 📋 Marketing automation
- 📋 Advanced analytics
- 📋 Mobile app

### Phase 3 (Q2-Q3 2026)

- 📋 Module marketplace
- 📋 Plugin system
- 📋 API integrations
- 📋 Enterprise features
---

## 📋 Categories Explained
### **strategy/** - Strategic Planning Documents
Documents terkait visi, strategi bisnis, dan perencanaan platform.

### **technical/** - Technical Implementation
Documents terkait arsitektur, deployment, dan technical decisions.

### **teams/** - Human Resources
Documents terkait rekrutmen, skill requirements, dan team building.

### **feature/** - Feature Development
Documents spesifik untuk development feature (contoh: TOC).

### **legacy/** - Historical Documents
Documents lama yang masih relevan sebagai reference.
---

## 🏗️ Tech Stack

- **Framework**: SvelteKit 5 (Svelte 5 Runes)
- **Language**: TypeScript
- **Database**: Turso (LibSQL) via Drizzle ORM
- **Authentication**: Lucia v3
- **Styling**: Tailwind CSS 4
- **Testing**: Vitest, Playwright
- **i18n**: Paraglide (inlang)
- **Deployment**: Cloudflare Pages
---

## 🔍 Finding Documents - By Topic
**Vision & Philosophy**
```
docs/strategy/vision/VISION_AND_MANIFESTO.md
docs/strategy/vision/TIMELINE_AND_COMMITMENT.md
docs/strategy/vision/BRAINSTORMING_SUMMARY.md
docs/strategy/vision/BRAINSTORMING_DIGITAL_WORKSPACE_OS.md
```

**Business Strategy**
```
docs/strategy/business/BUSINESS_STRATEGY.md
docs/strategy/business/COMPETITIVE_ANALYSIS.md
docs/strategy/business/SUSTAINABILITY_AND_REVENUE.md
```

**Technical Architecture**
```
docs/technical/architecture/DATABASE_ARCHITECTURE.md
docs/technical/architecture/GOVERNANCE_MODEL.md
docs/technical/architecture/SECURITY_AND_TRANSPARENCY.md
```

**Deployment**
```
docs/technical/deployment/DEPLOYMENT.md
docs/technical/deployment/DEPLOYMENT_MODELS.md
docs/technical/deployment/SELF_HOSTING_STRATEGY.md
```

**Team Building**
```
docs/teams/hr/SKILL_REQUIREMENTS.md
docs/teams/hr/QUICK_TEAM_GUIDE.md
```

---

## 📚 Complete Index

Untuk melihat daftar lengkap semua dokumentasi, lihat: [`INDEX.md`](./INDEX.md)

---

**"Building software that matters, together."**

**Last Updated**: 2025-10-27

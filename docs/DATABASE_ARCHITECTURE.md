# Database Architecture & Design

**Created**: 2025-10-27  
**Status**: 🏗️ Architecture Design - In Progress  
**Tech Stack**: Drizzle ORM + Turso (libSQL)

---

## 📋 Table of Contents

1. [Core Tables](#core-tables)
2. [User Management](#user-management)
3. [Client Management](#client-management)
4. [Project Management](#project-management)
5. [Financial Management](#financial-management)
6. [Activity Tracking](#activity-tracking)
7. [Vendor & Marketplace](#vendor--marketplace)
8. [Reporting & Analytics](#reporting--analytics)

---

## 🗄️ Core Tables

### Base Structure

```typescript
// src/lib/server/db/schema.ts

import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
```

### Current State

```typescript
// EXISTING: Basic auth tables
export const user = sqliteTable('user', {
  id: text('id').primaryKey(),
  age: integer('age'),
  username: text('username').notNull().unique(),
  passwordHash: text('password_hash').notNull()
});

export const session = sqliteTable('session', {
  id: text('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => user.id),
  expiresAt: integer('expires_at', { mode: 'timestamp' }).notNull()
});
```

---

## 👥 User Management

### Extended User Schema

```typescript
// Enhanced user table
export const user = sqliteTable('user', {
  id: text('id').primaryKey(),
  username: text('username').notNull().unique(),
  email: text('email').notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  fullName: text('full_name'),
  phone: text('phone'),
  
  // Role & permissions
  role: text('role').notNull(), // 'admin', 'staff', 'client', 'developer'
  tier: text('tier'), // 'free', 'verified', 'professional', 'enterprise'
  teamId: text('team_id').references(() => team.id),
  
  // Verification & trust
  emailVerified: integer('email_verified', { mode: 'boolean' }).default(false),
  phoneVerified: integer('phone_verified', { mode: 'boolean' }).default(false),
  kycVerified: integer('kyc_verified', { mode: 'boolean' }).default(false),
  npwpVerified: integer('npwp_verified', { mode: 'boolean' }).default(false),
  trustScore: integer('trust_score').default(100),
  reputation: integer('reputation').default(0),
  warningCount: integer('warning_count').default(0),
  isBanned: integer('is_banned', { mode: 'boolean' }).default(false),
  
  // Activity
  lastActiveAt: integer('last_active_at', { mode: 'timestamp' }),
  isActive: integer('is_active', { mode: 'boolean' }).default(true),
  createdAt: integer('created_at', { mode: 'timestamp' }),
  updatedAt: integer('updated_at', { mode: 'timestamp' })
});

// Multi-tenant teams
export const team = sqliteTable('team', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  type: text('type').notNull(), // 'agency', 'developer', 'client'
  subscriptionTier: text('subscription_tier'), // 'free', 'basic', 'pro', 'enterprise'
  settings: text('settings', { mode: 'json' }),
  createdAt: integer('created_at', { mode: 'timestamp' })
});
```

---

## 🏢 Client Management

```typescript
export const client = sqliteTable('client', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  type: text('type'), // 'umkm', 'sekolah', 'instansi', 'masjid', 'desa', 'enterprise'
  industry: text('industry'),
  email: text('email'),
  phone: text('phone'),
  address: text('address'),
  website: text('website'),
  notes: text('notes'),
  
  // Status tracking
  status: text('status').notNull(), // 'lead', 'active', 'inactive', 'churned'
  source: text('source'), // How did we get this client?
  
  // Relations
  ownerId: text('owner_id').references(() => user.id),
  teamId: text('team_id').references(() => team.id),
  
  // Financial
  totalValue: integer('total_value').default(0),
  lifetimeValue: integer('lifetime_value').default(0),
  
  createdAt: integer('created_at', { mode: 'timestamp' }),
  updatedAt: integer('updated_at', { mode: 'timestamp' })
});

export const contact = sqliteTable('contact', {
  id: text('id').primaryKey(),
  clientId: text('client_id').references(() => client.id).notNull(),
  
  firstName: text('first_name').notNull(),
  lastName: text('last_name'),
  email: text('email'),
  phone: text('phone'),
  position: text('position'),
  notes: text('notes'),
  
  isPrimary: integer('is_primary', { mode: 'boolean' }).default(false),
  
  createdAt: integer('created_at', { mode: 'timestamp' })
});
```

---

## 📦 Project Management

```typescript
export const project = sqliteTable('project', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description'),
  type: text('type').notNull(), // 'website', 'application', 'design', 'maintenance', 'saas_subscription'
  
  // Relations
  clientId: text('client_id').references(() => client.id).notNull(),
  
  // Timeline
  startDate: integer('start_date', { mode: 'timestamp' }),
  endDate: integer('end_date', { mode: 'timestamp' }),
  expectedDeliveryDate: integer('expected_delivery_date', { mode: 'timestamp' }),
  
  // Financial
  budget: integer('budget'),
  paidAmount: integer('paid_amount').default(0),
  status: text('status').notNull(), // 'quotation', 'active', 'in_progress', 'completed', 'cancelled'
  
  // Package details (untuk website 1jt)
  packageTier: text('package_tier'), // 'starter', 'professional', 'enterprise'
  revisionsAllowed: integer('revisions_allowed').default(0),
  revisionsUsed: integer('revisions_used').default(0),
  
  // Relations
  ownerId: text('owner_id').references(() => user.id),
  teamId: text('team_id').references(() => team.id),
  
  createdAt: integer('created_at', { mode: 'timestamp' }),
  updatedAt: integer('updated_at', { mode: 'timestamp' })
});

export const task = sqliteTable('task', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description'),
  type: text('type').notNull(), // 'call', 'email', 'meeting', 'development', 'revision', 'support'
  
  // Relations
  projectId: text('project_id').references(() => project.id),
  clientId: text('client_id').references(() => client.id),
  
  // Task details
  dueDate: integer('due_date', { mode: 'timestamp' }),
  priority: text('priority'), // 'low', 'medium', 'high', 'urgent'
  status: text('status').notNull(), // 'todo', 'in_progress', 'done', 'cancelled'
  
  assignedToId: text('assigned_to_id').references(() => user.id),
  createdById: text('created_by_id').references(() => user.id),
  teamId: text('team_id').references(() => team.id),
  
  createdAt: integer('created_at', { mode: 'timestamp' }),
  updatedAt: integer('updated_at', { mode: 'timestamp' }),
  completedAt: integer('completed_at', { mode: 'timestamp' })
});
```

---

## 💰 Financial Management

```typescript
export const invoice = sqliteTable('invoice', {
  id: text('id').primaryKey(),
  number: text('number').notNull().unique(),
  
  // Relations
  projectId: text('project_id').references(() => project.id),
  clientId: text('client_id').references(() => client.id).notNull(),
  
  // Financial
  subtotal: integer('subtotal').notNull(),
  tax: integer('tax').default(0),
  discount: integer('discount').default(0),
  total: integer('total').notNull(),
  
  // Status
  status: text('status').notNull(), // 'draft', 'sent', 'paid', 'overdue', 'cancelled'
  dueDate: integer('due_date', { mode: 'timestamp' }),
  paidDate: integer('paid_date', { mode: 'timestamp' }),
  
  createdAt: integer('created_at', { mode: 'timestamp' })
});

export const transaction = sqliteTable('transaction', {
  id: text('id').primaryKey(),
  invoiceId: text('invoice_id').references(() => invoice.id),
  
  amount: integer('amount').notNull(),
  type: text('type').notNull(), // 'income', 'expense', 'refund'
  method: text('method'), // 'bank_transfer', 'credit_card', 'payment_gateway'
  reference: text('reference'),
  notes: text('notes'),
  
  createdAt: integer('created_at', { mode: 'timestamp' })
});

export const product = sqliteTable('product', {
  id: text('id').primaryKey(),
  name: text('name').notNull(), // 'Sistem Akademik', 'TiktokBoost', dll
  type: text('type').notNull(), // 'saas', 'marketplace', 'service'
  description: text('description'),
  basePrice: integer('base_price'),
  currency: text('currency').default('IDR'),
  isActive: integer('is_active', { mode: 'boolean' }).default(true),
  createdAt: integer('created_at', { mode: 'timestamp' })
});

export const subscription = sqliteTable('subscription', {
  id: text('id').primaryKey(),
  clientId: text('client_id').references(() => client.id).notNull(),
  productId: text('product_id').references(() => product.id).notNull(),
  
  tier: text('tier'), // 'monthly', 'yearly', 'lifetime'
  price: integer('price'),
  status: text('status').notNull(), // 'active', 'expired', 'cancelled'
  
  startDate: integer('start_date', { mode: 'timestamp' }),
  endDate: integer('end_date', { mode: 'timestamp' }),
  renewalDate: integer('renewal_date', { mode: 'timestamp' }),
  
  createdAt: integer('created_at', { mode: 'timestamp' }),
  updatedAt: integer('updated_at', { mode: 'timestamp' })
});
```

---

## 📊 Activity Tracking

```typescript
export const activity = sqliteTable('activity', {
  id: text('id').primaryKey(),
  type: text('type').notNull(), // 'call', 'email', 'meeting', 'note', 'task', 'milestone'
  subject: text('subject'),
  description: text('description'),
  
  // Relations
  clientId: text('client_id').references(() => client.id),
  projectId: text('project_id').references(() => project.id),
  taskId: text('task_id').references(() => task.id),
  
  userId: text('user_id').references(() => user.id).notNull(),
  teamId: text('team_id').references(() => team.id),
  
  createdAt: integer('created_at', { mode: 'timestamp' })
});

export const auditLog = sqliteTable('audit_log', {
  id: text('id').primaryKey(),
  userId: text('user_id').references(() => user.id),
  
  action: text('action').notNull(), // 'create', 'update', 'delete', 'export', 'import'
  entityType: text('entity_type'), // 'client', 'project', 'invoice', 'user'
  entityId: text('entity_id'),
  
  beforeData: text('before_data', { mode: 'json' }),
  afterData: text('after_data', { mode: 'json' }),
  
  ipAddress: text('ip_address'),
  userAgent: text('user_agent'),
  
  createdAt: integer('created_at', { mode: 'timestamp' })
});
```

---

## 🏪 Vendor & Marketplace (Future)

```typescript
export const vendor = sqliteTable('vendor', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  type: text('type'), // 'developer', 'agency', 'designer', 'consultant'
  
  email: text('email'),
  phone: text('phone'),
  website: text('website'),
  portfolio: text('portfolio', { mode: 'json' }), // Array of past projects
  
  // Verification
  npwp: text('npwp'),
  siup: text('siup'),
  skills: text('skills', { mode: 'json' }), // Array of skills
  
  // Reputation
  rating: integer('rating'), // 0-5
  completedProjects: integer('completed_projects').default(0),
  onTimeRate: integer('on_time_rate').default(100),
  
  // Financial
  avgHourlyRate: integer('avg_hourly_rate'),
  
  isVerified: integer('is_verified', { mode: 'boolean' }).default(false),
  createdAt: integer('created_at', { mode: 'timestamp' })
});

export const pricePoint = sqliteTable('price_point', {
  id: text('id').primaryKey(),
  
  projectType: text('project_type').notNull(),
  complexity: text('complexity'), // 'simple', 'medium', 'complex', 'enterprise'
  features: text('features', { mode: 'json' }),
  
  reportedPrice: integer('reported_price').notNull(),
  actualPrice: integer('actual_price'),
  currency: text('currency').default('IDR'),
  
  reportedBy: text('reported_by').references(() => user.id).notNull(),
  verifiedBy: text('verified_by').references(() => user.id),
  verificationStatus: text('verification_status'), // 'pending', 'verified', 'flagged'
  
  upvotes: integer('upvotes').default(0),
  downvotes: integer('downvotes').default(0),
  suspiciousFlags: integer('suspicious_flags').default(0),
  
  createdAt: integer('created_at', { mode: 'timestamp' })
});
```

---

## 📈 Database Features

### Multi-Tenant Architecture

```typescript
// Auto-scoped queries by teamId
export async function withTeamAccess(event: RequestEvent) {
  const user = await getUserFromSession(event);
  const teamId = event.params.teamId || user.teamId;
  
  // Check user has access to this team
  const hasAccess = await checkTeamAccess(user.id, teamId);
  if (!hasAccess) throw error(403);
  
  return { user, teamId };
}

// All queries automatically scoped
export async function getClients(teamId: string) {
  return await db
    .select()
    .from(client)
    .where(eq(client.teamId, teamId)); // Auto-scoped
}
```

### Audit Trail

```typescript
// Log semua perubahan
export async function audit(action: string, entityType: string, entityId: string, data: any) {
  await db.insert(auditLog).values({
    id: generateId(),
    action,
    entityType,
    entityId,
    afterData: data,
    userId: currentUserId,
    createdAt: new Date()
  });
}
```

---

## 🎯 Implementation Priority

### Phase 1: Core (MVP)
- ✅ user, session (existing)
- [ ] client, contact
- [ ] project
- [ ] invoice, transaction

### Phase 2: Extended
- [ ] task, activity
- [ ] product, subscription
- [ ] auditLog

### Phase 3: Advanced
- [ ] vendor, pricePoint
- [ ] team (multi-tenant)
- [ ] Extended user properties

---

**Last Updated**: 2025-10-27


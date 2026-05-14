# New Paddy Electronics — Website

A production-quality website for New Paddy Electronics, Dublin's trusted electronics repair specialists since 2008.

## Tech Stack

- **Next.js 15** (App Router, Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Turso** (SQLite edge database)
- **Drizzle ORM** (schema + queries)
- **Lucide React** (icons)

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Copy `.env.local.example` to `.env.local` and fill in your Turso credentials:

```bash
cp .env.local.example .env.local
```

Get your Turso credentials at [https://app.turso.tech](https://app.turso.tech):
- Create a new database
- Copy the Database URL and Auth Token

```env
TURSO_DATABASE_URL=libsql://your-db-name.turso.io
TURSO_AUTH_TOKEN=your-auth-token
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Set up the database

```bash
# Generate migrations from schema
npm run db:generate

# Push schema to Turso
npm run db:push
```

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout (Navbar + Footer)
│   ├── page.tsx                # Home page
│   ├── about/page.tsx          # About page
│   ├── services/               # Services pages
│   │   ├── page.tsx            # All services overview
│   │   ├── iphone-repairs/     # iPhone repairs
│   │   ├── ipad-repairs/       # iPad repairs
│   │   ├── smartphones-tablets/# Smartphones & Tablets
│   │   ├── laptops-macbooks/   # Laptops & MacBooks
│   │   ├── android/            # Android repairs
│   │   └── game-consoles/      # Game console repairs
│   ├── contact/page.tsx        # Contact form
│   ├── terms/page.tsx          # Terms & Conditions
│   ├── not-found.tsx           # 404 page
│   └── api/contact/route.ts    # Contact form API
├── components/
│   ├── layout/                 # Navbar, Footer
│   ├── home/                   # Home page sections
│   ├── about/                  # About page
│   ├── services/               # All service page components
│   └── contact/                # Contact form
├── lib/
│   ├── db/
│   │   ├── index.ts            # Drizzle + Turso client
│   │   └── schema.ts           # Database schema
│   └── utils.ts                # Utilities, constants
├── drizzle/migrations/         # Auto-generated migrations
├── drizzle.config.ts           # Drizzle Kit config
├── tailwind.config.ts          # Tailwind config
└── next.config.ts              # Next.js config
```

## Database Schema

### `contacts`
Stores contact form submissions with device model selections and message.

### `repair_bookings`
Stores repair booking requests with status tracking (pending → confirmed → in_progress → completed).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, Services, Why Choose Us, Branches |
| `/about` | About — Story, values, stats |
| `/services` | All services overview |
| `/services/iphone-repairs` | iPhone 7–15 repair booking |
| `/services/ipad-repairs` | iPad screen, battery, charging, motherboard |
| `/services/smartphones-tablets` | All phones & tablets |
| `/services/laptops-macbooks` | Laptops, MacBooks, PC building |
| `/services/android` | Samsung S/A/Note + other Android |
| `/services/game-consoles` | PS4, PS5, Xbox, Nintendo Switch |
| `/contact` | Full contact form with branch selector |
| `/terms` | Terms & Conditions |

## Deployment

Deploy on [Vercel](https://vercel.com) — zero config for Next.js:

```bash
npm run build
```

Add your environment variables in the Vercel dashboard under Project Settings → Environment Variables.

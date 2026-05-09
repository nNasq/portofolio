# 🌿 Panduan Lengkap: Portfolio Next.js — dari Nol hingga Vercel

> Aesthetic · Elegant · Gen-Z Vibes ✦

---

## Daftar Isi
1. [Prerequisites](#1-prerequisites)
2. [Buat Proyek Next.js](#2-buat-proyek-nextjs)
3. [Install Dependencies](#3-install-dependencies)
4. [Struktur Folder](#4-struktur-folder)
5. [Setup Tailwind CSS](#5-setup-tailwind-css)
6. [Konfigurasi Global CSS](#6-konfigurasi-global-css)
7. [Komponen-Komponen](#7-komponen-komponen)
8. [Jalankan di Lokal](#8-jalankan-di-lokal)
9. [Deploy ke Vercel](#9-deploy-ke-vercel)
10. [Kustomisasi](#10-kustomisasi)

---

## 1. Prerequisites

Pastikan sudah terinstall:

- **Node.js** v18+ → [nodejs.org](https://nodejs.org)
- **npm** atau **pnpm** (pnpm lebih cepat)
- **Git** → [git-scm.com](https://git-scm.com)
- Akun **GitHub** → [github.com](https://github.com)
- Akun **Vercel** → [vercel.com](https://vercel.com)

Cek versi Node.js:
```bash
node --version   # harus v18+
npm --version
```

---

## 2. Buat Proyek Next.js

### Option A — Pakai CLI (Recommended)
```bash
npx create-next-app@latest portfolio --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

Jawab pertanyaannya:
```
✔ Would you like to use TypeScript? → Yes
✔ Would you like to use ESLint? → Yes
✔ Would you like to use Tailwind CSS? → Yes
✔ Would you like to use `src/` directory? → Yes
✔ Would you like to use App Router? → Yes
✔ Would you like to customize the default import alias? → Yes (@/*)
```

### Option B — Manual (dari folder portfolio yang sudah disiapkan)
```bash
# Clone atau copy folder portfolio
cd portfolio
npm install
```

---

## 3. Install Dependencies

```bash
# Masuk ke folder proyek
cd portfolio

# Install animasi library
npm install framer-motion

# Install icon library
npm install lucide-react
```

### Apa gunanya masing-masing?
| Package | Fungsi |
|---|---|
| `next` | Framework utama React |
| `framer-motion` | Animasi smooth & interaktif |
| `lucide-react` | Icon library yang bersih |
| `tailwindcss` | Utility-first CSS framework |

---

## 4. Struktur Folder

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css      ← Global styles + animasi
│   │   ├── layout.tsx       ← Root layout (metadata)
│   │   └── page.tsx         ← Halaman utama
│   └── components/
│       ├── Cursor.tsx       ← Custom cursor (aesthetic!)
│       ├── Navbar.tsx       ← Navigasi dengan scroll effect
│       ├── Hero.tsx         ← Halaman hero + parallax
│       ├── Marquee.tsx      ← Ticker text animasi
│       ├── Work.tsx         ← Section projects
│       ├── About.tsx        ← Section about me
│       ├── Stack.tsx        ← Tech stack
│       ├── Contact.tsx      ← Section kontak
│       └── Footer.tsx       ← Footer
├── public/                  ← Foto, assets, favicon
├── tailwind.config.js       ← Konfigurasi Tailwind
├── next.config.js           ← Konfigurasi Next.js
├── tsconfig.json            ← TypeScript config
└── package.json
```

---

## 5. Setup Tailwind CSS

Edit `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['var(--font-display)', 'serif'],
        'body': ['var(--font-body)', 'sans-serif'],
        'mono': ['var(--font-mono)', 'monospace'],
      },
      colors: {
        'ink': '#0a0a0a',
        'smoke': '#f5f5f0',
        'mist': '#e8e8e3',
        'ash': '#a0a09a',
        'accent': '#c8b8a2',
        'warm': '#f0ebe3',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
```

---

## 6. Konfigurasi Global CSS

Di `src/app/globals.css`, tambahkan import Google Fonts dan style global:

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400&family=DM+Mono:wght@300;400&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --font-display: 'Cormorant Garamond', serif;
  --font-body: 'DM Sans', sans-serif;
  --font-mono: 'DM Mono', monospace;
}

/* Custom cursor */
html { cursor: none; }

.cursor {
  position: fixed;
  width: 8px;
  height: 8px;
  background: #0a0a0a;
  border-radius: 50%;
  pointer-events: none;
  z-index: 99999;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
}

/* Reveal animation */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

## 7. Komponen-Komponen

### 7a. Root Layout (`src/app/layout.tsx`)

```tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nama Kamu — Creative Developer',
  description: 'Deskripsi singkat portfolimu',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
```

### 7b. Main Page (`src/app/page.tsx`)

```tsx
import Cursor from '@/components/Cursor'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
// ... import komponen lainnya

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        {/* ... komponen lainnya */}
      </main>
    </>
  )
}
```

### 7c. Custom Cursor (`src/components/Cursor.tsx`)

Komponen ini membuat cursor dot kecil + lingkaran follower yang smooth mengikuti mouse. Tampilannya sangat aesthetic dan khas website premium!

```tsx
'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mouseX = 0, mouseY = 0
    let followerX = 0, followerY = 0
    const cursor = cursorRef.current
    const follower = followerRef.current

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX; mouseY = e.clientY
      if (cursor) {
        cursor.style.left = mouseX + 'px'
        cursor.style.top = mouseY + 'px'
      }
    }

    const animate = () => {
      followerX += (mouseX - followerX) * 0.12
      followerY += (mouseY - followerY) * 0.12
      if (follower) {
        follower.style.left = followerX + 'px'
        follower.style.top = followerY + 'px'
      }
      requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMove)
    animate()
    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  )
}
```

### 7d. Scroll Reveal (Intersection Observer)

Di setiap section, pakai pattern ini untuk animasi scroll:

```tsx
'use client'
import { useEffect, useRef } from 'react'

export default function Section() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 120)
          })
        }
      }),
      { threshold: 0.1 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={sectionRef}>
      <h2 className="reveal">Judul</h2>
      <p className="reveal">Isi konten...</p>
    </section>
  )
}
```

---

## 8. Jalankan di Lokal

```bash
# Jalankan development server
npm run dev

# Buka browser di:
# http://localhost:3000
```

### Build & Preview (simulasi production)
```bash
npm run build
npm run start
```

Kalau tidak ada error, berarti siap deploy! ✅

---

## 9. Deploy ke Vercel

### Step 1 — Push ke GitHub

```bash
# Inisialisasi git (kalau belum)
git init
git add .
git commit -m "feat: initial portfolio"

# Buat repo baru di github.com, lalu:
git remote add origin https://github.com/USERNAME/portfolio.git
git push -u origin main
```

### Step 2 — Connect ke Vercel

1. Buka [vercel.com](https://vercel.com) dan login
2. Klik **"Add New Project"**
3. Pilih **Import Git Repository** → pilih repo `portfolio`
4. Vercel akan otomatis detect Next.js — tidak perlu setting apapun
5. Klik **Deploy** 🚀

### Step 3 — Tunggu Deploy Selesai

Biasanya hanya 1-2 menit. Setelah selesai kamu dapat URL seperti:
```
https://portfolio-username.vercel.app
```

### Step 4 — Custom Domain (Opsional)

1. Di Vercel dashboard → Project → **Domains**
2. Tambahkan domain kamu (mis: `rayaputri.com`)
3. Update DNS di registrar sesuai instruksi Vercel
4. HTTPS otomatis di-setup oleh Vercel ✨

### Auto-Deploy (Bonus!)

Setiap kali kamu push ke GitHub, Vercel **otomatis rebuild & deploy**. Tinggal:
```bash
git add .
git commit -m "update: tambah project baru"
git push
```

→ Website langsung update dalam hitungan menit!

---

## 10. Kustomisasi

### Ganti Identitas

| File | Yang Diubah |
|---|---|
| `src/app/layout.tsx` | Title & deskripsi metadata |
| `src/components/Hero.tsx` | Nama, tagline, lokasi |
| `src/components/About.tsx` | Bio, statistik, foto |
| `src/components/Work.tsx` | Projects array |
| `src/components/Stack.tsx` | Tech stack kamu |
| `src/components/Contact.tsx` | Email & social links |

### Ganti Warna Utama

Edit `tailwind.config.js`:
```js
colors: {
  'accent': '#c8b8a2',  // ← ganti warna aksen di sini
}
```

### Tambah Foto Profil

1. Taruh foto di `public/photo.jpg`
2. Di `About.tsx`, ganti placeholder dengan:
```tsx
import Image from 'next/image'
// ...
<Image
  src="/photo.jpg"
  alt="Foto Profil"
  fill
  className="object-cover"
/>
```

### Tambah Project Baru

Di `src/components/Work.tsx`, edit array `projects`:
```ts
{
  number: '04',
  title: 'Nama Project',
  category: 'Kategori · Sub-kategori',
  description: 'Deskripsi singkat projectmu.',
  tags: ['React', 'Figma'],
  color: 'bg-[#e4ede8]',
  year: '2025',
}
```

---

## Tips & Tricks

**🎨 Pilih Font Sendiri**  
Kunjungi [fonts.google.com](https://fonts.google.com) dan ganti import di `globals.css`.

**⚡ Optimasi Gambar**  
Selalu pakai komponen `<Image>` dari Next.js — otomatis dioptimasi dan lazy-loaded.

**📱 Test Mobile**  
```bash
# Akses dari HP via IP lokal
# Cek IP kamu: ipconfig / ifconfig
# Buka: http://192.168.x.x:3000
```

**🔍 SEO**  
Tambahkan OG Image di `layout.tsx`:
```tsx
export const metadata = {
  openGraph: {
    images: ['/og-image.png'],
  },
}
```

**💾 Environment Variables**  
Kalau pakai API keys, buat `.env.local`:
```
NEXT_PUBLIC_EMAIL=kamu@email.com
```
Dan tambahkan di Vercel → Settings → Environment Variables.

---

## Struktur File Lengkap yang Sudah Disiapkan

```
✅ src/app/globals.css        — Global styles, font, cursor, animasi
✅ src/app/layout.tsx         — Root layout dengan metadata
✅ src/app/page.tsx           — Halaman utama (assembling komponen)
✅ src/components/Cursor.tsx  — Custom cursor aesthetic
✅ src/components/Navbar.tsx  — Nav responsif + scroll effect
✅ src/components/Hero.tsx    — Hero section dengan parallax
✅ src/components/Marquee.tsx — Scrolling ticker text
✅ src/components/Work.tsx    — Project cards dengan hover animation
✅ src/components/About.tsx   — About section dengan dark theme
✅ src/components/Stack.tsx   — Tech stack grid
✅ src/components/Contact.tsx — Contact section besar
✅ src/components/Footer.tsx  — Footer minimalis
✅ tailwind.config.js         — Custom colors, fonts, animations
✅ next.config.js             — Next.js config
✅ tsconfig.json              — TypeScript config
✅ package.json               — Dependencies
```

---

*Dibuat dengan ♥ · Next.js 14 · Tailwind CSS · Vercel*

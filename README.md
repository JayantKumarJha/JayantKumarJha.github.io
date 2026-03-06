# Jayant Kumar Jha — Personal Portfolio

A personal portfolio website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone or download this folder
cd jayant-portfolio

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.js          # Root layout with NavBar + Footer
│   ├── globals.css        # Global styles + Tailwind imports
│   ├── page.js            # Home page
│   ├── about/
│   │   └── page.js        # About page (bio, skills, experience, education)
│   ├── projects/
│   │   └── page.js        # Projects page
│   └── articles/
│       └── page.js        # Articles page
├── components/
│   ├── NavBar.js           # Navigation with dark mode toggle
│   ├── Footer.js           # Footer
│   ├── AnimatedText.js     # Word-by-word animated heading
│   ├── HireMe.js           # Circular rotating "Hire Me" button
│   ├── Skills.js           # Radial skills map
│   ├── Experience.js       # Scrollable timeline (Experience + Education)
│   └── TransitionEffect.js # Page transition wipe animation
```

## ✏️ Customization

### Update Personal Info
- **Name / Bio**: `src/app/about/page.js`
- **Stats**: `src/app/page.js` and `src/app/about/page.js`
- **Projects**: `src/app/projects/page.js`
- **Articles**: `src/app/articles/page.js`
- **Social Links**: `src/components/NavBar.js`

### Update Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: '#B63E96',      // Light mode accent
  primaryDark: '#58E6D9',  // Dark mode accent
}
```

### Add a Profile Photo
1. Place your image in `public/` as `profile.png`
2. Replace the placeholder `div` in `src/app/page.js` and `src/app/about/page.js` with:
```jsx
import Image from 'next/image'
<Image src="/profile.png" alt="Jayant Kumar Jha" width={400} height={400} className="w-full h-auto rounded-2xl" priority />
```

## 🌐 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 🛠 Tech Stack

- [Next.js 14](https://nextjs.org/) — React framework with App Router
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling
- [Framer Motion](https://www.framer.com/motion/) — Animations & transitions
- [Google Fonts](https://fonts.google.com/) — Montserrat font

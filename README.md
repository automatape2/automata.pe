# Professional Portfolio - Astro + TailwindCSS

Modern, high-performance portfolio website built with cutting-edge web technologies. Features PWA capabilities, multi-language support, and enterprise-level optimizations achieving 90+ PageSpeed scores.

## ✨ Key Features

- 🚀 **Progressive Web App** - Offline-first architecture with service worker caching
- 🌍 **Internationalization** - Multi-language support (i18n ready)
- ⚡ **Performance Optimized** - 90+ PageSpeed Insights score with advanced optimization techniques
- 📱 **Fully Responsive** - Mobile-first design approach
- 🖼️ **Image Optimization** - WebP conversion, lazy loading, and responsive images
- 🔄 **Smooth Transitions** - View transitions for seamless navigation
- 📊 **Analytics Integration** - Custom visit tracking with REST API
- 🔒 **Security Headers** - Production-ready security configuration

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) - Static Site Generator
- **Styling**: [TailwindCSS](https://tailwindcss.com) - Utility-first CSS framework
- **Language**: TypeScript - Type-safe development
- **Image Processing**: Sharp - Automated WebP conversion and optimization
- **CI/CD**: GitHub Actions - Automated deployment pipeline
- **API Integration**: RESTful API for analytics and data fetching

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── assets/          # Optimized images and media
│   ├── components/      # Reusable UI components
│   ├── config/          # Centralized configuration
│   ├── i18n/            # Internationalization files
│   ├── layouts/         # Page layouts
│   ├── pages/           # File-based routing
│   └── styles/          # Global styles
├── public/
│   ├── sw.js            # Service Worker
│   ├── manifest.json    # PWA Manifest
│   └── _headers         # Security headers
└── .github/workflows/   # CI/CD automation
```

## 🚀 Getting Started

```bash
# Clone repository
git clone <repository-url>
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## ⚙️ Configuration

All personal information is centralized in configuration files for easy customization:

- Contact information
- Social media links
- Branding and metadata
- API endpoints

## 📊 Performance Achievements

- **93% image size reduction** - Optimized asset delivery
- **Aggressive caching strategy** - Long-term browser caching
- **Offline-first PWA** - Works without internet connection
- **Critical CSS inlining** - Eliminated render-blocking resources
- **Lazy loading** - Deferred loading for below-the-fold content
- **WebP format** - Modern image compression

## 🚢 Deployment

Automated deployment pipeline using GitHub Actions:

```bash
# Deploy to production
git push origin main
```

Supports SSH deployment, static hosting, and CDN integration.

## 🧞 Available Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Install dependencies                             |
| `npm run dev`             | Start dev server at `localhost:4321`             |
| `npm run build`           | Build production site to `./dist/`               |
| `npm run preview`         | Preview production build locally                 |
| `npm run astro ...`       | Run Astro CLI commands                           |

## 🎯 Technical Highlights

- **Component-based architecture** - Modular and maintainable codebase
- **Type-safe development** - TypeScript for fewer runtime errors
- **SEO optimized** - Meta tags, semantic HTML, and sitemap generation
- **API integration** - RESTful endpoints for dynamic content
- **Modern build tooling** - Vite-powered development experience
- **Production-ready** - Security headers and performance best practices

## 📝 Features Showcase

- Hero section with call-to-action
- Featured projects gallery
- GitHub repositories integration
- Social media content feed
- Contact section with multiple channels
- Smooth page transitions
- Dark/light mode support

## 🌐 Live Demo

Visit the live site to see the portfolio in action.

---

**Built with modern web standards and best practices**

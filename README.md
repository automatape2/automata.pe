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

El proyecto usa GitHub Actions para deployment automático via SSH.

```bash
# Push a main despliega automáticamente
git push origin main
```

Ver `DEPLOY.md` para guía completa de configuración.

## 🧞 Comandos

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                         |
| `npm run dev`             | Inicia servidor local en `localhost:4321`        |
| `npm run build`           | Build de producción en `./dist/`                 |
| `npm run preview`         | Preview del build antes de desplegar             |
| `npm run astro ...`       | Ejecuta comandos CLI de Astro                    |

## 📝 Secciones del Portfolio

1. **Hero** - Presentación con CTA y links sociales
2. **Proyectos Destacados** - Cards con imágenes, tech stack y links a demo
3. **Repositorios GitHub** - Integración con GitHub API
4. **LinkedIn Posts** - Últimas publicaciones profesionales
5. **Contacto** - Email y redes sociales

## 🌐 Demo en Vivo

**URL**: [https://automata.pe](https://automata.pe)

## 📄 Licencia

© 2024 Jose Anicama. Todos los derechos reservados.

## 📧 Contacto

- **Email**: j.j.anicamatanta@gmail.com
- **LinkedIn**: [jjanicamatanta](https://www.linkedin.com/in/jjanicamatanta/)
- **GitHub**: [automatape2](https://github.com/automatape2)

---

**Built with** ❤️ **using Astro + TailwindCSS**

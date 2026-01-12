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

## 📂 Estructura del Proyecto

```
portfolio/
├── src/
│   ├── assets/          # Imágenes optimizadas
│   ├── components/      # Componentes reutilizables
│   ├── config/          # Configuración personal centralizada
│   ├── i18n/            # Traducciones ES/EN
│   ├── layouts/         # Layouts de página
│   ├── pages/           # Rutas del sitio
│   └── styles/          # Estilos globales
├── public/
│   ├── sw.js            # Service Worker
│   ├── manifest.json    # PWA Manifest
│   └── _headers         # Headers de seguridad
└── .github/workflows/   # CI/CD automatizado
```

## 🚀 Instalación y Uso

```bash
# Clonar repositorio
git clone https://github.com/automatape2/automata.pe.git
cd automata.pe

# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## ⚙️ Configuración Personal

Toda la información personal está centralizada en `src/config/personal.ts`. Solo actualiza este archivo para cambiar:

- Nombre de marca
- Email de contacto
- Links de redes sociales (GitHub, LinkedIn, Twitter)
- Usernames

Ver `CONFIGURACION.md` para más detalles.

## 📊 Optimizaciones de Rendimiento

- **Imágenes**: Reducción del 93% en tamaño (1.74 MB → 120 KB)
- **Cache Strategy**: Caché agresiva con `max-age=31536000` para assets
- **Service Worker**: Offline-first con estrategia cache-first
- **Critical CSS**: Inlined para eliminar render-blocking
- **Lazy Loading**: Carga diferida de imágenes below-the-fold
- **WebP Conversion**: Conversión automática para mejor compresión

Ver `PERFORMANCE_SUMMARY.md` para métricas detalladas.

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

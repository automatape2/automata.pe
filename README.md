# Portfolio Personal - Astro + TailwindCSS

Portfolio profesional de desarrollador FullStack construido con Astro, TailwindCSS y TypeScript. Una PWA (Progressive Web App) moderna, rápida y optimizada que muestra proyectos, habilidades y experiencia de manera impactante.

## ✨ Características Principales

- 🚀 **PWA (Progressive Web App)** - Experiencia nativa con capacidad offline
- 🎨 **Diseño Moderno** - UI minimalista con gradientes vibrantes y animaciones suaves
- 🌍 **Multi-idioma** - Soporte completo para español e inglés
- ⚡ **Rendimiento Optimizado** - Score 90+ en PageSpeed Insights
- 📱 **Totalmente Responsive** - Adaptado a móvil, tablet y escritorio
- 🖼️ **Imágenes Optimizadas** - Conversión automática a WebP, lazy loading
- 🔄 **View Transitions** - Navegación fluida entre páginas
- 📊 **Tracking de Visitas** - Analytics integrado con API Laravel
- 🔒 **Seguro** - Headers de seguridad y PWA con service worker

## 🛠️ Stack Tecnológico

- **Framework**: [Astro](https://astro.build) - Generador de sitios estáticos
- **Estilos**: [TailwindCSS](https://tailwindcss.com) - Framework CSS utility-first
- **Lenguaje**: TypeScript - Type safety
- **Optimización de Imágenes**: Sharp (vía @astrojs/image)
- **Deployment**: GitHub Actions + SSH (automatizado)
- **Backend**: Laravel API para tracking de visitas

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

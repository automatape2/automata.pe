import { personalInfo } from "../config/personal";

// Import optimized project images
import aiBotImage from "../assets/projects/ai-bot.png";
import saasImage from "../assets/projects/saas-platform.png";
import fintechImage from "../assets/projects/fintech-api.png";

export const translations = {
    es: {
        nav: {
            about: "Sobre mí",
            projects: "Proyectos",
            git: "Repositorios",
            linkedin: "LinkedIn",
            contact: "Contacto"
        },
        hero: {
            greeting: "CONSTRUCTOR DE APPS PARA STARTUPS",
            title: "Transformo Ideas en ",
            titleHighlight: "Aplicaciones Escalables",
            titleEnd: " con Automatización IA.",
            description: "Desarrollador FullStack especializado en crear soluciones automatizadas para startups. De la idea al MVP en tiempo récord.",
            cta1: "Ver Proyectos",
            cta2: "Contactar",
            socialLinks: {
                github: personalInfo.socialLinks.github,
                linkedin: personalInfo.socialLinks.linkedin
            }
        },
        projects: {
            sectionTitle: "Proyectos Destacados",
            items: [
                {
                    slug: "automata-pe",
                    title: "Portfolio Personal",
                    description: "Portfolio de Jose Anicama, construido con Astro, TailwindCSS y TypeScript.",
                    tech: ["Astro", "TailwindCSS", "TypeScript"],
                    image: aiBotImage,
                    fullDescription: "Mi portfolio personal, una PWA construida con Astro, TailwindCSS y TypeScript. Muestra mis proyectos, habilidades y experiencia de una manera moderna y accesible.",
                    features: [
                        "PWA (Progressive Web App) para una experiencia nativa.",
                        "Diseño responsive y moderno con TailwindCSS.",
                        "Componentes interactivos con Astro.",
                        "Integración con GitHub para mostrar repositorios.",
                        "Soporte multi-idioma (inglés y español)."
                    ],
                    challenges: "Aprender a usar Astro y sus características, como la hidratación parcial y la generación de sitios estáticos. Integrar la API de GitHub para mostrar los repositorios de forma dinámica.",
                    results: "Un portfolio moderno, rápido y accesible que muestra mis habilidades y proyectos. Una excelente herramienta para mostrar mi trabajo a posibles empleadores y clientes."
                },
                {
                    slug: "netflics2",
                    title: "Clon de Netflix",
                    description: "Una aplicación web construida con PHP, HTML y Vue para transmitir y administrar contenido multimedia.",
                    tech: ["PHP", "HTML", "Vue"],
                    image: saasImage,
                    fullDescription: "Una aplicación web construida con PHP, HTML y Vue para transmitir y administrar contenido multimedia. Permite a los usuarios ver películas y series, y a los administradores gestionar el contenido.",
                    features: [
                        "Streaming de video.",
                        "Gestión de contenido multimedia.",
                        "Autenticación de usuarios.",
                        "Panel de administración para gestionar películas y series."
                    ],
                    challenges: "Implementar un sistema de streaming de video eficiente y escalable. Diseñar una base de datos para almacenar y gestionar el contenido multimedia.",
                    results: "Una aplicación web funcional para transmitir y administrar contenido multimedia. Una excelente manera de aprender sobre streaming de video y gestión de contenido."
                },
                {
                    slug: "shortener",
                    title: "Acortador de URL",
                    description: "Un acortador de URL simple y eficiente construido con PHP para una gestión de enlaces rápida y sencilla.",
                    tech: ["PHP", "Docker", "Laravel"],
                    image: fintechImage,
                    fullDescription: "Un acortador de URL simple y eficiente construido con PHP para una gestión de enlaces rápida y sencilla. Permite a los usuarios acortar URLs largas y realizar un seguimiento de los clics.",
                    features: [
                        "Acortamiento de URL.",
                        "Seguimiento de clics.",
                        "API para acortar URLs mediante programación.",
                        "Contenedorizado con Docker."
                    ],
                    challenges: "Generar URLs cortas únicas y evitar colisiones. Implementar un sistema de seguimiento de clics eficiente.",
                    results: "Un acortador de URL funcional y eficiente. Una herramienta útil para compartir enlaces en redes sociales y otras plataformas."
                }
            ]
        },
        gitRepositories: {
            sectionTitle: "Repositorios Open Source",
            subtitle: "Contribuciones a la comunidad y proyectos personales",
            viewProfile: "Ver GitHub",
            items: [
                {
                    name: "automata.pe",
                    description: "Portfolio de Jose Anicama, construido con Astro, TailwindCSS y TypeScript.",
                    language: "Astro",
                    stars: 0,
                    forks: 0,
                    url: "https://github.com/automatape2/automata.pe"
                },
                {
                    name: "inven2",
                    description: "Offline backup of the original inven2 website downloaded with wget",
                    language: "HTML",
                    stars: 0,
                    forks: 0,
                    url: "https://github.com/automatape2/inven2"
                },
                {
                    name: "netflics2",
                    description: "A web application built with PHP, HTML, and Vue for streaming and managing multimedia content",
                    language: "PHP",
                    stars: 1,
                    forks: 0,
                    url: "https://github.com/automatape2/netflics2"
                },
                {
                    name: "shortener",
                    description: "A simple and efficient URL shortener built with PHP for quick and easy link management.",
                    language: "PHP",
                    stars: 1,
                    forks: 0,
                    url: "https://github.com/automatape2/shortener"
                }
            ]
        },
        linkedInPosts: {
            sectionTitle: "Últimas Publicaciones en LinkedIn",
            subtitle: "Comparto conocimientos, experiencias y tendencias en desarrollo de software",
            viewProfile: "Ver Perfil Completo",
            items: [
                {
                    date: "Hace 2 días",
                    content: "🚀 Acabo de completar la migración de nuestra arquitectura monolítica a microservicios. El resultado: 60% de mejora en tiempo de respuesta y escalabilidad infinita. Las lecciones aprendidas fueron invaluables. #Microservicios #Arquitectura #DevOps",
                    likes: 234,
                    comments: 18,
                    link: "https://www.linkedin.com/in/jjanicamatanta/"
                },
                {
                    date: "Hace 5 días",
                    content: "💡 La IA está transformando cómo desarrollamos software. Implementé GPT-4 en nuestro sistema de procesamiento de documentos y redujimos 200 horas de trabajo manual al mes. El futuro es ahora. #InteligenciaArtificial #Automatización #Innovation",
                    likes: 456,
                    comments: 32,
                    link: "https://www.linkedin.com/in/jjanicamatanta/"
                },
                {
                    date: "1 week ago",
                    content: "🔒 Seguridad en APIs: Implementé autenticación JWT con refresh tokens y rate limiting en nuestra API fintech. Cero brechas desde el lanzamiento. La seguridad no es opcional, es fundamental. #CyberSecurity #API #BestPractices",
                    likes: 189,
                    comments: 15,
                    link: "https://www.linkedin.com/in/jjanicamatanta/"
                },
                {
                    date: "Hace 2 semanas",
                    content: "⚡ Docker + Kubernetes = Magia. Nuestra nueva infraestructura maneja 10,000 usuarios concurrentes sin despeinarse. Si aún no estás usando contenedores, estás perdiendo tiempo y dinero. #Docker #Kubernetes #CloudNative",
                    likes: 312,
                    comments: 24,
                    link: "https://www.linkedin.com/in/jjanicamatanta/"
                },
                {
                    date: "Hace 3 semanas",
                    content: "📊 Datos en tiempo real con Vue.js y WebSockets. Construí un dashboard que actualiza métricas cada segundo. Los usuarios están encantados con la experiencia. #VueJS #RealTime #Frontend",
                    likes: 267,
                    comments: 21,
                    link: "https://www.linkedin.com/in/jjanicamatanta/"
                },
                {
                    date: "Hace 1 mes",
                    content: "🎯 De idea a MVP en 2 semanas. Así es como trabajamos en startups. Laravel + Vue.js + AWS = Stack perfecto para iterar rápido sin sacrificar calidad. #Startup #MVP #AgileDevlopment",
                    likes: 398,
                    comments: 29,
                    link: "https://www.linkedin.com/in/jjanicamatanta/"
                }
            ]
        },
        contact: {
            title: "¿Listo para empezar?",
            description: "Actualmente estoy disponible para nuevos proyectos y colaboraciones. Si tienes una idea que quieres llevar al siguiente nivel, hablemos.",
            email: personalInfo.email,
            emailLabel: "Email",
            socialLabel: "Sígueme"
        },
        footer: {
            copyright: "Desarrollador FullStack. Todos los derechos reservados.",
            tagline: "Transformando ideas en aplicaciones escalables con automatización IA.",
            quickLinks: "Enlaces Rápidos",
            contactTitle: "Contacto",
            socialTitle: "Sígueme",
            privacy: "Privacidad",
            terms: "Términos"
        }
    },
    en: {
        nav: {
            about: "About",
            projects: "Projects",
            git: "Repositories",
            linkedin: "LinkedIn",
            contact: "Contact"
        },
        hero: {
            greeting: "APP BUILDER FOR STARTUPS",
            title: "Transforming Ideas into ",
            titleHighlight: "Scalable Applications",
            titleEnd: " with AI Automation.",
            description: "FullStack Developer specialized in creating automated solutions for startups. From idea to MVP in record time.",
            cta1: "View Projects",
            cta2: "Contact Me",
            socialLinks: {
                github: personalInfo.socialLinks.github,
                linkedin: personalInfo.socialLinks.linkedin
            }
        },
        projects: {
            sectionTitle: "Featured Projects",
            items: [
                {
                    slug: "automata-pe",
                    title: "Personal Portfolio",
                    description: "Jose Anicama's portfolio, built with Astro, TailwindCSS, and TypeScript.",
                    tech: ["Astro", "TailwindCSS", "TypeScript"],
                    image: aiBotImage,
                    fullDescription: "My personal portfolio, a PWA built with Astro, TailwindCSS, and TypeScript. It showcases my projects, skills, and experience in a modern and accessible way.",
                    features: [
                        "PWA (Progressive Web App) for a native-like experience.",
                        "Modern and responsive design with TailwindCSS.",
                        "Interactive components with Astro.",
                        "GitHub integration to display repositories.",
                        "Multi-language support (English and Spanish)."
                    ],
                    challenges: "Learning to use Astro and its features, such as partial hydration and static site generation. Integrating the GitHub API to display repositories dynamically.",
                    results: "A modern, fast, and accessible portfolio that showcases my skills and projects. An excellent tool to show my work to potential employers and clients."
                },
                {
                    slug: "netflics2",
                    title: "Netflix Clone",
                    description: "A web application built with PHP, HTML, and Vue for streaming and managing multimedia content.",
                    tech: ["PHP", "HTML", "Vue"],
                    image: saasImage,
                    fullDescription: "A web application built with PHP, HTML, and Vue for streaming and managing multimedia content. It allows users to watch movies and series, and administrators to manage the content.",
                    features: [
                        "Video streaming.",
                        "Multimedia content management.",
                        "User authentication.",
                        "Admin panel to manage movies and series."
                    ],
                    challenges: "Implementing an efficient and scalable video streaming system. Designing a database to store and manage multimedia content.",
                    results: "A functional and efficient web application for streaming and managing multimedia content. A great way to learn about video streaming and content management."
                },
                {
                    slug: "shortener",
                    title: "URL Shortener",
                    description: "A simple and efficient URL shortener built with PHP for quick and easy link management.",
                    tech: ["PHP", "Docker", "Laravel"],
                    image: fintechImage,
                    fullDescription: "A simple and efficient URL shortener built with PHP for quick and easy link management. It allows users to shorten long URLs and track clicks.",
                    features: [
                        "URL shortening.",
                        "Click tracking.",
                        "API to shorten URLs programmatically.",
                        "Containerized with Docker."
                    ],
                    challenges: "Generating unique short URLs and avoiding collisions. Implementing an efficient click tracking system.",
                    results: "A functional and efficient URL shortener. A useful tool for sharing links on social media and other platforms."
                }
            ]
        },
        gitRepositories: {
            sectionTitle: "Open Source Repositories",
            subtitle: "Community contributions and personal projects",
            viewProfile: "View GitHub",
            items: [
                {
                    name: "automata.pe",
                    description: "Jose Anicama's portfolio, built with Astro, TailwindCSS, and TypeScript.",
                    language: "Astro",
                    stars: 0,
                    forks: 0,
                    url: "https://github.com/automatape2/automata.pe"
                },
                {
                    name: "inven2",
                    description: "Offline backup of the original inven2 website downloaded with wget",
                    language: "HTML",
                    stars: 0,
                    forks: 0,
                    url: "https://github.com/automatape2/inven2"
                },
                {
                    name: "netflics2",
                    description: "A web application built with PHP, HTML, and Vue for streaming and managing multimedia content",
                    language: "PHP",
                    stars: 1,
                    forks: 0,
                    url: "https://github.com/automatape2/netflics2"
                },
                {
                    name: "shortener",
                    description: "A simple and efficient URL shortener built with PHP for quick and easy link management.",
                    language: "PHP",
                    stars: 1,
                    forks: 0,
                    url: "https://github.com/automatape2/shortener"
                }
            ]
        },
        linkedInPosts: {
            sectionTitle: "Latest LinkedIn Posts",
            subtitle: "Sharing insights, experiences, and trends in software development",
            viewProfile: "View Full Profile",
            items: [
                {
                    date: "2 days ago",
                    content: "🚀 Just completed the migration from monolithic architecture to microservices. The result: 60% improvement in response time and infinite scalability. The lessons learned were invaluable. #Microservices #Architecture #DevOps",
                    likes: 234,
                    comments: 18,
                    link: "https://www.linkedin.com/in/jjanicamatanta/"
                },
                {
                    date: "5 days ago",
                    content: "💡 AI is transforming how we develop software. I implemented GPT-4 in our document processing system and reduced 200 hours of manual work per month. The future is now. #ArtificialIntelligence #Automation #Innovation",
                    likes: 456,
                    comments: 32,
                    link: "https://www.linkedin.com/in/jjanicamatanta/"
                },
                {
                    date: "1 week ago",
                    content: "🔒 API Security: Implemented JWT authentication with refresh tokens and rate limiting in our fintech API. Zero breaches since launch. Security is not optional, it's fundamental. #CyberSecurity #API #BestPractices",
                    likes: 189,
                    comments: 15,
                    link: "https://www.linkedin.com/in/jjanicamatanta/"
                },
                {
                    date: "2 weeks ago",
                    content: "⚡ Docker + Kubernetes = Magic. Our new infrastructure handles 10,000 concurrent users without breaking a sweat. If you're not using containers yet, you're wasting time and money. #Docker #Kubernetes #CloudNative",
                    likes: 312,
                    comments: 24,
                    link: "https://www.linkedin.com/in/jjanicamatanta/"
                },
                {
                    date: "3 weeks ago",
                    content: "📊 Real-time data with Vue.js and WebSockets. Built a dashboard that updates metrics every second. Users are delighted with the experience. #VueJS #RealTime #Frontend",
                    likes: 267,
                    comments: 21,
                    link: "https://www.linkedin.com/in/jjanicamatanta/"
                },
                {
                    date: "1 month ago",
                    content: "🎯 From idea to MVP in 2 weeks. That's how we work in startups. Laravel + Vue.js + AWS = Perfect stack to iterate fast without sacrificing quality. #Startup #MVP #AgileDevlopment",
                    likes: 398,
                    comments: 29,
                    link: "https://www.linkedin.com/in/jjanicamatanta/"
                }
            ]
        },
        contact: {
            title: "Ready to start?",
            description: "I'm currently available for new projects and collaborations. If you have an idea you want to take to the next level, let's talk.",
            email: personalInfo.email,
            emailLabel: "Email",
            socialLabel: "Follow Me"
        },
        footer: {
            copyright: "FullStack Developer. All rights reserved.",
            tagline: "Transforming ideas into scalable applications with AI automation.",
            quickLinks: "Quick Links",
            contactTitle: "Contact",
            socialTitle: "Follow Me",
            privacy: "Privacy",
            terms: "Terms"
        }
    }
} as const;

export type Locale = keyof typeof translations;
export const translations = {
    es: {
        nav: {
            about: "Sobre mí",
            projects: "Proyectos",
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
            chatWithAI: "Chatea con IA",
            socialLinks: {
                github: "https://github.com/tuusuario",
                linkedin: "https://linkedin.com/in/tuusuario",
                twitter: "https://twitter.com/tuusuario"
            }
        },
        projects: {
            sectionTitle: "Proyectos Destacados",
            items: [
                {
                    slug: "saas-platform",
                    title: "Plataforma SaaS de Gestión",
                    description: "Sistema integral de gestión empresarial con arquitectura microservicios.",
                    tech: ["Laravel", "Vue.js", "Docker"],
                    image: "/projects/saas-platform.png",
                    fullDescription: "Una plataforma completa de gestión empresarial diseñada con arquitectura de microservicios para máxima escalabilidad y rendimiento. El sistema incluye módulos de CRM, gestión de inventario, facturación y análisis en tiempo real.",
                    features: [
                        "Arquitectura de microservicios escalable",
                        "Dashboard en tiempo real con Vue.js",
                        "API RESTful robusta con Laravel",
                        "Contenedorización con Docker",
                        "Sistema de autenticación multi-tenant",
                        "Reportes y análisis avanzados"
                    ],
                    challenges: "El principal desafío fue diseñar una arquitectura que pudiera escalar horizontalmente mientras mantenía la consistencia de datos entre servicios. Implementamos event sourcing y CQRS para manejar la complejidad.",
                    results: "La plataforma ahora maneja más de 10,000 usuarios activos con un tiempo de respuesta promedio de 200ms. Reducción del 40% en costos de infraestructura gracias a la optimización de recursos."
                },
                {
                    slug: "ai-automation-bot",
                    title: "Bot de Automatización IA",
                    description: "Bot inteligente para procesamiento de documentos legales usando NLP.",
                    tech: ["Python", "OpenAI API", "AWS Lambda"],
                    image: "/projects/ai-bot.png",
                    fullDescription: "Un bot inteligente que automatiza el procesamiento y análisis de documentos legales utilizando procesamiento de lenguaje natural avanzado. Capaz de extraer información clave, clasificar documentos y generar resúmenes automáticos.",
                    features: [
                        "Procesamiento de lenguaje natural con OpenAI GPT-4",
                        "Extracción automática de entidades y cláusulas",
                        "Clasificación inteligente de documentos",
                        "Generación de resúmenes ejecutivos",
                        "Arquitectura serverless con AWS Lambda",
                        "Procesamiento en lote de miles de documentos"
                    ],
                    challenges: "Optimizar el costo de las llamadas a la API de OpenAI mientras mantenemos alta precisión. Implementamos un sistema de caché inteligente y pre-procesamiento para reducir tokens.",
                    results: "Reducción del 85% en tiempo de procesamiento de documentos. Ahorro de más de 200 horas mensuales en trabajo manual. Precisión del 94% en extracción de información."
                },
                {
                    slug: "fintech-api",
                    title: "API Segura Fintech",
                    description: "API RESTful para transacciones financieras con altos estándares de seguridad.",
                    tech: ["Node.js", "PostgreSQL", "Redis"],
                    image: "/projects/fintech-api.png",
                    fullDescription: "Una API RESTful de alta seguridad diseñada para manejar transacciones financieras con cumplimiento de estándares PCI DSS. Incluye procesamiento de pagos, gestión de cuentas y sistema de auditoría completo.",
                    features: [
                        "Autenticación JWT con refresh tokens",
                        "Encriptación end-to-end de datos sensibles",
                        "Rate limiting y protección DDoS",
                        "Sistema de auditoría completo",
                        "Procesamiento de transacciones con ACID",
                        "Caché distribuido con Redis para alto rendimiento"
                    ],
                    challenges: "Garantizar la seguridad de las transacciones mientras mantenemos baja latencia. Implementamos un sistema de cola de mensajes y procesamiento asíncrono para transacciones no críticas.",
                    results: "Procesamiento de más de 1 millón de transacciones mensuales con 99.99% de uptime. Cero brechas de seguridad desde el lanzamiento. Tiempo de respuesta promedio de 150ms."
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
                    link: "https://linkedin.com/in/tuusuario"
                },
                {
                    date: "Hace 5 días",
                    content: "💡 La IA está transformando cómo desarrollamos software. Implementé GPT-4 en nuestro sistema de procesamiento de documentos y redujimos 200 horas de trabajo manual al mes. El futuro es ahora. #InteligenciaArtificial #Automatización #Innovation",
                    likes: 456,
                    comments: 32,
                    link: "https://linkedin.com/in/tuusuario"
                },
                {
                    date: "Hace 1 semana",
                    content: "🔒 Seguridad en APIs: Implementé autenticación JWT con refresh tokens y rate limiting en nuestra API fintech. Cero brechas desde el lanzamiento. La seguridad no es opcional, es fundamental. #CyberSecurity #API #BestPractices",
                    likes: 189,
                    comments: 15,
                    link: "https://linkedin.com/in/tuusuario"
                },
                {
                    date: "Hace 2 semanas",
                    content: "⚡ Docker + Kubernetes = Magia. Nuestra nueva infraestructura maneja 10,000 usuarios concurrentes sin despeinarse. Si aún no estás usando contenedores, estás perdiendo tiempo y dinero. #Docker #Kubernetes #CloudNative",
                    likes: 312,
                    comments: 24,
                    link: "https://linkedin.com/in/tuusuario"
                },
                {
                    date: "Hace 3 semanas",
                    content: "📊 Datos en tiempo real con Vue.js y WebSockets. Construí un dashboard que actualiza métricas cada segundo. Los usuarios están encantados con la experiencia. #VueJS #RealTime #Frontend",
                    likes: 267,
                    comments: 21,
                    link: "https://linkedin.com/in/tuusuario"
                },
                {
                    date: "Hace 1 mes",
                    content: "🎯 De idea a MVP en 2 semanas. Así es como trabajamos en startups. Laravel + Vue.js + AWS = Stack perfecto para iterar rápido sin sacrificar calidad. #Startup #MVP #AgileDevlopment",
                    likes: 398,
                    comments: 29,
                    link: "https://linkedin.com/in/tuusuario"
                }
            ]
        },
        contact: {
            title: "¿Listo para empezar?",
            description: "Actualmente estoy disponible para nuevos proyectos y colaboraciones. Si tienes una idea que quieres llevar al siguiente nivel, hablemos.",
            email: "tu-email@ejemplo.com",
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
            chatWithAI: "Chat with AI",
            socialLinks: {
                github: "https://github.com/tuusuario",
                linkedin: "https://linkedin.com/in/tuusuario",
                twitter: "https://twitter.com/tuusuario"
            }
        },
        projects: {
            sectionTitle: "Featured Projects",
            items: [
                {
                    slug: "saas-platform",
                    title: "SaaS Management Platform",
                    description: "Comprehensive enterprise management system with microservices architecture.",
                    tech: ["Laravel", "Vue.js", "Docker"],
                    image: "/projects/saas-platform.png",
                    fullDescription: "A complete enterprise management platform designed with microservices architecture for maximum scalability and performance. The system includes CRM modules, inventory management, billing, and real-time analytics.",
                    features: [
                        "Scalable microservices architecture",
                        "Real-time dashboard with Vue.js",
                        "Robust RESTful API with Laravel",
                        "Containerization with Docker",
                        "Multi-tenant authentication system",
                        "Advanced reporting and analytics"
                    ],
                    challenges: "The main challenge was designing an architecture that could scale horizontally while maintaining data consistency across services. We implemented event sourcing and CQRS to handle the complexity.",
                    results: "The platform now handles over 10,000 active users with an average response time of 200ms. 40% reduction in infrastructure costs thanks to resource optimization."
                },
                {
                    slug: "ai-automation-bot",
                    title: "AI Automation Bot",
                    description: "Intelligent bot for legal document processing using NLP.",
                    tech: ["Python", "OpenAI API", "AWS Lambda"],
                    image: "/projects/ai-bot.png",
                    fullDescription: "An intelligent bot that automates the processing and analysis of legal documents using advanced natural language processing. Capable of extracting key information, classifying documents, and generating automatic summaries.",
                    features: [
                        "Natural language processing with OpenAI GPT-4",
                        "Automatic entity and clause extraction",
                        "Intelligent document classification",
                        "Executive summary generation",
                        "Serverless architecture with AWS Lambda",
                        "Batch processing of thousands of documents"
                    ],
                    challenges: "Optimizing the cost of OpenAI API calls while maintaining high accuracy. We implemented an intelligent caching system and pre-processing to reduce tokens.",
                    results: "85% reduction in document processing time. Savings of over 200 hours monthly in manual work. 94% accuracy in information extraction."
                },
                {
                    slug: "fintech-api",
                    title: "Secure Fintech API",
                    description: "RESTful API for financial transactions with high security standards.",
                    tech: ["Node.js", "PostgreSQL", "Redis"],
                    image: "/projects/fintech-api.png",
                    fullDescription: "A high-security RESTful API designed to handle financial transactions with PCI DSS compliance. Includes payment processing, account management, and complete audit system.",
                    features: [
                        "JWT authentication with refresh tokens",
                        "End-to-end encryption of sensitive data",
                        "Rate limiting and DDoS protection",
                        "Complete audit system",
                        "ACID transaction processing",
                        "Distributed cache with Redis for high performance"
                    ],
                    challenges: "Ensuring transaction security while maintaining low latency. We implemented a message queue system and asynchronous processing for non-critical transactions.",
                    results: "Processing over 1 million transactions monthly with 99.99% uptime. Zero security breaches since launch. Average response time of 150ms."
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
                    link: "https://linkedin.com/in/tuusuario"
                },
                {
                    date: "5 days ago",
                    content: "💡 AI is transforming how we develop software. I implemented GPT-4 in our document processing system and reduced 200 hours of manual work per month. The future is now. #ArtificialIntelligence #Automation #Innovation",
                    likes: 456,
                    comments: 32,
                    link: "https://linkedin.com/in/tuusuario"
                },
                {
                    date: "1 week ago",
                    content: "🔒 API Security: Implemented JWT authentication with refresh tokens and rate limiting in our fintech API. Zero breaches since launch. Security is not optional, it's fundamental. #CyberSecurity #API #BestPractices",
                    likes: 189,
                    comments: 15,
                    link: "https://linkedin.com/in/tuusuario"
                },
                {
                    date: "2 weeks ago",
                    content: "⚡ Docker + Kubernetes = Magic. Our new infrastructure handles 10,000 concurrent users without breaking a sweat. If you're not using containers yet, you're wasting time and money. #Docker #Kubernetes #CloudNative",
                    likes: 312,
                    comments: 24,
                    link: "https://linkedin.com/in/tuusuario"
                },
                {
                    date: "3 weeks ago",
                    content: "📊 Real-time data with Vue.js and WebSockets. Built a dashboard that updates metrics every second. Users are delighted with the experience. #VueJS #RealTime #Frontend",
                    likes: 267,
                    comments: 21,
                    link: "https://linkedin.com/in/tuusuario"
                },
                {
                    date: "1 month ago",
                    content: "🎯 From idea to MVP in 2 weeks. That's how we work in startups. Laravel + Vue.js + AWS = Perfect stack to iterate fast without sacrificing quality. #Startup #MVP #AgileDevelopment",
                    likes: 398,
                    comments: 29,
                    link: "https://linkedin.com/in/tuusuario"
                }
            ]
        },
        contact: {
            title: "Ready to start?",
            description: "I'm currently available for new projects and collaborations. If you have an idea you want to take to the next level, let's talk.",
            email: "your-email@example.com",
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

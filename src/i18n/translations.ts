export const translations = {
    es: {
        nav: {
            about: "Sobre mí",
            skills: "Habilidades",
            projects: "Proyectos",
            experience: "Experiencia",
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
            chatWithAI: "Chatea con IA"
        },
        projects: {
            sectionTitle: "Proyectos Destacados",
            items: [
                {
                    title: "Plataforma SaaS de Gestión",
                    description: "Sistema integral de gestión empresarial con arquitectura microservicios.",
                    tech: ["Laravel", "Vue.js", "Docker"]
                },
                {
                    title: "Bot de Automatización IA",
                    description: "Bot inteligente para procesamiento de documentos legales usando NLP.",
                    tech: ["Python", "OpenAI API", "AWS Lambda"]
                },
                {
                    title: "API Segura Fintech",
                    description: "API RESTful para transacciones financieras con altos estándares de seguridad.",
                    tech: ["Node.js", "PostgreSQL", "Redis"]
                }
            ]
        },
        experience: {
            sectionTitle: "Experiencia Laboral",
            items: [
                {
                    company: "Tech Solutions S.A.",
                    position: "Senior FullStack Developer",
                    period: "2022 - Presente",
                    description: "Liderazgo técnico en proyectos empresariales de gran escala, implementación de arquitecturas escalables y mentoría a desarrolladores junior.",
                    tech: ["Laravel", "Vue.js", "AWS", "Docker"]
                },
                {
                    company: "Digital Innovations",
                    position: "Backend Developer",
                    period: "2020 - 2022",
                    description: "Desarrollo de APIs RESTful y microservicios para aplicaciones fintech, optimización de bases de datos y mejoras de rendimiento.",
                    tech: ["Node.js", "PostgreSQL", "Redis", "Kubernetes"]
                },
                {
                    company: "StartupLab",
                    position: "FullStack Developer",
                    period: "2018 - 2020",
                    description: "Desarrollo de aplicaciones web desde cero, participación en todas las fases del ciclo de desarrollo de software.",
                    tech: ["Python", "Django", "React", "MongoDB"]
                }
            ]
        },
        skills: {
            sectionTitle: "Habilidades"
        },
        contact: {
            title: "¿Listo para empezar?",
            description: "Actualmente estoy disponible para nuevos proyectos y colaboraciones. Si tienes una idea que quieres llevar al siguiente nivel, hablemos.",
            email: "tu-email@ejemplo.com",
            emailLabel: "Email",
            socialLabel: "Sígueme"
        },
        footer: {
            copyright: "Desarrollador FullStack. Todos los derechos reservados."
        }
    },
    en: {
        nav: {
            about: "About",
            skills: "Skills",
            projects: "Projects",
            experience: "Experience",
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
            chatWithAI: "Chat with AI"
        },
        projects: {
            sectionTitle: "Featured Projects",
            items: [
                {
                    title: "SaaS Management Platform",
                    description: "Comprehensive enterprise management system with microservices architecture.",
                    tech: ["Laravel", "Vue.js", "Docker"]
                },
                {
                    title: "AI Automation Bot",
                    description: "Intelligent bot for legal document processing using NLP.",
                    tech: ["Python", "OpenAI API", "AWS Lambda"]
                },
                {
                    title: "Secure Fintech API",
                    description: "RESTful API for financial transactions with high security standards.",
                    tech: ["Node.js", "PostgreSQL", "Redis"]
                }
            ]
        },
        experience: {
            sectionTitle: "Work Experience",
            items: [
                {
                    company: "Tech Solutions S.A.",
                    position: "Senior FullStack Developer",
                    period: "2022 - Present",
                    description: "Technical leadership in large-scale enterprise projects, implementation of scalable architectures and mentoring junior developers.",
                    tech: ["Laravel", "Vue.js", "AWS", "Docker"]
                },
                {
                    company: "Digital Innovations",
                    position: "Backend Developer",
                    period: "2020 - 2022",
                    description: "Development of RESTful APIs and microservices for fintech applications, database optimization and performance improvements.",
                    tech: ["Node.js", "PostgreSQL", "Redis", "Kubernetes"]
                },
                {
                    company: "StartupLab",
                    position: "FullStack Developer",
                    period: "2018 - 2020",
                    description: "Web application development from scratch, participation in all phases of the software development lifecycle.",
                    tech: ["Python", "Django", "React", "MongoDB"]
                }
            ]
        },
        skills: {
            sectionTitle: "Skills"
        },
        contact: {
            title: "Ready to start?",
            description: "I'm currently available for new projects and collaborations. If you have an idea you want to take to the next level, let's talk.",
            email: "your-email@example.com",
            emailLabel: "Email",
            socialLabel: "Follow Me"
        },
        footer: {
            copyright: "FullStack Developer. All rights reserved."
        }
    }
} as const;

export type Locale = keyof typeof translations;

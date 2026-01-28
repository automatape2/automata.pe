import { personalInfo } from "../config/personal";

// Import project images
import msCrmImage from "../assets/projects/ms-crm.png";
import msCrmImage2 from "../assets/projects/ms-crm-2.png";
import msCrmImage3 from "../assets/projects/ms-crm-3.png";
import landingpagerImage from "../assets/projects/landingpager.svg";
import educationPortalImage from "../assets/projects/education-portal.svg";

export const translations = {
    es: {
        nav: {
            home: "Inicio",
            services: "Servicios",
            solutions: "Soluciones",
            tech: "Tecnologias",
            contact: "Contacto"
        },
        hero: {
            greeting: "AUTOMATIZACION INTELIGENTE",
            title: "Automatizamos tu negocio ",
            titleHighlight: "con IA",
            titleEnd: "",
            description: "Soluciones que eliminan tareas repetitivas, integran sistemas y optimizan procesos. Workflows con n8n, integraciones con GPT y Claude, pipelines de datos automatizados.",
            cta1: "Ver Soluciones",
            cta2: "Agenda una Demo",
            socialLinks: {
                github: personalInfo.socialLinks.github,
                linkedin: personalInfo.socialLinks.linkedin
            }
        },
        services: {
            sectionTitle: "Servicios",
            subtitle: "Soluciones de automatizacion para cada necesidad",
            items: [
                {
                    name: "Workflows n8n",
                    description: "Automatizacion visual sin codigo. Conecta apps, APIs y bases de datos en minutos.",
                    icon: "workflow",
                    gradient: "from-orange-500 to-red-500"
                },
                {
                    name: "Integracion IA",
                    description: "GPT-4, Claude, LangChain integrados en tus procesos de negocio.",
                    icon: "brain",
                    gradient: "from-purple-500 to-pink-500"
                },
                {
                    name: "ETL & Data Pipelines",
                    description: "Extraccion, transformacion y carga de datos automatizada.",
                    icon: "database",
                    gradient: "from-blue-500 to-cyan-500"
                },
                {
                    name: "RPA",
                    description: "Automatizacion robotica de procesos repetitivos en cualquier aplicacion.",
                    icon: "robot",
                    gradient: "from-green-500 to-emerald-500"
                },
                {
                    name: "Chatbots IA",
                    description: "Asistentes inteligentes para atencion al cliente y soporte 24/7.",
                    icon: "chat",
                    gradient: "from-cyan-500 to-blue-500"
                },
                {
                    name: "Web Scraping",
                    description: "Extraccion automatizada de datos de cualquier sitio web.",
                    icon: "globe",
                    gradient: "from-yellow-500 to-orange-500"
                }
            ]
        },
        solutions: {
            sectionTitle: "Soluciones",
            subtitle: "Productos y casos de uso reales",
            items: [
                {
                    slug: "landingpager",
                    title: "LandingPager.ai",
                    description: "Plataforma SaaS para crear landing pages profesionales en minutos con IA y editor visual drag & drop.",
                    tech: ["Next.js", "OpenAI", "TypeScript", "Tailwind CSS"],
                    image: landingpagerImage,
                    demoUrl: "https://landingpager.ai",
                    type: "producto"
                },
                {
                    slug: "ms_crm",
                    title: "MS CRM",
                    description: "Sistema CRM con automatizacion de seguimiento, segmentos dinamicos y timeline de interacciones.",
                    tech: ["Laravel", "Livewire", "MySQL", "n8n"],
                    image: msCrmImage2,
                    screenshots: [msCrmImage, msCrmImage2, msCrmImage3],
                    demoUrl: "https://automata.pe/ms_crm",
                    type: "producto"
                },
                {
                    slug: "education_portal",
                    title: "Portal Educativo",
                    description: "Portal con recursos automatizados, notificaciones inteligentes y sincronizacion de calendarios.",
                    tech: ["Laravel", "Livewire", "MySQL", "APIs"],
                    image: educationPortalImage,
                    demoUrl: "https://automata.pe/education_portal",
                    type: "producto"
                },
                {
                    slug: "whatsapp-cotizador",
                    title: "Bot Cotizador WhatsApp",
                    description: "Chatbot que responde consultas 24/7, calcula cotizaciones desde tu catalogo y agenda citas automaticamente.",
                    tech: ["n8n", "WhatsApp API", "OpenAI", "Google Sheets"],
                    image: msCrmImage,
                    type: "caso"
                },
                {
                    slug: "facturas-automaticas",
                    title: "Facturacion Automatica",
                    description: "Detecta pagos en Stripe/PayPal, genera facturas electronicas y las envia al cliente. Cero trabajo manual.",
                    tech: ["n8n", "Stripe", "SUNAT API", "Email"],
                    image: msCrmImage3,
                    type: "caso"
                },
                {
                    slug: "monitor-precios",
                    title: "Monitor de Precios Competencia",
                    description: "Scraper que revisa precios de competidores diariamente y te alerta cuando hay cambios importantes.",
                    tech: ["Python", "n8n", "Telegram", "PostgreSQL"],
                    image: educationPortalImage,
                    type: "caso"
                },
                {
                    slug: "onboarding-empleados",
                    title: "Onboarding Automatico",
                    description: "Bot que envia documentos a nuevos empleados, programa reuniones de induccion y hace seguimiento automatico.",
                    tech: ["n8n", "Slack", "Google Calendar", "Notion"],
                    image: msCrmImage,
                    type: "caso"
                },
                {
                    slug: "contenido-social",
                    title: "Generador de Contenido Social",
                    description: "Crea posts para redes con IA, los programa automaticamente y te envia reportes de metricas semanales.",
                    tech: ["n8n", "OpenAI", "Buffer API", "Google Sheets"],
                    image: msCrmImage2,
                    type: "caso"
                },
                {
                    slug: "alertas-stock",
                    title: "Alertas de Stock Inteligentes",
                    description: "Monitorea inventario en multiples canales de venta y notifica cuando hay que reponer productos.",
                    tech: ["n8n", "Shopify API", "WhatsApp", "PostgreSQL"],
                    image: msCrmImage3,
                    type: "caso"
                },
                {
                    slug: "transcriptor-reuniones",
                    title: "Transcriptor de Reuniones",
                    description: "Graba tus calls de Zoom/Meet, transcribe con IA, extrae tareas y envia resumenes al equipo.",
                    tech: ["n8n", "Whisper AI", "OpenAI", "Slack"],
                    image: educationPortalImage,
                    type: "caso"
                },
                {
                    slug: "pipeline-cvs",
                    title: "Pipeline de CVs con IA",
                    description: "Recibe CVs por email o formulario, los analiza con IA y pre-califica candidatos automaticamente.",
                    tech: ["n8n", "OpenAI", "Airtable", "Email"],
                    image: msCrmImage,
                    type: "caso"
                }
            ]
        },
        techStack: {
            sectionTitle: "Stack Tecnologico",
            subtitle: "Herramientas que dominamos",
            categories: [
                {
                    name: "Automatizacion",
                    items: ["n8n", "Make", "Zapier", "Python"]
                },
                {
                    name: "Inteligencia Artificial",
                    items: ["OpenAI", "Anthropic", "LangChain", "Hugging Face"]
                },
                {
                    name: "Backend",
                    items: ["Laravel", "Node.js", "Python", "PostgreSQL"]
                },
                {
                    name: "Cloud & DevOps",
                    items: ["AWS", "Docker", "GitHub Actions", "Vercel"]
                }
            ]
        },
        metrics: {
            sectionTitle: "Impacto",
            subtitle: "Resultados que hablan por si solos",
            items: [
                { value: "500+", label: "Horas ahorradas" },
                { value: "50+", label: "Automatizaciones" },
                { value: "99.9%", label: "Uptime" },
                { value: "10+", label: "Integraciones" }
            ]
        },
        contact: {
            title: "Automatiza tu negocio hoy",
            description: "Agenda una consulta gratuita. Analizamos tus procesos y te mostramos como automatizarlos.",
            email: personalInfo.email,
            emailLabel: "Email",
            ctaLabel: "Agenda una Demo",
            socialLabel: "Siguenos"
        },
        footer: {
            copyright: "Automata. Todos los derechos reservados.",
            tagline: "Automatizacion inteligente para tu negocio.",
            quickLinks: "Enlaces",
            contactTitle: "Contacto",
            socialTitle: "Redes",
            privacy: "Privacidad",
            terms: "Terminos"
        }
    },
    en: {
        nav: {
            home: "Home",
            services: "Services",
            solutions: "Solutions",
            tech: "Tech",
            contact: "Contact"
        },
        hero: {
            greeting: "INTELLIGENT AUTOMATION",
            title: "We automate your business ",
            titleHighlight: "with AI",
            titleEnd: "",
            description: "Solutions that eliminate repetitive tasks, integrate systems and optimize processes. n8n workflows, GPT and Claude integrations, automated data pipelines.",
            cta1: "View Solutions",
            cta2: "Book a Demo",
            socialLinks: {
                github: personalInfo.socialLinks.github,
                linkedin: personalInfo.socialLinks.linkedin
            }
        },
        services: {
            sectionTitle: "Services",
            subtitle: "Automation solutions for every need",
            items: [
                {
                    name: "n8n Workflows",
                    description: "Visual no-code automation. Connect apps, APIs and databases in minutes.",
                    icon: "workflow",
                    gradient: "from-orange-500 to-red-500"
                },
                {
                    name: "AI Integration",
                    description: "GPT-4, Claude, LangChain integrated into your business processes.",
                    icon: "brain",
                    gradient: "from-purple-500 to-pink-500"
                },
                {
                    name: "ETL & Data Pipelines",
                    description: "Automated data extraction, transformation and loading.",
                    icon: "database",
                    gradient: "from-blue-500 to-cyan-500"
                },
                {
                    name: "RPA",
                    description: "Robotic process automation for repetitive tasks in any application.",
                    icon: "robot",
                    gradient: "from-green-500 to-emerald-500"
                },
                {
                    name: "AI Chatbots",
                    description: "Intelligent assistants for customer service and 24/7 support.",
                    icon: "chat",
                    gradient: "from-cyan-500 to-blue-500"
                },
                {
                    name: "Web Scraping",
                    description: "Automated data extraction from any website.",
                    icon: "globe",
                    gradient: "from-yellow-500 to-orange-500"
                }
            ]
        },
        solutions: {
            sectionTitle: "Solutions",
            subtitle: "Products and real use cases",
            items: [
                {
                    slug: "landingpager",
                    title: "LandingPager.ai",
                    description: "SaaS platform to create professional landing pages in minutes with AI and visual drag & drop editor.",
                    tech: ["Next.js", "OpenAI", "TypeScript", "Tailwind CSS"],
                    image: landingpagerImage,
                    demoUrl: "https://landingpager.ai",
                    type: "product"
                },
                {
                    slug: "ms_crm",
                    title: "MS CRM",
                    description: "CRM system with automated follow-up, dynamic segments and interaction timeline.",
                    tech: ["Laravel", "Livewire", "MySQL", "n8n"],
                    image: msCrmImage2,
                    screenshots: [msCrmImage, msCrmImage2, msCrmImage3],
                    demoUrl: "https://automata.pe/ms_crm",
                    type: "product"
                },
                {
                    slug: "education_portal",
                    title: "Education Portal",
                    description: "Portal with automated resources, smart notifications and calendar sync.",
                    tech: ["Laravel", "Livewire", "MySQL", "APIs"],
                    image: educationPortalImage,
                    demoUrl: "https://automata.pe/education_portal",
                    type: "product"
                },
                {
                    slug: "whatsapp-cotizador",
                    title: "WhatsApp Quote Bot",
                    description: "Chatbot that answers inquiries 24/7, calculates quotes from your catalog and schedules appointments automatically.",
                    tech: ["n8n", "WhatsApp API", "OpenAI", "Google Sheets"],
                    image: msCrmImage,
                    type: "case"
                },
                {
                    slug: "facturas-automaticas",
                    title: "Automatic Invoicing",
                    description: "Detects payments in Stripe/PayPal, generates electronic invoices and sends them to the client. Zero manual work.",
                    tech: ["n8n", "Stripe", "Tax API", "Email"],
                    image: msCrmImage3,
                    type: "case"
                },
                {
                    slug: "monitor-precios",
                    title: "Competitor Price Monitor",
                    description: "Scraper that checks competitor prices daily and alerts you when significant changes occur.",
                    tech: ["Python", "n8n", "Telegram", "PostgreSQL"],
                    image: educationPortalImage,
                    type: "case"
                },
                {
                    slug: "onboarding-empleados",
                    title: "Automatic Onboarding",
                    description: "Bot that sends documents to new employees, schedules onboarding meetings and follows up automatically.",
                    tech: ["n8n", "Slack", "Google Calendar", "Notion"],
                    image: msCrmImage,
                    type: "case"
                },
                {
                    slug: "contenido-social",
                    title: "Social Content Generator",
                    description: "Creates social media posts with AI, schedules them automatically and sends weekly metrics reports.",
                    tech: ["n8n", "OpenAI", "Buffer API", "Google Sheets"],
                    image: msCrmImage2,
                    type: "case"
                },
                {
                    slug: "alertas-stock",
                    title: "Smart Stock Alerts",
                    description: "Monitors inventory across multiple sales channels and notifies when products need restocking.",
                    tech: ["n8n", "Shopify API", "WhatsApp", "PostgreSQL"],
                    image: msCrmImage3,
                    type: "case"
                },
                {
                    slug: "transcriptor-reuniones",
                    title: "Meeting Transcriber",
                    description: "Records your Zoom/Meet calls, transcribes with AI, extracts tasks and sends summaries to the team.",
                    tech: ["n8n", "Whisper AI", "OpenAI", "Slack"],
                    image: educationPortalImage,
                    type: "case"
                },
                {
                    slug: "pipeline-cvs",
                    title: "CV Pipeline with AI",
                    description: "Receives CVs via email or form, analyzes them with AI and pre-qualifies candidates automatically.",
                    tech: ["n8n", "OpenAI", "Airtable", "Email"],
                    image: msCrmImage,
                    type: "case"
                }
            ]
        },
        techStack: {
            sectionTitle: "Tech Stack",
            subtitle: "Tools we master",
            categories: [
                {
                    name: "Automation",
                    items: ["n8n", "Make", "Zapier", "Python"]
                },
                {
                    name: "Artificial Intelligence",
                    items: ["OpenAI", "Anthropic", "LangChain", "Hugging Face"]
                },
                {
                    name: "Backend",
                    items: ["Laravel", "Node.js", "Python", "PostgreSQL"]
                },
                {
                    name: "Cloud & DevOps",
                    items: ["AWS", "Docker", "GitHub Actions", "Vercel"]
                }
            ]
        },
        metrics: {
            sectionTitle: "Impact",
            subtitle: "Results that speak for themselves",
            items: [
                { value: "500+", label: "Hours saved" },
                { value: "50+", label: "Automations" },
                { value: "99.9%", label: "Uptime" },
                { value: "10+", label: "Integrations" }
            ]
        },
        contact: {
            title: "Automate your business today",
            description: "Book a free consultation. We analyze your processes and show you how to automate them.",
            email: personalInfo.email,
            emailLabel: "Email",
            ctaLabel: "Book a Demo",
            socialLabel: "Follow Us"
        },
        footer: {
            copyright: "Automata. All rights reserved.",
            tagline: "Intelligent automation for your business.",
            quickLinks: "Links",
            contactTitle: "Contact",
            socialTitle: "Social",
            privacy: "Privacy",
            terms: "Terms"
        }
    }
} as const;

export type Locale = keyof typeof translations;

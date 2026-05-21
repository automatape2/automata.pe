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
            services: "Soluciones",
            solutions: "Proyectos",
            tech: "Tecnologias",
            contact: "Contacto"
        },
        hero: {
            greeting: "TECNOLOGIA QUE OPERA CONTIGO",
            title: "Tecnologia que nace en tu ",
            titleHighlight: "operacion",
            titleEnd: "",
            description: "Acompañamos a empresas en consultoria, desarrollo, cloud, IoT y staffing IT. Hombro a hombro con tu equipo: entendemos tus procesos, tus riesgos y tus urgencias para que la tecnologia sea un habilitador, no un riesgo.",
            cta1: "Ver Soluciones",
            cta2: "Conversemos",
            socialLinks: {
                github: personalInfo.socialLinks.github,
                linkedin: personalInfo.socialLinks.linkedin
            }
        },
        services: {
            sectionTitle: "Soluciones",
            subtitle: "Capacidades end-to-end para acompañarte en cada etapa de tu transformacion",
            items: [
                {
                    name: "Consultoria & Arquitectura",
                    description: "Levantamos procesos, analizamos riesgos y diseñamos arquitecturas modernas y escalables. Definimos hojas de ruta tecnologicas alineadas a tu operacion.",
                    icon: "blueprint",
                    gradient: "from-cyan-500 to-blue-500"
                },
                {
                    name: "Fabrica de Software",
                    description: "Desarrollo web, movil y plataformas empresariales. Stack moderno con Node.js, Laravel, Python, React y React Native, potenciado con IA en cada etapa.",
                    icon: "code",
                    gradient: "from-blue-500 to-indigo-500"
                },
                {
                    name: "Infraestructura Cloud",
                    description: "Implementaciones en AWS, Azure e hibridas. Automatizacion, monitoreo, gobernanza de costos y migraciones asistidas con minima friccion.",
                    icon: "cloud",
                    gradient: "from-sky-500 to-cyan-500"
                },
                {
                    name: "IoT & Hardware",
                    description: "Conectamos dispositivos fisicos con plataformas digitales. Telemetria, sensores, Raspberry Pi y protocolos industriales como MQTT, Modbus y RS-485.",
                    icon: "chip",
                    gradient: "from-emerald-500 to-teal-500"
                },
                {
                    name: "Staffing IT",
                    description: "Talento tecnico especializado evaluado con IA. Perfiles fullstack, cloud, QA, data y DevOps integrados a tu equipo de forma agil.",
                    icon: "team",
                    gradient: "from-purple-500 to-pink-500"
                },
                {
                    name: "Automatizacion con IA",
                    description: "Workflows con n8n, agentes con GPT y Claude, RPA y pipelines de datos. Eliminamos tareas repetitivas e integramos tus sistemas.",
                    icon: "brain",
                    gradient: "from-orange-500 to-red-500"
                }
            ]
        },
        solutions: {
            sectionTitle: "Proyectos & Casos",
            subtitle: "Implementaciones reales que combinan tecnologia, operacion e IA",
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
                    description: "Sistema CRM con automatizacion de seguimiento, segmentos dinamicos y timeline de interacciones para fuerza de ventas.",
                    tech: ["Laravel", "Livewire", "MySQL", "n8n"],
                    image: msCrmImage2,
                    screenshots: [msCrmImage, msCrmImage2, msCrmImage3],
                    demoUrl: "https://automata.pe/ms_crm",
                    type: "producto"
                },
                {
                    slug: "education_portal",
                    title: "Portal Educativo",
                    description: "Portal institucional con recursos automatizados, notificaciones inteligentes y sincronizacion de calendarios.",
                    tech: ["Laravel", "Livewire", "MySQL", "APIs"],
                    image: educationPortalImage,
                    demoUrl: "https://automata.pe/education_portal",
                    type: "producto"
                },
                {
                    slug: "whatsapp-cotizador",
                    title: "Bot Cotizador WhatsApp",
                    description: "Chatbot que responde 24/7, calcula cotizaciones desde tu catalogo y agenda citas automaticamente.",
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
                    description: "Scraper que revisa precios de competidores diariamente y alerta cuando hay cambios importantes.",
                    tech: ["Python", "n8n", "Telegram", "PostgreSQL"],
                    image: educationPortalImage,
                    type: "caso"
                },
                {
                    slug: "iot-telemetria",
                    title: "Telemetria Industrial IoT",
                    description: "Lectura de sensores Modbus/MQTT en planta, dashboards en tiempo real y alertas tempranas de fallas.",
                    tech: ["MQTT", "Node-RED", "TimescaleDB", "Grafana"],
                    image: msCrmImage,
                    type: "caso"
                },
                {
                    slug: "cloud-migration",
                    title: "Migracion a AWS",
                    description: "Migracion asistida de cargas legacy a AWS con IaC, observabilidad y gobernanza de costos desde el dia uno.",
                    tech: ["AWS", "Terraform", "Docker", "CloudWatch"],
                    image: msCrmImage2,
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
                    slug: "transcriptor-reuniones",
                    title: "Transcriptor de Reuniones",
                    description: "Graba calls de Zoom/Meet, transcribe con IA, extrae tareas y envia resumenes al equipo.",
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
                },
                {
                    slug: "contenido-social",
                    title: "Generador de Contenido Social",
                    description: "Crea posts con IA, los programa automaticamente y envia reportes de metricas semanales.",
                    tech: ["n8n", "OpenAI", "Buffer API", "Google Sheets"],
                    image: msCrmImage2,
                    type: "caso"
                }
            ]
        },
        techStack: {
            sectionTitle: "Stack Tecnologico",
            subtitle: "Herramientas y plataformas que dominamos end-to-end",
            categories: [
                {
                    name: "Arquitectura & Cloud",
                    items: ["AWS", "Azure", "Docker", "Kubernetes"]
                },
                {
                    name: "Desarrollo",
                    items: ["Laravel", "Node.js", "React", "Python"]
                },
                {
                    name: "IA & Automatizacion",
                    items: ["OpenAI", "Anthropic", "LangChain", "n8n"]
                },
                {
                    name: "IoT & Datos",
                    items: ["MQTT", "PostgreSQL", "Grafana", "Raspberry Pi"]
                }
            ]
        },
        metrics: {
            sectionTitle: "Por que confiar en nosotros",
            subtitle: "Acompañamiento end-to-end con responsabilidad sobre cada proyecto",
            items: [
                { value: "End-to-end", label: "Capacidades sin terceros" },
                { value: "50+", label: "Proyectos entregados" },
                { value: "24/7", label: "Acompañamiento post-implementacion" },
                { value: "100%", label: "Compromiso con tu operacion" }
            ]
        },
        contact: {
            title: "Hablemos de tu operacion",
            description: "Cuentanos tus procesos, riesgos y urgencias. Te respondemos con una propuesta clara, sin jerga, alineada a tu negocio.",
            email: personalInfo.email,
            emailLabel: "Email",
            ctaLabel: "Agenda una reunion",
            socialLabel: "Siguenos"
        },
        footer: {
            copyright: "Automata. Todos los derechos reservados.",
            tagline: "Tecnologia que nace en tu operacion.",
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
            services: "Solutions",
            solutions: "Projects",
            tech: "Tech",
            contact: "Contact"
        },
        hero: {
            greeting: "TECHNOLOGY THAT OPERATES WITH YOU",
            title: "Technology born from your ",
            titleHighlight: "operation",
            titleEnd: "",
            description: "We partner with companies on consulting, software, cloud, IoT and IT staffing. Shoulder to shoulder with your team: we understand your processes, risks and urgencies so technology becomes an enabler, not a risk.",
            cta1: "View Solutions",
            cta2: "Let's Talk",
            socialLinks: {
                github: personalInfo.socialLinks.github,
                linkedin: personalInfo.socialLinks.linkedin
            }
        },
        services: {
            sectionTitle: "Solutions",
            subtitle: "End-to-end capabilities to support every stage of your transformation",
            items: [
                {
                    name: "Consulting & Architecture",
                    description: "We map processes, analyze risks and design modern, scalable architectures. Tech roadmaps aligned to your real operation.",
                    icon: "blueprint",
                    gradient: "from-cyan-500 to-blue-500"
                },
                {
                    name: "Software Factory",
                    description: "Web, mobile and enterprise platforms. Modern stack with Node.js, Laravel, Python, React and React Native, AI-augmented at every step.",
                    icon: "code",
                    gradient: "from-blue-500 to-indigo-500"
                },
                {
                    name: "Cloud Infrastructure",
                    description: "AWS, Azure and hybrid deployments. Automation, monitoring, cost governance and low-friction migrations.",
                    icon: "cloud",
                    gradient: "from-sky-500 to-cyan-500"
                },
                {
                    name: "IoT & Hardware",
                    description: "We connect physical devices with digital platforms. Telemetry, sensors, Raspberry Pi and industrial protocols like MQTT, Modbus and RS-485.",
                    icon: "chip",
                    gradient: "from-emerald-500 to-teal-500"
                },
                {
                    name: "IT Staffing",
                    description: "Specialized tech talent evaluated with AI. Fullstack, cloud, QA, data and DevOps profiles seamlessly embedded in your team.",
                    icon: "team",
                    gradient: "from-purple-500 to-pink-500"
                },
                {
                    name: "AI Automation",
                    description: "n8n workflows, GPT and Claude agents, RPA and data pipelines. We eliminate repetitive tasks and integrate your systems.",
                    icon: "brain",
                    gradient: "from-orange-500 to-red-500"
                }
            ]
        },
        solutions: {
            sectionTitle: "Projects & Cases",
            subtitle: "Real implementations combining technology, operations and AI",
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
                    description: "CRM system with automated follow-up, dynamic segments and interaction timeline for sales teams.",
                    tech: ["Laravel", "Livewire", "MySQL", "n8n"],
                    image: msCrmImage2,
                    screenshots: [msCrmImage, msCrmImage2, msCrmImage3],
                    demoUrl: "https://automata.pe/ms_crm",
                    type: "product"
                },
                {
                    slug: "education_portal",
                    title: "Education Portal",
                    description: "Institutional portal with automated resources, smart notifications and calendar sync.",
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
                    slug: "iot-telemetria",
                    title: "Industrial IoT Telemetry",
                    description: "Modbus/MQTT sensor readings on the plant floor, real-time dashboards and early failure alerts.",
                    tech: ["MQTT", "Node-RED", "TimescaleDB", "Grafana"],
                    image: msCrmImage,
                    type: "case"
                },
                {
                    slug: "cloud-migration",
                    title: "AWS Migration",
                    description: "Assisted migration of legacy workloads to AWS with IaC, observability and cost governance from day one.",
                    tech: ["AWS", "Terraform", "Docker", "CloudWatch"],
                    image: msCrmImage2,
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
                    slug: "transcriptor-reuniones",
                    title: "Meeting Transcriber",
                    description: "Records Zoom/Meet calls, transcribes with AI, extracts tasks and sends summaries to the team.",
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
                },
                {
                    slug: "contenido-social",
                    title: "Social Content Generator",
                    description: "Creates social media posts with AI, schedules them automatically and sends weekly metrics reports.",
                    tech: ["n8n", "OpenAI", "Buffer API", "Google Sheets"],
                    image: msCrmImage2,
                    type: "case"
                }
            ]
        },
        techStack: {
            sectionTitle: "Tech Stack",
            subtitle: "Tools and platforms we master end-to-end",
            categories: [
                {
                    name: "Architecture & Cloud",
                    items: ["AWS", "Azure", "Docker", "Kubernetes"]
                },
                {
                    name: "Development",
                    items: ["Laravel", "Node.js", "React", "Python"]
                },
                {
                    name: "AI & Automation",
                    items: ["OpenAI", "Anthropic", "LangChain", "n8n"]
                },
                {
                    name: "IoT & Data",
                    items: ["MQTT", "PostgreSQL", "Grafana", "Raspberry Pi"]
                }
            ]
        },
        metrics: {
            sectionTitle: "Why trust us",
            subtitle: "End-to-end accompaniment, taking responsibility for every project",
            items: [
                { value: "End-to-end", label: "No third-party dependencies" },
                { value: "50+", label: "Projects delivered" },
                { value: "24/7", label: "Post-implementation support" },
                { value: "100%", label: "Commitment to your operation" }
            ]
        },
        contact: {
            title: "Let's talk about your operation",
            description: "Tell us your processes, risks and urgencies. We'll respond with a clear proposal, no jargon, aligned to your business.",
            email: personalInfo.email,
            emailLabel: "Email",
            ctaLabel: "Book a meeting",
            socialLabel: "Follow Us"
        },
        footer: {
            copyright: "Automata. All rights reserved.",
            tagline: "Technology born from your operation.",
            quickLinks: "Links",
            contactTitle: "Contact",
            socialTitle: "Social",
            privacy: "Privacy",
            terms: "Terms"
        }
    }
} as const;

export type Locale = keyof typeof translations;

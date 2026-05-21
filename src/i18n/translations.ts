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
                    figmaUrl: "#",
                    githubUrl: "https://github.com/automatape2/landingpager",
                    type: "producto",
                    year: "2025",
                    role: "Diseño · FE · BE · Infra",
                    timeline: "8 semanas MVP",
                    team: "Solo founder + 1 diseñadora",
                    fullDescription: "Plataforma SaaS para que cualquier emprendedor o equipo de growth publique una landing profesional en menos de dos minutos. Combina un editor visual drag & drop con generacion de copy via IA y publicacion en el edge con ISR. Cubre el ciclo completo: discovery, diseño, arquitectura, build, testing, deploy y observabilidad.",
                    problem: "Webflow y Framer son caros y tienen curva alta. Los builders simples no resuelven la parte mas dificil: que escribir. El time-to-launch se dispara cuando ademas hay que pagar copywriting y diseño.",
                    audience: "Emprendedores LATAM, freelancers de marketing, equipos de growth en startups early-stage que necesitan validar oferta rapido y sin agencia.",
                    designTools: ["Figma", "FigJam", "Excalidraw", "Tokens Studio"],
                    designSystem: [
                        "Tokens en Figma sincronizados a CSS via Tokens Studio",
                        "30+ bloques (hero, pricing, testimonials, FAQ, CTA, logos)",
                        "Variantes light/dark por bloque",
                        "Accesibilidad AA por defecto (contraste, focus, ARIA)",
                        "Sistema tipografico fluido (clamp) y grilla 4px"
                    ],
                    architecture: {
                        context: {
                            mermaid: `flowchart TD
    user((("Marketer / Pequeña empresa<br/><i>quiere validar oferta rapido</i>")))
    sys["<b>LandingPager.ai</b><br/><i>SaaS landing builder</i><br/>con IA + drag/drop"]
    openai["<b>OpenAI API</b><br/><i>genera copy y secciones</i>"]
    s3["<b>AWS S3 + CDN</b><br/><i>assets de usuario</i>"]
    stripe["<b>Stripe</b><br/><i>billing + customer portal</i>"]

    user -->|describe meta, publica landing| sys
    sys -->|genera copy via| openai
    sys -->|guarda assets en| s3
    sys -->|factura via| stripe

    classDef person fill:#0D1117,stroke:#4ADE80,color:#E5E7EB
    classDef system fill:#0D1117,stroke:#06B6D4,color:#E5E7EB,stroke-width:1.5px
    classDef ext fill:#111827,stroke:#6B7280,color:#9CA3AF

    class user person
    class sys system
    class openai,s3,stripe ext`,
                            ascii: `                  ┌──────────────────┐
                  │   Marketer /     │
                  │   Small biz      │
                  └─────────┬────────┘
                            │ describe meta
                            ▼
              ┌───────────────────────────┐
              │     LandingPager.ai       │
              │  Constructor de landings  │
              │  con IA + drag & drop     │
              └──┬───────┬───────┬────────┘
                 │       │       │
                 ▼       ▼       ▼
          ┌────────┐ ┌──────┐ ┌────────┐
          │ OpenAI │ │ S3 + │ │ Stripe │
          │  API   │ │ CDN  │ │ Billing│
          └────────┘ └──────┘ └────────┘`
                        },
                        container: {
                            mermaid: `flowchart TD
    user((("Marketer")))

    subgraph lp ["LandingPager.ai"]
        direction LR
        web["<b>Web App</b><br/><i>Next.js 14, React/TS</i><br/>UI principal"]
        api["<b>API Routes</b><br/><i>Edge + Node, tRPC + Zod</i><br/>endpoints tipados"]
        builder["<b>Builder iframe</b><br/><i>dnd-kit + realtime</i><br/>editor visual"]
        db[("<b>PostgreSQL</b><br/><i>Neon, Drizzle ORM</i><br/>datos de proyectos")]
    end

    openai["<b>OpenAI gpt-4o</b><br/><i>copy + secciones</i>"]

    user -->|usa &middot; HTTPS| web
    web -->|llama &middot; tRPC| api
    api -->|R/W| db
    api -->|genera copy| openai
    web -->|renderiza preview| builder

    classDef person fill:#0D1117,stroke:#4ADE80,color:#E5E7EB
    classDef container fill:#0D1117,stroke:#06B6D4,color:#E5E7EB
    classDef db fill:#0D1117,stroke:#06B6D4,color:#E5E7EB
    classDef ext fill:#111827,stroke:#6B7280,color:#9CA3AF

    class user person
    class web,api,builder container
    class db db
    class openai ext

    style lp fill:transparent,stroke:#4ADE80,stroke-dasharray:4 4,color:#E5E7EB`,
                            ascii: `┌──────────────────────────────────────────────────────┐
│                  LandingPager.ai                     │
│                                                      │
│  ┌──────────────┐         ┌────────────────────┐     │
│  │  Web App     │ ───────▶│   API Routes       │     │
│  │  Next.js 14  │ HTTPS   │  Edge + Node       │     │
│  │  React/TS    │         │   tRPC + Zod       │     │
│  └──────┬───────┘         └────────┬───────────┘     │
│         │ render/preview           │                 │
│         ▼                          ▼                 │
│  ┌──────────────┐         ┌────────────────────┐     │
│  │ Builder iframe│        │  Postgres (Neon)   │     │
│  │ dnd-kit + RT │         │  Drizzle ORM       │     │
│  └──────────────┘         └────────────────────┘     │
│                                    │                 │
│                                    ▼                 │
│                           ┌────────────────────┐     │
│                           │  OpenAI gpt-4o     │     │
│                           │  copy + secciones  │     │
│                           └────────────────────┘     │
└──────────────────────────────────────────────────────┘`
                        },
                        component: {
                            mermaid: `flowchart TD
    subgraph builder ["Builder &middot; vista de componentes"]
        direction LR
        canvas["<b>Canvas</b><br/><i>React</i><br/>DnD context + seleccion"]
        palette["<b>BlockPalette</b><br/><i>React</i><br/>30+ bloques + filtros"]
        tree["<b>BlockTree</b><br/><i>Zustand</i><br/>store + history"]
        inspector["<b>Inspector</b><br/><i>React</i><br/>props + bindings"]
        renderer["<b>Renderer</b><br/><i>iframe</i><br/>preview en vivo"]
    end

    palette -->|drag| canvas
    canvas -->|drop → mutate| tree
    tree -->|renderiza a| renderer
    tree -->|nodo seleccionado| inspector

    classDef component fill:#0D1117,stroke:#4ADE80,color:#E5E7EB

    class canvas,palette,tree,inspector,renderer component

    style builder fill:transparent,stroke:#4ADE80,stroke-dasharray:4 4,color:#E5E7EB`,
                            ascii: `┌────────────────────────────────────────────────────┐
│           Builder · vista de componentes           │
│                                                    │
│   ┌──────────────┐       ┌──────────────────┐      │
│   │  Canvas      │◀──┐   │  BlockPalette    │      │
│   │  · DnD ctx   │   │   │  · 30+ bloques   │      │
│   │  · seleccion │   │   │  · filtros       │      │
│   └──────┬───────┘   │   └────────┬─────────┘      │
│          │ drop     drag          │ drag           │
│          ▼           │            ▼                │
│   ┌──────────────┐   │   ┌──────────────────┐      │
│   │  BlockTree   │───┘   │  Inspector       │      │
│   │  Zustand     │       │  · props         │      │
│   │  history     │       │  · bindings      │      │
│   └──────────────┘       └──────────────────┘      │
│          │                       │                 │
│          ▼                       ▼                 │
│   ┌──────────────────────────────────────┐         │
│   │     Renderer (iframe preview)        │         │
│   └──────────────────────────────────────┘         │
└────────────────────────────────────────────────────┘`
                        }
                    },
                    infrastructure: {
                        provider: "Vercel + AWS + Neon",
                        services: [
                            "Vercel Edge (Next.js ISR, edge middleware)",
                            "Vercel Functions (Node runtime, llamadas a OpenAI)",
                            "Neon Postgres (branch-per-PR, pooled connections)",
                            "AWS S3 + CloudFront (assets de usuario, exports HTML)",
                            "Upstash Redis (rate limit, cola de generacion)",
                            "Stripe (billing + customer portal)",
                            "Sentry (errores), PostHog (analytics + flags)"
                        ],
                        diagram: {
                            mermaid: `flowchart TD
    user([User]) --> dns[Cloudflare DNS]
    dns --> edge["Vercel Edge<br/>Next.js + ISR<br/>Edge middleware"]
    edge --> db[("Neon Postgres<br/>pooled conns<br/>branch-per-PR")]
    edge --> s3["AWS S3 + CloudFront<br/>assets / exports"]
    edge --> fn["Vercel Functions<br/>Node runtime<br/>cron + colas"]
    db --> drizzle["Drizzle ORM<br/>migraciones"]
    fn --> external["OpenAI / Stripe<br/>APIs externas"]

    classDef edge fill:#0D1117,stroke:#4ADE80,color:#E5E7EB
    classDef ext fill:#111827,stroke:#374151,color:#9CA3AF
    classDef db fill:#0D1117,stroke:#06B6D4,color:#E5E7EB

    class user,dns ext
    class edge,fn edge
    class s3,external ext
    class db,drizzle db`,
                            ascii: `                    ┌─────────────────┐
   user ──────▶     │  Cloudflare DNS │
                    └────────┬────────┘
                             ▼
                  ┌────────────────────┐
                  │   Vercel Edge      │
                  │  Next.js + ISR     │
                  │  Edge middleware   │
                  └─┬──────┬──────┬────┘
                    │      │      │
       ┌────────────┘      │      └────────────┐
       ▼                   ▼                   ▼
┌──────────────┐    ┌────────────┐    ┌────────────────┐
│ Neon Postgres│    │  AWS S3    │    │ Vercel Fn      │
│ pooled conns │    │ +CloudFront│    │ Node runtime   │
│ branch-per-PR│    │ assets/CDN │    │ cron + colas   │
└──────┬───────┘    └────────────┘    └────────┬───────┘
       │                                       │
       ▼                                       ▼
┌──────────────┐                    ┌──────────────────┐
│ Drizzle ORM  │                    │ OpenAI / Stripe  │
│ migraciones  │                    │  APIs externas   │
└──────────────┘                    └──────────────────┘`
                        }
                    },
                    stack: {
                        frontend: ["Next.js 14 (App Router)", "React 19", "TypeScript", "Tailwind CSS", "dnd-kit", "Zustand", "Radix UI"],
                        backend: ["Node 20 / Edge Runtime", "tRPC", "Zod", "Drizzle ORM"],
                        data: ["PostgreSQL (Neon)", "Upstash Redis", "AWS S3"],
                        ai: ["OpenAI gpt-4o-mini (copy)", "Embeddings (layouts similares)", "Structured outputs (Zod)"],
                        devops: ["Vercel", "GitHub Actions", "Sentry", "PostHog", "Stripe"]
                    },
                    codeHighlights: [
                        {
                            file: "app/api/copy/route.ts",
                            lang: "typescript",
                            note: "Generacion de copy con structured outputs (Zod) — sin parseo fragil",
                            code: `import { z } from "zod";
import { openai } from "@/lib/ai";

const Headline = z.object({
  hero: z.string().max(80),
  sub:  z.string().max(160),
  cta:  z.string().max(24),
});

export async function POST(req: Request) {
  const { goal, audience } = await req.json();

  const { hero, sub, cta } = await openai.chat.complete({
    model:  "gpt-4o-mini",
    schema: Headline,
    system: "You write punchy landing copy. No fluff.",
    prompt: \`Goal: \${goal}\\nAudience: \${audience}\`,
  });

  return Response.json({ hero, sub, cta });
}`
                        },
                        {
                            file: "lib/builder/use-tree.ts",
                            lang: "typescript",
                            note: "Mutaciones batched en Zustand para mantener el frame budget < 16ms",
                            code: `import { create } from "zustand";
import { temporal } from "zundo";

type Tree = { blocks: Block[]; selected?: string };

export const useTree = create(temporal<Tree>((set) => ({
  blocks: [],
  move: (id, to) => set((s) => ({
    blocks: reorder(s.blocks, id, to),
  })),
  patch: (id, props) => set((s) => ({
    blocks: s.blocks.map((b) =>
      b.id === id ? { ...b, props: { ...b.props, ...props } } : b
    ),
  })),
})));`
                        }
                    ],
                    techChallenges: [
                        {
                            tags: ["frontend", "performance", "react"],
                            problem: "Preview en vivo a 60fps con 100+ bloques arrastrables",
                            constraint: "Frame budget < 16ms, no podemos dropear ni un frame al arrastrar; el arbol puede tener bloques anidados (sections > columns > blocks).",
                            approach: "Virtualizar el arbol de bloques fuera del viewport y agrupar mutaciones de Zustand en un solo set por RAF, evitando re-renders en cascada.",
                            algorithm: "Virtualizacion lineal con IntersectionObserver + batching via requestAnimationFrame. Selectores con shallow-equality (zustand/shallow) para que solo se rerenderee la rama tocada.",
                            codeFile: "lib/builder/batch-mutations.ts",
                            codeLang: "typescript",
                            code: `// Coalesce mutations within one frame
let queued: ((s: TreeState) => TreeState) | null = null;
let scheduled = false;

export function batch(fn: (s: TreeState) => TreeState) {
  const prev = queued;
  queued = (s) => fn(prev ? prev(s) : s);

  if (!scheduled) {
    scheduled = true;
    requestAnimationFrame(() => {
      const apply = queued!;
      queued = null;
      scheduled = false;
      useTree.setState(apply);
    });
  }
}`,
                            outcome: "60fps sostenido (p99 8ms por mutacion) con arboles de 80+ secciones. CPU profile en Chrome paso de 24% a 6% durante drag."
                        },
                        {
                            tags: ["ai", "backend", "reliability"],
                            problem: "Generar copy con IA sin parsing fragil ni errores de formato",
                            constraint: "Tipado fuerte entre el modelo y el cliente. No podemos aceptar JSON mal formado, texto preambular ni emoji sorpresa en el headline.",
                            approach: "Structured Outputs de OpenAI: el modelo es forzado a emitir un objeto que valida contra un schema Zod en el server. Si no valida, retry con backoff exponencial + jitter.",
                            algorithm: "Schema-driven generation (Zod → JSON Schema → response_format). Retry exponencial con jitter base 200ms, factor 2, cap 3 intentos.",
                            codeFile: "app/api/copy/route.ts",
                            codeLang: "typescript",
                            code: `const Headline = z.object({
  hero: z.string().min(8).max(80),
  sub:  z.string().min(20).max(160),
  cta:  z.string().min(2).max(24),
});

async function withRetry<T>(fn: () => Promise<T>, max = 3) {
  for (let i = 0; i < max; i++) {
    try { return await fn(); }
    catch (e) {
      if (i === max - 1) throw e;
      const wait = 200 * 2 ** i + Math.random() * 100;
      await new Promise((r) => setTimeout(r, wait));
    }
  }
  throw new Error("unreachable");
}`,
                            outcome: "0% errores de parsing en 30 dias (antes: 4%). Latencia p95 1.2s con cache de prompts identicos en Upstash."
                        },
                        {
                            tags: ["frontend", "dnd", "algorithms"],
                            problem: "Drag & drop entre contenedores anidados (section > column > block) sin colisiones erradas",
                            constraint: "dnd-kit asume drop targets planos; el builder tiene jerarquia. Soltar 'cerca del borde' debe priorizar el padre, no el hijo, salvo si el cursor entra al rectangulo del hijo.",
                            approach: "Collision detection custom: primero pointer-within (puntero dentro del rect) por profundidad descendente. Si nadie matchea, fallback a closest-center con priorizacion por profundidad menor (gana el padre).",
                            algorithm: "Hierarchical hit-testing: pointer-within DFS + closest-center con depth-tiebreak. Complejidad O(n) sobre los droppables visibles.",
                            codeFile: "lib/builder/collision.ts",
                            codeLang: "typescript",
                            code: `export const hierarchicalCollision: CollisionDetection = (args) => {
  // 1) pointer-within, deepest first
  const within = pointerWithin(args)
    .sort((a, b) => depth(b.id) - depth(a.id));
  if (within.length) return within;

  // 2) closest-center, but parent wins on ties
  return closestCenter(args).sort((a, b) => {
    const da = depth(a.id), db = depth(b.id);
    if (Math.abs(a.data!.value - b.data!.value) < 8) return da - db;
    return a.data!.value - b.data!.value;
  });
};`,
                            outcome: "0 drops fallidos en suite E2E (200+ casos). Tiempo de drop p95 60ms, sensacion de 'pegado' al puntero confirmada en pruebas con usuarios."
                        },
                        {
                            tags: ["build", "performance", "ssr"],
                            problem: "Servir landings publicadas con <40KB de JS para que el LCP sea sub-segundo",
                            constraint: "El editor usa React + Zustand pesado, pero la landing publicada no necesita interactividad excepto en bloques especificos (forms, carousels).",
                            approach: "Cada bloque declara island: 'static' | 'interactive' en su schema. Al exportar, se camina el arbol y solo los interactive emiten su bundle hidratable; los static se renderizan a HTML puro.",
                            algorithm: "Tree-shaking de hydration: walking del AST de bloques, particionando en sub-arboles static/interactive antes de pasar al renderer. Inspirado en 'islands architecture' (Astro/Marko).",
                            codeFile: "lib/export/partition.ts",
                            codeLang: "typescript",
                            code: `export function partitionIslands(tree: BlockTree): {
  staticHtml: string;
  islands: { id: string; props: any }[];
} {
  const islands: any[] = [];

  function walk(node: Block): string {
    if (node.schema.island === "interactive") {
      islands.push({ id: node.id, props: node.props });
      return \`<div data-island="\${node.id}"></div>\`;
    }
    return renderStatic(node, node.children?.map(walk).join("") ?? "");
  }

  return { staticHtml: walk(tree.root), islands };
}`,
                            outcome: "Mediana de JS shipped: 38KB (antes: 280KB). LCP en edge global p75 0.7s, score Lighthouse perf 98."
                        }
                    ],
                    testing: {
                        strategy: "Piramide clasica:\n- Unit (Vitest) en logica pura y reducers del builder\n- Integration (Playwright component) en cada bloque\n- E2E (Playwright) en flujos criticos: signup, publish, billing\n- Contract tests para webhooks de Stripe\n- Lighthouse CI por PR en landings generadas (perf budget)",
                        coverage: "84%",
                        tools: ["Vitest", "Playwright", "MSW", "Lighthouse CI", "GitHub Actions"]
                    },
                    metrics: [
                        { value: "<2 min", label: "idea → landing publicada" },
                        { value: "30+",    label: "bloques disponibles" },
                        { value: "84%",    label: "cobertura de tests" },
                        { value: "99.9%",  label: "uptime ultimo trimestre" }
                    ],
                    challenges: "Mantener el preview en vivo sin lag mientras se arrastran bloques, garantizar generacion de copy tipada y servir landings con bundle minimo. Los detalles tecnicos estan documentados arriba en la seccion 06.",
                    results: "Los usuarios van de idea a landing publicada en menos de dos minutos. El generador de copy cubre el bloqueo mas comun ('que escribir') y los exports estaticos via ISR se sirven a <50ms desde el edge global.",
                    lessons: [
                        {
                            title: "Apostar a Structured Outputs desde el dia uno",
                            body: "El primer prototipo parseaba JSON 'a mano' y el 4% de las generaciones se rompian con preambulos o emojis. Migrar a response_format con Zod schemas tomo medio dia y eliminö el problema completamente. Lo haria desde el commit cero."
                        },
                        {
                            title: "El builder se siente lento mucho antes que los benchmarks lo digan",
                            body: "Lighthouse decia 'todo OK' mientras los usuarios reportaban arrastres pegajosos. Aprendi a confiar primero en el frame-profiler de Chrome y en sesiones reales. Los promedios escondian p99 de 40ms."
                        },
                        {
                            title: "Islands architecture > full hydration por defecto",
                            body: "Mover bloques a 'static por defecto, interactive opt-in' redujo 7x el JS shipped. Si lo hiciera de nuevo, definiria ese contrato en el sistema de diseño antes de escribir el primer bloque, no despues."
                        }
                    ]
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
                    figmaUrl: "#",
                    githubUrl: "https://github.com/automatape2/landingpager",
                    type: "product",
                    year: "2025",
                    role: "Design · FE · BE · Infra",
                    timeline: "8-week MVP",
                    team: "Solo founder + 1 freelance designer",
                    fullDescription: "SaaS platform that lets any founder or growth team publish a professional landing page in under two minutes. Combines a visual drag & drop editor with AI-generated copy and edge-served ISR. Covers the full cycle: discovery, design, architecture, build, testing, deploy and observability.",
                    problem: "Webflow and Framer are expensive and have a steep learning curve. Simple builders don't solve the hardest part — what to write. Time-to-launch balloons once you add copywriting and design costs.",
                    audience: "LATAM founders, marketing freelancers, growth teams at early-stage startups that need to validate an offer fast, without hiring an agency.",
                    designTools: ["Figma", "FigJam", "Excalidraw", "Tokens Studio"],
                    designSystem: [
                        "Figma tokens synced to CSS via Tokens Studio",
                        "30+ blocks (hero, pricing, testimonials, FAQ, CTA, logos)",
                        "Light/dark variants per block",
                        "AA accessibility by default (contrast, focus, ARIA)",
                        "Fluid typography (clamp) and 4px grid"
                    ],
                    architecture: {
                        context: {
                            mermaid: `flowchart TD
    user((("Marketer / Small business<br/><i>wants to validate offer fast</i>")))
    sys["<b>LandingPager.ai</b><br/><i>SaaS landing builder</i><br/>with AI + drag/drop"]
    openai["<b>OpenAI API</b><br/><i>generates copy and sections</i>"]
    s3["<b>AWS S3 + CDN</b><br/><i>user assets</i>"]
    stripe["<b>Stripe</b><br/><i>billing + customer portal</i>"]

    user -->|describes goal, publishes landing| sys
    sys -->|generates copy via| openai
    sys -->|stores assets in| s3
    sys -->|bills via| stripe

    classDef person fill:#0D1117,stroke:#4ADE80,color:#E5E7EB
    classDef system fill:#0D1117,stroke:#06B6D4,color:#E5E7EB,stroke-width:1.5px
    classDef ext fill:#111827,stroke:#6B7280,color:#9CA3AF

    class user person
    class sys system
    class openai,s3,stripe ext`,
                            ascii: `                  ┌──────────────────┐
                  │   Marketer /     │
                  │   Small business │
                  └─────────┬────────┘
                            │ describes goal
                            ▼
              ┌───────────────────────────┐
              │     LandingPager.ai       │
              │    SaaS landing builder   │
              │    with AI + drag/drop    │
              └──┬───────┬───────┬────────┘
                 │       │       │
                 ▼       ▼       ▼
          ┌────────┐ ┌──────┐ ┌────────┐
          │ OpenAI │ │ S3 + │ │ Stripe │
          │  API   │ │ CDN  │ │ Billing│
          └────────┘ └──────┘ └────────┘`
                        },
                        container: {
                            mermaid: `flowchart TD
    user((("Marketer")))

    subgraph lp ["LandingPager.ai"]
        direction LR
        web["<b>Web App</b><br/><i>Next.js 14, React/TS</i><br/>main UI"]
        api["<b>API Routes</b><br/><i>Edge + Node, tRPC + Zod</i><br/>typed endpoints"]
        builder["<b>Builder iframe</b><br/><i>dnd-kit + realtime</i><br/>visual editor"]
        db[("<b>PostgreSQL</b><br/><i>Neon, Drizzle ORM</i><br/>project data")]
    end

    openai["<b>OpenAI gpt-4o</b><br/><i>copy + sections</i>"]

    user -->|uses &middot; HTTPS| web
    web -->|calls &middot; tRPC| api
    api -->|R/W| db
    api -->|generates copy| openai
    web -->|renders preview| builder

    classDef person fill:#0D1117,stroke:#4ADE80,color:#E5E7EB
    classDef container fill:#0D1117,stroke:#06B6D4,color:#E5E7EB
    classDef db fill:#0D1117,stroke:#06B6D4,color:#E5E7EB
    classDef ext fill:#111827,stroke:#6B7280,color:#9CA3AF

    class user person
    class web,api,builder container
    class db db
    class openai ext

    style lp fill:transparent,stroke:#4ADE80,stroke-dasharray:4 4,color:#E5E7EB`,
                            ascii: `┌──────────────────────────────────────────────────────┐
│                  LandingPager.ai                     │
│                                                      │
│  ┌──────────────┐         ┌────────────────────┐     │
│  │  Web App     │ ───────▶│   API Routes       │     │
│  │  Next.js 14  │ HTTPS   │  Edge + Node       │     │
│  │  React/TS    │         │   tRPC + Zod       │     │
│  └──────┬───────┘         └────────┬───────────┘     │
│         │ render/preview           │                 │
│         ▼                          ▼                 │
│  ┌──────────────┐         ┌────────────────────┐     │
│  │ Builder iframe│        │  Postgres (Neon)   │     │
│  │ dnd-kit + RT │         │  Drizzle ORM       │     │
│  └──────────────┘         └────────────────────┘     │
│                                    │                 │
│                                    ▼                 │
│                           ┌────────────────────┐     │
│                           │  OpenAI gpt-4o     │     │
│                           │  copy + sections   │     │
│                           └────────────────────┘     │
└──────────────────────────────────────────────────────┘`
                        },
                        component: {
                            mermaid: `flowchart TD
    subgraph builder ["Builder &middot; component view"]
        direction LR
        canvas["<b>Canvas</b><br/><i>React</i><br/>DnD context + selection"]
        palette["<b>BlockPalette</b><br/><i>React</i><br/>30+ blocks + filters"]
        tree["<b>BlockTree</b><br/><i>Zustand</i><br/>store + history"]
        inspector["<b>Inspector</b><br/><i>React</i><br/>props + bindings"]
        renderer["<b>Renderer</b><br/><i>iframe</i><br/>live preview"]
    end

    palette -->|drag| canvas
    canvas -->|drop → mutate| tree
    tree -->|renders to| renderer
    tree -->|selected node| inspector

    classDef component fill:#0D1117,stroke:#4ADE80,color:#E5E7EB

    class canvas,palette,tree,inspector,renderer component

    style builder fill:transparent,stroke:#4ADE80,stroke-dasharray:4 4,color:#E5E7EB`,
                            ascii: `┌────────────────────────────────────────────────────┐
│             Builder · Component view               │
│                                                    │
│   ┌──────────────┐       ┌──────────────────┐      │
│   │  Canvas      │◀──┐   │  BlockPalette    │      │
│   │  · DnD ctx   │   │   │  · 30+ blocks    │      │
│   │  · selection │   │   │  · filters       │      │
│   └──────┬───────┘   │   └────────┬─────────┘      │
│          │ drop     drag          │ drag           │
│          ▼           │            ▼                │
│   ┌──────────────┐   │   ┌──────────────────┐      │
│   │  BlockTree   │───┘   │  Inspector       │      │
│   │  Zustand     │       │  · props         │      │
│   │  history     │       │  · bindings      │      │
│   └──────────────┘       └──────────────────┘      │
│          │                       │                 │
│          ▼                       ▼                 │
│   ┌──────────────────────────────────────┐         │
│   │     Renderer (iframe preview)        │         │
│   └──────────────────────────────────────┘         │
└────────────────────────────────────────────────────┘`
                        }
                    },
                    infrastructure: {
                        provider: "Vercel + AWS + Neon",
                        services: [
                            "Vercel Edge (Next.js ISR, edge middleware)",
                            "Vercel Functions (Node runtime for OpenAI calls)",
                            "Neon Postgres (branch-per-PR, pooled connections)",
                            "AWS S3 + CloudFront (user assets, exported HTML)",
                            "Upstash Redis (rate limiting, generation queue)",
                            "Stripe (billing + customer portal)",
                            "Sentry (errors), PostHog (analytics + flags)"
                        ],
                        diagram: {
                            mermaid: `flowchart TD
    user([User]) --> dns[Cloudflare DNS]
    dns --> edge["Vercel Edge<br/>Next.js + ISR<br/>Edge middleware"]
    edge --> db[("Neon Postgres<br/>pooled conns<br/>branch-per-PR")]
    edge --> s3["AWS S3 + CloudFront<br/>assets / exports"]
    edge --> fn["Vercel Functions<br/>Node runtime<br/>cron + queues"]
    db --> drizzle["Drizzle ORM<br/>migrations"]
    fn --> external["OpenAI / Stripe<br/>external APIs"]

    classDef edge fill:#0D1117,stroke:#4ADE80,color:#E5E7EB
    classDef ext fill:#111827,stroke:#374151,color:#9CA3AF
    classDef db fill:#0D1117,stroke:#06B6D4,color:#E5E7EB

    class user,dns ext
    class edge,fn edge
    class s3,external ext
    class db,drizzle db`,
                            ascii: `                    ┌─────────────────┐
   user ──────▶     │  Cloudflare DNS │
                    └────────┬────────┘
                             ▼
                  ┌────────────────────┐
                  │   Vercel Edge      │
                  │  Next.js + ISR     │
                  │  Edge middleware   │
                  └─┬──────┬──────┬────┘
                    │      │      │
       ┌────────────┘      │      └────────────┐
       ▼                   ▼                   ▼
┌──────────────┐    ┌────────────┐    ┌────────────────┐
│ Neon Postgres│    │  AWS S3    │    │ Vercel Fn      │
│ pooled conns │    │ +CloudFront│    │ Node runtime   │
│ branch-per-PR│    │ assets/CDN │    │ cron + queues  │
└──────┬───────┘    └────────────┘    └────────┬───────┘
       │                                       │
       ▼                                       ▼
┌──────────────┐                    ┌──────────────────┐
│ Drizzle ORM  │                    │ OpenAI / Stripe  │
│ migrations   │                    │  external APIs   │
└──────────────┘                    └──────────────────┘`
                        }
                    },
                    stack: {
                        frontend: ["Next.js 14 (App Router)", "React 19", "TypeScript", "Tailwind CSS", "dnd-kit", "Zustand", "Radix UI"],
                        backend: ["Node 20 / Edge Runtime", "tRPC", "Zod", "Drizzle ORM"],
                        data: ["PostgreSQL (Neon)", "Upstash Redis", "AWS S3"],
                        ai: ["OpenAI gpt-4o-mini (copy)", "Embeddings (similar layouts)", "Structured outputs (Zod)"],
                        devops: ["Vercel", "GitHub Actions", "Sentry", "PostHog", "Stripe"]
                    },
                    codeHighlights: [
                        {
                            file: "app/api/copy/route.ts",
                            lang: "typescript",
                            note: "Copy generation with structured outputs (Zod) — no fragile parsing",
                            code: `import { z } from "zod";
import { openai } from "@/lib/ai";

const Headline = z.object({
  hero: z.string().max(80),
  sub:  z.string().max(160),
  cta:  z.string().max(24),
});

export async function POST(req: Request) {
  const { goal, audience } = await req.json();

  const { hero, sub, cta } = await openai.chat.complete({
    model:  "gpt-4o-mini",
    schema: Headline,
    system: "You write punchy landing copy. No fluff.",
    prompt: \`Goal: \${goal}\\nAudience: \${audience}\`,
  });

  return Response.json({ hero, sub, cta });
}`
                        },
                        {
                            file: "lib/builder/use-tree.ts",
                            lang: "typescript",
                            note: "Batched Zustand mutations to keep the frame budget under 16ms",
                            code: `import { create } from "zustand";
import { temporal } from "zundo";

type Tree = { blocks: Block[]; selected?: string };

export const useTree = create(temporal<Tree>((set) => ({
  blocks: [],
  move: (id, to) => set((s) => ({
    blocks: reorder(s.blocks, id, to),
  })),
  patch: (id, props) => set((s) => ({
    blocks: s.blocks.map((b) =>
      b.id === id ? { ...b, props: { ...b.props, ...props } } : b
    ),
  })),
})));`
                        }
                    ],
                    techChallenges: [
                        {
                            tags: ["frontend", "performance", "react"],
                            problem: "60fps live preview with 100+ draggable blocks",
                            constraint: "Frame budget < 16ms — can't drop a single frame while dragging; tree can be deeply nested (sections > columns > blocks).",
                            approach: "Virtualize off-screen blocks and coalesce Zustand mutations into a single per-frame setState, avoiding cascading re-renders.",
                            algorithm: "Linear virtualization via IntersectionObserver + batching with requestAnimationFrame. Selectors use shallow-equality (zustand/shallow) so only the touched branch re-renders.",
                            codeFile: "lib/builder/batch-mutations.ts",
                            codeLang: "typescript",
                            code: `// Coalesce mutations within one frame
let queued: ((s: TreeState) => TreeState) | null = null;
let scheduled = false;

export function batch(fn: (s: TreeState) => TreeState) {
  const prev = queued;
  queued = (s) => fn(prev ? prev(s) : s);

  if (!scheduled) {
    scheduled = true;
    requestAnimationFrame(() => {
      const apply = queued!;
      queued = null;
      scheduled = false;
      useTree.setState(apply);
    });
  }
}`,
                            outcome: "Sustained 60fps (p99 8ms per mutation) on 80+ section trees. Chrome CPU profile dropped from 24% to 6% during drag."
                        },
                        {
                            tags: ["ai", "backend", "reliability"],
                            problem: "Generate landing copy with AI without fragile parsing or format errors",
                            constraint: "Strong typing from the model to the client. No malformed JSON, no preamble text, no surprise emoji in headlines.",
                            approach: "OpenAI Structured Outputs: the model is forced to emit an object that validates against a Zod schema on the server. If it doesn't validate, exponential-backoff retry with jitter.",
                            algorithm: "Schema-driven generation (Zod → JSON Schema → response_format). Exponential retry with jitter, base 200ms, factor 2, cap 3 attempts.",
                            codeFile: "app/api/copy/route.ts",
                            codeLang: "typescript",
                            code: `const Headline = z.object({
  hero: z.string().min(8).max(80),
  sub:  z.string().min(20).max(160),
  cta:  z.string().min(2).max(24),
});

async function withRetry<T>(fn: () => Promise<T>, max = 3) {
  for (let i = 0; i < max; i++) {
    try { return await fn(); }
    catch (e) {
      if (i === max - 1) throw e;
      const wait = 200 * 2 ** i + Math.random() * 100;
      await new Promise((r) => setTimeout(r, wait));
    }
  }
  throw new Error("unreachable");
}`,
                            outcome: "0% parsing errors over 30 days (down from 4%). p95 latency 1.2s with prompt-cache hits on Upstash."
                        },
                        {
                            tags: ["frontend", "dnd", "algorithms"],
                            problem: "Drag & drop across nested containers (section > column > block) without misfires",
                            constraint: "dnd-kit assumes flat drop targets; the builder has hierarchy. Dropping 'near the edge' must prefer the parent — unless the cursor is inside the child's rect.",
                            approach: "Custom collision detection: first pointer-within (cursor inside rect) walked deepest-first. If nothing matches, fall back to closest-center with depth tie-breaking (parent wins close ties).",
                            algorithm: "Hierarchical hit-testing: pointer-within DFS + closest-center with depth tie-break. O(n) over visible droppables.",
                            codeFile: "lib/builder/collision.ts",
                            codeLang: "typescript",
                            code: `export const hierarchicalCollision: CollisionDetection = (args) => {
  // 1) pointer-within, deepest first
  const within = pointerWithin(args)
    .sort((a, b) => depth(b.id) - depth(a.id));
  if (within.length) return within;

  // 2) closest-center, parent wins on near-ties
  return closestCenter(args).sort((a, b) => {
    const da = depth(a.id), db = depth(b.id);
    if (Math.abs(a.data!.value - b.data!.value) < 8) return da - db;
    return a.data!.value - b.data!.value;
  });
};`,
                            outcome: "0 mis-drops across 200+ E2E cases. p95 drop time 60ms; the 'stuck-to-cursor' feel was validated in user testing."
                        },
                        {
                            tags: ["build", "performance", "ssr"],
                            problem: "Serve published landings with <40KB JS so LCP stays sub-second",
                            constraint: "The editor ships heavy React + Zustand, but the published landing only needs interactivity inside specific blocks (forms, carousels).",
                            approach: "Each block declares island: 'static' | 'interactive' in its schema. On export, the tree is walked and only interactive blocks emit hydratable bundles; static blocks render to plain HTML.",
                            algorithm: "Hydration tree-shaking: walk the block AST, partition into static/interactive sub-trees before passing to the renderer. Inspired by 'islands architecture' (Astro/Marko).",
                            codeFile: "lib/export/partition.ts",
                            codeLang: "typescript",
                            code: `export function partitionIslands(tree: BlockTree): {
  staticHtml: string;
  islands: { id: string; props: any }[];
} {
  const islands: any[] = [];

  function walk(node: Block): string {
    if (node.schema.island === "interactive") {
      islands.push({ id: node.id, props: node.props });
      return \`<div data-island="\${node.id}"></div>\`;
    }
    return renderStatic(node, node.children?.map(walk).join("") ?? "");
  }

  return { staticHtml: walk(tree.root), islands };
}`,
                            outcome: "Median JS shipped: 38KB (down from 280KB). Global-edge LCP p75 0.7s, Lighthouse perf score 98."
                        }
                    ],
                    testing: {
                        strategy: "Classic pyramid:\n- Unit (Vitest) on pure logic and builder reducers\n- Integration (Playwright component) on every block\n- E2E (Playwright) on critical flows: signup, publish, billing\n- Contract tests for Stripe webhooks\n- Lighthouse CI per PR on generated landings (perf budget)",
                        coverage: "84%",
                        tools: ["Vitest", "Playwright", "MSW", "Lighthouse CI", "GitHub Actions"]
                    },
                    metrics: [
                        { value: "<2 min", label: "idea → published" },
                        { value: "30+",    label: "blocks available" },
                        { value: "84%",    label: "test coverage" },
                        { value: "99.9%",  label: "uptime last quarter" }
                    ],
                    challenges: "Keeping live preview lag-free, ensuring typed AI copy generation, and serving landings with a minimal bundle. The technical breakdowns are documented above in section 06.",
                    results: "Users go from idea to a published landing in under two minutes. The AI copy generator removes the most common blocker ('what to write'), and ISR-served static exports respond in <50ms from the global edge.",
                    lessons: [
                        {
                            title: "Bet on Structured Outputs from day one",
                            body: "The first prototype parsed JSON by hand and ~4% of generations broke on preambles or surprise emoji. Migrating to response_format with Zod schemas took half a day and eliminated the failure mode entirely. Would do it from commit zero."
                        },
                        {
                            title: "The builder feels slow long before benchmarks say so",
                            body: "Lighthouse said 'all green' while users reported sticky drags. I learned to trust Chrome's frame profiler and real sessions first. Averages were hiding a p99 of 40ms."
                        },
                        {
                            title: "Islands > full hydration as the default",
                            body: "Switching blocks to 'static by default, interactive opt-in' cut shipped JS by 7×. Next time I'd encode that contract in the design system before writing the first block, not after."
                        }
                    ]
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

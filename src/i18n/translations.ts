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
                    slug: "automata-portfolio",
                    title: "Automata Portfolio",
                    description: "Este mismo sitio: portfolio + case studies con estetica terminal, diagramas C4 Mermaid en vivo, Cmd+K, syntax highlighting server-side y deploy estatico.",
                    tech: ["Astro", "TypeScript", "Tailwind CSS", "Mermaid", "Shiki", "GSAP"],
                    image: landingpagerImage,
                    demoUrl: "https://automata.pe",
                    githubUrl: "https://github.com/automatape2/automata.pe",
                    type: "producto",
                    year: "2026",
                    role: "Diseño · FE · Infra · Contenido",
                    timeline: "1 semana (sprints con Claude Code)",
                    team: "Solo founder + LLM pair",
                    fullDescription: "Portfolio que funciona como case-study template reutilizable. Cada proyecto rendea su propia pagina con discovery, design, arquitectura C4, infra, implementacion, technical challenges, testing y resultados — todo desde un solo objeto en translations.ts. La estetica terminal (mono everywhere, $/▸/// prompts, paleta verde/cyan/negro) atraviesa cada componente para que el medio sea el mensaje: 'soy un ingeniero que envia codigo'.",
                    problem: "Webflow y Notion-as-portfolio se ven igual que los de todos. Linktree no muestra profundidad tecnica. Necesitaba un sitio que fuera evidencia de craft en vez de catalogo de skills, y que escalara sin pagar por bloque cada proyecto nuevo.",
                    audience: "Clientes potenciales (CTOs y founders LATAM) que evaluan si confiar sus proyectos a Automata, mas recruiters tecnicos que necesitan ver depth real en menos de 5 minutos.",
                    designTools: ["Figma (mockups iniciales)", "VS Code (design-in-code)", "Excalidraw (C4 sketches)"],
                    designSystem: [
                        "JetBrains Mono en todo el sitio, font-feature-settings activos",
                        "Paleta: #000 / #0D1117 panel / #4ADE80 green / #06B6D4 cyan / #FBBF24 amber",
                        "Markers ▸ ○ $ // como puntuacion del lenguaje visual",
                        "Window-chrome (dots ● ● ●) en cada panel relevante",
                        "Border-color como hover state principal (sin shadows ni gradients)"
                    ],
                    architecture: {
                        context: {
                            mermaid: `flowchart TD
    user((("Visitor / Recruiter<br/><i>evalua depth tecnica</i>")))
    sys["<b>automata.pe</b><br/><i>Astro SSG</i><br/>portfolio + case studies"]
    github["<b>GitHub API</b><br/><i>stars, forks, last commit</i>"]
    formspree["<b>Formspree</b><br/><i>contact form backend</i>"]
    cal["<b>Cal.com</b><br/><i>book intro call</i>"]
    plausible["<b>Plausible</b><br/><i>analytics</i>"]

    user -->|browse / Cmd+K| sys
    sys -->|fetch stats client-side| github
    sys -->|POST contact form| formspree
    sys -->|deep link| cal
    sys -->|page views| plausible

    classDef person fill:#0D1117,stroke:#4ADE80,color:#E5E7EB
    classDef system fill:#0D1117,stroke:#06B6D4,color:#E5E7EB,stroke-width:1.5px
    classDef ext fill:#111827,stroke:#6B7280,color:#9CA3AF

    class user person
    class sys system
    class github,formspree,cal,plausible ext`,
                            ascii: ""
                        },
                        container: {
                            mermaid: `flowchart TD
    visitor((("Visitor")))

    subgraph site ["automata.pe (build output)"]
        direction LR
        landing["<b>/ (Landing)</b><br/><i>Hero, Services, Solutions, Tech, Contact</i>"]
        index["<b>/projects</b><br/><i>type + tech filters</i>"]
        detail["<b>/projects/[slug]</b><br/><i>10 sections case study</i>"]
        og["<b>/og/[slug].svg</b><br/><i>dynamic OG image</i>"]
        feeds["<b>/sitemap.xml<br/>/rss.xml<br/>/robots.txt</b>"]
    end

    cdn["<b>CDN / Edge</b><br/><i>Cloudflare / Vercel</i>"]
    ghapi["<b>GitHub API</b>"]
    formspree["<b>Formspree</b>"]

    visitor --> cdn
    cdn --> landing
    cdn --> index
    cdn --> detail
    detail --> ghapi
    detail --> formspree

    classDef person fill:#0D1117,stroke:#4ADE80,color:#E5E7EB
    classDef container fill:#0D1117,stroke:#06B6D4,color:#E5E7EB
    classDef ext fill:#111827,stroke:#6B7280,color:#9CA3AF

    class visitor person
    class landing,index,detail,og,feeds container
    class cdn,ghapi,formspree ext

    style site fill:transparent,stroke:#4ADE80,stroke-dasharray:4 4,color:#E5E7EB`,
                            ascii: ""
                        },
                        component: {
                            mermaid: `flowchart TD
    subgraph projectDetail ["ProjectDetail.astro &middot; vista de componentes"]
        direction LR
        layout["<b>Layout</b><br/><i>OG, JSON-LD, hreflang</i>"]
        toc["<b>TableOfContents</b><br/><i>sticky + mobile drawer</i>"]
        master["<b>MasterDetail</b><br/><i>C4 sidebar picker</i>"]
        mermaid["<b>MermaidViewer</b><br/><i>view / source / share</i>"]
        carousel["<b>Carousel</b><br/><i>challenges slides</i>"]
        cmdk["<b>CommandPalette</b><br/><i>Cmd+K fuzzy nav</i>"]
        lightbox["<b>Lightbox</b><br/><i>screenshots</i>"]
    end

    layout --> toc
    layout --> master
    master --> mermaid
    layout --> carousel
    layout --> cmdk
    layout --> lightbox

    classDef component fill:#0D1117,stroke:#4ADE80,color:#E5E7EB

    class layout,toc,master,mermaid,carousel,cmdk,lightbox component

    style projectDetail fill:transparent,stroke:#4ADE80,stroke-dasharray:4 4,color:#E5E7EB`,
                            ascii: ""
                        }
                    },
                    infrastructure: {
                        provider: "Astro SSG + Edge CDN",
                        services: [
                            "Build: Astro 5 con sharp para imagenes",
                            "Static export: HTML + assets, sin Node runtime",
                            "Hosting: Vercel / Cloudflare Pages (cualquiera static)",
                            "DNS: Cloudflare con cache agresiva en /og/*, /sitemap.xml",
                            "Analytics: Plausible (sin cookies, GDPR)",
                            "Forms: Formspree (free tier soporta el volumen actual)",
                            "Embeds: mermaid lazy-load via esm.sh, shiki precompilado en build"
                        ],
                        diagram: {
                            mermaid: `flowchart TD
    dev[Developer]
    repo[GitHub repo]
    ci["GitHub Actions<br/>(future: lighthouse-ci)"]
    build["Astro build<br/>npm run build"]
    edge["Cloudflare / Vercel<br/>edge cache"]
    user[Visitor]

    dev -->|git push| repo
    repo -->|webhook| ci
    ci --> build
    build -->|deploy| edge
    user --> edge

    classDef edge fill:#0D1117,stroke:#4ADE80,color:#E5E7EB
    classDef ext fill:#111827,stroke:#374151,color:#9CA3AF

    class dev,user ext
    class build,edge edge
    class ci,repo ext`,
                            ascii: ""
                        }
                    },
                    stack: {
                        frontend: ["Astro 5 (SSG, content collections-ready)", "TypeScript", "Tailwind CSS 4", "GSAP + ScrollTrigger", "Lenis (smooth scroll)"],
                        backend: ["—", "(static, sin runtime)"],
                        data: ["translations.ts (in-memory)", "GitHub API (live fetch)", "Formspree (form submissions)"],
                        ai: ["Shiki (theming server-side)", "Mermaid (live diagram rendering)", "Claude Code (pair programming en cada sesion)"],
                        devops: ["Vercel / Cloudflare Pages", "Plausible analytics", "Sitemap + RSS autogenerados"]
                    },
                    codeHighlights: [
                        {
                            file: "src/components/ProjectDetail.astro",
                            lang: "typescript",
                            note: "Tema Shiki custom: el sitio resaltea su propio codigo con su propia paleta",
                            code: `const automataShikiTheme = {
  name: "automata",
  type: "dark",
  tokenColors: [
    { scope: ["keyword", "storage"],     settings: { foreground: "#4ADE80" } },
    { scope: ["string"],                  settings: { foreground: "#FBBF24" } },
    { scope: ["entity.name.type"],        settings: { foreground: "#06B6D4" } },
    { scope: ["comment"], settings: { foreground: "#6B7280", fontStyle: "italic" } },
  ],
};

// server-side en el frontmatter: cero JS al cliente
const codeHtml = await codeToHtml(code, { lang, theme: automataShikiTheme });`
                        },
                        {
                            file: "src/pages/og/[slug].svg.ts",
                            lang: "typescript",
                            note: "OG image por proyecto: SVG 1200x630 generado en build desde el record",
                            code: `export function getStaticPaths() {
  return translations.en.solutions.items.map((p) => ({ params: { slug: p.slug } }));
}

export const GET: APIRoute = ({ params }) => {
  const project = items.find((p) => p.slug === params.slug);
  const svg = renderOgCard(project); // terminal-chrome + title + tech stack
  return new Response(svg, { headers: { "Content-Type": "image/svg+xml" } });
};`
                        }
                    ],
                    techChallenges: [
                        {
                            tags: ["astro", "compiler", "patterns"],
                            problem: "Astro rechaza <slot name={dynamic} /> dentro de un .map(): compiler error",
                            constraint: "MasterDetail necesita renderear paneles distintos por item, pero Astro exige nombres de slot literales en parse-time.",
                            approach: "Inverti la responsabilidad: en lugar de slot-por-item, MasterDetail expone un solo default slot y los callers marcan sus paneles con data-md-key. El script en MasterDetail toggles visibility basandose en ese atributo.",
                            algorithm: "Inversion de control: render-prop-via-data-attribute en vez de named-slots. La logica de show/hide vive en el componente generico, el contenido en el caller.",
                            codeFile: "src/components/MasterDetail.astro",
                            codeLang: "astro",
                            code: `<!-- Genérico: no sabe ni le importa qué contenido va en cada pane -->
<div class="md-grid" data-masterdetail>
  <nav>{items.map((it, i) => (
    <button data-md-pick={it.key} data-active={i === 0}>{it.label}</button>
  ))}</nav>
  <div><slot /></div> <!-- caller pone los <div data-md-key="..."> -->
</div>

<!-- Caller: explícito y type-safe -->
<MasterDetail items={levels}>
  <div data-md-key="context"><MermaidViewer ... /></div>
  <div data-md-key="container" class="hidden"><MermaidViewer ... /></div>
</MasterDetail>`,
                            outcome: "Componente reusable, compile-time errors desaparecen, sintaxis del caller mas explicita (ve donde va cada pane)."
                        },
                        {
                            tags: ["frontend", "scroll", "css"],
                            problem: "Carousel con scroll-snap se pelea con Lenis smooth-scroll y vuelve siempre a slide 0",
                            constraint: "Queriamos scroll horizontal nativo, snap perfecto y compatibilidad con Lenis global. Las tres no se llevan.",
                            approach: "Abandonar scroll-snap + scrollLeft, pasar a transform: translateX(-N * 100%) sobre el track. El contenedor exterior tiene overflow:hidden, no scroll. Las flechas y dots solo cambian el indice y la transform.",
                            algorithm: "Carousel transform-based con state externo: el navegador no sabe que hay scroll, solo ve una traduccion. No conflictua con ningun scroll-jacker porque no hay scroll real.",
                            codeFile: "src/components/Carousel.astro",
                            codeLang: "typescript",
                            codeSandbox: "typescript",
                            code: `const update = (i: number) => {
    current = Math.max(0, Math.min(slides.length - 1, i));
    track.style.transform = \`translateX(-\${current * 100}%)\`;
    counter.textContent = String(current + 1).padStart(2, "0");
    dots.forEach((d, di) => d.setAttribute("data-active", String(di === current)));
    if (prev) prev.disabled = current === 0;
    if (next) next.disabled = current === slides.length - 1;
};`,
                            outcome: "0 conflictos con Lenis. Transicion 300ms con cubic-bezier ease-out se siente nativa, prev/next + arrow keys + dots todos consistentes."
                        },
                        {
                            tags: ["css", "grid", "shiki"],
                            problem: "Grid con un panel sticky y otro con code highlights explota el viewport horizontal",
                            constraint: "Layout master-detail con sidebar 200px + contenido 1fr. Los <pre> de Shiki con lineas largas hacen overflow y rompen el grid.",
                            approach: "El default min-width:auto en grid items les permite crecer al tamaño de su contenido — no a 1fr puro. Cambiar a minmax(0, 1fr) en el grid-template-columns + min-w-0 en el item lo soluciona.",
                            algorithm: "CSS grid 101: min-width:auto vs minmax(0, 1fr). Un detalle que rompe la mayoria de layouts con code blocks adentro.",
                            codeFile: "src/components/ProjectDetail.astro",
                            codeLang: "html",
                            code: `<!-- ANTES: explota -->
<div class="lg:grid lg:grid-cols-[200px_1fr]">
  <aside>...</aside>
  <div>...code blocks here, overflow grid...</div>
</div>

<!-- DESPUÉS: min-w-0 + minmax(0, 1fr) -->
<div class="lg:grid lg:grid-cols-[200px_minmax(0,1fr)]">
  <aside>...</aside>
  <div class="min-w-0">...code blocks contained...</div>
</div>`,
                            outcome: "Code blocks scrollean internamente (overflow-x: auto), el grid mantiene su ancho. Aplique a Mermaid SVGs tambien — el max-width caso similar."
                        },
                        {
                            tags: ["mermaid", "theming", "ssr"],
                            problem: "Diagramas C4 de Mermaid llegaban con colores azul/gris hardcoded, sin matchear la paleta terminal",
                            constraint: "themeCSS y CSS clases no agarraban porque C4 paint shapes con atributos SVG inline (fill='#08427B' directo). Pero queriamos C4 con la paleta del sitio.",
                            approach: "Migrar de sintaxis C4Context/Container/Component a flowchart TD + classDef. classDef da control total sobre fill, stroke, color por cada nodo, mientras que C4 oculta esa capa.",
                            algorithm: "Sacrificar la sintaxis 'oficial' por control. El output visual es el mismo (boundary dasheado, person como circulo, etc) pero ahora los estilos son data, no convencion.",
                            outcome: "Los 3 niveles C4 + el flowchart de infra ahora son visualmente identicos al resto del sitio. Bonus: editables, y el source tab del MermaidViewer muestra exactamente lo que se renderea."
                        }
                    ],
                    testing: {
                        strategy: "Aun sin tests automaticos (foco fue construir rapido con feedback en vivo via dev server). Plan:\n- Playwright smoke test: cmd+k → seleccionar proyecto → carousel funciona → lightbox abre\n- Lighthouse CI por PR con perf budget > 95\n- TypeScript strict mode para tipar projects[]",
                        coverage: "—",
                        tools: ["Playwright (planned)", "Lighthouse CI (planned)", "tsc --noEmit"]
                    },
                    metrics: [
                        { value: "~50 commits", label: "1 semana de sprints" },
                        { value: "12+", label: "componentes reusables" },
                        { value: "<2s", label: "TTI en mobile 4G" },
                        { value: "0 KB", label: "JS en pages sin interactividad" }
                    ],
                    challenges: "Dynamic slot names + grid min-width + Mermaid theming + Lenis vs scroll-snap. Los breakdowns estan en section 06.",
                    results: "Sitio que funciona como pitch + portfolio + sandbox. Cada componente (MasterDetail, Carousel, MermaidViewer, CommandPalette, Lightbox) es reusable en otros proyectos. El template translations.ts → ProjectDetail rendea un case-study completo con solo poblar fields.",
                    lessons: [
                        {
                            title: "Empezar por la estetica condiciona TODA la API del codigo",
                            body: "El primer commit fue 'paleta + JetBrains Mono'. Esa decision se propago a nombres de variables CSS (--green, --line), a nombres de botones (btn-cli), al diseño de los hovers (border-color en vez de shadow), incluso al naming de las secciones (// section 03). Lo que parecia branding termino siendo la arquitectura."
                        },
                        {
                            title: "Server-side highlights > client-side libraries",
                            body: "Shiki en frontmatter genera HTML estatico, cero JS al cliente. Mermaid no se puede precompilar (es interactivo) asi que lazy-load via esm.sh. Reglas: si no necesita interactividad en runtime → server-side; si si → CDN lazy."
                        },
                        {
                            title: "Pair-programming con LLM cambia el ratio explorar/construir",
                            body: "Sesiones de Claude Code permiten probar 4 layouts (stacked → carousel → tabs → master-detail) en lo que tomaria probar uno solo a mano. La consecuencia inesperada: requerir commits granulares como disciplina, porque sino se vuelve imposible auditar que termino aprobando."
                        }
                    ]
                },
                {
                    slug: "facturador-sunat",
                    title: "Facturador Electronico SUNAT",
                    description: "SaaS multi-tenant de facturacion electronica para Peru: emite todo el catalogo SUNAT (factura, boleta, NC/ND, guia de remision, retenciones, percepciones) con cola async, aislamiento multi-empresa y API REST.",
                    tech: ["Laravel 11", "Filament 3", "MySQL 8", "Greenter", "PHP 8.3"],
                    image: msCrmImage2,
                    demoUrl: "https://automata.pe/facturador",
                    githubUrl: "https://github.com/automatape2/facturador-sunat",
                    type: "producto",
                    year: "2026",
                    role: "Arquitectura · BE · Integraciones SUNAT",
                    timeline: "~3 semanas",
                    team: "Solo founder + LLM pair",
                    fullDescription: "Facturador electronico SaaS para Peru con integracion SUNAT via Greenter (SOAP) y gre-api (REST OAuth2). Multi-tenant nativo: cada usuario tiene sus empresas, clientes, productos y comprobantes aislados por global scopes. Cubre el catalogo SUNAT completo — Factura 01, Boleta 03, NC 07, ND 08, GRE 09, Baja RA, Recibo por Honorarios 02, Retenciones 20, Percepciones 40, Detracciones SPOT, Resumen Diario RC y PLE 14.1 — mas un panel super-admin SaaS, API REST de 47 endpoints con SDK PHP, y modo Fake para demo/dev offline.",
                    problem: "Las PyMEs peruanas estan obligadas a emitir comprobantes electronicos, pero los facturadores existentes son caros, cerrados o no soportan multi-empresa para contadores que manejan N clientes. Integrar SUNAT directo es complejo: firma XML, correlativos sin huecos, CDR asincronico, y la GRE usa un API OAuth2 totalmente distinto al SOAP de comprobantes.",
                    audience: "PyMEs peruanas que facturan, contadores que gestionan multiples empresas desde un solo login, y desarrolladores que necesitan integrar facturacion SUNAT en su propio ERP via API REST.",
                    designTools: ["Filament 3 (admin scaffolding)", "Blade + Tailwind", "Figma (landing publica)"],
                    designSystem: [
                        "Filament 3 como design system base (tablas, forms, acciones, badges)",
                        "Multi-panel: /admin (tenants) y /super-admin (dueño del SaaS)",
                        "RBAC con Shield: admin / contador / vendedor + 144 permisos finos",
                        "Estados de comprobante con color semantico (pendiente / aceptado / rechazado / baja)",
                        "Branding por empresa: logo, color y footer en PDFs y emails"
                    ],
                    architecture: {
                        context: {
                            mermaid: `flowchart TD
    owner((("Owner / Contador<br/><i>emite y gestiona N empresas</i>")))
    vendedor((("Vendedor<br/><i>emite desde POS</i>")))
    sys["<b>Facturador SaaS</b><br/><i>multi-tenant</i><br/>catalogo SUNAT + ERP"]
    sunat["<b>SUNAT</b><br/><i>CPE SOAP + GRE REST</i>"]
    apis["<b>apis.net.pe</b><br/><i>RUC / DNI / TC</i>"]
    mp["<b>MercadoPago</b><br/><i>upgrade Plan Pro</i>"]
    wa["<b>WhatsApp / SMTP</b><br/><i>envio de comprobantes</i>"]

    owner -->|emite, configura| sys
    vendedor -->|POS| sys
    sys -->|XML firmado, recibe CDR| sunat
    sys -->|consulta padron| apis
    sys -->|checkout + webhook HMAC| mp
    sys -->|PDF al cliente| wa

    classDef person fill:#0D1117,stroke:#4ADE80,color:#E5E7EB
    classDef system fill:#0D1117,stroke:#06B6D4,color:#E5E7EB,stroke-width:1.5px
    classDef ext fill:#111827,stroke:#6B7280,color:#9CA3AF

    class owner,vendedor person
    class sys system
    class sunat,apis,mp,wa ext`,
                            ascii: ""
                        },
                        container: {
                            mermaid: `flowchart TD
    user((("Owner / Vendedor")))
    erp((("ERP externo")))

    subgraph app ["Facturador Electronico"]
        direction LR
        admin["<b>Admin Panel</b><br/><i>Filament 3 + Livewire</i><br/>/admin tenants"]
        super["<b>Super-Admin</b><br/><i>Filament 3</i><br/>/super-admin MRR"]
        api["<b>API REST v1</b><br/><i>Laravel + Sanctum</i><br/>47 endpoints"]
        worker["<b>Queue Worker</b><br/><i>6 jobs async</i>"]
        domain["<b>Domain Layer</b><br/><i>Use Cases + Services</i>"]
    end

    db[("<b>MySQL 8.4</b><br/><i>60+ tablas, jobs, audit</i>")]
    sunat["<b>SUNAT CPE/GRE</b><br/><i>SOAP + OAuth2 REST</i>"]

    user -->|sesion HTTPS| admin
    user -->|sesion HTTPS| super
    erp -->|Bearer token| api
    admin --> domain
    api --> domain
    domain --> db
    worker -->|envia XML| sunat
    domain --> worker

    classDef person fill:#0D1117,stroke:#4ADE80,color:#E5E7EB
    classDef container fill:#0D1117,stroke:#06B6D4,color:#E5E7EB
    classDef db fill:#0D1117,stroke:#06B6D4,color:#E5E7EB
    classDef ext fill:#111827,stroke:#6B7280,color:#9CA3AF

    class user,erp person
    class admin,super,api,worker,domain container
    class db db
    class sunat ext

    style app fill:transparent,stroke:#4ADE80,stroke-dasharray:4 4,color:#E5E7EB`,
                            ascii: ""
                        },
                        component: {
                            mermaid: `flowchart TD
    subgraph domain ["Capa de Dominio &middot; vista de componentes"]
        direction LR
        uc["<b>Use Cases</b><br/><i>EmitirComprobante<br/>AnularComprobante<br/>EmitirGuiaRemision</i>"]
        svc["<b>Domain Services</b><br/><i>CalculadoraTributaria<br/>NumeradorService (lock)<br/>QuotaService</i>"]
        intg["<b>Integration Services</b><br/><i>SunatService + Fake<br/>GreService (OAuth2)<br/>ApisNetPe</i>"]
    end

    sunat["<b>SUNAT</b>"]

    uc -->|compone reglas| svc
    uc -->|envia a externos| intg
    intg --> sunat

    classDef component fill:#0D1117,stroke:#4ADE80,color:#E5E7EB
    classDef ext fill:#111827,stroke:#6B7280,color:#9CA3AF

    class uc,svc,intg component
    class sunat ext

    style domain fill:transparent,stroke:#4ADE80,stroke-dasharray:4 4,color:#E5E7EB`,
                            ascii: ""
                        }
                    },
                    infrastructure: {
                        provider: "Laravel + MySQL (Laragon dev · VPS/cloud prod)",
                        services: [
                            "PHP-FPM 8.3 sirviendo Laravel 11",
                            "Queue worker (database driver): 6 jobs async",
                            "Scheduler cron: HeartbeatCommand cada minuto (status page)",
                            "MySQL 8.4 InnoDB utf8mb4 — BD + sessions + cache + queue + audit",
                            "Storage local (XMLs firmados, CDRs, PFX, PDFs) — S3 en roadmap",
                            "Redis configurado opcional para escalar cache/queue",
                            "Sentry (error tracking, solo production)"
                        ],
                        diagram: {
                            mermaid: `flowchart TD
    user[Usuario]
    nginx["Nginx / PHP-FPM<br/>Laravel 11"]
    queue["Queue Worker<br/>artisan queue:work"]
    cron["Scheduler<br/>artisan schedule:run"]
    db[("MySQL 8.4")]
    storage["Storage local<br/>XML / CDR / PDF"]
    sunat["SUNAT<br/>SOAP + REST"]

    user --> nginx
    nginx --> db
    nginx -->|dispatch job| queue
    queue -->|envia XML| sunat
    queue --> storage
    cron --> db

    classDef edge fill:#0D1117,stroke:#4ADE80,color:#E5E7EB
    classDef db fill:#0D1117,stroke:#06B6D4,color:#E5E7EB
    classDef ext fill:#111827,stroke:#374151,color:#9CA3AF

    class user ext
    class nginx,queue,cron edge
    class db,storage db
    class sunat ext`,
                            ascii: ""
                        }
                    },
                    stack: {
                        frontend: ["Filament 3", "Livewire 3", "Blade", "Alpine.js", "Tailwind CSS"],
                        backend: ["Laravel 11.52", "PHP 8.3", "Sanctum (API)", "Greenter v5 (SOAP)", "gre-api v1 (OAuth2)"],
                        data: ["MySQL 8.4 (60+ tablas)", "Redis (opcional)", "Storage local / S3"],
                        devops: ["GitHub Actions", "Pest (49 tests)", "Sentry", "MercadoPago webhooks", "Spatie ActivityLog"]
                    },
                    codeHighlights: [
                        {
                            file: "app/Domain/Services/CalculadoraTributaria.php",
                            lang: "php",
                            note: "Un solo punto de calculo tributario: IGV 18%, exoneradas, gratuitas",
                            code: `public function calcular(Comprobante $c): Totales
{
    $gravadas = $c->items->where('afectacion', '10'); // gravado
    $baseIgv  = $gravadas->sum(fn ($i) => $i->cantidad * $i->valorUnitario);
    $igv      = round($baseIgv * 0.18, 2);

    return new Totales(
        gravadas:   $baseIgv,
        igv:        $igv,
        exoneradas: $c->items->where('afectacion', '20')->sum('importe'),
        gratuitas:  $c->items->where('afectacion', '21')->sum('importe'),
        total:      $baseIgv + $igv,
    );
}`
                        },
                        {
                            file: "app/Domain/UseCases/EmitirComprobante.php",
                            lang: "php",
                            note: "Use case invokable: firma local + dispatch async, sin tocar SUNAT en el request",
                            code: `public function __invoke(EmitirDto $dto): Comprobante
{
    return DB::transaction(function () use ($dto) {
        $numero = $this->numerador->siguiente($dto->empresa, $dto->tipo, $dto->serie);
        $xml    = $this->firmador->firmar($this->builder->build($dto, $numero));

        $comprobante = Comprobante::create([
            ...$dto->toArray(),
            'numero' => $numero,
            'xml'    => $xml,
            'estado' => Estado::Pendiente,
        ]);

        EnviarComprobanteJob::dispatch($comprobante); // SUNAT en background
        return $comprobante;
    });
}`
                        }
                    ],
                    techChallenges: [
                        {
                            tags: ["concurrency", "database", "sunat"],
                            problem: "Correlativos de comprobante sin huecos ni duplicados bajo emision concurrente",
                            constraint: "SUNAT exige numeracion secuencial por serie sin saltos. Dos requests simultaneos pidiendo el siguiente numero pueden generar duplicados (rechazo SUNAT) o huecos (observacion).",
                            approach: "El siguiente correlativo se obtiene dentro de una transaccion con lock pesimista (SELECT ... FOR UPDATE) sobre la fila del contador. El segundo request espera al primero. Asignacion local, no depende de SUNAT.",
                            algorithm: "Pessimistic locking: lockForUpdate() dentro de DB::transaction(). El row del correlativo se bloquea hasta commit, serializando los incrementos.",
                            codeFile: "app/Domain/Services/NumeradorService.php",
                            codeLang: "php",
                            code: `public function siguiente(Empresa $empresa, string $tipo, string $serie): int
{
    return DB::transaction(function () use ($empresa, $tipo, $serie) {
        $correlativo = Correlativo::where('empresa_id', $empresa->id)
            ->where('tipo', $tipo)
            ->where('serie', $serie)
            ->lockForUpdate()        // SELECT ... FOR UPDATE
            ->firstOrCreate([], ['numero' => 0]);

        $correlativo->increment('numero');
        return $correlativo->numero; // sin huecos, sin duplicados
    });
}`,
                            outcome: "0 correlativos duplicados o con hueco en pruebas de carga concurrente. La asignacion es local (<5ms), independiente de la latencia de SUNAT."
                        },
                        {
                            tags: ["backend", "queues", "ux"],
                            problem: "El HTTP debe terminar en <500ms aunque SUNAT tarde 30s en responder",
                            constraint: "El envio a SUNAT (SOAP) puede tardar segundos o timeoutear. El usuario no puede quedarse esperando, pero el comprobante debe quedar registrado y enviarse igual.",
                            approach: "El use case firma el XML y asigna correlativo localmente (rapido), persiste el comprobante en estado 'pendiente', y despacha un job a la cola. El controller responde 202 Accepted de inmediato. El worker envia a SUNAT y actualiza el estado; la UI hace polling.",
                            algorithm: "Command-Query split + async queue: emision sincrona (firma + correlativo) / envio asincrono (SUNAT). El estado del comprobante es una maquina: pendiente → enviado → aceptado/rechazado.",
                            codeFile: "app/Http/Controllers/Api/ComprobanteController.php",
                            codeLang: "php",
                            code: `public function store(EmitirComprobanteRequest $req): JsonResponse
{
    // Firma XML + correlativo local — rapido, no toca SUNAT
    $comprobante = $this->emitir->handle($req->toDto());

    // Envio a SUNAT en background
    EnviarComprobanteJob::dispatch($comprobante);

    return response()->json(
        ComprobanteResource::make($comprobante),
        202 // Accepted: aun no confirmado por SUNAT
    );
}`,
                            outcome: "Respuesta HTTP p95 < 500ms aun con SUNAT lento. Reintentos automaticos (3 tries, backoff 10s) si SUNAT esta caido, sin perder el comprobante."
                        },
                        {
                            tags: ["multi-tenant", "security", "laravel"],
                            problem: "Aislar datos entre empresas sin fugas, sin filtrar manualmente en cada query",
                            constraint: "Un contador ve N empresas; un owner solo la suya. Olvidar un where('empresa_id', ...) en cualquier query filtra datos de otro tenant — un bug de seguridad grave.",
                            approach: "Un trait BelongsToTenant agrega un global scope automatico a cada modelo tenant-owned: toda query se filtra por las empresas del usuario actual, y al crear se autocompleta el empresa_id. Imposible olvidarlo.",
                            algorithm: "Global query scope + model events. El aislamiento vive en un solo lugar (el trait), no disperso en controllers. Tests cross-tenant explicitos verifican que no hay fuga.",
                            codeFile: "app/Models/Concerns/BelongsToTenant.php",
                            codeLang: "php",
                            code: `protected static function bootBelongsToTenant(): void
{
    static::addGlobalScope('tenant', function (Builder $q) {
        if ($user = auth()->user()) {
            $q->whereIn('empresa_id', $user->empresaIds());
        }
    });

    static::creating(function ($model) {
        $model->empresa_id ??= currentEmpresa()->id;
    });
}`,
                            outcome: "0 fugas cross-tenant en 49 tests Pest (incluyendo casos que intentan leer datos de otra empresa explicitamente). Un solo punto de auditoria de seguridad."
                        },
                        {
                            tags: ["sunat", "oauth2", "async"],
                            problem: "La Guia de Remision (GRE) usa un API OAuth2 REST async, distinto del SOAP de comprobantes",
                            constraint: "Mientras Factura/Boleta van por SOAP sincrono-ish, la GRE 09 usa gre-api: OAuth2 client_credentials, envio que devuelve un ticket, y consulta de estado por polling. Dos integraciones SUNAT con contratos opuestos.",
                            approach: "Un GreService separado maneja el flujo OAuth2: cachea el token 50min, envia el XML y recibe un ticket, y despacha un job de polling con delay que consulta el estado hasta resolver. Reusa la misma maquina de estados del comprobante.",
                            algorithm: "Token bucket cacheado + ticket polling con backoff. El flujo GRE es un sub-grafo async dentro del mismo modelo de estados, aislado en su propio service.",
                            codeFile: "app/Domain/Integrations/Sunat/GreService.php",
                            codeLang: "php",
                            code: `// OAuth2 client_credentials, cacheado ~50min
$token = Cache::remember('gre_token', 3000, fn () => $this->oauth());

// Envio devuelve un ticket, no el CDR directamente
$ticket = $this->client->enviarGuia($xmlFirmado, $token);

// Polling async del estado del ticket
ConsultarTicketGreJob::dispatch($comprobante, $ticket)
    ->delay(now()->addSeconds(5));`,
                            outcome: "GRE entregada de forma confiable con polling + backoff, sin bloquear ni mezclarse con el flujo SOAP de comprobantes. Mismo estado final (aceptado/rechazado) para toda la UI."
                        }
                    ],
                    testing: {
                        strategy: "49 tests Pest cubriendo:\n- Emision de cada tipo de comprobante (01/03/07/08)\n- Calculo tributario (IGV, ISC, exoneradas, gratuitas)\n- Aislamiento multi-tenant (casos cross-tenant explicitos)\n- Cuotas por plan (free 100/mes, pro ilimitado)\n- Numerador concurrente\nGitHub Actions corre la suite + migraciones MySQL en cada push.",
                        coverage: "49 tests",
                        tools: ["Pest", "GitHub Actions", "MySQL en CI", "SUNAT_FAKE para tests offline"]
                    },
                    metrics: [
                        { value: "8+", label: "tipos de comprobante SUNAT" },
                        { value: "47", label: "endpoints API REST" },
                        { value: "<500ms", label: "respuesta HTTP (SUNAT async)" },
                        { value: "60+", label: "tablas, 49 tests Pest" }
                    ],
                    challenges: "Correlativos concurrentes, latencia impredecible de SUNAT, aislamiento multi-tenant sin fugas, y la GRE con su API OAuth2 distinto. Los detalles tecnicos estan en la seccion 06.",
                    results: "Sistema que emite el catalogo SUNAT completo con tenancy nativa, demoable 100% offline (modo Fake firma XML real y simula CDR), API REST documentada con OpenAPI 3.0 + Swagger UI + SDK PHP oficial. Listo para produccion con credenciales SEE reales.",
                    lessons: [
                        {
                            title: "Modo Fake desde el dia uno, no como afterthought",
                            body: "SUNAT_FAKE=true firma XML real pero simula el CDR aceptado. Permitio demos sin credenciales, dev offline, y tests deterministas. Si hubiera dependido de SUNAT real para cada prueba, el ciclo de feedback habria sido inviable. La integracion externa critica necesita un doble desde el primer commit."
                        },
                        {
                            title: "La cola async no es optimizacion, es requisito",
                            body: "Empezar con envio sincrono y 'despues optimizar' habria significado reescribir el flujo entero. Cuando la dependencia externa es impredecible (SUNAT puede tardar 30s o caerse), el async es parte del diseño, no un add-on. El estado del comprobante como maquina lo hizo natural."
                        },
                        {
                            title: "Global scopes > filtros manuales para multi-tenancy",
                            body: "Centralizar el aislamiento en un trait con global scope convirtio 'seguridad que depende de que ningun dev olvide un where' en 'seguridad por defecto, imposible de olvidar'. El costo: tener disciplina con los scopes al hacer queries de super-admin (donde si hay que saltarlos explicitamente)."
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
                    type: "producto",
                    year: "2024",
                    role: "FE · BE · Integraciones",
                    fullDescription: "Portal para una institucion educativa que centraliza recursos, comunicaciones y calendario academico. Reemplazo un flujo de correos y PDFs sueltos por un panel donde docentes publican material, los alumnos reciben notificaciones segmentadas y todo se sincroniza con Google Calendar.",
                    problem: "La comunicacion vivia en grupos de WhatsApp y emails: material perdido, avisos que no llegaban, fechas desactualizadas. Nadie tenia una fuente unica de verdad del calendario academico.",
                    audience: "Coordinadores academicos, docentes y alumnos de una institucion con varios programas en paralelo.",
                    infrastructure: {
                        provider: "Laravel + MySQL (VPS)",
                        services: ["PHP-FPM + Laravel", "MySQL", "Google Calendar API", "Cola para notificaciones (email + push)", "Storage para material"],
                        diagram: {
                            mermaid: `flowchart TD
    docente[Docente] -->|publica recurso| app["Portal (Laravel + Livewire)"]
    app --> db[(MySQL)]
    app -->|notifica| queue[Cola]
    queue --> mail[Email / Push]
    app -->|sincroniza| gcal[Google Calendar]
    alumno[Alumno] --> app

    classDef edge fill:#0D1117,stroke:#4ADE80,color:#E5E7EB
    classDef db fill:#0D1117,stroke:#06B6D4,color:#E5E7EB
    classDef ext fill:#111827,stroke:#374151,color:#9CA3AF
    class docente,alumno ext
    class app,queue edge
    class db,mail,gcal db`
                        }
                    },
                    techChallenges: [
                        {
                            tags: ["notifications", "laravel", "ux"],
                            problem: "Notificar solo a los alumnos relevantes sin spamear a toda la institucion",
                            constraint: "Un aviso de un curso no debe llegar a alumnos de otros programas. Los grupos cambian cada ciclo.",
                            approach: "Segmentacion por relaciones (curso → matriculas → alumnos) resuelta en una sola query, y notificaciones encoladas por canal (email/push) segun la preferencia del alumno.",
                            algorithm: "Fan-out por relacion en cola: una notificacion se expande a N destinatarios via job batch, respetando opt-in por canal.",
                            codeFile: "app/Notifications/RecursoPublicado.php",
                            codeLang: "php",
                            code: `public function via(object $notifiable): array
{
    return $notifiable->prefersPush()
        ? ['database', 'broadcast']
        : ['database', 'mail'];
}

// El curso hace fan-out solo a sus matriculados
Notification::send(
    $curso->alumnosActivos(),       // relacion, no toda la BD
    new RecursoPublicado($recurso)
);`,
                            outcome: "Avisos llegan solo al curso correcto; los alumnos eligen canal. Cayeron los 'no me llego' a casi cero."
                        }
                    ],
                    metrics: [
                        { value: "1 fuente", label: "de verdad del calendario" },
                        { value: "0 PDFs", label: "sueltos por email" },
                        { value: "push + email", label: "por preferencia" }
                    ],
                    results: "El calendario academico y el material dejaron de vivir en WhatsApp. Coordinacion publica una vez y el sistema segmenta y notifica.",
                    lessons: [
                        {
                            title: "Segmentar por relacion, no por lista manual",
                            body: "Mantener listas de destinatarios a mano se desincroniza cada ciclo. Derivar los destinatarios de la relacion curso→matricula hizo que la segmentacion fuera siempre correcta sin mantenimiento."
                        }
                    ]
                },
                {
                    slug: "whatsapp-cotizador",
                    title: "Bot Cotizador WhatsApp",
                    description: "Chatbot que responde 24/7, calcula cotizaciones desde tu catalogo y agenda citas automaticamente.",
                    tech: ["n8n", "WhatsApp API", "OpenAI", "Google Sheets"],
                    image: msCrmImage,
                    type: "caso",
                    year: "2025",
                    role: "Automatizacion · IA · Integraciones",
                    fullDescription: "Bot de WhatsApp que atiende consultas comerciales 24/7: entiende lenguaje natural con un LLM, arma cotizaciones leyendo el catalogo desde Google Sheets, y agenda citas en el calendario. Orquestado en n8n, sin servidor propio que mantener.",
                    problem: "El equipo comercial respondia las mismas preguntas de precios todo el dia, perdia leads fuera de horario, y las cotizaciones manuales tardaban horas. WhatsApp era el canal pero no escalaba.",
                    audience: "PyMEs con catalogo de productos/servicios que reciben consultas por WhatsApp y quieren cotizar y agendar sin tener a alguien pegado al telefono.",
                    infrastructure: {
                        provider: "n8n (self-host o cloud) + WhatsApp Business API",
                        services: ["n8n (orquestacion de workflow)", "WhatsApp Business API (Meta/Twilio)", "OpenAI (NLU + extraccion de intencion)", "Google Sheets (catalogo + precios)", "Google Calendar (agenda)"],
                        diagram: {
                            mermaid: `flowchart TD
    user((("Cliente"))) -->|mensaje| wa[WhatsApp API]
    wa --> n8n["n8n workflow"]
    n8n -->|intencion + entidades| ai[OpenAI]
    ai --> n8n
    n8n -->|lee precios| sheets[Google Sheets]
    n8n -->|agenda| cal[Google Calendar]
    n8n -->|responde cotizacion| wa
    wa --> user

    classDef person fill:#0D1117,stroke:#4ADE80,color:#E5E7EB
    classDef edge fill:#0D1117,stroke:#06B6D4,color:#E5E7EB
    classDef ext fill:#111827,stroke:#374151,color:#9CA3AF
    class user person
    class n8n edge
    class wa,ai,sheets,cal ext`
                        }
                    },
                    techChallenges: [
                        {
                            tags: ["ai", "nlu", "automation"],
                            problem: "Pasar de texto libre del cliente a una cotizacion estructurada y confiable",
                            constraint: "El cliente escribe 'cuanto x 3 cajas del producto azul para el viernes'. Hay que extraer producto, cantidad y fecha sin alucinar precios.",
                            approach: "El LLM solo extrae intencion + entidades (producto, cantidad, fecha) como JSON; los PRECIOS los pone n8n leyendo Google Sheets, nunca el modelo. Asi el LLM interpreta pero no inventa numeros.",
                            algorithm: "Separacion NLU/calculo: el modelo hace structured extraction, el workflow hace el lookup de precio determinista. El LLM nunca toca el numero final.",
                            codeFile: "n8n · OpenAI node (system prompt)",
                            codeLang: "javascript",
                            code: `// El modelo SOLO extrae, no cotiza
{
  "system": "Extract intent and entities as JSON. Never invent prices.",
  "schema": {
    "intent": "quote | schedule | other",
    "product": "string",
    "qty": "number",
    "date": "ISO date | null"
  }
}
// n8n luego: precio = lookup(sheets, product) * qty`
                        }
                    ],
                    metrics: [
                        { value: "24/7", label: "atencion sin humano" },
                        { value: "<1 min", label: "cotizacion vs horas antes" },
                        { value: "0 precios", label: "inventados por el LLM" }
                    ],
                    results: "Los leads fuera de horario dejan de perderse, las cotizaciones salen al instante desde el catalogo real, y el equipo solo entra cuando el bot agenda una cita.",
                    lessons: [
                        {
                            title: "El LLM interpreta; el sistema decide los numeros",
                            body: "Dejar que el modelo 'cotice' lleva a precios inventados. Acotarlo a extraccion de entidades y resolver el precio con un lookup deterministico fue la diferencia entre demo y produccion."
                        }
                    ]
                },
                {
                    slug: "facturas-automaticas",
                    title: "Facturacion Automatica",
                    description: "Detecta pagos en Stripe/PayPal, genera facturas electronicas y las envia al cliente. Cero trabajo manual.",
                    tech: ["n8n", "Stripe", "SUNAT API", "Email"],
                    image: msCrmImage3,
                    type: "caso",
                    year: "2025",
                    role: "Automatizacion · Integraciones",
                    fullDescription: "Flujo que cierra el ciclo cobro→factura: un webhook de Stripe/PayPal dispara la emision del comprobante SUNAT, genera el PDF y lo envia por email al cliente. El equipo de admin pasa de facturar a mano a solo revisar excepciones.",
                    problem: "Cada pago obligaba a alguien a entrar al panel de SUNAT, emitir la factura, descargar el PDF y mandarlo por correo. Horas de trabajo repetitivo y facturas que se emitian tarde o se olvidaban.",
                    audience: "Negocios que cobran online (Stripe/PayPal) y estan obligados a emitir comprobante SUNAT por cada venta.",
                    infrastructure: {
                        provider: "n8n + Stripe webhooks + SUNAT API",
                        services: ["Stripe/PayPal webhooks (evento de pago)", "n8n (orquestacion + idempotencia)", "SUNAT API (emision via Greenter/REST)", "Email (envio del PDF)"],
                        diagram: {
                            mermaid: `flowchart TD
    pago[Pago en Stripe/PayPal] -->|webhook| n8n["n8n workflow"]
    n8n -->|dedup por payment_id| guard{ya emitido?}
    guard -->|no| sunat[SUNAT API]
    sunat --> pdf[Genera PDF]
    pdf --> mail[Email al cliente]
    guard -->|si| skip[Skip]

    classDef edge fill:#0D1117,stroke:#06B6D4,color:#E5E7EB
    classDef ext fill:#111827,stroke:#374151,color:#9CA3AF
    classDef db fill:#0D1117,stroke:#4ADE80,color:#E5E7EB
    class n8n edge
    class pago,sunat,mail ext
    class pdf,guard,skip db`
                        }
                    },
                    techChallenges: [
                        {
                            tags: ["webhooks", "idempotency", "automation"],
                            problem: "Un mismo pago no debe generar dos facturas",
                            constraint: "Stripe reintenta webhooks; un timeout o un retry puede disparar el flujo dos veces. Una factura duplicada en SUNAT es un problema fiscal real.",
                            approach: "Idempotencia por payment_id: antes de emitir, el workflow verifica si ya existe un comprobante para ese pago. Stripe ademas firma cada webhook (HMAC) que se valida antes de procesar.",
                            algorithm: "Dedup key (payment_id) + verificacion de firma. El primer evento emite; los reintentos caen en el branch 'ya emitido'.",
                            codeFile: "n8n · Function node (guard)",
                            codeLang: "javascript",
                            code: `// Idempotencia: el payment_id es la clave
const exists = await db.comprobantes.findOne({ payment_id });
if (exists) return { skip: true };   // retry de Stripe → no-op

// Solo el primer evento llega aca
return { emit: true, payment_id, monto, cliente };`
                        }
                    ],
                    metrics: [
                        { value: "0 manual", label: "facturas a mano" },
                        { value: "1 factura", label: "por pago (idempotente)" },
                        { value: "segundos", label: "pago → PDF al cliente" }
                    ],
                    results: "El cobro y la facturacion quedaron pegados: cada pago emite su comprobante y lo envia solo. Admin solo mira el log de excepciones.",
                    lessons: [
                        {
                            title: "Webhooks sin idempotencia = duplicados garantizados",
                            body: "Asumir que un webhook llega una sola vez es la receta para facturas duplicadas. La dedup key por payment_id desde el primer dia evito el problema fiscal antes de que existiera."
                        }
                    ]
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
                    slug: "automata-portfolio",
                    title: "Automata Portfolio",
                    description: "This very site: portfolio + case studies with a terminal aesthetic, live C4 Mermaid diagrams, Cmd+K, server-side syntax highlighting and a static deploy.",
                    tech: ["Astro", "TypeScript", "Tailwind CSS", "Mermaid", "Shiki", "GSAP"],
                    image: landingpagerImage,
                    demoUrl: "https://automata.pe",
                    githubUrl: "https://github.com/automatape2/automata.pe",
                    type: "product",
                    year: "2026",
                    role: "Design · FE · Infra · Content",
                    timeline: "1 week (Claude Code sprints)",
                    team: "Solo founder + LLM pair",
                    fullDescription: "A portfolio that doubles as a reusable case-study template. Each project renders its own page with discovery, design, C4 architecture, infrastructure, implementation, technical challenges, testing and results — all from a single object in translations.ts. The terminal aesthetic (mono everywhere, $/▸/// prompts, green/cyan/black palette) carries through every component so the medium reinforces the message: 'I'm an engineer who ships code.'",
                    problem: "Webflow and Notion-as-portfolio look the same as everyone else's. Linktree doesn't convey technical depth. I wanted a site that was evidence of craft rather than a skill checklist, and that would scale without paying per block for each new project.",
                    audience: "Potential clients (LATAM CTOs and founders) evaluating whether to trust Automata with their projects, plus technical recruiters who need to see real depth in under 5 minutes.",
                    designTools: ["Figma (initial mockups)", "VS Code (design-in-code)", "Excalidraw (C4 sketches)"],
                    designSystem: [
                        "JetBrains Mono everywhere, font-feature-settings active",
                        "Palette: #000 / #0D1117 panel / #4ADE80 green / #06B6D4 cyan / #FBBF24 amber",
                        "Markers ▸ ○ $ // as punctuation of the visual language",
                        "Window-chrome (dots ● ● ●) on every relevant panel",
                        "Border-color as primary hover state (no shadows, no gradients)"
                    ],
                    architecture: {
                        context: {
                            mermaid: `flowchart TD
    user((("Visitor / Recruiter<br/><i>evaluating technical depth</i>")))
    sys["<b>automata.pe</b><br/><i>Astro SSG</i><br/>portfolio + case studies"]
    github["<b>GitHub API</b><br/><i>stars, forks, last commit</i>"]
    formspree["<b>Formspree</b><br/><i>contact form backend</i>"]
    cal["<b>Cal.com</b><br/><i>book intro call</i>"]
    plausible["<b>Plausible</b><br/><i>analytics</i>"]

    user -->|browse / Cmd+K| sys
    sys -->|fetch stats client-side| github
    sys -->|POST contact form| formspree
    sys -->|deep link| cal
    sys -->|page views| plausible

    classDef person fill:#0D1117,stroke:#4ADE80,color:#E5E7EB
    classDef system fill:#0D1117,stroke:#06B6D4,color:#E5E7EB,stroke-width:1.5px
    classDef ext fill:#111827,stroke:#6B7280,color:#9CA3AF

    class user person
    class sys system
    class github,formspree,cal,plausible ext`,
                            ascii: ""
                        },
                        container: {
                            mermaid: `flowchart TD
    visitor((("Visitor")))

    subgraph site ["automata.pe (build output)"]
        direction LR
        landing["<b>/ (Landing)</b><br/><i>Hero, Services, Solutions, Tech, Contact</i>"]
        index["<b>/projects</b><br/><i>type + tech filters</i>"]
        detail["<b>/projects/[slug]</b><br/><i>10-section case study</i>"]
        og["<b>/og/[slug].svg</b><br/><i>dynamic OG image</i>"]
        feeds["<b>/sitemap.xml<br/>/rss.xml<br/>/robots.txt</b>"]
    end

    cdn["<b>CDN / Edge</b><br/><i>Cloudflare / Vercel</i>"]
    ghapi["<b>GitHub API</b>"]
    formspree["<b>Formspree</b>"]

    visitor --> cdn
    cdn --> landing
    cdn --> index
    cdn --> detail
    detail --> ghapi
    detail --> formspree

    classDef person fill:#0D1117,stroke:#4ADE80,color:#E5E7EB
    classDef container fill:#0D1117,stroke:#06B6D4,color:#E5E7EB
    classDef ext fill:#111827,stroke:#6B7280,color:#9CA3AF

    class visitor person
    class landing,index,detail,og,feeds container
    class cdn,ghapi,formspree ext

    style site fill:transparent,stroke:#4ADE80,stroke-dasharray:4 4,color:#E5E7EB`,
                            ascii: ""
                        },
                        component: {
                            mermaid: `flowchart TD
    subgraph projectDetail ["ProjectDetail.astro &middot; component view"]
        direction LR
        layout["<b>Layout</b><br/><i>OG, JSON-LD, hreflang</i>"]
        toc["<b>TableOfContents</b><br/><i>sticky + mobile drawer</i>"]
        master["<b>MasterDetail</b><br/><i>C4 sidebar picker</i>"]
        mermaid["<b>MermaidViewer</b><br/><i>view / source / share</i>"]
        carousel["<b>Carousel</b><br/><i>challenge slides</i>"]
        cmdk["<b>CommandPalette</b><br/><i>Cmd+K fuzzy nav</i>"]
        lightbox["<b>Lightbox</b><br/><i>screenshots</i>"]
    end

    layout --> toc
    layout --> master
    master --> mermaid
    layout --> carousel
    layout --> cmdk
    layout --> lightbox

    classDef component fill:#0D1117,stroke:#4ADE80,color:#E5E7EB

    class layout,toc,master,mermaid,carousel,cmdk,lightbox component

    style projectDetail fill:transparent,stroke:#4ADE80,stroke-dasharray:4 4,color:#E5E7EB`,
                            ascii: ""
                        }
                    },
                    infrastructure: {
                        provider: "Astro SSG + Edge CDN",
                        services: [
                            "Build: Astro 5 with sharp for image transforms",
                            "Static export: HTML + assets, no Node runtime",
                            "Hosting: Vercel / Cloudflare Pages (any static host)",
                            "DNS: Cloudflare with aggressive cache on /og/*, /sitemap.xml",
                            "Analytics: Plausible (cookieless, GDPR)",
                            "Forms: Formspree (free tier handles current volume)",
                            "Embeds: mermaid lazy-loaded via esm.sh, shiki precompiled at build"
                        ],
                        diagram: {
                            mermaid: `flowchart TD
    dev[Developer]
    repo[GitHub repo]
    ci["GitHub Actions<br/>(future: lighthouse-ci)"]
    build["Astro build<br/>npm run build"]
    edge["Cloudflare / Vercel<br/>edge cache"]
    user[Visitor]

    dev -->|git push| repo
    repo -->|webhook| ci
    ci --> build
    build -->|deploy| edge
    user --> edge

    classDef edge fill:#0D1117,stroke:#4ADE80,color:#E5E7EB
    classDef ext fill:#111827,stroke:#374151,color:#9CA3AF

    class dev,user ext
    class build,edge edge
    class ci,repo ext`,
                            ascii: ""
                        }
                    },
                    stack: {
                        frontend: ["Astro 5 (SSG, content collections-ready)", "TypeScript", "Tailwind CSS 4", "GSAP + ScrollTrigger", "Lenis (smooth scroll)"],
                        backend: ["—", "(static, no runtime)"],
                        data: ["translations.ts (in-memory)", "GitHub API (live fetch)", "Formspree (form submissions)"],
                        ai: ["Shiki (server-side theming)", "Mermaid (live diagram rendering)", "Claude Code (pair-programming each session)"],
                        devops: ["Vercel / Cloudflare Pages", "Plausible analytics", "Auto-generated sitemap + RSS"]
                    },
                    codeHighlights: [
                        {
                            file: "src/components/ProjectDetail.astro",
                            lang: "typescript",
                            note: "Custom Shiki theme: the site highlights its own code with its own palette",
                            code: `const automataShikiTheme = {
  name: "automata",
  type: "dark",
  tokenColors: [
    { scope: ["keyword", "storage"],     settings: { foreground: "#4ADE80" } },
    { scope: ["string"],                  settings: { foreground: "#FBBF24" } },
    { scope: ["entity.name.type"],        settings: { foreground: "#06B6D4" } },
    { scope: ["comment"], settings: { foreground: "#6B7280", fontStyle: "italic" } },
  ],
};

// server-side in the frontmatter: zero client JS
const codeHtml = await codeToHtml(code, { lang, theme: automataShikiTheme });`
                        },
                        {
                            file: "src/pages/og/[slug].svg.ts",
                            lang: "typescript",
                            note: "Per-project OG image: 1200x630 SVG generated at build from the record",
                            code: `export function getStaticPaths() {
  return translations.en.solutions.items.map((p) => ({ params: { slug: p.slug } }));
}

export const GET: APIRoute = ({ params }) => {
  const project = items.find((p) => p.slug === params.slug);
  const svg = renderOgCard(project); // terminal-chrome + title + tech stack
  return new Response(svg, { headers: { "Content-Type": "image/svg+xml" } });
};`
                        }
                    ],
                    techChallenges: [
                        {
                            tags: ["astro", "compiler", "patterns"],
                            problem: "Astro rejects <slot name={dynamic} /> inside a .map(): compiler error",
                            constraint: "MasterDetail needs to render different panes per item, but Astro requires literal slot names at parse-time.",
                            approach: "I inverted the responsibility: instead of slot-per-item, MasterDetail exposes a single default slot and callers tag their panes with data-md-key. The MasterDetail script toggles visibility based on that attribute.",
                            algorithm: "Inversion of control: render-prop-via-data-attribute instead of named-slots. The show/hide logic lives in the generic component, the content in the caller.",
                            codeFile: "src/components/MasterDetail.astro",
                            codeLang: "astro",
                            code: `<!-- Generic: doesn't know what content each pane holds -->
<div class="md-grid" data-masterdetail>
  <nav>{items.map((it, i) => (
    <button data-md-pick={it.key} data-active={i === 0}>{it.label}</button>
  ))}</nav>
  <div><slot /></div> <!-- caller drops <div data-md-key="..."> -->
</div>

<!-- Caller: explicit and type-safe -->
<MasterDetail items={levels}>
  <div data-md-key="context"><MermaidViewer ... /></div>
  <div data-md-key="container" class="hidden"><MermaidViewer ... /></div>
</MasterDetail>`,
                            outcome: "Reusable component, compile-time errors gone, caller syntax stays explicit (you can see where each pane lives)."
                        },
                        {
                            tags: ["frontend", "scroll", "css"],
                            problem: "Carousel with scroll-snap fights Lenis smooth-scroll and snaps back to slide 0",
                            constraint: "We wanted native horizontal scroll, perfect snapping and compatibility with the global Lenis instance. The three don't play well together.",
                            approach: "Drop scroll-snap + scrollLeft entirely, switch to transform: translateX(-N * 100%) on the track. The outer wrapper has overflow:hidden, no scroll. Arrows and dots just change the index and the transform.",
                            algorithm: "Transform-based carousel with external state: the browser never sees a scroll, only a translation. Nothing conflicts because there's no real scroll.",
                            codeFile: "src/components/Carousel.astro",
                            codeLang: "typescript",
                            codeSandbox: "typescript",
                            code: `const update = (i: number) => {
    current = Math.max(0, Math.min(slides.length - 1, i));
    track.style.transform = \`translateX(-\${current * 100}%)\`;
    counter.textContent = String(current + 1).padStart(2, "0");
    dots.forEach((d, di) => d.setAttribute("data-active", String(di === current)));
    if (prev) prev.disabled = current === 0;
    if (next) next.disabled = current === slides.length - 1;
};`,
                            outcome: "0 conflicts with Lenis. 300ms cubic-bezier ease-out transition feels native; prev/next + arrow keys + dots all stay in sync."
                        },
                        {
                            tags: ["css", "grid", "shiki"],
                            problem: "Grid with a sticky pane next to code highlights blows the viewport horizontally",
                            constraint: "Master-detail layout: 200px sidebar + 1fr content. Shiki <pre> blocks with long lines overflow and force the grid wider than the viewport.",
                            approach: "Default min-width:auto on grid items lets them grow to their content size — not honor 1fr cleanly. Switch to minmax(0, 1fr) on grid-template-columns + min-w-0 on the item and it behaves.",
                            algorithm: "CSS grid 101: min-width:auto vs minmax(0, 1fr). A detail that breaks most layouts containing code blocks.",
                            codeFile: "src/components/ProjectDetail.astro",
                            codeLang: "html",
                            code: `<!-- BEFORE: blows up -->
<div class="lg:grid lg:grid-cols-[200px_1fr]">
  <aside>...</aside>
  <div>...code blocks here overflow the grid...</div>
</div>

<!-- AFTER: min-w-0 + minmax(0, 1fr) -->
<div class="lg:grid lg:grid-cols-[200px_minmax(0,1fr)]">
  <aside>...</aside>
  <div class="min-w-0">...code blocks now contained...</div>
</div>`,
                            outcome: "Code blocks scroll internally (overflow-x: auto), the grid keeps its width. Same pattern applied to Mermaid SVGs — max-width capped, content contained."
                        },
                        {
                            tags: ["mermaid", "theming", "ssr"],
                            problem: "Mermaid C4 diagrams shipped with hard-coded blue/gray colors, ignoring the terminal palette",
                            constraint: "themeCSS and CSS classes didn't take because C4 paints shapes with inline SVG attributes (fill='#08427B' directly). But we wanted C4 to look like the rest of the site.",
                            approach: "Migrated the syntax from C4Context/Container/Component to flowchart TD + classDef. classDef gives total control over fill, stroke, color per node, where C4 hides that layer behind convention.",
                            algorithm: "Trade the 'official' syntax for control. Visual output stays the same (dashed boundary, person as circle, etc) but styles are data now, not convention.",
                            outcome: "The three C4 levels + the infra flowchart now match the rest of the site visually. Bonus: they're editable, and the MermaidViewer source tab shows exactly what's rendered."
                        }
                    ],
                    testing: {
                        strategy: "No automated tests yet (focus was speed with live dev-server feedback). Plan:\n- Playwright smoke test: Cmd+K → pick project → carousel works → lightbox opens\n- Lighthouse CI per PR with perf budget > 95\n- TypeScript strict mode to type projects[]",
                        coverage: "—",
                        tools: ["Playwright (planned)", "Lighthouse CI (planned)", "tsc --noEmit"]
                    },
                    metrics: [
                        { value: "~50 commits", label: "1 week of sprints" },
                        { value: "12+", label: "reusable components" },
                        { value: "<2s", label: "TTI on 4G mobile" },
                        { value: "0 KB", label: "JS on non-interactive pages" }
                    ],
                    challenges: "Dynamic slot names + grid min-width + Mermaid theming + Lenis vs scroll-snap. The breakdowns are in section 06.",
                    results: "A site that works as pitch + portfolio + sandbox. Every component (MasterDetail, Carousel, MermaidViewer, CommandPalette, Lightbox) is reusable in other projects. The translations.ts → ProjectDetail template renders a full case study just by filling fields.",
                    lessons: [
                        {
                            title: "Starting with the aesthetic conditions the ENTIRE code API",
                            body: "The first commit was 'palette + JetBrains Mono'. That decision propagated to CSS variable names (--green, --line), button names (btn-cli), hover design (border-color instead of shadow), even section naming (// section 03). What looked like branding turned out to be the architecture."
                        },
                        {
                            title: "Server-side highlights > client-side libraries",
                            body: "Shiki in the frontmatter outputs static HTML, zero client JS. Mermaid can't be precompiled (it's interactive), so lazy-load via esm.sh. Rule: if it doesn't need runtime interactivity → server-side; if it does → lazy CDN."
                        },
                        {
                            title: "LLM pair-programming changes the explore/build ratio",
                            body: "Claude Code sessions let me try 4 layouts (stacked → carousel → tabs → master-detail) in the time it would take to try one by hand. The unexpected consequence: I had to enforce granular commits as discipline, otherwise auditing what I had approved became impossible."
                        }
                    ]
                },
                {
                    slug: "facturador-sunat",
                    title: "SUNAT E-Invoicing",
                    description: "Multi-tenant SaaS for Peru electronic invoicing: issues the full SUNAT catalog (invoice, receipt, credit/debit notes, dispatch guide, withholdings, perceptions) with an async queue, per-company isolation and a REST API.",
                    tech: ["Laravel 11", "Filament 3", "MySQL 8", "Greenter", "PHP 8.3"],
                    image: msCrmImage2,
                    demoUrl: "https://automata.pe/facturador",
                    githubUrl: "https://github.com/automatape2/facturador-sunat",
                    type: "product",
                    year: "2026",
                    role: "Architecture · BE · SUNAT integrations",
                    timeline: "~3 weeks",
                    team: "Solo founder + LLM pair",
                    fullDescription: "SaaS electronic invoicing for Peru integrating SUNAT via Greenter (SOAP) and gre-api (REST OAuth2). Natively multi-tenant: every user has their own companies, customers, products and documents isolated by global scopes. Covers the full SUNAT catalog — Invoice 01, Receipt 03, Credit Note 07, Debit Note 08, Dispatch Guide 09, Void RA, Fees Receipt 02, Withholdings 20, Perceptions 40, SPOT detractions, Daily Summary RC and PLE 14.1 — plus a SaaS super-admin panel, a 47-endpoint REST API with a PHP SDK, and a Fake mode for offline demo/dev.",
                    problem: "Peruvian SMBs are legally required to issue electronic documents, but existing invoicers are expensive, closed, or don't support the multi-company model accountants need to manage N clients. Integrating SUNAT directly is hard: XML signing, gap-free sequential numbering, asynchronous CDR, and the dispatch guide uses an entirely different OAuth2 API from the document SOAP.",
                    audience: "Peruvian SMBs that invoice, accountants managing multiple companies from a single login, and developers who need to embed SUNAT invoicing into their own ERP via REST API.",
                    designTools: ["Filament 3 (admin scaffolding)", "Blade + Tailwind", "Figma (public landing)"],
                    designSystem: [
                        "Filament 3 as the base design system (tables, forms, actions, badges)",
                        "Multi-panel: /admin (tenants) and /super-admin (SaaS owner)",
                        "RBAC via Shield: admin / accountant / salesperson + 144 fine-grained permissions",
                        "Document status with semantic color (pending / accepted / rejected / voided)",
                        "Per-company branding: logo, color and footer in PDFs and emails"
                    ],
                    architecture: {
                        context: {
                            mermaid: `flowchart TD
    owner((("Owner / Accountant<br/><i>issues, manages N companies</i>")))
    seller((("Salesperson<br/><i>issues from POS</i>")))
    sys["<b>Invoicing SaaS</b><br/><i>multi-tenant</i><br/>SUNAT catalog + ERP"]
    sunat["<b>SUNAT</b><br/><i>CPE SOAP + GRE REST</i>"]
    apis["<b>apis.net.pe</b><br/><i>RUC / DNI / FX</i>"]
    mp["<b>MercadoPago</b><br/><i>Pro plan upgrade</i>"]
    wa["<b>WhatsApp / SMTP</b><br/><i>document delivery</i>"]

    owner -->|issue, configure| sys
    seller -->|POS| sys
    sys -->|signed XML, receives CDR| sunat
    sys -->|lookup taxpayer| apis
    sys -->|checkout + HMAC webhook| mp
    sys -->|PDF to customer| wa

    classDef person fill:#0D1117,stroke:#4ADE80,color:#E5E7EB
    classDef system fill:#0D1117,stroke:#06B6D4,color:#E5E7EB,stroke-width:1.5px
    classDef ext fill:#111827,stroke:#6B7280,color:#9CA3AF

    class owner,seller person
    class sys system
    class sunat,apis,mp,wa ext`,
                            ascii: ""
                        },
                        container: {
                            mermaid: `flowchart TD
    user((("Owner / Salesperson")))
    erp((("External ERP")))

    subgraph app ["E-Invoicing System"]
        direction LR
        admin["<b>Admin Panel</b><br/><i>Filament 3 + Livewire</i><br/>/admin tenants"]
        super["<b>Super-Admin</b><br/><i>Filament 3</i><br/>/super-admin MRR"]
        api["<b>REST API v1</b><br/><i>Laravel + Sanctum</i><br/>47 endpoints"]
        worker["<b>Queue Worker</b><br/><i>6 async jobs</i>"]
        domain["<b>Domain Layer</b><br/><i>Use Cases + Services</i>"]
    end

    db[("<b>MySQL 8.4</b><br/><i>60+ tables, jobs, audit</i>")]
    sunat["<b>SUNAT CPE/GRE</b><br/><i>SOAP + OAuth2 REST</i>"]

    user -->|HTTPS session| admin
    user -->|HTTPS session| super
    erp -->|Bearer token| api
    admin --> domain
    api --> domain
    domain --> db
    worker -->|sends XML| sunat
    domain --> worker

    classDef person fill:#0D1117,stroke:#4ADE80,color:#E5E7EB
    classDef container fill:#0D1117,stroke:#06B6D4,color:#E5E7EB
    classDef db fill:#0D1117,stroke:#06B6D4,color:#E5E7EB
    classDef ext fill:#111827,stroke:#6B7280,color:#9CA3AF

    class user,erp person
    class admin,super,api,worker,domain container
    class db db
    class sunat ext

    style app fill:transparent,stroke:#4ADE80,stroke-dasharray:4 4,color:#E5E7EB`,
                            ascii: ""
                        },
                        component: {
                            mermaid: `flowchart TD
    subgraph domain ["Domain Layer &middot; component view"]
        direction LR
        uc["<b>Use Cases</b><br/><i>IssueDocument<br/>VoidDocument<br/>IssueDispatchGuide</i>"]
        svc["<b>Domain Services</b><br/><i>TaxCalculator<br/>NumberingService (lock)<br/>QuotaService</i>"]
        intg["<b>Integration Services</b><br/><i>SunatService + Fake<br/>GreService (OAuth2)<br/>ApisNetPe</i>"]
    end

    sunat["<b>SUNAT</b>"]

    uc -->|composes rules| svc
    uc -->|sends to externals| intg
    intg --> sunat

    classDef component fill:#0D1117,stroke:#4ADE80,color:#E5E7EB
    classDef ext fill:#111827,stroke:#6B7280,color:#9CA3AF

    class uc,svc,intg component
    class sunat ext

    style domain fill:transparent,stroke:#4ADE80,stroke-dasharray:4 4,color:#E5E7EB`,
                            ascii: ""
                        }
                    },
                    infrastructure: {
                        provider: "Laravel + MySQL (Laragon dev · VPS/cloud prod)",
                        services: [
                            "PHP-FPM 8.3 serving Laravel 11",
                            "Queue worker (database driver): 6 async jobs",
                            "Scheduler cron: HeartbeatCommand every minute (status page)",
                            "MySQL 8.4 InnoDB utf8mb4 — DB + sessions + cache + queue + audit",
                            "Local storage (signed XMLs, CDRs, PFX, PDFs) — S3 on the roadmap",
                            "Redis configured optional to scale cache/queue",
                            "Sentry (error tracking, production only)"
                        ],
                        diagram: {
                            mermaid: `flowchart TD
    user[User]
    nginx["Nginx / PHP-FPM<br/>Laravel 11"]
    queue["Queue Worker<br/>artisan queue:work"]
    cron["Scheduler<br/>artisan schedule:run"]
    db[("MySQL 8.4")]
    storage["Local storage<br/>XML / CDR / PDF"]
    sunat["SUNAT<br/>SOAP + REST"]

    user --> nginx
    nginx --> db
    nginx -->|dispatch job| queue
    queue -->|sends XML| sunat
    queue --> storage
    cron --> db

    classDef edge fill:#0D1117,stroke:#4ADE80,color:#E5E7EB
    classDef db fill:#0D1117,stroke:#06B6D4,color:#E5E7EB
    classDef ext fill:#111827,stroke:#374151,color:#9CA3AF

    class user ext
    class nginx,queue,cron edge
    class db,storage db
    class sunat ext`,
                            ascii: ""
                        }
                    },
                    stack: {
                        frontend: ["Filament 3", "Livewire 3", "Blade", "Alpine.js", "Tailwind CSS"],
                        backend: ["Laravel 11.52", "PHP 8.3", "Sanctum (API)", "Greenter v5 (SOAP)", "gre-api v1 (OAuth2)"],
                        data: ["MySQL 8.4 (60+ tables)", "Redis (optional)", "Local storage / S3"],
                        devops: ["GitHub Actions", "Pest (49 tests)", "Sentry", "MercadoPago webhooks", "Spatie ActivityLog"]
                    },
                    codeHighlights: [
                        {
                            file: "app/Domain/Services/TaxCalculator.php",
                            lang: "php",
                            note: "Single source of tax math: 18% IGV, exempt and free items",
                            code: `public function calculate(Document $d): Totals
{
    $taxed   = $d->items->where('affectation', '10'); // taxed
    $igvBase = $taxed->sum(fn ($i) => $i->qty * $i->unitValue);
    $igv     = round($igvBase * 0.18, 2);

    return new Totals(
        taxed:   $igvBase,
        igv:     $igv,
        exempt:  $d->items->where('affectation', '20')->sum('amount'),
        free:    $d->items->where('affectation', '21')->sum('amount'),
        total:   $igvBase + $igv,
    );
}`
                        },
                        {
                            file: "app/Domain/UseCases/IssueDocument.php",
                            lang: "php",
                            note: "Invokable use case: local sign + async dispatch, never touches SUNAT in-request",
                            code: `public function __invoke(IssueDto $dto): Document
{
    return DB::transaction(function () use ($dto) {
        $number = $this->numbering->next($dto->company, $dto->type, $dto->series);
        $xml    = $this->signer->sign($this->builder->build($dto, $number));

        $document = Document::create([
            ...$dto->toArray(),
            'number' => $number,
            'xml'    => $xml,
            'status' => Status::Pending,
        ]);

        SendDocumentJob::dispatch($document); // SUNAT in the background
        return $document;
    });
}`
                        }
                    ],
                    techChallenges: [
                        {
                            tags: ["concurrency", "database", "sunat"],
                            problem: "Gap-free, duplicate-free document numbering under concurrent issuance",
                            constraint: "SUNAT requires sequential numbering per series with no gaps. Two simultaneous requests asking for the next number can produce duplicates (SUNAT rejection) or gaps (observation).",
                            approach: "The next correlative is read inside a transaction with a pessimistic lock (SELECT ... FOR UPDATE) on the counter row. The second request waits for the first. Assignment is local — it never depends on SUNAT.",
                            algorithm: "Pessimistic locking: lockForUpdate() inside DB::transaction(). The counter row is locked until commit, serializing the increments.",
                            codeFile: "app/Domain/Services/NumberingService.php",
                            codeLang: "php",
                            code: `public function next(Company $company, string $type, string $series): int
{
    return DB::transaction(function () use ($company, $type, $series) {
        $counter = Correlative::where('company_id', $company->id)
            ->where('type', $type)
            ->where('series', $series)
            ->lockForUpdate()        // SELECT ... FOR UPDATE
            ->firstOrCreate([], ['number' => 0]);

        $counter->increment('number');
        return $counter->number; // no gaps, no duplicates
    });
}`,
                            outcome: "0 duplicate or gapped correlatives under concurrent load tests. Assignment is local (<5ms), independent of SUNAT latency."
                        },
                        {
                            tags: ["backend", "queues", "ux"],
                            problem: "HTTP must finish in <500ms even when SUNAT takes 30s to respond",
                            constraint: "The SOAP send to SUNAT can take seconds or time out. The user can't wait, but the document must still be recorded and sent.",
                            approach: "The use case signs the XML and assigns the correlative locally (fast), persists the document as 'pending', and dispatches a queue job. The controller returns 202 Accepted immediately. The worker sends to SUNAT and updates status; the UI polls.",
                            algorithm: "Command-Query split + async queue: synchronous issuance (sign + number) / asynchronous send (SUNAT). Document status is a state machine: pending → sent → accepted/rejected.",
                            codeFile: "app/Http/Controllers/Api/DocumentController.php",
                            codeLang: "php",
                            code: `public function store(IssueDocumentRequest $req): JsonResponse
{
    // Sign XML + local correlative — fast, never touches SUNAT
    $document = $this->issue->handle($req->toDto());

    // Send to SUNAT in the background
    SendDocumentJob::dispatch($document);

    return response()->json(
        DocumentResource::make($document),
        202 // Accepted: not yet confirmed by SUNAT
    );
}`,
                            outcome: "HTTP response p95 < 500ms even with SUNAT slow. Automatic retries (3 tries, 10s backoff) if SUNAT is down, without losing the document."
                        },
                        {
                            tags: ["multi-tenant", "security", "laravel"],
                            problem: "Isolate data across companies with no leaks, without filtering manually in every query",
                            constraint: "An accountant sees N companies; an owner only theirs. Forgetting one where('company_id', ...) in any query leaks another tenant's data — a serious security bug.",
                            approach: "A BelongsToTenant trait adds an automatic global scope to every tenant-owned model: every query filters by the current user's companies, and on create the company_id is auto-filled. Impossible to forget.",
                            algorithm: "Global query scope + model events. Isolation lives in one place (the trait), not scattered across controllers. Explicit cross-tenant tests verify there's no leak.",
                            codeFile: "app/Models/Concerns/BelongsToTenant.php",
                            codeLang: "php",
                            code: `protected static function bootBelongsToTenant(): void
{
    static::addGlobalScope('tenant', function (Builder $q) {
        if ($user = auth()->user()) {
            $q->whereIn('company_id', $user->companyIds());
        }
    });

    static::creating(function ($model) {
        $model->company_id ??= currentCompany()->id;
    });
}`,
                            outcome: "0 cross-tenant leaks across 49 Pest tests (including cases that explicitly try to read another company's data). A single security audit point."
                        },
                        {
                            tags: ["sunat", "oauth2", "async"],
                            problem: "The dispatch guide (GRE) uses an async OAuth2 REST API, different from the document SOAP",
                            constraint: "While Invoice/Receipt go over SOAP, the GRE 09 uses gre-api: OAuth2 client_credentials, a send that returns a ticket, and status lookup by polling. Two SUNAT integrations with opposite contracts.",
                            approach: "A separate GreService handles the OAuth2 flow: caches the token ~50min, sends the XML and gets a ticket, then dispatches a delayed polling job that checks status until resolved. Reuses the same document state machine.",
                            algorithm: "Cached token bucket + ticket polling with backoff. The GRE flow is an async sub-graph within the same state model, isolated in its own service.",
                            codeFile: "app/Domain/Integrations/Sunat/GreService.php",
                            codeLang: "php",
                            code: `// OAuth2 client_credentials, cached ~50min
$token = Cache::remember('gre_token', 3000, fn () => $this->oauth());

// Send returns a ticket, not the CDR directly
$ticket = $this->client->sendGuide($signedXml, $token);

// Async polling of the ticket status
CheckGreTicketJob::dispatch($document, $ticket)
    ->delay(now()->addSeconds(5));`,
                            outcome: "GRE delivered reliably via polling + backoff, without blocking or mixing with the document SOAP flow. Same final status (accepted/rejected) for the whole UI."
                        }
                    ],
                    testing: {
                        strategy: "49 Pest tests covering:\n- Issuance of each document type (01/03/07/08)\n- Tax calculation (IGV, ISC, exempt, free items)\n- Multi-tenant isolation (explicit cross-tenant cases)\n- Plan quotas (free 100/mo, pro unlimited)\n- Concurrent numbering\nGitHub Actions runs the suite + MySQL migrations on every push.",
                        coverage: "49 tests",
                        tools: ["Pest", "GitHub Actions", "MySQL in CI", "SUNAT_FAKE for offline tests"]
                    },
                    metrics: [
                        { value: "8+", label: "SUNAT document types" },
                        { value: "47", label: "REST API endpoints" },
                        { value: "<500ms", label: "HTTP response (SUNAT async)" },
                        { value: "60+", label: "tables, 49 Pest tests" }
                    ],
                    challenges: "Concurrent numbering, unpredictable SUNAT latency, leak-free multi-tenancy, and the GRE with its different OAuth2 API. The technical breakdowns are in section 06.",
                    results: "A system that issues the full SUNAT catalog with native tenancy, demoable 100% offline (Fake mode signs real XML and simulates the CDR), with a REST API documented via OpenAPI 3.0 + Swagger UI + an official PHP SDK. Production-ready with real SEE credentials.",
                    lessons: [
                        {
                            title: "Fake mode from day one, not as an afterthought",
                            body: "SUNAT_FAKE=true signs real XML but simulates an accepted CDR. It enabled demos without credentials, offline dev, and deterministic tests. Had every test depended on real SUNAT, the feedback loop would've been unworkable. A critical external integration needs a double from the very first commit."
                        },
                        {
                            title: "The async queue isn't an optimization, it's a requirement",
                            body: "Starting with synchronous sends and 'optimizing later' would've meant rewriting the whole flow. When the external dependency is unpredictable (SUNAT can take 30s or go down), async is part of the design, not an add-on. Modeling document status as a state machine made it natural."
                        },
                        {
                            title: "Global scopes > manual filters for multi-tenancy",
                            body: "Centralizing isolation in a trait with a global scope turned 'security that depends on no dev ever forgetting a where' into 'secure by default, impossible to forget'. The cost: discipline with the scopes on super-admin queries, where you do have to bypass them explicitly."
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
                    type: "product",
                    year: "2024",
                    role: "FE · BE · Integrations",
                    fullDescription: "Portal for an educational institution that centralizes resources, communications and the academic calendar. Replaced a tangle of loose emails and PDFs with a panel where teachers publish material, students get segmented notifications, and everything syncs to Google Calendar.",
                    problem: "Communication lived in WhatsApp groups and email: lost material, notices that never arrived, stale dates. No one had a single source of truth for the academic calendar.",
                    audience: "Academic coordinators, teachers and students at an institution running several programs in parallel.",
                    infrastructure: {
                        provider: "Laravel + MySQL (VPS)",
                        services: ["PHP-FPM + Laravel", "MySQL", "Google Calendar API", "Queue for notifications (email + push)", "Storage for material"],
                        diagram: {
                            mermaid: `flowchart TD
    teacher[Teacher] -->|publishes resource| app["Portal (Laravel + Livewire)"]
    app --> db[(MySQL)]
    app -->|notifies| queue[Queue]
    queue --> mail[Email / Push]
    app -->|syncs| gcal[Google Calendar]
    student[Student] --> app

    classDef edge fill:#0D1117,stroke:#4ADE80,color:#E5E7EB
    classDef db fill:#0D1117,stroke:#06B6D4,color:#E5E7EB
    classDef ext fill:#111827,stroke:#374151,color:#9CA3AF
    class teacher,student ext
    class app,queue edge
    class db,mail,gcal db`
                        }
                    },
                    techChallenges: [
                        {
                            tags: ["notifications", "laravel", "ux"],
                            problem: "Notify only the relevant students without spamming the whole institution",
                            constraint: "A course notice must not reach students in other programs. Groups change every term.",
                            approach: "Segmentation by relationship (course → enrollments → students) resolved in one query, with notifications queued per channel (email/push) based on each student's preference.",
                            algorithm: "Relationship fan-out on a queue: one notification expands to N recipients via a batch job, honoring per-channel opt-in.",
                            codeFile: "app/Notifications/ResourcePublished.php",
                            codeLang: "php",
                            code: `public function via(object $notifiable): array
{
    return $notifiable->prefersPush()
        ? ['database', 'broadcast']
        : ['database', 'mail'];
}

// The course fans out only to its enrolled students
Notification::send(
    $course->activeStudents(),     // relationship, not the whole DB
    new ResourcePublished($resource)
);`,
                            outcome: "Notices reach only the right course; students pick their channel. 'I didn't get it' complaints dropped to near zero."
                        }
                    ],
                    metrics: [
                        { value: "1 source", label: "of truth for the calendar" },
                        { value: "0 PDFs", label: "loose over email" },
                        { value: "push + email", label: "by preference" }
                    ],
                    results: "The academic calendar and material stopped living in WhatsApp. Coordination publishes once and the system segments and notifies.",
                    lessons: [
                        {
                            title: "Segment by relationship, not by manual list",
                            body: "Hand-maintained recipient lists drift out of sync every term. Deriving recipients from the course→enrollment relationship made segmentation always correct with zero maintenance."
                        }
                    ]
                },
                {
                    slug: "whatsapp-cotizador",
                    title: "WhatsApp Quote Bot",
                    description: "Chatbot that answers inquiries 24/7, calculates quotes from your catalog and schedules appointments automatically.",
                    tech: ["n8n", "WhatsApp API", "OpenAI", "Google Sheets"],
                    image: msCrmImage,
                    type: "case",
                    year: "2025",
                    role: "Automation · AI · Integrations",
                    fullDescription: "A WhatsApp bot that handles sales inquiries 24/7: it understands natural language with an LLM, builds quotes by reading the catalog from Google Sheets, and books appointments on the calendar. Orchestrated in n8n, with no server of its own to maintain.",
                    problem: "The sales team answered the same pricing questions all day, lost leads after hours, and manual quotes took hours. WhatsApp was the channel but it didn't scale.",
                    audience: "SMBs with a product/service catalog that get WhatsApp inquiries and want to quote and book without someone glued to the phone.",
                    infrastructure: {
                        provider: "n8n (self-host or cloud) + WhatsApp Business API",
                        services: ["n8n (workflow orchestration)", "WhatsApp Business API (Meta/Twilio)", "OpenAI (NLU + intent extraction)", "Google Sheets (catalog + prices)", "Google Calendar (scheduling)"],
                        diagram: {
                            mermaid: `flowchart TD
    user((("Customer"))) -->|message| wa[WhatsApp API]
    wa --> n8n["n8n workflow"]
    n8n -->|intent + entities| ai[OpenAI]
    ai --> n8n
    n8n -->|reads prices| sheets[Google Sheets]
    n8n -->|books| cal[Google Calendar]
    n8n -->|replies with quote| wa
    wa --> user

    classDef person fill:#0D1117,stroke:#4ADE80,color:#E5E7EB
    classDef edge fill:#0D1117,stroke:#06B6D4,color:#E5E7EB
    classDef ext fill:#111827,stroke:#374151,color:#9CA3AF
    class user person
    class n8n edge
    class wa,ai,sheets,cal ext`
                        }
                    },
                    techChallenges: [
                        {
                            tags: ["ai", "nlu", "automation"],
                            problem: "Turn a customer's free text into a structured, trustworthy quote",
                            constraint: "The customer writes 'how much for 3 boxes of the blue one for Friday'. You must extract product, quantity and date without hallucinating prices.",
                            approach: "The LLM only extracts intent + entities (product, qty, date) as JSON; PRICES come from n8n reading Google Sheets, never from the model. So the LLM interprets but never invents numbers.",
                            algorithm: "NLU/compute split: the model does structured extraction, the workflow does the deterministic price lookup. The LLM never touches the final number.",
                            codeFile: "n8n · OpenAI node (system prompt)",
                            codeLang: "javascript",
                            code: `// The model ONLY extracts, never quotes
{
  "system": "Extract intent and entities as JSON. Never invent prices.",
  "schema": {
    "intent": "quote | schedule | other",
    "product": "string",
    "qty": "number",
    "date": "ISO date | null"
  }
}
// n8n then: price = lookup(sheets, product) * qty`
                        }
                    ],
                    metrics: [
                        { value: "24/7", label: "service with no human" },
                        { value: "<1 min", label: "quote vs hours before" },
                        { value: "0 prices", label: "invented by the LLM" }
                    ],
                    results: "After-hours leads stop slipping away, quotes go out instantly from the real catalog, and the team only steps in once the bot books a meeting.",
                    lessons: [
                        {
                            title: "The LLM interprets; the system decides the numbers",
                            body: "Letting the model 'quote' leads to invented prices. Constraining it to entity extraction and resolving the price with a deterministic lookup was the difference between demo and production."
                        }
                    ]
                },
                {
                    slug: "facturas-automaticas",
                    title: "Automatic Invoicing",
                    description: "Detects payments in Stripe/PayPal, generates electronic invoices and sends them to the client. Zero manual work.",
                    tech: ["n8n", "Stripe", "Tax API", "Email"],
                    image: msCrmImage3,
                    type: "case",
                    year: "2025",
                    role: "Automation · Integrations",
                    fullDescription: "A flow that closes the payment→invoice loop: a Stripe/PayPal webhook triggers SUNAT document issuance, generates the PDF and emails it to the customer. The admin team goes from invoicing by hand to only reviewing exceptions.",
                    problem: "Every payment forced someone to log into the SUNAT panel, issue the invoice, download the PDF and email it. Hours of repetitive work, with invoices issued late or forgotten.",
                    audience: "Businesses that charge online (Stripe/PayPal) and are required to issue a SUNAT document for each sale.",
                    infrastructure: {
                        provider: "n8n + Stripe webhooks + SUNAT API",
                        services: ["Stripe/PayPal webhooks (payment event)", "n8n (orchestration + idempotency)", "SUNAT API (issuance via Greenter/REST)", "Email (PDF delivery)"],
                        diagram: {
                            mermaid: `flowchart TD
    pay[Stripe/PayPal payment] -->|webhook| n8n["n8n workflow"]
    n8n -->|dedup by payment_id| guard{already issued?}
    guard -->|no| sunat[SUNAT API]
    sunat --> pdf[Generate PDF]
    pdf --> mail[Email to customer]
    guard -->|yes| skip[Skip]

    classDef edge fill:#0D1117,stroke:#06B6D4,color:#E5E7EB
    classDef ext fill:#111827,stroke:#374151,color:#9CA3AF
    classDef db fill:#0D1117,stroke:#4ADE80,color:#E5E7EB
    class n8n edge
    class pay,sunat,mail ext
    class pdf,guard,skip db`
                        }
                    },
                    techChallenges: [
                        {
                            tags: ["webhooks", "idempotency", "automation"],
                            problem: "The same payment must not generate two invoices",
                            constraint: "Stripe retries webhooks; a timeout or a retry can fire the flow twice. A duplicate invoice in SUNAT is a real tax problem.",
                            approach: "Idempotency by payment_id: before issuing, the workflow checks whether a document already exists for that payment. Stripe also signs each webhook (HMAC), validated before processing.",
                            algorithm: "Dedup key (payment_id) + signature verification. The first event issues; retries fall into the 'already issued' branch.",
                            codeFile: "n8n · Function node (guard)",
                            codeLang: "javascript",
                            code: `// Idempotency: the payment_id is the key
const exists = await db.invoices.findOne({ payment_id });
if (exists) return { skip: true };   // Stripe retry → no-op

// Only the first event reaches here
return { emit: true, payment_id, amount, customer };`
                        }
                    ],
                    metrics: [
                        { value: "0 manual", label: "hand-typed invoices" },
                        { value: "1 invoice", label: "per payment (idempotent)" },
                        { value: "seconds", label: "payment → PDF to customer" }
                    ],
                    results: "Charging and invoicing are now glued together: each payment issues its document and sends it on its own. Admin only watches the exceptions log.",
                    lessons: [
                        {
                            title: "Webhooks without idempotency = guaranteed duplicates",
                            body: "Assuming a webhook arrives exactly once is the recipe for duplicate invoices. A payment_id dedup key from day one avoided the tax problem before it could exist."
                        }
                    ]
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

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
                    sequences: [
                        {
                            title: "Emitir comprobante",
                            description: "Diagrama real del proyecto. Fase 1 sincrona dentro del request (recalculo de montos, detraccion SPOT, correlativo atomico con FOR UPDATE, commit y encolado); Fase 2 async en el worker (build UBL + firma + envio); Fase 3 listeners en paralelo (email, descuento de stock, notificacion, webhook); y el sad path con reintento por backoff.",
                            mermaid: `sequenceDiagram
    autonumber
    actor User as Vendedor
    participant UI as Panel
    participant UC as EmitirComprobante
    participant CT as CalculadoraTributaria
    participant Num as NumeradorService
    participant Comp as Comprobante
    participant DB as MySQL
    participant Q as Queue
    participant W as Worker
    participant Build as DocumentBuilder
    participant SS as SunatService
    participant SUNAT as SUNAT
    participant Ev as Event Bus
    participant Lis as Listeners

    rect rgb(13, 20, 30)
    Note over User,DB: FASE 1 - Sincrono dentro del request HTTP

    User->>UI: click Emitir
    UI->>UC: invoke comprobante

    UC->>UC: validar estado editable, detalles no vacio, cliente asignado
    alt validacion falla
        UC-->>UI: throw DomainException
        UI-->>User: mensaje de error
    end

    UC->>DB: BEGIN TRANSACTION

    Note over UC,Comp: Paso A - Recalcular montos de todas las lineas

    loop por cada detalle
        UC->>CT: calcularLinea con LineaInput
        CT-->>UC: LineaCalculada con valorVenta igv icbper total
        UC->>Comp: detalle aplicarMontosDesde EN MEMORIA solamente
    end

    UC->>Comp: sincronizarMontosDetalles
    Comp->>DB: 1 sola query INSERT ON DUPLICATE KEY UPDATE para los N detalles

    UC->>CT: calcularTotales lineas y descuento global
    CT-->>UC: TotalesComprobante con oper gravadas exoneradas inafectas igv total
    UC->>Comp: fill totales y save
    Comp->>DB: UPDATE comprobante SET totales recalculados

    Note over UC,Comp: Paso B - Validar y aplicar detraccion SPOT

    UC->>Comp: aplicarDetraccion
    alt aplica detraccion y porcentaje presente
        Comp->>Comp: verificar umbral minimo del rubro Cat 54
        alt total bajo umbral
            Comp-->>UC: throw DomainException el rubro X requiere total mayor a S/ N
            UC-->>UI: re throw rollback de transaccion
        end
        Comp->>Comp: detraccion_monto igual round total por porcentaje
        Comp->>DB: UPDATE comprobante SET detraccion_monto
    end

    Note over UC,Num: Paso C - Asignar correlativo atomico

    alt correlativo es null
        UC->>Num: siguiente sobre serieModel
        Num->>DB: SELECT correlativo_actual FOR UPDATE sobre fila series
        Num->>DB: UPDATE series SET correlativo_actual mas 1
        Num-->>UC: correlativo N
        UC->>Comp: correlativo igual N
    end

    UC->>Comp: estado igual ENCOLADO y save
    Comp->>DB: UPDATE comprobante SET correlativo y estado

    UC->>DB: COMMIT

    UC->>Q: dispatch EnviarComprobanteASunat con id
    UC-->>UI: void
    UI-->>User: comprobante encolado para envio
    end

    rect rgb(28, 23, 12)
    Note over W,SUNAT: FASE 2 - Async en el worker fuera del request

    W->>Q: reservar job
    W->>DB: SELECT comprobante con empresa cliente detalles relacionados
    DB-->>W: comprobante

    alt estado ya emitido o RECHAZADO
        Note over W: Idempotencia skip si fue retry duplicado
        W-->>Q: ACK sin enviar
    else continua envio
        W->>Build: build con comprobante
        Build-->>W: DocumentInterface Invoice UBL 2.1

        W->>SS: enviar comprobante y document
        Note over SS,SUNAT: Aca pasa toda la firma XMLDSig + SOAP + CDR<br>ver flujo de firma y envio para el detalle
        SS-->>W: EnvioResultado con success code description cdr paths

        W->>W: aplicarResultado mapea code a estado
        W->>DB: UPDATE comprobante SET estado code description observaciones hash

        W->>Ev: dispatch ComprobanteEstadoActualizado con comprobante refrescado
        W-->>Q: ACK
    end
    end

    rect rgb(12, 26, 16)
    Note over Ev,Lis: FASE 3 - Listeners reaccionan al event en paralelo

    Ev->>Lis: EnviarComprobanteAceptadoMail
    alt estado emitido y cliente con email
        Lis->>Lis: Mail to cliente con PDF y XML
    end

    Ev->>Lis: DescontarStockComprobanteAceptado
    alt estado ACEPTADO o ACEPTADO_OBSERVADO
        loop por cada detalle con producto y controla_stock
            Lis->>DB: INSERT movimientos_stock y UPDATE productos stock_actual
        end
    end

    Ev->>Lis: NotificarOwnerEstadoComprobante
    Lis->>DB: INSERT notificacion in app para el owner bell icon

    Ev->>Lis: DespacharWebhookComprobante
    alt estado terminal aceptado rechazado error
        Lis->>Lis: POST a cada webhook suscrito de la empresa
    end
    end

    rect rgb(30, 14, 14)
    Note over W,DB: SAD PATH - job revienta antes de aplicarResultado

    Note over W: Exception no manejada timeout SOAP cert vencido OOM
    W->>W: failed Throwable callback
    W->>DB: UPDATE comprobante SET estado ERROR_ENVIO code JOB_FAILED description substr 500

    Note over W,DB: Si tries menor a 3 backoff 30s reintento automatico<br>Si tries igual 3 queda en failed_jobs para reintento manual desde panel
    end`
                        },
                        {
                            title: "Firma XMLDSig y envio SOAP a SUNAT",
                            description: "Diagrama real del proyecto. Detalle de la firma y envio: carga del certificado PEM por empresa, firma XMLDSig del UBL 2.1 (la clave privada nunca sale del server), envio SOAP con WSSE UsernameToken sobre TLS, y parseo del CDR firmado por SUNAT.",
                            mermaid: `sequenceDiagram
    autonumber
    participant Job as EnviarComprobanteASunat
    participant SS as SunatService
    participant GF as GreenterFactoryService
    participant See as GreenterSee
    participant FS as Storage
    participant DB as MySQL
    participant SUNAT as SUNAT_SOAP

    rect rgb(13, 20, 30)
    Note over Job,SUNAT: FASE 1 - Setup del cliente See para esta empresa

    Job->>SS: enviar comprobante y document
    SS->>GF: buildSee con empresa

    GF->>DB: SELECT certificado_path FROM empresas
    DB-->>GF: certs/demo.pem

    GF->>FS: file_get_contents del PEM
    FS-->>GF: contenido del PEM con cert publico mas clave privada
    Note over GF,FS: El PEM lleva clave PRIVADA y jamas sale del server

    GF->>See: new See
    GF->>See: setCertificate con el PEM
    GF->>See: setService con endpoint beta o produccion
    GF->>See: setClaveSOL con ruc y usuario y clave
    Note over See: see queda configurado con cert mas endpoint mas claveSOL
    See-->>GF: see instance
    GF-->>SS: see
    end

    rect rgb(28, 23, 12)
    Note over Job,SUNAT: FASE 2 - Firmar XML antes de enviar

    SS->>See: getXmlSigned con document
    Note over See: 1 Serializa Invoice a XML UBL 2.1
    Note over See: 2 Calcula SHA256 del XML canonicalizado
    Note over See: 3 Cifra digest con CLAVE PRIVADA del cert
    Note over See: 4 Embebe ds Signature en el XML
    See-->>SS: xmlFirmado con ds Signature dentro

    SS->>FS: Storage put del xml firmado
    SS->>DB: UPDATE comprobantes SET xml_path
    Note over SS,FS: Guardamos el XML antes de enviar como evidencia
    end

    rect rgb(12, 26, 16)
    Note over Job,SUNAT: FASE 3 - Envio SOAP a SUNAT con firma dentro del XML

    SS->>See: send con document
    Note over See: Envuelve XML firmado en ZIP
    Note over See: Construye SOAP con WSSE UsernameToken
    Note over See: username es RUC mas USUARIO_SOL
    Note over See: password es claveSOL plaintext sobre TLS
    Note over See: POST HTTPS al endpoint billService

    See->>SUNAT: POST HTTPS con SOAP body con XML firmado en base64
    Note over SUNAT: SUNAT valida en orden 1 WSSE UsernameToken
    Note over SUNAT: 2 Firma XMLDSig usando cert publico embebido
    Note over SUNAT: 3 Esquema UBL 2.1 y montos
    SUNAT-->>See: SOAP response con applicationResponse ZIP del CDR

    See-->>SS: BillResult con success cdrZip y error
    end

    rect rgb(30, 14, 14)
    Note over Job,SUNAT: FASE 4 - Procesar el CDR firmado por SUNAT

    alt envio exitoso
        SS->>FS: Storage put del CDR zip
        SS->>DB: UPDATE comprobantes SET cdr_path

        SS->>SS: cdrParser parse del cdrZip
        Note over SS: 1 Descomprime ZIP
        Note over SS: 2 Lee XML del CDR
        Note over SS: 3 Extrae ResponseCode 0 aceptado o 2074 rechazado
        Note over SS: 4 Extrae Notes con observaciones
        Note over SS: 5 NO verifica firma de SUNAT se confia por TLS
        SS->>SS: new CdrResultado con code description notes
    else error tecnico timeout o SUNAT caida
        SS->>DB: INSERT sunat_logs con exception
        SS-->>Job: throw con Job tries 3 y backoff 30s
    end

    SS->>SS: new EnvioResultado con success code description cdr y paths

    SS->>DB: INSERT sunat_logs con request response y duracion_ms

    SS-->>Job: EnvioResultado
    end`
                        },
                        {
                            title: "Anular comprobante (comunicacion de baja)",
                            description: "Diagrama real del proyecto. Valida el plazo de 7 dias, agrupa N anulaciones del dia en una sola Comunicacion de Baja (1 RA), envia async con polling del ticket cada 30s, y revierte el estado del comprobante en los caminos de error.",
                            mermaid: `sequenceDiagram
    autonumber
    actor User as Vendedor
    participant UI as Panel/API
    participant UC as AnularComprobante
    participant DB
    participant Q as Queue
    participant W as queue:work
    participant B as BajaBuilderService
    participant S as BajaService<br/>(Real o Fake)
    participant SUNAT

    rect rgb(13, 20, 30)
    Note over User,DB: Fase 1 - Validacion + persistencia (sync)

    User->>UI: accion Anular + motivo
    UI->>UC: __invoke(comprobante, motivo)

    UC->>UC: validar()
    alt comprobante NO esta emitido
        UC-->>UI: throw DomainException<br/>Solo se puede anular aceptado por SUNAT
    else fecha_emision mas de 7 dias
        UC-->>UI: throw DomainException<br/>Han pasado N dias - Use Nota de Credito
    end

    UC->>DB: BEGIN TRANSACTION

    UC->>DB: SELECT comunicacion_bajas<br/>WHERE empresa_id=? AND fecha=hoy<br/>AND estado=borrador FOR UPDATE
    DB-->>UC: cb existente o null

    alt CB del dia ya existe en borrador
        Note over UC: Reusar - 1 RA agrupa N anulaciones
    else no existe
        UC->>DB: SELECT max(correlativo)+1 FOR UPDATE
        UC->>DB: INSERT comunicacion_baja (correlativo, estado=borrador)
    end

    UC->>DB: INSERT comunicacion_baja_detalle (cb_id, comprobante_id, motivo)
    UC->>DB: UPDATE comprobante SET estado=ANULADO_PENDIENTE

    alt CB estaba en BORRADOR
        UC->>DB: UPDATE cb SET estado=ENCOLADO
        UC->>Q: dispatch EnviarBajaASunat(cb.id)
        Note over UC,Q: Dispatch solo 1 vez por CB - anulaciones<br/>siguientes del dia NO encolan nuevo job
    end

    UC->>DB: COMMIT
    UC-->>UI: ComunicacionBaja con detalles
    UI-->>User: Anulacion registrada - pendiente envio SUNAT
    end

    rect rgb(28, 23, 12)
    Note over W,SUNAT: Fase 2 - Envio async (worker)

    W->>Q: reservar job EnviarBajaASunat
    W->>DB: SELECT cb WITH detalles.comprobante y empresa
    DB-->>W: cb fresco (incluye anulaciones agregadas mientras esperaba)

    alt cb.estado=ACEPTADA o RECHAZADA
        Note over W: Idempotencia - skip si retry duplicado
        W-->>Q: ACK
    else
        W->>B: build(cb)
        B-->>W: Voided UBL 2.1<br/>(VoidedDocumentsLine por cada detalle)

        W->>S: enviar(cb, document)
        S->>S: firmar XML + guardar en storage

        alt SUNAT_FAKE true
            S->>S: simular ticket + CDR aceptado
        else produccion
            S->>SUNAT: sendSummary SOAP
            SUNAT-->>S: ticket
            loop polling cada 30s, hasta 5 min
                S->>SUNAT: getStatus(ticket)
                SUNAT-->>S: PROCESANDO o ACEPTADO o RECHAZADO
            end
            S->>S: guardar CDR
        end

        S-->>W: BajaEnvioResultado<br/>success, ticket, xml, cdr

        W->>W: aplicarResultado()
        W->>DB: BEGIN TRANSACTION

        alt resultado.aceptado()
            W->>DB: UPDATE cb SET estado=ACEPTADA, ticket, hash
            loop por cada detalle de la CB
                W->>DB: UPDATE comprobante SET estado=ANULADO
            end
        else resultado.success false
            W->>DB: UPDATE cb SET estado=ERROR
            loop por cada detalle
                W->>DB: UPDATE comprobante SET estado=ACEPTADO<br/>(revertir para que user reintente)
            end
        else rechazado (success pero CDR no cero)
            W->>DB: UPDATE cb SET estado=RECHAZADA, codigo, descripcion
            loop por cada detalle
                W->>DB: UPDATE comprobante SET estado=ACEPTADO (revertir)
            end
        end

        W->>DB: COMMIT
        W-->>Q: ACK
    end
    end

    rect rgb(30, 14, 14)
    Note over W,DB: Fase 3 - Sad path - job revienta

    W->>W: failed(Throwable)
    W->>DB: UPDATE cb SET estado=ERROR, code=JOB_FAILED
    loop por cada detalle
        W->>DB: UPDATE comprobante SET estado=ACEPTADO (revertir)
    end
    end`
                        },
                        {
                            title: "Resumen diario de boletas",
                            description: "Diagrama real del proyecto. Agrega las boletas (tipo 03) no resumidas del dia, separa la generacion del envio para que el contador revise antes, y envia async con polling del ticket. Una boleta solo puede estar en un resumen (check NOT EXISTS).",
                            mermaid: `sequenceDiagram
    autonumber
    actor User as Contador
    participant UI as Panel/API
    participant Gen as GenerarResumenDiario<br/>__invoke
    participant DB
    participant Env as GenerarResumenDiario<br/>enviarASunat
    participant Q as Queue
    participant W as queue:work
    participant S as ResumenService<br/>(Real o Fake)
    participant SUNAT as SUNAT SOAP

    rect rgb(13, 20, 30)
    Note over User,DB: Fase 1 - Generacion (agregar boletas no resumidas)

    User->>UI: GenerarResumenDiario para fecha_referencia
    UI->>Gen: __invoke(empresa, fechaRef)

    Gen->>DB: SELECT resumen WHERE empresa AND fecha_referencia=fechaRef<br/>AND estado in (aceptada, encolado, enviado_pendiente)
    DB-->>Gen: resumen existente o null

    alt ya existe RC para esa fecha
        Gen-->>UI: throw DomainException<br/>Ya existe un resumen (RC-YYYYMMDD-N)<br/>para fecha X en estado Y
    end

    Gen->>DB: SELECT boletas WHERE empresa<br/>AND tipo_comprobante=03<br/>AND fecha_emision=fechaRef<br/>AND estado in (aceptado, anulado)<br/>AND NOT EXISTS resumen_items con ese comprobante_id
    DB-->>Gen: boletas elegibles

    alt boletas vacio
        Gen-->>UI: throw DomainException<br/>No hay boletas elegibles para resumir
    end

    Gen->>DB: BEGIN TRANSACTION
    Gen->>DB: SELECT count(resumenes hoy) para correlativo
    Gen->>DB: INSERT resumen_diario<br/>(empresa, fecha_generacion=hoy,<br/>fecha_referencia=fechaRef,<br/>correlativo, estado=borrador)
    DB-->>Gen: resumen.id=12

    loop por cada boleta
        Gen->>DB: INSERT resumen_diario_item<br/>(resumen_id=12, comprobante_id,<br/>tipo_doc=03, serie, correlativo,<br/>estado_item=3 si ANULADO sino 1,<br/>moneda, total, mto_oper_*, mto_igv,<br/>cliente_tipo_doc, cliente_num_doc)
    end

    Gen->>DB: COMMIT
    Gen-->>UI: resumen con items cargados
    UI-->>User: RC-YYYYMMDD-N generado con N items - revisalo antes de enviar
    end

    rect rgb(28, 23, 12)
    Note over User,SUNAT: Fase 2 - Envio a SUNAT (separado para que el user revise antes)

    User->>UI: click Enviar a SUNAT
    UI->>Env: enviarASunat(resumen)

    Env->>Env: validar estado=borrador
    alt estado distinto borrador
        Env-->>UI: throw DomainException
    end

    Env->>DB: UPDATE resumen SET estado=encolado
    Env->>Q: dispatch EnviarResumenDiarioASunat(resumen.id)
    Env-->>UI: encolado

    Note over W,SUNAT: Worker procesa async (similar a Comunicacion de Baja)

    W->>Q: reservar job
    W->>DB: SELECT resumen WITH items
    DB-->>W: resumen

    W->>S: enviar(resumen)
    S->>S: armar Summary UBL 2.1 + firmar

    alt SUNAT_FAKE true
        S->>S: simular ticket + CDR aceptado
    else produccion
        S->>SUNAT: sendSummary SOAP
        SUNAT-->>S: ticket
        loop polling cada 30s, hasta 5 min
            S->>SUNAT: getStatus(ticket)
            SUNAT-->>S: PROCESANDO o ACEPTADA o RECHAZADA
        end
        S->>S: guardar CDR
    end

    S-->>W: ResumenEnvioResultado

    alt aceptada
        W->>DB: UPDATE resumen SET estado=ACEPTADA, ticket, hash, cdr
    else rechazada
        W->>DB: UPDATE resumen SET estado=RECHAZADA, codigo, descripcion
    else error
        W->>DB: UPDATE resumen SET estado=ERROR_ENVIO
    end
    end`
                        }
                    ],
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
                    type: "caso",
                    year: "2025",
                    role: "Scraping · Automatizacion · Datos",
                    fullDescription: "Un scraper en Python recorre las paginas de competidores cada dia, guarda el historico de precios en PostgreSQL, y un flujo n8n alerta por Telegram solo cuando hay cambios significativos. El equipo comercial deja de revisar webs a mano y reacciona el mismo dia a un cambio de precio.",
                    problem: "Saber si la competencia subio o bajo precios requeria que alguien abriera 15 webs cada manana. Lento, inconsistente, y los cambios se descubrian tarde.",
                    audience: "Retailers y e-commerce que compiten por precio y necesitan reaccionar rapido a movimientos de la competencia.",
                    infrastructure: {
                        provider: "Python scraper + n8n + PostgreSQL",
                        services: ["Scraper Python (requests + parser, rotacion de user-agent)", "Cron diario (n8n schedule)", "PostgreSQL (historico de precios)", "n8n (comparacion + umbral)", "Telegram Bot (alertas)"],
                        diagram: {
                            mermaid: `flowchart TD
    cron[Cron diario] --> scraper[Scraper Python]
    scraper -->|precios de hoy| db[(PostgreSQL)]
    db --> compare["n8n: compara vs ayer"]
    compare -->|cambio > umbral| tg[Telegram]
    compare -->|sin cambio| noop[No-op]

    classDef edge fill:#0D1117,stroke:#06B6D4,color:#E5E7EB
    classDef db fill:#0D1117,stroke:#4ADE80,color:#E5E7EB
    classDef ext fill:#111827,stroke:#374151,color:#9CA3AF
    class cron,scraper,tg ext
    class compare edge
    class db,noop db`
                        }
                    },
                    techChallenges: [
                        {
                            tags: ["scraping", "data", "automation"],
                            problem: "Alertar solo de cambios reales, no del ruido del scraping",
                            constraint: "Los sitios cambian de markup, devuelven precios con formato variable o fallan intermitentemente. Alertar de cada diferencia llenaria Telegram de falsos positivos.",
                            approach: "Se compara contra el ultimo precio valido en PostgreSQL y solo se alerta si el delta supera un umbral (ej. >2%). Lecturas nulas o atipicas se descartan en vez de tratarse como cambio.",
                            algorithm: "Diff con umbral sobre historico: alerta = |precio_hoy - precio_prev| / precio_prev > umbral, ignorando outliers.",
                            codeFile: "scraper/diff.py",
                            codeLang: "python",
                            code: `def should_alert(prev: float, today: float, threshold=0.02) -> bool:
    if prev is None or today is None or today <= 0:
        return False                      # lectura invalida → ignorar
    delta = abs(today - prev) / prev
    return delta > threshold              # solo cambios significativos`
                        }
                    ],
                    metrics: [
                        { value: "diario", label: "vs revision manual" },
                        { value: ">2%", label: "umbral de alerta" },
                        { value: "historico", label: "de precios en BD" }
                    ],
                    results: "Los cambios de precio de la competencia llegan por Telegram el mismo dia, sin abrir una sola web, y queda el historico para analizar tendencias.",
                    lessons: [
                        {
                            title: "Una alerta sin umbral es ruido",
                            body: "Alertar de cada diferencia, incluido el ruido del scraping, hace que la gente silencie el canal. Filtrar por umbral y descartar outliers fue lo que mantuvo las alertas accionables."
                        }
                    ]
                },
                {
                    slug: "iot-telemetria",
                    title: "Telemetria Industrial IoT",
                    description: "Lectura de sensores Modbus/MQTT en planta, dashboards en tiempo real y alertas tempranas de fallas.",
                    tech: ["MQTT", "Node-RED", "TimescaleDB", "Grafana"],
                    image: msCrmImage,
                    type: "caso",
                    year: "2024",
                    role: "IoT · Datos · Observabilidad",
                    fullDescription: "Telemetria para una planta industrial: gateways leen sensores Modbus/RS-485, publican por MQTT, Node-RED normaliza y persiste en TimescaleDB, y Grafana muestra dashboards en tiempo real con alertas tempranas de falla. Pasamos de revisar maquinas a mano a verlas desde un tablero.",
                    problem: "El estado de las maquinas se sabia solo cuando algo ya se habia roto. Sin historico, sin alertas: el mantenimiento era reactivo y caro.",
                    audience: "Plantas y operaciones industriales que tienen sensores/PLCs pero sin telemetria centralizada ni alertas.",
                    infrastructure: {
                        provider: "MQTT broker + Node-RED + TimescaleDB + Grafana",
                        services: ["Gateways (Modbus/RS-485 → MQTT)", "MQTT broker (Mosquitto)", "Node-RED (normalizacion + reglas)", "TimescaleDB (serie temporal)", "Grafana (dashboards + alertas)"],
                        diagram: {
                            mermaid: `flowchart TD
    sensores[Sensores Modbus/RS-485] --> gw[Gateway]
    gw -->|MQTT| broker[MQTT Broker]
    broker --> nodered[Node-RED]
    nodered -->|normaliza| ts[(TimescaleDB)]
    ts --> grafana[Grafana]
    nodered -->|umbral excedido| alerta[Alerta temprana]

    classDef edge fill:#0D1117,stroke:#06B6D4,color:#E5E7EB
    classDef db fill:#0D1117,stroke:#4ADE80,color:#E5E7EB
    classDef ext fill:#111827,stroke:#374151,color:#9CA3AF
    class sensores,gw,broker ext
    class nodered edge
    class ts,grafana,alerta db`
                        }
                    },
                    techChallenges: [
                        {
                            tags: ["iot", "timeseries", "data"],
                            problem: "Guardar miles de lecturas/min sin que la BD explote ni el dashboard se ponga lento",
                            constraint: "Decenas de sensores muestreando cada segundo generan millones de filas/dia. Una tabla normal en Postgres se vuelve impracticable para consultar.",
                            approach: "TimescaleDB con hypertables particionadas por tiempo + continuous aggregates: los dashboards consultan rollups por minuto/hora, no las filas crudas. Retencion automatica de datos viejos.",
                            algorithm: "Hypertable + continuous aggregate: el detalle se guarda comprimido, las consultas leen agregados precomputados. O(rollups) en vez de O(filas crudas).",
                            codeFile: "schema.sql",
                            codeLang: "sql",
                            code: `SELECT create_hypertable('lecturas', 'ts');

-- Rollup por minuto que el dashboard consulta
CREATE MATERIALIZED VIEW lecturas_1m
WITH (timescaledb.continuous) AS
SELECT time_bucket('1 minute', ts) AS bucket,
       sensor_id,
       avg(valor) AS avg_v,
       max(valor) AS max_v
FROM lecturas
GROUP BY bucket, sensor_id;`
                        }
                    ],
                    metrics: [
                        { value: "tiempo real", label: "estado de planta" },
                        { value: "alertas", label: "antes de la falla" },
                        { value: "historico", label: "para mantenimiento predictivo" }
                    ],
                    results: "El mantenimiento paso de reactivo a basado en datos: las anomalias disparan alertas antes del paro, y hay historico para analizar tendencias.",
                    lessons: [
                        {
                            title: "Serie temporal != tabla relacional comun",
                            body: "Intentar guardar telemetria en una tabla Postgres normal no escala. TimescaleDB con hypertables y continuous aggregates fue la diferencia entre dashboards instantaneos y consultas que timeouteaban."
                        }
                    ]
                },
                {
                    slug: "cloud-migration",
                    title: "Migracion a AWS",
                    description: "Migracion asistida de cargas legacy a AWS con IaC, observabilidad y gobernanza de costos desde el dia uno.",
                    tech: ["AWS", "Terraform", "Docker", "CloudWatch"],
                    image: msCrmImage2,
                    type: "caso",
                    year: "2024",
                    role: "Cloud · IaC · DevOps",
                    fullDescription: "Migracion de cargas legacy on-premise a AWS con todo como codigo: infraestructura en Terraform, apps dockerizadas en ECS, observabilidad con CloudWatch y gobernanza de costos con presupuestos y alertas desde el primer dia. No fue 'lift & shift' a ciegas, sino un baseline reproducible.",
                    problem: "Servidores fisicos al limite, sin redundancia, con deploys manuales y cero visibilidad de costos. Escalar significaba comprar hardware; un fallo de disco era un riesgo de negocio.",
                    audience: "Empresas con sistemas legacy en servidores propios que necesitan moverse a la nube sin perder el control de costos ni la trazabilidad.",
                    infrastructure: {
                        provider: "AWS (ECS, RDS, S3, CloudWatch) + Terraform",
                        services: ["Terraform (toda la infra como codigo)", "ECS + Docker (apps containerizadas)", "RDS (BD gestionada con backups)", "S3 + CloudFront (assets/CDN)", "CloudWatch (logs, metricas, alarmas)", "AWS Budgets (gobernanza de costos)"],
                        diagram: {
                            mermaid: `flowchart TD
    tf[Terraform] -->|provisiona| aws["AWS account"]
    subgraph aws ["AWS"]
        ecs["ECS + Docker"]
        rds[(RDS)]
        s3[S3 + CloudFront]
        cw[CloudWatch]
        budget[Budgets + alarmas]
    end
    ecs --> rds
    ecs --> s3
    ecs --> cw
    cw --> budget

    classDef edge fill:#0D1117,stroke:#4ADE80,color:#E5E7EB
    classDef db fill:#0D1117,stroke:#06B6D4,color:#E5E7EB
    class tf edge
    class ecs,s3,cw,budget edge
    class rds db
    style aws fill:transparent,stroke:#4ADE80,stroke-dasharray:4 4,color:#E5E7EB`
                        }
                    },
                    techChallenges: [
                        {
                            tags: ["iac", "cost", "devops"],
                            problem: "Migrar sin que la factura de AWS se dispare en el mes 1",
                            constraint: "Es facil sobre-provisionar (instancias grandes 'por si acaso') y descubrir el costo cuando llega la factura. El cliente venia de un CAPEX fijo y temia el OPEX variable.",
                            approach: "Todo en Terraform (nada de clicks en consola), sizing conservador con auto-scaling, y AWS Budgets con alarmas que avisan al 50/80/100% del presupuesto antes de que el mes cierre.",
                            algorithm: "Infra inmutable + presupuesto como guardrail: cada recurso es codigo revisable, y el gasto tiene un circuit-breaker (alarma) en vez de descubrirse post-factura.",
                            codeFile: "budget.tf",
                            codeLang: "hcl",
                            code: `resource "aws_budgets_budget" "monthly" {
  name         = "monthly-cost"
  budget_type  = "COST"
  limit_amount = "500"
  limit_unit   = "USD"
  time_unit    = "MONTHLY"

  notification {
    comparison_operator = "GREATER_THAN"
    threshold           = 80      # avisa al 80%, no post-factura
    threshold_type      = "PERCENTAGE"
    notification_type   = "ACTUAL"
    subscriber_email_addresses = [var.ops_email]
  }
}`
                        }
                    ],
                    metrics: [
                        { value: "100% IaC", label: "infra reproducible" },
                        { value: "alarmas", label: "de costo al 50/80/100%" },
                        { value: "0 deploys", label: "manuales" }
                    ],
                    results: "El cliente quedo con una infra versionada, con backups y observabilidad, y con visibilidad de costos en tiempo real. Recrear el entorno es `terraform apply`, no una semana de trabajo.",
                    lessons: [
                        {
                            title: "El presupuesto es parte de la arquitectura, no del cierre de mes",
                            body: "Tratar el costo como algo que se revisa cuando llega la factura es tarde. Poner AWS Budgets con alarmas en el mismo Terraform que la infra convirtio el costo en un guardrail proactivo."
                        }
                    ]
                },
                {
                    slug: "onboarding-empleados",
                    title: "Onboarding Automatico",
                    description: "Bot que envia documentos a nuevos empleados, programa reuniones de induccion y hace seguimiento automatico.",
                    tech: ["n8n", "Slack", "Google Calendar", "Notion"],
                    image: msCrmImage,
                    type: "caso",
                    year: "2025",
                    role: "Automatizacion · RRHH · Integraciones",
                    fullDescription: "Cuando RRHH marca a un empleado como contratado, un flujo n8n dispara el onboarding completo: crea su pagina en Notion, le manda los documentos por Slack, agenda las reuniones de induccion en Google Calendar y hace seguimiento de las tareas pendientes. Cero checklists olvidados.",
                    problem: "El onboarding vivia en un checklist de Excel que alguien tenia que ejecutar a mano: enviar docs, agendar reuniones, recordar firmas. Pasos que se saltaban y nuevos empleados perdidos su primera semana.",
                    audience: "Empresas que contratan seguido y quieren un onboarding consistente sin depender de que RRHH recuerde cada paso.",
                    infrastructure: {
                        provider: "n8n + Slack + Google Calendar + Notion",
                        services: ["Trigger (alta en sistema de RRHH)", "n8n (orquestacion del flujo)", "Notion API (pagina del empleado)", "Slack (envio de docs + recordatorios)", "Google Calendar (reuniones de induccion)"],
                        diagram: {
                            mermaid: `flowchart TD
    hr[RRHH: empleado contratado] -->|trigger| n8n["n8n workflow"]
    n8n --> notion[Crea pagina Notion]
    n8n --> slack[Envia docs por Slack]
    n8n --> cal[Agenda inducciones]
    n8n --> followup["Seguimiento (recordatorios)"]

    classDef edge fill:#0D1117,stroke:#06B6D4,color:#E5E7EB
    classDef ext fill:#111827,stroke:#374151,color:#9CA3AF
    class n8n edge
    class hr,notion,slack,cal,followup ext`
                        }
                    },
                    techChallenges: [
                        {
                            tags: ["automation", "state", "hr"],
                            problem: "Hacer seguimiento de tareas que el empleado todavia no completo, sin spamear",
                            constraint: "Firmar contrato, leer politicas, completar perfil: tareas con plazos distintos. Recordar todo todos los dias molesta; no recordar deja tareas sin hacer.",
                            approach: "Cada tarea tiene un estado y un plazo en Notion. Un cron diario en n8n revisa solo las pendientes vencidas y manda UN recordatorio agrupado por Slack, no uno por tarea.",
                            algorithm: "Maquina de estado por tarea + recordatorio agrupado: el cron filtra pendientes vencidas y agrega en un solo mensaje por empleado.",
                            codeFile: "n8n · Function node (followup)",
                            codeLang: "javascript",
                            code: `// Solo pendientes vencidas, agrupadas por empleado
const overdue = tasks.filter(t =>
  t.status === 'pending' && new Date(t.dueDate) < new Date()
);
const byEmployee = groupBy(overdue, 'employeeId');
// un solo Slack DM por persona, no uno por tarea
return Object.entries(byEmployee).map(([id, ts]) => ({ id, tasks: ts }));`
                        }
                    ],
                    metrics: [
                        { value: "0 pasos", label: "olvidados" },
                        { value: "dia 1", label: "todo listo automatico" },
                        { value: "1 recordatorio", label: "agrupado, no spam" }
                    ],
                    results: "Cada contratacion dispara un onboarding identico y completo. RRHH solo marca 'contratado' y el sistema hace el resto, con seguimiento hasta que las tareas se cierran.",
                    lessons: [
                        {
                            title: "Agrupa recordatorios o te silencian",
                            body: "Un recordatorio por tarea convierte la herramienta en spam y la gente la ignora. Agregar las pendientes en un solo mensaje diario por persona mantuvo el seguimiento util."
                        }
                    ]
                },
                {
                    slug: "transcriptor-reuniones",
                    title: "Transcriptor de Reuniones",
                    description: "Graba calls de Zoom/Meet, transcribe con IA, extrae tareas y envia resumenes al equipo.",
                    tech: ["n8n", "Whisper AI", "OpenAI", "Slack"],
                    image: educationPortalImage,
                    type: "caso",
                    year: "2025",
                    role: "IA · Automatizacion · Integraciones",
                    fullDescription: "Cuando termina una reunion de Zoom/Meet, el audio se transcribe con Whisper, un LLM genera un resumen y extrae los action items con responsable, y n8n los publica en Slack y los crea como tareas. La reunion deja de evaporarse: queda el resumen y las tareas asignadas.",
                    problem: "Las decisiones y tareas de las reuniones se perdian: nadie tomaba minuta, los action items quedaban en la cabeza de alguien, y a la semana nadie recordaba quien quedo a cargo de que.",
                    audience: "Equipos con muchas reuniones (consultoras, agencias) que necesitan capturar decisiones y tareas sin un secretario dedicado.",
                    infrastructure: {
                        provider: "n8n + Whisper + OpenAI + Slack",
                        services: ["Grabacion de la call (Zoom/Meet)", "Whisper (speech-to-text)", "OpenAI (resumen + extraccion de action items)", "n8n (orquestacion)", "Slack (resumen + tareas al canal)"],
                        diagram: {
                            mermaid: `flowchart TD
    call[Reunion termina] -->|audio| whisper[Whisper STT]
    whisper -->|transcript| ai["OpenAI: resumen + action items"]
    ai --> n8n["n8n"]
    n8n --> slack[Resumen al canal]
    n8n --> tasks[Crea tareas con responsable]

    classDef edge fill:#0D1117,stroke:#06B6D4,color:#E5E7EB
    classDef ext fill:#111827,stroke:#374151,color:#9CA3AF
    class n8n edge
    class call,whisper,ai,slack,tasks ext`
                        }
                    },
                    techChallenges: [
                        {
                            tags: ["ai", "nlu", "automation"],
                            problem: "Extraer action items con responsable, no solo un resumen lindo",
                            constraint: "Un resumen en prosa no es accionable. Hay que sacar tareas concretas con due/owner de una transcripcion ruidosa, sin inventar responsables que nadie menciono.",
                            approach: "El LLM devuelve action items como JSON estructurado (texto, owner, due) y se le instruye a marcar owner=null si no fue mencionado, en vez de adivinar. n8n solo crea tareas con owner valido.",
                            algorithm: "Structured extraction con campos opcionales: el modelo no rellena owner si no hay evidencia; el workflow filtra y asigna.",
                            codeFile: "n8n · OpenAI node (schema)",
                            codeLang: "json",
                            code: `{
  "summary": "string",
  "action_items": [
    {
      "task": "string",
      "owner": "string | null",
      "due": "ISO date | null"
    }
  ]
}
// owner=null cuando nadie fue nombrado — no adivinar`
                        }
                    ],
                    metrics: [
                        { value: "0 minutas", label: "escritas a mano" },
                        { value: "action items", label: "con responsable" },
                        { value: "post-call", label: "resumen automatico al canal" }
                    ],
                    results: "Cada reunion termina con un resumen en Slack y tareas asignadas. Las decisiones quedan registradas sin que nadie tome nota a mano.",
                    lessons: [
                        {
                            title: "Mejor 'no se' que un responsable inventado",
                            body: "Forzar al LLM a asignar siempre un owner producia tareas con responsables equivocados. Permitir owner=null cuando no hay evidencia hizo la extraccion confiable: una tarea sin dueño se revisa, una con dueño falso se ignora."
                        }
                    ]
                },
                {
                    slug: "pipeline-cvs",
                    title: "Pipeline de CVs con IA",
                    description: "Recibe CVs por email o formulario, los analiza con IA y pre-califica candidatos automaticamente.",
                    tech: ["n8n", "OpenAI", "Airtable", "Email"],
                    image: msCrmImage,
                    type: "caso",
                    year: "2025",
                    role: "IA · Automatizacion · Integraciones",
                    fullDescription: "Cuando llega un CV por email o formulario, n8n extrae el texto del PDF, un LLM lo estructura (experiencia, skills, años) y lo puntua contra los requisitos de la vacante. El candidato cae en Airtable ya pre-calificado, con un score y un resumen de por que encaja o no. El reclutador revisa una lista ordenada en vez de abrir 200 PDFs.",
                    problem: "Por cada vacante llegaban cientos de CVs en formatos distintos. Filtrarlos a mano tomaba dias, los buenos candidatos se enfriaban esperando, y el criterio variaba segun quien revisaba.",
                    audience: "Equipos de RR.HH. y agencias de reclutamiento que reciben alto volumen de postulaciones y necesitan pre-filtrar sin perder buenos perfiles.",
                    infrastructure: {
                        provider: "n8n + OpenAI + Airtable",
                        services: ["Email / formulario (entrada de CVs)", "Parser de PDF (extraccion de texto)", "OpenAI (estructuracion + scoring)", "n8n (orquestacion)", "Airtable (pipeline de candidatos)"],
                        diagram: {
                            mermaid: `flowchart TD
    cv[CV por email/form] -->|PDF| parse[Extrae texto]
    parse -->|texto| ai["OpenAI: estructura + score"]
    ai --> n8n["n8n"]
    n8n --> air[Airtable: candidato + score]
    n8n --> notify[Aviso al reclutador]

    classDef edge fill:#0D1117,stroke:#06B6D4,color:#E5E7EB
    classDef ext fill:#111827,stroke:#374151,color:#9CA3AF
    class n8n edge
    class cv,parse,ai,air,notify ext`
                        }
                    },
                    techChallenges: [
                        {
                            tags: ["ai", "scoring", "automation"],
                            problem: "Puntuar candidatos de forma consistente, no por intuicion del modelo",
                            constraint: "Pedirle al LLM 'que tan bueno es este CV' devolvia scores inestables: el mismo perfil sacaba 6 o 9 segun el dia. Sin criterio fijo el ranking no servia.",
                            approach: "Se descompone el score en criterios explicitos por vacante (años de experiencia, skills obligatorias, skills deseables) y cada uno se evalua por separado con un peso. El score final es una suma ponderada, no un numero que el modelo inventa de una.",
                            algorithm: "Scoring por rubrica: el LLM evalua cada criterio (match booleano o 0-1), el workflow aplica los pesos y suma. Determinista dado el mismo CV.",
                            codeFile: "n8n · OpenAI node (rubrica)",
                            codeLang: "json",
                            code: `{
  "criteria": [
    { "name": "años_experiencia", "match": 0.0, "weight": 0.3 },
    { "name": "skills_obligatorias", "match": 0.0, "weight": 0.5 },
    { "name": "skills_deseables", "match": 0.0, "weight": 0.2 }
  ]
}
// score = Σ(match * weight) — no un numero suelto del modelo`
                        }
                    ],
                    metrics: [
                        { value: "horas → minutos", label: "para filtrar una vacante" },
                        { value: "score + resumen", label: "por candidato" },
                        { value: "0 PDFs", label: "abiertos a mano para descartar" }
                    ],
                    results: "El reclutador abre Airtable y ve a los candidatos ordenados por score, cada uno con un resumen de por que encaja. Los buenos perfiles ya no se enfrian en la bandeja de entrada.",
                    lessons: [
                        {
                            title: "Una rubrica le gana a 'puntua del 1 al 10'",
                            body: "Pedir un score directo daba numeros inestables. Descomponerlo en criterios con pesos hizo el ranking reproducible y, de paso, explicable: el reclutador ve que criterio fallo, no solo un numero."
                        }
                    ]
                },
                {
                    slug: "contenido-social",
                    title: "Generador de Contenido Social",
                    description: "Crea posts con IA, los programa automaticamente y envia reportes de metricas semanales.",
                    tech: ["n8n", "OpenAI", "Buffer API", "Google Sheets"],
                    image: msCrmImage2,
                    type: "caso",
                    year: "2025",
                    role: "IA · Automatizacion · Integraciones",
                    fullDescription: "Cada semana n8n toma una linea editorial desde Google Sheets, un LLM redacta los posts adaptados a cada red, y se programan en Buffer para publicarse en los horarios definidos. Los lunes llega un reporte con las metricas de la semana anterior (alcance, engagement) leidas de la API. El equipo aprueba un calendario en vez de escribir post por post.",
                    problem: "Mantener presencia constante en redes consumia horas: redactar, adaptar a cada plataforma, programar y luego juntar metricas a mano. Cuando llegaba trabajo, lo primero que se caia era el contenido.",
                    audience: "Pymes, freelancers y equipos de marketing chicos que necesitan presencia constante en redes sin un community manager full-time.",
                    infrastructure: {
                        provider: "n8n + OpenAI + Buffer",
                        services: ["Google Sheets (linea editorial)", "OpenAI (redaccion por red)", "n8n (orquestacion + scheduling)", "Buffer API (programacion + publicacion)", "Google Sheets (reporte de metricas)"],
                        diagram: {
                            mermaid: `flowchart TD
    sheet[Linea editorial · Sheets] --> n8n["n8n"]
    n8n -->|prompt| ai["OpenAI: posts por red"]
    ai --> n8n
    n8n --> buffer[Buffer: programa posts]
    buffer -->|metricas| report[Reporte semanal · Sheets]

    classDef edge fill:#0D1117,stroke:#06B6D4,color:#E5E7EB
    classDef ext fill:#111827,stroke:#374151,color:#9CA3AF
    class n8n edge
    class sheet,ai,buffer,report ext`
                        }
                    },
                    techChallenges: [
                        {
                            tags: ["ai", "content", "automation"],
                            problem: "Un mismo mensaje suena bien en LinkedIn y fatal en X",
                            constraint: "Generar un post generico y republicarlo en todas las redes daba contenido plano: largo de mas para X, demasiado informal para LinkedIn, sin los hashtags ni el tono que cada plataforma espera.",
                            approach: "El mismo brief se expande con un prompt por red que fija longitud, tono y formato (hashtags, emojis, CTA). El LLM no reescribe un texto, lo adapta desde la idea base con las reglas de cada canal.",
                            algorithm: "Fan-out por plataforma: un brief → N prompts con restricciones especificas → N variantes. Cada canal tiene su propia plantilla de estilo.",
                            codeFile: "n8n · OpenAI node (por red)",
                            codeLang: "json",
                            code: `{
  "brief": "string",
  "channels": {
    "x":        { "max_chars": 280, "tone": "directo", "hashtags": 2 },
    "linkedin": { "max_chars": 1300, "tone": "profesional", "cta": true },
    "instagram":{ "max_chars": 2200, "tone": "cercano", "emojis": true }
  }
}
// un brief → una variante por canal, no copy-paste`
                        }
                    ],
                    metrics: [
                        { value: "semanas adelantadas", label: "de contenido programado" },
                        { value: "1 brief", label: "→ post por red, adaptado" },
                        { value: "reporte lunes", label: "metricas sin armarlas a mano" }
                    ],
                    results: "El equipo aprueba un calendario semanal y la publicacion corre sola. El lunes llega el reporte de la semana anterior, asi que el contenido ya no es lo primero que se cae cuando hay trabajo.",
                    lessons: [
                        {
                            title: "Adaptar por canal, no republicar",
                            body: "El primer intento republicaba el mismo texto en todas las redes y se notaba. Darle a cada plataforma su propio prompt con longitud y tono fue la diferencia entre 'contenido automatizado' y 'contenido que parece escrito a mano'."
                        }
                    ]
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
                    sequences: [
                        {
                            title: "Issue an invoice",
                            description: "Real project diagram. Phase 1 is synchronous inside the HTTP request (recalculate amounts, SPOT detraction, atomic correlative with FOR UPDATE, commit and enqueue); Phase 2 is async in the worker (build UBL + sign + send); Phase 3 are listeners reacting in parallel (email, stock decrement, notification, webhook); plus the sad path with backoff retry.",
                            mermaid: `sequenceDiagram
    autonumber
    actor User as Seller
    participant UI as Panel
    participant UC as IssueInvoice
    participant CT as TaxCalculator
    participant Num as NumberingService
    participant Comp as Invoice
    participant DB as MySQL
    participant Q as Queue
    participant W as Worker
    participant Build as DocumentBuilder
    participant SS as SunatService
    participant SUNAT as SUNAT
    participant Ev as Event Bus
    participant Lis as Listeners

    rect rgb(13, 20, 30)
    Note over User,DB: PHASE 1 - Synchronous inside the HTTP request

    User->>UI: click Issue
    UI->>UC: invoke invoice

    UC->>UC: validate editable state, non-empty lines, client assigned
    alt validation fails
        UC-->>UI: throw DomainException
        UI-->>User: error message
    end

    UC->>DB: BEGIN TRANSACTION

    Note over UC,Comp: Step A - Recalculate amounts for every line

    loop per line
        UC->>CT: calcLine with LineInput
        CT-->>UC: CalculatedLine with netAmount igv icbper total
        UC->>Comp: line applyAmountsFrom IN MEMORY only
    end

    UC->>Comp: syncLineAmounts
    Comp->>DB: single INSERT ON DUPLICATE KEY UPDATE for the N lines

    UC->>CT: calcTotals lines and global discount
    CT-->>UC: InvoiceTotals with taxed exempt unaffected igv total
    UC->>Comp: fill totals and save
    Comp->>DB: UPDATE invoice SET recalculated totals

    Note over UC,Comp: Step B - Validate and apply SPOT detraction

    UC->>Comp: applyDetraction
    alt detraction applies and rate present
        Comp->>Comp: check minimum threshold for the Cat-54 category
        alt total below threshold
            Comp-->>UC: throw DomainException category X requires total over S/ N
            UC-->>UI: re-throw, transaction rollback
        end
        Comp->>Comp: detraction_amount = round(total * rate)
        Comp->>DB: UPDATE invoice SET detraction_amount
    end

    Note over UC,Num: Step C - Assign atomic correlative

    alt correlative is null
        UC->>Num: next over serieModel
        Num->>DB: SELECT current_correlative FOR UPDATE on the series row
        Num->>DB: UPDATE series SET current_correlative + 1
        Num-->>UC: correlative N
        UC->>Comp: correlative = N
    end

    UC->>Comp: state = QUEUED and save
    Comp->>DB: UPDATE invoice SET correlative and state

    UC->>DB: COMMIT

    UC->>Q: dispatch SendInvoiceToSunat with id
    UC-->>UI: void
    UI-->>User: invoice queued for sending
    end

    rect rgb(28, 23, 12)
    Note over W,SUNAT: PHASE 2 - Async in the worker, outside the request

    W->>Q: reserve job
    W->>DB: SELECT invoice with company client lines (eager)
    DB-->>W: invoice

    alt state already issued or REJECTED
        Note over W: Idempotency - skip if it was a duplicate retry
        W-->>Q: ACK without sending
    else continue sending
        W->>Build: build with invoice
        Build-->>W: DocumentInterface Invoice UBL 2.1

        W->>SS: send invoice and document
        Note over SS,SUNAT: All the XMLDSig signing + SOAP + CDR happens here<br>see the sign-and-send flow for the detail
        SS-->>W: SendResult with success code description cdr paths

        W->>W: applyResult maps code to state
        W->>DB: UPDATE invoice SET state code description notes hash

        W->>Ev: dispatch InvoiceStateUpdated with refreshed invoice
        W-->>Q: ACK
    end
    end

    rect rgb(12, 26, 16)
    Note over Ev,Lis: PHASE 3 - Listeners react to the event in parallel

    Ev->>Lis: SendAcceptedInvoiceMail
    alt state issued and client has email
        Lis->>Lis: Mail to client with PDF and XML
    end

    Ev->>Lis: DecrementStockOnAcceptedInvoice
    alt state ACCEPTED or ACCEPTED_WITH_NOTES
        loop per line with product and tracks_stock
            Lis->>DB: INSERT stock_movements and UPDATE products current_stock
        end
    end

    Ev->>Lis: NotifyOwnerInvoiceState
    Lis->>DB: INSERT in-app notification for the owner (bell icon)

    Ev->>Lis: DispatchInvoiceWebhook
    alt terminal state accepted rejected error
        Lis->>Lis: POST to each webhook the company subscribed
    end
    end

    rect rgb(30, 14, 14)
    Note over W,DB: SAD PATH - job blows up before applyResult

    Note over W: Unhandled exception: SOAP timeout, expired cert, OOM
    W->>W: failed(Throwable) callback
    W->>DB: UPDATE invoice SET state SEND_ERROR code JOB_FAILED description substr 500

    Note over W,DB: If tries < 3, backoff 30s auto-retry<br>If tries = 3, lands in failed_jobs for manual retry from the panel
    end`
                        },
                        {
                            title: "XMLDSig signing and SOAP send to SUNAT",
                            description: "Real project diagram. The signing and sending detail: load the per-company PEM certificate, XMLDSig-sign the UBL 2.1 (the private key never leaves the server), SOAP send with a WSSE UsernameToken over TLS, and parse SUNAT's signed CDR.",
                            mermaid: `sequenceDiagram
    autonumber
    participant Job as SendInvoiceToSunat
    participant SS as SunatService
    participant GF as GreenterFactoryService
    participant See as GreenterSee
    participant FS as Storage
    participant DB as MySQL
    participant SUNAT as SUNAT_SOAP

    rect rgb(13, 20, 30)
    Note over Job,SUNAT: PHASE 1 - Set up the See client for this company

    Job->>SS: send invoice and document
    SS->>GF: buildSee with company

    GF->>DB: SELECT certificate_path FROM companies
    DB-->>GF: certs/demo.pem

    GF->>FS: file_get_contents of the PEM
    FS-->>GF: PEM contents with public cert plus private key
    Note over GF,FS: The PEM holds the PRIVATE key and never leaves the server

    GF->>See: new See
    GF->>See: setCertificate with the PEM
    GF->>See: setService with beta or production endpoint
    GF->>See: setClaveSOL with ruc and user and password
    Note over See: see is now configured with cert plus endpoint plus claveSOL
    See-->>GF: see instance
    GF-->>SS: see
    end

    rect rgb(28, 23, 12)
    Note over Job,SUNAT: PHASE 2 - Sign the XML before sending

    SS->>See: getXmlSigned with document
    Note over See: 1 Serialize Invoice to XML UBL 2.1
    Note over See: 2 Compute SHA256 of the canonicalized XML
    Note over See: 3 Encrypt the digest with the cert PRIVATE KEY
    Note over See: 4 Embed ds:Signature into the XML
    See-->>SS: signedXml with ds:Signature inside

    SS->>FS: Storage put of the signed xml
    SS->>DB: UPDATE invoices SET xml_path
    Note over SS,FS: We store the XML before sending as evidence
    end

    rect rgb(12, 26, 16)
    Note over Job,SUNAT: PHASE 3 - SOAP send to SUNAT with the signature inside the XML

    SS->>See: send with document
    Note over See: Wraps the signed XML in a ZIP
    Note over See: Builds the SOAP with a WSSE UsernameToken
    Note over See: username is RUC plus SOL_USER
    Note over See: password is claveSOL plaintext over TLS
    Note over See: POST HTTPS to the billService endpoint

    See->>SUNAT: POST HTTPS with SOAP body, signed XML in base64
    Note over SUNAT: SUNAT validates in order 1 WSSE UsernameToken
    Note over SUNAT: 2 XMLDSig signature using the embedded public cert
    Note over SUNAT: 3 UBL 2.1 schema and amounts
    SUNAT-->>See: SOAP response with applicationResponse ZIP of the CDR

    See-->>SS: BillResult with success cdrZip and error
    end

    rect rgb(30, 14, 14)
    Note over Job,SUNAT: PHASE 4 - Process the CDR signed by SUNAT

    alt send succeeded
        SS->>FS: Storage put of the CDR zip
        SS->>DB: UPDATE invoices SET cdr_path

        SS->>SS: cdrParser parse of the cdrZip
        Note over SS: 1 Unzip the ZIP
        Note over SS: 2 Read the CDR XML
        Note over SS: 3 Extract ResponseCode 0 accepted or 2074 rejected
        Note over SS: 4 Extract Notes with observations
        Note over SS: 5 Does NOT verify SUNAT signature; trusts TLS
        SS->>SS: new CdrResult with code description notes
    else technical error timeout or SUNAT down
        SS->>DB: INSERT sunat_logs with exception
        SS-->>Job: throw, Job tries 3 and backoff 30s
    end

    SS->>SS: new SendResult with success code description cdr and paths

    SS->>DB: INSERT sunat_logs with request response and duration_ms

    SS-->>Job: SendResult
    end`
                        },
                        {
                            title: "Void an invoice (communication of voids)",
                            description: "Real project diagram. Validates the 7-day window, groups N voids of the same day into a single Communication of Voids (1 RA), sends async with ticket polling every 30s, and reverts the invoice state on the error paths.",
                            mermaid: `sequenceDiagram
    autonumber
    actor User as Seller
    participant UI as Panel/API
    participant UC as VoidInvoice
    participant DB
    participant Q as Queue
    participant W as queue:work
    participant B as VoidBuilderService
    participant S as VoidService<br/>(Real or Fake)
    participant SUNAT

    rect rgb(13, 20, 30)
    Note over User,DB: Phase 1 - Validation + persistence (sync)

    User->>UI: Void action + reason
    UI->>UC: __invoke(invoice, reason)

    UC->>UC: validate()
    alt invoice is NOT issued
        UC-->>UI: throw DomainException<br/>Can only void what SUNAT accepted
    else issue_date older than 7 days
        UC-->>UI: throw DomainException<br/>N days have passed - Use a Credit Note
    end

    UC->>DB: BEGIN TRANSACTION

    UC->>DB: SELECT communication_voids<br/>WHERE company_id=? AND date=today<br/>AND state=draft FOR UPDATE
    DB-->>UC: existing cb or null

    alt today's CB already exists as draft
        Note over UC: Reuse - 1 RA groups N voids
    else does not exist
        UC->>DB: SELECT max(correlative)+1 FOR UPDATE
        UC->>DB: INSERT communication_void (correlative, state=draft)
    end

    UC->>DB: INSERT communication_void_detail (cb_id, invoice_id, reason)
    UC->>DB: UPDATE invoice SET state=VOID_PENDING

    alt CB was in DRAFT
        UC->>DB: UPDATE cb SET state=QUEUED
        UC->>Q: dispatch SendVoidToSunat(cb.id)
        Note over UC,Q: Dispatch only once per CB - later voids<br/>of the same day do NOT enqueue a new job
    end

    UC->>DB: COMMIT
    UC-->>UI: CommunicationVoid with details
    UI-->>User: Void registered - pending SUNAT send
    end

    rect rgb(28, 23, 12)
    Note over W,SUNAT: Phase 2 - Async send (worker)

    W->>Q: reserve job SendVoidToSunat
    W->>DB: SELECT cb WITH details.invoice and company
    DB-->>W: fresh cb (includes voids added while it waited)

    alt cb.state=ACCEPTED or REJECTED
        Note over W: Idempotency - skip if duplicate retry
        W-->>Q: ACK
    else
        W->>B: build(cb)
        B-->>W: Voided UBL 2.1<br/>(VoidedDocumentsLine per detail)

        W->>S: send(cb, document)
        S->>S: sign XML + store it

        alt SUNAT_FAKE true
            S->>S: simulate ticket + accepted CDR
        else production
            S->>SUNAT: sendSummary SOAP
            SUNAT-->>S: ticket
            loop poll every 30s, up to 5 min
                S->>SUNAT: getStatus(ticket)
                SUNAT-->>S: PROCESSING or ACCEPTED or REJECTED
            end
            S->>S: store CDR
        end

        S-->>W: VoidSendResult<br/>success, ticket, xml, cdr

        W->>W: applyResult()
        W->>DB: BEGIN TRANSACTION

        alt result.accepted()
            W->>DB: UPDATE cb SET state=ACCEPTED, ticket, hash
            loop per CB detail
                W->>DB: UPDATE invoice SET state=VOIDED
            end
        else result.success false
            W->>DB: UPDATE cb SET state=ERROR
            loop per detail
                W->>DB: UPDATE invoice SET state=ACCEPTED<br/>(revert so user can retry)
            end
        else rejected (success but CDR not zero)
            W->>DB: UPDATE cb SET state=REJECTED, code, description
            loop per detail
                W->>DB: UPDATE invoice SET state=ACCEPTED (revert)
            end
        end

        W->>DB: COMMIT
        W-->>Q: ACK
    end
    end

    rect rgb(30, 14, 14)
    Note over W,DB: Phase 3 - Sad path - job blows up

    W->>W: failed(Throwable)
    W->>DB: UPDATE cb SET state=ERROR, code=JOB_FAILED
    loop per detail
        W->>DB: UPDATE invoice SET state=ACCEPTED (revert)
    end
    end`
                        },
                        {
                            title: "Daily summary of receipts",
                            description: "Real project diagram. Aggregates the day's not-yet-summarized receipts (type 03), separates generation from sending so the accountant reviews first, and sends async with ticket polling. A receipt can only belong to one summary (NOT EXISTS check).",
                            mermaid: `sequenceDiagram
    autonumber
    actor User as Accountant
    participant UI as Panel/API
    participant Gen as GenerateDailySummary<br/>__invoke
    participant DB
    participant Env as GenerateDailySummary<br/>sendToSunat
    participant Q as Queue
    participant W as queue:work
    participant S as SummaryService<br/>(Real or Fake)
    participant SUNAT as SUNAT SOAP

    rect rgb(13, 20, 30)
    Note over User,DB: Phase 1 - Generation (aggregate not-summarized receipts)

    User->>UI: GenerateDailySummary for reference_date
    UI->>Gen: __invoke(company, refDate)

    Gen->>DB: SELECT summary WHERE company AND reference_date=refDate<br/>AND state in (accepted, queued, sent_pending)
    DB-->>Gen: existing summary or null

    alt RC already exists for that date
        Gen-->>UI: throw DomainException<br/>A summary (RC-YYYYMMDD-N) already exists<br/>for date X in state Y
    end

    Gen->>DB: SELECT receipts WHERE company<br/>AND document_type=03<br/>AND issue_date=refDate<br/>AND state in (accepted, voided)<br/>AND NOT EXISTS summary_items with that invoice_id
    DB-->>Gen: eligible receipts

    alt receipts empty
        Gen-->>UI: throw DomainException<br/>No eligible receipts to summarize
    end

    Gen->>DB: BEGIN TRANSACTION
    Gen->>DB: SELECT count(today's summaries) for correlative
    Gen->>DB: INSERT daily_summary<br/>(company, generation_date=today,<br/>reference_date=refDate,<br/>correlative, state=draft)
    DB-->>Gen: summary.id=12

    loop per receipt
        Gen->>DB: INSERT daily_summary_item<br/>(summary_id=12, invoice_id,<br/>doc_type=03, series, correlative,<br/>item_state=3 if VOIDED else 1,<br/>currency, total, op_amounts_*, igv_amount,<br/>client_doc_type, client_doc_num)
    end

    Gen->>DB: COMMIT
    Gen-->>UI: summary with items loaded
    UI-->>User: RC-YYYYMMDD-N generated with N items - review before sending
    end

    rect rgb(28, 23, 12)
    Note over User,SUNAT: Phase 2 - Send to SUNAT (separate so the user reviews first)

    User->>UI: click Send to SUNAT
    UI->>Env: sendToSunat(summary)

    Env->>Env: validate state=draft
    alt state not draft
        Env-->>UI: throw DomainException
    end

    Env->>DB: UPDATE summary SET state=queued
    Env->>Q: dispatch SendDailySummaryToSunat(summary.id)
    Env-->>UI: queued

    Note over W,SUNAT: Worker processes async (similar to Communication of Voids)

    W->>Q: reserve job
    W->>DB: SELECT summary WITH items
    DB-->>W: summary

    W->>S: send(summary)
    S->>S: build Summary UBL 2.1 + sign

    alt SUNAT_FAKE true
        S->>S: simulate ticket + accepted CDR
    else production
        S->>SUNAT: sendSummary SOAP
        SUNAT-->>S: ticket
        loop poll every 30s, up to 5 min
            S->>SUNAT: getStatus(ticket)
            SUNAT-->>S: PROCESSING or ACCEPTED or REJECTED
        end
        S->>S: store CDR
    end

    S-->>W: SummarySendResult

    alt accepted
        W->>DB: UPDATE summary SET state=ACCEPTED, ticket, hash, cdr
    else rejected
        W->>DB: UPDATE summary SET state=REJECTED, code, description
    else error
        W->>DB: UPDATE summary SET state=SEND_ERROR
    end
    end`
                        }
                    ],
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
                    type: "case",
                    year: "2025",
                    role: "Scraping · Automation · Data",
                    fullDescription: "A Python scraper crawls competitor pages daily, stores price history in PostgreSQL, and an n8n flow alerts via Telegram only when there's a significant change. The sales team stops checking sites by hand and reacts same-day to a price move.",
                    problem: "Knowing whether competitors raised or lowered prices required someone to open 15 sites every morning. Slow, inconsistent, and changes were caught late.",
                    audience: "Retailers and e-commerce that compete on price and need to react fast to competitor moves.",
                    infrastructure: {
                        provider: "Python scraper + n8n + PostgreSQL",
                        services: ["Python scraper (requests + parser, user-agent rotation)", "Daily cron (n8n schedule)", "PostgreSQL (price history)", "n8n (comparison + threshold)", "Telegram Bot (alerts)"],
                        diagram: {
                            mermaid: `flowchart TD
    cron[Daily cron] --> scraper[Python scraper]
    scraper -->|today's prices| db[(PostgreSQL)]
    db --> compare["n8n: compare vs yesterday"]
    compare -->|change > threshold| tg[Telegram]
    compare -->|no change| noop[No-op]

    classDef edge fill:#0D1117,stroke:#06B6D4,color:#E5E7EB
    classDef db fill:#0D1117,stroke:#4ADE80,color:#E5E7EB
    classDef ext fill:#111827,stroke:#374151,color:#9CA3AF
    class cron,scraper,tg ext
    class compare edge
    class db,noop db`
                        }
                    },
                    techChallenges: [
                        {
                            tags: ["scraping", "data", "automation"],
                            problem: "Alert only on real changes, not on scraping noise",
                            constraint: "Sites change markup, return prices in varying formats, or fail intermittently. Alerting on every diff would flood Telegram with false positives.",
                            approach: "Compare against the last valid price in PostgreSQL and only alert if the delta exceeds a threshold (e.g. >2%). Null or outlier readings are discarded instead of treated as a change.",
                            algorithm: "Threshold diff over history: alert = |price_today - price_prev| / price_prev > threshold, ignoring outliers.",
                            codeFile: "scraper/diff.py",
                            codeLang: "python",
                            code: `def should_alert(prev: float, today: float, threshold=0.02) -> bool:
    if prev is None or today is None or today <= 0:
        return False                      # invalid reading → ignore
    delta = abs(today - prev) / prev
    return delta > threshold              # only significant changes`
                        }
                    ],
                    metrics: [
                        { value: "daily", label: "vs manual checking" },
                        { value: ">2%", label: "alert threshold" },
                        { value: "history", label: "of prices in the DB" }
                    ],
                    results: "Competitor price changes arrive on Telegram the same day, without opening a single site, and the history is there to analyze trends.",
                    lessons: [
                        {
                            title: "An alert without a threshold is noise",
                            body: "Alerting on every diff, scraping noise included, makes people mute the channel. Filtering by threshold and discarding outliers is what kept the alerts actionable."
                        }
                    ]
                },
                {
                    slug: "iot-telemetria",
                    title: "Industrial IoT Telemetry",
                    description: "Modbus/MQTT sensor readings on the plant floor, real-time dashboards and early failure alerts.",
                    tech: ["MQTT", "Node-RED", "TimescaleDB", "Grafana"],
                    image: msCrmImage,
                    type: "case",
                    year: "2024",
                    role: "IoT · Data · Observability",
                    fullDescription: "Telemetry for an industrial plant: gateways read Modbus/RS-485 sensors, publish over MQTT, Node-RED normalizes and persists to TimescaleDB, and Grafana shows real-time dashboards with early failure alerts. We went from checking machines by hand to watching them from a board.",
                    problem: "Machine state was only known once something had already broken. No history, no alerts: maintenance was reactive and expensive.",
                    audience: "Plants and industrial operations that have sensors/PLCs but no centralized telemetry or alerting.",
                    infrastructure: {
                        provider: "MQTT broker + Node-RED + TimescaleDB + Grafana",
                        services: ["Gateways (Modbus/RS-485 → MQTT)", "MQTT broker (Mosquitto)", "Node-RED (normalization + rules)", "TimescaleDB (time series)", "Grafana (dashboards + alerts)"],
                        diagram: {
                            mermaid: `flowchart TD
    sensors[Modbus/RS-485 sensors] --> gw[Gateway]
    gw -->|MQTT| broker[MQTT Broker]
    broker --> nodered[Node-RED]
    nodered -->|normalizes| ts[(TimescaleDB)]
    ts --> grafana[Grafana]
    nodered -->|threshold exceeded| alert[Early alert]

    classDef edge fill:#0D1117,stroke:#06B6D4,color:#E5E7EB
    classDef db fill:#0D1117,stroke:#4ADE80,color:#E5E7EB
    classDef ext fill:#111827,stroke:#374151,color:#9CA3AF
    class sensors,gw,broker ext
    class nodered edge
    class ts,grafana,alert db`
                        }
                    },
                    techChallenges: [
                        {
                            tags: ["iot", "timeseries", "data"],
                            problem: "Store thousands of readings/min without the DB exploding or the dashboard crawling",
                            constraint: "Dozens of sensors sampling every second generate millions of rows/day. A plain Postgres table becomes impractical to query.",
                            approach: "TimescaleDB with time-partitioned hypertables + continuous aggregates: dashboards query per-minute/hour rollups, not raw rows. Automatic retention of old data.",
                            algorithm: "Hypertable + continuous aggregate: detail is stored compressed, queries read precomputed aggregates. O(rollups) instead of O(raw rows).",
                            codeFile: "schema.sql",
                            codeLang: "sql",
                            code: `SELECT create_hypertable('readings', 'ts');

-- Per-minute rollup the dashboard queries
CREATE MATERIALIZED VIEW readings_1m
WITH (timescaledb.continuous) AS
SELECT time_bucket('1 minute', ts) AS bucket,
       sensor_id,
       avg(value) AS avg_v,
       max(value) AS max_v
FROM readings
GROUP BY bucket, sensor_id;`
                        }
                    ],
                    metrics: [
                        { value: "real time", label: "plant state" },
                        { value: "alerts", label: "before the failure" },
                        { value: "history", label: "for predictive maintenance" }
                    ],
                    results: "Maintenance went from reactive to data-driven: anomalies trigger alerts before downtime, and there's history to analyze trends.",
                    lessons: [
                        {
                            title: "Time series != ordinary relational table",
                            body: "Trying to store telemetry in a plain Postgres table doesn't scale. TimescaleDB with hypertables and continuous aggregates was the difference between instant dashboards and queries that timed out."
                        }
                    ]
                },
                {
                    slug: "cloud-migration",
                    title: "AWS Migration",
                    description: "Assisted migration of legacy workloads to AWS with IaC, observability and cost governance from day one.",
                    tech: ["AWS", "Terraform", "Docker", "CloudWatch"],
                    image: msCrmImage2,
                    type: "case",
                    year: "2024",
                    role: "Cloud · IaC · DevOps",
                    fullDescription: "Migration of legacy on-premise workloads to AWS with everything as code: infrastructure in Terraform, dockerized apps on ECS, observability with CloudWatch, and cost governance with budgets and alerts from day one. Not a blind lift & shift, but a reproducible baseline.",
                    problem: "Physical servers at their limit, no redundancy, manual deploys and zero cost visibility. Scaling meant buying hardware; a disk failure was a business risk.",
                    audience: "Companies with legacy systems on their own servers that need to move to the cloud without losing cost control or traceability.",
                    infrastructure: {
                        provider: "AWS (ECS, RDS, S3, CloudWatch) + Terraform",
                        services: ["Terraform (all infra as code)", "ECS + Docker (containerized apps)", "RDS (managed DB with backups)", "S3 + CloudFront (assets/CDN)", "CloudWatch (logs, metrics, alarms)", "AWS Budgets (cost governance)"],
                        diagram: {
                            mermaid: `flowchart TD
    tf[Terraform] -->|provisions| aws["AWS account"]
    subgraph aws ["AWS"]
        ecs["ECS + Docker"]
        rds[(RDS)]
        s3[S3 + CloudFront]
        cw[CloudWatch]
        budget[Budgets + alarms]
    end
    ecs --> rds
    ecs --> s3
    ecs --> cw
    cw --> budget

    classDef edge fill:#0D1117,stroke:#4ADE80,color:#E5E7EB
    classDef db fill:#0D1117,stroke:#06B6D4,color:#E5E7EB
    class tf edge
    class ecs,s3,cw,budget edge
    class rds db
    style aws fill:transparent,stroke:#4ADE80,stroke-dasharray:4 4,color:#E5E7EB`
                        }
                    },
                    techChallenges: [
                        {
                            tags: ["iac", "cost", "devops"],
                            problem: "Migrate without the AWS bill blowing up in month 1",
                            constraint: "It's easy to over-provision ('big instances just in case') and discover the cost when the bill lands. The client came from fixed CAPEX and feared variable OPEX.",
                            approach: "Everything in Terraform (no console clicks), conservative sizing with auto-scaling, and AWS Budgets with alarms that warn at 50/80/100% of budget before the month closes.",
                            algorithm: "Immutable infra + budget as a guardrail: every resource is reviewable code, and spend has a circuit-breaker (alarm) instead of being discovered post-bill.",
                            codeFile: "budget.tf",
                            codeLang: "hcl",
                            code: `resource "aws_budgets_budget" "monthly" {
  name         = "monthly-cost"
  budget_type  = "COST"
  limit_amount = "500"
  limit_unit   = "USD"
  time_unit    = "MONTHLY"

  notification {
    comparison_operator = "GREATER_THAN"
    threshold           = 80      # warns at 80%, not post-bill
    threshold_type      = "PERCENTAGE"
    notification_type   = "ACTUAL"
    subscriber_email_addresses = [var.ops_email]
  }
}`
                        }
                    ],
                    metrics: [
                        { value: "100% IaC", label: "reproducible infra" },
                        { value: "alarms", label: "on cost at 50/80/100%" },
                        { value: "0 deploys", label: "done by hand" }
                    ],
                    results: "The client ended with versioned infra, backups and observability, and real-time cost visibility. Recreating the environment is `terraform apply`, not a week of work.",
                    lessons: [
                        {
                            title: "The budget is part of the architecture, not the month-end close",
                            body: "Treating cost as something you review when the bill arrives is too late. Putting AWS Budgets with alarms in the same Terraform as the infra turned cost into a proactive guardrail."
                        }
                    ]
                },
                {
                    slug: "onboarding-empleados",
                    title: "Automatic Onboarding",
                    description: "Bot that sends documents to new employees, schedules onboarding meetings and follows up automatically.",
                    tech: ["n8n", "Slack", "Google Calendar", "Notion"],
                    image: msCrmImage,
                    type: "case",
                    year: "2025",
                    role: "Automation · HR · Integrations",
                    fullDescription: "When HR marks an employee as hired, an n8n flow triggers the full onboarding: creates their Notion page, sends documents over Slack, schedules induction meetings on Google Calendar, and follows up on pending tasks. Zero forgotten checklists.",
                    problem: "Onboarding lived in an Excel checklist someone had to run by hand: send docs, schedule meetings, chase signatures. Steps got skipped and new hires felt lost their first week.",
                    audience: "Companies that hire often and want consistent onboarding without depending on HR remembering every step.",
                    infrastructure: {
                        provider: "n8n + Slack + Google Calendar + Notion",
                        services: ["Trigger (new hire in the HR system)", "n8n (flow orchestration)", "Notion API (employee page)", "Slack (docs + reminders)", "Google Calendar (induction meetings)"],
                        diagram: {
                            mermaid: `flowchart TD
    hr[HR: employee hired] -->|trigger| n8n["n8n workflow"]
    n8n --> notion[Create Notion page]
    n8n --> slack[Send docs via Slack]
    n8n --> cal[Schedule inductions]
    n8n --> followup["Follow-up (reminders)"]

    classDef edge fill:#0D1117,stroke:#06B6D4,color:#E5E7EB
    classDef ext fill:#111827,stroke:#374151,color:#9CA3AF
    class n8n edge
    class hr,notion,slack,cal,followup ext`
                        }
                    },
                    techChallenges: [
                        {
                            tags: ["automation", "state", "hr"],
                            problem: "Follow up on tasks the employee hasn't done yet, without spamming",
                            constraint: "Sign contract, read policies, complete profile: tasks with different deadlines. Reminding everything every day annoys; not reminding leaves tasks undone.",
                            approach: "Each task has a status and a due date in Notion. A daily n8n cron checks only overdue pending tasks and sends ONE grouped Slack reminder, not one per task.",
                            algorithm: "Per-task state machine + grouped reminder: the cron filters overdue pendings and aggregates into a single message per employee.",
                            codeFile: "n8n · Function node (followup)",
                            codeLang: "javascript",
                            code: `// Only overdue pendings, grouped per employee
const overdue = tasks.filter(t =>
  t.status === 'pending' && new Date(t.dueDate) < new Date()
);
const byEmployee = groupBy(overdue, 'employeeId');
// one Slack DM per person, not one per task
return Object.entries(byEmployee).map(([id, ts]) => ({ id, tasks: ts }));`
                        }
                    ],
                    metrics: [
                        { value: "0 steps", label: "forgotten" },
                        { value: "day 1", label: "everything ready automatically" },
                        { value: "1 reminder", label: "grouped, not spam" }
                    ],
                    results: "Every hire triggers an identical, complete onboarding. HR just marks 'hired' and the system does the rest, following up until tasks close.",
                    lessons: [
                        {
                            title: "Group reminders or get muted",
                            body: "One reminder per task turns the tool into spam and people ignore it. Aggregating pendings into a single daily message per person kept the follow-up useful."
                        }
                    ]
                },
                {
                    slug: "transcriptor-reuniones",
                    title: "Meeting Transcriber",
                    description: "Records Zoom/Meet calls, transcribes with AI, extracts tasks and sends summaries to the team.",
                    tech: ["n8n", "Whisper AI", "OpenAI", "Slack"],
                    image: educationPortalImage,
                    type: "case",
                    year: "2025",
                    role: "AI · Automation · Integrations",
                    fullDescription: "When a Zoom/Meet meeting ends, the audio is transcribed with Whisper, an LLM generates a summary and extracts action items with their owner, and n8n posts them to Slack and creates them as tasks. The meeting stops evaporating: the summary and assigned tasks remain.",
                    problem: "Decisions and tasks from meetings got lost: nobody took minutes, action items lived in someone's head, and a week later no one remembered who owned what.",
                    audience: "Teams with lots of meetings (consultancies, agencies) that need to capture decisions and tasks without a dedicated note-taker.",
                    infrastructure: {
                        provider: "n8n + Whisper + OpenAI + Slack",
                        services: ["Call recording (Zoom/Meet)", "Whisper (speech-to-text)", "OpenAI (summary + action-item extraction)", "n8n (orchestration)", "Slack (summary + tasks to the channel)"],
                        diagram: {
                            mermaid: `flowchart TD
    call[Meeting ends] -->|audio| whisper[Whisper STT]
    whisper -->|transcript| ai["OpenAI: summary + action items"]
    ai --> n8n["n8n"]
    n8n --> slack[Summary to channel]
    n8n --> tasks[Create tasks with owner]

    classDef edge fill:#0D1117,stroke:#06B6D4,color:#E5E7EB
    classDef ext fill:#111827,stroke:#374151,color:#9CA3AF
    class n8n edge
    class call,whisper,ai,slack,tasks ext`
                        }
                    },
                    techChallenges: [
                        {
                            tags: ["ai", "nlu", "automation"],
                            problem: "Extract action items with an owner, not just a nice summary",
                            constraint: "A prose summary isn't actionable. You must pull concrete tasks with due/owner from a noisy transcript, without inventing owners no one mentioned.",
                            approach: "The LLM returns action items as structured JSON (text, owner, due) and is instructed to set owner=null if it wasn't mentioned, rather than guessing. n8n only creates tasks with a valid owner.",
                            algorithm: "Structured extraction with optional fields: the model doesn't fill owner without evidence; the workflow filters and assigns.",
                            codeFile: "n8n · OpenAI node (schema)",
                            codeLang: "json",
                            code: `{
  "summary": "string",
  "action_items": [
    {
      "task": "string",
      "owner": "string | null",
      "due": "ISO date | null"
    }
  ]
}
// owner=null when no one was named — never guess`
                        }
                    ],
                    metrics: [
                        { value: "0 minutes", label: "written by hand" },
                        { value: "action items", label: "with an owner" },
                        { value: "post-call", label: "summary auto-posted to channel" }
                    ],
                    results: "Every meeting ends with a Slack summary and assigned tasks. Decisions are recorded without anyone taking notes by hand.",
                    lessons: [
                        {
                            title: "Better 'unknown' than an invented owner",
                            body: "Forcing the LLM to always assign an owner produced tasks with the wrong person. Allowing owner=null when there's no evidence made extraction trustworthy: an unowned task gets reviewed, a falsely-owned one gets ignored."
                        }
                    ]
                },
                {
                    slug: "pipeline-cvs",
                    title: "CV Pipeline with AI",
                    description: "Receives CVs via email or form, analyzes them with AI and pre-qualifies candidates automatically.",
                    tech: ["n8n", "OpenAI", "Airtable", "Email"],
                    image: msCrmImage,
                    type: "case",
                    year: "2025",
                    role: "AI · Automation · Integrations",
                    fullDescription: "When a CV arrives by email or form, n8n extracts the text from the PDF, an LLM structures it (experience, skills, years) and scores it against the role's requirements. The candidate lands in Airtable already pre-qualified, with a score and a summary of why they fit or not. The recruiter reviews a ranked list instead of opening 200 PDFs.",
                    problem: "Every opening drew hundreds of CVs in different formats. Screening them by hand took days, good candidates went cold while waiting, and the criteria shifted depending on who was reviewing.",
                    audience: "HR teams and recruiting agencies that get high application volume and need to pre-filter without losing strong profiles.",
                    infrastructure: {
                        provider: "n8n + OpenAI + Airtable",
                        services: ["Email / form (CV intake)", "PDF parser (text extraction)", "OpenAI (structuring + scoring)", "n8n (orchestration)", "Airtable (candidate pipeline)"],
                        diagram: {
                            mermaid: `flowchart TD
    cv[CV via email/form] -->|PDF| parse[Extract text]
    parse -->|text| ai["OpenAI: structure + score"]
    ai --> n8n["n8n"]
    n8n --> air[Airtable: candidate + score]
    n8n --> notify[Notify recruiter]

    classDef edge fill:#0D1117,stroke:#06B6D4,color:#E5E7EB
    classDef ext fill:#111827,stroke:#374151,color:#9CA3AF
    class n8n edge
    class cv,parse,ai,air,notify ext`
                        }
                    },
                    techChallenges: [
                        {
                            tags: ["ai", "scoring", "automation"],
                            problem: "Score candidates consistently, not by the model's gut feeling",
                            constraint: "Asking the LLM 'how good is this CV' returned unstable scores: the same profile got a 6 or a 9 depending on the day. Without fixed criteria the ranking was useless.",
                            approach: "The score is broken into explicit per-role criteria (years of experience, required skills, nice-to-have skills) and each is evaluated separately with a weight. The final score is a weighted sum, not a number the model makes up in one shot.",
                            algorithm: "Rubric scoring: the LLM evaluates each criterion (boolean match or 0-1), the workflow applies the weights and sums. Deterministic given the same CV.",
                            codeFile: "n8n · OpenAI node (rubric)",
                            codeLang: "json",
                            code: `{
  "criteria": [
    { "name": "years_experience", "match": 0.0, "weight": 0.3 },
    { "name": "required_skills",   "match": 0.0, "weight": 0.5 },
    { "name": "nice_to_have",      "match": 0.0, "weight": 0.2 }
  ]
}
// score = Σ(match * weight) — not a loose number from the model`
                        }
                    ],
                    metrics: [
                        { value: "hours → minutes", label: "to screen one opening" },
                        { value: "score + summary", label: "per candidate" },
                        { value: "0 PDFs", label: "opened by hand to reject" }
                    ],
                    results: "The recruiter opens Airtable and sees candidates ranked by score, each with a summary of why they fit. Good profiles no longer go cold in the inbox.",
                    lessons: [
                        {
                            title: "A rubric beats 'rate it 1 to 10'",
                            body: "Asking for a direct score gave unstable numbers. Breaking it into weighted criteria made the ranking reproducible and, as a bonus, explainable: the recruiter sees which criterion failed, not just a number."
                        }
                    ]
                },
                {
                    slug: "contenido-social",
                    title: "Social Content Generator",
                    description: "Creates social media posts with AI, schedules them automatically and sends weekly metrics reports.",
                    tech: ["n8n", "OpenAI", "Buffer API", "Google Sheets"],
                    image: msCrmImage2,
                    type: "case",
                    year: "2025",
                    role: "AI · Automation · Integrations",
                    fullDescription: "Each week n8n pulls an editorial line from Google Sheets, an LLM drafts posts tailored to each network, and they get scheduled in Buffer to publish at set times. On Mondays a report arrives with the previous week's metrics (reach, engagement) read from the API. The team approves a calendar instead of writing post by post.",
                    problem: "Keeping a steady social presence ate up hours: writing, adapting to each platform, scheduling, then pulling metrics by hand. When client work picked up, content was the first thing to slip.",
                    audience: "SMBs, freelancers and small marketing teams that need a steady social presence without a full-time community manager.",
                    infrastructure: {
                        provider: "n8n + OpenAI + Buffer",
                        services: ["Google Sheets (editorial line)", "OpenAI (per-network copy)", "n8n (orchestration + scheduling)", "Buffer API (scheduling + publishing)", "Google Sheets (metrics report)"],
                        diagram: {
                            mermaid: `flowchart TD
    sheet[Editorial line · Sheets] --> n8n["n8n"]
    n8n -->|prompt| ai["OpenAI: posts per network"]
    ai --> n8n
    n8n --> buffer[Buffer: schedule posts]
    buffer -->|metrics| report[Weekly report · Sheets]

    classDef edge fill:#0D1117,stroke:#06B6D4,color:#E5E7EB
    classDef ext fill:#111827,stroke:#374151,color:#9CA3AF
    class n8n edge
    class sheet,ai,buffer,report ext`
                        }
                    },
                    techChallenges: [
                        {
                            tags: ["ai", "content", "automation"],
                            problem: "The same message reads great on LinkedIn and terrible on X",
                            constraint: "Generating one generic post and reposting it everywhere produced flat content: too long for X, too casual for LinkedIn, missing the hashtags and tone each platform expects.",
                            approach: "The same brief is expanded with a per-network prompt that fixes length, tone and format (hashtags, emojis, CTA). The LLM doesn't rewrite a text, it adapts from the base idea using each channel's rules.",
                            algorithm: "Per-platform fan-out: one brief → N prompts with specific constraints → N variants. Each channel has its own style template.",
                            codeFile: "n8n · OpenAI node (per network)",
                            codeLang: "json",
                            code: `{
  "brief": "string",
  "channels": {
    "x":        { "max_chars": 280, "tone": "direct", "hashtags": 2 },
    "linkedin": { "max_chars": 1300, "tone": "professional", "cta": true },
    "instagram":{ "max_chars": 2200, "tone": "warm", "emojis": true }
  }
}
// one brief → one variant per channel, not copy-paste`
                        }
                    ],
                    metrics: [
                        { value: "weeks ahead", label: "of content scheduled" },
                        { value: "1 brief", label: "→ a post per network, adapted" },
                        { value: "Monday report", label: "metrics without assembling them" }
                    ],
                    results: "The team approves a weekly calendar and publishing runs on its own. Monday brings the previous week's report, so content is no longer the first thing to slip when work piles up.",
                    lessons: [
                        {
                            title: "Adapt per channel, don't repost",
                            body: "The first attempt reposted the same text everywhere and it showed. Giving each platform its own prompt with length and tone was the difference between 'automated content' and 'content that looks hand-written'."
                        }
                    ]
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

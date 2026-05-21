import type { APIRoute } from "astro";
import { translations } from "../../i18n/translations";

export async function getStaticPaths() {
    const slugs = new Set<string>();
    translations.en.solutions.items.forEach((p: any) => slugs.add(p.slug));
    translations.es.solutions.items.forEach((p: any) => slugs.add(p.slug));
    return [...slugs].map((slug) => ({ params: { slug } }));
}

function escape(s: string) {
    return s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function wrap(text: string, perLine: number): string[] {
    const words = text.split(/\s+/);
    const lines: string[] = [];
    let cur = "";
    for (const w of words) {
        if ((cur + " " + w).trim().length > perLine) {
            if (cur) lines.push(cur);
            cur = w;
        } else {
            cur = (cur + " " + w).trim();
        }
    }
    if (cur) lines.push(cur);
    return lines;
}

export const GET: APIRoute = ({ params }) => {
    const slug = params.slug;
    const project = (translations.en.solutions.items as any[]).find((p) => p.slug === slug);
    if (!project) {
        return new Response("Not found", { status: 404 });
    }

    const titleLines = wrap(project.title, 22).slice(0, 2);
    const tech = (project.tech || []).slice(0, 5).join(" · ");
    const type = (project.type || "case").toUpperCase().replace("PRODUCTO", "PRODUCT").replace("CASO", "CASE");

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0V48" stroke="rgba(255,255,255,0.03)" stroke-width="1" fill="none"/>
    </pattern>
    <linearGradient id="glow" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" stop-color="rgba(74,222,128,0.18)"/>
      <stop offset="100%" stop-color="rgba(74,222,128,0)"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="#000000"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <ellipse cx="600" cy="-100" rx="900" ry="400" fill="url(#glow)"/>

  <!-- Frame border -->
  <rect x="32" y="32" width="1136" height="566" fill="none" stroke="#1F2937" stroke-width="2"/>

  <!-- Window chrome dots -->
  <circle cx="72" cy="76" r="6" fill="#FF5F57"/>
  <circle cx="92" cy="76" r="6" fill="#FEBC2E"/>
  <circle cx="112" cy="76" r="6" fill="#28C840"/>
  <text x="146" y="80" font-family="JetBrains Mono, monospace" font-size="14" fill="#6B7280">automata@latam: ~/projects/${escape(slug || "")}</text>

  <!-- Top divider -->
  <line x1="32" y1="100" x2="1168" y2="100" stroke="#1F2937" stroke-width="1"/>

  <!-- Type badge -->
  <g transform="translate(72, 140)">
    <rect x="0" y="0" width="${type.length * 11 + 28}" height="28" fill="none" stroke="#374151"/>
    <circle cx="14" cy="14" r="3" fill="#4ADE80"/>
    <text x="24" y="19" font-family="JetBrains Mono, monospace" font-size="13" fill="#4ADE80" letter-spacing="2">${escape(type)}</text>
  </g>

  <!-- Prompt -->
  <text x="72" y="220" font-family="JetBrains Mono, monospace" font-size="22" fill="#4ADE80">$ cat ./${escape(slug || "")}.md</text>

  <!-- Title (1-2 lines) -->
  ${titleLines
      .map(
          (line, i) =>
              `<text x="72" y="${290 + i * 80}" font-family="JetBrains Mono, monospace" font-size="68" font-weight="700" fill="#E5E7EB">&gt; ${escape(line)}</text>`
      )
      .join("\n  ")}

  <!-- Tech stack -->
  <text x="72" y="${290 + titleLines.length * 80 + 50}" font-family="JetBrains Mono, monospace" font-size="20" fill="#9CA3AF">// ${escape(tech)}</text>

  <!-- Footer brand -->
  <text x="72" y="566" font-family="JetBrains Mono, monospace" font-size="16" fill="#6B7280">
    <tspan fill="#4ADE80">$</tspan> automata --init
  </text>
  <text x="1128" y="566" text-anchor="end" font-family="JetBrains Mono, monospace" font-size="14" fill="#6B7280">automata.pe</text>
</svg>`;

    return new Response(svg, {
        headers: {
            "Content-Type": "image/svg+xml; charset=utf-8",
            "Cache-Control": "public, max-age=86400",
        },
    });
};

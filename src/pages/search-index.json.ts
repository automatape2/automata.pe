import type { APIRoute } from "astro";
import { translations } from "../i18n/translations";

/**
 * Full-text search index for the Cmd+K palette.
 *
 * Emits one entry per (project, section) so a content match deep-links to the
 * exact section (#sec-discovery, #sec-challenges, …) rather than the page top.
 * Mermaid/code sources are excluded — only human-readable prose is indexed.
 */

type Entry = {
    title: string;   // "Project — Section"
    section: string; // human section name
    href: string;    // /projects/slug#sec-...
    text: string;    // lowercased searchable body
};

const clean = (s: unknown): string =>
    typeof s === "string" ? s.replace(/\s+/g, " ").trim() : "";

function buildLang(lang: "en" | "es"): Entry[] {
    const base = lang === "es" ? "/es/projects" : "/projects";
    const items = (translations[lang] as any).solutions.items as any[];
    const L = lang === "es"
        ? { discovery: "descubrimiento", challenges: "desafios tecnicos", results: "resultados", lessons: "lecciones", overview: "overview" }
        : { discovery: "discovery", challenges: "technical challenges", results: "results", lessons: "lessons learned", overview: "overview" };

    const entries: Entry[] = [];
    const push = (p: any, section: string, anchor: string, parts: (string | undefined)[]) => {
        const text = parts.map(clean).filter(Boolean).join(" ");
        if (!text) return;
        entries.push({
            title: `${p.title} — ${section}`,
            section,
            href: `${base}/${p.slug}${anchor}`,
            text: text.toLowerCase(),
        });
    };

    items.forEach((p: any) => {
        // Overview / header
        push(p, L.overview, "#overview", [p.description, p.fullDescription, p.role]);
        // 01 discovery
        push(p, L.discovery, "#sec-discovery", [p.fullDescription, p.problem, p.audience]);
        // 06 technical challenges
        if (Array.isArray(p.techChallenges)) {
            p.techChallenges.forEach((c: any) => {
                push(p, L.challenges, "#sec-challenges", [c.problem, c.constraint, c.approach, c.algorithm]);
            });
        }
        // 09 results
        const metricLabels = Array.isArray(p.metrics) ? p.metrics.map((m: any) => `${m.value} ${m.label}`) : [];
        push(p, L.results, "#sec-results", [p.results, p.challenges, ...metricLabels]);
        // 10 lessons
        if (Array.isArray(p.lessons)) {
            p.lessons.forEach((l: any) => push(p, L.lessons, "#sec-lessons", [l.title, l.body]));
        }
    });

    return entries;
}

export const GET: APIRoute = () => {
    const body = JSON.stringify({
        en: buildLang("en"),
        es: buildLang("es"),
    });
    return new Response(body, {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
        },
    });
};

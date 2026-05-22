import type { APIRoute } from "astro";
import { translations } from "../i18n/translations";

const SITE = "https://automata.pe";

const staticPaths = [
    "/", "/en", "/es",
    "/projects", "/es/projects",
    "/privacy", "/terms", "/es/privacy", "/es/terms",
];

function url(loc: string, lastmod = new Date().toISOString().slice(0, 10)) {
    return `  <url>\n    <loc>${SITE}${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
}

export const GET: APIRoute = () => {
    const projectPaths: string[] = [];
    translations.en.solutions.items.forEach((p: any) => {
        projectPaths.push(`/projects/${p.slug}`);
    });
    translations.es.solutions.items.forEach((p: any) => {
        projectPaths.push(`/es/projects/${p.slug}`);
    });

    const entries = [...staticPaths, ...projectPaths]
        .map((path) => url(path))
        .join("\n");

    const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`;

    return new Response(body, {
        headers: { "Content-Type": "application/xml; charset=utf-8" },
    });
};

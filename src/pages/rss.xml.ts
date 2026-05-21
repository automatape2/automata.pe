import type { APIRoute } from "astro";
import { translations } from "../i18n/translations";

const SITE = "https://automata.pe";

function escape(s: string) {
    return s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}

export const GET: APIRoute = () => {
    const items = translations.en.solutions.items as any[];
    const now = new Date().toUTCString();

    const entries = items
        .map((p) => {
            const link = `${SITE}/projects/${p.slug}`;
            return `    <item>
      <title>${escape(p.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description>${escape(p.description || "")}</description>
      <category>${escape(p.type || "case")}</category>
      <pubDate>${now}</pubDate>
    </item>`;
        })
        .join("\n");

    const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Automata — Projects</title>
    <link>${SITE}</link>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml"/>
    <description>Real implementations combining technology, operations and AI.</description>
    <language>en</language>
    <lastBuildDate>${now}</lastBuildDate>
${entries}
  </channel>
</rss>`;

    return new Response(body, {
        headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
    });
};

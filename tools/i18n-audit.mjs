#!/usr/bin/env node
/**
 * i18n audit — compares EN and ES project entries and reports mismatches:
 *   - projects present in one locale but not the other
 *   - per-project fields present in one locale but missing in the other
 *
 * Run:  node tools/i18n-audit.mjs
 * Exits non-zero if any mismatch is found (so it can gate CI).
 */
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { readFileSync } from "node:fs";

const here = dirname(fileURLToPath(import.meta.url));
const tsPath = resolve(here, "../src/i18n/translations.ts");
const src = readFileSync(tsPath, "utf8");

// We can't import the TS directly without a loader, so do a lightweight structural check:
// pull each project's `slug:` and the field keys around it per locale block.
// Heuristic but good enough for an audit signal.

function localeBlock(label) {
    // Matches `  es: {` ... up to the matching top-level close. Cheap: split on the two locale keys.
    const reEn = /\n {4}en:\s*\{/;
    const reEs = /\n {4}es:\s*\{/;
    const enIdx = src.search(reEn);
    const esIdx = src.search(reEs);
    if (enIdx < 0 || esIdx < 0) return "";
    if (label === "es") return src.slice(esIdx, enIdx > esIdx ? enIdx : undefined);
    return src.slice(enIdx, esIdx > enIdx ? esIdx : undefined);
}

function projectsOf(block) {
    // Find each `slug: "..."` and collect the top-level field names until the next slug or items end.
    const slugRe = /slug:\s*"([^"]+)"/g;
    const out = {};
    const slugs = [...block.matchAll(slugRe)];
    slugs.forEach((m, i) => {
        const start = m.index;
        const end = i + 1 < slugs.length ? slugs[i + 1].index : start + 8000;
        const chunk = block.slice(start, end);
        // top-level field names at the project object indentation (20 spaces)
        const fieldRe = /\n {20}([a-zA-Z]+):/g;
        const fields = new Set();
        let f;
        while ((f = fieldRe.exec(chunk))) fields.add(f[1]);
        out[m[1]] = fields;
    });
    return out;
}

const en = projectsOf(localeBlock("en"));
const es = projectsOf(localeBlock("es"));

let problems = 0;
const enSlugs = new Set(Object.keys(en));
const esSlugs = new Set(Object.keys(es));

for (const s of enSlugs) if (!esSlugs.has(s)) { console.error(`✗ '${s}' exists in EN but not ES`); problems++; }
for (const s of esSlugs) if (!enSlugs.has(s)) { console.error(`✗ '${s}' exists in ES but not EN`); problems++; }

for (const s of enSlugs) {
    if (!esSlugs.has(s)) continue;
    const a = en[s], b = es[s];
    for (const k of a) if (!b.has(k)) { console.error(`✗ '${s}': field '${k}' in EN but not ES`); problems++; }
    for (const k of b) if (!a.has(k)) { console.error(`✗ '${s}': field '${k}' in ES but not EN`); problems++; }
}

if (problems === 0) {
    console.log(`✓ i18n audit passed — ${enSlugs.size} projects, EN/ES field sets match.`);
    process.exit(0);
} else {
    console.error(`\n${problems} mismatch(es) found.`);
    process.exit(1);
}

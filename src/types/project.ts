/**
 * Shared types for project case studies.
 *
 * The data lives in src/i18n/translations.ts (translations.{en,es}.solutions.items),
 * but every consumer (ProjectDetail, route getStaticPaths, ProjectsGrid) should type
 * against these so fields are autocompleted and typos are caught.
 */

import type { ImageMetadata } from "astro";

export type ProjectType = "producto" | "product" | "caso" | "case";

/** A diagram entry — either a Mermaid source (preferred) or ASCII art, or both. */
export interface Diagram {
    mermaid?: string;
    ascii?: string;
}

export interface ArchitectureDiagrams {
    context?: Diagram | string;
    container?: Diagram | string;
    component?: Diagram | string;
}

export interface Infrastructure {
    provider?: string;
    services?: string[];
    diagram?: Diagram | string;
}

export interface StackGroups {
    frontend?: string[];
    backend?: string[];
    data?: string[];
    ai?: string[];
    devops?: string[];
}

export interface CodeHighlight {
    file?: string;
    title?: string;
    lang?: string;
    note?: string;
    code: string;
}

export interface TechChallenge {
    tags?: string[];
    problem: string;
    constraint?: string;
    approach?: string;
    algorithm?: string;
    codeFile?: string;
    codeLang?: string;
    /** When set, the code block shows an "open in StackBlitz" button with this template. */
    codeSandbox?: "typescript" | "node" | "html" | "astro" | "javascript";
    code?: string;
}

export interface Testing {
    strategy?: string;
    coverage?: string;
    tools?: string[];
}

export interface Metric {
    value: string;
    label: string;
}

export interface Lesson {
    title: string;
    body: string;
}

export interface Project {
    // Identity / hero
    slug: string;
    title: string;
    description: string;
    tech: string[];
    image: ImageMetadata;
    type: ProjectType;

    // Links
    demoUrl?: string;
    figmaUrl?: string;
    githubUrl?: string;

    // Quick facts
    year?: string;
    role?: string;
    timeline?: string;
    team?: string;

    // Discovery
    fullDescription?: string;
    problem?: string;
    audience?: string;

    // Design
    designTools?: string[];
    designSystem?: string[];

    // Architecture / infra / stack
    architecture?: ArchitectureDiagrams;
    infrastructure?: Infrastructure;
    stack?: StackGroups;
    codeHighlights?: CodeHighlight[];

    // Deep dives
    techChallenges?: TechChallenge[];
    testing?: Testing;

    // Media
    screenshots?: ImageMetadata[];

    // Results
    metrics?: Metric[];
    challenges?: string;
    results?: string;
    lessons?: Lesson[];
}

import { test, expect } from "@playwright/test";

test.describe("portfolio smoke", () => {
    test("landing renders the terminal hero", async ({ page }) => {
        await page.goto("/");
        await expect(page).toHaveTitle(/Automata/i);
        // Header brand prompt is present
        await expect(page.locator("header")).toContainText("automata");
    });

    test("Cmd+K opens the command palette and lists projects", async ({ page }) => {
        await page.goto("/");
        await page.keyboard.press("Control+k");
        const overlay = page.locator("#cmdk-overlay");
        await expect(overlay).toHaveAttribute("data-open", "true");
        await page.fill("#cmdk-input", "landing");
        await expect(page.locator(".cmdk-item").first()).toContainText(/LandingPager/i);
        await page.keyboard.press("Escape");
        await expect(overlay).toHaveAttribute("data-open", "false");
    });

    test("project page renders sections, TOC and architecture diagram", async ({ page }) => {
        await page.goto("/projects/landingpager");
        await expect(page).toHaveTitle(/LandingPager/i);
        // Table of contents (desktop) present
        await expect(page.locator(".toc-desktop")).toBeVisible();
        // Architecture section heading
        await expect(page.locator("#sec-architecture")).toContainText("architecture");
        // Mermaid renders an SVG eventually
        await expect(page.locator(".mv-svg svg").first()).toBeVisible({ timeout: 15_000 });
    });

    test("challenges carousel advances", async ({ page }) => {
        await page.goto("/projects/landingpager");
        const counter = page.locator("[data-carousel-counter]").first();
        await expect(counter).toHaveText("01");
        await page.locator("[data-carousel-next]").first().click();
        await expect(counter).toHaveText("02");
    });

    test("architecture master-detail swaps diagrams", async ({ page }) => {
        await page.goto("/projects/landingpager");
        await page.locator('[data-md-pick="container"]').first().click();
        await expect(page.locator('[data-md-pick="container"]').first()).toHaveAttribute("data-active", "true");
    });

    test("language switcher toggles EN ↔ ES", async ({ page }) => {
        await page.goto("/projects/landingpager");
        await page.locator('a[aria-label*="Español"]').click();
        await expect(page).toHaveURL(/\/es\/projects\/landingpager/);
    });

    test("404 surfaces a fuzzy suggestion", async ({ page }) => {
        await page.goto("/projects/lanidngpager");
        await expect(page.locator("#did-you-mean")).toBeVisible();
        await expect(page.locator("#dym-list")).toContainText(/LandingPager/i);
    });
});

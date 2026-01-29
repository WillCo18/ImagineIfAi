import { test, expect } from '@playwright/test';

test('landing page smoke test', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Verify page title
    await expect(page).toHaveTitle(/Imagine-If.AI/);

    // Verify Hero Section
    await expect(page.locator('h1')).toBeVisible();

    // Verify Service Cards Section
    const servicesSection = page.locator('#services');
    await expect(servicesSection).toBeVisible();

    // Verify new Service Cards content
    await expect(servicesSection.locator('h2')).toContainText('Real automations we deploy');
    await expect(servicesSection.locator('p').first()).toContainText('A few common builds');

    // Verify there are 3 cards
    // Note: CSS modules generate unique classes, so we might need to rely on structure or partial matching if we can't easily import the module here.
    // Using a more generic selector for the grid items inside #services
    // Based on structure: #services > container > grid > card
    // We can look for headings inside the section which should be h3s for card titles
    const cardTitles = servicesSection.locator('h3');
    await expect(cardTitles).toHaveCount(3);

    await expect(cardTitles.nth(0)).toContainText('Lead Capture');
    await expect(cardTitles.nth(1)).toContainText('Financial Data');
    await expect(cardTitles.nth(2)).toContainText('Social Media Ops');

    // Verify Outcome footer
    // Looking for text that matches one of our outcome lines
    await expect(servicesSection).toContainText('Faster response, higher conversion');

    // Verify Contact Form exists
    await expect(page.locator('#contact')).toBeVisible();
});

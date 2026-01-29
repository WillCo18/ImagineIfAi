import { test, expect } from '@playwright/test';

test('philosophy section smoke test', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Verify the new Headline
    await expect(page.locator('h2', { hasText: 'We don\'t sell "AI"' })).toBeVisible();

    // Verify the Workflow Diagram Nodes exist
    // We can look for the specific titles we put in the nodes
    await expect(page.getByText('Repetitive Admin')).toBeVisible();
    await expect(page.getByText('Human-in-the-Loop')).toBeVisible();
    await expect(page.getByText('Value Focus')).toBeVisible();

    // Verify the Roots/Badge section
    await expect(page.getByText('Built by Operators')).toBeVisible();

    // Verify the CTA link
    const cta = page.getByRole('link', { name: 'Start with a clear first step' });
    await expect(cta).toBeVisible();
    await expect(cta).toHaveAttribute('href', '#contact');
});

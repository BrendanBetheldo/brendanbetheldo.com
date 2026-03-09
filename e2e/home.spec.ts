import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
  test('loads', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Brendan Betheldo/);
  });

  test('has hero section', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#hero')).toBeVisible();
  });
});

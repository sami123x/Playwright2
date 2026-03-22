import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.practicesoftwaretesting.com/');
  await expect(page.getByText('Categories Hand Tools Categories Hammer Hand Saw Wrench Screwdriver Pliers')).toBeVisible();

  await page.locator('[data-test="nav-categories"]').click();
  await expect(page.getByRole('menuitem', { name: 'Categories nav-categories' })).toBeVisible();

  await page.locator('[data-test="nav-special-tools"]').click();
  await expect(page.getByRole('menuitem', { name: 'Categories' })).toBeVisible();

  await page.locator('[data-test="brand-01KMBEPJR9BKZ1MX6620K03W04"]').check();
  await page.locator('[data-test="nav-categories"]').click();
  await expect(page.getByRole('menuitem', { name: 'Categories nav-categories' })).toBeVisible();

  await page.locator('[data-test="nav-hand-tools"]').click();
  await expect(page.getByRole('menuitem', { name: 'Categories' })).toBeVisible();

  await page.locator('[data-test="category-01KMBEPK2Z67CTZ4F3DJ1WTNKD"]').check();
  await expect(page.locator('[data-test="product-01KMBEPK4TRSNWZN4FFCTDVRN4"]')).toBeVisible();

  await page.locator('[data-test="category-01KMBEPK2Z67CTZ4F3DJ1WTNKG"]').check();
  await expect(page.locator('[data-test="product-01KMBEPK44PN1WJR58RJ1WK70C"]')).toBeVisible();

  await page.locator('[data-test="brand-01KMBEPJR9BKZ1MX6620K03W05"]').check();
  await expect(page.locator('[data-test="product-01KMBEPK4ANB0H06DVGWH1KWC9"]')).toBeVisible();

  await page.locator('[data-test="product-01KMBEPK4DWM3W66ZEQXEQV1GH"]').click();
  await expect(page.getByRole('figure', { name: 'Photo by Yasin Hasan on' })).toBeVisible();

  await page.locator('[data-test="increase-quantity"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
});
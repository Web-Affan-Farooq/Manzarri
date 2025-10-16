import { test, expect } from "@playwright/test";
import { token } from "@/constants";

test("Running tests for offer creation form validation", async ({
  page,
  context,
}) => {
  // Must set the admin auth token in cookies for authentication ...
  await context.addCookies([
    {
      name: token.admin, // your real cookie name
      value:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiJhYzJLZTJ4UjlrM2hNMjZ4RUZvVWhKIiwiZW1haWwiOiJhZmZhbmFtaXI5MDNAZ21haWwuY29tIiwiaWF0IjoxNzU5ODU4MTk0fQ.4mpzzugHs688Efz2grmJYevFkiMEMv7frxW10LqFBXk", // fake or seeded session value
      domain: "localhost",
      path: "/",
      httpOnly: true,
      sameSite: "Lax",
    },
  ]);

  await page.goto("http://localhost:3000/Admin/offers/create");

  await page.fill('input[id="offer-name"]', "fjhdsjfhsjdhfjdsh");
  await page.fill('input[id="discount-percentage"]', "10");
  await page.fill('input[id="promo-code"]', "3243");

  await page.click("text=Create Offer");
  await page.screenshot({ fullPage: true, path: "debug.png" });

  await expect(
    page.locator("p:has-text('Offer name must be at least 3 characters long')")
  ).toBeVisible();
  await expect(page.locator("p:has-text('Invalid number')")).toBeVisible();

  await expect(
    page.locator("p:has-text('Invalid date format for offer validity')")
  ).toBeVisible();
  await expect(
    page.locator("p:has-text('Promo code must be 6 characters')")
  ).toBeVisible();
});

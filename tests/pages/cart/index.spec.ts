import { expect } from "@playwright/test";
import UserProfileTest from "@/tests/config/user-profile";

// use this imported `test` name to define the test
const test = UserProfileTest;

test.describe("Cart Flow testing ...", () => {
  test("should add and remove products correctly", async ({ page }) => {
    // 1. Navigate to the marketplace
    await page.goto("http://localhost:3000/marketplace");
    await expect(page).toHaveURL("http://localhost:3000/marketplace");

    // Get the locator for all product detail links
    const productLinksLocator = page.locator("#details-link");
    
    // Ensure at least 4 products are available
    const totalProducts = await productLinksLocator.count();
    expect(totalProducts).toBeGreaterThanOrEqual(4);

    // Loop through the first 4 products to add them to the cart
    for (let i = 0; i < 4; i++) {
      // Use .nth() on the original locator for proper indexing
      const link = productLinksLocator.nth(i);
      await link.click();

      // Ensure we landed on a product detail page
      await expect(page).toHaveURL(/http:\/\/localhost:3000\/marketplace\/.+/);

      // Attempt to add to cart without selecting size (to test validation)
      const addToCartButton = page.getByRole("button", { name: "Add to cart" });
      await addToCartButton.click();
      await expect(page.getByText("Please select size")).toBeVisible();

      // Select size 'sm' and add to cart
      await page.getByRole("button", { name: "sm" }).click();
      await addToCartButton.click();
      
      // Verify success message
      await expect(
        page.getByText("Product added to cart successfully")
      ).toBeVisible();

      // Go back to the marketplace to select the next product
      await page.goto("http://localhost:3000/marketplace");
    }

    // 2. Navigate to the cart page
    await page.goto("http://localhost:3000/profile/cart");

    // Locate the remove/delete buttons (assuming the selector is correct)
    const removeButtons = page.locator("button:has(svg.w-4.h-4)");
    const cartCount = await removeButtons.count();
    
    // Verify all 4 items are in the cart
    expect(cartCount).toBe(4);

    // 3. Remove the first product individually
    await removeButtons.first().click();
    await expect(page.getByText("product deleted successfully")).toBeVisible();
    
    // Verify only 3 items remain
    await expect(removeButtons).toHaveCount(3);

    // 4. Clear all remaining items
    await page.getByRole("button", { name: "Clear All" }).click();

    // 5. Verify the cart is empty
    await expect(
      page.locator("h2", { hasText: "Your cart is empty" })
    ).toBeVisible();
  });
});

## prompt for cart flow testing 

## Writing test for cart page :
I've setted up the playwright with nextjs You've to write test to test the following cart flow

- Goto the page http://localhost:3000/marketplace
- Here cards would be displayed with this button 

```html
          <Link href={`/marketplace/${product._id}`} id="details-link">
            <span className="cursor-pointer w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-manzarri-skin flex justify-center items-center">
              <ShoppingCart className="fill-current size-4 sm:size-5 stroke-manzarri-reddish-brown" />
            </span>
          </Link>
```

- click on this button and expect the url to be `http://lcoalhost:3000/marketplace/{dynamic_id}` 

- then the dynamic page would have button which has exact text `Add to cart`
- expect a toast to be shown with text "Please select size"

- then click on the button with text `sm`
- then click on the button with text `Add to cart` again and expect toast showed with the text "Product added to cart successfully"
- then again go to page marketplace and go to another product's details page and add it to cart as described above . make sure to add atleast 4 products in cart

- then go to page /profile/cart
- on this page , cart products array is mapped and show the cart card , each cart should have this button 

```html
              <Button
                variant="ghost"
                size="sm"
                className="text-manzarri-black/60 hover:text-red-600"
                onClick={() => removeFromCart(cartProduct.id)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
```
click on this button and expect a toast showing the text "product deleted successfully" 

- this cart page has a button that has this text `Clear All` 
and expect this heading in page

```html
     <h2 className="text-2xl font-semibold text-manzarri-black mb-4">
        Your cart is empty
      </h2>
```

## result :
```typescript

import UserProfileTest from "@/tests/config/user-profile";
import { expect } from "@playwright/test";

// test.describe("Cart Flow testing ...", () => {
UserProfileTest(
  "should add and remove products correctly",
  async ({ page }) => {
    // Go to marketplace
    await page.goto("http://localhost:3000/marketplace");
    await expect(page).toHaveURL("http://localhost:3000/marketplace");

    // Select the first four products
    const productLinks = page.locator("#details-link").nth(0);
    const allLinks = page.locator("#details-link");

    // ensure at least 4 products exist
    const totalProducts = await allLinks.count();
    expect(totalProducts).toBeGreaterThanOrEqual(4);

    // Loop through 4 products
    for (let i = 0; i < 4; i++) {
      const link = allLinks.nth(i);
      await link.click();

      // Verify dynamic route
      await expect(page).toHaveURL(/http:\/\/localhost:3000\/marketplace\/.+/);

      // Click Add to Cart
      await page.getByRole("button", { name: "Add to cart" }).click();

      // Expect "Please select size" toast
      await expect(page.getByText("Please select size")).toBeVisible();

      // Select size "sm"
      await page.getByRole("button", { name: "sm" }).click();

      // Click Add to Cart again
      await page.getByRole("button", { name: "Add to cart" }).click();

      // Expect success toast
      await expect(
        page.getByText("Product added to cart successfully")
      ).toBeVisible();

      // Go back to marketplace
      await page.goto("http://localhost:3000/marketplace");
    }

    // Navigate to cart page
    await page.goto("http://localhost:3000/profile/cart");

    // Ensure cart cards are visible
    const cartItems = page.locator("button:has(svg.w-4.h-4)");
    const cartCount = await cartItems.count();
    expect(cartCount).toBeGreaterThanOrEqual(4);

    // Delete one product and expect toast
    await cartItems.first().click();
    await expect(page.getByText("product deleted successfully")).toBeVisible();

    // Clear all
    await page.getByRole("button", { name: "Clear All" }).click();

    // Expect empty cart heading
    await expect(
      page.locator("h2", { hasText: "Your cart is empty" })
    ).toBeVisible();
  }
);
// });
```
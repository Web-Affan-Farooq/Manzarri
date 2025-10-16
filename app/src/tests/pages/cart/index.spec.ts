import UserProfileTest from "@/tests/config/user-profile";
import {expect} from "@playwright/test"


UserProfileTest("Testing cart page",async ({page,context}) => {

    await page.goto("http://localhost:3000/marketplace")
    // await page.click(document.querySelectorAll("#details-link")[0].id)
    await page.getByRole("link",{name:""})
    

    // expect(page).toHaveURL(page.
})
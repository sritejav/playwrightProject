import {test, expect} from "@playwright/test"

test("Home page", async({page})=>{          //This is the syntax of playwright test

    await page.goto("https://practicesoftwaretesting.com/");
    //Ensure sign In is present
    await expect(page.getByTestId("nav-sign-in")).toHaveText("Sign in");

    //Check title of the page
    await expect(page).toHaveTitle("Practice Software Testing - Toolshop - v5.0");

    //Check count of items

    const productGrid = page.locator(".col-md-9")  //The "." indicates its a class name
    await expect(productGrid.getByRole("link")).toHaveCount(9);

    //Search for Thor hammer and check the result:
    await page.getByTestId("search-query").fill("Thor Hammer");
    await page.getByTestId("search-submit").click();

    await expect(page.getByAltText("Thor Hammer")).toBeVisible();

})
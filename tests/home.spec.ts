import { test, expect } from "@playwright/test";

test.describe("Home Page with no auth", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/");
  });

  test("check signIn", async ({ page }) => {
    await expect(page.getByTestId("nav-sign-in")).toHaveText("Sign in");
  });

  test("Check Page Title", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Practice Software Testing - Toolshop - v5.0",
    );
  });

  test("Check count of items", async ({ page }) => {
    const productGrid = page.locator(".col-md-9")  //The "." indicates its a class name
    await expect(productGrid.getByRole("link")).toHaveCount(9);
  });

  test("Search for Thor hammer and check the result", async ({ page }) => {
    await page.getByTestId("search-query").fill("Thor Hammer");
    await page.getByTestId("search-submit").click();
    await expect(page.getByAltText("Thor Hammer")).toBeVisible();
  });
});

test.describe("Home page Customer01 Auth", () =>{
    test.use({ storageState: ".auth/customer01.json"});
    test.beforeEach(async ({page}) => {
        await page.goto("https://practicesoftwaretesting.com/");
    });

    test("check customer01 is signed In", async ({page}) => {
        await expect(page.getByTestId("nav-sign-in")).not.toBeVisible();
    })
  
});

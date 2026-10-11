const {test} = require('@playwright/test');

// test('First Playwright Test', async function(){
// //Anonymous functions can also be written like this:  async ()=>


// });

test('First playwright Browser Test', async ({browser})=>{

    //Fresh browser with plugins/cookies: can send it using newContext()
    const context = browser.newContext();
    const page = (await context).newPage;
    await page.goto("https://www.google.com");
   
})
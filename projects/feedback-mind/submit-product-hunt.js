const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  try {
    console.log('Opening Product Hunt...');
    await page.goto('https://www.producthunt.com/post', { timeout: 30000 });
    
    // Check if we need to login
    const needsLogin = await page.locator('text=Log in').isVisible().catch(() => false);
    
    if (needsLogin) {
      console.log('Need to login...');
      await page.click('text=Log in');
      await page.waitForTimeout(2000);
      
      // Try GitHub login
      const githubBtn = page.locator('button:has-text("GitHub")');
      if (await githubBtn.isVisible()) {
        await githubBtn.click();
        await page.waitForTimeout(3000);
        
        // Check if we're on GitHub login page
        if (page.url().includes('github.com')) {
          console.log('On GitHub login page');
          // Fill in GitHub credentials
          await page.fill('#login_field', 'therobbieboo');
          await page.fill('#password', 'Loverobbie921');
          await page.click('input[type="submit"]');
          await page.waitForTimeout(3000);
        }
      }
    }
    
    console.log('Current URL:', page.url());
    
    // Check if we're logged in
    const isLoggedIn = await page.locator('text=Post').isVisible().catch(() => false);
    
    if (isLoggedIn || page.url().includes('producthunt.com/post')) {
      console.log('Logged in! Filling form...');
      
      // Fill in the product details
      await page.fill('input[name="name"], input[placeholder*="Product name"]', 'FeedbackMind AI');
      await page.waitForTimeout(500);
      
      // Try to find and fill tagline
      const taglineInputs = page.locator('input');
      await taglineInputs.nth(1).fill('AI-powered user feedback analysis for indie hackers');
      await page.waitForTimeout(500);
      
      // Fill URL
      await page.fill('input[type="url"], input[placeholder*="URL"]', 'https://therobbieboo.github.io/feedback-landing/');
      await page.waitForTimeout(500);
      
      console.log('Form filled. Please check and submit manually.');
    } else {
      console.log('Cannot auto-login. Please login manually and run again.');
    }
    
  } catch (error) {
    console.error('Error:', error.message);
  }
  
  await page.screenshot({ path: 'producthunt.png' });
  console.log('Screenshot saved to producthunt.png');
  
  await browser.close();
})();

const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-blink-features=AutomationControlled']
  });
  const page = await browser.newPage();
  
  try {
    console.log('Opening Product Hunt with stealth mode...');
    
    await page.setViewport({ width: 1920, height: 1080 });
    
    await page.goto('https://www.producthunt.com', { waitUntil: 'networkidle2', timeout: 60000 });
    await delay(3000);
    
    console.log('Current URL:', page.url());
    
    if (page.url().includes('log in') || page.url().includes('login')) {
      console.log('Need to login...');
      
      await page.click('text=Log in');
      await delay(2000);
      
      const githubBtn = await page.$('button:has-text("GitHub")');
      if (githubBtn) {
        await githubBtn.click();
        console.log('Clicked GitHub login');
        await delay(5000);
        
        if (page.url().includes('github.com')) {
          console.log('On GitHub, filling credentials...');
          await page.type('#login_field', 'therobbieboo', { delay: 100 });
          await page.type('#password', 'Loverobbie921', { delay: 100 });
          await page.click('input[type="submit"]');
          await delay(5000);
        }
      }
    }
    
    console.log('Final URL:', page.url());
    
    await page.goto('https://www.producthunt.com/post', { waitUntil: 'networkidle2', timeout: 60000 });
    await delay(3000);
    
    console.log('On post page');
    
    await page.screenshot({ path: 'producthunt-stealth.png' });
    console.log('Screenshot saved');
    
    await browser.close();
  } catch (error) {
    console.error('Error:', error.message);
    await page.screenshot({ path: 'error.png' });
    await browser.close();
  }
})();

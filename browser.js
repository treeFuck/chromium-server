
import puppeteer from 'puppeteer';

export default async (ip, port) => {
  return await puppeteer.launch({
    args: [
      '--headless',
      '--no-sandbox', 
      '--disable-setuid-sandbox',
      `--remote-debugging-address=0.0.0.0`,
      `--remote-debugging-port=${port}`,
      // '–disable-gpu',
      // '–disable-dev-shm-usage',
      // '–no-first-run',
      // '–no-zygote',
      // '–single-process'
    ]
  });


}

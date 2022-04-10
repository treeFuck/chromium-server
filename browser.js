
import puppeteer from 'puppeteer';

export default async (ip, port) => {
  console.log(`--remote-debugging-addres=${ip}`)
  return await puppeteer.launch({
    args: [
      '--headless',
      `--remote-debugging-address=${ip}`,
      `--remote-debugging-port=${port}`,
      // '–disable-gpu',
      // '–disable-dev-shm-usage',
      // '–disable-setuid-sandbox',
      // '–no-first-run',
      // '–no-sandbox',
      // '–no-zygote',
      // '–single-process'
    ]
  });


}

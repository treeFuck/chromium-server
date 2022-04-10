import Koa from 'koa';
import koaBody from 'koa-body';
import Router from 'koa-router';
import launch from './browser.js';

let browser = null;
let wsEndpoint = '丢';
let ip = null;
const router = new Router();


router.get('/test', async ctx => {
  ctx.body = {
    wsEndpoint: wsEndpoint
  }
});

let init = async () => {

  ip = '175.178.108.248';  
  browser = await launch(ip, 9222);
  wsEndpoint = await browser.wsEndpoint();
  
  const app = new Koa();
  app.use(koaBody());
  app.use(router.routes()).use(router.allowedMethods());
  
  app.listen(6666, () => {
    console.log(`请访问: http://${ip}:6666/test`);
  })

};

init();
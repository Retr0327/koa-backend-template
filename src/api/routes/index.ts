import { PREFIX } from '@configs';
import Router, { RouterContext } from '@koa/router';

const router = new Router();

router.prefix(PREFIX);

router.get('/', (ctx: RouterContext) => {
  const ip = ctx.request.ip.replace('::ffff:', '');
  ctx.status = 200;
  ctx.body = { status: 'success', ip };
});

export default router;

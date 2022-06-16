import Router from "@koa/router";
import { RouterContext } from "@koa/router";

const router = new Router({});

router.get("/", (ctx: RouterContext) => {
  const ip = ctx.request.ip.replace("::ffff:", "");
  ctx.status = 200;
  ctx.body = { status: "success", ip };
});

export default router;

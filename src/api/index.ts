import Koa from 'koa';
import router from '@routes';
import cors from '@koa/cors';
import koaEtag from 'koa-etag';
import morgan from 'koa-morgan';
import { corsConfig } from '@configs';
import bodyParser from 'koa-bodyparser';
import customDevFormat from '@utils/logger';
import koaConditionalGet from 'koa-conditional-get';

morgan.format('custom-dev', customDevFormat);

const app = new Koa();

app.use(morgan('custom-dev'));
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    ctx.body = { status: 'failed' };
  }
});

app.use(koaConditionalGet());
app.use(koaEtag());
app.use(cors(corsConfig));
app.use(bodyParser());

app.use(router.routes());
app.use(router.allowedMethods());

export default app;

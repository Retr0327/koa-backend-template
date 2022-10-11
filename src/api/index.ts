import Koa from 'koa';
import router from '@routes';
import koaEtag from 'koa-etag';
import cors from '@middlewares/cors';
import bodyParser from 'koa-bodyparser';
import morgan from '@middlewares/morgan';
import koaConditionalGet from 'koa-conditional-get';

const app = new Koa();

app.use(morgan());
app.use(koaConditionalGet());
app.use(koaEtag());
app.use(cors());
app.use(bodyParser());

app.use(router.routes());
app.use(router.allowedMethods());

export default app;

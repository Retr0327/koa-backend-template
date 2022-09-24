import { Options } from '@koa/cors';

const corsConfig: Options = {
  origin: (ctx) => {
    const allowList = ['http://localhost:3001', 'http://localhost:3002'];
    const origin = ctx.request.header.origin ?? '';
    if (allowList.includes(origin)) {
      return origin;
    }
    return '';
  },
  credentials: true,
};

export default corsConfig;

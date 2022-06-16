import { Options } from "@koa/cors";

const corsConfig: Options = {
  origin: (ctx) => {
    const whiteList = ["http://localhost:3001"];
    const origin = ctx.request.header.origin ?? "";

    if (whiteList.includes(origin)) {
      return origin;
    }

    return "";
  },
  credentials: true,
};

export default corsConfig;

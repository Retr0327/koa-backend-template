import Koa from "koa";
import router from "@routes";
import cors from "@koa/cors";
import morgan from "koa-morgan";
import { corsConfig } from "@config";
import bodyParser from "koa-bodyparser";
import { customDevFormat } from "@utils";

morgan.format("custom-dev", customDevFormat);

const app = new Koa();
app.use(cors(corsConfig));
app.use(morgan("custom-dev"));
app.use(bodyParser());

app.use(router.routes());

export default app;

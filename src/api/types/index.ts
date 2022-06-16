import { IncomingMessage } from "http";
import { Session } from "koa-generic-session";

export type IncomingMessageWithKoaSession = IncomingMessage & {
  session?: Session;
};

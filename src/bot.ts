import {twitter_opt, translate_opt_headers} from "./data/api";
import { Server} from "./server";

const server = new Server(twitter_opt);

server.post("Hello, world!!");
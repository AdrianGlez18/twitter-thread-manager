import Twit, { Options } from "twit";

export class Server {
    client: Twit;
    constructor(options: Options) {
        this.client = new Twit(options);
    }

    async post(text: string) {
        await this.client.post("statuses/update", { status: text });
    }

    translateAndPost(fromLanguage: string, toLanguage: string) {

    }

}
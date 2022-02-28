declare global {
    namespace NodeJS {
        interface ProcessEnv {
            CONSUMER_KEY: string;
            CONSUMER_SECRET: string;
            ACCESS_TOKEN: string;
            ACCESS_TOKEN_SECRET: string;
            TRANSLATION_API_HOST: string;
            TRANSLATION_API_KEY: string;
        }
    }
}

export { }
import { Options } from "twit";

export const twitter_opt: Options = {
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
};

export const translate_opt_headers = {
    'x-rapidapi-host': process.env.TRANSLATION_API_HOST,
    'x-rapidapi-key': process.env.TRANSLATION_API_KEY
}
var axios = require("axios").default;
import { translate_opt_headers } from "./data/api";

export const translate = async (text: string, fromLanguage: string, toLanguage: string) => {
  var options = {
    method: 'GET',
    url: 'https://nlp-translation.p.rapidapi.com/v1/translate',
    params: { text: text, to: toLanguage, from: fromLanguage },
    headers: translate_opt_headers
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}
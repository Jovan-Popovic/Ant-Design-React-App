import axios from "axios";

const covidURL = "https://api.covid19api.com";
const jsonBlobURL = "https://jsonblob.com/api/jsonBlob";
const rickMortyURL = "https://rickandmortyapi.com/api";

export const covid = axios.create({ baseURL: covidURL });
export const contacts = axios.create({ baseURL: jsonBlobURL });
export const rickMorty = axios.create({ baseURL: rickMortyURL });

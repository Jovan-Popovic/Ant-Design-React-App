import axios from "axios";

const usersURL = "https://api.github.com/users"
const covidURL = "https://api.covid19api.com";
const jsonBlobURL = "https://jsonblob.com/api/jsonBlob";
const rickMortyURL = "https://rickandmortyapi.com/api";

export const users = axios.create({ baseURL: usersURL });
export const covid = axios.create({ baseURL: covidURL });
export const contacts = axios.create({ baseURL: jsonBlobURL });
export const rickMorty = axios.create({ baseURL: rickMortyURL });

import axios from "axios";
import { BASE_URL } from "./configs";

export const api = axios.create({
    baseURL: BASE_URL,
    params: { key: process.env.REACT_APP_GOOGLE_API_KEY, maxResults: 25, part: "snippet" }
})
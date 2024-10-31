import axios from "axios";

export const fetcher = axios.create({
  baseURL: "https://demo3246671.mockable.io/api",
  timeout: 4000,
  // withCredentials: true,
  // headers: {
  //   "Access-Control-Allow-Origin": "localhost",
  //   "Access-Control-Allow-Credentials": true,
  // },
});

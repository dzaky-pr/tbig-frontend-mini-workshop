import axios from "axios";

export const fetcher = axios.create({
  baseURL: "http://localhost:5059",
  timeout: 4000,
  withCredentials: true,
  // headers: {
  //   "Access-Control-Allow-Origin": "localhost",
  //   "Access-Control-Allow-Credentials": true,
  // },
});

// client redirect
fetcher.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      if (window.location.pathname != "/") window.location.href = "/";
    }
    return Promise.reject(error);
  },
);

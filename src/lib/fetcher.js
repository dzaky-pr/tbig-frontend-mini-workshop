import axios from "axios";

const getToken = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("Authorization");
    const jwt = token.substring(7);
    const bearerToken = `Bearer ${jwt}`;
    return bearerToken;
  }
};

export const fetcher = axios.create({
  baseURL: "http://localhost:5059",
  timeout: 4000,
  withCredentials: true,
  headers: {
    Authorization: getToken(),
  },
});

// client redirect
fetcher.interceptors.response.use(
  (response) => {
    if (response.data?.token && window.localStorage) {
      localStorage.setItem("Authorization", response.data.token);
    }
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      if (window.location.pathname !== "/") window.location.href = "/";
    }
    return Promise.reject(error);
  },
);

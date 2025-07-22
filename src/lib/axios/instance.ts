import axios from "axios";

const headers = {
  "Content-type": "application/json",
};

const instance = axios.create({
  baseURL: "https://api.jikan.moe/v4",
  headers: headers,
  timeout: 60 * 1000,
});

instance.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => Promise.reject(error)
);

export default instance;

import axios from "axios";
import store from "../store";

const apiConsumer = axios.create({
  baseURL: "https://corona.lmao.ninja/",
  timeout: 15000
});

apiConsumer.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
);

apiConsumer.interceptors.response.use(
  res => res,
  error => {
    if (error.response) {
      return Promise.reject(error);
    } else {
      store.commit("snackbar/show", {
        message: "Internet is down",
        type: "error"
      });
      return Promise.reject(error);
    }
  }
);

export default apiConsumer;

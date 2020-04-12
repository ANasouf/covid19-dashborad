import apiConsumer from "./apiService";
import store from "../store";

export default {
  async getHistoricalData() {
    try {
      const res = await apiConsumer({
        url: "v2/historical/all",
        method: "GET"
      });
      return res.data;
    } catch (error) {
      if (error.response) {
        store.commit("snackbar/show", {
          message: `${error.response.data}`,
          type: "error"
        });
      }
      return Promise.reject(error);
    }
  }
};

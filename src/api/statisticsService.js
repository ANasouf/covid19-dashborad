import apiConsumer from "./apiService";
import store from "../store";

export default {
  async getSummary(yesterday = false) {
    try {
      const res = await apiConsumer({
        url: `v2/all?yesterday=${yesterday}`,
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
  },
  async getAllCountriesData(yesterday = false) {
    try {
      const res = await apiConsumer({
        url: `v2/countries?sort=cases&yesterday=${yesterday}`,
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
  },
  async getUnitedStatesData() {
    try {
      const res = await apiConsumer({
        url: "states?sort=cases",
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

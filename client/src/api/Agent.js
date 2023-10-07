import axios from "axios";
import { message } from "antd";

const Agent = axios.create();

Agent.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
  };
  return config;
});

Agent.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    console.log(err);
    if (err.code === "ERR_NETWORK") {
      message.error("Please check your connection to server", 10);
    }
    if (!err.response) {
      message.error("Please check your connection to server", 5);
    }
    if (err.response.status === 401) {
      localStorage.removeItem("inspectToken");
      localStorage.removeItem("user");
      window.location.reload();
    }
    return Promise.reject(err);
  }
);

export default Agent;

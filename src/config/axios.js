import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    /** In dev, intercepts request and logs it into console for dev */
    if (DEBUG) {
      console.info("✉️ ", config);
    }
    return config;
  },
  (error) => {
    if (DEBUG) {
      console.error("✉️ ", error);
    }
    return Promise.reject(error);
  }
);

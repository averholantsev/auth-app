import axios from "axios";

const instance = axios.create({
  baseURL: "https://demo0163282.mockable.io/"
});

export default instance;
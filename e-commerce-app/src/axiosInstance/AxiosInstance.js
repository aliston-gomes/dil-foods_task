import axios from "axios";
const URL = "https://fakestoreapi.com";
const AxiosInstance = axios.create({
  baseURL: URL,
  headers: { "Content-type": "application/json" },
});
export default AxiosInstance;

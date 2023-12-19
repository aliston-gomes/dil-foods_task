import axios from "axios";
const URL = "http://localhost:3006";
const AxiosInstance = axios.create({
  baseURL: URL,
  headers: { "Content-type": "application/json" },
});
export default AxiosInstance;

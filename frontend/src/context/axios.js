import axios from "axios";

const instance = axios.create({
  // baseURL: "https://barcoder1.onrender.com/api",
  baseURL: "http://localhost:5000/api",
  // baseURL: "http://192.168.29.138:5000/api",
  withCredentials: true,
});

export default instance;

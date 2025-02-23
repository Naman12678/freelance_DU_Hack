import axios from "axios";
export const Axios = axios.create({
  baseURL: "http://localhost:8000" || "https://freelance-du-hack.onrender.com",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    credentials: "include",
  },
});

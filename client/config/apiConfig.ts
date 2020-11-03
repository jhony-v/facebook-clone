import axios from "axios";
import { API_KEY } from "./environmentsConfig";

export const API = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  headers: {
    "application-key": API_KEY,
  },
});

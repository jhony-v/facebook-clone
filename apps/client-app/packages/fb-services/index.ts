import axios from "axios";
import { URL_API_SELF, URL_API_WEATHER } from "@config/urlApiConfig";
import { API_KEY } from "@config/environmentsConfig";

const API = axios.create({
  baseURL: URL_API_SELF(),
  headers: {
    "application-key": API_KEY
  }
});

export const fetchAuthSignIn = () =>
  API.get("/auth/sign-in").then((e) => e.data);
export const fetchAuthSignUp = () =>
  API.get("/auth/sign-up").then((e) => e.data);
export const fetchAuthVerify = (userId: string) =>
  API.get(`/auth/verify/${userId}`).then((e) => e.data);
export const fetchGetUsers = (userId: string) =>
  API.get(`/users/${userId}`).then((e) => e.data);
export const fetchGetNewsFeed = (newsId: string) =>
  API.get(`/news-feed/${newsId}`).then((e) => e.data);
export const fetchCreateNewsFeed = () =>
  API.post("/news-feed").then((e) => e.data);
export const fetchDeleteNewsFeed = () =>
  API.delete("/news-feed").then((e) => e.data);

export const fetchWeatherFromLocation = async (lat: string, lon: string) => {
  const request = await axios.get(URL_API_WEATHER(`lat=${lat}&lon=${lon}`));
  return request.data;
};

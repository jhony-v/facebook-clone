import { API } from "@config/apiConfig";

export const fetchAuthSignIn = () => API.get(`/auth/sign-in`).then(e=>e.data); 
export const fetchAuthSignUp = () => API.get(`/auth/sign-up`).then(e=>e.data); 
export const fetchAuthVerify = (userId : string) => API.get(`/auth/verify/${userId}`).then(e=>e.data); 
export const fetchGetUsers = (userId : string) => API.get(`/users/${userId}`).then(e=>e.data); 
export const fetchGetNewsFeed = (newsId : string) => API.get(`/news-feed/${newsId}`).then(e=>e.data); 
export const fetchCreateNewsFeed = () => API.post(`/news-feed`).then(e=>e.data); 
export const fetchDeleteNewsFeed = () => API.delete(`/news-feed`).then(e=>e.data); 




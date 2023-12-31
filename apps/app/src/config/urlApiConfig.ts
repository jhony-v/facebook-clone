export const URL_API_SELF = () => "http://localhost:8000/api/v1";
export const URL_API_WEATHER = (query: string) =>
  `https://api.openweathermap.org/data/2.5/weather?${query}&units=metric&appid=6b99eed9ea0ab84f275666e390f0c0d2`;

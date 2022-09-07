import axios from "axios";
const key = "8b27e8988fd4905f877277ca425bea99";

export const fetchWeather = async ({ latitude, longitude }) => {
  console.log(latitude, longitude);
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}`
  );
  const data = response.data;
  return data;
  // return response.json();
};

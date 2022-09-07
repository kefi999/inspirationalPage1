import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../weather-api/WeatherSlice";
import taskReducer from "../tasks-todo/TaskToDoSlice";
import quoteReducer from "../quotes/QuotesSlice";
export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    task: taskReducer,
    quotes: quoteReducer,
  },
});

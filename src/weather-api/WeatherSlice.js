import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchWeather } from "./WeatherAPI";

const initialState = {
  latitude: "",
  longitude: "",
  temperature: "",
  icon: "",
  description: "",
  cityName: "",
  loading: true,
  failedToLoad: false,
};

export const fetchCurrentWeather = createAsyncThunk(
  "weather/fetchCurrent",
  async (location) => {
    console.log("asd");
    const response = await fetchWeather(location);
    console.log(response);
    return response;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: initialState,
  reducers: {
    addCoords: (state, action) => {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentWeather.pending, (state, action) => {
      console.log("PENDING");
      state.loading = true;
      state.failedToLoad = false;
    });
    builder.addCase(fetchCurrentWeather.fulfilled, (state, action) => {
      console.log("FULFILLED");
      console.log(action);
      state.loading = false;
      state.failedToLoad = false;
      state.cityName = action.payload.city.name;
      state.temperature = action.payload.list[0].main.temp;
      state.description = "Latest Temperature";
    });
    builder.addCase(fetchCurrentWeather.rejected, (state, action) => {
      console.log("REJECTED");
      state.loading = false;
      state.failedToLoad = true;
    });
  },
});

export const selectCurrentWeather = (state) => state.weather;
export const { addCoords } = weatherSlice.actions;
export default weatherSlice.reducer;

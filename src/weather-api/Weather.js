import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCoords, fetchCurrentWeather } from "./WeatherSlice";
import { selectCurrentWeather } from "./WeatherSlice";
import "bootstrap/dist/css/bootstrap.min.css";
function Weather() {
  const weather = useSelector(selectCurrentWeather);
  console.log(weather);
  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        dispatch(
          addCoords({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })
        );
      },
      (error) => {
        console.log("There is an error " + error);
      }
    );
  }, [dispatch]);

  useEffect(() => {
    if (weather.latitude && weather.longitude) {
      dispatch(
        fetchCurrentWeather({
          latitude: weather.latitude,
          longitude: weather.longitude,
        })
      );
    }
  }, [dispatch, weather.longitude, weather.latitude]);

  if (weather.loading) {
    console.log("loading if");
    return <div></div>;
  } else if (weather.failedToLoad === true && weather.loading === false) {
    console.log("failed loading if");
    return (
      <div>
        <h1>There is some error!</h1>
      </div>
    );
  } else if (weather.loading === false && weather.failedToLoad === false) {
    return (
      <div className="container bg-weather">
        <div className="card" style={{ width: 18 + "rem" }}>
          <img
            src="https://source.unsplash.com/random/?sunny"
            className="card-img-top"
            alt="Picture"
          />
          <div className="card-body">
            <h5 className="card-title">🏙️ {weather.cityName}</h5>
            <p className="card-text">{weather.description}</p>
            <p className="card-text">
              <b>{weather.temperature}</b> Fahrenheit (°F)
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;

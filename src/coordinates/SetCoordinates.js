import React, { useEffect, useState } from "react";
import { key } from "../global-variables/Default-Values";
export default function SetCoordinates() {
  const [lonText, changeLonText] = useState();
  const [latText, changeLatText] = useState();
  const [defaultCoords, setDefaultCoords] = useState(
    getSessionStorageOrDefault(key, [51.5, 0.11])
  );

  useEffect(() => {
    let coordsLocal = [lonText, latText];
    console.log(coordsLocal);
    console.log(lonText, latText);
    sessionStorage.setItem(key, JSON.stringify(coordsLocal));
  }, [lonText, latText]);

  function getSessionStorageOrDefault(key, defualtValue) {
    const stored = sessionStorage.getItem(key);
    if (!stored) {
      return defualtValue;
    }
    return JSON.parse(stored);
  }

  if (sessionStorage.getItem(key) === null) {
    alert("No coords");
  }

  //************** */

  const getCoords = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;

      changeLatText(parseFloat(lat.toFixed(2)));
      changeLonText(parseFloat(long.toFixed(2)));
    });
  };
}

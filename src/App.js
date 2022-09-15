import React from "react";
import ReactDOM from "react-dom";
import TasksToDo from "./tasks-todo/TasksToDo";
import Weather from "./weather-api/Weather";
import Quotes from "./quotes/Quotes";
import "./App.css";
function App() {
  return (
    <div className="mainSection">
      <Weather />
      <TasksToDo />
      <Quotes />
    </div>
  );
}

export default App;

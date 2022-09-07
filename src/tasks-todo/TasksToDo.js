import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { addTask, selectTask } from "./TaskToDoSlice";
import { v4 as uuidv4 } from "uuid";
export default function TasksToDo() {
  const [input, setInput] = useState("");
  const [arrayTp, setArrayTp] = useState([]);

  console.log(uuidv4());
  const dispatch = useDispatch();
  const tasks = useSelector(selectTask);

  const addToDoTask = (e) => {
    e.preventDefault();
    dispatch(addTask({ name: input }));
    setInput("");
  };
  const printToDoTask = () => {
    setInput("");
  };

  useEffect(() => {
    Object.keys(tasks).map((task) => {
      setArrayTp(tasks[task]);
    });
  }, [tasks, setArrayTp]);

  return (
    <div className="container mt-3 offset-md-5">
      <div>
        <div>
          <form type="submit" onSubmit={addToDoTask}>
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              id="inputField"
              value={input}
            />
          </form>
        </div>
        <button onClick={printToDoTask}>Print</button>
        <h1>Tasks</h1>
        <ul className="list-group">
          {arrayTp.map((arr) => {
            return (
              <li key={uuidv4()} className="list-group-item">
                {arr}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

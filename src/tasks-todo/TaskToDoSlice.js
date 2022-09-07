import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  taskName: [],
};

const tasksSlice = createSlice({
  name: "task",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      console.log(action.payload.name);
      state.taskName.push(action.payload.name);
    },
  },
});

export const selectTask = (state) => state.task;
export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;

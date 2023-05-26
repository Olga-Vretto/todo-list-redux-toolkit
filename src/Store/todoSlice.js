import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  taskName: '',
  taskList: [],
  taskId: 1,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTaskName: (state, action) => {
      state.taskName = action.payload;
    },
    addTask: (state) => {
      state.taskList.push({ task: state.taskName, id: state.taskId, isDone: false });
      state.taskName = '';
      state.taskId++;
    },
    toggleTask: (state, action) => {
      const task = state.taskList.find((task) => task.id === action.payload);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
    deleteTask: (state, action) => {
      state.taskList = state.taskList.filter((task) => task.id !== action.payload);
    },
  },
});

export const { setTaskName, addTask, toggleTask, deleteTask } = todoSlice.actions;

export default todoSlice.reducer;

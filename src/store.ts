import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = { value: { username: '', password: '' } };

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialState.value;
    },
  },
});

const tasks = {
  value: [
    {
      id: 0,
      title: 'First task',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et rem, saepe pariatur molestias atque quas.',
    },
  ],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState: tasks,
  reducers: {
    setTask: (state, action) => {
      let newState = state.value.slice();
      newState.push(action.payload);
      state.value = newState;
    },
    deleteTask: (state, action) => {
      state.value = state.value.filter((task) => task.id !== action.payload.id);
    },
  },
});

const doneTasks = { value: [] };

const doneTaskSlice = createSlice({
  name: 'done-tasks',
  initialState: doneTasks,
  reducers: {
    setDoneTask: (state, action) => {
      let newState = state.value.slice();
      newState.push(action.payload);
      state.value = newState;
    },
    deleteDoneTask: (state, action) => {
      state.value = state.value.filter((task: any) => task.id !== action.payload.id);
    },
  },
});

export const { login, logout } = userSlice.actions;
export const { setTask, deleteTask } = taskSlice.actions;
export const { setDoneTask, deleteDoneTask } = doneTaskSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    task: taskSlice.reducer,
    doneTask: doneTaskSlice.reducer,
  },
});

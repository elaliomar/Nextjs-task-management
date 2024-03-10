import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../redux/slice/taskSlice';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
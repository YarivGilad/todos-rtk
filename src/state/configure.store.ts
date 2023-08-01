import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos.slice";


// export const store = configureStore({
//   reducer: todosReducer
// });

export const createStore = () =>
  configureStore({
    reducer: todosReducer
});

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
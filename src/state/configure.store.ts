import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos.slice";
import { get_local_state, save_state_locally } from "../middleware/localstorage.middleware";
import { logger } from "../middleware/log.middleware";

const initialState = {
  currentFilter: "All",
  todos: [],
  hasCompleted: false,
  activeCounter: 0,
};

const getValidatedState = () => {
  const localState = get_local_state();
  return {
    ...initialState,
    ...localState,
    todos: localState?.todos || [],
  };
};

// export const store = configureStore({
//   reducer: todosReducer
// });

export const createStore = () =>
  configureStore({
    reducer: todosReducer,
    preloadedState: getValidatedState(),
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger, save_state_locally]
  });

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
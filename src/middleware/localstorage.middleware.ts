import { Action, Dispatch, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";

const key = "app_data";

export const save_state_locally: Middleware = (store: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
  next(action);
  localStorage.setItem(key, JSON.stringify(store.getState()));
};

export function get_local_state() {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : {};
}

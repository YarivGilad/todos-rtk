import { Action, Dispatch, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";

export const logger = (store: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
    console.group(action.type);
    console.log(
      `%c prev state`,
      "background: magenta; color: blue",
      store.getState()
    );
    console.info("action", action);
    next(action);
    console.log(
      `%c next state`,
      "background: yellow; color: blue",
      store.getState()
    );
    console.groupEnd();
};
  
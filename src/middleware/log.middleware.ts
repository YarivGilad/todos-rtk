// import { Action, Dispatch, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";


// export const Logger: Middleware =
//   (api: MiddlewareAPI<void>) => 
//   (next: Dispatch<void>) => 
//   <A extends Action>(action: A) => {
//     // Do stuff
//     console.log(api.toString());
//    return next(action);
//   };

// export const Logger2: Middleware = api => next => action => {
//   // Do stuff
//   return next(action);
// };

// export const logger = store => next => action => {
//     console.group(action.type);
//     console.log(
//       `%c prev state`,
//       "background: magenta; color: blue",
//       store.getState()
//     );
//     console.info("action", action);
//     next(action);
//     console.log(
//       `%c next state`,
//       "background: yellow; color: blue",
//       store.getState()
//     );
//     console.groupEnd();
// };
  
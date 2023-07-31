import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createShortId as shortID } from "../utils/string.utils.ts";
import { ITodo, VisabilityFilter } from "../types.ts";

const initialState = {
  currentFilter: VisabilityFilter.All,
  todos: [] as ITodo[],
  hasCompleted: false,
  activeCounter: 0,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: shortID(),
        title: action.payload,
        completed: false,
        show: true,
      });
      state.activeCounter++;
    },
    toggle: (state, action: PayloadAction<string>) => {
      for (const todo of state.todos) {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
          if (todo.completed === true) {
            state.activeCounter--;
            state.hasCompleted = true;
          } else {
            state.activeCounter++;
            state.hasCompleted = state.todos.some(
              (todo: ITodo) => todo.completed === true
            );
          }
          break;
        }
      }
    },
    remove: (state, action: PayloadAction<string>) => {
      const index = state.todos.findIndex(
        (todo: ITodo) => todo.id === action.payload
      );
      if (state.todos[index].completed === false) state.activeCounter--;
      state.todos.splice(index, 1);
      state.hasCompleted = state.todos.some(
        (todo: ITodo) => todo.completed === true
      );
    },
    removeCompleted: (state) => {
      state.todos = state.todos.filter(
        (todo: ITodo) => todo.completed === false
      );
      state.hasCompleted = false;
    },
    // activeCounter : (state)=> {
    //     return state.todos.reduce(
    //       (total: number, todo: ITodo) => (todo.completed ? total : total + 1),
    //       0
    //     );
    // },

    // hasCompleted : (state)=> {
    //     return state.todos.some((todo: ITodo) => todo.completed === true);
    // },

    filterTodos: (state, action: PayloadAction<VisabilityFilter>) => {
      state.currentFilter = action.payload;
      state.todos.forEach((todo: ITodo) => {
        switch (action.payload) {
          case VisabilityFilter.All:
            todo.show = true;
            break;
          case VisabilityFilter.Active:
            todo.show = todo.completed === false;
            break;
          case VisabilityFilter.Completed:
            todo.show = todo.completed === true;
            break;
        }
      });
    },
  },
});

export default todosSlice.reducer;
export const { addTodo, toggle, remove, removeCompleted, filterTodos } =
  todosSlice.actions;
// console.log({ todosSlice: todosSlice });

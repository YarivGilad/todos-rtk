import { useState } from "react";
import {
  TodoItemBox,
  Check,
  Uncheck,
  Remove,
  TodoTitle
} from "./TodoItem.styles";
import { ITodo } from "../../types.ts";
import { toggle, remove } from "../../state/todos.slice.ts";
import { useDispatch } from "react-redux";

export function TodoItem({ id, completed, title }: ITodo) {

  const [hovered, setHovered] = useState<boolean>(false);
  const dispatch = useDispatch();

  return (
    <TodoItemBox title="todo item"
                 onMouseEnter={() => setHovered(true)} 
                 onMouseLeave={() => setHovered(false)}>
      <div onClick={() => dispatch(toggle(id))}>
        {completed ? <Check /> : <Uncheck />}
      </div>
      <TodoTitle $completed={completed}>{title}</TodoTitle>
      { hovered && <Remove onClick={() => dispatch(remove(id))} title="remove icon" /> }
    </TodoItemBox>
  );
}

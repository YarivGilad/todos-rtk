import { Box, Button, LinkButton } from "./Footer.styles";
import { VisabilityFilter } from "../../types.ts";
import { HBox } from "../../styles/containers.styled";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/configure.store.ts";
import { filterTodos, removeCompleted } from "../../state/todos.slice.ts";

export const Footer = () => {

  const {
    activeCounter,
    currentFilter,
    hasCompleted
  } = useSelector((state: RootState)=> state);

  const dispatch = useDispatch()

  return (
    <Box title="footer">
      { activeCounter } items left
      { hasCompleted &&
        <HBox title="controls">
          {Object.keys(VisabilityFilter).map((visFilter) => (
            <Button key={visFilter}
                    onClick={()=> dispatch(filterTodos(visFilter as VisabilityFilter))}
                    selected={currentFilter === visFilter}>
              {visFilter}
            </Button>
          ))}
          <LinkButton onClick={()=> dispatch(removeCompleted())}>Clear Completed</LinkButton>
        </HBox> }
    </Box>
  );
};

export default Footer;

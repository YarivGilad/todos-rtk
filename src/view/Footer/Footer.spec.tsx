import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from "./Footer.view";
import { createStore } from "../../state/configure.store.ts";
import { addTodo, toggle } from '../../state/todos.slice.ts';
import { Provider } from 'react-redux';


let store = createStore();

beforeEach(() => {
  store = createStore()
});

test('controls visible - when some tasks completed', () => {
  // Arrange
  store.dispatch(addTodo('some fake title'));
  const {id} = store.getState().todos[0];
  store.dispatch(toggle(id));
  // Act
  render(
    <Provider store={store}>
      <Footer />
    </Provider>
  );
  //Assert
  const controls = screen.getByTitle(/controls/i);
  expect(controls).toBeInTheDocument();
});

test('controls should not exist - when no tasks completed', () => {

  render(
    <Provider store={store}>
      <Footer />
    </Provider>
  );
  // .getBy throw an error if item doesn't exist
  // .queryBy return null if item doesn't exist
  const controls = screen.queryByTitle(/controls/i);
  expect(controls).toBeNull();
});

